import React from "react";

type BotaoProps = {
  texto: string;
  onClick?: () => void;
  className?: string;
};

const button = ({ texto, onClick }: BotaoProps) => {
  return (
    <button
      onClick={onClick}
      className="text-white w-28 h-8 rounded-lg py-2 bg-blue-600 hover:bg-blue-800 cursor-pointer"
    >
      {texto}
    </button>
  );
};

export default button;
