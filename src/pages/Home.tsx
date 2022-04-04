import Avatar from '@mui/material/Avatar'
import React, { useState } from 'react'
import LandingBg from '../assets/images/code.jpg'
import ContactWay from '../components/ContactWay'
import { ContentList } from '../components/ContentList'
import { Photo } from '../components/Photo'
import { ChangeStyleOnHover } from '../hooks/common'

const pages = ['Blog', 'Projects', 'TechTalk', 'AboutMe']

export const Home = () => {
    const [flex, setFlex] = useState(1);
    const [position, setPosition] = useState("center");
    const changeView=() => {
        setFlex(3);
        setPosition("")
    }
  return (
    <div 
        onScroll={changeView}
        style={{
            display: "flex", 
            flex: 1,
            flexDirection: "column", 
            alignItems: "center", 
            backgroundImage: `url(${LandingBg})`, 
            height: "100vh", 
            width: "100vw",
            overflow: "auto",
            backgroundSize: "cover", 
            backgroundPosition: "center"
        }}
    >
    <Photo />
    <ProfileName />
    <p style={{
        fontSize: "1.68em", 
        color: "#B3B4B5"
    }}>IT Professional</p>
    <ListOFPageNav />
    <ContactWay />
    <div>
        <p>HiHi</p>
        <p>HiHi</p>
        <p>HiHi</p>
    </div>
    </div>
  )
}

const ListOFPageNav = () => {
    return <div>
        {pages.map((page, index) => {
            return <ContentList key={index} label={page} />
        })};
    </div>
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
