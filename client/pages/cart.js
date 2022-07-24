import { Divider } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'
import { useStore } from '../store/store';
import "../styles/Cart.module.css";

const cart = () => {
    const cartData = useStore((state)=> state.cart);
  return (
    <Layout>
        <div className={css.container}>
            <div className={css.details}>
                <table className={css.table}>
                    <thead>
                        <th>Noodles</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                        <tbody className={css.tbody}>

                        </tbody>
                    </thead>
                 </table>
            </div>
            <div className={css.cart}>

            </div>
        </>
    </Layout>
  )
}

export default cart