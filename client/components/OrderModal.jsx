import { Modal, useMantineTheme} from '@mantine/core';

export default function OrderModal({opened, setOpened, paymentMethod}) {
    const theme = useMantineTheme();
    return(
        <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        opened = {opened}
        onClose={()=> setOpened(null)}
      >
        {/* Modal content */}
        fsdf


      </Modal>
    );
};
