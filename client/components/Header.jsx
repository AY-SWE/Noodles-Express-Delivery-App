import React from 'react'
import css from '../styles/Header.module.css'
import Logo from "../sampleImages/Logo.png"
import Image from "next/image"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStore } from '../store/store';

const Header = () => {
    const state = useStore((state) => state);
    console.log(state);     //works

    const items = useStore((state) => state.cart.noodles.length);
 
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
                <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }}/>
                <div className={css.badge}>{items}</div>
            </div>

        </div>
    </div>
  )
}

export default Header