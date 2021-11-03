import { useState, createContext, useContext } from "react";

const cartContext = createContext([])
export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}){

    const [carList, setCarList] = useState([])

    const addToCart = (DatoCarrito) =>{ 
        
        const prodCart = [...carList]
        if(prodCart.some(i => i.itemCart.id === DatoCarrito.itemCart.id)){
            prodCart.find( (i => i.itemCart.id === DatoCarrito.itemCart.id) ).Cantidad += DatoCarrito.Cantidad
            setCarList(prodCart)
        }else{
            setCarList([...carList, DatoCarrito])
        }
    }

    const borrarItemCarrito = (DatoCarrito2) =>{
        const BorrarProd = carList.filter((prod) => prod.itemCart.id !== DatoCarrito2.itemCart.id);
        setCarList([...BorrarProd])
    }
    const acumuladorCart =()=>{
        return carList.reduce((acumulador, Valor) => acumulador + Valor.Cantidad, 0)
    }
    const precioTotal = () =>{
       
        return carList.reduce((acumulador, Valor)=>(acumulador + (Valor.Cantidad * Valor.itemCart.precio)), 0)
    }
    const cantidadProd =(DatoCarrito)=>{
        return DatoCarrito.Cantidad
    }

    function borrarCarrito () {
        setCarList([])
    }
    return(
        <cartContext.Provider value={{
            carList,
            addToCart,
            borrarItemCarrito,
            acumuladorCart,
            cantidadProd,
            borrarCarrito,
            precioTotal
            }}>
            {children}
        </cartContext.Provider>
    )
}