import { createContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import './App.css';
import ItemListContainer from '../src/component/ItemListContainer';
import NavBar from './component/NavBar';
import ItemDetailContainer from './component/ItemDetailContainer';
import Cart from './component/Cart';
import CartContextProvider from './component/cartContext';



export const contextApp = createContext('Dato') 

function App (){


    return(

    <CartContextProvider> 
    <Router> 
    <div className = "root"> 

      <h1>Game Store</h1>
      <NavBar/>
      <Switch> 
        <Route exact path = '/'> 
        <ItemListContainer greeting = " JUEGOS "/> </Route>
        <Route exact path='/consola/:idConsola' component= {ItemListContainer}></Route>
        <Route exact path = '/item/:idItem' component = {ItemDetailContainer}/> {/* SEGUNDA FORMA PARA DEFINIR EL ENRUTADO */}
        <Route exact path = '/cart' component = {Cart} />
      </Switch>
    </div>
    </Router>
    </CartContextProvider>
  );
}


export default App;