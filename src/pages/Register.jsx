import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Register() {
  const history = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    cpf: '',
    cep: '',
    street: '',
    number: '',  
    neighborhood: '',
    city: '',
    state: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const handleCEPChange = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      const data = response.data;

      setUser((prevUser) => ({
        ...prevUser,
        street: data.logradouro || '',
        neighborhood: data.bairro || '',
        city: data.localidade || '',
        state: data.uf || '',
      }));
    } catch (error) {
      console.error('Error fetching address:', error);
    }
  };

  const handlePasswordChange = (e) => {
    setUser({ ...user, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Verificar se as senhas coincidem
    if (user.password !== user.confirmPassword) {
      alert('As senhas não coincidem. Por favor, verifique.');
      return;
    }
  
    // Verificar se a senha foi fornecida
    if (!user.password) {
      alert('A senha não foi fornecida. Por favor, preencha a senha.');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:3000/register', {
        ...user
      }).then(response => {
        history('/acesso')
        console.log('Registration successful:', response.data);
        alert('Cadastrado com sucesso!');
      });
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Ocorreu um erro ao registrar. Verifique os dados e tente novamente.');
    }
  };
  

  return (
    <section className="">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-2/4 md:w-full">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-12 h-12 mr-2" src={logo} alt="logo" />
          Pizza Ruth
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Criar a conta agora!
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nome completo</label>
                <input type="text" name="name" id="name" onChange={(e) => setUser({ ...user, name: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Nome completo" required=""/>
              </div>
              <div>
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setUser({ ...user, email: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="nome@email.com" required=""/>
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Celular</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="(00) 00000-0000"
                  onChange={(e) => setUser({ ...user, phone: e.target.value })}
                  required
                />
              </div>
              <div>
                <label for="cpf" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CPF</label>
                <input type="text" name="cpf" id="cpf" onChange={(e) => setUser({ ...user, cpf: e.target.value })} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="000.000.000-00" required=""/>
              </div>
              <div>
                <label htmlFor="cep" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">CEP</label>
                <input
                  type="text"
                  name="cep"
                  id="cep"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="CEP"
                  onBlur={(e) => handleCEPChange(e.target.value)}
                  onChange={(e) => setUser({ ...user, cep: e.target.value })}
                  required
                />
              </div>
              <div>
                <label htmlFor="street" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rua</label>
                <input
                  type="text"
                  name="street"
                  id="street"
                  value={user.street}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Rua"
                  required
                />
              </div>

              <div>
                <label htmlFor="neighborhood" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Bairro</label>
                <input
                  type="text"
                  name="neighborhood"
                  id="neighborhood"
                  value={user.neighborhood}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Bairro"
                  required
                />
              </div>

              <div>
                <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cidade</label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={user.city}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Cidade"
                  required
                />
              </div>

              <div>
                <label htmlFor="state" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">UF</label>
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={user.state}
                  readOnly
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="UF"
                  required
                />
              </div>
              <div>
                <label htmlFor="number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Número da Residência</label>
                <input
                  type="text"
                  name="number"
                  id="number"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Número da Residência"
                  onChange={(e) => setUser({ ...user, number: e.target.value })}
                  required
                />
              </div>
              <div>
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Senha</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={handlePasswordChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirmar senha</label>
                <input
                  type="password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  onChange={(e) => setUser({ ...user, confirmPassword: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Criar conta
              </button>
              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Você já tem uma conta? <a href="/Acesso" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Entre agora!</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}