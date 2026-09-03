import React, { useState, useMemo } from "react";
import {
  Sparkles,
  Eye,
} from "lucide-react";
import {
  MANNEQUIN_GARMENTS,
  calculateMannequinHarmony
} from "../data/atelierFeatures";
import { LanguageCode } from "../i18n/translations";

interface MannequinAtelierProps {
  gender: "men" | "women";
  lang?: LanguageCode;
  onApplyToConsultation?: (title: string) => void;
}

const UI_TEXT: Record<LanguageCode, {
  badge: string;
  title: string;
  subtitle: string;
  presetsLabel: string;
  presetMayfair: string;
  presetRiviera: string;
  presetMonochrome: string;
  visualTitle: string;
  harmonyScoreLabel: string;
  slotLayer: string;
  slotTop: string;
  slotBottom: string;
  slotShoes: string;
  applyConsultationBtn: string;
  rackTitlePrefix: string;
  rackHint: string;
  selectedTag: string;
  fabricLabel: string;
}> = {
  fa: {
    badge: "ATELIER 3D LAYER COMPOSER • VIRTUAL MANNEQUIN",
    title: "آتلیه تعاملی و مانکن شبیه‌ساز لایه‌های لباس",
    subtitle: "تغییر همزمان کت، پیراهن، شلوار و کفش با محاسبه لحظه‌ای امتیاز هماهنگی رنگ و پیام پرستیژ",
    presetsLabel: "ست‌های آماده:",
    presetMayfair: "میفر کلاسیک",
    presetRiviera: "ریویرا کرم",
    presetMonochrome: "مونوکروم شب",
    visualTitle: "ترکیب بصری مانکن آتلیه:",
    harmonyScoreLabel: "امتیاز هارمونی:",
    slotLayer: "لایه رویی / کت",
    slotTop: "بالاتنه پایه / پیراهن",
    slotBottom: "پایین‌تنه / شلوار",
    slotShoes: "کفش و چرم",
    applyConsultationBtn: "ارسال به بخش مشاوره و تحلیل عطر ⚜",
    rackTitlePrefix: "انتخاب آیتم برای",
    rackHint: "یک گزینه را لمس کنید تا سریعاً روی مانکن قرار گیرد",
    selectedTag: "✓ انتخابی",
    fabricLabel: "جنس:",
  },
  en: {
    badge: "ATELIER 3D LAYER COMPOSER • VIRTUAL MANNEQUIN",
    title: "Interactive Layering Atelier & Virtual Mannequin",
    subtitle: "Real-time interactive layering of blazers, shirts, trousers, and footwear with instant color harmony scoring and quiet luxury analysis.",
    presetsLabel: "Curated Presets:",
    presetMayfair: "Mayfair Sartorial",
    presetRiviera: "Riviera Sand",
    presetMonochrome: "Midnight Slate",
    visualTitle: "Visual Atelier Mannequin Composition:",
    harmonyScoreLabel: "Harmony Score:",
    slotLayer: "Outer Layer / Blazer",
    slotTop: "Base Shirt / Knit",
    slotBottom: "Trousers / Bottom",
    slotShoes: "Footwear & Leather",
    applyConsultationBtn: "Send to Consultation Atelier & Scent Profiler ⚜",
    rackTitlePrefix: "Select Piece for",
    rackHint: "Select an item to immediately drape onto the live mannequin",
    selectedTag: "✓ Selected",
    fabricLabel: "Fabric:",
  },
  fr: {
    badge: "COMPOSITEUR DE COUCHES • MANNEQUIN VIRTUEL",
    title: "Atelier de Superposition Interactif & Mannequin Vivant",
    subtitle: "Ajustez en direct veste, chemise, pantalon et souliers avec calcul instantané de l'harmonie des drapés et des teintes.",
    presetsLabel: "Formules signatures :",
    presetMayfair: "Mayfair Classique",
    presetRiviera: "Riviera Écru",
    presetMonochrome: "Monochrome Nuit",
    visualTitle: "Composition du Mannequin Atelier :",
    harmonyScoreLabel: "Score d'Harmonie :",
    slotLayer: "Veste / Blazer / Manteau",
    slotTop: "Chemise / Maille noble",
    slotBottom: "Pantalon habillé",
    slotShoes: "Souliers & Cuir",
    applyConsultationBtn: "Transférer dans l'Atelier de Conseil & Sillage ⚜",
    rackTitlePrefix: "Sélectionner la pièce pour",
    rackHint: "Touchez un vêtement pour l'habiller instantanément sur le mannequin",
    selectedTag: "✓ Sélectionné",
    fabricLabel: "Matière :",
  },
  it: {
    badge: "COMPOSITORE DI STRATI • MANICHINO VIRTUALE",
    title: "Atelier di Stratificazione Interattivo & Manichino Sartoriale",
    subtitle: "Combina giacche, camicie, pantaloni e calzature con calcolo in tempo reale del punteggio cromatico e stile.",
    presetsLabel: "Preset Curati:",
    presetMayfair: "Mayfair Sartoriale",
    presetRiviera: "Riviera Cammello",
    presetMonochrome: "Monocromo Notte",
    visualTitle: "Composizione del Manichino Atelier:",
    harmonyScoreLabel: "Punteggio di Armonia:",
    slotLayer: "Giacca / Cappotto",
    slotTop: "Camicia / Maglieria",
    slotBottom: "Pantaloni Sartoriali",
    slotShoes: "Calzature & Pelle",
    applyConsultationBtn: "Invia alla Consulenza Sartoriale & Profumo ⚜",
    rackTitlePrefix: "Scegli il capo per",
    rackHint: "Tocca un capo per applicarlo istantaneamente sul manichino",
    selectedTag: "✓ Selezionato",
    fabricLabel: "Tessuto:",
  },
  ar: {
    badge: "محاكي طبقات الأزياء ثلاثي الأبعاد • مانيكان الأتيليه",
    title: "الأتيليه التفاعلي ومحاكي المانيكان الحي لطبقات الأزياء",
    subtitle: "تنسيق فوري وتفاعلي للسترة، القميص، البنطال والحذاء مع حساب مباشر لدرجة التناغم اللوني والوقار.",
    presetsLabel: "التنسيقات الجاهزة:",
    presetMayfair: "مايفير الكلاسيكي",
    presetRiviera: "ريفييرا العاجي",
    presetMonochrome: "أحادي اللون الليلي",
    visualTitle: "التكوين البصري لمانيكان الأتيليه:",
    harmonyScoreLabel: "درجة التناغم:",
    slotLayer: "السترة / الطبقة العلوية",
    slotTop: "القميص / الكنزة الأساسية",
    slotBottom: "البنطال / القطعة السفلية",
    slotShoes: "الحذاء والجلد",
    applyConsultationBtn: "إرسال إلى قسم الاستشارة وتوليف العطر ⚜",
    rackTitlePrefix: "اختيار القطعة لـ",
    rackHint: "المس أي قطعة لتجربتها فوراً على المانيكان",
    selectedTag: "✓ محدد",
    fabricLabel: "القماش:",
  },
};

export const InteractiveMannequinAtelier: React.FC<MannequinAtelierProps> = ({
  gender,
  lang = "fa",
  onApplyToConsultation
}) => {
  const isEn = lang !== "fa" && lang !== "ar";

  // Available garment pools filtered by gender compatibility
  const layerPool = useMemo(
    () => MANNEQUIN_GARMENTS.filter((g) => g.category === "layer" && (g.gender === gender || g.gender === "unisex")),
    [gender]
  );
  const topPool = useMemo(
    () => MANNEQUIN_GARMENTS.filter((g) => g.category === "top" && (g.gender === gender || g.gender === "unisex")),
    [gender]
  );
  const bottomPool = useMemo(
    () => MANNEQUIN_GARMENTS.filter((g) => g.category === "bottom" && (g.gender === gender || g.gender === "unisex")),
    [gender]
  );
  const shoesPool = useMemo(
    () => MANNEQUIN_GARMENTS.filter((g) => g.category === "shoes" && (g.gender === gender || g.gender === "unisex")),
    [gender]
  );

  // Selected state for each layer
  const [selectedLayerId, setSelectedLayerId] = useState<string>(layerPool[0]?.id || "lay-navy-blazer");
  const [selectedTopId, setSelectedTopId] = useState<string>(topPool[0]?.id || "top-white-oxford");
  const [selectedBottomId, setSelectedBottomId] = useState<string>(bottomPool[0]?.id || "bot-grey-flannel");
  const [selectedShoesId, setSelectedShoesId] = useState<string>(shoesPool[0]?.id || "sho-cognac-oxford");
  const [activeTabSlot, setActiveTabSlot] = useState<"layer" | "top" | "bottom" | "shoes">("layer");
  const [buttonFinish, setButtonFinish] = useState<"gold" | "horn" | "pearl">("gold");

  const currentLayer = layerPool.find((g) => g.id === selectedLayerId) || layerPool[0] || MANNEQUIN_GARMENTS[0];
  const currentTop = topPool.find((g) => g.id === selectedTopId) || topPool[0] || MANNEQUIN_GARMENTS[5];
  const currentBottom = bottomPool.find((g) => g.id === selectedBottomId) || bottomPool[0] || MANNEQUIN_GARMENTS[9];
  const currentShoes = shoesPool.find((g) => g.id === selectedShoesId) || shoesPool[0] || MANNEQUIN_GARMENTS[13];

  const harmonyResult = useMemo(
    () => calculateMannequinHarmony(currentLayer, currentTop, currentBottom, currentShoes, lang),
    [currentLayer, currentTop, currentBottom, currentShoes, lang]
  );

  const t = UI_TEXT[lang] || UI_TEXT.fa;
  const isRtl = lang === "fa" || lang === "ar";

  // Quick preset actions
  const applyPreset = (presetName: "mayfair" | "riviera" | "monochrome") => {
    if (presetName === "mayfair") {
      setSelectedLayerId("lay-navy-blazer");
      setSelectedTopId("top-white-oxford");
      setSelectedBottomId("bot-grey-flannel");
      setSelectedShoesId("sho-cognac-oxford");
    } else if (presetName === "riviera") {
      setSelectedLayerId("lay-camel-coat");
      setSelectedTopId("top-blue-sky");
      setSelectedBottomId("bot-sand-linen");
      setSelectedShoesId("sho-toffee-loafers");
    } else {
      setSelectedLayerId("lay-charcoal-jacket");
      setSelectedTopId("top-black-silk");
      setSelectedBottomId("bot-navy-trousers");
      setSelectedShoesId("sho-black-derby");
    }
  };

  const getActiveSlotPool = () => {
    switch (activeTabSlot) {
      case "layer":
        return layerPool;
      case "top":
        return topPool;
      case "bottom":
        return bottomPool;
      case "shoes":
        return shoesPool;
    }
  };

  return (
    <section
      id="mannequin-atelier-section"
      className="bg-gradient-to-b from-[#181614] to-[#100F0D] rounded-3xl border border-[#3E372E] p-6 sm:p-9 shadow-2xl space-y-7 text-[#F5EFEB] relative overflow-hidden"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

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

        {/* Quick Presets */}
        <div className="flex items-center gap-2 bg-[#211E1A] p-1.5 rounded-2xl border border-[#3A3329]">
          <span className="text-[10px] text-stone-400 font-bold px-2 uppercase font-cinzel">{t.presetsLabel}</span>
          <button
            onClick={() => applyPreset("mayfair")}
            className="px-3 py-1 rounded-xl text-xs font-bold text-stone-300 hover:text-white hover:bg-[#2C261F] transition-all cursor-pointer"
          >
            {t.presetMayfair}
          </button>
          <button
            onClick={() => applyPreset("riviera")}
            className="px-3 py-1 rounded-xl text-xs font-bold text-stone-300 hover:text-white hover:bg-[#2C261F] transition-all cursor-pointer"
          >
            {t.presetRiviera}
          </button>
          <button
            onClick={() => applyPreset("monochrome")}
            className="px-3 py-1 rounded-xl text-xs font-bold text-stone-300 hover:text-white hover:bg-[#2C261F] transition-all cursor-pointer"
          >
            {t.presetMonochrome}
          </button>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start relative z-10">
        {/* Left Column (5 cols): The High-End Layered Mannequin Visual Display */}
        <div className="lg:col-span-5 bg-[#191714] border border-[#3E362C] rounded-3xl p-6 space-y-4 shadow-lg">
          <div className="flex items-center justify-between border-b border-[#2C2720] pb-3">
            <span className="text-xs font-bold text-stone-300 flex items-center gap-1.5">
              <Eye className="w-4 h-4 text-[#C5A880]" />
              <span>{t.visualTitle}</span>
            </span>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#272119] text-[#D4AF37] border border-[#52412F]">
              {t.harmonyScoreLabel} {harmonyResult.score}%
            </span>
          </div>

          {/* Interactive Visual Silhouette Preview Canvas */}
          <div className="bg-[#12100E] border border-[#2B241C] rounded-2xl p-4 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Silhouette Mannequin Graphic */}
            <div className="relative w-44 h-56 flex flex-col items-center justify-center">
              {/* Inner Top/Chemise layer clearly peeking through collar */}
              <div
                className="w-14 h-16 rounded-t-lg absolute top-2 border border-white/20 shadow-inner flex flex-col items-center justify-start pt-1.5 z-10"
                style={{ backgroundColor: currentTop.hexColor }}
              >
                <div className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-xs mb-1" />
                <div className="w-1.5 h-1.5 rounded-full bg-white/70 shadow-xs" />
              </div>

              {/* Outer Layer / Coat Draped with Open Lapels */}
              <div
                className="w-36 h-32 rounded-t-2xl absolute top-5 border-2 border-black/30 shadow-lg flex items-center justify-between px-2 pt-2 z-20"
                style={{ backgroundColor: currentLayer.hexColor }}
              >
                {/* Left Lapel */}
                <div className="w-9 h-24 bg-black/20 border-r border-black/30 transform -skew-x-6 rounded-l-md" />
                
                {/* Center Buttons Placket - High contrast polished hardware */}
                <div className="flex flex-col items-center justify-center gap-2.5 py-1 z-30">
                  {[0, 1, 2].map((btnIdx) => (
                    <div
                      key={btnIdx}
                      className={`w-3.5 h-3.5 rounded-full border shadow-md transition-all flex items-center justify-center ${
                        buttonFinish === "gold"
                          ? "bg-gradient-to-br from-amber-200 via-amber-400 to-amber-600 border-amber-200 text-amber-950 ring-1 ring-amber-300/60"
                          : buttonFinish === "pearl"
                          ? "bg-gradient-to-br from-white via-stone-100 to-stone-300 border-white text-stone-900 ring-1 ring-white/60"
                          : "bg-gradient-to-br from-[#8C6D46] via-[#634827] to-[#3B2812] border-[#A8875B] text-amber-200 ring-1 ring-amber-500/40"
                      }`}
                    >
                      <div className="w-1 h-1 rounded-full bg-black/40" />
                    </div>
                  ))}
                </div>

                {/* Right Lapel */}
                <div className="w-9 h-24 bg-black/20 border-l border-black/30 transform skew-x-6 rounded-r-md" />
              </div>

              {/* Bottom / Trousers Layer */}
              <div
                className="w-28 h-20 rounded-b-xl absolute top-36 border-t-2 border-black/40 flex justify-center gap-1 pt-1 z-10"
                style={{ backgroundColor: currentBottom.hexColor }}
              >
                <div className="w-11 h-18 border-r border-black/20" />
                <div className="w-11 h-18 border-l border-black/20" />
              </div>
            </div>

            {/* Button Hardware Style Switcher - Directly Solves Customer Suggestion */}
            <div className="w-full mt-2 pt-2.5 border-t border-[#241E17] flex items-center justify-between text-[11px]">
              <span className="text-stone-400 font-medium">
                {lang === "fa" ? "جلوه و رنگ دکمه‌های پالتو/کت:" : "Coat Buttons Finish:"}
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setButtonFinish("gold")}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                    buttonFinish === "gold"
                      ? "bg-amber-500 text-stone-950 shadow-xs"
                      : "bg-[#1E1A16] text-stone-300 hover:text-white"
                  }`}
                >
                  {lang === "fa" ? "زرین سلطنتی ⭐" : "Polished Gold"}
                </button>
                <button
                  onClick={() => setButtonFinish("pearl")}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                    buttonFinish === "pearl"
                      ? "bg-stone-200 text-stone-900 shadow-xs"
                      : "bg-[#1E1A16] text-stone-300 hover:text-white"
                  }`}
                >
                  {lang === "fa" ? "صدفی مروارید" : "Mother-of-Pearl"}
                </button>
                <button
                  onClick={() => setButtonFinish("horn")}
                  className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all cursor-pointer ${
                    buttonFinish === "horn"
                      ? "bg-[#6E5334] text-amber-100 shadow-xs"
                      : "bg-[#1E1A16] text-stone-300 hover:text-white"
                  }`}
                >
                  {lang === "fa" ? "شاخی دست‌ساز" : "Horn"}
                </button>
              </div>
            </div>
          </div>

          {/* Mannequin Layers Stack */}
          <div className="space-y-2.5">
            {/* Slot 1: Layer (Jacket/Coat) */}
            <div
              onClick={() => setActiveTabSlot("layer")}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                activeTabSlot === "layer"
                  ? "bg-[#25201A] border-[#C5A880] ring-1 ring-[#C5A880]/50"
                  : "bg-[#141210] border-[#302A22] hover:border-stone-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg shrink-0 border border-white/20"
                  style={{ backgroundColor: currentLayer.hexColor }}
                />
                <div>
                  <span className="text-[10px] text-stone-500 font-bold block">{t.slotLayer}</span>
                  <strong className="text-xs text-white block">
                    {isEn ? currentLayer.nameEn : currentLayer.nameFa}
                  </strong>
                </div>
              </div>
              <span className="text-[10px] text-[#C5A880] font-cinzel">
                {isEn ? currentLayer.fabricNameEn : currentLayer.fabricNameFa}
              </span>
            </div>

            {/* Slot 2: Top (Shirt/Knit) */}
            <div
              onClick={() => setActiveTabSlot("top")}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                activeTabSlot === "top"
                  ? "bg-[#25201A] border-[#C5A880] ring-1 ring-[#C5A880]/50"
                  : "bg-[#141210] border-[#302A22] hover:border-stone-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg shrink-0 border border-white/20"
                  style={{ backgroundColor: currentTop.hexColor }}
                />
                <div>
                  <span className="text-[10px] text-stone-500 font-bold block">{t.slotTop}</span>
                  <strong className="text-xs text-white block">
                    {isEn ? currentTop.nameEn : currentTop.nameFa}
                  </strong>
                </div>
              </div>
              <span className="text-[10px] text-[#C5A880] font-cinzel">
                {isEn ? currentTop.fabricNameEn : currentTop.fabricNameFa}
              </span>
            </div>

            {/* Slot 3: Bottom (Trousers) */}
            <div
              onClick={() => setActiveTabSlot("bottom")}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                activeTabSlot === "bottom"
                  ? "bg-[#25201A] border-[#C5A880] ring-1 ring-[#C5A880]/50"
                  : "bg-[#141210] border-[#302A22] hover:border-stone-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg shrink-0 border border-white/20"
                  style={{ backgroundColor: currentBottom.hexColor }}
                />
                <div>
                  <span className="text-[10px] text-stone-500 font-bold block">{t.slotBottom}</span>
                  <strong className="text-xs text-white block">
                    {isEn ? currentBottom.nameEn : currentBottom.nameFa}
                  </strong>
                </div>
              </div>
              <span className="text-[10px] text-[#C5A880] font-cinzel">
                {isEn ? currentBottom.fabricNameEn : currentBottom.fabricNameFa}
              </span>
            </div>

            {/* Slot 4: Shoes (Leather/Suede) */}
            <div
              onClick={() => setActiveTabSlot("shoes")}
              className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                activeTabSlot === "shoes"
                  ? "bg-[#25201A] border-[#C5A880] ring-1 ring-[#C5A880]/50"
                  : "bg-[#141210] border-[#302A22] hover:border-stone-600"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-7 h-7 rounded-lg shrink-0 border border-white/20"
                  style={{ backgroundColor: currentShoes.hexColor }}
                />
                <div>
                  <span className="text-[10px] text-stone-500 font-bold block">{t.slotShoes}</span>
                  <strong className="text-xs text-white block">
                    {isEn ? currentShoes.nameEn : currentShoes.nameFa}
                  </strong>
                </div>
              </div>
              <span className="text-[10px] text-[#C5A880] font-cinzel">
                {isEn ? currentShoes.fabricNameEn : currentShoes.fabricNameFa}
              </span>
            </div>
          </div>

          {/* Harmony Assessment Banner */}
          <div className="bg-[#241E18] border border-[#483B2C] p-4 rounded-2xl space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-[#E6CA9E]">
                {isEn ? harmonyResult.verdictEn : harmonyResult.verdictFa}
              </span>
              <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-wider">
                {isEn ? "Quiet Luxury Standard" : "استاندارد لوکس آرام"}
              </span>
            </div>
            <p className="text-xs text-stone-300 leading-relaxed">
              {isEn ? harmonyResult.analysisEn : harmonyResult.analysisFa}
            </p>
          </div>

          {onApplyToConsultation && (
            <button
              onClick={() =>
                onApplyToConsultation(
                  `Custom Ensemble: ${isEn ? currentLayer.nameEn : currentLayer.nameFa} with ${isEn ? currentTop.nameEn : currentTop.nameFa}`
                )
              }
              className="w-full bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] font-bold text-xs py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#141210]" />
              <span>{t.applyConsultationBtn}</span>
            </button>
          )}
        </div>

        {/* Right Column (7 cols): Garment Selection Wardrobe Rack */}
        <div className="lg:col-span-7 bg-[#191714] border border-[#3E362C] rounded-3xl p-6 space-y-5 shadow-lg">
          <div className="flex items-center justify-between border-b border-[#2C2720] pb-3">
            <div className="space-y-0.5">
              <span className="text-xs font-bold text-white block">
                {t.rackTitlePrefix} {activeTabSlot === "layer" ? t.slotLayer : activeTabSlot === "top" ? t.slotTop : activeTabSlot === "bottom" ? t.slotBottom : t.slotShoes}
              </span>
              <span className="text-[11px] text-stone-400">
                {t.rackHint}
              </span>
            </div>

            {/* 4 Slot Selector Mini Tabs */}
            <div className="flex items-center gap-1 bg-[#141210] p-1 rounded-xl border border-[#302A22]">
              <button
                onClick={() => setActiveTabSlot("layer")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTabSlot === "layer" ? "bg-[#C5A880] text-[#141210]" : "text-stone-400 hover:text-white"
                }`}
              >
                1
              </button>
              <button
                onClick={() => setActiveTabSlot("top")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTabSlot === "top" ? "bg-[#C5A880] text-[#141210]" : "text-stone-400 hover:text-white"
                }`}
              >
                2
              </button>
              <button
                onClick={() => setActiveTabSlot("bottom")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTabSlot === "bottom" ? "bg-[#C5A880] text-[#141210]" : "text-stone-400 hover:text-white"
                }`}
              >
                3
              </button>
              <button
                onClick={() => setActiveTabSlot("shoes")}
                className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  activeTabSlot === "shoes" ? "bg-[#C5A880] text-[#141210]" : "text-stone-400 hover:text-white"
                }`}
              >
                4
              </button>
            </div>
          </div>

          {/* Garment Options Grid for Active Slot */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
            {getActiveSlotPool().map((item) => {
              const isSelected =
                activeTabSlot === "layer"
                  ? selectedLayerId === item.id
                  : activeTabSlot === "top"
                  ? selectedTopId === item.id
                  : activeTabSlot === "bottom"
                  ? selectedBottomId === item.id
                  : selectedShoesId === item.id;

              const handleSelect = () => {
                if (activeTabSlot === "layer") setSelectedLayerId(item.id);
                else if (activeTabSlot === "top") setSelectedTopId(item.id);
                else if (activeTabSlot === "bottom") setSelectedBottomId(item.id);
                else setSelectedShoesId(item.id);
              };

              const itemName = isEn ? item.nameEn : item.nameFa;
              const colorName = isEn ? item.colorNameEn : item.colorNameFa;
              const fabricName = isEn ? item.fabricNameEn : item.fabricNameFa;

              return (
                <button
                  key={item.id}
                  onClick={handleSelect}
                  className={`p-4 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-[#25201A] border-[#C5A880] ring-1 ring-[#C5A880]/50 shadow-md"
                      : "bg-[#141210] hover:bg-[#1E1B18] border-[#302A22] text-stone-300"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-5 h-5 rounded-md border border-white/20"
                        style={{ backgroundColor: item.hexColor }}
                      />
                      <span className="text-[10px] font-bold text-stone-400">{colorName}</span>
                    </div>
                    {isSelected ? (
                      <span className="text-[#C5A880] text-xs font-serif font-bold">{t.selectedTag}</span>
                    ) : (
                      <span className="text-[10px] font-cinzel text-stone-500 uppercase">{item.formalityLevel}</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    <strong className="text-xs text-white block">{itemName}</strong>
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-stone-500 pt-2 border-t border-[#262019]">
                    <span>{t.fabricLabel} {fabricName}</span>
                    <span className="font-cinzel text-[#C5A880] uppercase">{item.formalityLevel}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
