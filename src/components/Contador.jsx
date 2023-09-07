import { useState } from "react"
import { Button } from '@mui/material';


const Contador = () => {

    const [count, setCount] = useState(0);
    const handCount = () => setCount(count + 1);
    
    return (
        <div> 
            {count} 
            <hr/>
            <Button variant="outlined" onClick={handCount}>Sumar</Button >
        </div>
    );
};

export default Contador