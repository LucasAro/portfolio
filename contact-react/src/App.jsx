import React, { useState } from 'react';
import './styles.css';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaPython, FaPhp, FaShieldAlt, FaTerminal, FaMicrochip } from 'react-icons/fa';
import { SiNestjs, SiCypress, SiJest, SiLinux, SiReact } from 'react-icons/si';
import { FaFigma, FaHtml5 } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiSocketdotio } from 'react-icons/si';
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

	const togglePopup = ( content ) =>
	{
		setShowPopup( !showPopup );
		setPopupContent( content || { title: '', description: '' } );
	};

	const handleFormSubmit = async ( e ) =>
	{
		e.preventDefault();

		try
		{
			const response = await fetch( 'https://contact-api2-frosty-sunset-7890.fly.dev/messages', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify( formData ),
			} );

			if ( response.ok )
			{
				setPopupContent( {
					title: 'Mensagem Enviada!',
					description: `Obrigado pelo contato, ${formData.name}! Sua mensagem foi recebida.`,
				} );
			} else
			{
				setPopupContent( {
					title: 'Erro ao Enviar',
					description: 'Ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.',
				} );
			}
		} catch ( error )
		{
			console.error( 'Erro:', error );
			setPopupContent( {
				title: 'Erro ao Enviar',
				description: 'Erro ao enviar a mensagem. Tente novamente mais tarde.',
			} );
		}

		setShowPopup( true ); // Mostrar o popup com o resultado do envio
		setFormData( { name: '', email: '', message: '' } ); // Limpar o formulário
	};

	const handleInputChange = ( e ) =>
	{
		const { name, value } = e.target;
		setFormData( { ...formData, [name]: value } );
	};

	const projects = [
		{
			title: 'Sistema de Gestão de Tarefas para Equipes',
			description: 'Um sistema completo para gestão de tarefas em equipes, com funcionalidades de criação, atribuição, monitoramento e conclusão de tarefas. Desenvolvido com React no front-end e NestJS no back-end, incluindo autenticação de usuários e notificações em tempo real com WebSockets.',
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

				<Contato formData={formData} handleInputChange={handleInputChange} handleSubmit={handleFormSubmit} />

				<Footer />
			</div>

			{/* Popup separado do conteúdo principal */}
			{showPopup && (
				<Popup
					show={showPopup}
					onClose={() => setShowPopup( false )}
					title={popupContent.title}
					content={popupContent.description}
				/>
			)}
		</div>
	);
}

export default App;
