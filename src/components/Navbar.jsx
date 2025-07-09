import { useState } from 'react';

function Navbar() {
    // Estado para alternar entre os idiomas pt-br e en-us
    const [isPT, setIsPT] = useState(true);

    // Função para alternar o idioma ao clicar
    const handLanguage = () => {
        setIsPT((prev) => !prev)
    }

    return (
        // Barra de navegação principal, com layout flex e cor de fundo
        <nav className="flex items-center justify-center z-10 p-4 fixed top-0 left-1/2 -translate-x-1/2 w-150 text-left text-white">
            {/* Div centralizada com os links de navegação */}
            <div className='items-center flex gap-4'>
                <a href="#home">Início</a>
                <a href="#tech">Tecnologias</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a> 
            </div>

            {/* Div alinhada à direita com idioma e ícone de tema */}
            <div className='ml-auto flex items-center gap-6'>
                <div className='text-primary animate-pulse w-18 items-center justify-center flex rounded-lg'> {/* Link para alternar o idioma */}
                    <a href="#" onClick={handLanguage}>
                        {isPT ? 'EN' : 'PT'}
                    </a> 
                </div>
            </div>
        </nav>
    );
}

export default Navbar;