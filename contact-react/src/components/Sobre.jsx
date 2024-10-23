import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaPython, FaPhp, FaShieldAlt, FaTerminal, FaMicrochip } from 'react-icons/fa';
import { SiNestjs, SiCypress, SiJest, SiLinux, SiReact, SiTypescript, SiTailwindcss, SiSocketdotio } from 'react-icons/si';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Sobre()
{
	const skills = [
		{ icon: <FaReact className="text-5xl text-blue-500" />, name: 'React' },
		{ icon: <SiReact className="text-5xl text-cyan-500" />, name: 'React Native' },
		{ icon: <FaNodeJs className="text-5xl text-green-600" />, name: 'Node.js' },
		{ icon: <SiNestjs className="text-5xl text-red-500" />, name: 'NestJS' },
		{ icon: <FaAws className="text-5xl text-yellow-500" />, name: 'AWS' },
		{ icon: <FaDatabase className="text-5xl text-purple-600" />, name: 'MySQL' },
		{ icon: <FaDocker className="text-5xl text-blue-600" />, name: 'Docker' },
		{ icon: <FaPhp className="text-5xl text-indigo-600" />, name: 'PHP' },
		{ icon: <FaPython className="text-5xl text-yellow-400" />, name: 'Python' },
		{ icon: <FaShieldAlt className="text-5xl text-red-600" />, name: 'Segurança da Informação' },
		{ icon: <SiCypress className="text-5xl text-green-500" />, name: 'Cypress' },
		{ icon: <SiJest className="text-5xl text-pink-500" />, name: 'Jest' },
		{ icon: <FaTerminal className="text-5xl text-gray-700" />, name: 'Shell Script' },
		{ icon: <SiLinux className="text-5xl text-black" />, name: 'Linux' },
		{ icon: <FaMicrochip className="text-5xl text-green-500" />, name: 'Arduino' },
		{ icon: <SiTypescript className="text-5xl text-blue-500" />, name: 'TypeScript' },
		{ icon: <SiTailwindcss className="text-5xl text-teal-500" />, name: 'Tailwind CSS' },
		{ icon: <SiSocketdotio className="text-5xl text-gray-600" />, name: 'WebSockets' }
	];

	return (
		<section id="sobre" className="container mx-auto px-4 my-8 relative border-gradient bg-white p-6 rounded-lg shadow-lg">
			<h2 className="text-3xl font-bold mb-4 text-blue-600">Sobre Mim</h2>
			<p>
				Sou um desenvolvedor Full-Stack apaixonado por tecnologia e inovação. Minha jornada profissional é guiada pelo desejo de resolver problemas complexos com soluções elegantes e escaláveis.
				Tenho ampla experiência com desenvolvimento web, abrangendo tanto o front-end quanto o back-end, utilizando tecnologias como React, Node.js, NestJS, e AWS.
			</p>
			<p>
				Já trabalhei em projetos que vão desde sistemas de gestão de tarefas para equipes até plataformas de e-commerce e dashboards de monitoramento em tempo real.
				Em cada um desses projetos, foquei em garantir uma experiência de usuário fluida e segura, aplicando boas práticas de programação, testes automatizados e segurança da informação.
			</p>
			<div className="skills-icons flex flex-wrap gap-6 mt-8">
				{skills.map( ( skill, index ) => (
					<div key={index} className="flex flex-col items-center">
						{skill.icon}
						<span className="mt-2">{skill.name}</span>
					</div>
				) )}
			</div>
			<VerticalTimeline className="mt-12">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2023 - Presente"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Wide Digital - Desenvolvedor Full-Stack Junior</h3>
					<p>
						Desenvolvi funcionalidades de login seguro com autenticação de dois fatores, integrações de notificações em tempo real com WebSockets, e otimizei o tempo de carregamento das páginas web em 30%.
					</p>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2022 - 2023"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Wide Digital - Desenvolvedor Full-Stack Trainee</h3>
					<p>
						Trabalhei na implementação de um mapa interativo usando Leaflet para visualização dinâmica de localização de players e contribui para a migração de uma aplicação de PHP para React Native e NestJS.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
		</section>
	);
}

export default Sobre;
