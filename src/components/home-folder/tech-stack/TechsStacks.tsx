import React, { useState } from "react";
import techs from "../../../data/Techs"; // deve conter `name`, `descricao`, `icon`, etc
import { useTranslation } from "react-i18next";

const TechsStacks = () => {
  const [selectedTech, setSelectedTech] = useState(techs[0]);

  const { t } = useTranslation();

  return (
    <section className="text-white px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start ">
        {/* Tech List */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {techs.map((tech) => (
            <button
              key={tech.name}
              onClick={() => setSelectedTech(tech)}
              className={`px-4 py-2 rounded-full border transition-all text-sm ${
                selectedTech.name === tech.name
                  ? "bg-white text-black"
                  : "border-blue-600/20 text-white hover:bg-white/10"
              }`}
            >
              {tech.name}
            </button>
          ))}
        </div>

        {/* Info Card */}
        {selectedTech && (
          <div className="blur-bg border-1 border-blue-600/20 p-6 rounded-xl">
            <div className="flex items-center gap-3 mb-3">
              <selectedTech.icon
                style={{ color: selectedTech.color }}
                size={24}
              />
              <h3 className="text-xl font-semibold">{selectedTech.name}</h3>
            </div>
            <p className="text-gray-300 text-md">{t(selectedTech.descricao)}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechsStacks;
