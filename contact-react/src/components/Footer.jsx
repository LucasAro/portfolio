import React from 'react';

function Footer()
{
	return (
		<footer className="retro-header mt-8 py-6">
			<div className="container mx-auto px-4">
				<div className="retro-border p-4">
					<div className="text-center space-y-2">
						<p className="text-green-600 font-mono text-lg blink">
							» SYSTEM_TERMINATED.EXE
						</p>
						<p className="text-cyan-400 font-mono text-sm">
							© 2025 Lucas Rodrigues - All rights reserved
						</p>
						<p className="text-yellow-400 font-mono text-xs">
							Built with React • Styled with Y2K nostalgia
						</p>
						<div className="matrix-bg p-2 mt-3">
							<p className="text-green-600 text-xs font-mono">
								&gt; Thank you for visiting my digital portfolio
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
