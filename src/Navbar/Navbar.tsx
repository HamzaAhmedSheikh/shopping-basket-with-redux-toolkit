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
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
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
            <li> <Link to="/cart"> Cart </Link> </li>
          </ul>
        </Toolbar>
      </AppBar>
    </div> 
          {/* <div>
            <AppBar position="static" className="Appbar">
              <Toolbar>                
                <h1>
                  <Link to="/" className="logo">Nike</Link>
                </h1>              
                  
                  <ul>
                   <li> <Link to="/"> Home </Link>  </li>  
                   <li> <Link to="/cart"> Cart </Link> </li>
                   </ul>                            
                        
             </Toolbar>
          </AppBar> */ }

            <h2> Ecommerce App with ReduxToolkit.</h2>
            <Switch>
             <Route exact path="/"> <ProductList /> </Route>  
             <Route exact path="/cart">  <CartItems /> </Route>
            </Switch>        
        </Router>        
    )
 }
