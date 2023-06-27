import React from 'react'
import GroupIcon from '../../images/ben10Watch.jpeg';
import {user} from '../Home/Home';
import ChatBox from '../Message/ChatBox';
import ReactScrollToBottom from 'react-scroll-to-bottom';
import { Navigate } from 'react-router-dom';

const ChatRoom = ({socket}) => {
   let sendMessage = ()=>{
      const message = document.getElementById(`MessageInput`).value;
      if(!message) return;
      socket.emit('message', {message, id:socket.id});
      document.getElementById(`MessageInput`).value = "";
   }
   
   // useEffect(()=>{
   //    let func = async() =>{
   //       const element = document.getElementById('section-1');
   //          element.scrollIntoView({ behavior: 'smooth' });
   //    }
   //    func();
   // })

  return (
      <div className='w-75 h-100 container-fluid d-flex'>
         {user?
            (
               <div className='m-0 w-100 d-flex flex-column flex-grow-1'>
                  {/* Header :has GroupIcon, GroupName */}
                  <div className='bg-light rounded d-flex text-dark align-items-center justify-content-between fs-5'
                     style={{height:"7vh", fontFamily:"'Montserrat', sans-serif"}}>
                     <div className='mx-2'>
                        <span>
                           <img src={GroupIcon} alt="icon"
                                 className='rounded'
                                 style={{height:"4vh"}}/>
                        </span>
                        <span className='my-auto'>Vanish Chat</span>
                     </div>
                     <div>
                        <button className='btn btn-danger' onClick={()=>{return <Navigate to={`/`}/>}}>Exit</button>
                     </div>
                  </div>
                  {/* Messages Container */}
                  <div className='flex-grow-1 bg-dark border my-2' style={{minHeight:"50vh"}}>
                  <ReactScrollToBottom className='h-100'>
                     {/* hi {user} */}
                     <ChatBox socket={socket}/>
                     {/* <div id='section-1'></div> */}
                     {/* <Message message="i am fine" dir="true"/> */}
                  </ReactScrollToBottom>
                  </div>
                  {/* Message Sending Footer */}
                  <div className='bg-light rounded d-flex text-dark align-items-center fs-5'
                     style={{height:"6vh", fontFamily:"'Montserrat', sans-serif"}}>
                     <input type="text" className='w-75 my-0 flex-grow-1 h-100'
                           placeholder='Enter a message'
                           id='MessageInput'
                           onKeyDown= {(e)=>{if(e.key==='Enter') sendMessage()}}/>
                     <button 
                        className='btn btn-primary h-100 w-25 fs-4 d-flex justify-content-center gap-1'
                        onClick={()=>{sendMessage()}}   
                     >
                        <i className="fa-solid fa-paper-plane my-auto"></i>
                        <span className='fs-6 my-auto'>Send</span>
                     </button>
                  </div>
               </div>
            )
            :
            (
               <div className='m-auto'> 
                  LOADING...
               </div>
            )
         }
      </div>
            
  )
}

export default ChatRoom