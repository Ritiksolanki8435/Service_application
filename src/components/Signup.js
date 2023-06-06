import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Signup = () => {

  const [state, setState] = useState({
    name: "",
    email: "",
    password : "",
    counter : "",
    role : "",
    price : ""
  });

  const navigate = useNavigate();
  useEffect(() => {
    if (counter == 1) {
      setName("");
      setEmail("");
      setPassword("");
    }
    if (counter == 2) {
      navigate("/Login");
    }
  }, [counter]);+

  // const submission = (e) => {
  //   e.preventDefault();
  //   const players = JSON.parse(localStorage.getItem("Player")) || [];
  //   const user = {
  //     name: name,
  //     email: email,
  //     password: password,
  //   };

  //   players.push(user);
  //   localStorage.setItem("Player", JSON.stringify(players));
  //   alert("Registration Successful");
  //   setCount(counter + 1);
  // };

  return (
    <div>
      <div className="forms">
        <div className="main" />
        <h1 id="heading"> Register</h1>
        <p id="para"> Create your account.it's free and only takes a minut</p>

        <form id="myform" onSubmit={submission}>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            autoComplete="off"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              console.log(name);
            }}
            required
          />

          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />

          <select name="role" id="role" value={"role"}>
            <option disabled value="role">
              role
            </option>
            <option value="volvo">Electrician</option>
            <option value="saab">Plumber</option>
            <option value="mercedes">Washerman</option>
          </select>
          <br />
          
            <input
              type="text"
              id="address"
              name="address"
              placeholder="address"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          
          <input
            type="mob"
            id="mob"
            name="mob_num"
            placeholder="mobile number"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="password"
            id="pass"
            name="passwoerd"
            placeholder="password"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <br />
          <input
            type="text"
            id="prise"
            name="price"
            placeholder="price"
            autoComplete="off"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <span id="messages"></span>
          <br />
          <span id="mess2"></span>
          <br />

          <button type="submit" id="Rbtn">
            Register
          </button>
        </form>
        <div />
      </div>
    </div>
  );
};

export default Signup;
