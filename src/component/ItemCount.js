import {useState} from "react";
import { Link } from "react-router-dom";


const ItemCount = ( { stock, initial, onAdd} ) =>{

    const [count, setCount] = useState(initial)
    const [cambiarBoton, setCambiarBoton] = useState(true)

    const sumar = () => {
        if(count < stock){
            setCount(count + 1)
        }
        
    }
    
    const restar = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }

    const agregarCarrito = () =>{
        onAdd(count)
        setCambiarBoton(false)
    }
  
    return(
        <div>
            <div className = "contadorCarrito">
                <button  onClick = {restar} > - </button> 
                <label >{count}</label>
                <button  onClick = {sumar} > + </button> 
            </div>
            <div className = "BotonItemCount">
                {cambiarBoton 
                ?  
                <button onClick = {agregarCarrito} > AGREGAR AL CARRITO </button>
                : 
                <div className='BotonFinalizarSeguir'>
                <Link to={'/cart'} >
                    <button> FINALIZAR COMPRA </button>
                </Link>
                <Link to={'/'} >
                    <button> SEGUIR COMPRANDO </button>
                </Link>
                </div>}
            </div>
        </div>
    )
}
export default ItemCount;