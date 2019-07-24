import React, { useEffect, useCallback, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getHeadlines } from '../actions/news';
import Headline from '../components/Headline';
import Loading from '../components/Loading';
import Error from '../components/Error';
import withCategories from '../HOCs/withCategories';

export const Home = () => {
  const dispatch = useDispatch();
  const { headlines, isFetching, error } = useSelector(state => state.news);
  const fetchHeadlines = useCallback(
    () => dispatch(getHeadlines()),
    [dispatch],
  );

  useEffect(() => {
    fetchHeadlines();
  }, []);

  // This is an example on how data should be fetch on the server side rendering
  // we also would need to change this component from a function to a Class extending from React component
  // This works similarly to Next.js's `getInitialProps`
  // static getInitialData() {
  //   return fetchHeadlines();
  //   // return Promise.all([fetchCategories(), fetchHeadlines()]);
  // }

  if (isFetching) {
    return <Loading />
  }

  return (
    <Fragment>
      {
        error
          ? <Error message={'Error while fetching news'} />
          : headlines &&
              headlines.map(
                (headline, index) => (
                  <Headline key={index} headline={headline} />
                )
              )
      }
    </Fragment>
  );
}

export default withCategories(Home);
