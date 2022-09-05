import React from "react";
import NavBar from "./NavBar";
import styles from "./styles.module.css";
export default function Home() {
  return (
    <>
      <div class="row">
        <div class="col-2">
          <NavBar />
        </div>
        <div class="col-10">
          <div class={styles.homeHolder}>
            <h1 class={styles.homeHading}>Admin Panel</h1>
            <p class={styles.paraHeading}>
              Spend time building your product, not your Admin interface. Get
              started now! Save Time And Money With The Internal Tool That Fits
              All Your Needs. nstant setup 100% customizable I. High Level
              Support. Interface builder. No learning curve. Data Privacy.
              Business ready UX. Completely Free
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
