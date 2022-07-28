import { Modal, useMantineTheme} from '@mantine/core';
import css from "../styles/OrderModal.module.css";

export default function OrderModal({opened, setOpened, paymentMethod}) {
    const theme = useMantineTheme();

    const total = typeof window !== 'undefined' && localStorage.getItem('total')
    return(
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened = {opened}
        onClose={()=> setOpened(null)}
      >
        {/* Modal content */}
        <form action="" className={css.formContainer}>
            <input type="text" name='name' required placeholder='Name' />
            <input type="text" name='phone' required placeholder='Phone Number' />
            <textarea name="address"  rows={3}></textarea>

            <span>You will pay <span>${total}</span> on delivery</span>
            <button className='buttons' type='submit'>Place Order</button>
        </form>


      </Modal>
    );
};
