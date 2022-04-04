import React from 'react'
import MailIcon from '@mui/icons-material/Mail';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { ChangeStyleOnHover } from '../hooks/common';

const icons = [MailIcon, TwitterIcon, GitHubIcon, YouTubeIcon];

export default function ContactWay() {
  return (
    <div style={{
        display: "flex",
        flex: 1,
        justifyContent: "space-around",
        width: "300px",
        padding: 20
      }}>
        {icons.map((icon, index) => {
          return <DisplayIcon key={index} icon={icon} />
        })}
      {/* <MailIcon style={{
          color:'white', 
          fontSize: 40,
          borderBlockEnd: "2px solid white",
          padding: 20,
          opacity: borderStyleOpacity.opacity,
        }}
        onMouseEnter={(event) => hoverOnText()}
        onMouseLeave={(event) => hoverOutText()}
      />
      <TwitterIcon style={{
          color:'white',
          fontSize: 40,
          borderBlockEnd: "2px solid white",
          padding: 20,
          opacity: borderStyleOpacity.opacity,
        }}
        onMouseEnter={(event) => hoverOnText()}
        onMouseLeave={(event) => hoverOutText()}
      />
      <GitHubIcon style={{
          color:'white', 
          fontSize: 40,
          borderBlockEnd: "2px solid white",
          padding: 20,
          opacity: borderStyleOpacity.opacity,
        }}
        onMouseEnter={(event) => hoverOnText()}
        onMouseLeave={(event) => hoverOutText()}
      />
      <YouTubeIcon style={{
          color:'white',
          fontSize: 40,
          borderBlockEnd: "2px solid white",
          padding: 20,
          opacity: borderStyleOpacity.opacity
        }}
        onMouseEnter={(event) => hoverOnText()}
        onMouseLeave={(event) => hoverOutText()}
      /> */}
    </div>
  )
}

const DisplayIcon = (props: any) => {
    const { borderStyleOpacity, hoverOnText, hoverOutText } = ChangeStyleOnHover();
    return <div>
      <props.icon
        style={{
          color:'white',
          fontSize: 40,
          borderBlockEnd: "2px solid white",
          padding: 20,
          opacity: borderStyleOpacity.opacity
        }}
        onMouseEnter={() => hoverOnText()}
        onMouseLeave={() => hoverOutText()}
      />
    </div>
}

