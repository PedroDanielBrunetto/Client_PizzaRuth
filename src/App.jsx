import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Card from "./components/CardsPizzas/Card";
import Header from "./components/Header";
import Landing from "./components/Landing";
import nossaspizzas from "./assets/text_nossaspizzas.png";

function App() {
  const [produtos, setProdutos] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [info, setInfos] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const userId = Cookies.get('idUser');
        const response = await axios.get(`http://localhost:3000/get-infos/${userId}`);
        if (response.data) {
          setInfos(true);
        } else {
          setInfos(false);
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };
  
    fetchUserInfo();
  }, []);

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
    <>
      <Header logado={info}/>
    
      <section>
        <Landing/>
      </section>

      <section id="pizzas" className="pt-48 md:pt-36">
        <div className="w-full items-center flex justify-center"><img src={nossaspizzas} className="w-[486px]"/></div>
        <section className="flex justify-center p-12 media">
          <div className="flex gap-10 md:flex-col flex-wrap">
            {pizzas.map((pizza) => (
              <div key={pizza.id_pizza}>
                <Card idPizza={pizza.id_pizza} nome={pizza.nm_pizza} url={pizza.url_pizza} descricao={pizza.descricao} ingredientes={pizza.ingredientes} valor={pizza.vl_pizza}/>
              </div>
            ))}
          </div>
        </section>
      </section>
      <section id="produtos" className="pt-48 md:pt-36">
        <div className="w-full items-center flex justify-start"><h1 className="text-white font-bold text-3xl pl-12">Outros produtos:</h1></div>
        <section className="flex justify-start p-12 media">
          <div className="flex gap-10 md:flex-col flex-wrap">
            {produtos.map((pizza) => (
              <div key={pizza.id_produto}>
                <Card idPizza={pizza.id_produto} nome={pizza.nm_produto} url={pizza.url_produto} descricao={pizza.descricao} valor={pizza.vl_produto}/>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default App;
