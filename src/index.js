import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Time = new Date().getHours();
let greetingText = '';
const name = 'Gauransh';

const greetingColor={

};
if(Time >=1 && Time <=11){
  greetingText = "Good Morning";

  
}
else if(Time >=12 && Time <= 19){
  greetingText = "Good Afternoon";
  
}else {
  greetingText = "Good Night";
  greetingColor.color = "yellow";
}
  



ReactDOM.render(
<>
<div>
<h1>Hello {name } , <span style = {greetingColor}>{greetingText}</span></h1>
</div>
</>,
document.getElementById('root')
);