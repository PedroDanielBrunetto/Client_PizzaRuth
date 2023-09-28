import Card from "./components/CardsPizzas/Card"
import Header from "./components/Header"

import brigadeiro from "./assets/pizzas/brigadeiro.jpg"
import calabresa from "./assets/pizzas/calabresa.jpg"
import california from "./assets/pizzas/california.jpg"
import frango from "./assets/pizzas/frango.jpg"
import marguerita from "./assets/pizzas/marguerita.jpg"
import mussarela from "./assets/pizzas/mussarela.jpg"
import napolitana from "./assets/pizzas/napolitana.jpg"
import portuguesa from "./assets/pizzas/portuguesa.jpg"
import romeujulieta from "./assets/pizzas/romeujulieta.jpg"
import Landing from "./components/Landing"

import nossaspizzas from "./assets/text_nossaspizzas.png"
import promocao1 from "./assets/promocoes/2 PIZZAS CALABRESAS GANHE 1 COCA!.png"
import promocoes from "./assets/promocoes/promocoes.png"

const pizzas = [{
  'id': 1,
  'image': portuguesa,
  'sabor': 'Portuguesa',
  'valor': '40,00'
},
{
  'id': 2,
  'image': calabresa,
  'sabor': 'Calabresa',
  'valor': '30,00'
},
{
  'id': 3,
  'image': mussarela,
  'sabor': 'Mussarela',
  'valor': '25,00'
},
{
  'id': 4,
  'image': frango,
  'sabor': 'Frango especial',
  'valor': '35,00'
},
{
  'id': 5,
  'image': napolitana,
  'sabor': 'Napolitana italiana',
  'valor': '52,00'
},
{
  'id': 6,
  'image': marguerita,
  'sabor': 'Marguerita clássica',
  'valor': '40,00'
},
{
  'id': 7,
  'image': california,
  'sabor': 'Californication',
  'valor': '30,00'
},
{
  'id': 8,
  'image': romeujulieta,
  'sabor': 'Romeu e Julieta',
  'valor': '30,00'
},
{
  'id': 9,
  'image': brigadeiro,
  'sabor': 'Brigadeiro',
  'valor': '30,00'
}
]

const promos = [{
  'Titulo': 'Toda Quarta-feira se você comprar 2 pizzas de calabresa você ganha 1 coca-cola!'
},
{
  'Titulo': 'Nas quintas comemos pizza! Compre 2 pizzas de categoria B e ganhe 1 mussarela!'
},
{
  'Titulo': 'Segunda maluca! Se comprar qualquer pizza na segunda, ganhe um brownie super gostoso.'
}
]

function App() {

  return (
    <>
      <Header/>
    
    <section>
      <Landing/>
    </section>
    <section id="pizzas" className="pt-48 md:pt-36">
      <div className="w-full items-center flex justify-center"><img src={nossaspizzas} className="w-[486px]"/></div>
      <section className="flex justify-center p-12 media">
        <div className="flex gap-12 md:flex-col flex-wrap">
          {pizzas.map((pizza) => 
          <div key={pizza.id}>
            <Card nome={pizza.sabor} valor={pizza.valor} image={pizza.image}/>
          </div>
          )}
        </div>
      </section>
    </section>
    <section id="promos" className="pt-48 md:pt-36">
      <div className="w-full items-center flex justify-center"><img src={promocoes} className="w-[486px]"/></div>
      <section className="flex justify-center p-12 media">
        <div className="flex gap-12 md:flex-col flex-wrap">
          {promos.map((promo) => 
          <div className="w-96 rounded-lg p-4 bg-opacity-100 box-border shadow-xl border border-black flex flex-col">
          <img src={promocao1} className="w-96 h-48 rounded-sm"/>
            <div className="pt-4 flex flex-col gap-2">
                <h1 className="text-white text-center text-xl font-semibold">{promo.Titulo}</h1>
            </div>
          </div>
          )}
        </div>
      </section>
    </section>
    </>
  )
}

export default App
