import React, { useState } from 'react';

function Header({ scrollToSection }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header className="retro-header fixed w-full top-0 left-0 z-50 text-white">
			<div className="container mx-auto flex justify-between items-center p-4">
				<h1 className="text-xl md:text-2xl font-bold retro-text-glow blink">
					LUCAS_RODRIGUES.EXE
				</h1>

				{/* Desktop Navigation */}
				<nav className="hidden md:flex space-x-6">
					<button
						onClick={() => scrollToSection('#sobre')}
						className="retro-button"
					>
						ABOUT
					</button>
					<button
						onClick={() => scrollToSection('#projetos')}
						className="retro-button"
					>
						PROJECTS
					</button>
					<button
						onClick={() => scrollToSection('#contato')}
						className="retro-button"
					>
						CONTACT
					</button>
				</nav>

				{/* Mobile Menu Icon */}
				<div className="md:hidden">
					<button onClick={toggleMenu} className="retro-button">
						{isMenuOpen ? '✕' : '≡'}
					</button>
				</div>
			</div>

			{/* Mobile Navigation */}
			{isMenuOpen && (
				<div className="md:hidden retro-header fixed top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8">
					<button onClick={toggleMenu} className="absolute top-4 right-4 retro-button">
						✕
					</button>

					<button
						onClick={() => {
							toggleMenu();
							scrollToSection('#sobre');
						}}
						className="retro-button text-lg"
					>
						ABOUT
					</button>
					<button
						onClick={() => {
							toggleMenu();
							scrollToSection('#projetos');
						}}
						className="retro-button text-lg"
					>
						PROJECTS
					</button>
					<button
						onClick={() => {
							toggleMenu();
							scrollToSection('#contato');
						}}
						className="retro-button text-lg"
					>
						CONTACT
					</button>
				</div>
			)}
		</header>
	);
}

export default Header;
