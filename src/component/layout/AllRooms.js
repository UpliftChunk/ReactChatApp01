import React from 'react'
import './AllRooms.css'
import home from '../../images/home.jpg'
import office from '../../images/office.jpg'
// import friends from '../../images/friends.jpg'
// import sports from '../../images/sports.jpg'


const AllRooms = () => {

  return (
   <div className='p-2 my-2'>
      <div className='slider px-2 justify-content-center'>
        <div className='my-auto mx-1 border border-white d-flex flex-column'>
          <div className='position-absolute w-100 h-100'>
            <img src={home} alt="home" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
          </div>
          <div className='Title mx-auto text-uppercase' style={{zIndex:2}}>About Page</div>
        </div>
        <div className='my-auto mx-1 border border-white d-flex flex-column'>
          <div className='position-absolute w-100 h-100'>
            <img src={office} alt="office" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
          </div>
          <div className='Title mx-auto text-uppercase' style={{zIndex:2}}>Contact Us</div>
        </div>
        {/* <div className='my-auto mx-1 border border-white d-flex flex-column'>
          <div className='position-absolute w-100 h-100'>
            <img src={sports} alt="sports" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
          </div>
          <div className='Title mx-auto text-uppercase' style={{zIndex:2}}>Sports</div>
        </div>
        <div className='my-auto mx-1 border border-white d-flex flex-column'>
          <div className='position-absolute w-100 h-100'>
            <img src={friends} alt="friends" style={{width:"100%", height:"100%", objectFit:"cover"}}/>
          </div>
          <div className='Title mx-auto text-uppercase' style={{zIndex:2}}>Friends</div>
        </div> */}
      </div>
   </div>
  )
}

export default AllRooms