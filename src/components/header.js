import React from "react";


function Header() {
    return(
        <div className={"navbar"}>
            <div className="brand-title">
                Where in the world?
            </div>
            <div className="theme-switcher">
                <a href="">
                     <span className="lnr lnr-moon"></span>
                    Dark Mode
                </a>

            </div>
        </div>
    )
}

export default Header
