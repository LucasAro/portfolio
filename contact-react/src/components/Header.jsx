import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

function Header({ scrollToSection }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="bg-white text-gray-800 shadow-md fixed w-full top-0 left-0 z-50 border-b-2 border-blue-500">
			<div className="container mx-auto flex justify-between items-center p-4">
				<h1 className="text-xl md:text-2xl font-bold text-blue-600">Lucas Rodrigues</h1>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-4">
					<button
						onClick={() => scrollToSection('#sobre')}
						className="hover:text-blue-600 font-bold text-blue-600 transition transform hover:scale-105 duration-200"
					>
						Sobre Mim
					</button>
					<button
						onClick={() => scrollToSection('#projetos')}
						className="hover:text-blue-600 font-bold text-blue-600 transition transform hover:scale-105 duration-200"
					>
						Projetoss
					</button>
					<button
						onClick={() => scrollToSection('#contato')}
						className="hover:text-blue-600 font-bold text-blue-600 transition transform hover:scale-105 duration-200"
					>
						Contato
					</button>
				</nav>

				{/* Mobile Menu Icon */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="focus:outline-none text-blue-600">
						<FaBars size={20} />
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden bg-white fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-6 p-4">
					{/* Close Button */}
					<button onClick={toggleMenu} className="absolute top-4 right-4 focus:outline-none text-blue-600">
						<FaTimes size={24} />
					</button>

					<button
						onClick={() => {
							toggleMenu();
							scrollToSection('#sobre');
						}}
						className="text-lg  text-blue-600 hover:scale-105 transition transform duration-200"
					>
						Sobre Mim
					</button>
					<button
						onClick={() => {
							toggleMenu();
							scrollToSection('#projetos');
						}}
						className="text-lg  text-blue-600 hover:scale-105 transition transform duration-200"
					>
						Projetos
					</button>
					<button
						onClick={() => {
							toggleMenu();
							scrollToSection('#contato');
						}}
						className="text-lg  text-blue-600 hover:scale-105 transition transform duration-200"
					>
						Contato
					</button>
				</div>
			)}
		</header>
	);
}

export default Header;
