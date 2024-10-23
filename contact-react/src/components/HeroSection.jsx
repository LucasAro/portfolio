import React from 'react';

function HeroSection()
{
	const handleDownloadClick = async () =>
	{
		try
		{
			await fetch( 'http://localhost:4000/download/increment', {
				method: 'POST',
			} );
			console.log( 'Contador de download incrementado com sucesso' );
		} catch ( error )
		{
			console.error( 'Erro ao incrementar o contador de download:', error );
		}
	};

	return (
		<section id="hero" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-32 text-center rounded-lg mx-auto my-24 w-4/5">
			<div className="max-w-xl mx-auto p-4">
				<h2 className="text-4xl font-bold mb-4">Olá, sou Lucas Rodrigues</h2>
				<p className="mb-6">Desenvolvedor Full-Stack especializado em React, NestJS, MySQL, PHP, TypeScript e mais!</p>
				<a
					href="#projetos"
					className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-full shadow-lg transition"
				>
					Veja Meus Projetos
				</a>
				<a
					href="/curriculo.pdf"
					download
					onClick={handleDownloadClick}
					className="ml-4 bg-green-700 hover:bg-green-800 text-white py-3 px-6 rounded-full shadow-lg transition"
				>
					Baixar Currículo
				</a>
			</div>
		</section>
	);
}

export default HeroSection;
