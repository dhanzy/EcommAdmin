import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Box, Grid, makeStyles, MuiThemeProvider, CssBaseline } from '@material-ui/core';

import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import UserProfile from './Pages/UserProfile/UserProfile';
import Profile from './Pages/Profile/Profile';
import Products from './Pages/Products/Products';
import Orders from './Pages/Orders/Orders';
import Invoice from './Pages/Invoice/Invoice';
import NavBar from './components/NavBar/NavBar';
import SidePanel from './components/SidePanel/SidePanel';
import theme from './Themes/theme';
import './App.css';

const useStyles = makeStyles((theme) => ({
  sideContent: {
    overflow: 'hidden',
  },
  mainContent: {
      flex: 1,
  }
}));


function App(): JSX.Element {
  const classes = useStyles();
  const [sideBar, setSideBar] = React.useState<Boolean>(false)

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <Box>
          <CssBaseline />
          <Grid container>
            <SidePanel sideBar={sideBar} setSideBar={setSideBar}/>
            <Grid item className={classes.mainContent}>
              <NavBar setSideBar={setSideBar} sideBar={sideBar} />
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
                <Route exact path="/user/:userID">
                  <UserProfile/>
                </Route>
                <Route exact path="/users">
                  <Users />
                </Route>
                <Route exact path="/orders">
                  <Orders />
                </Route>
                <Route exact path="/products">
                  <Products />
                </Route>
                <Route exact path="/invoice">
                  <Invoice />
                </Route>
              </Switch>
            </Grid>
          </Grid>
        </Box>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
