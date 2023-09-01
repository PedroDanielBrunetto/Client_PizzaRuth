import Card from "./components/CardsPizzas/Card"
import Header from "./components/Header"
import Footer from "./components/Footer"


import brigadeiro from "./assets/pizzas/brigadeiro.jpg"
import calabresa from "./assets/pizzas/calabresa.jpg"
import california from "./assets/pizzas/california.jpg"
import frango from "./assets/pizzas/frango.jpg"
import marguerita from "./assets/pizzas/marguerita.jpg"
import mussarela from "./assets/pizzas/mussarela.jpg"
import napolitana from "./assets/pizzas/napolitana.jpg"
import portuguesa from "./assets/pizzas/portuguesa.jpg"
import romeujulieta from "./assets/pizzas/romeujulieta.jpg"

function App() {

  return (
    <>
      <Header/>

      <h2 className="pb-6 text-5xl font-bold text-red-900 text-center p-12 uppercase">MAIS COMPRADAS</h2>
      
      <section className="flex justify-center p-12 media">
        <div className="flex gap-12 md:flex-col">
          <Card 
            image={brigadeiro} 
            sabor="Brigadeiro" 
            ingredientes="Chocolate, leite condensado" 
            preco="$5.00"
          />
          <Card 
            image={calabresa} 
            sabor="Calabresa" 
            ingredientes="Molho, calabresa, cebola" 
            preco="$6.00"
          />
          <Card 
            image={california} 
            sabor="California" 
            ingredientes="Abacaxi, presunto, queijo" 
            preco="$7.00"
          />
        </div>
      </section>

      <section className="flex justify-center p-12 media">
        <div className="flex gap-12 md:flex-col">
          <Card 
            image={frango} 
            sabor="Frango" 
            ingredientes="Frango desfiado, molho, milho" 
            preco="$6.50"
          />
          <Card 
            image={marguerita} 
            sabor="Marguerita" 
            ingredientes="Tomate, manjericão, queijo mussarela" 
            preco="$7.50"
          />
          <Card 
            image={mussarela} 
            sabor="Mussarela" 
            ingredientes="Queijo mussarela, molho de tomate" 
            preco="$5.50"
          />
        </div>
      </section>

      <section className="flex justify-center p-12 media">
        <div className="flex gap-12 md:flex-col">
          <Card 
            image={napolitana} 
            sabor="Napolitana" 
            ingredientes="Molho de tomate, azeitonas, queijo" 
            preco="$6.50"
          />
          <Card 
            image={portuguesa} 
            sabor="Portuguesa" 
            ingredientes="Presunto, ovo, cebola, pimentão" 
            preco="$7.50"
          />
          <Card 
            image={romeujulieta} 
            sabor="Romeu e Julieta" 
            ingredientes="Goiabada, queijo" 
            preco="$6.00"
          />
        </div>
      </section>
      <Footer/>
    </>
  )
}

export default App
