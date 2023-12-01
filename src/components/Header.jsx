import "./Header.css"
import logo from "../assets/logo96.png"
import menu from "../assets/menu.png"
import login from "../assets/login.png"
import { useState } from "react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import carrinho from "../assets/icons8-carrinho-de-compras-50.png"
import Cookies from "js-cookie"

export default function Header({logado}){
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const navigate = useNavigate();

    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    const deslog = () => {
        Cookies.remove('idUser')
    };

    return(
        <header className="w-full header">
            <div className="logo">
                <a href="/">
                    <img src={logo} alt={logo} className="w-24"/>
                </a>
            </div>
            <button onClick={onClick} >
                <img src={menu} className={`menu-icon w-10 ${isActive ? "xC" : "xO"}`} />
                <img src={menu} className={`menu-icon w-10 ${isActive ? "xO" : "xC"}`} />
            </button>
            <ul ref={dropDownRef} className={`flex items-center ${isActive ? "active" : "navbar"}`}>
                <a className="md:mb-3" href="/acesso" onClick={deslog}><img src={login} className="w-14 md:7"/></a>
                {logado ? <a href="/carrinho"><img src={carrinho}/></a> : <></>}
            </ul>
        </header>
    )
}