import React from "react";


const Square = (props) =>{
    return (
        <div 
        onClick={props.onClick}
        style={{border:"2px solid" ,
            width:"100%",
            height :"10vh",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
        }}
        className="square">
            <h5>{props.value}</h5>
        </div>
    )
}
export default Square;
