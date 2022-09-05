import React from "react";
import Shake from "../../shake.png";
import shoe from "../../shoe.png";
import tomato from "../../tomato.png";
import ice from "../../ice.png";
import styles from "../../../src/Components/styles.module.css";

export default function OrderList() {
  let order_list = [
    {
      Images: Shake,
      Item: "shake",
      Coustmer_Name: "apple boy",
      Total_Amount: "$10",
      Status: "Pending",
    },
    {
      Images: shoe,
      Item: "shoes",
      Coustmer_Name: "apple boy",
      Total_Amount: "$10",
      Status: "complete",
    },
    {
      Images: tomato,
      Item: "Tomato",
      Coustmer_Name: "apple boy",
      Total_Amount: "$10",
      Status: "success",
    },
    {
      Images: ice,
      Item: "ice-cream",
      Coustmer_Name: "apple boy",
      Total_Amount: "$10",
      Status: "active",
    },
    {
      Images: Shake,
      Item: "shake",
      Coustmer_Name: "apple boy",
      Total_Amount: "$10",
      Status: "cancle",
    },
  ];

  const getStatuscolor = (Status) => {
    if (Status === "active") {
      return styles.activehighLight;
    }
    if (Status === "cancle") {
      return styles.cancleHighLight;
    }
    if (Status === "Pending") {
      return styles.pendinghLight;
    }
    if (Status === "complete") {
      return styles.completehighLight;
    }
    if (Status === "success") {
      return styles.sucesshighLight;
    }
  };

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
          {order_list.map((x) => (
            <tr>
              <td>
                <img src={x.Images} alt="empty" />
              </td>
              <td>{x.Item}</td>
              <td>{x.Coustmer_Name}</td>
              <td>{x.Total_Amount}</td>
              <td>
                {" "}
                <div class={getStatuscolor(x.Status)}>{x.Status}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
