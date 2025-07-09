function Projetos () {
    const Projeto = [
        {
            nome: 'Verificador Clima',
            descricao: 'Aplicação que consulta a API OpenWeather e exibe a previsão do tempo para qualquer cidade do mundo.',
            link: 'https://verificador-clima-davittiw.vercel.app/',
            img: '/src/assets/images/verificador-temp.png'
        },
        {
            nome: 'Gerador de Senha',
            descricao: 'Gere senhas seguras e personalizadas com diferentes critérios de complexidade.',
            link: 'https://gerador-de-senha-davittiw.vercel.app/',
            img: '/src/assets/images/gerador-de-senha.png'
        },
        {
            nome: 'Calculadora de Bases',
            descricao: 'Converta números entre diferentes bases numéricas de forma simples e rápida.',
            link: 'https://conversor-de-base-davittiw.vercel.app/',
            img: '/src/assets/images/conversor-de-base.png'
        },
        {
            nome: 'Gerador de QR Code',
            descricao: 'Crie QR Codes personalizados para URLs, textos e muito mais.',
            link: 'https://gerador-de-qrcode-davittiw.vercel.app/',
            img: '/src/assets/images/gerador-de-qrcode.png'
        },
    ];

    return (
        <div className="h-250 w-150 py-10 bg-[var(--black-gray)]" id="projetos">
            <div className="flex flex-wrap gap-8 justify-center">
                {Projeto.map((proj) => (
                    <div key={proj.nome} className="border border-white/20 rounded-xl shadow-lg h-90 w-70 p-3 flex flex-col items-center hover:scale-105 transition-transform duration-200">
                        <img src={proj.img} alt={proj.nome} className="w-64 h-40 object-cover rounded-lg mb-2" />
                        <h3 className="text-lg font-bold text-white mb-2">{proj.nome}</h3>
                        <p className="text-gray-400 md-1 text-center h-25">{proj.descricao}</p>
                        <a href={proj.link} target="_blank" rel="noopener noreferrer" className="mt-2 bg-[var(--primary)] text-white px-4 py-2 rounded-lg hover:bg-white hover:text-[var(--primary)] border border-[var(--primary)] transition-colors duration-200">Ver Projeto</a>
                    </div>
                ))};
            </div>
        </div>
    )
}

export default Projetos;