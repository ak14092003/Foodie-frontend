
import './App.css';
import Home from './screens/Home';
import React from "react";
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';//cause carousel uses some js also so we need to import
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import SignUp from './screens/SignUp.jsx';
import { CartProvider } from './components/ContextReducer.jsx';
import MyOrder from './screens/MyOrder.jsx';



function App() {
  return (
    <CartProvider>
    <Router>
    <div>
    <Routes> 
      <Route exact path= "/" element= {<Home/>} />
      <Route exact path="/login" element= {<Login/>} />
      <Route exact path="/createuser" element= {<SignUp/>} />
      <Route exact path="/myOrder" element= {<MyOrder/>} />
    </Routes> 
     </div>
    </Router>
    </CartProvider>
  );
}

export default App;
