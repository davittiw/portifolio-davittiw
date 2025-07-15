import SocialLinks from "./Redes";
import Redes from "./Redes";

function Contato () {
    return (
        <div id="contato" className=" min-h-screen flex flex-col items-center justify-center bg-[var(--black-gray)]">
            <div className="w-80 sm:w-120 md:w-120: lg:w-120 p-6 gap-2 flex flex-col border border-gray-700 rounded-lg">
                <div className="">
                    <h1 className="text-white font-bold text-2xl">Entre em contato!</h1>
                </div>

                <form id="formContato" action={"https://formsubmit.co/lucctyte@gmail.com"} method="POST"  className="flex flex-col gap-1 h-100 w-full justify-center">
                    <label htmlFor="Nome" className="text-white">Nome <span className="text-red-500">*</span></label>
                    <input className="bg-white p-2 rounded-lg border-2 outline-none w-full mb-2" type="text" name="nome" placeholder="Fulano" required />

                    <label htmlFor="Email" className="text-white">Email <span className="text-red-500">*</span></label>
                    <input className="bg-white p-2 rounded-lg border-2 outline-none w-full mb-2 focus:border-blue-400" type="email" name="email" placeholder="Fulanodetal@email.com" required />

                    <label htmlFor="tipo-contato" className="text-white">Tipo de contato <span className="text-red-500">*</span></label>
                    <select name="_subject" className="bg-white p-2 rounded-lg border-2 outline-none w-full mb-2 focus:border-blue-400" required >
                        <option value="Contratação">Contratação</option>
                        <option value="Parceria">Parceria</option>
                        <option value="Dúvida">Dúvida</option>
                        <option value="Sugestão">Sugestão</option>
                        <option value="Outro">Outro</option>
                    </select>

                    <label htmlFor="mensagem" className="text-white">Mensagem <span className="text-red-500">*</span></label>
                    <textarea className="bg-white p-1 rounded-lg border-2 outline-none w-full mb-2 focus:border-blue-400" name="mensagem" rows="5" placeholder="Olá, Luccas! Eu gostaria de entrar em contato para..." required></textarea>

                    <button className="border border-gray-500 text-white hover:bg-white hover:text-blue-700 cursor-pointer w-20 p-2 rounded-lg font-bold" type="submit">Enviar</button>
                </form>

            </div>
                <SocialLinks />
        </div>
    )
}

export default Contato;
