import React, { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";
import { SUPPORTED_LANGUAGES, LanguageCode, LanguageOption } from "../i18n/translations";

interface LanguageSelectorProps {
  currentLanguage: LanguageCode;
  onLanguageChange: (lang: LanguageCode) => void;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({
  currentLanguage,
  onLanguageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const activeLang = SUPPORTED_LANGUAGES.find((l) => l.code === currentLanguage) || SUPPORTED_LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        id="language-selector-btn"
        onClick={() => setIsOpen(!isOpen)}
        title="تغییر زبان سایت (Switch Language)"
        className="flex items-center gap-1.5 px-3 py-2 rounded-2xl bg-[#1D1A16] hover:bg-[#2A2319] border border-[#383127] hover:border-[#C5A880] text-stone-300 hover:text-[#E6CA9E] text-xs font-bold transition-all cursor-pointer shadow-sm"
      >
        <span className="text-sm">{activeLang.flag}</span>
        <span className="font-semibold">{activeLang.nativeName}</span>
        <ChevronDown className={`w-3 h-3 text-[#C5A880] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-2 w-44 bg-[#181512] border border-[#3E3427] rounded-2xl shadow-2xl overflow-hidden z-50 py-1.5 animate-in fade-in zoom-in-95">
          <div className="px-3 py-1.5 text-[10px] text-stone-400 font-bold border-b border-[#2A231A]">
            زبان‌های بین‌المللی (Languages)
          </div>
          {SUPPORTED_LANGUAGES.map((lang: LanguageOption) => {
            const isSelected = lang.code === currentLanguage;
            return (
              <button
                key={lang.code}
                onClick={() => {
                  onLanguageChange(lang.code);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-3 py-2 text-xs transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#282118] text-[#E6CA9E] font-bold"
                    : "text-stone-300 hover:bg-[#221C16] hover:text-white"
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="text-sm">{lang.flag}</span>
                  <span className="text-right">{lang.nativeName}</span>
                </div>
                {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A880]" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
