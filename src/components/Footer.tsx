import React from 'react'
import '../assets/styles/app.css'

export default function Footer() {
  return (
    <div style={{
        textAlign: "center",
        borderTop: "1px solid rgb(119, 119, 119)",
        marginBottom: "4rem"
    }}>
        <p><small className="copyright">© 2021 Ashish Kumar. All rights reserved. </small></p>
        <nav className="legal"><small> <a className='footer-nav' href="/LICENSE/">LICENSE</a> | <a className='footer-nav' href="/cookies-policy/">COOKIES POLICY</a> | <a className='footer-nav' href="/IMPRESSUM/">IMPRESSUM</a> | <a className='footer-nav' href="/resume/">RESUME</a> </small></nav>
    </div>
  )
}
