// This is a HOC for fetching data on the server side

import React from 'react';

const SSR = (Page) => {
  class SSR extends React.Component {
    static getInitialData(ctx) {
      // Need to call the wrapped components getInitialData if it exists
      return Page.getInitialData
        ? Page.getInitialData(ctx)
        : Promise.resolve(null);
    }

    constructor(props) {
      super(props);
      this.state = {
        data: props.initialData,
        isLoading: false,
      };
      this.ignoreLastFetch = false;
    }

    componentDidMount() {
      if (!this.state.data) {
        this.fetchData();
      }
    }

    componentWillUnmount() {
      this.ignoreLastFetch = true;
    }

    fetchData = () => {
      // if this.state.data is null, that means that the we are on the client.
      // To get the data we need, we just call getInitialData again on mount.
      if (!this.ignoreLastFetch) {
        this.setState({ isLoading: true });
        this.constructor.getInitialData({ match: this.props.match }).then(
          data => {
            this.setState({ data, isLoading: false });
          },
          error => {
            this.setState(() => ({
              data: { error },
              isLoading: false,
            }));
          }
        );
      }
    };

    render() {
      const { initialData, ...rest } = this.props;

      const data = Array.isArray(this.state.data)
        ? this.state.data.reduce((prev, curr) => ({ ...prev, ...curr }), {})
        : this.state.data;

      return (
        <Page
          {...rest}
          refetch={this.fetchData}
          isLoading={this.state.isLoading}
          {...data}
        />
      );
    }
  }

  SSR.displayName = `SSR(${getDisplayName(Page)})`;
  return SSR;
}

function getDisplayName(WrappedComponent) {
  return WrappedComponent.displayName || WrappedComponent.name || 'Component';
}

export default SSR;
