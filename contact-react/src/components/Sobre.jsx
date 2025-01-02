import React from 'react';
import { FaReact, FaNodeJs, FaAws, FaDatabase, FaDocker, FaPython, FaPhp, FaShieldAlt, FaTerminal, FaMicrochip } from 'react-icons/fa';
import { SiNestjs, SiCypress, SiJest, SiLinux, SiReact, SiTypescript, SiTailwindcss, SiSocketdotio } from 'react-icons/si';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

function Sobre() {
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
    <section id="sobre" className="container w-[90%] mx-auto px-2 sm:px-6 lg:px-8 my-8 relative border-2 border-blue-500 bg-white p-6 rounded-lg shadow-lg overflow-visible">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Sobre Mim</h2>
      <p className="text-justify">
        Sou um desenvolvedor Full-Stack apaixonado por tecnologia, inovação e aprendizado contínuo. Minha trajetória é impulsionada pelo desejo de resolver problemas complexos com soluções criativas, elegantes e escaláveis. Tenho ampla experiência em desenvolvimento web, atuando tanto no front-end quanto no back-end, com tecnologias como React, Node.js, NestJS, AWS e arquitetura de microserviços.
      </p>
      <p className="text-justify pt-1">
        Já liderei e participei de projetos que vão desde sistemas de gestão de tarefas e plataformas de e-commerce até dashboards de monitoramento em tempo real e sistemas interativos com reconhecimento de gestos. Meu foco está em oferecer experiências de usuário seguras e eficientes, utilizando boas práticas de programação, testes automatizados e segurança da informação. Atualmente, estou expandindo meus conhecimentos em Machine Learning, com interesse em criar soluções inovadoras que combinem inteligência artificial e visão computacional para transformar desafios em oportunidades.
      </p>
      <div className="skills-icons flex flex-wrap gap-6 mt-8 justify-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center w-24">
            {skill.icon}
            <span className="mt-2 text-center">{skill.name}</span>
          </div>
        ))}
      </div>
      {/* Timeline component remains unchanged */}
      <VerticalTimeline className="mt-12">
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2024 - Atualmente"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Wide Digital - Desenvolvedor Full-Stack Pleno</h3>
          <p class="relative text-justify pl-6 before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-xl">
            Desenvolvi um sistema interativo para TVs corporativas utilizando Python, Machine Learning e Visão Computacional (OpenCV, MediaPipe, TensorFlow) que exibiu conteúdos dinâmicos e coletou feedbacks gestuais de funcionários. O sistema reconhecia automaticamente gestos como "joinha" (like) ou "deslize" (skip) capturados por câmera ao detectar a presença de um usuário, armazenando as interações em um banco de dados e exibindo insights em um dashboard analítico. Essa solução inovadora melhorou a comunicação interna e permitiu à empresa avaliar a receptividade dos conteúdos de forma prática e eficiente.
          </p>
          <p className="text-justify relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-xl">
					  Implementei testes automatizados de front-end e back-end utilizando Cypress, Jest e Postman. Isso facilitou o processo de validação que até então era realizado manualmente, aumentando a eficiência e a confiabilidade no desenvolvimento.
					</p>
					<p className="text-justify relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-xl">
						Desenvolvi um sistema web para envio e gestão de fotos e vídeos voltado para Digital Signage, com foco em dispositivos móveis (Android e iOS), garantindo responsividade tanto para mobile quanto para desktop. A plataforma permite aos usuários editar imagens (cortar, redimensionar) e enviá-las para exibição em TVs corporativas, facilitando a interação entre usuários e dispositivos de exibição, otimizando a comunicação visual nas empresas.
					</p>

				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2023 - 2024"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Wide Digital - Desenvolvedor Full-Stack Junior</h3>
					<p class="relative pl-6 text-justify before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-xl">
						Desenvolvi funcionalidades de login seguro com autenticação de dois fatores, integrações de notificações em tempo real com WebSockets, e otimizei o tempo de carregamento das páginas web em 30%.
					</p>
					<p class="relative text-justify pl-6 before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-xl">
					Fui responsável pela criação de relatórios dinâmicos para visualização e análise de dados, utilizando stored procedures para otimizar a extração de informações do banco de dados MySQL. Desenvolvi interfaces de apresentação dos relatórios empregando PHP e JavaScript. Meu trabalho envolveu a integração eficiente entre backend e frontend, garantindo alta performance, segurança e uma experiência de usuário aprimorada.
          </p>

				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					date="2022 - 2023"
					iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
				>
					<h3 className="vertical-timeline-element-title">Wide Digital - Desenvolvedor Full-Stack Trainee</h3>
					<p className="text-justify relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-xl">
						Desenvolvi um mapa interativo usando OpenStreetMap e Leaflet para obter informações dos players em tempo real, utilizando APIs REST e JavaScript. Usei os endereços dos Players na base de dados para criar marcadores interativos que mostravam o status de online e offline, e implementei uma funcionalidade que gerava rotas entre os players com base na menor distância, facilitando o suporte técnico em visitas e diminuindo o tempo de deslocamento. A lógica matemática aplicada envolveu o cálculo de distâncias geodésicas entre coordenadas geográficas.
					</p>
					<p className="text-justify relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-blue-600 before:text-xl">
					  Desenvolvi e implementei uma nova funcionalidade de login seguro com autenticação de dois fatores (2FA), aumentando a segurança da plataforma.
					</p>
				</VerticalTimelineElement>
			</VerticalTimeline>
    </section>
  );
}

export default Sobre;
