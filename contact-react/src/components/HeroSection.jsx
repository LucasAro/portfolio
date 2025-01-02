import React, { useEffect, useState } from 'react';

function HeroSection({ scrollToSection }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 200); // Delay para exibir a animação
  }, []);

  return (
    <section
      id="hero"
      className={`bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white py-24 text-center rounded-lg mx-auto my-24 w-[90%] shadow-2xl hover:shadow-cyan-500/50 transition-shadow duration-300 ease-in-out ${
        isVisible ? 'animate-fadeIn' : 'opacity-0'
      }`}
    >
      <div className="max-w-3xl mx-auto p-6 w-[90%] ">
        <h2 className="text-5xl font-extrabold mb-6 drop-shadow-md animate-slideUp">
          Olá, sou Lucas Rodrigues
        </h2>
        <p className="mb-8 text-lg text-justify leading-relaxed animate-slideUp delay-100">
          Desenvolvedor Full-Stack Pleno com ampla experiência no desenvolvimento de aplicações web e sistemas distribuídos. Possuo expertise em arquitetura de microserviços, segurança de sistemas e integração contínua (CI/CD). Sou apaixonado por inovação tecnológica, sempre me dedicando a aprender novas linguagens, frameworks e ferramentas para otimizar processos e criar soluções escaláveis.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-slideUp delay-200">
          <a
            onClick={() => scrollToSection('#projetos')}
            className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-8 rounded-full shadow-lg transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-cyan-500/30 cursor-pointer animate-pulse"
          >
            Veja Meus Projetos
          </a>
          <a
            href="Curriculo_LucasRodrigues.pdf"
            download
            className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-full shadow-lg transform transition-all duration-200 ease-in-out hover:scale-105 hover:shadow-green-500/30 cursor-pointer animate-pulse delay-150"
          >
            Baixar Currículo
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
