import React from 'react'

export default function Card(props){
        return(
            <div className='card'>
                <img src= {props.image} />
                <p>{props.desc}</p>
                <a href={props.url}>{props.text}</a>
            </div>
        );
}