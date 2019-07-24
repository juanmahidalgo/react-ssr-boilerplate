import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Categories from '../containers/Categories';

const useStyles = makeStyles(theme => ({
  newsContainer: {
    height: '90vh',
    overflowY: 'scroll',
    flex: '1',
  },
  mainWrapper: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection:'column',
    },

  },
}));

const withCategories = Component => {
  const withCategoriesComponent = () => {
    const classes = useStyles();
    return (
      <div className={classes.mainWrapper}>
        <Categories />
        <div className={classes.newsContainer}>
          <Component />
        </div>
      </div>
    )
  }
  return withCategoriesComponent;
}

export default withCategories;
