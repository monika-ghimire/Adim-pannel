import React from "react";
import ice from "../../src/ice.png";
import Shake from "../../src/shake.png";
import shoe from "../../src/shoe.png";
import tomato from "../../src/tomato.png";
import styles from "../../src/Components/styles.module.css";
import Active from "../../src/active.png";
import Deactive from "../../src/deactive.png";
import Pending from "../../src/pending.png";

export default function CoustomersList() {
  let CoustmersListHold = [
    {
      Images: ice,
      Name: "salina",
      Project_Name: "apple",
      Status: "Active",
      Weeks: "Pending",
      Budget: "10",
    },
    {
      Images: Shake,
      Name: "monika",
      Project_Name: "good ",
      Status: "Deactive",
      Weeks: "Pending",
      Budget: "10",
    },
    {
      Images: shoe,
      Name: "suraj",
      Project_Name: "fast",
      Status: "Active",
      Weeks: "Pending",
      Budget: "10",
    },
    {
      Images: tomato,
      Name: "raj",
      Project_Name: "super fast",
      Status: "Pending",
      Weeks: "Pending",
      Budget: 10,
    },
  ];
  const getStatusIcon = (status) => {
    if (status === "Active") {
      return Active;
    }
    if (status === "Deactive") {
      return Deactive;
    }

    return Pending;
  };

  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Project Name</th>
            <th scope="col">Status</th>
            <th scope="col">Weeks</th>
            <th scope="col">Budget</th>
          </tr>
        </thead>
        <tbody>
          {CoustmersListHold.map((x) => (
            <tr>
              <td>
                <img src={x.Images} class={styles.imagesHolder} />
                {x.Name}
              </td>
              <td>{x.Project_Name}</td>
              <td>
                <img src={getStatusIcon(x.Status)} class={styles.statusImg} />
                {x.Status}
              </td>
              <td>{x.Weeks}</td>
              <td>
                {" "}
                <div>{x.Budget}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
