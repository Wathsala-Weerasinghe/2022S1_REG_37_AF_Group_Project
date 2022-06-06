import React, { Fragment } from "react";
import './Message.css'

const Message=({message:{user,text},itNumber})=>{

    let isSentByCurrentStudent=false;

    const trimmedIt=itNumber.trim().toLowerCase();

    if(user===trimmedIt){
        isSentByCurrentStudent=true
    }

    return(
        
        isSentByCurrentStudent
        ?(
            <div style={{display: "flex" , justifyContent:"flex-end"}}>
                <p>{trimmedIt}</p>
                <div>
                    <p>{text}</p>
                </div>
            </div>

        )
        :(
            <div style={{display:"flex", justifyContent:"flex-start"}}>
                <div>
                    <p>{text}</p>
                </div>
                <p>{user}</p>
            </div>



        )
        
    )





}

export default Message





