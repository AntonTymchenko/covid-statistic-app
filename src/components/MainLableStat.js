import React from "react";
import logo from "../img/logo.png";
import s from "./MainLableStat.module.css";

function MainLableStat() {
  return (
    <div className={s.logoDiv}>
      <img src={logo} alt="logo " />
      <h1>STATISTICS</h1>
    </div>
  );
}

export default MainLableStat;
