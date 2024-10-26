import React from 'react';

function HeroSection({ scrollToSection })
{
	return (
		<section id="hero" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-32 text-center rounded-lg mx-auto my-24 w-[90%]">
			<div className="max-w-3xl mx-auto p-4">
				<h2 className="text-4xl font-bold mb-4">Olá, sou Lucas Rodrigues</h2>
				<p className="mb-6 text-justify">Desenvolvedor Full-Stack com experiência em desenvolvimento de aplicações web e sistemas distribuídos usando tecnologias como AWS, HTML5, CSS3, JavaScript (JS), PHP, Laravel, NextJs, NestJs, Python, MySQL, React, Node.js e Expo. Atualmente cursando Ciências da Computação (6º período), com experiência em microserviços e segurança de sistemas. </p>
				<a
					onClick={() => scrollToSection('#projetos')}
					className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-full shadow-lg transition"
				>
					Veja Meus Projetos
				</a>
				<a
					href="../../Curriculo_LucasRodrigues.pdf"
					download
					className="ml-4 bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-full shadow-lg transition"
				>
					Baixar Currículo
				</a>
			</div>
		</section>
	);
}

export default HeroSection;
