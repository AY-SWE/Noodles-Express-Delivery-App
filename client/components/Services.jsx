import css from '../styles/Services.module.css'
import Image from "next/image"
import React from 'react'
import s1 from "../sampleImages/s1.png"
import s2 from "../sampleImages/s2.png"
import s3 from "../sampleImages/s3.png"

const Services = () => {
  return (
    <>
        <div className={css.heading}>
            <span>PROUD TO SERVE</span>
            <span>Your #1 </span>
            <span>Delivery Partner</span>
        </div>

        <div className={css.services}>
            <div className={css.feature}>
                <div className={css.featureImage}>
                    <Image src={s1} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <span>Fast Order</span>
                <span>SSSSSSSSSSSSSSSSSSS</span>
            </div>
            <div className={css.feature}>
                <div className={css.featureImage}>
                    <Image src={s2} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <span>Fast Order</span>
                <span>SSSSSSSSSSSSSSSSSSS</span>

            </div>
            <div className={css.feature}>
                <div className={css.featureImage}>
                    <Image src={s3} alt="" objectFit='cover' layout='intrinsic'/>
                </div>

                <span>Fast Order</span>
                <span>SSSSSSSSSSSSSSSSSSS</span>

            </div> 
        </div>
    </>
  )
}

export default Services