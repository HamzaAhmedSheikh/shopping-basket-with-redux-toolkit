import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartItems from "../components/cart/CartItem";
import { ProductList } from "../components/product/ProductList";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import './Navbar.css';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,    
    marginLeft: "10%",
  },  
}));


 export default function Navbar() { 
      
  const classes = useStyles();
    return (
        <Router>
          <div className={classes.root}>
            <AppBar position="static" className="Appbar">
              <Toolbar>          
                <Typography variant="h4" className={classes.title}>
                  <strong className="logo"> NIKE </strong> 
                </Typography>

                <ul>
                  <li> <Link to="/"> Home </Link>  </li>
                  <li> <Link to="/cart"> Cart  </Link> </li>
                </ul>
              </Toolbar>
            </AppBar>
          </div>  
         
          <Switch>
            <Route exact path="/"> <ProductList /> </Route>  
            <Route exact path="/cart">  <CartItems /> </Route>
          </Switch>        
        </Router>        
    )
 }
