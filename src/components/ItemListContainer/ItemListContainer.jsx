import './styles.css'

const ItemListContainer = ({Logo}) => {

    return (
        <div className='listItem'> 
            <div className='margenItem'>{Logo}</div> 
            <div className='margenItem'><a href="http://#">Servicios</a></div> 
            <div className='margenItem'><a href="http://#">Calculadora</a></div> 
            <div className='margenItem'><a href="http://#">Nosotros</a></div> 
            <div className='margenItem'><a href="http://#">Contacto</a></div> 
        </div>
        
    );
};

export default ItemListContainer