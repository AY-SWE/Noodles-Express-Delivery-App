import Image from 'next/image';
import React from 'react'
import Layout from '../components/Layout'
import { urlFor } from '../lib/client';
import { useStore } from '../store/store';
import css from "../styles/Cart.module.css";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import toast, {Toaster} from "react-hot-toast"

export default function Cart() {
    const removeNoodles = useStore((state)=> state.removeNoodles);
    const handleRemove = (i) => {
        removeNoodles(i);
        toast.error("Item Removed");
    }
    const cartData = useStore((state)=> state.cart);
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
              <div className={css.cart}></div>
          </div>
          <Toaster/>
      </Layout>
    )
};


 