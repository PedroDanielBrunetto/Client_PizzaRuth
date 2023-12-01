import { useEffect, useState } from "react"
import carrinho from "../../assets/carrinho.png"

export default function CardPizzas(props){
    return(
        <div className="rounded-lg p-4 bg-opacity-100 box-border shadow-xl border border-black flex flex-col">
            <img src={carrinho} className="w-96 h-48 rounded-sm"/>
            <div className="pt-4 flex flex-col gap-2">
                <h1 className="text-white text-center text-xl font-semibold">{props.nome}</h1>
                <h3 className="text-white text-center text-lg font-medium">R$ 50</h3>
                <div className="items-center flex justify-center"><button className="flex items-center font-bold text-white">Editar</button></div>
            </div>
            
        </div>
    )
}