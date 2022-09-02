import React from 'react'
import NavBar from './NavBar'
import styles from './styles.module.css'

export default function Coustmers() {
  return (

  <>
  <div class='row'>
    <div class='col'></div>
    <div className={styles.containersNav}><NavBar/></div>
     <div class='col'> <h1>This is Coustmer </h1></div>
     </div>
   </>
  )
}
