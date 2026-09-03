import React, { useState } from "react";
import { Calculator, Award, Sparkles, AlertCircle } from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface PresetItem {
  nameFa: string;
  nameEn: string;
  category: string;
  priceDollar: number;
  expectedYears: number;
  wearsPerYear: number;
  fabricTypeFa: string;
  fabricTypeEn: string;
  resaleValuePercent: number;
}

const LUXURY_PRESETS: PresetItem[] = [
  {
    nameFa: "کت تک سرمه‌ای پشم مرینو / هاپ‌سک (Savile Row / Canali Style)",
    nameEn: "Navy Merino Wool Hopsack Blazer (Savile Row / Canali Style)",
    category: "Tailoring",
    priceDollar: 850,
    expectedYears: 8,
    wearsPerYear: 45,
    fabricTypeFa: "۱۰۰٪ پشم طبیعی ۱۲۰s بدون پلی‌استر",
    fabricTypeEn: "100% Super 120s Virgin Wool (Zero Synthetic)",
    resaleValuePercent: 35
  },
  {
    nameFa: "پالتو بلند پشم کشمیری دو رو (Loro Piana / Max Mara Style)",
    nameEn: "Double-Faced Cashmere Overcoat (Loro Piana / Max Mara Style)",
    category: "Outerwear",
    priceDollar: 1400,
    expectedYears: 12,
    wearsPerYear: 35,
    fabricTypeFa: "کشمیر خالص سنگین وزن با آستر کوپرو",
    fabricTypeEn: "Pure Heavyweight Cashmere with Cupro Lining",
    resaleValuePercent: 45
  },
  {
    nameFa: "کفش آکسفورد یا لوفر چرم گوساله دست‌دوز (Goodyear Welted)",
    nameEn: "Goodyear-Welted Calfskin Loafers / Oxfords",
    category: "Footwear",
    priceDollar: 480,
    expectedYears: 10,
    wearsPerYear: 60,
    fabricTypeFa: "چرم دانه‌کامل (Full-Grain) با قابلیت تعویض تخت",
    fabricTypeEn: "Full-Grain Box Calf Leather with Replaceable Soles",
    resaleValuePercent: 30
  },
  {
    nameFa: "پیراهن سفید آکسفورد کتان دو‌لا (Thomas Mason / Turnbull)",
    nameEn: "Two-Ply White Oxford Cotton Shirt (Thomas Mason / Turnbull)",
    category: "Shirts",
    priceDollar: 160,
    expectedYears: 5,
    wearsPerYear: 40,
    fabricTypeFa: "کتان پنبه‌ای مصری با تراکم بالا",
    fabricTypeEn: "High-Density Giza Egyptian Cotton Poplin",
    resaleValuePercent: 15
  },
  {
    nameFa: "ساعت کلاسیک مکانیکی استیل بند چرم (Cartier Tank / Omega Style)",
    nameEn: "Mechanical Stainless Steel Dress Timepiece (Cartier Tank / Omega Style)",
    category: "Timepiece",
    priceDollar: 3200,
    expectedYears: 25,
    wearsPerYear: 180,
    fabricTypeFa: "فولاد ضدزنگ ۳۱۶L با موتور مکانیکی سوئیسی",
    fabricTypeEn: "316L Stainless Steel & Swiss Automatic Movement",
    resaleValuePercent: 70
  },
  {
    nameFa: "شلوار فلانل طوسی زغالی ایتالیایی (Vitale Barberis Canonico)",
    nameEn: "Charcoal Italian Wool Flannel Trousers (VBC Mill)",
    category: "Trousers",
    priceDollar: 280,
    expectedYears: 6,
    wearsPerYear: 50,
    fabricTypeFa: "پشم فلانل مرغوب ۱۰۰٪ با ایستایی سنگین",
    fabricTypeEn: "100% Heavyweight Italian Wool Flannel Drape",
    resaleValuePercent: 20
  }
];

const LOCALIZED_ROI: Record<
  LanguageCode,
  {
    badge: string;
    subBadge: string;
    title: string;
    subtitle: string;
    cpwLabel: string;
    perWear: string;
    presetsLabel: string;
    parametersTitle: string;
    purchasePrice: string;
    lifespan: string;
    yearsUnit: string;
    wearsPerYear: string;
    timesUnit: string;
    totalWears: string;
    comparisonTitle: string;
    luxuryPillar: string;
    fastFashionPillar: string;
    initialPriceLabel: string;
    totalWearsLabel: string;
    realCpwLabel: string;
    repeatWasteLabel: string;
    averageLifespanLabel: string;
    fastFashionLifeDesc: string;
    fastFashionCpwLabel: string;
    verdictTitle: string;
    verdictDesc: string;
  }
> = {
  fa: {
    badge: "Luxury Investment ROI & Cost-Per-Wear",
    subBadge: "ماشین‌حساب ارزش واقعی هر بار پوشیدن",
    title: "محاسبه‌گر ارزش سرمایه‌گذاری مد اشرافی (Cost-Per-Wear)",
    subtitle: "اصل طلایی تجمل بی‌صدا: یک آیتم اصیل ۵ تا ۱۰ سال دوام می‌آورد و هزینه هر بار پوشیدن آن به مراتب کمتر از لباس‌های فست‌فشن بی‌کیفیت است.",
    cpwLabel: "هزینه هر بار پوشیدن (CPW)",
    perWear: "هر بار استفاده",
    presetsLabel: "معیارهای استاندارد سرمایه‌گذاری اشرافی:",
    parametersTitle: "پارامترهای اقتصادی لباس",
    purchasePrice: "قیمت خرید اولیه:",
    lifespan: "عمر مفید تخمینی با مراقبت اصولی:",
    yearsUnit: "سال",
    wearsPerYear: "تعداد دفعات پوشیدن در هر سال:",
    timesUnit: "بار",
    totalWears: "مجموع دفعات استفاده در طول عمر:",
    comparisonTitle: "مقایسه سرمایه‌گذاری اشرافی در برابر فست‌فشن مصرفی:",
    luxuryPillar: "قطعه کپسولی باکیفیت و اصیل",
    fastFashionPillar: "معادل فست‌فشن ارزان و مصرفی",
    initialPriceLabel: "قیمت اولیه:",
    totalWearsLabel: "تعداد دفعات پوشیدن:",
    realCpwLabel: "هزینه واقعی هر بار:",
    repeatWasteLabel: "هزینه خرید مکرر:",
    averageLifespanLabel: "عمر مفید متوسط:",
    fastFashionLifeDesc: "۱ سال (تخریب بافت)",
    fastFashionCpwLabel: "هزینه هر بار پوشیدن:",
    verdictTitle: "دیدگاه مالی استایلیست اشرافی:",
    verdictDesc: "خرید لباس‌های باکیفیت و بدون لوگو از الیاف طبیعی، نه‌تنها پرستیژ پایدار می‌سازد، بلکه در میان‌مدت پول شما را حفظ می‌کند.",
  },
  en: {
    badge: "Luxury Investment ROI & Cost-Per-Wear",
    subBadge: "True Cost-Per-Wear Calculator",
    title: "Cost-Per-Wear & Luxury Investment ROI Calculator",
    subtitle: "The golden rule of Quiet Luxury: An authentic bespoke piece lasts 5–10+ years, driving its true cost-per-wear far below cheap fast fashion.",
    cpwLabel: "True Cost-Per-Wear (CPW)",
    perWear: "per wear",
    presetsLabel: "Quiet Luxury Investment Benchmarks:",
    parametersTitle: "Garment Economic Parameters",
    purchasePrice: "Initial Purchase Price:",
    lifespan: "Estimated Lifespan with Proper Care:",
    yearsUnit: "years",
    wearsPerYear: "Estimated Wears per Year:",
    timesUnit: "wears",
    totalWears: "Total Lifetime Rotations:",
    comparisonTitle: "Noble Investment vs. Disposable Fast Fashion:",
    luxuryPillar: "Heirloom Capsule Foundation Piece",
    fastFashionPillar: "Disposable Synthetic Equivalent",
    initialPriceLabel: "Initial Price:",
    totalWearsLabel: "Total Rotations:",
    realCpwLabel: "True Cost / Wear:",
    repeatWasteLabel: "Total Replacement Cost:",
    averageLifespanLabel: "Average Lifespan:",
    fastFashionLifeDesc: "1 year (pilling / seam failure)",
    fastFashionCpwLabel: "Fast Fashion CPW:",
    verdictTitle: "Sartorial Financial Verdict:",
    verdictDesc: "Investing in immaculate tailoring and 100% natural noble fibers preserves capital, eliminates wardrobe anxiety, and projects effortless sophistication.",
  },
  fr: {
    badge: "Rentabilité du Luxe & Coût Par Port",
    subBadge: "Calculateur de Coût Par Port",
    title: "Calculateur de Rentabilité & Coût Par Port (Cost-Per-Wear)",
    subtitle: "La règle d'or du luxe discret : une pièce noble dure des années, réduisant le coût réel par port bien en-dessous de la fast-fashion.",
    cpwLabel: "Coût Réel Par Port (CPW)",
    perWear: "par utilisation",
    presetsLabel: "Modèles d'Investissement Sartorial :",
    parametersTitle: "Paramètres Économiques",
    purchasePrice: "Prix d'Achat Initial :",
    lifespan: "Durée de Vie Estimée :",
    yearsUnit: "ans",
    wearsPerYear: "Nombre de Ports par An :",
    timesUnit: "fois",
    totalWears: "Nombre Total de Ports :",
    comparisonTitle: "Investissement Noble vs Fast-Fashion Jetable :",
    luxuryPillar: "Pièce Capsule Haute Qualité",
    fastFashionPillar: "Équivalent Fast Fashion Jetable",
    initialPriceLabel: "Prix Initial :",
    totalWearsLabel: "Nombre de Ports :",
    realCpwLabel: "Coût Réel par Port :",
    repeatWasteLabel: "Coût de Remplacement :",
    averageLifespanLabel: "Durée de Vie Moyenne :",
    fastFashionLifeDesc: "1 an (dégradation)",
    fastFashionCpwLabel: "Coût Fast Fashion :",
    verdictTitle: "Verdict Financier Sartorial :",
    verdictDesc: "L'achat de pièces durables et intemporelles protège votre budget tout en assurant une élégance pérenne.",
  },
  it: {
    badge: "Rendimento Investimento Lusso & Costo Per Indosso",
    subBadge: "Calcolatore Valore per Indosso",
    title: "Calcolatore Costo Per Indosso & Rendimento del Lusso",
    subtitle: "La regola aurea del lusso sobrio: un capo di alta sartoria dura anni, con un costo per indosso nettamente inferiore ai capi sintetici.",
    cpwLabel: "Costo Per Indosso (CPW)",
    perWear: "per utilizzo",
    presetsLabel: "Benchmark di Investimento Sartoriale :",
    parametersTitle: "Parametri Economici",
    purchasePrice: "Prezzo di Acquisto :",
    lifespan: "Durata Utile Stimata :",
    yearsUnit: "anni",
    wearsPerYear: "Utilizzi all'Anno :",
    timesUnit: "volte",
    totalWears: "Indossi Totali nel Ciclo di Vita :",
    comparisonTitle: "Investimento Sartoriale vs Moda Usa e Getta :",
    luxuryPillar: "Capo Sartoriale di Pregio",
    fastFashionPillar: "Equivalente Fast Fashion",
    initialPriceLabel: "Prezzo Iniziale :",
    totalWearsLabel: "Indossi Totali :",
    realCpwLabel: "Costo Reale / Indosso :",
    repeatWasteLabel: "Costo Ricambi Totale :",
    averageLifespanLabel: "Durata Media :",
    fastFashionLifeDesc: "1 anno (usura sintetica)",
    fastFashionCpwLabel: "Costo per Indosso FF :",
    verdictTitle: "Diagnosi Finanziaria Sartoriale :",
    verdictDesc: "I tessuti nobili e la manifattura artigianale preservano il tuo capitale e garantiscono un'autorevolezza senza tempo.",
  },
  ar: {
    badge: "عائد الاستثمار الفاخر وتكلفة الاستخدام",
    subBadge: "حاسبة القيمة الحقيقية لكل استخدام",
    title: "حاسبة القيمة لكل استخدام وعائد الاستثمار الفاخر (Cost-Per-Wear)",
    subtitle: "القاعدة الذهبية للفخامة الهادئة: قطعة أصيلة تدوم ٥ إلى ١٠ سنوات تكون تكلفتها الحقيقية لكل استخدام أقل بكثير من الأزياء السريعة الرديئة.",
    cpwLabel: "تكلفة كل مرة استخدام (CPW)",
    perWear: "لكل استخدام",
    presetsLabel: "نماذج استثمارية راقية للاختيار:",
    parametersTitle: "المعايير الاقتصادية للقطعة",
    purchasePrice: "سعر الشراء:",
    lifespan: "العمر الافتراضي مع العناية الجيدة:",
    yearsUnit: "سنوات",
    wearsPerYear: "مرات الارتداء سنوياً:",
    timesUnit: "مرة",
    totalWears: "إجمالي مرات الاستخدام:",
    comparisonTitle: "مقارنة الاستثمار الفاخر مقابل الموضة السريعة الاستهلاكية:",
    luxuryPillar: "قطعة كبسولة فاخرة وعالية الجودة",
    fastFashionPillar: "البديل السريع منخفض الجودة",
    initialPriceLabel: "السعر الأولي:",
    totalWearsLabel: "إجمالي مرات الارتداء:",
    realCpwLabel: "التكلفة الحقيقية لكل مرة:",
    repeatWasteLabel: "تكلفة الشراء المتكرر:",
    averageLifespanLabel: "متوسط العمر الافتراضي:",
    fastFashionLifeDesc: "سنة واحدة (تلف النسيج)",
    fastFashionCpwLabel: "تكلفة الاستخدام السريع:",
    verdictTitle: "التقييم المالي لمستشار الأناقة:",
    verdictDesc: "الاستثمار في الأقمشة الطبيعية والخياطة المتقنة يحافظ على رأس مالك ويمنحك وقاراً وثقة مستمرة لسنوات.",
  },
};

export const CostPerWearCalculator: React.FC<{ lang?: LanguageCode }> = ({ lang = "fa" }) => {
  const isEn = lang !== "fa" && lang !== "ar";
  const [selectedPreset, setSelectedPreset] = useState<PresetItem>(LUXURY_PRESETS[0]);
  const [customPrice, setCustomPrice] = useState<number>(LUXURY_PRESETS[0].priceDollar);
  const [customYears, setCustomYears] = useState<number>(LUXURY_PRESETS[0].expectedYears);
  const [customWearsPerYear, setCustomWearsPerYear] = useState<number>(LUXURY_PRESETS[0].wearsPerYear);

  const t = LOCALIZED_ROI[lang] || LOCALIZED_ROI.fa;
  const isRtl = lang === "fa" || lang === "ar";

  const handleSelectPreset = (p: PresetItem) => {
    setSelectedPreset(p);
    setCustomPrice(p.priceDollar);
    setCustomYears(p.expectedYears);
    setCustomWearsPerYear(p.wearsPerYear);
  };

  const totalWears = customYears * customWearsPerYear;
  const luxuryCPW = totalWears > 0 ? (customPrice / totalWears).toFixed(2) : "0.00";
  
  // Fast fashion comparison metrics
  const fastFashionPrice = Math.max(40, Math.round(customPrice * 0.15));
  const fastFashionLifespanYears = 1;
  const fastFashionWearsPerYear = Math.min(customWearsPerYear, 15);
  const fastFashionTotalWears = fastFashionLifespanYears * fastFashionWearsPerYear;
  const fastFashionCPW = (fastFashionPrice / fastFashionTotalWears).toFixed(2);
  const replacementsNeeded = Math.ceil(customYears / fastFashionLifespanYears);
  const totalFastFashionWasteCost = fastFashionPrice * replacementsNeeded;

  return (
    <div id="cost-per-wear-calculator" className="bg-[#171513] border border-[#383127] rounded-3xl p-6 sm:p-8 shadow-xl" dir={isRtl ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#2C261F] pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-[#25201A] text-[#E6CA9E] border border-[#C5A880]/30 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <Calculator className="w-3.5 h-3.5 text-[#C5A880]" />
              {t.badge}
            </span>
            <span className="text-xs text-stone-400">{t.subBadge}</span>
          </div>
          <h3 className="text-2xl font-bold text-[#F3EFEA] font-serif-luxury">
            {t.title}
          </h3>
          <p className="text-sm text-stone-300 mt-1">
            {t.subtitle}
          </p>
        </div>

        {/* Big Metric Badge */}
        <div className="bg-[#1F1A14] p-4 rounded-2xl border border-[#C5A880]/40 text-center shrink-0">
          <div className="text-xs text-[#C5A880] font-semibold">{t.cpwLabel}</div>
          <div className="text-3xl font-black text-[#F3EFEA] font-mono mt-1">
            ${luxuryCPW} <span className="text-xs font-normal text-stone-400">/ {t.perWear}</span>
          </div>
        </div>
      </div>

      {/* Preset Selector Chips */}
      <div className="mb-6">
        <div className="text-xs text-stone-400 font-semibold mb-2.5">{t.presetsLabel}</div>
        <div className="flex flex-wrap gap-2">
          {LUXURY_PRESETS.map((p, idx) => {
            const isSelected = selectedPreset.nameFa === p.nameFa;
            const displayName = isEn ? p.nameEn.split(" (")[0] : p.nameFa.split(" (")[0];
            return (
              <button
                key={idx}
                onClick={() => handleSelectPreset(p)}
                className={`px-3.5 py-2 rounded-xl text-xs font-medium border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-[#2A231A] border-[#C5A880] text-[#E6CA9E] shadow-sm"
                    : "bg-[#11100E] border-[#29231D] text-stone-400 hover:text-stone-200"
                }`}
              >
                {displayName}
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Controls & Comparison Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Sliders / Inputs (5 cols) */}
        <div className="lg:col-span-5 bg-[#12100E] p-5 rounded-2xl border border-[#2B251E] space-y-4">
          <div className="text-sm font-bold text-[#F3EFEA] font-serif-luxury border-b border-[#25201A] pb-2">
            {t.parametersTitle}
          </div>

          <div>
            <div className="flex justify-between text-xs text-stone-300 mb-1.5">
              <span>{t.purchasePrice}</span>
              <span className="font-mono font-bold text-[#E6CA9E]">${customPrice}</span>
            </div>
            <input
              type="range"
              min="50"
              max="5000"
              step="50"
              value={customPrice}
              onChange={(e) => setCustomPrice(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-stone-300 mb-1.5">
              <span>{t.lifespan}</span>
              <span className="font-mono font-bold text-[#E6CA9E]">{customYears} {t.yearsUnit}</span>
            </div>
            <input
              type="range"
              min="1"
              max="25"
              step="1"
              value={customYears}
              onChange={(e) => setCustomYears(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between text-xs text-stone-300 mb-1.5">
              <span>{t.wearsPerYear}</span>
              <span className="font-mono font-bold text-[#E6CA9E]">{customWearsPerYear} {t.timesUnit}</span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={customWearsPerYear}
              onChange={(e) => setCustomWearsPerYear(Number(e.target.value))}
              className="w-full accent-[#C5A880] cursor-pointer"
            />
          </div>

          <div className="p-3 bg-[#191714] rounded-xl border border-[#2D2720] flex items-center justify-between text-xs">
            <span className="text-stone-400">{t.totalWears}</span>
            <span className="font-mono font-bold text-white text-sm">{totalWears} {t.timesUnit}</span>
          </div>
        </div>

        {/* Comparison Showcase (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="text-xs text-stone-400 font-bold">
            {t.comparisonTitle}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Luxury Card */}
            <div className="p-5 rounded-2xl bg-[#1D1914] border border-[#C5A880]/50 space-y-3 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-bold text-[#E6CA9E]">
                <Award className="w-4 h-4 text-[#C5A880]" />
                <span>{t.luxuryPillar}</span>
              </div>
              <div className="space-y-1 text-xs text-stone-300">
                <div className="flex justify-between">
                  <span className="text-stone-400">{t.initialPriceLabel}</span>
                  <span className="font-mono font-bold text-white">${customPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-stone-400">{t.totalWearsLabel}</span>
                  <span className="font-mono text-stone-200">{totalWears} {t.timesUnit}</span>
                </div>
                <div className="flex justify-between border-t border-[#382F24] pt-2 mt-2">
                  <span className="font-bold text-[#C5A880]">{t.realCpwLabel}</span>
                  <span className="font-mono font-black text-emerald-400 text-sm">${luxuryCPW}</span>
                </div>
              </div>
            </div>

            {/* Fast Fashion Card */}
            <div className="p-5 rounded-2xl bg-[#141210] border border-[#302820] space-y-3 text-stone-400">
              <div className="flex items-center gap-2 text-xs font-bold text-stone-300">
                <AlertCircle className="w-4 h-4 text-amber-500" />
                <span>{t.fastFashionPillar}</span>
              </div>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span>{t.repeatWasteLabel}</span>
                  <span className="font-mono font-bold text-rose-400">${totalFastFashionWasteCost}</span>
                </div>
                <div className="flex justify-between">
                  <span>{t.averageLifespanLabel}</span>
                  <span className="font-mono">{t.fastFashionLifeDesc}</span>
                </div>
                <div className="flex justify-between border-t border-[#262018] pt-2 mt-2">
                  <span className="font-bold text-stone-300">{t.fastFashionCpwLabel}</span>
                  <span className="font-mono font-bold text-rose-400 text-sm">${fastFashionCPW}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Diagnosis Note */}
          <div className="p-4 bg-[#141210] rounded-2xl border border-[#2D261E] flex items-start gap-3">
            <Sparkles className="w-4 h-4 text-[#C5A880] shrink-0 mt-0.5" />
            <div className="text-xs text-stone-300 leading-relaxed">
              <strong className="text-[#E6CA9E] block mb-0.5">{t.verdictTitle}</strong>
              {t.verdictDesc}
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
