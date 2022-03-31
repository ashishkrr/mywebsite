import React from 'react'
import profilePhoto from '../assets/images/ashDp.jpeg'

export const Photo = () => {
  return (
    <div 
        style={{
            width: 160, 
            height: 160, 
            backgroundColor: "red", 
            borderRadius: "50%", 
            marginTop: 25,
            backgroundImage: `url(${profilePhoto})`,
            backgroundSize: 'cover',
            backgroundRepeat: "no-repeat"
        }}
    ></div>
  )
}
