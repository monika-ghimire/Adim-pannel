import React from "react";
import NavBar from "./NavBar";
import OrderList from "../pages/Orders/OrderList";

export default function Orders() {
  return (
    <>
      <div class="row">
        <div class="col-2">
          <NavBar />
        </div>
        <div class="col-10">
          <h1>Orders</h1>
          <div class="container-fluid">
            <OrderList />
          </div>
        </div>
      </div>
    </>
  );
}

//correct spelling is customer
