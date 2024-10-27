import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Projetos( { projects, togglePopup } )
{
	return (
		<section id="projetos" className="container w-[90%] mx-auto my-8">
			<h2 className="text-3xl font-bold mb-4 text-blue-600">Projetos</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map( ( project, index ) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-md border-2 border-blue-500 cursor-pointer transition transform hover:scale-105 hover:shadow-lg"
						onClick={() => togglePopup( project )}
					>
						<h3 className="text-xl font-bold mb-2 text-blue-600">{project.title}</h3>
						<p>{project.description.substring( 0, 60 )}...</p>
						{project.repository && (
							<p className='hover:text-blue-600 text-blue-500 text-xl mt-5'>
								<a
									href={project.repository}
									target="_blank"
									rel="noopener noreferrer"
									className="flex items-center no-underline"
								>
									<FaGithub size={20} className="mr-1" />
									Repositório do Projeto
								</a>
							</p>
						)}
					</div>
				) )}
			</div>
		</section>
	);
}

export default Projetos;
