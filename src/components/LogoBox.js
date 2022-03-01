import React from 'react'

const LogoBox = () => {
    return (
        <div>
        <div className="logo-box">
          <a href="index.html" className="logo logo-light text-center">
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src="assets/images/logo-light.png" alt="" height="16" />
            </span>
          </a>
          <a href="index.html" className="logo logo-dark text-center">
            <span className="logo-sm">
              <img src="assets/images/logo-sm.png" alt="" height="22" />
            </span>
            <span className="logo-lg">
              <img src="assets/images/logo-dark.png" alt="" height="16" />
            </span>
          </a>
        </div>
            
        </div>
    )
}

export default LogoBox
