
import React from "react";
import './index.css'


const Card = (props) => {
return(

<div className="Container">
    <div className = "Card"> 
       <img 
       src= {props.image}
       alt="Movie" 
       className = "Movie-image" 
       />

        <div className = "Movie-Card-info" >
            <span className = "Movie-category">{props.category}</span>
                <h3 className = "Movie-title">{props.title}</h3>
                    <a href = {props.link} target = "_blank">
                        <button> Watch Now </button>
                    </a>
        </div>
    </div>
</div>



)
}

export default Card;

