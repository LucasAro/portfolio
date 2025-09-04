import React, { useEffect, useState } from 'react';

function HeroSection({ scrollToSection }) {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    'SYSTEM LOADING...',
    'WELCOME TO THE MATRIX',
    'LUCAS RODRIGUES ONLINE',
    'FULL-STACK DEVELOPER'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section id="hero" className="retro-hero mx-4 my-24 p-12 text-center text-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 overflow-x-auto">
          <pre className="text-xs sm:text-sm md:text-2xl lg:text-4xl font-bold blink text-center whitespace-pre">
{`
██╗     ██╗   ██╗ ██████╗ █████╗ ███████╗
██║     ██║   ██║██╔════╝██╔══██╗██╔════╝
██║     ██║   ██║██║     ███████║███████╗
██║     ██║   ██║██║     ██╔══██║╚════██║
███████╗╚██████╔╝╚██████╗██║  ██║███████║
╚══════╝ ╚═════╝  ╚═════╝╚═╝  ╚═╝╚══════╝
`}
          </pre>
        </div>

        <div className="mb-8 h-8">
          <h2 className="text-xl md:text-2xl font-bold blink">
            {texts[textIndex]}
          </h2>
        </div>

        <div className="matrix-bg p-6 mb-8 text-left max-w-2xl mx-auto">
          <p className="text-lg font-mono">
            &gt; Executing developer.profile...<br/>
            &gt; Status: ONLINE<br/>
            &gt; Specialization: Full-Stack Web Development<br/>
            &gt; Experience: 4+ years<br/>
            &gt; Role: Senior Developer & Mentor<br/>
            &gt; Location: Brasil<br/>
            &gt; Focus: Scalable architecture & Clean Code<br/>
            &gt; Ready for new challenges...
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
          <button
            onClick={() => scrollToSection('#projetos')}
            className="retro-button text-lg px-8 py-3"
          >
            &gt; VIEW_PROJECTS.EXE
          </button>
          <a
            href="Curriculo_LucasRodrigues.pdf"
            download
            className="retro-button text-lg px-8 py-3 bg-green-600 hover:bg-green-500"
          >
            &gt; DOWNLOAD_CV.PDF
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
