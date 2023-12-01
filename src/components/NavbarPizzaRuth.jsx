import logo from "../assets/logo96.png"

export default function NavbarPizzaRuth(){
  return(
    <header className="bg-white p-4 flex justify-start">
      <img src={logo} alt="logo"/>
        <ul className="flex ml-12 gap-3">
          <li><a href="/HomePizzaRuth" className="text-lg font-bold hover:text-red-600">Pedidos</a></li>
          <li><a href="/novo-produto" className="text-lg font-bold hover:text-red-600">Pizzas e Produtos</a></li>
          <li><a href="/list-clientes" className="text-lg font-bold hover:text-red-600">Clientes</a></li>
        </ul>
    </header>
  )
}