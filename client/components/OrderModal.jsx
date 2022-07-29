import { Modal, useMantineTheme} from '@mantine/core';
import css from "../styles/OrderModal.module.css";
import { useStore } from '../store/store';
import { useState } from 'react';
import { createOrder } from '../lib/orderHandler';
import toast, {Toaster} from "react-hot-toast";
import {useRouter} from 'next/router'

export default function OrderModal({opened, setOpened, paymentMethod}) {
    const theme = useMantineTheme();
    const router = useRouter();

    const cartData = useStore((state)=> state.cart);
    const total = typeof window !== 'undefined' && localStorage.getItem('total');
    //const total = () => cartData.noodles.reduce((a,b)=>a+b.quantity * b.price, 0);
  const [formData, setFormData] = useState({});
  const handleInput = (e) => {
    setFormData({...formData, [e.target.name]:e.target.value})
  }

  const resetCart = useStore((state)=>state.resetCart);

  const handleSubmit = async (e) =>{
    e.preventDefault();
    //console.log(formData);  //works
    const id = await createOrder({...formData,total, paymentMethod})
    toast.success("Order successfully placed");
    console.log("order successfully placed", id);
    resetCart();
    {
      typeof window !== 'undefined' && localStorage.setItem('order',id);
    }

    router.push(`/order/${id}`);
  }

    return(
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened = {opened}
        onClose={()=> setOpened(null)}
      >
        {/* Modal content */}
        <form onSubmit={handleSubmit} action="" className={css.formContainer}>
            <input onChange={handleInput} type="text" name='name' required placeholder='Name' />
            <input onChange={handleInput} type="text" name='phone' required placeholder='Phone Number' />
            <textarea onChange={handleInput} name="address"  rows={3} placeholder='Address'></textarea>

            <span>You will pay <span>${total}</span> on delivery</span>
            <button className={`buttons ${css.placeOrderBtn}`} type='submit'>Place Order</button>
        </form> 

      <Toaster/>
      </Modal>
    );
};
