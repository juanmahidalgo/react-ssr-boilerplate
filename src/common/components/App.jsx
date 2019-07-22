import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      margin: 0,
    },
  },
  body: {
    margin: 0,
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainWrapper: {
    display: 'flex',
    flexDirection: 'column',
  }
}));

const App = ({ routes, initialData }) => {
  const classes = useStyles();

  return routes
    ? <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <NavLink to="/" color="inherit" className={classes.link}> News </NavLink>
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.mainWrapper}>
        <Switch>
          {routes.map((route, index) => {
            let dataFetched = initialData[index] || null;
            return (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                render={props =>
                  React.createElement(route.component, {
                    ...props,
                    initialData: dataFetched,
                  })}
              />
            );
          })}
        </Switch>
      </div>
    </div>
    : null;
};

App.propTypes = {
  routes: PropTypes.array.isRequired,
  initialData: PropTypes.array,
}

export default App;
