import logo from "../assets/logo96.png"

export default function Footer(){
    return(
        <footer className="flex md:flex-col p-4 px-48 justify-around bg-[#7D2C2C]">
            <div>
                <img src={logo}/>
            </div>
            <div className="flex flex-col">
                <a href="#" className="text-white text-lg font-medium">PIZZAS</a>
                <a href="#" className="text-white text-lg font-medium">PROMOÇÕES</a>
                <a href="#" className="text-white text-lg font-medium">SOBRE NÓS</a>
            </div>
            <div>

            </div>
        </footer>
    )
}