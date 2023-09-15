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
}
]

function App() {

  return (
    <>
      <Header/>

      <h2 className="pb-6 text-5xl font-bold text-red-900 text-center p-12 uppercase">MAIS COMPRADAS</h2>
      
      <section className="flex justify-center p-12 media">
        <div className="flex gap-12 md:flex-col">
          {pizzas.map((pizza) => 
          <div key={pizza.id}>
            <Card nome={pizza.sabor} valor={pizza.valor} image={pizza.image}/>
          </div>
          )}
        </div>
      </section>
    </>
  )
}

export default App
