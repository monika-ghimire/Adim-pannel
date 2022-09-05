import React from 'react'
import Orders from './Orders';
import Home from './Home'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Coustmers from './Coustomers';
import LoginPage from './LoginPage';



export default function RouterHandeler() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}>
          </Route>

          <Route path="/order" element={<Orders />}>
          </Route>

          <Route path="/Customers" element={<Coustmers/>}>
          </Route>
          <Route path="/" element={<LoginPage/>}>
          </Route> 
      
        </Routes>
      </BrowserRouter>
    </>
  )
}
