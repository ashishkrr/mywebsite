import { useState } from 'react'
import LandingBg from '../assets/images/code.jpg'
import ContactWay from '../components/ContactWay'
import { ContentList } from '../components/ContentList'
import { Photo } from '../components/Photo'
import { ChangeStyleOnHover } from '../hooks/common'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import BrightnessMediumRoundedIcon from '@mui/icons-material/BrightnessMediumRounded';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../App.css"
import Posts from '../components/FeaturePost'
import { MoreBlog } from '../components/MoreBlog'
import Footer from '../components/Footer'
import { WhoIAm } from '../components/WhoIAm'

const pages = ['Blog', 'Projects', 'TechTalk', 'AboutMe']
const icons = [MenuRoundedIcon, BrightnessMediumRoundedIcon, SearchIcon]

export const Home = () => {
    const [flex, setFlex] = useState("center");
    const [sectionWidth, setSectionWidth] = useState("100%");
    const changeView=() => {
        setFlex("flex-start");
        setSectionWidth("30%")
    }
  return (
    <div style={{display: "flex", flex: 1, flexDirection: "row", justifyContent: flex}}>
        <section 
            onScroll={changeView}
            style={{
                backgroundImage: `url(${LandingBg})`, 
                height: "100vh",
                width: sectionWidth,
                overflow: "auto",
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: '0px 10px 10px 10px #E6E6E6',
                position: "fixed",
                overflowX: "hidden"
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
            <div>
                {/* <p>HiHi</p>
                <p>HiHi</p>
                <p>HiHi</p> */}
            </div>
        </section>
        {
        flex == "flex-start" ? 
            <div style={{position: "absolute", left: "30%", width: "70%"}}>
                <section style={{display: "flex", flex: 1, flexDirection: "column", marginInline: "75px"}}>
                    <div onClick={() => console.log()} style={{backgroundColor: "white", position: "absolute", right: 0, height: 90}}>
                        <GitHubIcon style={{color: "grey", fontSize: 30, padding: 20, cursor: "pointer"}} />
                    </div>
                    <div style={{display: "flex", flexDirection: "row", height: 90, justifyContent: "end", width: "100%"}}>
                    {/* <div style={{flex: 1, backgroundColor: "white", display: "flex", alignItems: "center"}}></div> */}
                        <div 
                            style={{
                                flex: 10,
                                display: "flex",
                                backgroundColor: "white",
                                alignItems: "center",
                                boxShadow: '0px 25px 5px -5px rgba(136, 136, 136, 0.3)'
                            }}>
                                {icons.map((icon, index) => {
                                    return <DisplayIcon key={index} icon={icon} />
                            })}
                        </div>
                    </div>
                    <div  style={{marginTop: 20, padding: 15}} className='page-content'>
                        <header>
                            <h1 className="page-title">Hi there!</h1>
                            <div 
                                style={{
                                    borderBlockEnd: `1px solid rgba(163, 163, 163, 0.3)`,
                                }} className="hr pb0">
                            </div>
                        </header>
                    <p 
                        style={{
                            fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif',
                            lineHeight: 1.5, 
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            color: 'rgb(51, 51, 51)'
                        }}><strong>Welcome!</strong> My name is <strong>Ashish Kumar</strong>, I’m an IT Professional and this site is my <strong>open book</strong> where I <strong>express myself</strong> and <strong>share my ideas, experience and knowledge</strong>. I hope you find the material and content useful. Any <strong>feedback</strong> is always more than welcome. <strong>Enjoy your stay!</strong>
                    </p>
                    <div 
                        style={{
                            borderLeftWidth: "0.4rem",
                            borderLeftColor: "rgb(235,235,235)",
                            borderLeft: '0.4rem solid rgb(235,235,235)',
                            position: "relative",
                            left: "-1rem"
                        }}>
                        <p style={{
                            fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif',
                            lineHeight: 1.7, 
                            fontSize: "1.2rem",
                            fontWeight: 400,
                            color: 'rgb(119, 119, 119)',
                            padding: 10
                        }}>“If someone is in need, lend them a helping hand. Do not wait for a thank you.”</p>
                    </div>
                </div>
                <Posts label={'Featured Posts'} />
                <MoreBlog label={'Blog'} />
                <WhoIAm />
                <Footer />
            </section>
            </div>
            : <></>
        }
    </div>
  )
}

const ListOFPageNav = () => {
    return <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
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
                className='font-text'
                style={{
                    color: "white",
                    fontSize: "2.3em",
                    fontWeight: 700, 
                    margin: 8,
                    textAlign: "center"
                }}
            >Ashish Kumar</h2>
            <div 
                style={{ 
                    borderBlockEnd: "2px solid white",
                    opacity: borderStyleOpacity.opacity,
                    width: '100px',
                    margin: '0 auto'
                }}
            >
        </div>
    </div>
        
    )
}

const DisplayIcon = (props: any) => {
    return <div 
    onMouseOver={(event) => {
        event.currentTarget.style.background = "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(136, 136, 136, 0.1))"
    }}

    onMouseOut={(event) => {
        event.currentTarget.style.background = "white"
    }}

    style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        border: "1px #888888",
        borderColor: "#888888",
        borderRightStyle: "solid",
        cursor: "pointer"
    }}>
      <props.icon
        style={{
          color:'rgba(136, 136, 136, 0.5)',
          fontSize: 25,
          padding: 15
        }}
      />
    </div>
}
