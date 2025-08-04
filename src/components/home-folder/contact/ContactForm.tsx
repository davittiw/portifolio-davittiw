import { useTranslation } from "react-i18next";
import Button from "../../ui/button"

function Contact() {
  const { t } = useTranslation();

  return (
    <section className="w-[90%] md:w-1/2 px-5 h-full classe-livre flex-col">
      <div className="w-full sm:w-120 md:w-120: lg:w-120 flex flex-col">
        <div className="text-left mb-3 text-gray-200">
          <h3 className="text-2xl font-bold">{t("Contact.title")}</h3>
          <p className="text-gray-400 text-md sm:text-lg">
            {t("Contact.description")}
          </p>
        </div>

        <form
          id="formContato"
          action={"https://formsubmit.co/lucctyte@gmail.com"}
          method="POST"
          className="flex flex-col w-full justify-center"
        >
          {/* Entrada de Nome */}
          <label htmlFor="Nome" className="text-white">
            {t("Contact.name")} <span className="text-blue-600">*</span>
          </label>
          <input
            className="form-input outline-none w-full"
            type="text"
            name="nome"
            placeholder="Fulano"
            required
          />

          {/* Entrada de email */}
          <label htmlFor="Email" className="text-white">
            Email <span className="text-blue-600">*</span>
          </label>
          <input
            className="form-input outline-none w-full focus:border-blue-400"
            type="email"
            name="email"
            placeholder="Fulanodetal@email.com"
            required
          />

          {/* Seleção do tipo de contato */}
          <label htmlFor="tipo-contato" className="text-white">
            {t("Contact.type")} <span className="text-blue-600">*</span>
          </label>
          <select
            name="_subject"
            className="p-2 form-input outline-none w-full mb-2 focus:border-blue-900"
            required
          >
            <option value="Contratação">{t("Contact.typeOptions.job")}</option>
            <option value="Parceria">{t("Contact.typeOptions.partner")}</option>
            <option value="Dúvida">{t("Contact.typeOptions.question")}</option>
            <option value="Sugestão">
              {t("Contact.typeOptions.feedback")}
            </option>
            <option value="Outro">{t("Contact.typeOptions.other")}</option>
          </select>

          {/* Área de mensagem */}
          <label htmlFor="mensagem" className="text-white">
            {t("Contact.message")} <span className="text-blue-600">*</span>
          </label>
          <textarea
            className="p-1 form-input outline-none w-full mb-2 focus:border-blue-400"
            name="mensagem"
            placeholder={t("Contact.messagePlaceholder")}
            required
          ></textarea>

          <button type="submit" className="button border">
            {t("Contact.send")}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
