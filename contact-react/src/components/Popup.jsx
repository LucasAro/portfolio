import React from 'react';
import ReactMarkdown from 'react-markdown';

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
			className="popup fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
			onClick={handleClose}
			role="dialog"
			aria-labelledby="popup-title"
			aria-describedby="popup-content"
		>
			<div className="popup-content retro-card p-8 relative max-w-lg w-[90%] mx-4">
				{/* Vintage Header Bar */}
				<div className="retro-header px-4 py-2 mb-6 -mx-8 -mt-8 mb-6">
					<div className="flex justify-between items-center">
						<span className="text-white font-mono text-sm blink">» PROJECT_INFO.EXE</span>
						<button
							onClick={onClose}
							className="text-white hover:text-red-400 text-xl font-bold transition-colors"
							aria-label="Fechar popup"
						>
							✕
						</button>
					</div>
				</div>

				<h3 id="popup-title" className="text-xl font-bold mb-4 text-yellow-400 font-mono">
					&gt; {title}
				</h3>

				<div className="matrix-bg p-4 mb-4">
					<p id="popup-content" className="text-green-600 leading-relaxed">
						<ReactMarkdown>{content}</ReactMarkdown>
					</p>
				</div>

				{repository && (
					<div className="retro-border p-3">
						<a
							href={repository}
							target="_blank"
							rel="noopener noreferrer"
							className="retro-button inline-block text-center w-full"
						>
							&gt; OPEN_REPOSITORY.BAT
						</a>
					</div>
				)}

				<div className="mt-6 text-center">
					<button
						onClick={onClose}
						className="retro-button px-6 py-2"
					>
						&gt; CLOSE_WINDOW.EXE
					</button>
				</div>
			</div>
		</div>
	);
}

export default Popup;
