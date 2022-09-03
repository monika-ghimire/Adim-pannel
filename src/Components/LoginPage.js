import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";
export default function LoginPage() {
  const navigate = useNavigate();
  const submitForm = (event) => {
    event.preventDefault();
    let UserValue = event.target;
    var Users = {
      Email_address: UserValue[0].value,
      Password: UserValue[1].value,
    };
    console.log(Users);
    navigate("home");
  };

  return (
    <>
      <div class="  mt-3">
        <div class={styles.container}>
          <div class="row ">
            <div class="col ">
              <div class={styles.rightContainer}>
                <h1 class={styles.heading1}>Admin Panel</h1>
              </div>
            </div>
            <div class="col">
              <h2 class={styles.heading}> Login</h2>
              <form onSubmit={submitForm} class={styles.form}>
                <div class="mb-4">
                  <label for="exampleInputEmail1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                  />
                </div>
                <div class="mb-8">
                  <label for="exampleInputPassword1" class="form-label">
                    Password
                  </label>
                  <input type="password" class="form-control" />
                </div>

                <button type="submit" class={styles.btn}>
                  Submit
                </button>
                <p>
                  Don't have an accout ?<a>Sign Up</a>
                </p>
              </form>
              <input
                class={styles.google}
                placeholder=" Authorise with Google"
              />
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
