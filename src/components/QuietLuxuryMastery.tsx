import React, { useState } from "react";
import {
  Sparkles,
  ShieldCheck,
  Check,
  AlertTriangle,
  Feather,
  Layers,
  Crown,
  Maximize2,
  ChevronRight,
  Palette
} from "lucide-react";
import {
  QUIET_LUXURY_PRINCIPLES,
  MODERN_CLASSIC_PALETTES,
  QuietLuxuryRule,
  getLocalizedRule,
  getLocalizedPalette
} from "../data/quietLuxuryRules";
import { LanguageCode } from "../i18n/translations";

interface QuietLuxuryMasteryProps {
  gender: "men" | "women";
  lang?: LanguageCode;
}

const LOCALIZED_PRINCIPLES_HEADER: Record<
  LanguageCode,
  {
    badge: string;
    title: string;
    subtitle: string;
    tagline: string;
    activeText: string;
    coreRuleLabel: string;
    whyLabel: string;
    exampleLabelMen: string;
    exampleLabelWomen: string;
    forbiddenLabel: string;
    palettesTitle: string;
    palettesSubtitle: string;
  }
> = {
  fa: {
    badge: "GLOBAL LUXURY CODE 2026 • QUIET LUXURY & OLD MONEY",
    title: "۵ اصل طلایی استایل مدرن کلاسیک و بااصالت",
    subtitle: "قوانین نانوشته‌ای که افراد خوش‌پوش و برندهای معتبر بین‌المللی برای داشتن ظاهری آرام، گران‌قیمت و بدون لوگو رعایت می‌کنند.",
    tagline: "اصالت بی‌پایان",
    activeText: "فعال",
    coreRuleLabel: "اصل محوری این قانون:",
    whyLabel: "چرا افراد خوش‌پوش این را رعایت می‌کنند؟",
    exampleLabelMen: "مثال عملی برای آقایان:",
    exampleLabelWomen: "مثال عملی برای بانوان:",
    forbiddenLabel: "اشتباه مهلک در این قانون:",
    palettesTitle: "پالت‌های رنگی اشرافی الهام‌گرفته از مکاتب بین‌المللی",
    palettesSubtitle: "ترکیب‌های هماهنگ با الهام از سنت سارتوریال ایتالیا، فرانسه و انگلستان",
  },
  en: {
    badge: "GLOBAL LUXURY CODE 2026 • QUIET LUXURY & OLD MONEY",
    title: "5 Golden Pillars of Modern Classic & Quiet Luxury",
    subtitle: "The unwritten laws followed by discerning individuals to curate an understated, noble, logo-free presence.",
    tagline: "Timeless Elegance",
    activeText: "Active",
    coreRuleLabel: "Core Principle:",
    whyLabel: "Why the Best-Dressed Strictly Adhere to This:",
    exampleLabelMen: "Practical Sartorial Application (Gentlemen):",
    exampleLabelWomen: "Practical Sartorial Application (Femme):",
    forbiddenLabel: "Fatal Styling Mistake to Avoid:",
    palettesTitle: "Aristocratic Color Harmonies & Sartorial Palettes",
    palettesSubtitle: "Curated palettes inspired by Savile Row, Milanese tailoring, and French nonchalance",
  },
  fr: {
    badge: "CODE DU LUXE GLOBAL 2026 • LUXE DISCRET & OLD MONEY",
    title: "5 Piliers d'Or de l'Élégance Classique et Discrète",
    subtitle: "Les règles fondamentales du raffinement sans logo privilégiant matières nobles et coupes impeccables.",
    tagline: "Élégance Intemporelle",
    activeText: "Actif",
    coreRuleLabel: "Principe Fondateur :",
    whyLabel: "Pourquoi les Connaisseurs l'Appliquent :",
    exampleLabelMen: "Application Pratique (Hommes) :",
    exampleLabelWomen: "Application Pratique (Femmes) :",
    forbiddenLabel: "Erreur Fatale à Proscrire :",
    palettesTitle: "Harmonies de Couleurs Aristocratiques Internationales",
    palettesSubtitle: "Nuanciers inspirés par la sartoria milanaise, parisienne et britannique",
  },
  it: {
    badge: "CODICE DEL LUSSO 2026 • QUIET LUXURY & OLD MONEY",
    title: "5 Pilastri d'Oro dello Stile Classico e Sobrio",
    subtitle: "I canoni sartoriali senza tempo per un'eleganza nobile e priva di loghi appariscenti.",
    tagline: "Eleganza Senza Tempo",
    activeText: "Attivo",
    coreRuleLabel: "Principio Cardine:",
    whyLabel: "Perché i Migliori Stilisti lo Rispettano:",
    exampleLabelMen: "Applicazione Pratica Uomo:",
    exampleLabelWomen: "Applicazione Pratica Donna:",
    forbiddenLabel: "Errore Fatale da Evitare:",
    palettesTitle: "Armonie Cromatiche Nobili & Tavolozze Sartoriali",
    palettesSubtitle: "Accostamenti ispirati alla tradizione di Milano, Napoli e Savile Row",
  },
  ar: {
    badge: "ميثاق الفخامة العالمية ۲۰۲۶ • الفخامة الهادئة والأصالة",
    title: "٥ أركان ذهبية للفخامة الهادئة والأناقة الكلاسيكية",
    subtitle: "القواعد غير المكتوبة التي يلتزم بها أصحاب الذوق الرفيع للحصول على مظهر هادئ وراقٍ بلا شعارات.",
    tagline: "أناقة خالدة",
    activeText: "مفعل",
    coreRuleLabel: "الجوهر المحوري لهذه القاعدة:",
    whyLabel: "لماذا يلتزم بها أصحاب الذوق الرفيع؟",
    exampleLabelMen: "تطبيق عملي للرجال:",
    exampleLabelWomen: "تطبيق عملي للسيدات:",
    forbiddenLabel: "خطأ فادح يجب تجنبه:",
    palettesTitle: "لوحات الألوان الملكية المستوحاة من عواصم الموضة",
    palettesSubtitle: "تنسيقات لونية مستلهمة من الخياطة الإيطالية والفرنسية والبريطانية الراقية",
  },
};

export const QuietLuxuryMastery: React.FC<QuietLuxuryMasteryProps> = ({ gender, lang = "fa" }) => {
  const [selectedRuleId, setSelectedRuleId] = useState<string>("no-logos-fabric-first");
  const [activePaletteIdx, setActivePaletteIdx] = useState<number>(0);

  const t = LOCALIZED_PRINCIPLES_HEADER[lang] || LOCALIZED_PRINCIPLES_HEADER.fa;
  const isRtl = lang === "fa" || lang === "ar";

  const rawRule =
    QUIET_LUXURY_PRINCIPLES.find((r) => r.id === selectedRuleId) || QUIET_LUXURY_PRINCIPLES[0];
  const currentRule = getLocalizedRule(rawRule, lang);

  return (
    <section className="bg-gradient-to-b from-[#181614] to-[#100F0D] rounded-3xl border border-[#3E372E] p-6 sm:p-9 shadow-2xl space-y-7 text-[#F5EFEB] relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2D2720] pb-5 relative z-10">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2A231A] border border-[#C5A880]/40 text-[#E6CA9E] text-xs font-serif">
              ⚜
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] font-cinzel">
              {t.badge}
            </span>
          </div>
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {t.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <div className="shrink-0 flex items-center gap-2 bg-[#211E1A] px-4 py-2 rounded-2xl border border-[#3A3329] text-xs font-bold text-[#E6CA9E]">
          <Crown className="w-4 h-4 text-[#C5A880]" />
          <span className="font-cinzel">{t.tagline}</span>
        </div>
      </div>

      {/* 5 Rule Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 relative z-10">
        {QUIET_LUXURY_PRINCIPLES.map((rule) => {
          const isSelected = selectedRuleId === rule.id;
          const locRule = getLocalizedRule(rule, lang);
          return (
            <button
              key={rule.id}
              onClick={() => setSelectedRuleId(rule.id)}
              className={`p-3.5 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer flex flex-col justify-between gap-2.5 min-h-[100px] ${
                isSelected
                  ? "bg-[#25201A] text-white border-[#C5A880] ring-1 ring-[#C5A880]/50 shadow-md"
                  : "bg-[#1A1815] hover:bg-[#221F1B] text-stone-300 border-[#383127]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">{rule.icon}</span>
                {isSelected && <span className="text-[#C5A880] text-[11px] font-bold">{t.activeText}</span>}
              </div>
              <span className={`text-xs font-bold leading-tight line-clamp-2 ${isSelected ? "text-[#E6CA9E]" : "text-stone-300"}`}>
                {locRule.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Active Rule Deep Dive Card */}
      <div className="bg-[#191714] rounded-2xl border border-[#3E362C] p-6 sm:p-7 space-y-6 relative z-10 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2C2720] pb-4">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#E6CA9E] bg-[#2A2219] border border-[#52412F] px-3 py-1 rounded-full inline-block">
              {currentRule.subtitle}
            </span>
            <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
              {currentRule.title}
            </h4>
          </div>
          <span className="text-3xl sm:text-4xl">{currentRule.icon}</span>
        </div>

        {/* Core Rule & Why it Matters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#141210] p-4 rounded-xl border border-[#302A22] space-y-2">
            <span className="text-xs font-bold text-[#C5A880] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C5A880]" />
              <span>{t.coreRuleLabel}</span>
            </span>
            <p className="text-xs text-stone-300 leading-relaxed font-medium">
              {currentRule.coreRule}
            </p>
          </div>

          <div className="bg-[#141210] p-4 rounded-xl border border-[#302A22] space-y-2">
            <span className="text-xs font-bold text-[#E6CA9E] flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#C5A880]" />
              <span>{t.whyLabel}</span>
            </span>
            <p className="text-xs text-stone-300 leading-relaxed font-medium">
              {currentRule.whyItMatters}
            </p>
          </div>
        </div>

        {/* Practical Example */}
        <div className="bg-[#231E18] border border-[#483B2C] p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-[#E6CA9E] text-xs font-bold">
            <Crown className="w-4 h-4 text-[#C5A880]" />
            <span>{gender === "men" ? t.exampleLabelMen : t.exampleLabelWomen}</span>
          </div>
          <p className="text-xs text-stone-200 leading-relaxed">
            {gender === "men" ? currentRule.practicalExampleMen : currentRule.practicalExampleWomen}
          </p>
        </div>

        {/* Forbidden Mistake */}
        <div className="bg-[#210F11] border border-[#481E23] p-4 rounded-xl space-y-2">
          <div className="flex items-center gap-2 text-rose-300 text-xs font-bold">
            <AlertTriangle className="w-4 h-4 text-rose-400" />
            <span>{t.forbiddenLabel}</span>
          </div>
          <p className="text-xs text-rose-200/90 leading-relaxed">
            {currentRule.forbiddenMistake}
          </p>
        </div>
      </div>

      {/* Modern Classic Color Palettes */}
      <div className="space-y-4 pt-2 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#C5A880]" />
            <h4 className="font-serif text-lg font-bold text-white">
              {t.palettesTitle}
            </h4>
          </div>
          <span className="text-[11px] text-stone-400">
            {t.palettesSubtitle}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {MODERN_CLASSIC_PALETTES.map((rawPalette, pIdx) => {
            const isActive = activePaletteIdx === pIdx;
            const palette = getLocalizedPalette(rawPalette, lang);
            return (
              <div
                key={pIdx}
                onClick={() => setActivePaletteIdx(pIdx)}
                className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-3 ${
                  isActive
                    ? "bg-[#25201A] border-[#C5A880] ring-1 ring-[#C5A880]/40 shadow-lg"
                    : "bg-[#181512] hover:bg-[#1F1B16] border-[#383126]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#E6CA9E] font-cinzel">
                    {palette.name}
                  </span>
                  {isActive && <Check className="w-3.5 h-3.5 text-[#C5A880]" />}
                </div>

                <div className="flex items-center gap-1.5 h-7 rounded-xl overflow-hidden p-1 bg-[#12100E] border border-[#2D261D]">
                  {palette.colors.map((c, cIdx) => (
                    <div
                      key={cIdx}
                      className="flex-1 h-full rounded-lg transition-transform hover:scale-105"
                      style={{ backgroundColor: c.hex }}
                      title={`${c.name} (${c.share})`}
                    />
                  ))}
                </div>

                <p className="text-[11px] text-stone-400 line-clamp-2">
                  {palette.vibe}
                </p>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
};
