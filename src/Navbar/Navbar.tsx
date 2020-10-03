import React from "react";
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Cart } from "../components/cart/CartItem";
import  ProductList  from "../components/product/ProductList";
import { ProductItem } from '../global'
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
   
  const products = useSelector((state: ProductItem[]) => state)
  let totalQ = products.filter(product => product.added).length;

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
                  <li> <Link to="/cart"> Cart ({totalQ}) </Link> </li>
                </ul>
              </Toolbar>
            </AppBar>
          </div>  
         
          <Switch>
            <Route exact path="/"> <ProductList /> </Route>  
            <Route exact path="/cart">  <Cart /> </Route>
          </Switch>        
        </Router>        
    )
 }
