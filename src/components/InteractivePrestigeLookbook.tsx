import React, { useState } from "react";
import {
  Compass,
  Sparkles,
  Crown,
  Flame,
  Feather,
} from "lucide-react";
import {
  MENS_PRESTIGE_COLLECTIONS,
  WOMENS_PRESTIGE_COLLECTIONS,
  PrestigeStyleCollection
} from "../data/prestigeCollections";
import { LanguageCode } from "../i18n/translations";

interface PrestigeLookbookProps {
  gender: "men" | "women";
  lang?: LanguageCode;
  onSelectOccasion?: (occasionId: string, customQuery?: string) => void;
  onSelectLook?: (title: string) => void;
}

const UI_TEXT: Record<LanguageCode, {
  curatedBadge: string;
  gentlemenEdit: string;
  femmeEdit: string;
  title: string;
  subtitle: string;
  coutureBadge: string;
  paletteLabel: string;
  inspectBtn: string;
  conceptLabel: string;
  slotTop: string;
  slotBottom: string;
  slotShoes: string;
  slotAccessory: string;
  fabricLabel: string;
  scentLabel: string;
}> = {
  fa: {
    curatedBadge: "ATELIER CURATED LOOKBOOK",
    gentlemenEdit: "GENTLEMEN EDIT",
    femmeEdit: "HAUTE FEMME EDIT",
    title: "ژورنال تعاملی استایل‌های اشرافی و مدرن کلاسیک",
    subtitle: "۶ کانسپت بصری فوق‌العاده الهام‌گرفته از پایتخت‌های مد جهان (لندن، میلان، پاریس و ژنو) با تشریح متریال و حس القایی",
    coutureBadge: "Haute Couture Lookbook",
    paletteLabel: "هارمونی پالت اختصاصی این کالکشن:",
    inspectBtn: "پوشیدن و بررسی دقیق این ست ⚜",
    conceptLabel: "فلسفه طراحی و جایگاه این کانسپت:",
    slotTop: "کت / بالاتنه رویی:",
    slotBottom: "پوشش پایین‌تنه:",
    slotShoes: "کفش و چرم:",
    slotAccessory: "اکسسوری شاخص:",
    fabricLabel: "جنس پارچه توصیه شده:",
    scentLabel: "عطر مکمل این استایل:",
  },
  en: {
    curatedBadge: "ATELIER CURATED LOOKBOOK",
    gentlemenEdit: "GENTLEMEN EDIT",
    femmeEdit: "HAUTE FEMME EDIT",
    title: "Curated International Sartorial & Heritage Lookbook",
    subtitle: "6 refined styling concepts inspired by London, Milan, Paris, and Geneva with tactile fiber breakdowns.",
    coutureBadge: "Haute Couture Lookbook",
    paletteLabel: "Harmonized Signature Palette:",
    inspectBtn: "Wear & Inspect This Complete Formula ⚜",
    conceptLabel: "Design Philosophy & Architectural Intent:",
    slotTop: "Jacket / Outer Layer:",
    slotBottom: "Tailored Trouser / Bottom:",
    slotShoes: "Footwear & Leather:",
    slotAccessory: "Signature Accessory:",
    fabricLabel: "Recommended Noble Fibers:",
    scentLabel: "Complementary Olfactory Pairing:",
  },
  fr: {
    curatedBadge: "LOOKBOOK HAUTE SÉLECTION",
    gentlemenEdit: "ÉDITION GENTLEMEN",
    femmeEdit: "ÉDITION HAUTE FEMME",
    title: "Lookbook Sartorial & Conceptuel International",
    subtitle: "6 concepts d'exception inspirés des capitales de la mode avec anatomie textile complète.",
    coutureBadge: "Lookbook Haute Couture",
    paletteLabel: "Harmonie de la palette dédiée :",
    inspectBtn: "Explorer cette formule en détail ⚜",
    conceptLabel: "Philosophie de coupe et esprit de la tenue :",
    slotTop: "Veste / Pièce de dessus :",
    slotBottom: "Pantalon tailleur :",
    slotShoes: "Souliers & cuir :",
    slotAccessory: "Accessoire signature :",
    fabricLabel: "Étoffes et fibres conseillées :",
    scentLabel: "Sillage olfactif assorti :",
  },
  it: {
    curatedBadge: "LOOKBOOK SARTORIALE D'ECCELLENZA",
    gentlemenEdit: "GENTLEMEN EDIT",
    femmeEdit: "HAUTE FEMME EDIT",
    title: "Lookbook Sartoriale Internazionale di Pregio",
    subtitle: "6 concetti esclusivi ispirati a Londra, Milano, Parigi e Ginevra con analisi dei tessuti.",
    coutureBadge: "Lookbook Alta Moda",
    paletteLabel: "Armonia della tavolozza esclusiva:",
    inspectBtn: "Indossa e analizza questo completo ⚜",
    conceptLabel: "Filosofia del design e intenzione stilistica:",
    slotTop: "Giacca / Capospalla:",
    slotBottom: "Pantalone sartoriale:",
    slotShoes: "Calzature & pellame:",
    slotAccessory: "Accessorio distintivo:",
    fabricLabel: "Tessuti e fibre consigliate:",
    scentLabel: "Abbinamento olfattivo:",
  },
  ar: {
    curatedBadge: "كتالوج الأزياء الراقية المختار",
    gentlemenEdit: "تشكيلة الرجال الراقية",
    femmeEdit: "تشكيلة السيدات الملكية",
    title: "الكتالوج التفاعلي للإطلالات الكلاسيكية العالمية",
    subtitle: "٦ مفاهيم بصرية استثنائية مستوحاة من عواصم الأناقة العالمية مع تفصيل دقيق للأقمشة والألوان.",
    coutureBadge: "كتالوج الخياطة الراقية",
    paletteLabel: "لوحة الألوان المتناسقة لهذه التشكيلة:",
    inspectBtn: "ارتداء وتفحص هذا الطقم بالكامل ⚜",
    conceptLabel: "فلسفة التصميم ومفهوم الطقم:",
    slotTop: "السترة / الطبقة العلوية:",
    slotBottom: "البنطال / القطعة السفلية:",
    slotShoes: "الحذاء والجلد:",
    slotAccessory: "الإكسسوار المميز:",
    fabricLabel: "القماش الطبيعي الموصى به:",
    scentLabel: "العطر المكمل للإطلالة:",
  },
};

export const InteractivePrestigeLookbook: React.FC<PrestigeLookbookProps> = ({
  gender,
  lang = "en",
  onSelectOccasion,
  onSelectLook
}) => {
  const currentCollections: PrestigeStyleCollection[] =
    gender === "men" ? MENS_PRESTIGE_COLLECTIONS : WOMENS_PRESTIGE_COLLECTIONS;

  const [selectedCollectionId, setSelectedCollectionId] = useState<string>(
    currentCollections[0]?.id || "mayfair-heritage"
  );

  const activeCollection =
    currentCollections.find((c) => c.id === selectedCollectionId) || currentCollections[0];

  const t = UI_TEXT[lang] || UI_TEXT.en;
  const isRtl = lang === "fa" || lang === "ar";
  const isFa = lang === "fa";

  const title = isFa ? activeCollection.titleFa : activeCollection.titleEn;
  const subtitle = isFa ? activeCollection.subtitleFa : activeCollection.subtitleEn;
  const story = isFa ? activeCollection.conceptStoryFa : activeCollection.conceptStoryEn;
  const topWear = isFa ? activeCollection.topWearFa : activeCollection.topWearEn;
  const bottomWear = isFa ? activeCollection.bottomWearFa : activeCollection.bottomWearEn;
  const footwear = isFa ? activeCollection.footwearFa : activeCollection.footwearEn;
  const keyAccessory = isFa ? activeCollection.keyAccessoryFa : activeCollection.keyAccessoryEn;
  const fabrics = isFa ? activeCollection.fabricsUsedFa : activeCollection.fabricsUsedEn;
  const scent = isFa ? activeCollection.signatureScentFa : activeCollection.signatureScentEn;
  const palette = isFa ? activeCollection.paletteFa : activeCollection.paletteEn;

  return (
    <section
      id="prestige-lookbook-section"
      className="bg-gradient-to-b from-[#181614] to-[#100F0D] rounded-3xl border border-[#3E372E] p-6 sm:p-9 shadow-2xl space-y-7 text-[#F5EFEB] relative overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Background Gold Ambient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#2D2720] pb-5 relative z-10">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#2A231A] border border-[#C5A880]/40 text-[#E6CA9E] text-xs font-serif">
              ⚜
            </span>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#D4AF37] font-cinzel">
              {t.curatedBadge} • {gender === "men" ? t.gentlemenEdit : t.femmeEdit}
            </span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {t.title}
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#211E1A] px-4 py-2 rounded-2xl border border-[#3A3329] text-xs font-bold text-[#E6CA9E]">
          <Crown className="w-4 h-4 text-[#C5A880]" />
          <span className="font-cinzel">{t.coutureBadge}</span>
        </div>
      </div>

      {/* 6 Visual Theme Selection Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 relative z-10">
        {currentCollections.map((col) => {
          const isSelected = selectedCollectionId === col.id;
          const displayTitle = isFa ? col.titleFa : col.titleEn;
          return (
            <button
              key={col.id}
              onClick={() => setSelectedCollectionId(col.id)}
              className={`p-3.5 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer flex flex-col justify-between gap-3 min-h-[120px] ${
                isSelected
                  ? "bg-[#25201A] text-white border-[#C5A880] ring-1 ring-[#C5A880]/50 shadow-md"
                  : "bg-[#1A1815] hover:bg-[#221F1B] text-stone-300 border-[#383127]"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{col.icon}</span>
                {isSelected && <span className="text-[#C5A880] text-xs font-serif">⚜</span>}
              </div>
              <div className="space-y-0.5">
                <span className="text-[10px] font-cinzel tracking-wider text-[#D4AF37] block">
                  {col.city}
                </span>
                <span className={`text-xs font-bold leading-tight block line-clamp-2 ${isSelected ? "text-[#E6CA9E]" : "text-stone-300"}`}>
                  {displayTitle}
                </span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Main Feature Showcase for Selected Collection */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-[#191714] border border-[#3E362C] p-6 sm:p-8 rounded-3xl items-start relative z-10 shadow-lg">
        {/* Left Column (5 cols): Visual Canvas + Palette */}
        <div className="lg:col-span-5 space-y-4">
          <div className="relative rounded-2xl overflow-hidden border-2 border-[#483B2D] shadow-inner bg-[#141210] p-6 text-center space-y-4">
            {/* Visual Icon Badge */}
            <div className="w-20 h-20 mx-auto rounded-3xl bg-[#2A231A] border border-[#5A4833] flex items-center justify-center text-4xl shadow-md">
              {activeCollection.icon}
            </div>

            <div className="space-y-1">
              <span className="text-[11px] font-cinzel uppercase tracking-widest text-[#D4AF37] font-bold">
                {activeCollection.city} • {activeCollection.titleEn}
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                {title}
              </h3>
              <p className="text-xs text-stone-400">
                {subtitle}
              </p>
            </div>

            {/* Micro Color Palette Swatches */}
            <div className="pt-3 border-t border-[#302A22] space-y-2">
              <span className={`text-[10px] font-bold text-stone-400 uppercase tracking-wider block ${isRtl ? "text-right" : "text-left"}`}>
                {t.paletteLabel}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {palette.map((swatch, idx) => (
                  <div key={idx} className="bg-[#141210] p-2 rounded-xl border border-[#302A22] flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-md shrink-0 border border-white/20"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <span className="text-[10px] font-bold text-stone-300 truncate">
                      {swatch.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const lookTitle = isFa ? activeCollection.titleFa : activeCollection.titleEn;
                if (onSelectLook) {
                  onSelectLook(lookTitle);
                } else if (onSelectOccasion) {
                  onSelectOccasion(activeCollection.targetOccasionId, lookTitle);
                }
              }}
              className="w-full bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] font-bold text-xs py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer mt-2"
            >
              <Sparkles className="w-4 h-4 text-[#141210]" />
              <span>{t.inspectBtn}</span>
            </button>
          </div>
        </div>

        {/* Right Column (7 cols): Full Specs Breakdown */}
        <div className="lg:col-span-7 space-y-5">
          <div className="space-y-2 border-b border-[#2C2720] pb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-[#E6CA9E]">
              <Compass className="w-4 h-4 text-[#C5A880]" />
              <span>{t.conceptLabel}</span>
            </div>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
              {story}
            </p>
          </div>

          {/* 4 Wardrobe Pieces Breakdown Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-[#141210] p-3.5 rounded-2xl border border-[#302A22] space-y-1">
              <span className="text-[10px] text-stone-500 font-bold block">{t.slotTop}</span>
              <strong className="text-white block">{topWear}</strong>
            </div>
            <div className="bg-[#141210] p-3.5 rounded-2xl border border-[#302A22] space-y-1">
              <span className="text-[10px] text-stone-500 font-bold block">{t.slotBottom}</span>
              <strong className="text-white block">{bottomWear}</strong>
            </div>
            <div className="bg-[#141210] p-3.5 rounded-2xl border border-[#302A22] space-y-1">
              <span className="text-[10px] text-stone-500 font-bold block">{t.slotShoes}</span>
              <strong className="text-white block">{footwear}</strong>
            </div>
            <div className="bg-[#141210] p-3.5 rounded-2xl border border-[#302A22] space-y-1">
              <span className="text-[10px] text-stone-500 font-bold block">{t.slotAccessory}</span>
              <strong className="text-white block">{keyAccessory}</strong>
            </div>
          </div>

          {/* Key Fabric & Signature Scent Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="bg-[#241E18] p-3.5 rounded-2xl border border-[#483B2C] space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#E6CA9E]">
                <Feather className="w-3.5 h-3.5 text-[#C5A880]" />
                <span>{t.fabricLabel}</span>
              </div>
              <p className="text-xs text-stone-300">
                {fabrics}
              </p>
            </div>

            <div className="bg-[#241E18] p-3.5 rounded-2xl border border-[#483B2C] space-y-1">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-[#D4AF37]">
                <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{t.scentLabel}</span>
              </div>
              <p className="text-xs text-stone-300">
                {scent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
