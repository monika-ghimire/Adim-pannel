import React from 'react'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
export default function NavBar() {
  return (
 <>

<div className={styles.containersNav}>
<ul class="nav flex-column">
  <li class="nav-item">
    <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Order">Order</Link>
  </li>
  <li class="nav-item">
    <Link class="nav-link" to="/Customers">Customers</Link>
  </li>
 
</ul>
</div>
 </>
  )
}
