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
        Sou um desenvolvedor Full-Stack apaixonado por tecnologia e inovação. Minha jornada profissional é guiada pelo desejo de resolver problemas complexos com soluções elegantes e escaláveis.
        Tenho ampla experiência com desenvolvimento web, abrangendo tanto o front-end quanto o back-end, utilizando tecnologias como React, Node.js, NestJS, e AWS.
      </p>
      <p className="text-justify">
        Já trabalhei em projetos que vão desde sistemas de gestão de tarefas para equipes até plataformas de e-commerce e dashboards de monitoramento em tempo real.
        Em cada um desses projetos, foquei em garantir uma experiência de usuário fluida e segura, aplicando boas práticas de programação, testes automatizados e segurança da informação.
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
        {/* Timeline elements */}
      </VerticalTimeline>
    </section>
  );
}

export default Sobre;
