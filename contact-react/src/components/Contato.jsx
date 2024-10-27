import React from 'react';

function Contato({ formData, handleInputChange, handleSubmit, isLoading }) {
  return (
    <section id="contato" className="container w-[90%] mx-auto px-4 my-8 bg-white p-6 rounded-lg shadow-md border-2 border-blue-500">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Contato</h2>
      <p className="mb-6">Gostou do meu trabalho? Vamos conversar!</p>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nome:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Mensagem:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className={`bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-full shadow-lg transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar Mensagem'}
        </button>
      </form>
    </section>
  );
}

export default Contato;
