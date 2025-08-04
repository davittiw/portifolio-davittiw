import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import HoverModal from "../../ui/hoverModal"; // ajuste o caminho se necessário
import { useTranslation } from "react-i18next";

const SocialLinks = () => {
  const [emailCopied, setEmailCopied] = useState(false);

  const { t } = useTranslation();

  const handleCopyEmail = (email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Erro ao copiar o email", err);
      });
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/davttiw/",
      color: "#0A66C2",
      user: "@davttiw",
      badge: "💼",
      description:
      t("Modal.linkedin"),
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/davittiw",
      color: "#7e22ce",
      user: "@davittiw",
      badge: "🐙",
      description:
      t("Modal.github"),
    },
    {
      name: "Dev Community",
      icon: Github,
      url: "https://dev.to/davittiw",
      color: "#FFF",
      user: "@davittiw",
      badge: "👩‍💻",
      description:
      t("Modal.dev"),
    },
    {
      name: "E-mail",
      icon: Mail,
      url: "",
      color: "#FB542B",
      user: "lucctyte@gmail.com",
      badge: "📧",
      description:
      t("Modal.email"),
    },
  ];

  return (
    <section className="w-[90%] h-full md:w-1/2 classe-livre flex-col">
      <div className="w-full sm:w-120 md:w-120: lg:w-120 flex flex-col">
        <div className="text-left mb-3 text-gray-200">
          <h3 className="text-2xl font-bold">{t("Contact.Social.title")}</h3>
          <p className="text-gray-400 text-sm sm:text-md">{t("Contact.Social.description")}</p>
        </div>

        <div className="grid grid-cols-2 gap-4 justify-center">
          {socialLinks.map((social) => {
            const Icon = social.icon;

            const commonClasses =
              "border border-white/20 blur-bg text-gray-300 rounded-lg items-center justify-center flex flex-col h-30 w-full md:w-full p-4 gap-2 transition-all duration-200 cursor-pointer hover:bg-gray-800 hover:border-gray-600 hover:text-white hover:transform hover:scale-105";
            const styleHandlers = {
              onMouseEnter: (e) => {
                e.currentTarget.style.borderColor = social.color;
                e.currentTarget.style.color = social.color;
              },
              onMouseLeave: (e) => {
                e.currentTarget.style.borderColor = "";
                e.currentTarget.style.color = "";
              },
            };

            if (social.name === "E-mail") {
              return (
                <HoverModal
                  key={social.name}
                  trigger={
                    <button
                      onClick={() => handleCopyEmail(social.user)}
                      className={commonClasses}
                      {...styleHandlers}
                    >
                      <Icon size={24} style={{ color: "inherit" }} />
                      <span className="font-bold text-sm">
                        {emailCopied ? "Email copiado!" : social.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {social.user}
                      </span>
                    </button>
                  }
                  modalTitulo={social.name}
                  modalBadge={social.badge}
                  modalDescricao={social.description}
                  delay={300}
                />
              );
            }
            return (
              <HoverModal
                key={social.name}
                trigger={
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={commonClasses}
                    {...styleHandlers}
                  >
                    <Icon size={24} style={{ color: "inherit" }} />
                    <span className="font-bold text-sm">{social.name}</span>
                    <span className="text-sm text-gray-400">{social.user}</span>
                  </a>
                }
                modalTitulo={social.name}
                modalBadge={social.badge}
                modalDescricao={social.description}
                delay={300}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
