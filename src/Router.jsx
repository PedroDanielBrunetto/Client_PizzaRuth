import { Route, Routes } from "react-router-dom";
import Home from  "./App";
import Acess from "./pages/Acess";
import Register from "./pages/Register";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/acesso" element={<Acess/>}/>
            <Route path="/registro" element={<Register/>}/>
        </Routes>
    )
}