import { Route, Routes } from "react-router-dom";
import Home from  "./App";
import Acess from "./pages/Acess";
import Register from "./pages/Register";
import HomePizzaria from "./pages/HomePizzaria";
import NewProduct from "./pages/NewProduct";
import ListClientes from "./pages/ListClientes";
import { CarMarket } from "./pages/CarMarket";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/acesso" element={<Acess/>}/>
            <Route path="/registro" element={<Register/>}/>
            <Route path="/HomePizzaRuth" element={<HomePizzaria/>}/>
            <Route path="/novo-produto" element={<NewProduct/>}/>
            <Route path="/list-clientes" element={<ListClientes/>}/>
            <Route path="/carrinho" element={<CarMarket/>}/>
        </Routes>
    )
}