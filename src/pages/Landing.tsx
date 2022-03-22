import Avatar from '@mui/material/Avatar'
import React from 'react'
import LandingBg from '../assets/images/code.jpg'
import { ContentList } from '../components/ContentList'
import { Photo } from '../components/Photo'
import { ChangeStyleOnHover } from '../hooks/common'

export const Landing = () => {
  return (
    <div 
        style={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            backgroundImage: `url(${LandingBg})`, 
            height: "100vh", width: "100vw", 
            backgroundSize: "cover", 
            backgroundPosition: "center"
        }}
    >
        <Photo />
        <ProfileName />
        <p style={{fontSize: "1.68em", color: "#B3B4B5"}}>IT Professional</p>
    </div>
  )
}

export const ProfileName = () => {
    const { borderStyleOpacity, hoverOnText, hoverOutText } = ChangeStyleOnHover()
    return (
        <div style={{marginTop: 30}}
            onMouseEnter={(event) => hoverOnText()}
            onMouseLeave={(event) => hoverOutText()}
        
        >
            
            <h2 
                style={{
                    color: "white",
                    fontFamily: `'Oxygen', 'sans-serif'`, 
                    fontSize: "2.3em", 
                    margin: 8
                }}
            >Ashish Kumar</h2>
            <div 
                style={{ 
                    borderBlockEnd: "2px solid white",
                    opacity: borderStyleOpacity.opacity
                    
                }}
            >
        </div>
        </div>
        
    )
}
