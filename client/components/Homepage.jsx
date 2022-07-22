import React from 'react'
import css from '../styles/Homepage.module.css'
import Noodles1 from "../sampleImages/noodles1.png"
import Noodles2 from "../sampleImages/jjmian.png"
import Naruto from "../sampleImages/narutoRamen.png"
import Image from "next/image"
import RestaurantMenuOutlinedIcon from '@mui/icons-material/RestaurantMenuOutlined';

const Homepage = () => {                //homepage background image
  return (
    <div className={css.container}>
        <div className={css.leftSide}>
            <div className={css.heroText}>
                <span>HUNGRY?</span>
                <span>Your favorite <span style={{color:"transparent", WebkitBackgroundClip:"text", backgroundImage:"var(--themeGoldGradient)"}}>Noodles</span> </span>
                <span>delivered to your door</span>
            </div>

            <span className={css.miniText}>
                We aim to share the joy of eating noodles from around the world!
            </span>

            <button className={`buttons ${css.orderButton}`}>
                Online Order
            </button>
        </div>

        <div className={css.rightSide}>
            <div className={css.imageContainer}>
                <Image src={Noodles1} alt="" layout="intrinsic"/>
                
            </div>
            <div className={css.imageContainer2}>
                <Image src={Noodles2} alt="" layout="intrinsic"/>
            </div>

            <div className={css.narutoImage}>
                <Image src={Naruto} alt="" layout="intrinsic"/>
            </div>
            
            <div className={css.seeMenu}> 
                <span>See Menu</span>
                <div><RestaurantMenuOutlinedIcon/></div>
            </div>
            

        </div>
    </div>
  )
}

export default Homepage