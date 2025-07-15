import { useState } from 'react';
import Language from './Language.jsx';

function Navbar() {
    return (
        // Barra de navegação principal, com layout flex e cor de fundo
        <nav className="w-80 sm:w-90 md:w-110 lg:w-120 p-3 sm:p-4 md:p-4 lg:p-4 flex items-center justify-center z-10 fixed top-0 left-1/2 -translate-x-1/2 text-left text-white">
            {/* Div centralizada com os links de navegação */}
            <div className='items-center flex gap-4'>
                <a href="#home">Início</a>
                <a href="#projetos">Projetos</a>
                <a href="#contato">Contato</a> 
            </div>
            <Language />
        </nav>
    );
}

export default Navbar;