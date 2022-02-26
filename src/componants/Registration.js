import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registraton() {
  const [state, setState] = useState({
    email: "",
    password: "",
    balance: 5000,
    name: "",
    sureName: "",
  });

  let navitage = useNavigate();

  function handelLogin(e) {
    setState({ ...state, [e.target.name]: e.target.value });
    console.log(state);
  }

  function logout() {
    localStorage.clear();
    navitage("/");
  }

  const pass = new RegExp("^(?=.*?[A-Za-z])(?=.*?[0-9]).{6,}$");

  let email = localStorage.getItem("email");
  let password = localStorage.getItem("password");

  function submit(e) {
    e.preventDefault();
    if (true) {
      if (pass.test(state.password)) {
        localStorage.setItem("email", state.email);
        localStorage.setItem("password", state.password);
        localStorage.setItem("data", JSON.stringify(state));
        navitage("/List");
        alert("Restration sucussfull");
      } else {
        alert(
          "Password validation should be must be minimum 8 digits contains one special character contains alphanumeric characters"
        );
      }
    } else {
      alert("email is already Login");
    }
  }

  return (
    <div
      className="container my-5"
      style={{ width: "50%", marginTop: "300px", border: "2px solid black" }}
    >
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your Name
          </label>
          <input
            type="text"
            name="name"
            required
            className="form-control"
            onChange={handelLogin}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your sure name
          </label>
          <input
            type="text"
            name="sureName"
            required
            className="form-control"
            onChange={handelLogin}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3 ">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter your Email address
          </label>
          <input
            type="email"
            name="email"
            required
            className="form-control"
            onChange={handelLogin}
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            required
            onChange={handelLogin}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit"  className="form-control btn btn-primary mt-2">
          Registor
        </button>
        <button type="submit" onClick={logout} className="m-2 btn btn-success">
        Go to Login
        </button>
        <a href=""> Forget password</a>
      </form>
    </div>
  );
}

export default Registraton;
