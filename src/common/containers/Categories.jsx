import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { makeStyles } from '@material-ui/core/styles';

import { changePage } from '../actions/news';
import { getCategories } from '../actions/categories';
import Category from '../components/Category';
import Loading from '../components/Loading';

const useStyles = makeStyles(theme => ({
  categoryWrapper: {
    margin: '2rem',
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'wrap',
      flexDirection: 'row', 
    },
    
  }
}));

export const Categories = ({ history }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { categories, isFetching } = useSelector(state => state.categories);
  const handleClick = category => {
    history.push(`/news/category/${category}`);
    dispatch(changePage());
  }

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  if (isFetching) {
    return <Loading />;
  }

  return (
    <div className={classes.categoryWrapper}>
      {categories &&
        categories.map(
          (category, index) => (
            <Category key={index} category={category} handleClick={() => handleClick(category)} />
          )
        )
      }
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array,
  history: PropTypes.object.isRequired,
};

export default compose(
  withRouter,
)(Categories);

