const express = require('express')
const {Server}=require('socket.io')
const http=require('http')
const cors=require('cors')
const {addUser,removeUser,getUser,getUsersInRoom} = require('./users')

const PORT=process.env.PORT||5000

const router=require('./routes/router')

const app=express()

const server=http.createServer(app)
const io=new Server(server,{
    cors:{
        origin:"http://localhost:1234",
        methods:["GET","POST"]
    }
})

//app.use(cors())
//app.use(router)


//socket paramter is passed from the frontend
//as a argument
io.on('connection',(socket)=>{
    console.log("We have a new connection!!")

    socket.on('join',({itNumber,roomId}, callback)=>{
        console.log(itNumber,roomId)
        const {error,user}=addUser({id:socket.id,itNumber,roomId})

        if(error) return callback(error)

        socket.emit('message',{user:'admin', text:`${user.itNumber},Welcome to the room ${user.roomId}`})
        socket.broadcast.to(user.roomId).emit('message',{user:'admin', text:`${user.itNumber}, has joined `})

        socket.join(user.roomId)

        callback()

    })

    //user generated message
    socket.on('sendMessage',(message,callback)=>{
        const user=getUser(socket.id)
        io.to(user.roomId).emit('message',{user:user.itNumber, text:message})

        callback();
    })




    socket.on('disconnect',()=>{
        console.log("User had left!!!")
    })
    
})





server.listen(PORT,()=>{
    console.log(`Server has started on port ${PORT}`)
})