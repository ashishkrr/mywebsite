import React, { useRef, useState } from 'react'
import Home1 from './Home1'
import LandingBg from '../assets/images/code.jpg'
import { Photo } from '../components/Photo'
import { ListOFPageNav, ProfileName } from './Home'
import ContactWay from '../components/ContactWay'
import useWindowDimensions from '../hooks/dimension'

let screenWidth = 100;
export const Landing = () => {

  const [sectionWidth, setSectionWidth] = useState(screenWidth.toString()+"%");
  const { height, width } = useWindowDimensions();


  const changeView=() => {
    if (width <= 1000) {
      screenWidth = 2
      setSectionWidth(screenWidth.toString()+"%");
    } else {
      screenWidth = 30
      setSectionWidth(screenWidth.toString()+"%");
    }
  }

  const onClickMenu = () => {
    screenWidth = 100
    setSectionWidth(screenWidth.toString()+"%");
  }

  return (
    <div>
        <section
            onScroll={changeView}
            className='landing-page'
            style={{
              position: 'fixed',
              backgroundImage: `url(${LandingBg})`, 
              width: `${sectionWidth}`,
              height: '100%',
              backgroundSize: "cover",
              backgroundPosition: "center",
              cursor: '-webkit-grab',
              transition: '400ms ease-in-out',
              transitionDelay: '200ms',
              zIndex: 2,
              overflow: 'scroll',
              overflowX: 'hidden'
            }}
          >
          <Photo />
          <ProfileName />
          <p className='font-text' style={{
              fontSize: "1.28em", 
              color: "#B3B4B5",
              textAlign: "center"
          }}>IT Professional</p>
          <ListOFPageNav />
          <ContactWay />
        </section>
        <Home1 width={screenWidth} clickMenu={onClickMenu}/>
    </div>
  )
}
