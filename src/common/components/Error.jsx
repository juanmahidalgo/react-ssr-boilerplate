import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const SVG = ({ className }) =>
  <svg className={className} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    viewBox="0 0 50 50" style={{ enableBackground: 'new 0 0 50 50' }} xmlSpace="preserve">
    <circle style={{ fill: '#D75A4A' }} cx="25" cy="25" r="25" />
    <polyline style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeLinecap: 'round', strokeMiterlimit: 10 }} points="16,34 25,25 34,16" />
    <polyline style={{ fill: 'none', stroke: '#FFFFFF', strokeWidth: 2, strokeLinecap: 'round', strokeMiterlimit: 10 }} points="16,16 25,25 34,34" />
  </svg>

SVG.propTypes = {
  className: PropTypes.string,
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginTop: '2rem',
    display: 'flex',
  },
  svg: {
    height: '4rem',
    marginRight: '1rem',
  },
  textWrapper: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

const ErrorContainer = ({ message }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <SVG className={classes.svg} />
      <div className={classes.textWrapper}>
        <Typography variant="h5" component="h3">
          Error
        </Typography>
        <Typography component="p">
          {message}
        </Typography>
      </div>
    </Paper>
  );
}

ErrorContainer.propTypes = {
  message: PropTypes.string,
}

export default ErrorContainer;

