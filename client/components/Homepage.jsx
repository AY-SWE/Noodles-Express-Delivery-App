import React from 'react'
import css from '../styles/Homepage.module.css'

const Homepage = () => {                //homepage background image
  return (
    <div className={css.container}>
        <div className={css.leftSide}>
            <div className={css.heroText}>
                <span>HUNGRY?</span>
                <span>Your favorite <span style={{color:"var(--themeGold)"}}>Noodles</span> </span>
                <span>delivered to your door</span>
            </div>

            <div className={css.miniText}>
                We aim to share the joy of eating noodles from around the world!
            </div>
        </div>

        <div className={css.rightSide}>
            rightside
        </div>
    </div>
  )
}

export default Homepage