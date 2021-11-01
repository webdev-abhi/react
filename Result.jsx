import React from "react";
import Chart from "./Chart";

function Result(props){

    return (
        <section id="result">
        <div className="header">
        <nav className="nav">
          <a href="www.google.com" ><i className="fas fa-arrow-left"></i> Home</a>
          <a href="www.google.com"><i className="fas fa-question"></i> Help</a>
        </nav>
          <div className="name">
          <h1 className="playerName">{props.Name}</h1>
          <img src="football.png" alt="gitl" width="90"/>
          </div>
        </div>
        <div className="chart">
            <Chart {...props} />
            </div>
            <div className="pdetail">
            <button>Overall <b>{props.Overall}</b></button>
            <button>Age <b>{props.Age}</b></button>
            <p>Nationality&emsp;<b> {props.Nationality}</b></p>
            <p>Club&emsp;<b> {props.Club}</b></p>
            <p>Value&emsp;<b> {props.Value}</b></p>
            <p>Wage&emsp;<b> {props.Wage}</b></p>
            <p>Preferred Foot&emsp;<b> {props.Preferred_Foot}</b></p>
            <p>Position&emsp;<b> {props.Position}</b></p>
            <p>Jersey Number&emsp;<b> {props.Jersey_Number}</b></p>
            <p>Contract Valid Until&emsp;<b> {props.Contract_Valid_Until}</b></p>
            <p>Height&emsp;<b> {props.Height}</b></p>
            <p>Weight&emsp;<b>{props.Weight}</b></p>
            <p>Work Rate(Attack-Defense)&emsp;<b> {props.Work_Rate}</b></p>
            </div>
        </section>
    );
}
export default Result;