import React, { useState } from 'react';
import './modal.css';
import axios from 'axios';

export function ModalNewPizza({ closeModal }) {
  const [pizzaForm, setPizzaForm] = useState({
    nome: '',
    ingredientes: '',
    descricao: '',
    valor: '',
    imagem: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPizzaForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setPizzaForm((prevForm) => ({ ...prevForm, imagem: file }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append('nome', pizzaForm.nome);
  formData.append('ingredientes', pizzaForm.ingredientes);
  formData.append('descricao', pizzaForm.descricao);
  formData.append('valor', pizzaForm.valor);
  formData.append('imagem', pizzaForm.imagem);
    const response = await axios.post('http://localhost:3000/api/addPizza', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    if (response.status === 200) {
      console.log('Pizza adicionada com sucesso!');
      alert('Produto adicionado com sucesso!');
      location.reload()
      closeModal();
    } else {
      console.error('Erro ao adicionar pizza:', response.data);
      alert('Falha ao adicionar a pizza!');
    }
};

  return (
    <div className="modal-overlay flex items-center justify-center">
      <div className="modal bg-white p-6 rounded-md shadow-md max-h-96 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Adicionar Pizza</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Nome:
            <input
              type="text"
              name="nome"
              value={pizzaForm.nome}
              onChange={handleInputChange}
              required
              className="border p-2 rounded-md w-full"
            />
          </label>
          <label className="block">
            Ingredientes:
            <input
              type="text"
              name="ingredientes"
              value={pizzaForm.ingredientes}
              onChange={handleInputChange}
              required
              className="border p-2 rounded-md w-full"
            />
          </label>
          <label className="block">
            Descrição:
            <input
              type="text"
              name="descricao"
              value={pizzaForm.descricao}
              onChange={handleInputChange}
              required
              className="border p-2 rounded-md w-full"
            />
          </label>
          <label className="block">
            Valor:
            <input
              type="text"
              name="valor"
              value={pizzaForm.valor}
              onChange={handleInputChange}
              required
              className="border p-2 rounded-md w-full"
            />
          </label>
          <label className="block">
            Imagem (máximo 300x300 pixels):
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="border p-2 rounded-md w-full"
            />
          </label>
          {pizzaForm.imagem && (
            <img
              src={URL.createObjectURL(pizzaForm.imagem)}
              alt="Preview"
              className="preview-image mt-2 rounded-md max-w-full h-auto max-h-48"
            />
          )}
          <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
            Adicionar Pizza
          </button>
        </form>
        <button onClick={closeModal} className="mt-4 bg-gray-300 text-gray-800 rounded-md p-2">
          Fechar
        </button>
      </div>
    </div>
  );
}

export function ModalNewProduct({ closeModal }) {
  const [productForm, setProductForm] = useState({
    nome: '',
    descricao: '',
    valor: '',
    imagem: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProductForm((prevForm) => ({ ...prevForm, imagem: file }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const formData = new FormData();
    formData.append('nome', productForm.nome);
    formData.append('descricao', productForm.descricao);
    formData.append('valor', productForm.valor);
    formData.append('imagem', productForm.imagem);
  
      const response = await axios.post('http://localhost:3000/api/addProduct', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      if (response.status === 200) {
        console.log('Produto adicionado com sucesso!');
        alert('Produto adicionado com sucesso!');
        location.reload()
        closeModal();
      } else {
        console.error('Erro ao adicionar produto:', response.data);
      }
  };

  return (
    <div className="modal-overlay flex items-center justify-center">
      <div className="modal bg-white p-6 rounded-md shadow-md max-h-96 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Adicionar Produto</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block">
            Nome:
            <input
              type="text"
              name="nome"
              value={productForm.nome}
              onChange={handleInputChange}
              required
              className="border p-2 rounded-md w-full"
            />
          </label>
          <label className="block">
            Descrição:
            <input
              type="text"
              name="descricao"
              value={productForm.descricao}
              onChange={handleInputChange}
              required
              className="border p-2 rounded-md w-full"
            />
          </label>
          <label className="block">
            Valor:
            <input
              type="text"
              name="valor"
              value={productForm.valor}
              onChange={handleInputChange}
              required
              className="border p-2 rounded-md w-full"
            />
          </label>
          <label className="block">
            Imagem (máximo 300x300 pixels):
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              required
              className="border p-2 rounded-md w-full"
            />
          </label>
          {productForm.imagem && (
            <img
              src={URL.createObjectURL(productForm.imagem)}
              alt="Preview"
              className="preview-image mt-2 rounded-md"
            />
          )}
          <button type="submit" className="bg-blue-500 text-white rounded-md p-2">
            Adicionar Produto
          </button>
        </form>
        <button onClick={closeModal} className="mt-4 bg-gray-300 text-gray-800 rounded-md p-2">
          Fechar
        </button>
      </div>
    </div>
  );
}
