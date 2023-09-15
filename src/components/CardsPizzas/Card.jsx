import carrinho from "../../assets/carrinho.png"

export default function Card(props){
    return(
        <div className="rounded-lg p-4 bg-red-400 flex flex-col">
            <img src={props.image} className="w-96 h-48 rounded-sm"/>
            <div className="pt-4 flex flex-col gap-2">
                <h1 className="text-center text-xl font-semibold">{props.nome}</h1>
                <h3 className="text-center text-lg font-medium">R$ {props.valor}</h3>
                <div className="items-center text-center"><button><img src={carrinho} className="w-12"/></button></div>
            </div>
            
        </div>
    )
}