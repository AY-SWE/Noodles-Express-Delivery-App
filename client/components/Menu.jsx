import React from 'react'
import css from '../styles/Menu.module.css'
import Image from 'next/image';
import {urlFor} from "../lib/client"

const Menu = ({noodles}) => {
    console.log(noodles);
  return (
    <div className={css.container}>
        <div className={css.header}>
          <span>DISCOVER MORE DISHES</span>
          <span>ENJOY NEW <span style={{color:"transparent", WebkitBackgroundClip:"text", backgroundImage:"var(--themeGoldGradient)"}}>TASTE</span> AROUND THE WORLD</span>
        </div>

        <div className={css.menu}>
            {noodles.map((noodle,id)=>{
              const src = urlFor(noodle.image).url();
              return(
                <div className={css.noodle} key={id}>

                    <div className={css.noodleImage}>
      
                        <Image loader={()=>src} src={src} alt=''
                        objectFit='cover' layout='fill'/>
                    </div>

                    <span>{noodle.name}  </span>
                    <span>${noodle.price} </span>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default Menu