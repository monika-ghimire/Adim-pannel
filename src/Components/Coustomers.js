import React from 'react'
import CoustomersList from '../pages/CoustomersList'
import NavBar from './NavBar'


export default function Coustmers() {
  let CoustmersListHold =[
    {  Images:"this is images", Name:"salina" , Project_Name:"apple", Status:"10", Weeks:"Pending" ,Budget:"10"},
    {Images:"this is images", Name:"monika" , Project_Name:"good ", Status:"10", Weeks:"Pending" ,Budget:"10"},
    {Images:"this is images", Name:"suraj" , Project_Name:"fast", Status:"10", Weeks:"Pending" ,Budget:"10"},
    {Images:"this is images", Name:"raj" , Project_Name:"super fast", Status:10, Weeks:"Pending" ,Budget:10},
  ] 
  return (

  <>
  <div class='row'>
    <div class='col-2'><NavBar/></div>
     
     <div class='col-10'>
     <h2>Coustmers</h2>
      { CoustmersListHold.map((x) => (
      <CoustomersList  Images={x.Images} Name={x.Name} Project_Name={x.Project_Name} Status={x.Status} Budget={x.Budget}/>
      ))}
     </div>
   </div>
   </>
  )
}
