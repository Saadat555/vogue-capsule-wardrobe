import React, { useState } from "react";
import {
  Feather,
  ShieldCheck,
  Maximize2,
  Wind,
  Layers,
} from "lucide-react";
import { LUXURY_FABRIC_LIBRARY, LuxuryFabricData } from "../data/atelierFeatures";
import { LanguageCode } from "../i18n/translations";

interface TactileFabricScannerProps {
  lang?: LanguageCode;
}

const LOCALIZED_SCANNER: Record<
  LanguageCode,
  {
    badge: string;
    title: string;
    subtitle: string;
    pureFibers: string;
    macroView: string;
    zoomNormal: string;
    zoom4x: string;
    weaveLabel: string;
    compositionLabel: string;
    seasonPrefix: string;
    breathability: string;
    softness: string;
    wrinkleResistance: string;
    drapeLabel: string;
    careHeader: string;
    outOfTen: string;
    recommendedGarments: string;
  }
> = {
  fa: {
    badge: "HAUTE TEXTILE ATLAS • SARTORIAL TACTILE SCANNER",
    title: "اسکنر لمسی و بافت‌شناسی الیاف لوکس جهانی",
    subtitle: "کالبدشکافی میکروسکوپی الیاف اصیل طبیعی، ضخامت گرماژ (GSM)، تنفس‌پذیری و اسرار اتوکشی خیاطان ساویل‌رو لندن",
    pureFibers: "۱۰۰٪ الیاف ارگانیک طبیعی (Pure Natural Fibers)",
    macroView: "نمای بزرگ‌نمایی بافت پارچه (Macro Weave):",
    zoomNormal: "بزرگ‌نمایی نرمال",
    zoom4x: "زوم میکروسکوپی (4X)",
    weaveLabel: "بافت:",
    compositionLabel: "ترکیب الیاف:",
    seasonPrefix: "فصل:",
    breathability: "تنفس‌پذیری:",
    softness: "لطافت بافت:",
    wrinkleResistance: "مقاومت در برابر چروک:",
    drapeLabel: "نوع ایستایی و آویزش (Drape):",
    careHeader: "اسرار نگهداری و اتوکشی خیاطان ساویل‌رو لندن:",
    outOfTen: "از ۱۰",
    recommendedGarments: "خلوص الیاف:",
  },
  en: {
    badge: "HAUTE TEXTILE ATLAS • SARTORIAL TACTILE SCANNER",
    title: "Global Luxury Fabric Tactile Scanner & Textile Atlas",
    subtitle: "Microscopic analysis of noble natural fibers, GSM weight, thermal breathability, and Savile Row master pressing rules.",
    pureFibers: "100% Noble Organic Natural Fibers",
    macroView: "Microscopic Macro Fabric Weave:",
    zoomNormal: "Normal View",
    zoom4x: "Macro Zoom (4X)",
    weaveLabel: "Weave:",
    compositionLabel: "Natural Composition:",
    seasonPrefix: "Ideal Season:",
    breathability: "Breathability:",
    softness: "Tactile Softness:",
    wrinkleResistance: "Wrinkle Resistance:",
    drapeLabel: "Architectural Drape & Weight:",
    careHeader: "Savile Row Master Pressing & Maintenance Secrets:",
    outOfTen: "/ 10",
    recommendedGarments: "Fiber Purity:",
  },
  fr: {
    badge: "ATLAS TEXTILE HAUTE SARTORIA • SCANNER TACTILE",
    title: "Scanner Tactile & Atlas des Fibres Nobles Internationales",
    subtitle: "Analyse microscopique des fibres naturelles, grammage (GSM), respirabilité thermique et secrets de repassage.",
    pureFibers: "100% Fibres Naturelles et Organiques",
    macroView: "Vue Macro & Tissage Microscopique :",
    zoomNormal: "Vue Standard",
    zoom4x: "Zoom Macro (4X)",
    weaveLabel: "Armure :",
    compositionLabel: "Composition Noble :",
    seasonPrefix: "Saison Idéale :",
    breathability: "Respirabilité :",
    softness: "Douceur Tactile :",
    wrinkleResistance: "Résistance au Froissement :",
    drapeLabel: "Tombé & Architecture du Drapé :",
    careHeader: "Secrets d'Entretien & Repassage Savile Row :",
    outOfTen: "/ 10",
    recommendedGarments: "Pureté des Fibres :",
  },
  it: {
    badge: "ATLANTE TESSILE HAUTE COUTURE • SCANNER TATTILE",
    title: "Scanner Tattile & Atlante dei Tessuti Nobili Internazionali",
    subtitle: "Analisi microscopica delle fibre naturali nobili, peso GSM, traspirabilità termica e regole di stiratura.",
    pureFibers: "100% Fibre Organiche Naturali",
    macroView: "Trama Microscopica Macro :",
    zoomNormal: "Vista Normale",
    zoom4x: "Zoom Macro (4X)",
    weaveLabel: "Armatura :",
    compositionLabel: "Composizione Naturale :",
    seasonPrefix: "Stagione Ideale :",
    breathability: "Traspirabilità :",
    softness: "Morbidezza Tattile :",
    wrinkleResistance: "Resistenza alle Pieghe :",
    drapeLabel: "Caduta & Peso Sartoriale :",
    careHeader: "Segreti di Stiratura e Manutenzione Savile Row :",
    outOfTen: "/ 10",
    recommendedGarments: "Purezza Tessile :",
  },
  ar: {
    badge: "أطلس الأقمشة الفاخرة • ماسح الأقمشة اللمسي",
    title: "الماسح اللمسي وأطلس الأنسجة والأقمشة الفاخرة عالمياً",
    subtitle: "تشريح مجهري للألياف الطبيعية الأصيلة، كثافة الوزن (GSM)، التنفس الحراري وأسرار كي خياطي سافيل رو لندن.",
    pureFibers: "١٠٠٪ ألياف عضوية طبيعية نقية",
    macroView: "عرض مكبر لنسيج القماش (Macro Weave):",
    zoomNormal: "تكبير عادي",
    zoom4x: "تكبير مجهري (4X)",
    weaveLabel: "الحبكة:",
    compositionLabel: "تركيب الألياف:",
    seasonPrefix: "الموسم المثالي:",
    breathability: "التنفس والتهوية:",
    softness: "النعومة والملمس:",
    wrinkleResistance: "مقاومة التجاعيد:",
    drapeLabel: "طبيعة الانسدال والوقار (Drape):",
    careHeader: "أسرار العناية والكي من أساتذة سافيل رو بلندن:",
    outOfTen: "من ١٠",
    recommendedGarments: "نقاء النسيج:",
  },
};

export const TactileFabricScanner: React.FC<TactileFabricScannerProps> = ({ lang = "fa" }) => {
  const isEn = lang !== "fa" && lang !== "ar";
  const [activeFabricId, setActiveFabricId] = useState<string>(LUXURY_FABRIC_LIBRARY[0].id);
  const [zoomMode, setZoomMode] = useState<boolean>(false);

  const activeFabric =
    LUXURY_FABRIC_LIBRARY.find((f) => f.id === activeFabricId) || LUXURY_FABRIC_LIBRARY[0];

  const t = LOCALIZED_SCANNER[lang] || LOCALIZED_SCANNER.fa;
  const isRtl = lang === "fa" || lang === "ar";

  const fabricName = isEn ? activeFabric.nameEn : activeFabric.nameFa;
  const fabricOrigin = isEn ? activeFabric.originEn : activeFabric.originFa;
  const fabricComp = isEn ? activeFabric.naturalCompositionEn : activeFabric.naturalCompositionFa;
  const fabricSeason = isEn ? activeFabric.bestSeasonsEn : activeFabric.bestSeasonsFa;
  const fabricDesc = isEn ? activeFabric.tactileDescriptionEn : activeFabric.tactileDescriptionFa;
  const fabricTip = isEn ? activeFabric.bespokeTailorTipEn : activeFabric.bespokeTailorTipFa;

  return (
    <section
      id="tactile-fabric-scanner-section"
      className="bg-gradient-to-b from-[#181614] to-[#100F0D] rounded-3xl border border-[#3E372E] p-6 sm:p-9 shadow-2xl space-y-7 text-[#F5EFEB] relative overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Accent Glow */}
      <div className="absolute -top-10 -right-10 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#2D2720] pb-5 relative z-10">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2A231A] border border-[#C5A880]/40 text-[#E6CA9E] text-xs font-serif">
              ⚜
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] font-cinzel">
              {t.badge}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#211E1A] p-2.5 rounded-2xl border border-[#3A3329] self-start lg:self-auto">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-[#E6CA9E]">
            {t.pureFibers}
          </span>
        </div>
      </div>

      {/* Fabric Swatch Selector Carousel */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
        {LUXURY_FABRIC_LIBRARY.map((fabric) => {
          const isSelected = fabric.id === activeFabric.id;
          const name = isEn ? fabric.nameEn : fabric.nameFa;
          return (
            <button
              key={fabric.id}
              onClick={() => {
                setActiveFabricId(fabric.id);
                setZoomMode(false);
              }}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2.5 ${isRtl ? "text-right" : "text-left"} ${
                isSelected
                  ? "bg-[#2A231A] border-[#C5A880] ring-1 ring-[#C5A880]/50 shadow-md scale-102"
                  : "bg-[#1A1815] hover:bg-[#221F1B] text-stone-300 border-[#383127]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-cinzel tracking-wider text-[#D4AF37] bg-[#2A2319] border border-[#52412F] px-2 py-0.5 rounded-md">
                  {fabric.gsmWeight} GSM
                </span>
                {isSelected && <span className="text-[#C5A880] text-xs font-serif">⚜</span>}
              </div>
              <span className={`text-xs font-bold leading-tight ${isSelected ? "text-[#E6CA9E]" : "text-stone-300"}`}>
                {name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Fabric Deep-Dive Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#191714] border border-[#3E362C] p-6 sm:p-7 rounded-3xl items-start relative z-10 shadow-lg">
        
        {/* Left Column (5 cols): Microscopic Weave Simulator Box */}
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-stone-200 flex items-center gap-1.5">
              <Maximize2 className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{t.macroView}</span>
            </span>
            <button
              onClick={() => setZoomMode(!zoomMode)}
              className="text-[11px] text-[#E6CA9E] font-bold hover:underline cursor-pointer"
            >
              {zoomMode ? t.zoomNormal : t.zoom4x}
            </button>
          </div>

          {/* Realistic Fabric Canvas Swatch */}
          <div
            className={`w-full rounded-2xl border-2 border-[#483B2D] shadow-inner overflow-hidden flex flex-col justify-between p-5 transition-all relative ${
              zoomMode ? "h-64 scale-102" : "h-56"
            }`}
            style={{
              backgroundColor: activeFabric.textureVisual.baseColor,
              backgroundImage: activeFabric.textureVisual.cssPattern
            }}
          >
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-md bg-black/70 text-white backdrop-blur-xs">
                {t.weaveLabel} {activeFabric.textureVisual.patternType}
              </span>
              <span className="text-[10px] font-cinzel font-bold px-2.5 py-1 rounded-md bg-white/90 text-stone-900 backdrop-blur-xs">
                {activeFabric.gsmWeight} g/m²
              </span>
            </div>

            <div className="bg-black/80 backdrop-blur-sm p-3 rounded-xl text-white space-y-0.5 border border-white/10">
              <span className="text-xs font-bold block">{fabricName}</span>
              <span className="text-[11px] text-stone-300 block">{fabricOrigin}</span>
            </div>
          </div>

          {/* Composition Badge */}
          <div className="bg-[#141210] p-3.5 rounded-2xl border border-[#302A22] flex items-center justify-between text-xs">
            <span className="text-stone-400 font-medium">{t.compositionLabel}</span>
            <strong className="text-[#E6CA9E]">{fabricComp}</strong>
          </div>
        </div>

        {/* Right Column (7 cols): Tactile Specs & Tailor Care Instructions */}
        <div className="lg:col-span-7 space-y-5">
          
          <div>
            <div className="flex items-center justify-between border-b border-[#2C2720] pb-2">
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {fabricName}
              </h4>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#262018] text-[#E6CA9E] border border-[#52412F]">
                {t.seasonPrefix} {fabricSeason}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-2">
              {fabricDesc}
            </p>
          </div>

          {/* 3 Metric Progress Meters (Breathability, Softness, Wrinkle Resistance) */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            
            <div className="bg-[#141210] p-3.5 rounded-2xl border border-[#302A22] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-400 font-medium flex items-center gap-1">
                  <Wind className="w-3.5 h-3.5 text-sky-400" />
                  <span>{t.breathability}</span>
                </span>
                <span className="font-bold text-white">{activeFabric.breathabilityScore} {t.outOfTen}</span>
              </div>
              <div className="w-full bg-[#241F1A] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-sky-500 h-full rounded-full"
                  style={{ width: `${activeFabric.breathabilityScore * 10}%` }}
                />
              </div>
            </div>

            <div className="bg-[#141210] p-3.5 rounded-2xl border border-[#302A22] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-400 font-medium flex items-center gap-1">
                  <Feather className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{t.softness}</span>
                </span>
                <span className="font-bold text-white">{activeFabric.softnessScore} {t.outOfTen}</span>
              </div>
              <div className="w-full bg-[#241F1A] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#C5A880] h-full rounded-full"
                  style={{ width: `${activeFabric.softnessScore * 10}%` }}
                />
              </div>
            </div>

            <div className="bg-[#141210] p-3.5 rounded-2xl border border-[#302A22] space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-stone-400 font-medium flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t.wrinkleResistance}</span>
                </span>
                <span className="font-bold text-white">{activeFabric.wrinkleResistanceScore} {t.outOfTen}</span>
              </div>
              <div className="w-full bg-[#241F1A] h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-500 h-full rounded-full"
                  style={{ width: `${activeFabric.wrinkleResistanceScore * 10}%` }}
                />
              </div>
            </div>

          </div>

          {/* Tailor Master Rule & Care */}
          <div className="bg-[#141210] p-4 rounded-2xl border border-[#302A22] space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#E6CA9E] flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-[#C5A880]" />
                <span>{t.drapeLabel}</span>
              </span>
              <span className="text-xs font-bold text-white">{fabricSeason}</span>
            </div>

            <div className="border-t border-[#25201A] pt-3 space-y-1.5">
              <span className="text-[11px] font-bold text-stone-400 block">
                {t.careHeader}
              </span>
              <p className="text-xs text-stone-300 leading-relaxed">
                {fabricTip}
              </p>
            </div>
          </div>

          {/* Natural Composition */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-medium text-stone-400">{t.recommendedGarments}</span>
            <span className="bg-[#241F19] text-[#E6CA9E] text-xs px-3 py-1 rounded-full border border-[#483B2C]">
              {fabricComp}
            </span>
          </div>

        </div>

      </div>

    </section>
  );
};
