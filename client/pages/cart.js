import Image from 'next/image';
import React, {useState} from 'react'
import Layout from '../components/Layout'
import { urlFor } from '../lib/client';
import { useStore } from '../store/store';
import css from "../styles/Cart.module.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import toast, {Toaster} from "react-hot-toast"
import { tooltipClasses } from '@mui/material';
import OrderModal from '../components/OrderModal';

export default function Cart() {
    const cartData = useStore((state)=> state.cart);
    const removeNoodles = useStore((state)=> state.removeNoodles);
    const total = () => cartData.noodles.reduce((a,b)=>a+b.quantity * b.price, 0);
    const [paymentMethod, setPaymentMethod] = useState(null);   //pay on delivery is index 0, pay now is index 1
    const items = () => cartData.noodles.reduce((a,b)=>a+b.quantity, 0);
    
    const handleRemove = (i) => {
        removeNoodles(i);
        toast.error("Item Removed");
    }

    const handleOnDelivery = () => {
         setPaymentMethod(0);
         typeof window !== 'undefined' && localStorage.setItem('total', total())    //need this condition since we're working with next.js
    }

    return(
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
                        </thead>
                          <tbody className={css.tbody}>
                            {cartData.noodles.length>0 && 
                                cartData.noodles.map((noodle, i) => {
                                    const src = urlFor(noodle.image).url();
                                    return(
                                        <tr key={i}>
                                            <td className={css.imageTd}>
                                                <Image  
                                                loader={()=>src} 
                                                src={src} alt=''
                                                objectFit='cover'
                                                width={85}
                                                height={85}
                                                />
                                            </td>
                
                                            <td>
                                                {noodle.name}
                                            </td>
                
                                            <td>
                                                $ {noodle.price}
                                            </td>
                
                                            <td>
                                                {noodle.quantity}
                                            </td>
                
                                            <td>
                                                $ {(noodle.quantity * noodle.price).toFixed(2)}
                                            </td>
                                            
                                            <td>   
                                                <div >
                                                    <DeleteOutlineOutlinedIcon style={{color:"var(--themeRed)", cursor:"pointer"}} onClick={()=> handleRemove(i)}/>
                                                </div>
                                               
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                          </tbody>
                      
                   </table>
              </div>

              {/* summary section */}
              <div className={css.cart}>
                    <span>Cart</span>
                    <div className={css.cartDetails}>
                        <div>
                            <span>Items </span>
                            <span>{items()}</span>
                        </div>

                        <div>
                            <span>Total</span>
                            <span>$ {total().toFixed(2)}</span>
                        </div>

                        <div className={css.cartButtons}>
                            <div className={`buttons ${css.payOnDeliveryBtn}`} onClick={handleOnDelivery}> 
                                Pay on Delivery
                            </div>
                            <div className={`buttons ${css.payNowBtn}`} > 
                                Pay Now
                            </div>
                        </div>

                    </div>

              </div>
          </div>
          <Toaster/>
          {/* modal */}
          <OrderModal
          opened={paymentMethod === 0}
          setOpened = {setPaymentMethod}
          paymentMethod = {paymentMethod}
          />
      </Layout>
    )
};


 