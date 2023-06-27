import React, {useEffect, useState} from 'react'

const UnitMessage = ({message, dir, user}) => {
   const rightMessage = "rounded bg-light text-dark ms-auto px-3 py-2 fs-5 mb-1";
   const leftMessage = "rounded bg-secondary me-auto text-white px-3 py-2 fs-5 mb-1";
   const rightBadge = "mt-2 mb-1 rounded bg-warning ms-auto text-muted px-2 fw-bold";
   const leftBadge = "mt-2 mb-1 rounded bg-warning me-auto text-muted px-2 fw-bold";
  return (
    <div className='mx-1'>
      <div className='d-flex flex-column w-75 rounded' style={dir?{marginLeft:"auto"}:{}}>
            <div className={dir?rightBadge:leftBadge} style={{fontSize:"small"}}>
              {dir?"You":user}
            </div>
            <div className={dir?rightMessage:leftMessage}>{message}</div>
      </div>
    </div>
  )
}

const ChatBox = ({socket}) => {
  const [messages, setMessages]= useState([]);

  useEffect(()=>{
     socket.on('SendMessage', (data)=>{
        // console.log(data);
        // console.log(data.user+": "+data.message+": "+data.id);
        setMessages([...messages,data]);
        // console.log(messages);
     });

     return ()=>{
        socket.off();
     }
  },[messages, socket]);


  return (
    
      messages.map((item, i)=> (
         <span key={i}><UnitMessage message={item.message} 
                                dir={socket.id===item.id}
                                user={item.user}
                        />
         </span>
      ))
     
  )

}

export default ChatBox