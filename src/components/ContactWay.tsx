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
        justifyContent: "center",
        padding: 20
      }}>
      {icons.map((icon, index) => {
        return <DisplayIcon key={index} icon={icon} />
      })}
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
          borderBlockEnd: `2px solid rgba(255, 255, 255, ${borderStyleOpacity.opacity})`,
          padding: 20
        }}
        onMouseEnter={() => hoverOnText()}
        onMouseLeave={() => hoverOutText()}
      />
    </div>
}

