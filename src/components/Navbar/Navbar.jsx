import CartWidget from '../CartWidget/CartWidget'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import './styles.css'

const Navbar = () => {
    return (
        <div className="navbar">
            <div>
                MiLogo
            </div>
            <div>
                <ItemListContainer />
            </div>
            <div>
                <CartWidget />
            </div>
        </div>
    )
}

export default Navbar