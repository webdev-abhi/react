import React, { useState } from "react";

function App(props){
      
    const [name, setName] = useState("");
    

    function updateName(event){
        setName(event.target.value);
    }
    function setnewName(e){
        props.inputData(name);
         setName("");
        e.preventDefault();
    }

    return (
      <section id="Home">
       <div  className="container" >
          <div className="fifa">
            <h1>FIFA 19</h1>
          </div>
          <div className="input">
            <form onSubmit={setnewName}>
                <input onChange={updateName} value={name} type="text" placeholder="Search Player"></input>
                <input type="submit" className="btn" ></input>
            </form>
          </div>
        </div> 
      </section>
    );
}
export default App;