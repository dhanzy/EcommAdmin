import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Box, Grid, makeStyles, MuiThemeProvider, CssBaseline } from '@material-ui/core';

import Home from './Pages/Home/Home';
import Users from './Pages/Users/Users';
import UserProfile from './Pages/UserProfile/UserProfile';
import Profile from './Pages/Profile/Profile';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import Orders from './Pages/Orders/Orders';
import Invoice from './Pages/Invoice/Invoice';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import NavBar from './components/NavBar/NavBar';
import SidePanel from './components/SidePanel/SidePanel';
import NewProduct from './Pages/NewProduct/NewProduct';
import ViewOrder from './Pages/ViewOrder/ViewOrder';
import theme from './Themes/theme';
import { AuthProvider } from './context/useAuthContext';
import { ProductProvider } from './context/productContext';
import { InvoiceProvider } from './context/invoiceContext';
import { OrderProvider } from './context/orderContext';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import { useAuth } from './context/useAuthContext';

import './App.css';

const useStyles = makeStyles((theme) => ({
  sideContent: {
    overflow: 'hidden',
  },
  mainContent: {
      flex: 1,
  }
}));


interface NavSideProps {
  children: JSX.Element | JSX.Element[];
}

const NavSide:React.FC<NavSideProps> = (props) => {
  const classes = useStyles();
  const [sideBar, setSideBar] = React.useState<Boolean>(false)

  return (
    <Grid container>
        <SidePanel sideBar={sideBar} setSideBar={setSideBar}/>
        <Grid item className={classes.mainContent}>
          <NavBar setSideBar={setSideBar} sideBar={sideBar} />
          {props.children}
        </Grid>
    </Grid>
  )
}


function App(): JSX.Element {
  const { loggedInUser } = useAuth();

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <ProductProvider>
            <InvoiceProvider>
              <OrderProvider>
                <Box>
                  <CssBaseline />
                    <Switch>
                      <ProtectedRoute exact path="/">
                        <NavSide>
                          <Home />
                        </NavSide>
                      </ProtectedRoute>
                      <ProtectedRoute exact path="/profile">
                        <NavSide>
                          <Profile />
                        </NavSide>
                      </ProtectedRoute>
                      <ProtectedRoute exact path="/user/:userID">
                        <NavSide>
                          <UserProfile />
                        </NavSide>
                      </ProtectedRoute>
                      <ProtectedRoute exact path="/users">
                        <NavSide>
                          <Users />
                        </NavSide>
                      </ProtectedRoute>
                      <ProtectedRoute exact path="/orders">
                        <NavSide>
                          <Orders />
                        </NavSide>
                      </ProtectedRoute>
                      <ProtectedRoute exact path="/products">  
                        <NavSide>
                          <Products />
                        </NavSide>
                      </ProtectedRoute>
                      <ProtectedRoute exact path="/product">  
                        <NavSide>
                          <NewProduct />
                        </NavSide>
                      </ProtectedRoute>
                      <ProtectedRoute exact path="/product/:productId">  
                        <NavSide>
                          <Product />
                        </NavSide>
                      </ProtectedRoute>
                      <ProtectedRoute exact path="/order/:orderId">  
                        <NavSide>
                          <ViewOrder />
                        </NavSide>
                      </ProtectedRoute>
                      <ProtectedRoute exact path="/invoice">
                        <NavSide>
                          <Invoice />
                        </NavSide>
                      </ProtectedRoute>
                      <Route exact path="/login">
                        {loggedInUser ? <Redirect to="/" /> : <Login />}
                      </Route>
                      <Route exact path="/register">
                        {loggedInUser ? <Redirect to="/" /> : <Register />}
                      </Route>
                    </Switch>
                </Box>
              </OrderProvider>
            </InvoiceProvider>
          </ProductProvider>
        </AuthProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
