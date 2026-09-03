import React, { useState } from "react";
import {
  Calendar,
  Briefcase,
  Shuffle,
  ShoppingBag,
  ArrowRight,
  RefreshCw,
  ShieldCheck
} from "lucide-react";
import {
  DEFAULT_WEEK_DAYS,
  TRAVEL_PACKING_PRESETS,
  evaluatePurchaseDecision,
  WeeklyDayPlan
} from "../data/advancedFeatures";
import { CORE_WARDROBE_ITEMS } from "../data/modernFeatures";
import { LanguageCode } from "../i18n/translations";

interface AdvancedSuiteProps {
  gender: "men" | "women";
  lang?: LanguageCode;
  onSelectOccasion: (occasionId: string, customQuery?: string) => void;
}

const SUITE_TRANSLATIONS: Record<
  LanguageCode,
  {
    badge: string;
    title: string;
    subtitle: string;
    tabPlanner: string;
    tabTravel: string;
    tabShuffler: string;
    tabAdvisor: string;
    plannerHeading: string;
    plannerSub: string;
    dayScheduleFor: string;
    styleVibeLabel: string;
    viewFullOutfitBtn: string;
    travelHeading: string;
    travelChecklistTitle: string;
    travelFormulaTitle: string;
    travelCombinationsTitle: string;
    travelCombinationsDesc: string;
    shufflerTitle: string;
    shufflerSubtitle: string;
    shufflerBtn: string;
    paletteLabel: string;
    topLabel: string;
    layerLabel: string;
    bottomLabel: string;
    shoesLabel: string;
    vibeLabel: string;
    advisorTitle: string;
    advisorSubtitle: string;
    garmentTypeLabel: string;
    toneLabel: string;
    compatLabel: string;
    evalBtn: string;
    verdictTitle: string;
    scoreLabel: string;
  }
> = {
  fa: {
    badge: "ماژول‌های پیشرفته مهندسی استایل",
    title: "برنامه‌ریزی، چمدان سفر، ترکیب خلاقانه و تست خرید",
    subtitle: "جعبه‌ابزار هوشمند برای چرخش کمد، چمدان کپسولی و اعتبارسنجی خریدهای ضروری",
    tabPlanner: "برنامه‌ریز هفتگی",
    tabTravel: "چمدان سفر",
    tabShuffler: "ترکیب خلاقانه کمد",
    tabAdvisor: "تست خرید قبل از پرداخت",
    plannerHeading: "یک بار در ابتدای هفته برنامه‌ریزی کنید تا هر روز بدون دغدغه لباس بپوشید:",
    plannerSub: "شنبه تا جمعه (با قابلیت مشاهده مستقیم ست کامل هر روز)",
    dayScheduleFor: "برنامه روز",
    styleVibeLabel: "پیشنهاد استایل روز:",
    viewFullOutfitBtn: "مشاهده نسخه کامل ست",
    travelHeading: "نوع و مقصد سفر را انتخاب کنید تا لیست کپسولی به شما داده شود:",
    travelChecklistTitle: "لباس‌ها و کفش‌های ضروری برای بسته‌بندی در چمدان:",
    travelFormulaTitle: "فرمول طلایی چمدان سفر:",
    travelCombinationsTitle: "تعداد ست‌های ممکن بدون اضافه بار:",
    travelCombinationsDesc: "با این آیتم‌ها می‌توانید تا ۵ استایل متفاوت و مجزا بسازید.",
    shufflerTitle: "مولد ترکیب‌های خلاقانه و غیرتکراری از کمد",
    shufflerSubtitle: "اگر امروز نمی‌دانید چه بپوشید، دکمه شافل را بزنید تا هوش استایلینگ یک ترکیب کلاسیک باوقار بسازد.",
    shufflerBtn: "ترکیب تصادفی جدید (Shuffle)",
    paletteLabel: "پالت رنگی:",
    topLabel: "بالاتنه پایه:",
    layerLabel: "لایه رویی / کت:",
    bottomLabel: "شلوار:",
    shoesLabel: "کفش:",
    vibeLabel: "حس و پیام استایل:",
    advisorTitle: "تست هوشمند اعتبارسنجی خرید قبل از پرداخت پول",
    advisorSubtitle: "مشخصات لباسی که قصد خریدش را دارید وارد کنید تا سیستم به شما بگوید آیا ارزش خرید دارد یا خیر:",
    garmentTypeLabel: "نوع لباس:",
    toneLabel: "تم رنگی و الگو:",
    compatLabel: "با چند لباس در کمدتان ست می‌شود؟",
    evalBtn: "ارزیابی هوشمند و اعلام نتیجه خرید",
    verdictTitle: "نتیجه ارزیابی استایلیست:",
    scoreLabel: "امتیاز تطابق:",
  },
  en: {
    badge: "Haute Lifestyle Atelier Modules",
    title: "Weekly Planning, Capsule Luggage & Smart Purchase Testing",
    subtitle: "Advanced styling engineering modules for rotation planning, travel suitcases, and purchase validation",
    tabPlanner: "Weekly Planner",
    tabTravel: "Travel Luggage",
    tabShuffler: "Capsule Shuffler",
    tabAdvisor: "Pre-Purchase Test",
    plannerHeading: "Plan once for the entire week to streamline daily executive dressing:",
    plannerSub: "Monday to Sunday (Direct access to full sartorial formulas)",
    dayScheduleFor: "Curated for",
    styleVibeLabel: "Daily Sartorial Direction:",
    viewFullOutfitBtn: "View Full Ensemble Formula",
    travelHeading: "Select your destination and itinerary to generate an unencumbered capsule packing manifest:",
    travelChecklistTitle: "Essential Capsule Packing Manifest:",
    travelFormulaTitle: "Golden Luggage Rule:",
    travelCombinationsTitle: "Interchangeable Outfits without Overpacking:",
    travelCombinationsDesc: "These coordinated pieces yield up to 5 distinct, high-prestige looks.",
    shufflerTitle: "Algorithmic Ensemble Shuffler",
    shufflerSubtitle: "Generate unexpected, harmonious combinations directly from your timeless capsule wardrobe.",
    shufflerBtn: "Generate New Ensemble (Shuffle)",
    paletteLabel: "Color Palette Harmony:",
    topLabel: "Foundation Top:",
    layerLabel: "Structured Layer / Outerwear:",
    bottomLabel: "Tailored Bottom:",
    shoesLabel: "Footwear & Leather:",
    vibeLabel: "Impression & Presence:",
    advisorTitle: "Smart Pre-Purchase ROI & Compatibility Engine",
    advisorSubtitle: "Enter the details of a prospective garment to evaluate longevity, cost-per-wear, and capsule harmony:",
    garmentTypeLabel: "Garment Category:",
    toneLabel: "Color Palette & Texture:",
    compatLabel: "Existing Capsule Pairings:",
    evalBtn: "Analyze Investment Viability",
    verdictTitle: "Savile Row Stylist Verdict:",
    scoreLabel: "Compatibility Score:",
  },
  fr: {
    badge: "Modules Atelier Haute Élégance",
    title: "Planification Hebdomadaire, Valise Capsule & Test d'Achat",
    subtitle: "Outils de stylisme avancés pour la rotation du vestiaire et la validation de vos investissements",
    tabPlanner: "Planning Hebdo",
    tabTravel: "Valise de Voyage",
    tabShuffler: "Mélangeur Capsule",
    tabAdvisor: "Test Pré-Achat",
    plannerHeading: "Organisez votre semaine pour une allure impeccable chaque jour :",
    plannerSub: "Du lundi au dimanche avec accès direct aux tenues complètes",
    dayScheduleFor: "Programme du",
    styleVibeLabel: "Direction Stylistique :",
    viewFullOutfitBtn: "Consulter la Formule Complète",
    travelHeading: "Choisissez votre destination pour générer une liste de bagage capsule sans faux pas :",
    travelChecklistTitle: "Manifeste de Bagage Essentiel :",
    travelFormulaTitle: "Règle d'Or Sartoriale :",
    travelCombinationsTitle: "Combinaisons Possibles :",
    travelCombinationsDesc: "Ces pièces permettent de composer jusqu'à 5 ensembles distincts et raffinés.",
    shufflerTitle: "Générateur d'Ensembles Créatifs",
    shufflerSubtitle: "Découvrez de nouvelles harmonies inspirées à partir de vos basiques intemporels.",
    shufflerBtn: "Générer une Tenue (Shuffle)",
    paletteLabel: "Harmonie des Couleurs :",
    topLabel: "Haut Essentiel :",
    layerLabel: "Veste / Pardessus :",
    bottomLabel: "Pantalon :",
    shoesLabel: "Souliers :",
    vibeLabel: "Allure & Message :",
    advisorTitle: "Évaluation d'Achat Intelligente",
    advisorSubtitle: "Analysez la valeur d'une nouvelle pièce avant de passer en caisse :",
    garmentTypeLabel: "Type de Vêtement :",
    toneLabel: "Palette & Motif :",
    compatLabel: "Compatibilité avec votre vestiaire :",
    evalBtn: "Évaluer la Rentabilité Sartoriale",
    verdictTitle: "Verdict du Tailleur :",
    scoreLabel: "Indice de Cohérence :",
  },
  it: {
    badge: "Moduli Sartoriali di Pregio",
    title: "Pianificatore Settimanale, Valigia Capsule & Test Acquisto",
    subtitle: "Strumenti avanzati di styling per rotazione guardaroba e acquisti consapevoli",
    tabPlanner: "Pianificatore",
    tabTravel: "Valigia Viaggio",
    tabShuffler: "Shuffler Capsule",
    tabAdvisor: "Test Pre-Acquisto",
    plannerHeading: "Pianifica la settimana per un'eleganza quotidiana senza sforzo :",
    plannerSub: "Da lunedì a domenica con accesso alle formule complete",
    dayScheduleFor: "Outfit per",
    styleVibeLabel: "Direzione di Stile :",
    viewFullOutfitBtn: "Visualizza Outfit Completo",
    travelHeading: "Seleziona la tipologia di viaggio per una lista bagaglio capsule ottimizzata :",
    travelChecklistTitle: "Lista Capi Indispensabili in Valigia :",
    travelFormulaTitle: "Formula d'Oro del Bagaglio :",
    travelCombinationsTitle: "Outfit Realizzabili :",
    travelCombinationsDesc: "Con questi capi coordinati componi fino a 5 stili distinti e impeccabili.",
    shufflerTitle: "Generatore di Abbinamenti Sartoriali",
    shufflerSubtitle: "Crea combinazioni sempre nuove ed eleganti attingendo dal tuo guardaroba essenziale.",
    shufflerBtn: "Genera Nuovo Look (Shuffle)",
    paletteLabel: "Tavolozza Colori :",
    topLabel: "Capo Base Superiore :",
    layerLabel: "Giacca / Blazer :",
    bottomLabel: "Pantaloni :",
    shoesLabel: "Calzature in Cuoio :",
    vibeLabel: "Presenza & Portamento :",
    advisorTitle: "Test Intelligente di Valutazione Acquisto",
    advisorSubtitle: "Verifica la reale convenienza e versatilità prima dell'acquisto :",
    garmentTypeLabel: "Categoria Capo :",
    toneLabel: "Tonalità & Texture :",
    compatLabel: "Abbinamenti già presenti :",
    evalBtn: "Verifica Investimento",
    verdictTitle: "Verdetto del Maestro Sartoriale :",
    scoreLabel: "Punteggio di Compatibilità :",
  },
  ar: {
    badge: "وحدات الهندسة المتقدمة للأناقة الفاخرة",
    title: "المخطط الأسبوعي، حقيبة السفر الذكية وتقييم المشتريات",
    subtitle: "أدوات ذكية لتنسيق خزانة الملابس الكبسولية وحقائب السفر واختبار الجدوى الشرائية",
    tabPlanner: "المخطط الأسبوعي",
    tabTravel: "حقيبة السفر",
    tabShuffler: "خلط وتنسيق الكبسولة",
    tabAdvisor: "اختبار الشراء الذكي",
    plannerHeading: "خطط لأسبوعك مرة واحدة لارتداء أرقى الإطلالات اليومية بكل ثقة وراحة:",
    plannerSub: "من السبت إلى الجمعة مع إمكانية استعراض التنسيق الكامل لكل يوم",
    dayScheduleFor: "جدول يوم",
    styleVibeLabel: "طابع الإطلالة اليومية:",
    viewFullOutfitBtn: "استعراض التنسيق الكامل",
    travelHeading: "اختر وجهتك وطبيعة سفرك للحصول على قائمة توضيب كبسولية ذكية بدون أوزان زائدة:",
    travelChecklistTitle: "القطع والملابس الأساسية للتوضيب في الحقيبة:",
    travelFormulaTitle: "القاعدة الذهبية لحقيبة السفر:",
    travelCombinationsTitle: "عدد الإطلالات الممكنة بدون أوزان زائدة:",
    travelCombinationsDesc: "تتيح لك هذه القطع المنسقة تكوين حتى ٥ إطلالات فاخرة ومستقلة.",
    shufflerTitle: "مولد التنسيقات الإبداعية من خزانة الملابس",
    shufflerSubtitle: "إذا احترت في اختيار ملابس اليوم، اضغط على زر الخلط لتوليد تنسيق كلاسيكي متناغم فوراً.",
    shufflerBtn: "توليد تنسيق عشوائي جديد (Shuffle)",
    paletteLabel: "تناغم الألوان:",
    topLabel: "القطعة العلوية:",
    layerLabel: "السترة / المعطف الخارجي:",
    bottomLabel: "البنطال المهيكل:",
    shoesLabel: "الحذاء الجلدي:",
    vibeLabel: "انطباع الإطلالة ورسالتها:",
    advisorTitle: "اختبار التحقق الذكي قبل دفع قيمة الشراء",
    advisorSubtitle: "أدخل مواصفات القطعة التي تنوي شراءها لمعرفة ما إذا كانت استثماراً ناجحاً أو شراء عاطفياً:",
    garmentTypeLabel: "نوع القطعة:",
    toneLabel: "النمط والألوان:",
    compatLabel: "مع كم قطعة في خزانتك تتناسق؟",
    evalBtn: "التقييم الذكي وإعلان النتيجة",
    verdictTitle: "حكم وتوصية خبير الأناقة:",
    scoreLabel: "معدل التوافق:",
  },
};

export const AdvancedStylingSuite: React.FC<AdvancedSuiteProps> = ({
  gender,
  lang = "en",
  onSelectOccasion
}) => {
  const t = SUITE_TRANSLATIONS[lang] || SUITE_TRANSLATIONS.en;
  const isRtl = lang === "fa" || lang === "ar";

  const [activeSubSection, setActiveSubSection] = useState<"planner" | "travel" | "shuffler" | "advisor">("planner");

  // 1. Weekly Planner State
  const [weekPlans] = useState<WeeklyDayPlan[]>(DEFAULT_WEEK_DAYS);
  const [activeDayId, setActiveDayId] = useState<string>("sat");

  // 2. Travel Packing State
  const [selectedPresetId, setSelectedPresetId] = useState<string>("business-3days");
  const [checkedPackedItems, setCheckedPackedItems] = useState<string[]>([]);

  // 3. Random Outfit Shuffler State
  const currentWardrobePool = CORE_WARDROBE_ITEMS[gender];
  const [shuffledOutfit, setShuffledOutfit] = useState<{
    top: string;
    layer: string;
    bottom: string;
    shoes: string;
    vibe: string;
    harmonyColor: string;
  } | null>(null);
  const [isShuffling, setIsShuffling] = useState<boolean>(false);

  // 4. Pre-purchase advisor state
  const [purchaseCategory, setPurchaseCategory] = useState<"blazer" | "shirt" | "pants" | "shoes" | "trendy">("blazer");
  const [purchaseTone, setPurchaseTone] = useState<"neutral" | "bright-neon" | "patterned">("neutral");
  const [existingMatchCount, setExistingMatchCount] = useState<number>(3);
  const [purchaseVerdict, setPurchaseVerdict] = useState<ReturnType<typeof evaluatePurchaseDecision> | null>(null);

  const activeTrip = TRAVEL_PACKING_PRESETS.find((t) => t.id === selectedPresetId) || TRAVEL_PACKING_PRESETS[0];

  const handleTogglePacked = (itemText: string) => {
    if (checkedPackedItems.includes(itemText)) {
      setCheckedPackedItems(checkedPackedItems.filter((i) => i !== itemText));
    } else {
      setCheckedPackedItems([...checkedPackedItems, itemText]);
    }
  };

  const handleShuffleNewOutfit = () => {
    setIsShuffling(true);
    setTimeout(() => {
      const tops = currentWardrobePool.filter((i) => i.category === "top");
      const layers = currentWardrobePool.filter((i) => i.category === "layer");
      const bottoms = currentWardrobePool.filter((i) => i.category === "bottom");
      const shoes = currentWardrobePool.filter((i) => i.category === "shoes");

      const randTop = (lang === "fa" ? tops[Math.floor(Math.random() * tops.length)]?.nameFa : tops[Math.floor(Math.random() * tops.length)]?.nameFa.split("(")[0]) || "Tailored Oxford Shirt";
      const randLayer = (lang === "fa" ? layers[Math.floor(Math.random() * layers.length)]?.nameFa : layers[Math.floor(Math.random() * layers.length)]?.nameFa.split("(")[0]) || "Structured Navy Blazer";
      const randBottom = (lang === "fa" ? bottoms[Math.floor(Math.random() * bottoms.length)]?.nameFa : bottoms[Math.floor(Math.random() * bottoms.length)]?.nameFa.split("(")[0]) || "Flannel Slate Trousers";
      const randShoes = (lang === "fa" ? shoes[Math.floor(Math.random() * shoes.length)]?.nameFa : shoes[Math.floor(Math.random() * shoes.length)]?.nameFa.split("(")[0]) || "Dark Burnished Calfskin Loafers";

      const vibes = lang === "fa" ? [
        "اسمارت کژوال لوکس و تمیز برای محیط کار و جلسات عصرگاهی",
        "هارمونی مونوکروم و کشیده برای نمایش آراستگی و پرستیژ بالا",
        "تعادل مدرن کژوال و رسمی برای قرارهای دوستانه و کافه",
        "پوشش همه‌کاره باوقار با رنگ‌های خنثی باکلاس"
      ] : [
        "Quiet Luxury Smart Casual for executive meetings and twilight receptions",
        "Monochrome vertical elongation conveying international prestige",
        "Sprezzatura balance between effortless leisure and tailored nobility",
        "Understated timeless neutrals balancing tactile wool and crisp cotton"
      ];

      const palettes = lang === "fa" ? [
        "سرمه‌ای عمیق + سفید + عسلی",
        "طوسی زغالی + مشکی + نقره‌ای",
        "کرم شتری + سفید شیری + شکلاتی"
      ] : [
        "Midnight Navy + Crisp White + Rich Cognac",
        "Charcoal Slate + Pitch Black + Polished Silver",
        "Camel Melange + Ivory Ecru + Deep Espresso"
      ];

      setShuffledOutfit({
        top: randTop,
        layer: randLayer,
        bottom: randBottom,
        shoes: randShoes,
        vibe: vibes[Math.floor(Math.random() * vibes.length)],
        harmonyColor: palettes[Math.floor(Math.random() * palettes.length)]
      });
      setIsShuffling(false);
    }, 350);
  };

  const handleEvaluatePurchase = () => {
    const res = evaluatePurchaseDecision(purchaseCategory, purchaseTone, existingMatchCount, lang);
    setPurchaseVerdict(res);
  };

  return (
    <section className="bg-gradient-to-b from-[#181614] to-[#100F0D] rounded-3xl border border-[#3E372E] p-6 sm:p-9 shadow-2xl space-y-7 text-[#F5EFEB] relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
      {/* Background Subtle Luxury Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

      {/* Header with 4 International Suite Buttons */}
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
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {t.title}
          </h3>
          <p className="text-xs sm:text-sm text-stone-400 max-w-2xl">
            {t.subtitle}
          </p>
        </div>

        {/* 4 Navigation Buttons */}
        <div className="flex items-center gap-1.5 bg-[#211E1A] p-1.5 rounded-2xl border border-[#3A3329] overflow-x-auto max-w-full">
          <button
            onClick={() => setActiveSubSection("planner")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeSubSection === "planner"
                ? "bg-[#C5A880] text-[#141210] font-extrabold shadow-sm"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>{t.tabPlanner}</span>
          </button>

          <button
            onClick={() => setActiveSubSection("travel")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeSubSection === "travel"
                ? "bg-[#C5A880] text-[#141210] font-extrabold shadow-sm"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>{t.tabTravel}</span>
          </button>

          <button
            onClick={() => setActiveSubSection("shuffler")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeSubSection === "shuffler"
                ? "bg-[#C5A880] text-[#141210] font-extrabold shadow-sm"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>{t.tabShuffler}</span>
          </button>

          <button
            onClick={() => setActiveSubSection("advisor")}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer ${
              activeSubSection === "advisor"
                ? "bg-[#C5A880] text-[#141210] font-extrabold shadow-sm"
                : "text-stone-300 hover:text-white"
            }`}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>{t.tabAdvisor}</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* ۱. برنامه‌ریز ست‌های ۷ روز هفته (Weekly Outfit Planner) */}
      {/* ========================================================================= */}
      {activeSubSection === "planner" && (
        <div className="space-y-6 animate-in fade-in duration-300 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <span className="font-bold text-stone-300">
              {t.plannerHeading}
            </span>
            <span className="text-stone-400">
              {t.plannerSub}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5">
            {weekPlans.map((day) => {
              const isSelected = activeDayId === day.dayId;
              const displayDayName = lang === "fa" ? day.dayNameFa : (day.dayNameEn || day.dayId.toUpperCase());
              const displayTitle = lang === "fa" ? day.defaultTitleFa : (day.defaultTitleEn || day.defaultTitleFa);
              return (
                <button
                  key={day.dayId}
                  onClick={() => setActiveDayId(day.dayId)}
                  className={`p-3.5 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer flex flex-col justify-between gap-3 min-h-[110px] ${
                    isSelected
                      ? "bg-[#25201A] text-white border-[#C5A880] ring-1 ring-[#C5A880]/50 shadow-md"
                      : "bg-[#1A1815] hover:bg-[#221F1B] text-stone-300 border-[#383127]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm text-white">{displayDayName}</span>
                    {isSelected && <span className="text-[#C5A880] font-serif">⚜</span>}
                  </div>
                  <div className="space-y-1">
                    <span className={`text-[11px] font-semibold block leading-tight line-clamp-2 ${isSelected ? "text-[#E6CA9E]" : "text-stone-400"}`}>
                      {displayTitle}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Day Detail Card */}
          {(() => {
            const currentDay = weekPlans.find((d) => d.dayId === activeDayId) || weekPlans[0];
            const displayDayName = lang === "fa" ? currentDay.dayNameFa : (currentDay.dayNameEn || currentDay.dayId.toUpperCase());
            const displayTitle = lang === "fa" ? currentDay.defaultTitleFa : (currentDay.defaultTitleEn || currentDay.defaultTitleFa);
            const displayVibe = lang === "fa" ? currentDay.recommendedVibeFa : (currentDay.recommendedVibeEn || currentDay.recommendedVibeFa);
            return (
              <div className="bg-[#191714] p-6 rounded-2xl border border-[#3E362C] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
                <div className={`space-y-2 ${isRtl ? "text-right" : "text-left"}`}>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#2C241B] text-[#E6CA9E] border border-[#524332] font-bold text-xs px-3 py-1 rounded-full">
                      {t.dayScheduleFor} {displayDayName}
                    </span>
                    <h4 className="font-serif text-lg font-bold text-white">
                      {displayTitle}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-2xl">
                    <strong className="text-[#C5A880]">{t.styleVibeLabel}</strong> {displayVibe}
                  </p>
                </div>

                <button
                  onClick={() => onSelectOccasion(currentDay.defaultOccasionId, displayTitle)}
                  className="bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-sm flex items-center gap-2 whitespace-nowrap cursor-pointer shrink-0"
                >
                  <span>{t.viewFullOutfitBtn}</span>
                  <ArrowRight className={`w-4 h-4 text-[#141210] ${isRtl ? "rotate-180" : ""}`} />
                </button>
              </div>
            );
          })()}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ۲. چمدان سفر و مأموریت (Smart Travel Packing Assistant) */}
      {/* ========================================================================= */}
      {activeSubSection === "travel" && (
        <div className="space-y-6 animate-in fade-in duration-300 relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2C2720] pb-3">
            <span className="text-xs font-bold text-stone-300">
              {t.travelHeading}
            </span>
            <div className="flex items-center gap-2">
              {TRAVEL_PACKING_PRESETS.map((trip) => {
                const isSel = selectedPresetId === trip.id;
                const displayTitle = lang === "fa" ? trip.titleFa : (trip.titleEn || trip.titleFa);
                return (
                  <button
                    key={trip.id}
                    onClick={() => setSelectedPresetId(trip.id)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      isSel
                        ? "bg-[#C5A880] text-[#141210]"
                        : "bg-[#211E1A] text-stone-400 hover:text-white border border-[#383127]"
                    }`}
                  >
                    {displayTitle}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880] block">
                {t.travelChecklistTitle}
              </span>
              <div className="space-y-2">
                {(lang === "fa" ? activeTrip.recommendedItems.listFa : (activeTrip.recommendedItems.listEn || activeTrip.recommendedItems.listFa)).map((item, idx) => {
                  const isChecked = checkedPackedItems.includes(item);
                  return (
                    <button
                      key={idx}
                      onClick={() => handleTogglePacked(item)}
                      className={`w-full p-3 rounded-xl border ${isRtl ? "text-right" : "text-left"} text-xs transition-all cursor-pointer flex items-center justify-between ${
                        isChecked
                          ? "bg-[#262119] border-[#C5A880] text-[#E6CA9E]"
                          : "bg-[#141210] border-[#312B23] text-stone-300 hover:border-stone-500"
                      }`}
                    >
                      <span>{item}</span>
                      <span className={`w-4 h-4 rounded flex items-center justify-center text-[10px] ${isChecked ? "bg-[#C5A880] text-[#141210]" : "border border-stone-600"}`}>
                        {isChecked && "✓"}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#E6CA9E] block">
                  {t.travelFormulaTitle}
                </span>
                <p className="text-xs text-stone-300 leading-relaxed">
                  {lang === "fa" ? activeTrip.smartRuleFa : (activeTrip.smartRuleEn || activeTrip.smartRuleFa)}
                </p>
              </div>
              <div className="bg-[#241F1A] p-4 rounded-xl border border-[#43382B] space-y-1">
                <span className="text-[11px] font-bold text-[#C5A880] block">
                  {t.travelCombinationsTitle}
                </span>
                <span className="text-xs text-white font-medium block">
                  {t.travelCombinationsDesc}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ۳. مولد تصادفی ترکیب‌های نوآورانه (Outfit Shuffler) */}
      {/* ========================================================================= */}
      {activeSubSection === "shuffler" && (
        <div className="space-y-6 animate-in fade-in duration-300 relative z-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#191714] p-6 rounded-2xl border border-[#3E362C]">
            <div className="space-y-1">
              <h4 className="font-serif text-lg font-bold text-white">
                {t.shufflerTitle}
              </h4>
              <p className="text-xs text-stone-400">
                {t.shufflerSubtitle}
              </p>
            </div>

            <button
              onClick={handleShuffleNewOutfit}
              disabled={isShuffling}
              className="bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] font-bold text-xs px-6 py-3.5 rounded-xl transition-all shadow-sm flex items-center gap-2 cursor-pointer shrink-0"
            >
              <RefreshCw className={`w-4 h-4 ${isShuffling ? "animate-spin" : ""}`} />
              <span>{t.shufflerBtn}</span>
            </button>
          </div>

          {shuffledOutfit && (
            <div className="bg-[#1A1815] border-2 border-[#4E4132] p-6 rounded-2xl space-y-5 animate-in zoom-in-95 duration-300">
              <div className="flex items-center justify-between border-b border-[#302A22] pb-3">
                <span className="text-xs font-bold text-[#E6CA9E]">
                  {t.paletteLabel} {shuffledOutfit.harmonyColor}
                </span>
                <span className="text-[11px] font-cinzel text-[#D4AF37] px-2.5 py-0.5 rounded-full bg-[#272119] border border-[#544331]">
                  Sartorial Mix
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <div className="bg-[#141210] p-3.5 rounded-xl border border-[#302A22] space-y-1">
                  <span className="text-[10px] text-stone-500 block">{t.layerLabel}</span>
                  <span className="font-bold text-white block">{shuffledOutfit.layer}</span>
                </div>
                <div className="bg-[#141210] p-3.5 rounded-xl border border-[#302A22] space-y-1">
                  <span className="text-[10px] text-stone-500 block">{t.topLabel}</span>
                  <span className="font-bold text-white block">{shuffledOutfit.top}</span>
                </div>
                <div className="bg-[#141210] p-3.5 rounded-xl border border-[#302A22] space-y-1">
                  <span className="text-[10px] text-stone-500 block">{t.bottomLabel}</span>
                  <span className="font-bold text-white block">{shuffledOutfit.bottom}</span>
                </div>
                <div className="bg-[#141210] p-3.5 rounded-xl border border-[#302A22] space-y-1">
                  <span className="text-[10px] text-stone-500 block">{t.shoesLabel}</span>
                  <span className="font-bold text-white block">{shuffledOutfit.shoes}</span>
                </div>
              </div>

              <p className="text-xs text-stone-300 leading-relaxed bg-[#221E19] p-3 rounded-xl border border-[#3E362C]">
                <strong>{t.vibeLabel}</strong> {shuffledOutfit.vibe}
              </p>
            </div>
          )}
        </div>
      )}

      {/* ========================================================================= */}
      {/* ۴. تست و ارزیابی قبل از خرید لباس (Pre-Purchase Decision Engine) */}
      {/* ========================================================================= */}
      {activeSubSection === "advisor" && (
        <div className="space-y-6 animate-in fade-in duration-300 relative z-10">
          <div className="bg-[#191714] p-6 rounded-2xl border border-[#3E362C] space-y-5">
            <div className="space-y-1">
              <h4 className="font-serif text-lg font-bold text-white">
                {t.advisorTitle}
              </h4>
              <p className="text-xs text-stone-400">
                {t.advisorSubtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="space-y-1.5">
                <label className="text-stone-400 font-bold block">{t.garmentTypeLabel}</label>
                <select
                  value={purchaseCategory}
                  onChange={(e) => setPurchaseCategory(e.target.value as any)}
                  className="w-full bg-[#141210] border border-[#3A3329] text-white p-3 rounded-xl focus:border-[#C5A880] focus:outline-hidden"
                >
                  <option value="blazer">Tailored Blazer / Overcoat</option>
                  <option value="shirt">Crisp Cotton Shirt / Blouse</option>
                  <option value="pants">Sartorial Trousers / Chinos</option>
                  <option value="shoes">Full-Grain Leather Loafers / Oxfords</option>
                  <option value="trendy">Seasonal Micro-Trend / Fast Fashion</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-stone-400 font-bold block">{t.toneLabel}</label>
                <select
                  value={purchaseTone}
                  onChange={(e) => setPurchaseTone(e.target.value as any)}
                  className="w-full bg-[#141210] border border-[#3A3329] text-white p-3 rounded-xl focus:border-[#C5A880] focus:outline-hidden"
                >
                  <option value="neutral">Timeless Quiet Neutral (Navy, Charcoal, Cream, Black)</option>
                  <option value="patterned">Classic Micro-Pattern (Fine Glen Check, Subtle Stripe)</option>
                  <option value="bright-neon">Saturated Fluorescent / Loud Branding</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-stone-400 font-bold block">{t.compatLabel}</label>
                <select
                  value={existingMatchCount}
                  onChange={(e) => setExistingMatchCount(Number(e.target.value))}
                  className="w-full bg-[#141210] border border-[#3A3329] text-white p-3 rounded-xl focus:border-[#C5A880] focus:outline-hidden"
                >
                  <option value={1}>Pairs with only 1 item in wardrobe</option>
                  <option value={2}>Pairs with 2 items in wardrobe</option>
                  <option value={3}>Pairs with at least 3 items (The 3-Way Rule)</option>
                  <option value={5}>Pairs effortlessly with 4+ capsule items</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleEvaluatePurchase}
              className="w-full bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] font-bold text-xs py-3.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4 text-[#141210]" />
              <span>{t.evalBtn}</span>
            </button>
          </div>

          {purchaseVerdict && (
            <div className="bg-[#1A1815] border-2 border-[#4E4132] p-6 rounded-2xl space-y-3 animate-in fade-in duration-300">
              <div className="flex items-center justify-between border-b border-[#302A22] pb-3">
                <span className="text-xs font-bold text-[#E6CA9E]">
                  {t.verdictTitle}
                </span>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#272119] text-[#D4AF37] border border-[#544331]">
                  {t.scoreLabel} {purchaseVerdict.score} / 100
                </span>
              </div>
              <h5 className="font-serif text-base font-bold text-white">
                {purchaseVerdict.badge}
              </h5>
              <p className="text-xs text-stone-300 leading-relaxed">
                {purchaseVerdict.explanation}
              </p>
              <p className="text-xs text-[#E6CA9E] bg-[#221E18] p-3 rounded-xl border border-[#483B2C] leading-relaxed">
                <strong>{t.actionAdviceLabel || "Guidance:"}</strong> {purchaseVerdict.actionAdvice}
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};
