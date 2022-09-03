import React from 'react'

export default function OrderList(props) {
  return (

   <>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Images</th>
      <th scope="col">Item</th>
      <th scope="col">Coustmer Name</th>
      <th scope="col">Total Amount</th>
      <th scope="col">Status</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.imges}</td>
      <td>{props.Item}</td>
      <td>{props.Coustmer_Name}</td>
      <td>{props.Total_Amount}</td>
      <td>{props.Status}</td>
    </tr>
  </tbody>
</table>
   </>
  )
}
