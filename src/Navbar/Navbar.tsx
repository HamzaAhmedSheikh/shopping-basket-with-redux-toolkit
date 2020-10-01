import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartItems from "../components/cart/CartItem";
import { ProductList } from "../components/product/ProductList";

 export default function Navbar() {
    return (
        <Router>            
          <div>
           <div>
             <nav>
              <Link to="/"> This is a Logo. </Link>   

              <ul>
               <li> <Link to="/"> Home </Link>  </li>  
               <li> <Link to="/cart"> Cart </Link> </li>
              </ul>
             </nav>  

             <h2> Ecommerce App with ReduxToolkit.  </h2>
           </div>  
             
            <Switch>
             <Route exact path="/"> <ProductList /> </Route>  
             <Route exact path="/cart">  <CartItems /> </Route>
            </Switch> 
          </div>  
        </Router>        
    )
 }
