import React from 'react';

function Contato({ formData, handleInputChange, handleSubmit, isLoading }) {
  return (
    <section id="contato" className="retro-card mx-4 my-8 p-6">
      <h2 className="text-2xl font-bold mb-4 retro-text-glow blink">» CONTACT.EXE</h2>
      
      <div className="matrix-bg p-4 mb-6">
        <p className="text-green-400 mb-2">
          &gt; Initiating communication protocol...
        </p>
        <p className="text-green-400">
          &gt; Ready to receive your message.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-yellow-400 font-bold mb-2 font-mono">
            _USER.NAME:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-black border-2 border-green-400 text-green-400 font-mono focus:outline-none focus:border-yellow-400"
            placeholder="Digite seu nome..."
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-yellow-400 font-bold mb-2 font-mono">
            _USER.EMAIL:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-black border-2 border-green-400 text-green-400 font-mono focus:outline-none focus:border-yellow-400"
            placeholder="seu@email.com"
            required
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-yellow-400 font-bold mb-2 font-mono">
            _MESSAGE.DATA:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-3 py-2 bg-black border-2 border-green-400 text-green-400 font-mono focus:outline-none focus:border-yellow-400"
            rows="5"
            placeholder="Sua mensagem aqui..."
            required
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className={`retro-button text-lg px-8 py-3 ${isLoading ? 'opacity-50' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? '&gt; SENDING...' : '&gt; SEND_EMAIL.BAT'}
          </button>
        </div>
      </form>

      <div className="mt-6 retro-border p-4">
        <p className="text-cyan-400 text-center font-mono">
          &gt; Email will open in your default client
        </p>
        <p className="text-cyan-400 text-center font-mono">
          &gt; Target: lucasarodrigues@aol.com
        </p>
      </div>
    </section>
  );
}

export default Contato;
