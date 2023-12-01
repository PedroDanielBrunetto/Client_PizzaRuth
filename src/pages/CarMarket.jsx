import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '../components/Header.jsx';
import Cookies from 'js-cookie';

export function CarMarket() {
  const [carrinho, setCarrinho] = useState([]);
  const [tipoPagamento, setTipoPagamento] = useState('');

  useEffect(() => {
    // Recuperar o carrinho do localStorage
    const carrinhoExistente = JSON.parse(localStorage.getItem('carrinho')) || [];
    setCarrinho(carrinhoExistente);
  }, []);

  const calcularTotal = () => {
    return carrinho.reduce((total, produto) => total + produto.valor * produto.quantidade, 0);
  };

  const eliminarProduto = (id) => {
    const novoCarrinho = carrinho.filter((produto) => produto.id !== id);
    localStorage.setItem('carrinho', JSON.stringify(novoCarrinho));
    setCarrinho(novoCarrinho);
  };

  const limparCarrinho = () => {
    localStorage.removeItem('carrinho');
    setCarrinho([]);
  };
  
  console.log(carrinho, tipoPagamento)
  const realizarPedido = async () => {
    const id = Cookies.get('idUser');
    try {
      if (carrinho && tipoPagamento) {
        const response = await axios.post('http://localhost:3000/realizar-pedido', {
          pedidoItens: carrinho,
          tipoPagamento,
          idCliente: id
        });
        
        if (response.status === 200) {
          // Limpar carrinho no sucesso
          limparCarrinho();
          alert('Pedido realizado com sucesso!');
        } else {
          // Tratar erro
          console.error('Erro ao realizar o pedido:', response.statusText);
        }
      } 
      else {
        alert('Você precisa adicionar pelo menos 1 item no carrinho e selecionar o método de pagamento.')
      }
    } catch (error) {
      console.error('Erro ao realizar o pedido:', error);
    }
  };

  return (
    <>
      <Header />
      <section className="pt-24 md:pt-3 flex justify-center">
        <div className="bg-white p-3 w-2/5 rounded-lg">
          <h1 className="text-start font-bold text-3xl ml-3">Olá, </h1>
          <div className="border border-gray-300 p-2 m-3 rounded-md">
            <h2 className="text-start font-bold text-lg">Seu pedido:</h2>
            {carrinho.map((produto) => (
              <div key={produto.id} className="flex justify-between items-center mb-2">
                <p>{produto.nome} - R$ {produto.valor} - Quantidade: {produto.quantidade}</p>
                <button onClick={() => eliminarProduto(produto.id)} className="text-red-500">Eliminar</button>
              </div>
            ))}
            <hr className="my-2" />
            <p className="font-bold">Total: R$ {calcularTotal()}</p>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center">
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold p-2 w-2/4 text-lg rounded-lg"
              onClick={limparCarrinho}
            >
              Limpar Carrinho
            </button>
            <select
              value={tipoPagamento}
              onChange={(e) => setTipoPagamento(e.target.value)}
              className="p-2 border border-gray-300 rounded-md"
            >
              <option value="">Selecione o tipo de pagamento</option>
              <option value="cartao">Cartão de crédito</option>
              <option value="dinheiro">Dinheiro</option>
            </select>
            <button
              type="submit"
              className="bg-green-600 text-white font-semibold p-2 w-2/4 text-lg rounded-lg"
              onClick={realizarPedido}
            >
              Realizar pedido
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
