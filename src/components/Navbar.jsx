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
        <nav className="items-center flex justify-between z-10 p-4 fixed w-full text-white">
            {/* Div centralizada com os links de navegação */}
            <div className='absolute left-1/2 -translate-x-1/2 items-center flex gap-4'>
                <a href="#">Início</a>
                <a href="#">Tecnologias</a>
                <a href="#">Projetos</a>
                <a href="#">Contato</a> 
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