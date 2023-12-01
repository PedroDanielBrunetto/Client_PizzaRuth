import React, { useState, useEffect } from 'react';
import { PlusCircle } from '@phosphor-icons/react';
import CardPizzas from '../components/HomeUsers/CardPizzas';
import NavbarPizzaRuth from '../components/NavbarPizzaRuth';
import { ModalNewPizza, ModalNewProduct } from '../components/Modals/ModalNewPizza';
import CardDelete from '../components/CardsPizzas/CardDelete.jsx';
import axios from 'axios';

export default function NewProduct() {
  const [isPizzaModalOpen, setPizzaModalOpen] = useState(false);
  const [isProductModalOpen, setProductModalOpen] = useState(false);

  const openPizzaModal = () => {
    setPizzaModalOpen(true);
    document.querySelector('header').style.display = 'none';
  };

  const closePizzaModal = () => {
    setPizzaModalOpen(false);
    document.querySelector('header').style.display = 'block';
  };

  const openProductModal = () => {
    setProductModalOpen(true);
    document.querySelector('header').style.display = 'none';
  };

  const closeProductModal = () => {
    setProductModalOpen(false);
    document.querySelector('header').style.display = 'block';
  };

  const [produtos, setProdutos] = useState([]);
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responsePizzas = await axios.get('http://localhost:3000/get-pizzas');
        const responseProdutos = await axios.get('http://localhost:3000/get-produtos');
        
        if (responsePizzas.data) {
          setPizzas(responsePizzas.data);
        } 
        if (responseProdutos.data) {
          setProdutos(responseProdutos.data);
        } 
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <main>
      {/** Renderizar o header apenas quando nenhum modal estiver aberto */}
      {!isPizzaModalOpen && !isProductModalOpen && <NavbarPizzaRuth />}
      <section className="p-10">
        <h1 className="font-bold text-white text-3xl">PIZZAS</h1>
        <button
          className="flex gap-2 p-2 bg-gray-500 rounded-lg items-center my-2"
          onClick={openPizzaModal}
        >
          <PlusCircle size={24} /> <p className="font-semibold">ADICIONAR PIZZA</p>
        </button>
        <div className="flex flex-wrap gap-4 pt-4">
            {pizzas.map((pizza) => (
              <div key={pizza.id_pizza}>
                <CardDelete idPizza={pizza.id_pizza} nome={pizza.nm_pizza} url={pizza.url_pizza} descricao={pizza.descricao} ingredientes={pizza.ingredientes} valor={pizza.vl_pizza}/>
              </div>
            ))}
        </div>
      </section>
      <section className="p-10">
        <h1 className="font-bold text-white text-3xl">PRODUTOS</h1>
        <button
          className="flex gap-2 p-2 bg-gray-500 rounded-lg items-center my-2"
          onClick={openProductModal}
        >
          <PlusCircle size={24} /> <p className="font-semibold">ADICIONAR PRODUTO</p>
        </button>
          <div className="flex flex-wrap gap-4 pt-4">
            {produtos.map((pizza) => (
              <div key={pizza.id_produto}>
                <CardDelete idPizza={pizza.id_produto} nome={pizza.nm_produto} url={pizza.url_produto} descricao={pizza.descricao} valor={pizza.vl_produto}/>
              </div>
            ))}
          </div>
      </section>

      {/* Modais */}
      {isPizzaModalOpen && <ModalNewPizza closeModal={closePizzaModal} />}
      {isProductModalOpen && <ModalNewProduct closeModal={closeProductModal} />}
    </main>
  );
}