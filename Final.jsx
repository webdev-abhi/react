import React, { useState } from "react";
import App from "./app";
import Result from "./Result";

function Final(){

    const [active, setActive] = useState("Home");
    const [inputName, setInputName] = useState("");

    const csv = `Name,Age,Nationality,Overall,Club,Value,Wage,Preferred_Foot,Work_Rate,Position,Jersey_Number,Joined,Contract_Valid_Until,Height,Weight,Crossing,Finishing,HeadingAccuracy,ShortPassing,Volleys
    L. Messi,31,Argentina,94,FC Barcelona,€110.5M,€565K,Left,Medium/ Medium,RF,10,1-Jul-04,2021,5'7,159lbs,84,95,70,90,86
    Cristiano Ronaldo,33,Portugal,94,Juventus,€77M,€405K,Right,High/ Low,ST,7,10-Jul-18,2022,6'2,183lbs,84,94,89,81,87
    Neymar Jr,26,Brazil,92,Paris Saint-Germain,€118.5M,€290K,Right,High/ Medium,LW,10,3-Aug-17,2022,5'9,150lbs,79,87,62,84,84
    De Gea,27,Spain,91,Manchester United,€72M,€260K,Right,Medium/ Medium,GK,1,1-Jul-11,2020,6'4,168lbs,17,13,21,50,13
    K. De Bruyne,27,Belgium,91,Manchester City,€102M,€355K,Right,High/ High,RCM,7,30-Aug-15,2023,5'11,154lbs,93,82,55,92,82`;
     function csvJSON(){

        var lines=csv.split("\n");
      
        var result = [];
      
        var headers=lines[0].split(",");
      
        for(var i=1;i<lines.length;i++){
      
            var obj = {};
            var currentline=lines[i].split(",");
      
            for(var j=0;j<headers.length;j++){
                obj[headers[j]] = currentline[j];
            }
      
            result.push(obj);
        }
        return  result;
      }
     const data = csvJSON();
     var found=true;
     function matchName(name){
        setInputName(name.toLowerCase());
         setActive("Result");
         
     }
     return (
        <div className="heading">
            {active === "Home" && <App inputData={matchName}/>}
            {active === "Result" && data.filter(value => {
                found=false;
                return value.Name.toLowerCase().includes(inputName)||value.Nationality.toLowerCase().includes(inputName)||value.Club.toLowerCase().includes(inputName);
                }).map((detail, index) => {
                    found = true;
                   return <Result
                   key = {index}
                   {...detail}
                   />
                })}
                {!found && <div className="NoResult">No Result Found</div>}
        </div>
     );

}
export default Final;