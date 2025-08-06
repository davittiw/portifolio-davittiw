import { useTranslation } from "react-i18next";

function Sobre() {
  const { t } = useTranslation();

  return (
    <section
      id="about-creator"
      className="w-[90%] min-h-screen flex gap-20 flex-col items-center justify-center"
    >
      <div className="w-[90%] md:w-[60%] h-auto text-center classe-livre flex-col">
        {/* Imagem parada */}
        <div className="w-32 h-32 classe-livre border-4 border-blue-600 rounded-full">
          <img
            src="https://avatars.githubusercontent.com/u/115652855?v=4"
            alt="Perfil"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <h2 className="titulo-responsivo">{t("About.title")}</h2>
        <p className="subtitulos">{t("About.description")}</p>
      </div>
    </section>
  );
}

export default Sobre;
