import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
  loadingWrapper: {
    alignItems: 'center',
    display: 'flex',
    height: '100%',
    justifyContent: ' center',
  }
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingWrapper}>
      <CircularProgress className={classes.progress} />
    </div>
  );
}


export default Loading;

