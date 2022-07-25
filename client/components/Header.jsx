import React from 'react'
import css from '../styles/Header.module.css'
import Logo from "../sampleImages/Logo.png"
import Image from "next/image"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useStore } from '../store/store';
import Link from 'next/link';

const Header = () => {
    const state = useStore((state) => state);
    console.log(state);     //works

    const items = useStore((state) => state.cart.noodles.length);
 
     return (
    <div className={css.header}> 
        <Link href='/'>
            <div className={css.logo}>
                <Image src={Logo} alt="" width={55} height={55}/>
                <span>NOODLES EXPRESS</span>
            </div>
        
        </Link>
        

        <div className={css.menu}>
            <Link href='/'>
                <li>HOME</li>
            </Link>
            <li>MENU</li>
            <li>CONTACT US</li>
        </div>

        <div className={css.rightSide}>
            <Link href = '/cart'>
                <div className={css.cart}>
                    <ShoppingCartOutlinedIcon sx={{ fontSize: "30px" }}/>
                    <div className={css.badge}>{items}</div>
                </div>
            </Link>

        </div>
    </div>
  )
}

export default Header