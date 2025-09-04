import React from 'react';

function Projetos( { projects, togglePopup } )
{
	const featuredProjects = [
		{
			title: "Sistema de IA para TVs Corporativas",
			description: "Sistema interativo com reconhecimento de gestos usando Python, OpenCV e TensorFlow. Coleta feedbacks gestuais e gera insights analíticos.",
			tech: ["Python", "TensorFlow", "OpenCV", "MediaPipe"],
			year: "2024",
			repository: "https://github.com/lucasaro"
		},
		{
			title: "Plataforma E-commerce Laravel + Vue",
			description: "Sistema completo de e-commerce com painel administrativo, gestão de produtos e integração com gateways de pagamento.",
			tech: ["Laravel", "Vue.js", "MySQL", "Docker"],
			year: "2024",
			repository: "https://github.com/lucasaro"
		},
		{
			title: "Dashboard de Monitoramento em Tempo Real",
			description: "Sistema de monitoramento com WebSockets, notificações push e visualização de dados em tempo real.",
			tech: ["Node.js", "WebSockets", "React", "MongoDB"],
			year: "2023",
			repository: "https://github.com/lucasaro"
		}
	];

	return (
		<section id="projetos" className="retro-card mx-4 my-8 p-6">
			<h2 className="text-2xl font-bold mb-4 retro-text-glow blink">» PROJECTS.EXE</h2>
			
			<div className="matrix-bg p-4 mb-6">
				<p className="text-green-600 mb-2">
					&gt; Loading featured projects...
				</p>
				<p className="text-green-600">
					&gt; Displaying most relevant work samples.
				</p>
			</div>

			{/* Featured Projects */}
			<div className="space-y-6 mb-8">
				{featuredProjects.map((project, index) => (
					<div 
						key={index} 
						className="retro-border p-4 hover:bg-blue-900 hover:bg-opacity-20 transition-colors cursor-pointer"
						onClick={() => togglePopup({
							title: project.title,
							description: project.description,
							repository: project.repository
						})}
					>
						<div className="flex justify-between items-start mb-3">
							<h3 className="text-lg font-bold text-yellow-400 font-mono">
								{project.title}
							</h3>
							<span className="text-cyan-400 font-mono text-sm">
								[{project.year}]
							</span>
						</div>
						
						<p className="text-green-600 mb-3 leading-relaxed">
							{project.description}
						</p>
						
						<div className="flex flex-wrap gap-2">
							{project.tech.map((tech, techIndex) => (
								<span key={techIndex} className="bg-blue-800 text-cyan-400 px-2 py-1 text-xs font-mono border border-cyan-400">
									{tech}
								</span>
							))}
						</div>
					</div>
				))}
			</div>

			{/* GitHub Projects */}
			{projects.length > 0 && (
				<>
					<div className="retro-border p-3 mb-4">
						<h3 className="text-lg font-bold text-cyan-400 font-mono">REPOSITÓRIOS_GITHUB.DIR:</h3>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{projects.slice(0, 6).map((project, index) => (
							<div
								key={index}
								className="retro-card p-4 cursor-pointer hover:bg-blue-900 hover:bg-opacity-30 transition-colors"
								onClick={() => togglePopup(project)}
							>
								<h4 className="text-yellow-400 font-mono mb-2">
									&gt; {project.title}
								</h4>
								<p className="text-green-600 text-sm">
									{project.description ? project.description.substring(0, 80) + '...' : 'Repositório GitHub'}
								</p>
							</div>
						))}
					</div>
				</>
			)}
		</section>
	);
}

export default Projetos;
