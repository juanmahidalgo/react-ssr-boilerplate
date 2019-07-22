import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  chip: {
    margin: theme.spacing(0.5),
    textTransform: 'capitalize',
  },
}));

const Category = ({ category, handleClick }) => {
  const classes = useStyles();

  return (
    <Chip
        label={category}
        className={classes.chip}
        clickable
        onClick={ handleClick }
      />
  );
};

Category.propTypes = {
  category: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Category;

