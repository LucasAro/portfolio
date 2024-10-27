import React from 'react';
import { FaGithub } from 'react-icons/fa';

function Popup( { show, onClose, title, content, repository = null } )
{
	if ( !show ) return null;

	const handleClose = ( e ) =>
	{
		if ( e.target.classList.contains( 'popup' ) )
		{
			onClose();
		}
	};

	return (
		<div
			className="popup fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
			onClick={handleClose}
			role="dialog"
			aria-labelledby="popup-title"
			aria-describedby="popup-content"
		>
			<div className="popup-content bg-white text-gray-800 p-8 rounded-xl relative shadow-2xl border-4 border-blue-500 max-w-lg w-[90%]">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-blue-500 text-3xl font-bold hover:text-blue-700 transition-colors"
					aria-label="Fechar popup"
				>
					&times;
				</button>
				<h3 id="popup-title" className="text-3xl font-bold mb-6 text-blue-600">{title}</h3>
				<p id="popup-content" className="text-lg">{content}</p>
				{repository && (
					<p className='hover:text-blue-600 text-blue-500 text-xl mt-5'>
						<a
							href={repository}
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
		</div>
	);
}

export default Popup;
