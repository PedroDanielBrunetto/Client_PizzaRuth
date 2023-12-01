import { useEffect, useState } from 'react';
import axios from 'axios';
import CardPedidos from "../components/HomeUsers/Card";
import NavbarPizzaRuth from "../components/NavbarPizzaRuth";

export default function HomePizzaria() {
  const [pedidos, setPedidos] = useState([]);
  console.log(pedidos)

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/get-pedidos');

        setPedidos(response.data);
      } catch (error) {
        console.error('Erro ao buscar os pedidos:', error);
      }
    };

    fetchPedidos();
  }, []); 

  return (
    <main>
      <NavbarPizzaRuth />
      <section className="p-10 flex flex-wrap gap-4">
        {pedidos.map((pedido) => (
          <CardPedidos
            key={pedido.idPedido}
            idPedido={pedido.idPedido}
            nmCliente={pedido.nmCliente}
            tel={pedido.celCliente}
            endereco={pedido.endereco}
            itensPedido={pedido.items}
          />
          ))}
      </section>
    </main>
  );
}
