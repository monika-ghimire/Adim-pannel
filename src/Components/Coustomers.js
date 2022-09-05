import React from 'react'
import CoustomersList from '../pages/CoustomersList'
import NavBar from './NavBar'


export default function Coustmers() {

 
  return (

  <>
  <div class='row'>
    <div class='col-2'><NavBar/></div>
     
     <div class='col-10'>
     <h2>Customers</h2>
      
       <CoustomersList/>
     </div>
   </div>
   </>
  )
}
