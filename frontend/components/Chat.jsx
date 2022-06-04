import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io, { Socket } from 'socket.io-client'
import ScrollToBottom from 'react-scroll-to-bottom'
import Message from './Message'

let socket;

const Chat=({location})=>{

    const [itNumber,setItNumber]=useState('')
    const [roomId,setRoomId]=useState('');
    const [message,setMessage]=useState('');
    const [messages,setMessages]=useState([]);
    const ENDPOINT='http://localhost:5000'

    useEffect(()=>{
        const {itNumber,roomId}=queryString.parse(window.location.search)
        //console.log(location)
        //console.log(itNumber,roomId)

        socket=io(ENDPOINT,{
            transports:['websocket']
        })

        setItNumber(itNumber)
        setRoomId(roomId)
        //console.log(socket)
        /*socket.emit('join',{itNumber,roomId},({error})=>{
            alert(error)
        })*/
        socket.emit('join',{itNumber,roomId},()=>{

        })

        socket.on("connect_error",(err)=>{
            console.log(`connect_error due to ${err.message}`);
        })

        //unmounting
        return ()=>{
            socket.disconnect()

            socket.off()
        }

    },[ENDPOINT,window.location.search])

    //handle messages
    useEffect(()=>{
        socket.on('message',(message)=>{
            //adding msg to msg array
            setMessages((messages)=>[...messages,message])

        })

        socket.on("roomData",({itNumber})=>{
            setItNumber(itNumber)
        })

    },[])

    //func for sending messages
    const sendMessage=(event)=>{
        //console.log(event)
        event.preventDefault()
        if(message){
            socket.emit('sendMessage',message,()=>setMessage(''))
        }
    }

    console.log(message,messages)

    return(
        <div>
            
            <div>
                <ScrollToBottom>
                    {messages.map((message,i)=>{
                        return(
                            <div key={i}>
                                <div>
                                    {/*<div className="message-content">
                                        <p>{message.text}</p>
                                    </div>*/}
                                    <ul className="list-group">
                                        <li className="list-group-item">{message.text}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                        /*return(
                            <div key={i}>
                                <Message message={message} itNumber={itNumber}></Message>
                            </div>
                        )*/
                        
                        
                    })}
                </ScrollToBottom>
            </div>
            
            <div>
                <input
                value={message}
                onChange={(event)=>setMessage(event.target.value)}
                onKeyPress={event=>event.key === 'Enter'?sendMessage(event):null}

                />
            </div>
            <div>
                <button onClick={(event)=>sendMessage(event)}>Send</button>
            </div>
        </div>
    )


}

export default Chat
