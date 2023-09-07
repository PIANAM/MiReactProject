import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './styles.css'

const Navbar = () => {

    const Logo = ['LOGO']
    const carrito = 3

    return (
        <div className="navbar">
            
            <div>
                <ItemListContainer Logo={Logo}/>
            </div>
            <div>
                <CartWidget carrito={carrito}/>
            </div>
        </div>
    )
}

export default Navbar