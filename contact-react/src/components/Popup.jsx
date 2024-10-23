import React from 'react';

function Popup( { show, onClose, title, content } )
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
			className="popup fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
			onClick={handleClose}
			role="dialog"
			aria-labelledby="popup-title"
			aria-describedby="popup-content"
		>
			<div className="popup-content bg-white text-gray-800 p-8 rounded-xl relative shadow-2xl border-4 border-blue-500 max-w-lg w-full">
				<button
					onClick={onClose}
					className="absolute top-4 right-4 text-blue-500 text-3xl font-bold hover:text-blue-700 transition-colors"
					aria-label="Fechar popup"
				>
					&times;
				</button>
				<h3 id="popup-title" className="text-3xl font-bold mb-6 text-blue-600">{title}</h3>
				<p id="popup-content" className="text-lg">{content}</p>
			</div>
		</div>
	);
}

export default Popup;
