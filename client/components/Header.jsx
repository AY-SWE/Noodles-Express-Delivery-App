import React from 'react'
import css from '../styles/Header.module.css'
import Logo from "../sampleImages/Logo.png"
import Image from "next/image"
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Header = () => {
  return (
    <div className={css.header}>
        <div className={css.logo}>
            <Image src={Logo} alt="" width={55} height={55}/>
            <span>NOODLES EXPRESS</span>
        </div>

        <div className={css.menu}>
            <li>HOME</li>
            <li>MENU</li>
            <li>CONTACT US</li>
        </div>

        <div className={css.rightSide}>
            <div className={css.cart}>
                <ShoppingBagOutlinedIcon sx={{ fontSize: "30px" }}/>
                <div className={css.badge}>1</div>
            </div>

        </div>
    </div>
  )
}

export default Header