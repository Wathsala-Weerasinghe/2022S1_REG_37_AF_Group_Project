import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io, { Socket } from 'socket.io-client'

let socket;

const Chat=({location})=>{

    const [itNumber,setItNumber]=useState('')
    const [roomId,setRoomId]=useState('');
    const ENDPOINT='http://localhost:5000'

    useEffect(()=>{
        const {itNumber,roomId}=queryString.parse(window.location.search)
        //console.log(location)
        //console.log(itNumber,roomId)

        socket=io(ENDPOINT)

        setItNumber(itNumber)
        setRoomId(roomId)
        //console.log(socket)
        socket.emit('join',{itNumber,roomId},({error})=>{
            alert(error)
        })

    },[ENDPOINT,window.location.search])

    return(
        <h1>Chat</h1>
    )


}

export default Chat




