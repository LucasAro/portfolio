import React, { useState } from 'react';
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
	const [isLoading, setIsLoading] = useState(false); // Adiciona o estado de carregamento

	const togglePopup = ( content ) =>
	{
		setShowPopup( !showPopup );
		setPopupContent( content || { title: '', description: '' } );
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		setIsLoading(true); // Ativa o estado de carregamento

		try {
			const response = await fetch('https://contact-api2-frosty-sunset-7890.fly.dev/messages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (response.ok) {
				setPopupContent({
					title: 'Mensagem Enviada!',
					description: `Obrigado pelo contato, ${formData.name}! Sua mensagem foi recebida.`,
				});
			} else {
				setPopupContent({
					title: 'Erro ao Enviar',
					description: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.',
				});
			}
		} catch (error) {
			console.error('Erro:', error);
			setPopupContent({
				title: 'Erro ao Enviar',
				description: 'Erro ao enviar a mensagem. Tente novamente mais tarde.',
			});
		}

		setShowPopup(true); // Mostrar o popup com o resultado do envio
		setFormData({ name: '', email: '', message: '' }); // Limpar o formulário
		setIsLoading(false); // Desativa o estado de carregamento
	};

	const handleInputChange = ( e ) =>
	{
		const { name, value } = e.target;
		setFormData( { ...formData, [name]: value } );
	};

	const projects = [
		{
			title: 'To-Do List em Rust',
			description: 'Este é um projeto de estudo, uma aplicação de lista de tarefas criada em Rust. Ele permite que você crie, liste, marque como concluída e apague tarefas. As tarefas são armazenadas remotamente em jsonbin.io.',
			repository: 'https://github.com/LucasAro/todolist-rust.git',
		},
		{
			title: 'Dashboard de Monitoramento em Tempo Real',
			description: 'Uma aplicação de dashboard para monitoramento em tempo real de métricas de sistema, como uso de CPU, memória e status de serviços. Desenvolvido com React e Chart.js, com integração via API REST feita em Node.js e banco de dados MongoDB.',
		},
		{
			title: 'E-commerce com Pagamentos e Carrinho de Compras',
			description: 'Uma aplicação de e-commerce completa, com funcionalidades de catálogo de produtos, carrinho de compras e integração com gateway de pagamento. Utilizei React e Redux no front-end, Node.js com NestJS no back-end, e banco de dados MySQL para gerenciar os produtos e pedidos.',
		},
		{
			title: 'Plataforma de Blog com Editor Rich Text',
			description: 'Desenvolvimento de uma plataforma de blog que permite aos usuários criar e editar posts utilizando um editor rich text. Implementado com React, Node.js e MongoDB.',
		},
	];

	const scrollToSection = (id) => {
		const section = document.querySelector(id);
		if (section) {
			// Calcula a posição da seção menos o offset de 30px
			const offsetPosition = section.getBoundingClientRect().top + window.scrollY - 98;

			// Realiza o scroll suave até a posição ajustada
			window.scrollTo({
				top: offsetPosition,
				behavior: 'smooth',
			});
		}
	};

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
