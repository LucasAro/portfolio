import React from 'react';

function Header( { scrollToSection } )
{
	return (
		<header className="bg-white text-gray-800 shadow-md fixed w-full top-0 left-0 z-50 border-b-2 border-blue-500">
			<div className="container mx-auto flex justify-between items-center p-4">
				<h1 className="text-2xl font-bold">Lucas Rodrigues</h1>
				<nav className="flex space-x-4">
					<button onClick={() => scrollToSection( '#sobre' )} className="hover:underline">
						Sobre Mim
					</button>
					<button onClick={() => scrollToSection( '#projetos' )} className="hover:underline">
						Projetos
					</button>
					<button onClick={() => scrollToSection( '#contato' )} className="hover:underline">
						Contato
					</button>
				</nav>
			</div>
		</header>
	);
}

export default Header;
