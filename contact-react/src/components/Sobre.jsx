import React from 'react';

function Sobre() {
  const skills = ['Laravel', 'Vue.js', 'React', 'Node.js', 'PHP', 'MySQL', 'PostgreSQL', 'Linux', 'Machine Learning', 'TypeScript', 'Docker', 'AWS', 'Git/GitHub', 'Redis', 'API REST'];

  return (
    <section id="sobre" className="retro-card mx-4 my-8 p-6">
      <h2 className="text-2xl font-bold mb-4 retro-text-glow blink">» ABOUT_ME.EXE</h2>

      <div className="matrix-bg p-4 mb-6">
        <p className="text-green-600 mb-3">
          &gt; Desenvolvedor Full-Stack Pleno com 4+ anos de experiência em sistemas web complexos.
        </p>
        <p className="text-green-600 mb-3">
          &gt; Mentor de desenvolvedores júnior, focado em Clean Code e boas práticas.
        </p>
        <p className="text-green-600 mb-3">
          &gt; Especialista em debug de sistemas críticos e resolução de bugs em produção.
        </p>
        <p className="text-green-600">
          &gt; Trabalho eficiente sob pressão, CI/CD e metodologias ágeis.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-bold text-yellow-400 mb-3 blink">_TECH_STACK.DAT:</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="retro-button text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="retro-border p-4 mb-6">
        <h3 className="text-lg font-bold text-cyan-400 mb-3">EXPERIÊNCIA:</h3>
        <div className="text-green-600 space-y-3">
          <p>• <strong>2025 - Atual:</strong> Desenvolvedor Pleno - Neooh<br/>
            &nbsp;&nbsp;Laravel • Vue.js • Mentoria de Júniors • Arquitetura de Dados</p>
          <p>• <strong>2024:</strong> Desenvolvedor Pleno - Wide Digital<br/>
            &nbsp;&nbsp;Python • IA/ML • Visão Computacional • Sistemas Interativos</p>
          <p>• <strong>2023:</strong> Desenvolvedor Júnior - Wide Digital<br/>
            &nbsp;&nbsp;WebSockets • Autenticação 2FA • Otimização de Performance</p>
          <p>• <strong>2022:</strong> Desenvolvedor Trainee - Wide Digital<br/>
            &nbsp;&nbsp;Mapas Interativos • APIs REST • Geolocalização</p>
        </div>
      </div>

      <div className="retro-border p-4">
        <h3 className="text-lg font-bold text-magenta-400 mb-3">DIFERENCIAIS:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-green-600">
          <div>
            <p className="text-yellow-400 font-bold mb-2">▸ TECHNICAL LEADERSHIP:</p>
            <p className="text-sm">• Code Review & Pair Programming</p>
            <p className="text-sm">• Mentoria técnica para júniors</p>
            <p className="text-sm">• Definição de padrões de código</p>
          </div>
          <div>
            <p className="text-yellow-400 font-bold mb-2">▸ PRODUCTION SUPPORT:</p>
            <p className="text-sm">• Troubleshooting crítico em produção</p>
            <p className="text-sm">• Resolução rápida sob pressão</p>
            <p className="text-sm">• Análise de performance & logs</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Sobre;
