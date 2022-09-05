import React from "react";
// import Styles from './Components/styles.module.css'

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
            <td>{props.Images}</td>
            <td>{props.Item}</td>
            <td>{props.Coustmer_Name}</td>
            <td>{props.Total_Amount}</td>
            <td>
              {" "}
              <div>{props.Status}</div>
            </td>
          </tr>
          {/*   class={Styles.Status} */}
        </tbody>
      </table>
    </>
  );
}
