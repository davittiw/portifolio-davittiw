import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const SocialLinks = () => {
  const { t } = useTranslation();
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = (email) => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000); // volta em 2s
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
    },
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/davittiw",
      color: "#7e22ce",
      user: "@davittiw",
    },
    {
      name: "Dev Community",
      icon: Github,
      url: "https://dev.to/davittiw",
      color: "#FFF",
      user: "@davittiw",
    },
    {
      name: "E-mail",
      icon: Mail,
      url: "",
      color: "#FB542B",
      user: "lucctyte@gmail.com",
    },
  ];

  return (
    <div className="w-80 sm:w-90 md:w-120 lg:w-120 max-w-2xl mx-auto mt-12">
      <div className="text-left mb-8 text-gray-200">
        <h3 className="text-2xl font-bold mb-2">{t("Social.local")}</h3>
        <p className="text-muted-foreground">{t("Social.description")}</p>
      </div>

      <div className="grid grid-cols-2 gap-2 justify-center">
        {socialLinks.map((social) => {
          const Icon = social.icon;

          const commonClasses =
            "border border-white/20 text-gray-300 rounded-lg items-center justify-center flex flex-col h-30 w-40 md:w-full p-1 gap-1 transition-colors duration-200 cursor-pointer animate-pulse hover:bg-gray-800 hover:border-gray-600 hover:text-white";

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
              <button
                key={social.name}
                onClick={() => handleCopyEmail(social.user)}
                className={commonClasses}
                {...styleHandlers}
              >
                <Icon size={20} style={{ color: "inherit" }} />
                <span className="font-bold">
                  {emailCopied ? "Email copiado!" : social.name}
                </span>
                <span>{social.user}</span>
              </button>
            );
          }

          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={commonClasses}
              {...styleHandlers}
            >
              <Icon size={20} style={{ color: "inherit" }} />
              <span className="font-bold">{social.name}</span>
              <span>{social.user}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialLinks;
