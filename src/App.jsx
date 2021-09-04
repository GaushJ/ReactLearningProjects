import React from "react";
import './index.css'


function App(){
    let time = new Date().getHours();
    let greeting = "";
    const Style = {};
    if(time > 1 && time <12){
        greeting = "Good Morning";
        Style.color = "#00b894";
    }else if(time >= 12 && time < 20 ){
        greeting = "Good Afternoon";
        Style.color = "purple";
    }else {
        greeting = "Good Night";
        Style.color = "purple";
    }
    return(
        <>
        <div>
            <h1>
                Hello Sir , <span style = {Style}>{greeting}</span>
            </h1>
        </div>
        </>
    );
}
export default App;