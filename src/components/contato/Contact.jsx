import SocialLinks from "./Redes";
import { useTranslation } from "react-i18next";

function Contact () {
    const { t } = useTranslation();

    return (
        <div id="contato" className=" min-h-screen flex flex-col items-center justify-center bg-[var(--black-gray)]">
            <div className="w-80 sm:w-120 md:w-120: lg:w-120 p-6 gap-2 flex flex-col border border-gray-700 rounded-lg">
                <div className="">
                    <h1 className="text-white font-bold text-2xl">{t('Contact.title')}</h1>
                </div>

                <form id="formContato" action={"https://formsubmit.co/lucctyte@gmail.com"} method="POST"  className="flex flex-col gap-1 h-100 w-full justify-center">
                    <label htmlFor="Nome" className="text-white">{t('Contact.name')} <span className="text-red-500">*</span></label>
                    <input className="bg-white p-2 rounded-lg border-2 outline-none w-full mb-2" type="text" name="nome" placeholder="Fulano" required />

                    <label htmlFor="Email" className="text-white">Email <span className="text-red-500">*</span></label>
                    <input className="bg-white p-2 rounded-lg border-2 outline-none w-full mb-2 focus:border-blue-400" type="email" name="email" placeholder="Fulanodetal@email.com" required />

                    <label htmlFor="tipo-contato" className="text-white">{t('Contact.type')} <span className="text-red-500">*</span></label>
                    <select name="_subject" className="bg-white p-2 rounded-lg border-2 outline-none w-full mb-2 focus:border-blue-400" required >
                        <option value="Contratação">{t('Contact.typeOptions.job')}</option>
                        <option value="Parceria">{t('Contact.typeOptions.partner')}</option>
                        <option value="Dúvida">{t('Contact.typeOptions.question')}</option>
                        <option value="Sugestão">{t('Contact.typeOptions.feedback')}</option>
                        <option value="Outro">{t('Contact.typeOptions.other')}</option>
                    </select>

                    <label htmlFor="mensagem" className="text-white">{t('Contact.message')} <span className="text-red-500">*</span></label>
                    <textarea className="bg-white p-1 rounded-lg border-2 outline-none w-full mb-2 focus:border-blue-400" name="mensagem" rows="5" placeholder={t('Contact.messagePlaceholder')} required></textarea>

                    <button className="border border-gray-500 text-white hover:bg-white hover:text-blue-700 cursor-pointer w-20 p-2 rounded-lg font-bold" type="submit">{t('Contact.send')}</button>
                </form>

            </div>
                <SocialLinks />
        </div>
    )
}

export default Contact;
