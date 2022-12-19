import { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import BrightnessMediumRoundedIcon from '@mui/icons-material/BrightnessMediumRounded';
import SearchIcon from '@mui/icons-material/Search';
import GitHubIcon from '@mui/icons-material/GitHub';
import "../App.css"
import Posts from '../components/FeaturePost'
import { MoreBlog } from '../components/MoreBlog'
import Footer from '../components/Footer'
import { WhoIAm } from '../components/WhoIAm'
import { useMediaQuery } from 'react-responsive'
import { DisplayIcon } from './Home';
import useWindowDimensions from '../hooks/dimension';


const pages = ['Blog', 'Projects', 'TechTalk', 'AboutMe']
const icons = [MenuRoundedIcon, BrightnessMediumRoundedIcon, SearchIcon]

const Home1 = (props: any) => {

    const { height, width } = useWindowDimensions();
    const screenWidth =  width <= 1000 ? 98 : 70;
    const left = (100-screenWidth).toString()+"%";
  return (
    <div style={{position: "absolute", left: left, width: screenWidth.toString()+"%"}}>
            <section style={{display: "flex", flex: 1, flexDirection: "column", marginInline: "1.53em"}}>
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
                                return <DisplayIcon key={index} icon={icon} index={index} />
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
  );
}

export default Home1