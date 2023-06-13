import React, {   useContext } from "react";
import MyContex from "./MyContex";
import { Link } from "react-router-dom";
import "./App.css";


const UserN = () => {
  const {userName , setUserName} = useContext(MyContex);


  return (
    <div>
      <h1>CHATX</h1>
      <section>
        <input
          type="text"
          placeholder="Enter your name"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <br />
        <Link to="/Chat">
          <button>Go to next</button>
        </Link>
      </section>
    </div>
  );
};

export default UserN;
