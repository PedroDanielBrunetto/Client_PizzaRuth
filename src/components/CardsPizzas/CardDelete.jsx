import React, { useEffect, useState } from "react";
import carrinho from "../../assets/carrinho.png";
import './Card.css'
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

export default function CardDelete(props) {
  const Navigate = useNavigate();
  // const Deletar = () => {
  //   const response = axios.delete(`http://localhost:3000/deletar/${props.idPizza}`);
  //   if (response.status === 200) {
  //     alert("pizza deletada com sucesso");
  //   }
  // };
  // Navigate("/novo-produto")

  // useEffect(() => {
  //   Deletar();
  // }, []);

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
            <button className="flex items-center font-semibold text-white ml-2 p-2 border rounded-lg">
              <p className="font-bold text-red-600 text-2xl mr-2">X</p> EXCLUIR
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
