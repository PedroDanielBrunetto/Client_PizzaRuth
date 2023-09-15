import { Route, Routes } from "react-router-dom";
import Home from  "./App";
import Acess from "./pages/Acess";

export default function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/acesso" element={<Acess/>}/>
        </Routes>
    )
}