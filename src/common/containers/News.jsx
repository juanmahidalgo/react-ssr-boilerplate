import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { getHeadlines } from '../actions/news';
import Headline from '../components/Headline';
import Loading from '../components/Loading';
import Error from '../components/Error';
import withCategories from '../HOCs/withCategories';

const NewsContainer = ({ match: { params: { category } } }) => {
  const dispatch = useDispatch();
  const { headlines, isFetching, error } = useSelector(state => state.news);

  useEffect(() => {
    dispatch(getHeadlines({ category}));
  }, [category]);

  if (isFetching) {
    return <Loading />
  }

  return (
    error 
      ? <Error message={`Error while fetching news for ${category}`} />
      : (
        <Fragment>
          {headlines &&
            headlines.map(
              (headline, index) => (
                <Headline key={index} headline={headline} />
              )
            )
          }
        </Fragment>
      )
  );
}

NewsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object.isRequired,
  })
}

export default compose(
  withCategories,
  withRouter,
)(NewsContainer)
