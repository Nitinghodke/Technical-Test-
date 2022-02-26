
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function List() {
  let data1 = JSON.parse(localStorage.getItem("data"));
  const [state, setState] = useState(data1.balance);
  const [data, setData] = useState(data1);
  const [balance, setBalace] = useState(0);
  const [HistoryData, setHistroyData] = useState([]);

  function handelLogin(e) {
    setBalace(e.target.value);
    console.log(balance);
  }

  let navitage = useNavigate();

  function logout() {
    navitage("/");
  }

  function back() {
    navitage("/");
  }

  function section1() {
    let obj = Number(data.balance) - Number(balance);
    setState(obj);
    data.balance = obj;
    data.time = new Date().toISOString().slice(0, 10);
    setHistroyData([...HistoryData, { time: data.time, bal: data.balance }]);
    console.log(HistoryData);
    setData(data);
    localStorage.setItem("data", JSON.stringify(data));
  }

  function section2() {
    let obj = Number(data.balance) + Number(balance);
    setState(obj);
    data.balance = obj;
    data.time = new Date().toISOString().slice(0, 10);
    setData(data);
    localStorage.setItem("data", JSON.stringify(data));
    setHistroyData([...HistoryData, { time: data.time, bal: data.balance }]);
    console.log(HistoryData);
  }

  function section3() {}

  return (
    <div className="container">
      <div className="my-5 ">
        <button type="submit" onClick={logout} className="m-2 btn btn-success">
          Logout
        </button>
        <button type="submit" onClick={back} className="m-2 btn btn-success">
          Go Back
        </button>

        <hr />
        <div className="mb-3">
          <h2>Account holder Name :-{data.name + " " + data.sureName}</h2>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Account balance
            <h4>{state}</h4>
          </label>
          <input
            type="number"
            name="balance"
            required
            onChange={handelLogin}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </div>
      <div className="section-div my-5 mx-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check"
            onClick={section1}
            name="btnradio"
            id="btnradio1"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio1">
            Withdrawal
          </label>

          <input
            type="radio"
            className="btn-check"
            onClick={section2}
            name="btnradio"
            id="btnradio2"
            autoComplete="off"
          />
          <label className="btn btn-outline-primary" htmlFor="btnradio2">
            Diposite
          </label>
        </div>
        <br />
        <div></div>
      </div>

      <label className="btn btn-outline-primary form-control">History</label>
      {HistoryData.map((ele, ind) => {
    
        return (
          <ul key={ind}>
            <li> Transaction date :-{ele.time}</li>
            <li>Balance:-{ele.bal}</li>
          </ul>
        );
      }).reverse()}
    </div>
  );
}

export default List;
