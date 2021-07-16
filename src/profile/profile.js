import React, { Children } from 'react'
const Profile = (props) => {
const styleObject={textAlign:'center',backgroundColor:'rgb(205, 92, 92)' ,height:"700px" ,color:'white' ,}
const styleBtn = {
    backgroundColor: "white",
    borderRadius:"5px",
    color: "rgb(31 106 159)",
    padding: "15px 32px",
    textAlign: "center",
    display: "inline-block",
    fontSize: "12px",
  };
    return (
        
        <div style={styleObject} >
            <img src={props.children} ></img>
            <h1>{props.fullName }</h1>
            <p>{props.profession}</p>
            <p>{props.bio}</p>
            <button
          onClick={() => props.handleName(`My name is ${props.fullName} `)}
          style={styleBtn}
        >
         Clique me
        </button>
        </div>
      
    )
}

export default Profile