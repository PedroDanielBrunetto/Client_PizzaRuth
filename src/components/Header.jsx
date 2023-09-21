import "./Header.css"
import logo from "../assets/logo96.png"
import menu from "../assets/menu.png"
import login from "../assets/login.png"
import { useState } from "react"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

export default function Header(){
    const dropDownRef = useRef(null);
    const [isActive, setIsActive] = useState(false);
    const onClick = () => setIsActive(!isActive);
    const navigate = useNavigate();

    window.addEventListener("scroll", function() {
        var header = document.querySelector("header");
        header.classList.toggle("scrolled", window.scrollY > 50);
    });

    return(
        <header className="w-full header">
            <div className="logo">
                <img src={logo} alt={logo} className="w-24"/>
            </div>
            <button onClick={onClick} >
                <img src={menu} className={`menu-icon w-10 ${isActive ? "xC" : "xO"}`} />
                <img src={menu} className={`menu-icon w-10 ${isActive ? "xO" : "xC"}`} />
            </button>
            <ul ref={dropDownRef} className={`flex items-center ${isActive ? "active" : "navbar"}`}>
                <li><a href="#pizzas" onClick={onClick} className={` ${isActive ? "xC" : "xO"}`}>Pizzas</a></li>
                <li><a href="#" onClick={onClick} className={` ${isActive ? "xC" : "xO"}`}>Promoções</a></li>
                <li><a href="#" onClick={onClick} className={`  ${isActive ? "xC" : "xO"}`}>SOBRE A PIZZA RUTH</a></li>
                <a className="md:mb-3" href="/acesso"><img src={login} className="w-14 md:7"/></a>
            </ul>
        </header>
    )
}