import React from "react";
import { useTranslation } from "react-i18next";

const phase = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 to-accent/10">
      <div className="container mx-auto max-w-4xl text-center text-white">
        <div className="space-y-5">

          <div className="text-6xl opacity-20">"</div>

          <blockquote className="text-2xl md:text-3xl font-light leading-relaxed text-foreground italic">
            {t("About.phase")}
          </blockquote>

          <p className="text-muted-foreground">
            — Jorge Luis Borges
          </p>

          <div className="text-6xl opacity-20">"</div>
          
        </div>
      </div>
    </section>
  );
};

export default phase;
