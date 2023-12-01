// Card.jsx
import React, { useState } from "react";
import carrinho from "../../assets/carrinho.png";
import './Card.css'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Card(props) {
  const [quantidade, setQuantidade] = useState(1);
  const Navegar = useNavigate();

  const adicionarAoCarrinho = () => {
      var id = Cookies.get('idUser');
      if(!id){
          Navegar('/acesso')
      }else{
          const produtoNoCarrinho = {
            id: props.idPizza,
            nome: props.nome,
            valor: props.valor,
            quantidade: quantidade,
          };
    const carrinhoExistente = JSON.parse(localStorage.getItem("carrinho")) || [];
    const novoCarrinho = [...carrinhoExistente, produtoNoCarrinho];
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));

    alert("Produto adicionado ao carrinho!");
    }
};

return (
    <div className="rounded-lg p-4 bg-opacity-100 box-border shadow-xl border border-black flex flex-col">
      <img src={`http://localhost:3000/uploads/${props.url}`} className="w-96 h-48 rounded-sm" alt={props.nome} />
      <div className="pt-4 flex flex-col gap-2">
        <h1 className="text-white text-center text-xl font-semibold">{props.nome}</h1>
        <h3 className="text-white text-center text-base font-light">{props.ingredientes}</h3>
        <h3 className="text-white text-center text-base font-light">{props.descricao}</h3>
        <h3 className="text-white text-center text-lg font-medium">R$ {props.valor}</h3>
        <div className="items-center flex justify-center">
          <div className="flex items-center">
                <p className="font-light text-white">Quantidade: </p>
                <input
                    type="number"
                    min="1"
                    value={quantidade}
                    onChange={(e) => setQuantidade(parseInt(e.target.value))}
                    className="w-12 ml-2 text-center border border-gray-300 rounded-md"
                />
            <button onClick={adicionarAoCarrinho} className="flex items-center font-bold text-white ml-2">
              <img src={carrinho} className="w-12" alt="Adicionar ao Carrinho" /> ADICIONAR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
