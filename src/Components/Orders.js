import React from 'react'
import NavBar from './NavBar' 
import OrderList from '../pages/Orders/OrderList'

export default function Orders() {
  let OrdersList =[
      {   Images:"this is images", Item:"apple" , Coustmer_Name:"apple boy", Total_Amount:"$10", Status:"Pending"},
      {   Images:"this is images", Item:"apple" , Coustmer_Name:"apple boy", Total_Amount:"$10", Status:"Pending"},
      {   Images:"this is images", Item:"apple" , Coustmer_Name:"apple boy", Total_Amount:"$10", Status:"Pending"},
      {   Images:"this is images", Item:"apple" , Coustmer_Name:"apple boy", Total_Amount:"$10", Status:"Pending"},
      {   Images:"this is images", Item:"apple" , Coustmer_Name:"apple boy", Total_Amount:"$10", Status:"Pending"}
  ]
  return (
   <>
 <div class='row'>
    <div class='col-2'><NavBar/></div>
     <div class='col-10'> 
     <h1>Orders</h1>
     <div class="container-fluid">
     { OrdersList.map((x) => (
      <OrderList  Images={x.Images} Item={x.Item} Coustmer_Name={x.Coustmer_Name} Total_Amount={x.Total_Amount} />
      ))}
     </div>


     </div>
   </div>
   </>
  )
}


//correct spelling is customer