import React, { useEffect} from 'react';
import socketIO from 'socket.io-client';
import {user} from '../Home/Home';
import Rootlayout from './Rootlayout';

const ENDPOINT = 'http://localhost:4500';
const SocketBody = () => {
   let socket= socketIO(ENDPOINT, {transports: [`websocket`]});
   useEffect(()=>{
      let id; 
     socket.on('connect', ()=>{
        console.log(`connecion made from ${socket.id}`);
 
        socket.emit('joined',{user});
 
        socket.on('welcome', ({admin, message})=>{
           id = (socket.id);
           console.log(admin+": "+message);
        })
 
        socket.on('UserJoined', (data)=>{
           console.log(data.user+": "+data.message);
        })
 
        socket.on('leave', (data)=>{
           console.log(data.user+": "+data.message);
        })
 
        return ()=>{
           socket.emit('disconnect',{id});
           socket.off();
        }
     }, []);
 
   });
  return (
    <Rootlayout socket={socket}/>
  )
}

export default SocketBody