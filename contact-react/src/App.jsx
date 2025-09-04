import React, { useState,useEffect } from 'react';
import './styles.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Sobre from './components/Sobre';
import Projetos from './components/Projetos';
import Contato from './components/Contato';
import Footer from './components/Footer';
import Popup from './components/Popup';

function App()
{
	const [showPopup, setShowPopup] = useState( false );
	const [popupContent, setPopupContent] = useState( { title: '', description: '' } );
	const [formData, setFormData] = useState( { name: '', email: '', message: '' } );
	const [isLoading, setIsLoading] = useState( false );
	const [projects, setProjects] = useState([]);

	const togglePopup = ( content ) =>
	{
		setShowPopup( !showPopup );
		setPopupContent( content || { title: '', description: '' } );
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		setIsLoading(true);

		// Criar link mailto com os dados do formulário
		const subject = `Contato de ${formData.name} - Portfolio`;
		const body = `Nome: ${formData.name}%0AEmail: ${formData.email}%0A%0AMensagem:%0A${formData.message}`;
		const mailtoLink = `mailto:lucasarodrigues@aol.com?subject=${encodeURIComponent(subject)}&body=${body}`;
		
		// Abrir cliente de email
		window.location.href = mailtoLink;

		// Mostrar popup de sucesso
		setPopupContent({
			title: 'Email Criado!',
			description: `Seu cliente de email foi aberto, ${formData.name}! Apenas clique em enviar.`,
		});

		setShowPopup(true);
		setFormData({ name: '', email: '', message: '' });
		setIsLoading(false);
	};

	const handleInputChange = ( e ) =>
	{
		const { name, value } = e.target;
		setFormData( { ...formData, [name]: value } );
	};


	useEffect(() => {
		const username = 'lucasaro';
		const localStorageKey = 'github_projects_data';
		const today = new Date().toISOString().split('T')[0];
		const token = process.env.REACT_APP_GITHUB_TOKEN;

		const savedData = JSON.parse(localStorage.getItem(localStorageKey));

		if (savedData && savedData.date === today) {
			setProjects(savedData.projects);
		} else
		{
			fetch(`https://api.github.com/users/${username}/repos`)
			.then(response => response.json())
			.then(async data => {
				const reposWithReadme = await Promise.all(
				data.map(async repo => {
					const readmeResponse = await fetch(
					`https://api.github.com/repos/${username}/${repo.name}/readme`);
					if (readmeResponse.ok) {
						const readmeData = await readmeResponse.json();
						const content = decodeBase64(readmeData.content);
						const firstParagraph = content.split('\n\n')[1];
						return {
							title: repo.name,
							description: firstParagraph,
							repository: repo.html_url,
						};
					} else {
						return null;
					}
				})
				);

				const filteredProjects = reposWithReadme.filter(project => project !== null);

				setProjects(filteredProjects);
				localStorage.setItem(
				localStorageKey,
				JSON.stringify({ date: today, projects: filteredProjects })
				);
			})
			.catch(error => console.error('Erro ao buscar os repositórios:', error));
		}
	}, []);


	const scrollToSection = (id) => {
		const section = document.querySelector(id);
		if (section) {
			const offsetPosition = section.getBoundingClientRect().top + window.scrollY - 98;

			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};

	function decodeBase64(base64) {
		const binaryString = window.atob(base64.replace(/\n/g, ''));
		const len = binaryString.length;
		const bytes = new Uint8Array(len);
		for (let i = 0; i < len; i++) {
		bytes[i] = binaryString.charCodeAt(i);
		}
		const decoder = new TextDecoder('utf-8');
		return decoder.decode(bytes);
	}

	return (
		<div>
			{/* Conteúdo principal com opacidade reduzida quando o Popup estiver aberto */}
			<div className={`transition-all duration-300 ${showPopup ? 'blur-sm' : ''}`}>
				<Header scrollToSection={scrollToSection} />

				<HeroSection scrollToSection={scrollToSection}/>

				<Sobre />

				<Projetos projects={projects} togglePopup={togglePopup} />

				<Contato
					formData={formData}
					handleInputChange={handleInputChange}
					handleSubmit={handleFormSubmit}
					isLoading={isLoading} // Passa o estado de carregamento para o componente Contato
				/>

				<Footer />
			</div>

			{/* Popup separado do conteúdo principal */}
			{showPopup && (
				<Popup
					show={showPopup}
					onClose={() => setShowPopup( false )}
					title={popupContent.title}
					content={popupContent.description}
					repository={popupContent.repository}
				/>
			)}
		</div>
	);
}

export default App;