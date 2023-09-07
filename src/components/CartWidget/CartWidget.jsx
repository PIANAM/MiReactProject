import './styles.css';
import { BsBagPlus } from "react-icons/bs";

const CartWidget = ({carrito}) => {

    

    return (
        <div className='cartWidget'>
            <div> 
                <BsBagPlus />
            </div>
           
            <div>{carrito}</div>
        </div>
    );
};

export default CartWidget

// npm install react-icons --save
// https://react-icons.github.io/react-icons