import React from 'react'
import dp from '../assets/images/ashDp.jpeg';

export const WhoIAm = () => {
  return (
    <div>
        <h2 style={{margin: "0px"}}>Who am I?</h2>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center"
        }}>
            <p style={{
                            fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif',
                            lineHeight: 1.4, 
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            padding: 10,
                            color: 'rgb(51, 51, 51)'
                        }}
            ><strong>Ashish</strong> works as Software Developer at @Accolite, He is a self-motivated person and keeps lots of interest in many different IT Domains</p>
            <img style={{
                borderRadius: "50%",
                width: "23.5rem",
                height: "8.5rem"
            }} src={dp} alt="loading...." />
        </div>
        <p style={{
                            fontFamily: 'Noto Sans, Helvetica, Arial, sans-serif',
                            lineHeight: 1.4, 
                            fontSize: "1.1rem",
                            fontWeight: 400,
                            padding: 10,
                            color: 'rgb(51, 51, 51)'
                        }}>He describes himself as a <strong>curious learner</strong>, <strong>Multipotentialite</strong> and a <strong>nerdy geek</strong>. Hobbies and Passions? <strong>Leadership</strong>, <strong>Software Engineering</strong>, <strong>Cyber Security</strong> and <strong>Science</strong>. Other things? <strong>Amateur (frustrated) cook</strong>.</p>
    </div>
  )
}
