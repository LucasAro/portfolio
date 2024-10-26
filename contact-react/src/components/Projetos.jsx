import React from 'react';

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
					</div>
				) )}
			</div>
		</section>
	);
}

export default Projetos;
