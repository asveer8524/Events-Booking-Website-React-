import React from "react";

export default function  Card(props)
{
    let badgeText;
    if (props.openSpots === 0) 
    {
        badgeText = "SOLD OUT"
    } 
    else  
    {
        badgeText = "ONLINE"
    }
    
    return (
        <div className='card'>
      
            <img src={props.img} alt='catelog images' className='catelog--img'/>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <div className='card--stats'>
                <img src='./Images/star.png' alt='star img' className='cardStar'/>
                <span> {props.rating} </span>
                <span className="grey"> ({props.reviewCount}) •  </span>
                <span className="grey"> {props.country} </span>
            </div>
            <p className='card--title '> {props.title} </p>
            <p className='catelog--data--proce'> 
                <span className='bold'> From ${props.price} </span>
                 / person 
            </p>
        </div>
    );
}
