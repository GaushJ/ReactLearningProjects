import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Header from './Header'
import Data from './Data'




const sdata = (value) => {
    return(
        <Card 
            image= {value.image}
            category = {value.category}
            title = {value.title}
            link = {value.link}
        />  
    )
        
    
}

ReactDOM.render(
<>

<Header />
{Data.map(sdata)}

</>,
document.getElementById('root')
);