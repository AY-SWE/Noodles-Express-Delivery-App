import React from 'react'
import css from '../styles/Footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import CopyrightIcon from '@mui/icons-material/Copyright';
import Image from "next/image"
import Logo from "../sampleImages/Logo.png"
import Link from 'next/link';

const Footer = () => {
  return (
    <div className={css.container}>

       <div className={css.innerContainer}>
          <div className={css.logo}>
                <Image src={Logo} alt="" width={55} height={55}/>
                <span>NOODLES EXPRESS</span>
            </div>

          <div className={css.socialMediaIcons}>
            <FacebookIcon sx={{ fontSize: "35px" }}/>
              <GitHubIcon sx={{ fontSize: "35px" }}/>
            <InstagramIcon sx={{ fontSize: "35px" }}/>

          </div>
       </div>

      <div className={css.copyright}>
        <CopyrightIcon/>
        <span>ALL RIGHTS RESERVED</span>
      </div>

    </div>
  )
}

export default Footer