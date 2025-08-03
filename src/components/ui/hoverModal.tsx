// src/components/HoverModal.tsx

import React, { useState } from "react";

interface HoverModalProps {
  trigger: React.ReactNode;
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  modalTitulo?: string;
  modalDescricao?: string;
  modalBadge?: string;
}

const HoverModal: React.FC<HoverModalProps> = ({
  trigger,
  children,
  delay = 200,
  className = "",
  modalTitulo,
  modalDescricao,
  modalBadge,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const showModal = () => {
    if (timeoutId) clearTimeout(timeoutId);

    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    setTimeoutId(id);
  };

  const hideModal = () => {
    if (timeoutId) clearTimeout(timeoutId);
    setIsVisible(false);
  };

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={showModal}
        onMouseLeave={hideModal}
        className="cursor-pointer"
      >
        {trigger}
      </div>

      {isVisible && (
        <div
          className={`absolute z-50 bg-white border border-gray-300 rounded-lg shadow-lg p-4 top-full left-1/2 transform -translate-x-1/2 mt-2 transition-all duration-200 ${className}`}
          onMouseEnter={() => setIsVisible(true)}
          onMouseLeave={hideModal}
        >
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-300 rotate-45"></div>

          {modalTitulo || modalDescricao || modalBadge ? (
            <div className="w-64 space-y-3">
              {(modalBadge || modalTitulo) && (
                <div className="flex items-center space-x-3">
                  {modalBadge && <div className="text-2xl">{modalBadge}</div>}
                  {modalTitulo && (
                    <div>
                      <h3 className="font-semibold text-lg text-gray-800">
                        {modalTitulo}
                      </h3>
                    </div>
                  )}
                </div>
              )}

              {modalDescricao && (
                <p className="text-sm text-gray-600">{modalDescricao}</p>
              )}
            </div>
          ) : (
            children
          )}
        </div>
      )}
    </div>
  );
};

export default HoverModal;
