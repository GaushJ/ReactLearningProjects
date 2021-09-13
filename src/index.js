import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import Header from './Header'
import Data from './Data'




ReactDOM.render(
<>
<section className = "section">
<Header />

<Card 
image= {Data[0].image}
category = {Data[0].category}
title = {Data[0].title}
link = {Data[0].link}
/>      

Data.map()
</section> 
</>,
document.getElementById('root')
);