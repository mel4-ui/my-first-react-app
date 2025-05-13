import React from 'react'
import { useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../data/logo/logo.png"
import { navlink } from '../data/dummydata'
import { Menu } from "@mui/icons-material"


const Header = () => {
    const [responsive, setResponsive] = useState(false)
  return (
    <>
    <header>
        <div className="container flexsb">
            <div className="logo">
                <img src={logo} alt="" data-aos="zoom-in-right"/>
            </div>
            <div className={responsive ? "hideMenu" : "nav"}>
                {navlink.map((links, i) => {
                return <Link to={links.url} key = {i} data-aos="zoom-in-left"> {links.text}</Link>
                })}
            </div>
            <button className='toggle' onClick={() => setResponsive(!responsive)}>
                <Menu className='icon'></Menu>
            </button>
        </div>
    </header>
    </>
  )
}

export default Header