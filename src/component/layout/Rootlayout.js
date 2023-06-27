import React, {useState} from 'react';
import ChatRoom from './ChatRoom';
import AllRooms from './AllRooms';

const Rootlayout = ({socket}) => {
  const [Menu, setMenu] = useState(false);
  
  return (
    <div className='d-flex flex-column align-items-center container-fluid h-100' >
      <div className='w-75 mt-5' style={{zIndex:1}}>
        <div className='w-75 position-absolute'
          style={!Menu?{transition:"1s ease", opacity:0, transform:"translateY(-30%)"} : 
                      {transition:"1s ease"}}>
           <div className='w-100' style={!Menu?{transition:"1s ease", transform:"scale(0.9)"}:{transition:"1s ease"}}> 
              <AllRooms/> 
           </div>
        
        </div>
      </div>
      <div className='position-absolute'
          style={{zIndex:3, top:"2vh"}}>
        <button className='rounded-circle bg-warning mx-auto' style={{height:"5vh", width:"5vh"}}
              onClick={()=>{setMenu(!Menu);console.log(Menu)}}
        > <i className="fa-solid fa-bars"></i>
        </button>
      </div>
      <div className='my-2 w-75 container-fluid'
            style={!Menu?{zIndex:2 ,transition:"1s ease", height:"90vh"}:{zIndex:2 ,transition:"1.2s ease", transform:"translateY(34%)", height:"67vh"}}
      >
         <ChatRoom socket={socket}/>
      </div>
    </div>
  )
}

export default Rootlayout