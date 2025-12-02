import React from 'react'
import './header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-content">
                <h2 className="heading">Order your <br></br> favourite food here </h2>
                <p className="para">From street food to fine dining, we bring it all to you.
                    Browse menus, customize your order, and track delivery in real time.
                    Fresh, hot, and tasty food—delivered when you want it</p>
                <button className="view-menu">View Menu</button>
            </div>
        </div>
    )
}

export default Header