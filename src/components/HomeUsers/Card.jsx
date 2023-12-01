export default function CardPedidos({ idPedido, nmCliente, tel, itensPedido, endereco }) {
  console.log(itensPedido);

  // Calcular o total do pedido
  const totalPedido = itensPedido.reduce((total, item) => total + item.valor * item.qtd, 0);

  return (
    <div className="p-2 bg-white rounded-md flex flex-col w-72">
      <h1 className="text-start text-black font-semibold text-lg">Pedido #{idPedido}</h1>
      <h2 className="text-start text-zinc-600">{nmCliente} - Cel: {tel}</h2>
      <h2 className="text-start text-zinc-600">{endereco}</h2>
      <div className="pt-1">
        <h2 className="text-start text-black">Itens do pedido:</h2>
        {
          itensPedido.map((e) => (
            <p className="text-zinc-600" key={e.name}>
              {e.name} - R$ {e.valor} - {e.qtd}x
            </p>
          ))
        }
        <p className="text-start text-black mt-2">
          Total do Pedido: R$ {totalPedido.toFixed(2)}
        </p>
      </div>
    </div>
  );
}
