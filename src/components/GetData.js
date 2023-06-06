import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const GetData = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get("http://192.168.1.34:4000/users/")
      .then((res) => setUsers(res.data.users))
      .catch((e) => console.log("invali"));
    
  }, []);
  
  return <div></div>;
};

export default GetData;
