import './styles.css';
import { BsBagPlus } from "react-icons/bs";
import { Badge } from '@mui/material';

const CartWidget = ({carrito}) => {

    return (
        <div className='cartWidget'>
            
            <div>
                <Badge badgeContent={carrito} color="primary">
                    <BsBagPlus />
                </Badge>
            </div>
        </div>
    );
};

export default CartWidget

// npm install react-icons --save
// https://react-icons.github.io/react-icons