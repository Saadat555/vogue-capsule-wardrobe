import React, { useState, useMemo, useEffect } from "react";
import {
  Sparkles,
  Search,
  Check,
  Award,
  Layers,
  Shirt,
  ShieldCheck,
  Shield,
  Palette,
  AlertTriangle,
  Flame,
  Bookmark,
  Copy,
  ChevronDown,
  RefreshCw,
  Sun,
  CloudRain,
  Sliders,
  CheckSquare,
  Square,
  CheckCircle2,
  Calendar,
  Briefcase,
  Shuffle,
  ShoppingBag,
  Crown,
  Type,
  Scissors
} from "lucide-react";
import {
  OCCASION_CATEGORIES,
  getAdviceByOccasionAndGender,
  SEARCH_FALLBACK_ADVICE
} from "./data/stylingDatabase";
import {
  WEATHER_CONDITIONS,
  BODY_PROPORTIONS,
  SKIN_UNDERTONES,
  CORE_WARDROBE_ITEMS,
  MIRROR_CHECKLIST_ITEMS
} from "./data/modernFeatures";
import { LuxuryEditorialShowcase } from "./components/LuxuryEditorialShowcase";
import { InteractiveMannequinAtelier } from "./components/InteractiveMannequinAtelier";
import { AdvancedStylingSuite } from "./components/AdvancedStylingSuite";
import { QuietLuxuryMastery } from "./components/QuietLuxuryMastery";
import { TactileFabricScanner } from "./components/TactileFabricScanner";
import { InteractivePrestigeLookbook } from "./components/InteractivePrestigeLookbook";
import { WeeklyWardrobePlanner } from "./components/WeeklyWardrobePlanner";
import { CostPerWearCalculator } from "./components/CostPerWearCalculator";
import { VirtualCapsuleAuditor } from "./components/VirtualCapsuleAuditor";
import { QualityRewardFeedbackCenter } from "./components/QualityRewardFeedbackCenter";
import { AdminFeedbackInboxModal } from "./components/AdminFeedbackInboxModal";
import { VipSubscriptionModal } from "./components/VipSubscriptionModal";
import { VipExclusivePassportModal } from "./components/VipExclusivePassportModal";
import { LuxuryAffiliateShopCurator } from "./components/LuxuryAffiliateShopCurator";
import { AiVirtualTryOnStudio } from "./components/AiVirtualTryOnStudio";
import { AiHairBeautyStudio } from "./components/AiHairBeautyStudio";
import { AtelierConciergeModal } from "./components/AtelierConciergeModal";
import { LanguageSelector } from "./components/LanguageSelector";
import { LanguageCode, TRANSLATIONS } from "./i18n/translations";
import {
  getLocalizedAdvice,
  LOCALIZED_WEATHER,
  LOCALIZED_BODY_PROPORTIONS,
  LOCALIZED_SKIN_UNDERTONES,
  LOCALIZED_MIRROR_CHECKS
} from "./i18n/dataTranslations";

export const LOCALIZED_OCCASION_TITLES: Record<string, Record<LanguageCode, string>> = {
  "formal-wedding": {
    fa: "مهمانی بسیار رسمی، عروسی و جشن شب",
    en: "Wedding & Black-Tie Gala",
    fr: "Mariage & Soirée de Gala",
    it: "Matrimonio & Serata di Gala",
    ar: "حفل زفاف ومناسبات ملكية فاخرة",
  },
  "business-smart": {
    fa: "جلسه کاری مهم، مصاحبه و محیط اداری سطح بالا",
    en: "Executive Interview & Board Meeting",
    fr: "Entretien d'Embauche & Conseil",
    it: "Colloquio di Lavoro & Riunione C-Level",
    ar: "مقابلة عمل واجتماعات مجلس الإدارة",
  },
  "first-date": {
    fa: "قرار عاشقانه، رستوران لوکس و اولین ملاقات",
    en: "Romantic Dinner & Evening Date",
    fr: "Dîner Romantique & Rendez-vous",
    it: "Cena Romantica & Appuntamento",
    ar: "عشاء رومانسي وموعد خاص",
  },
  "casual-brunch": {
    fa: "کافه گردی، دورهمی دوستانه و آخر هفته شیک",
    en: "Weekend Leisure & Casual Luxury",
    fr: "Week-end Chic & Sortie Détente",
    it: "Tempo Libero Chic & Weekend",
    ar: "عطلة نهاية الأسبوع والنزهات الكاجوال",
  },
  "travel-resort": {
    fa: "سفر، فرودگاه، هتل و استایل تعطیلات",
    en: "Luxury Travel, Flight & Resort",
    fr: "Voyage en Première Classe & Vacances",
    it: "Viaggi di Lusso & Voli Resort",
    ar: "السفر الجوي والعطلات الفاخرة",
  },
  "autumn-winter-coat": {
    fa: "فصل سرد، بارانی، پالتو و لایه‌بندی کلاسیک",
    en: "Winter Overcoat & Classic Layering",
    fr: "Manteau d'Hiver & Superposition Sartoriale",
    it: "Cappotto Invernale & Sovrapposizioni Classiche",
    ar: "المعطف الشتوي والتنسيق الطبقي الكلاسيكي",
  },
  // Aliases for backwards compatibility
  "wedding-gala": {
    fa: "عروسی و مراسم رسمی مجلل",
    en: "Wedding & Black-Tie Gala",
    fr: "Mariage & Soirée de Gala",
    it: "Matrimonio & Serata di Gala",
    ar: "حفل زفاف ومناسبات ملكية فاخرة",
  },
  "interview-business": {
    fa: "مصاحبه کاری و جلسات سرنوشت‌ساز",
    en: "Executive Interview & Board Meeting",
    fr: "Entretien d'Embauche & Conseil",
    it: "Colloquio di Lavoro & Riunione C-Level",
    ar: "مقابلة عمل واجتماعات مجلس الإدارة",
  },
  "date-dinner": {
    fa: "قرار شام رمانتیک و کافه",
    en: "Romantic Dinner & Evening Date",
    fr: "Dîner Romantique & Rendez-vous",
    it: "Cena Romantica & Appuntamento",
    ar: "عشاء رومانسي وموعد خاص",
  },
  "daily-office": {
    fa: "محیط کار اداری و شرکتی",
    en: "Daily Corporate & Smart Office",
    fr: "Bureau & Environnement Professionnel",
    it: "Ufficio Quotidiano & Business Casual",
    ar: "العمل المكتبي والشركات اليومية",
  },
  "casual-weekend": {
    fa: "دورهمی کژوال و آخر هفته",
    en: "Weekend Leisure & Casual Luxury",
    fr: "Week-end Chic & Sortie Détente",
    it: "Tempo Libero Chic & Weekend",
    ar: "عطلة نهاية الأسبوع والنزهات الكاجوال",
  },
  "travel-vacation": {
    fa: "سفر، پرواز و تعطیلات لوکس",
    en: "Luxury Travel, Flight & Resort",
    fr: "Voyage en Première Classe & Vacances",
    it: "Viaggi di Lusso & Voli Resort",
    ar: "السفر الجوي والعطلات الفاخرة",
  },
};

export default function App() {
  // 0. Multilingual State: "en" is 100% default
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => {
    const saved = localStorage.getItem("vogue_app_lang");
    if (saved && ["en", "fa", "fr", "it", "ar"].includes(saved)) {
      return saved as LanguageCode;
    }
    return "en";
  });

  const t = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const isRtl = currentLanguage === "fa" || currentLanguage === "ar";

  useEffect(() => {
    localStorage.setItem("vogue_app_lang", currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = isRtl ? "rtl" : "ltr";
  }, [currentLanguage, isRtl]);

  // 1. Gender State: "men" or "women"
  const [selectedGender, setSelectedGender] = useState<"men" | "women">("men");

  // Admin Inbox Modal State
  const [isAdminInboxOpen, setIsAdminInboxOpen] = useState<boolean>(false);

  // 2. Selected Occasion Category
  const [selectedOccasionId, setSelectedOccasionId] = useState<string>("formal-wedding");

  // 3. Search query state
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isConsulting, setIsConsulting] = useState<boolean>(false);

  // 4. Saved outfits bookmarked
  const [savedOutfits, setSavedOutfits] = useState<string[]>([]);
  const [copiedState, setCopiedState] = useState<boolean>(false);
  const [showCopyToast, setShowCopyToast] = useState<boolean>(false);

  // 5. Modern Smart Tool States
  const [activeModernTab, setActiveModernTab] = useState<"weather" | "body" | "skin" | "capsule" | "mirror">("weather");
  const [activeWeatherId, setActiveWeatherId] = useState<string>("mild");
  const [activeBodyId, setActiveBodyId] = useState<string>(
    selectedGender === "men" ? "athletic-v" : "hourglass"
  );
  const [activeSkinId, setActiveSkinId] = useState<string>("warm-golden");
  const [selectedWardrobeItems, setSelectedWardrobeItems] = useState<string[]>([
    "white-shirt",
    "navy-blazer",
    "grey-trousers",
    "leather-shoes"
  ]);
  const [completedMirrorChecks, setCompletedMirrorChecks] = useState<string[]>([]);

  // Master Atelier Mode Switcher: "virtual-tryon" (Haute VTON Atelier), "hair-beauty" (Haute Coiffure & Beauty), "capsule-wardrobe" (Quiet Luxury & Styling)
  const [masterStudioMode, setMasterStudioMode] = useState<"virtual-tryon" | "hair-beauty" | "capsule-wardrobe">("virtual-tryon");
  const [isConciergeGuideOpen, setIsConciergeGuideOpen] = useState<boolean>(false);

  // 6. Typography Mode ("editorial" for Classical Haute Luxury Serif, "modern" for Clean Minimal Sans)
  const [typographyMode, setTypographyMode] = useState<"editorial" | "modern">("editorial");

  // 7. VIP Haute Membership & Automated Activation
  const [isVip, setIsVip] = useState<boolean>(() => {
    return localStorage.getItem("vogue_vip_access") === "true";
  });
  const [isVipModalOpen, setIsVipModalOpen] = useState<boolean>(false);
  const [isPassportModalOpen, setIsPassportModalOpen] = useState<boolean>(false);

  const handleActivateVip = () => {
    setIsVip(true);
    localStorage.setItem("vogue_vip_access", "true");
    setIsVipModalOpen(false);
    setShowCopyToast(true);
    setTimeout(() => setShowCopyToast(false), 4000);
  };

  useEffect(() => {
    document.body.classList.remove("font-mode-editorial", "font-mode-modern");
    document.body.classList.add(`font-mode-${typographyMode}`);
  }, [typographyMode]);

  // Dynamic Localized Lookup of Advice Data
  const adviceData = useMemo(() => {
    return getLocalizedAdvice(selectedOccasionId, selectedGender, currentLanguage);
  }, [selectedOccasionId, selectedGender, currentLanguage]);

  const currentCategory = OCCASION_CATEGORIES.find((c) => c.id === selectedOccasionId) || OCCASION_CATEGORIES[0];
  const currentCategoryTitle = LOCALIZED_OCCASION_TITLES[currentCategory.id]?.[currentLanguage] || currentCategory.persianTitle;

  // Modern Sub-Features Profile Lookups
  const currentWeather = WEATHER_CONDITIONS.find((w) => w.id === activeWeatherId) || WEATHER_CONDITIONS[0];
  const currentBodyProfile =
    BODY_PROPORTIONS[selectedGender].find((b) => b.id === activeBodyId) || BODY_PROPORTIONS[selectedGender][0];
  const currentSkinProfile = SKIN_UNDERTONES.find((s) => s.id === activeSkinId) || SKIN_UNDERTONES[0];
  const currentWardrobePool = CORE_WARDROBE_ITEMS[selectedGender];
  const currentChecklist = MIRROR_CHECKLIST_ITEMS[selectedGender];

  // Handle Search Submission (Multilingual keyword matching)
  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsConsulting(true);
    setTimeout(() => {
      const q = searchQuery.toLowerCase();
      if (
        q.includes("عروسی") || q.includes("مهمانی") || q.includes("جشن") || q.includes("شام") ||
        q.includes("wedding") || q.includes("gala") || q.includes("party") || q.includes("mariage") ||
        q.includes("matrimonio") || q.includes("زفاف") || q.includes("حفل")
      ) {
        setSelectedOccasionId("wedding-gala");
      } else if (
        q.includes("مصاحبه") || q.includes("کاری") || q.includes("اداره") || q.includes("قرارداد") ||
        q.includes("interview") || q.includes("business") || q.includes("meeting") || q.includes("board") ||
        q.includes("entretien") || q.includes("colloquio") || q.includes("عمل") || q.includes("مقابلة")
      ) {
        setSelectedOccasionId("interview-business");
      } else if (
        q.includes("کافه") || q.includes("دوستانه") || q.includes("قرار") || q.includes("خرید") ||
        q.includes("date") || q.includes("dinner") || q.includes("romantic") || q.includes("dîner") ||
        q.includes("cena") || q.includes("موعد") || q.includes("عشاء")
      ) {
        setSelectedOccasionId("date-dinner");
      } else if (
        q.includes("سفر") || q.includes("پرواز") || q.includes("چمدان") || q.includes("راحت") ||
        q.includes("travel") || q.includes("vacation") || q.includes("flight") || q.includes("voyage") ||
        q.includes("viaggio") || q.includes("سفر") || q.includes("طيران")
      ) {
        setSelectedOccasionId("travel-vacation");
      } else if (
        q.includes("ورزش") || q.includes("باشگاه") || q.includes("پیاده‌روی") || q.includes("آخر هفته") ||
        q.includes("weekend") || q.includes("casual") || q.includes("leisure") || q.includes("week-end") ||
        q.includes("عطلة") || q.includes("نهاية الأسبوع")
      ) {
        setSelectedOccasionId("casual-weekend");
      } else {
        setSelectedOccasionId("daily-office");
      }
      setIsConsulting(false);
    }, 300);
  };

  // Toggle Wardrobe Item in Capsule
  const handleToggleWardrobeItem = (itemId: string) => {
    if (selectedWardrobeItems.includes(itemId)) {
      setSelectedWardrobeItems(selectedWardrobeItems.filter((id) => id !== itemId));
    } else {
      setSelectedWardrobeItems([...selectedWardrobeItems, itemId]);
    }
  };

  // Toggle Mirror Checklist Item
  const handleToggleMirrorCheck = (itemId: string) => {
    if (completedMirrorChecks.includes(itemId)) {
      setCompletedMirrorChecks(completedMirrorChecks.filter((id) => id !== itemId));
    } else {
      setCompletedMirrorChecks([...completedMirrorChecks, itemId]);
    }
  };

  // Toggle Bookmark
  const handleToggleSave = () => {
    const key = `${selectedGender}-${selectedOccasionId}`;
    if (savedOutfits.includes(key)) {
      setSavedOutfits(savedOutfits.filter((k) => k !== key));
    } else {
      setSavedOutfits([...savedOutfits, key]);
    }
  };

  const isCurrentSaved = savedOutfits.includes(`${selectedGender}-${selectedOccasionId}`);

  // Copy Full Styling Advice
  const handleCopyFullConsultation = () => {
    const text =
      `🏛️ ${adviceData.title}\n` +
      `⚜️ ${t.target_situation}: ${currentCategoryTitle} (${selectedGender === "men" ? t.men : t.women})\n\n` +
      `📌 ${t.why_this_works}\n${adviceData.whyThisWorks}\n\n` +
      `🎨 ${t.color_distribution}:\n• ${t.color_primary}: ${adviceData.colorRule.primary}\n• ${t.color_secondary}: ${adviceData.colorRule.secondary}\n• ${t.color_accent}: ${adviceData.colorRule.accent}\n\n` +
      `👔 ${t.breakdown_title}:\n` +
      `• ${t.breakdown_top}: ${adviceData.breakdown.top.name} (${adviceData.breakdown.top.material})\n` +
      (adviceData.breakdown.layerOrOuterwear ? `• ${t.breakdown_layer}: ${adviceData.breakdown.layerOrOuterwear.name} (${adviceData.breakdown.layerOrOuterwear.color})\n` : '') +
      `• ${t.breakdown_bottom}: ${adviceData.breakdown.bottom.name} (${adviceData.breakdown.bottom.cutAndFit})\n` +
      `• ${t.breakdown_shoes}: ${adviceData.breakdown.shoes.name} (${adviceData.breakdown.shoes.color})\n\n` +
      `✨ ${t.golden_rules_title}:\n${adviceData.goldenStylingRules.map((r, i) => `${i + 1}. ${r}`).join('\n')}\n\n` +
      `🚫 ${t.mistakes_title}:\n${adviceData.commonMistakesToAvoid.map((m) => `❌ ${m}`).join('\n')}\n\n` +
      `🌸 ${t.signature_scent_title}: ${adviceData.scentRecommendation.name}`;

    navigator.clipboard.writeText(text);
    setCopiedState(true);
    setShowCopyToast(true);
    setTimeout(() => {
      setCopiedState(false);
      setShowCopyToast(false);
    }, 3000);
  };

  return (
    <div
      className="min-h-screen font-sans antialiased flex flex-col justify-between bg-[#0E0D0B] text-[#F3EFEA] selection:bg-[#C5A880] selection:text-[#100F0D]"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Top Haute Atelier Announcement Banner */}
      <div className="bg-[#141210] text-[#E6CA9E] text-xs py-3 px-4 border-b border-[#2C261F] tracking-wide relative z-40">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#C5A880] font-serif">⚜</span>
            <span className="font-medium text-[11px] sm:text-xs">
              {t.app_subtitle}
            </span>
          </div>
          <div className="flex items-center gap-3 text-[11px] text-stone-400">
            <span className="hidden sm:inline font-cinzel text-[#C5A880]">LONDON • MILAN • PARIS</span>
            <div className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SAVILE ROW & QUIET LUXURY 2026</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Luxury Header */}
      <header className="bg-[#141210]/95 backdrop-blur-md border-b border-[#2D2720] sticky top-0 z-30 shadow-2xl">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3 select-none">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#2D2419] to-[#17130F] text-[#E6CA9E] flex items-center justify-center font-serif text-2xl font-bold border border-[#C5A880]/40 shadow-md font-cinzel">
              M
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white block leading-none font-cinzel">
                  Maison Saadat
                </span>
                <span className="text-[10px] bg-[#292219] text-[#D4AF37] border border-[#52412F] px-2 py-0.5 rounded-md font-cinzel font-bold">
                  HAUTE ATELIER
                </span>
              </div>
              <span className="text-[10px] tracking-widest uppercase text-[#C5A880] font-semibold block mt-1 font-cinzel">
                {currentLanguage === "fa" ? "سوپر استودیوی لوکس مد، زیبایی و پرو زنده لباس" : "HAUTE COUTURE & AI ATELIER 2026"}
              </span>
            </div>
          </div>

          {/* Controls: Language Selector, Typography, Gender & Admin */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Global Language Selector (EN / FA / FR / IT / AR) */}
            <LanguageSelector
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />

            {/* Font / Typography Style Switcher (Desktop: Enlarged min-h-[44px] touch target) */}
            <div className="hidden lg:flex items-center bg-[#1D1A16] p-1.5 rounded-2xl border border-[#383127]">
              <button
                id="font-editorial-btn"
                onClick={() => setTypographyMode("editorial")}
                title="Haute Editorial Serif"
                className={`flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  typographyMode === "editorial"
                    ? "bg-[#2A231A] text-[#E6CA9E] border border-[#C5A880]/50 shadow-xs"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                <Type className="w-4 h-4 text-[#C5A880]" />
                <span>{t.editorial_font}</span>
              </button>
              <button
                id="font-modern-btn"
                onClick={() => setTypographyMode("modern")}
                title="Modern Sans"
                className={`flex items-center gap-2 px-3.5 py-2 min-h-[40px] rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  typographyMode === "modern"
                    ? "bg-[#2A231A] text-[#E6CA9E] border border-[#C5A880]/50 shadow-xs"
                    : "text-stone-400 hover:text-stone-200"
                }`}
              >
                <span>{t.modern_font}</span>
              </button>
            </div>

            {/* Gender Selector Switch */}
            <div className="flex items-center bg-[#1D1A16] p-1.5 rounded-2xl border border-[#383127]">
              <button
                id="gender-men-btn"
                onClick={() => setSelectedGender("men")}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 min-h-[40px] rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedGender === "men"
                    ? "bg-[#C5A880] text-[#141210] shadow-sm font-extrabold"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                <span>{t.men}</span>
              </button>
              <button
                id="gender-women-btn"
                onClick={() => setSelectedGender("women")}
                className={`flex items-center gap-2 px-3.5 sm:px-4 py-2 min-h-[40px] rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  selectedGender === "women"
                    ? "bg-[#C5A880] text-[#141210] shadow-sm font-extrabold"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                <span>{t.women}</span>
              </button>
            </div>

            {/* VIP Status & Crypto Upgrade Trigger Button */}
            <button
              id="vip-membership-header-btn"
              onClick={() => {
                if (isVip) {
                  setIsPassportModalOpen(true);
                } else {
                  setIsVipModalOpen(true);
                }
              }}
              title={isVip ? "VIP Active - View 30-Day Passport" : "Unlock VIP 30-Day & Haute Features"}
              className={`p-2 sm:px-3.5 sm:py-2 min-h-[40px] rounded-2xl border transition-all cursor-pointer flex items-center gap-1.5 shadow-md ${
                isVip
                  ? "bg-[#2B2317] border-[#D4AF37] text-[#F3EFEA] hover:bg-[#382D1D] ring-1 ring-[#D4AF37]/50"
                  : "bg-gradient-to-r from-[#292219] to-[#1C1610] hover:from-[#3D3020] hover:to-[#2A2016] border-[#C5A880]/70 text-[#E6CA9E]"
              }`}
            >
              <Crown className={`w-4 h-4 ${isVip ? "text-[#D4AF37] fill-[#D4AF37]" : "text-[#C5A880]"}`} />
              <span className="text-xs font-bold font-cinzel tracking-wider">
                {isVip
                  ? (currentLanguage === "fa" ? "عضو طلایی VIP" : "VIP ATELIER")
                  : (currentLanguage === "fa" ? "ارتقا به VIP" : "UNLOCK VIP")}
              </span>
            </button>

            {/* Admin / Concierge Inbox Button with Security Lock */}
            <button
              id="admin-inbox-header-btn"
              onClick={() => setIsAdminInboxOpen(true)}
              title={t.admin_panel}
              className="p-2 sm:px-3 sm:py-2 min-h-[40px] rounded-2xl bg-[#1D1A16] hover:bg-[#2A2319] border border-[#383127] hover:border-[#C5A880] text-stone-300 hover:text-[#E6CA9E] transition-all cursor-pointer flex items-center gap-1.5 shadow-sm"
            >
              <Shield className="w-4 h-4 text-[#C5A880]" />
              <span className="hidden xl:inline text-xs font-bold">{t.admin_panel}</span>
            </button>
          </div>
        </div>

        {/* Mobile Dedicated Typography & Quick Access Bar (Directly solves feedback for small screens) */}
        <div className="flex lg:hidden items-center justify-between border-t border-[#25201A] bg-[#14110E] px-4 py-2.5">
          <span className="text-[11px] text-stone-400 font-bold flex items-center gap-1.5">
            <Type className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>{currentLanguage === "fa" ? "فونت سایت:" : "Site Font:"}</span>
          </span>

          <div className="flex items-center gap-2">
            <button
              id="mobile-font-editorial-btn"
              onClick={() => setTypographyMode("editorial")}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                typographyMode === "editorial"
                  ? "bg-[#C5A880] text-[#141210] shadow-sm"
                  : "bg-[#1E1A16] text-stone-300 border border-[#383127]"
              }`}
            >
              <span>{t.editorial_font}</span>
            </button>
            <button
              id="mobile-font-modern-btn"
              onClick={() => setTypographyMode("modern")}
              className={`min-h-[44px] px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                typographyMode === "modern"
                  ? "bg-[#C5A880] text-[#141210] shadow-sm"
                  : "bg-[#1E1A16] text-stone-300 border border-[#383127]"
              }`}
            >
              <span>{t.modern_font}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10 flex-1 w-full">
        {/* ========================================================================= */}
        {/* MASTER ATELIER SUITE SWITCHER (Minimal, Uncluttered & Haute Couture) */}
        {/* ========================================================================= */}
        <section className="bg-[#151310] border border-[#3A3227] rounded-3xl p-2 sm:p-2.5 shadow-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            <button
              id="tab-virtual-tryon-studio"
              onClick={() => setMasterStudioMode("virtual-tryon")}
              className={`py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2.5 ${
                masterStudioMode === "virtual-tryon"
                  ? "bg-gradient-to-r from-[#C5A880] to-[#E6CA9E] text-[#141210] font-extrabold shadow-lg ring-1 ring-[#C5A880]"
                  : "bg-[#1C1814] text-stone-300 hover:text-white hover:bg-[#25201A] border border-[#2F271E]"
              }`}
            >
              <Shirt className="w-4 h-4 shrink-0" />
              <span className="truncate">
                {currentLanguage === "fa" ? "پرو زنده و مدل لباس (Virtual Try-On)" : "Haute Virtual Try-On"}
              </span>
            </button>

            <button
              id="tab-hair-beauty-studio"
              onClick={() => setMasterStudioMode("hair-beauty")}
              className={`py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2.5 ${
                masterStudioMode === "hair-beauty"
                  ? "bg-gradient-to-r from-[#C5A880] to-[#E6CA9E] text-[#141210] font-extrabold shadow-lg ring-1 ring-[#C5A880]"
                  : "bg-[#1C1814] text-stone-300 hover:text-white hover:bg-[#25201A] border border-[#2F271E]"
              }`}
            >
              <Scissors className="w-4 h-4 shrink-0" />
              <span className="truncate">
                {currentLanguage === "fa" ? "آتلیه مو و زیبایی (Hair & Beauty)" : "Haute Hair & Beauty"}
              </span>
            </button>

            <button
              id="tab-capsule-wardrobe-studio"
              onClick={() => setMasterStudioMode("capsule-wardrobe")}
              className={`py-3.5 px-4 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2.5 ${
                masterStudioMode === "capsule-wardrobe"
                  ? "bg-gradient-to-r from-[#C5A880] to-[#E6CA9E] text-[#141210] font-extrabold shadow-lg ring-1 ring-[#C5A880]"
                  : "bg-[#1C1814] text-stone-300 hover:text-white hover:bg-[#25201A] border border-[#2F271E]"
              }`}
            >
              <Layers className="w-4 h-4 shrink-0" />
              <span className="truncate">
                {currentLanguage === "fa" ? "مشاور استایل و کمد (Style & Capsule)" : "Style & Capsule Advisor"}
              </span>
            </button>
          </div>
        </section>

        {/* ATELIER MODE 1: VIRTUAL TRY-ON & CLOTHING MODELING STUDIO */}
        {masterStudioMode === "virtual-tryon" && (
          <div className="space-y-10">
            <AiVirtualTryOnStudio
              lang={currentLanguage}
              isVip={isVip}
              onOpenVipModal={() => setIsVipModalOpen(true)}
              onOpenGuideModal={() => setIsConciergeGuideOpen(true)}
            />
            {/* Unified 5★ Patron Reviews & VIP Gift Center */}
            <QualityRewardFeedbackCenter onOpenAdminInbox={() => setIsAdminInboxOpen(true)} lang={currentLanguage} />
          </div>
        )}

        {/* ATELIER MODE 2: HAIR & BEAUTY MAKEOVER STUDIO */}
        {masterStudioMode === "hair-beauty" && (
          <div className="space-y-10">
            <AiHairBeautyStudio
              lang={currentLanguage}
              isVip={isVip}
              onOpenVipModal={() => setIsVipModalOpen(true)}
              onOpenGuideModal={() => setIsConciergeGuideOpen(true)}
            />
            {/* Unified 5★ Patron Reviews & VIP Gift Center */}
            <QualityRewardFeedbackCenter onOpenAdminInbox={() => setIsAdminInboxOpen(true)} lang={currentLanguage} />
          </div>
        )}

        {/* ATELIER MODE 3: QUIET LUXURY CAPSULE & WARDROBE ADVISOR */}
        {masterStudioMode === "capsule-wardrobe" && (
          <div className="space-y-10">
        {/* ========================================================================= */}
        {/* ۱. پرسش اصلی: «امروز برای این موقعیت چی بپوشم؟» */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#181614] to-[#100F0D] rounded-3xl p-6 sm:p-10 border border-[#3E372E] shadow-2xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2D2720] pb-4 relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#272119] text-[#E6CA9E] border border-[#52412F] text-xs font-bold font-cinzel">
              <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
              <span>{t.concierge_badge} • {selectedGender === "men" ? "GENTLEMEN" : "FEMME"}</span>
            </div>
            <span className="text-xs text-stone-400 font-medium">
              {t.what_to_wear_subtitle}
            </span>
          </div>

          <div className="space-y-3 relative z-10">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {t.what_to_wear_today}
            </h1>
            <p className="text-sm sm:text-base text-stone-300 max-w-3xl leading-relaxed">
              {t.search_description}
            </p>
          </div>

          {/* فرم جستجو هوشمند */}
          <form onSubmit={handleSearchSubmit} className="space-y-4 relative z-10">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <Search className={`absolute ${isRtl ? "right-4" : "left-4"} top-1/2 -translate-y-1/2 w-5 h-5 text-[#C5A880]`} />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t.search_placeholder}
                  className={`w-full bg-[#141210] text-white ${isRtl ? "pr-12 pl-4" : "pl-12 pr-4"} py-4 rounded-2xl border border-[#3E362C] focus:border-[#C5A880] focus:ring-1 focus:ring-[#C5A880] outline-none text-sm placeholder:text-stone-500 transition-all`}
                />
              </div>
              <button
                type="submit"
                disabled={isConsulting}
                className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] font-extrabold text-sm px-8 py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0 cursor-pointer"
              >
                {isConsulting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[#141210] border-t-transparent rounded-full animate-spin" />
                    <span>{t.analyzing_btn}</span>
                  </>
                ) : (
                  <>
                    <span className="text-[#141210] font-serif">⚜</span>
                    <span>{t.get_advice_btn}</span>
                  </>
                )}
              </button>
            </div>

            {/* دسته‌بندی موقعیت‌های ۶ گانه */}
            <div className="space-y-3 pt-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400 block font-cinzel">
                {t.quick_situations}
              </span>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
                {OCCASION_CATEGORIES.map((cat) => {
                  const isSelected = selectedOccasionId === cat.id;
                  const localizedTitle = LOCALIZED_OCCASION_TITLES[cat.id]?.[currentLanguage] || cat.persianTitle;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setSelectedOccasionId(cat.id);
                        setSearchQuery(localizedTitle);
                      }}
                      className={`p-3 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer flex flex-col justify-between gap-2 min-h-[96px] ${
                        isSelected
                          ? "bg-[#25201A] text-white border-[#C5A880] ring-1 ring-[#C5A880]/50 shadow-md"
                          : "bg-[#161412] hover:bg-[#1F1B17] text-stone-300 border-[#332C24]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xl">{cat.icon}</span>
                        {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A880]" />}
                      </div>
                      <span className={`text-xs font-bold leading-snug line-clamp-2 ${isSelected ? "text-[#E6CA9E]" : "text-stone-300"}`}>
                        {localizedTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </form>
        </section>

        {/* ========================================================================= */}
        {/* ژورنال گرافیکی تعاملی کلاسیک مدرن (HIGH LUXURY VISUAL LOOKBOOK) */}
        {/* ========================================================================= */}
        <LuxuryEditorialShowcase
          gender={selectedGender}
          lang={currentLanguage}
          onApplyOutfit={(outfitTitle) => {
            setSearchQuery(outfitTitle);
            handleSearchSubmit({ preventDefault: () => {} } as any);
          }}
        />

        {/* ========================================================================= */}
        {/* کالکشن‌های اشرافی ۶ پایتخت مد جهانی (INTERACTIVE PRESTIGE LOOKBOOK) */}
        {/* ========================================================================= */}
        <InteractivePrestigeLookbook
          gender={selectedGender}
          lang={currentLanguage}
          onSelectLook={(title) => {
            setSearchQuery(title);
            handleSearchSubmit({ preventDefault: () => {} } as any);
          }}
        />

        {/* ========================================================================= */}
        {/* آتلیه تعاملی و مانکن شبیه‌ساز لایه‌های لباس (INTERACTIVE MANNEQUIN ATELIER) */}
        {/* ========================================================================= */}
        <InteractiveMannequinAtelier
          gender={selectedGender}
          lang={currentLanguage}
          onApplyToConsultation={(title) => {
            setSearchQuery(title);
            handleSearchSubmit({ preventDefault: () => {} } as any);
          }}
        />

        {/* ========================================================================= */}
        {/* ۲. خروجی مشاوره تخصصی و دقیق (THE MASTER STYLE CONSULTATION) */}
        {/* ========================================================================= */}
        <div id="master-advice-section" className="space-y-8">
          {/* کارت سربرگ مشاوره */}
          <div className="bg-gradient-to-b from-[#181614] to-[#100F0D] rounded-3xl border border-[#3E372E] p-6 sm:p-9 shadow-2xl space-y-6 text-[#F5EFEB]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#2D2720] pb-5">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="bg-[#272119] text-[#E6CA9E] border border-[#52412F] text-xs font-bold px-3 py-1 rounded-full">
                    {selectedGender === "men" ? t.men : t.women}
                  </span>
                  <span className="text-xs text-stone-400 font-medium">
                    {t.target_situation}: <strong>{currentCategoryTitle}</strong>
                  </span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white pt-1">
                  {adviceData.title}
                </h2>
                <p className="text-xs sm:text-sm text-[#C5A880] font-serif italic">
                  {adviceData.subtitle}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleToggleSave}
                  className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isCurrentSaved
                      ? "bg-[#2A2319] text-[#E6CA9E] border-[#C5A880]"
                      : "bg-[#141210] text-stone-300 border-[#383127] hover:border-stone-500"
                  }`}
                >
                  <Bookmark className={`w-3.5 h-3.5 ${isCurrentSaved ? "fill-current" : ""}`} />
                  <span>{isCurrentSaved ? t.saved_badge : t.save_btn}</span>
                </button>

                <button
                  onClick={handleCopyFullConsultation}
                  className="bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] text-xs font-extrabold px-4 py-2.5 rounded-xl transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  {copiedState ? <Check className="w-3.5 h-3.5 text-[#141210]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedState ? t.copied_btn : t.copy_advice_btn}</span>
                </button>
              </div>
            </div>

            {/* چرا این فرمول برنده است؟ */}
            <div className="bg-[#191714] rounded-2xl p-5 border border-[#3E362C] space-y-2">
              <div className="flex items-center gap-2 text-[#E6CA9E] font-bold text-xs">
                <Award className="w-4 h-4 text-[#C5A880]" />
                <span>{t.why_this_works}</span>
              </div>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                {adviceData.whyThisWorks}
              </p>
            </div>

            {/* قانون رنگ‌ها (نسبت ۷۰-۲۰-۱۰) */}
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Palette className="w-4 h-4 text-[#C5A880]" />
                  <h3 className="font-bold text-sm text-white">
                    {t.color_distribution}
                  </h3>
                </div>
                <span className="text-[11px] text-stone-400 font-medium">
                  {adviceData.colorRule.colorRationale}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {adviceData.colorRule.swatches.map((swatch, idx) => (
                  <div key={idx} className="bg-[#191714] p-3 rounded-2xl border border-[#3E362C] flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-xl shrink-0 border border-white/20 shadow-xs"
                      style={{ backgroundColor: swatch.hex }}
                    />
                    <div className="min-w-0">
                      <span className="text-xs font-bold text-white block truncate">
                        {swatch.name}
                      </span>
                      <span className="text-[10px] text-stone-400 block mt-0.5">
                        {swatch.role}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* تشریح تک‌تک قطعات لباس */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Shirt className="w-4 h-4 text-[#C5A880]" />
                <h3 className="font-serif text-xl font-bold text-white">
                  {t.breakdown_title}
                </h3>
              </div>
              <span className="text-xs text-stone-400">
                {t.breakdown_subtitle}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* ۱. بالاتنه اصلی */}
              <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] shadow-lg space-y-3 hover:border-[#C5A880]/50 transition-colors">
                <div className="flex items-center justify-between border-b border-[#2C2720] pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#272119] text-[#E6CA9E] text-xs font-bold flex items-center justify-center border border-[#52412F]">
                      1
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                      {t.breakdown_top}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-stone-300 bg-[#241F1A] border border-[#3E362C] px-2.5 py-0.5 rounded-md">
                    {adviceData.breakdown.top.color}
                  </span>
                </div>

                <h4 className="font-bold text-sm text-white">
                  {adviceData.breakdown.top.name}
                </h4>

                <div className="space-y-2 text-xs text-stone-300">
                  <div className="bg-[#141210] p-2.5 rounded-xl border border-[#302A22]">
                    <strong className="text-[#E6CA9E] block mb-0.5">{t.fit_cut_label}</strong>
                    <span>{adviceData.breakdown.top.cutAndFit}</span>
                  </div>
                  <div className="bg-[#141210] p-2.5 rounded-xl border border-[#302A22]">
                    <strong className="text-[#E6CA9E] block mb-0.5">{t.fabric_label}</strong>
                    <span>{adviceData.breakdown.top.material}</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#E6CA9E] bg-[#241E18] p-2.5 rounded-xl border border-[#483B2C] leading-relaxed">
                  <strong>{t.pro_tip_label}</strong> {adviceData.breakdown.top.proTip}
                </div>
              </div>

              {/* ۲. لایه رویی / کت / پالتو */}
              {adviceData.breakdown.layerOrOuterwear ? (
                <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] shadow-lg space-y-3 hover:border-[#C5A880]/50 transition-colors">
                  <div className="flex items-center justify-between border-b border-[#2C2720] pb-2.5">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#272119] text-[#E6CA9E] text-xs font-bold flex items-center justify-center border border-[#52412F]">
                        2
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                        {t.breakdown_layer}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-stone-300 bg-[#241F1A] border border-[#3E362C] px-2.5 py-0.5 rounded-md">
                      {adviceData.breakdown.layerOrOuterwear.color}
                    </span>
                  </div>

                  <h4 className="font-bold text-sm text-white">
                    {adviceData.breakdown.layerOrOuterwear.name}
                  </h4>

                  <div className="space-y-2 text-xs text-stone-300">
                    <div className="bg-[#141210] p-2.5 rounded-xl border border-[#302A22]">
                      <strong className="text-[#E6CA9E] block mb-0.5">{t.fit_cut_label}</strong>
                      <span>{adviceData.breakdown.layerOrOuterwear.cutAndFit}</span>
                    </div>
                    <div className="bg-[#141210] p-2.5 rounded-xl border border-[#302A22]">
                      <strong className="text-[#E6CA9E] block mb-0.5">{t.fabric_label}</strong>
                      <span>{adviceData.breakdown.layerOrOuterwear.material}</span>
                    </div>
                  </div>

                  <div className="text-[11px] text-[#E6CA9E] bg-[#241E18] p-2.5 rounded-xl border border-[#483B2C] leading-relaxed">
                    <strong>{t.pro_tip_label}</strong> {adviceData.breakdown.layerOrOuterwear.proTip}
                  </div>
                </div>
              ) : null}

              {/* ۳. پایین‌تنه و شلوار */}
              <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] shadow-lg space-y-3 hover:border-[#C5A880]/50 transition-colors">
                <div className="flex items-center justify-between border-b border-[#2C2720] pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#272119] text-[#E6CA9E] text-xs font-bold flex items-center justify-center border border-[#52412F]">
                      3
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                      {t.breakdown_bottom}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-stone-300 bg-[#241F1A] border border-[#3E362C] px-2.5 py-0.5 rounded-md">
                    {adviceData.breakdown.bottom.color}
                  </span>
                </div>

                <h4 className="font-bold text-sm text-white">
                  {adviceData.breakdown.bottom.name}
                </h4>

                <div className="space-y-2 text-xs text-stone-300">
                  <div className="bg-[#141210] p-2.5 rounded-xl border border-[#302A22]">
                    <strong className="text-[#E6CA9E] block mb-0.5">{t.fit_cut_label}</strong>
                    <span>{adviceData.breakdown.bottom.cutAndFit}</span>
                  </div>
                  <div className="bg-[#141210] p-2.5 rounded-xl border border-[#302A22]">
                    <strong className="text-[#E6CA9E] block mb-0.5">{t.fabric_label}</strong>
                    <span>{adviceData.breakdown.bottom.material}</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#E6CA9E] bg-[#241E18] p-2.5 rounded-xl border border-[#483B2C] leading-relaxed">
                  <strong>{t.pro_tip_label}</strong> {adviceData.breakdown.bottom.proTip}
                </div>
              </div>

              {/* ۴. کفش و اکسسوری چرمی */}
              <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] shadow-lg space-y-3 hover:border-[#C5A880]/50 transition-colors">
                <div className="flex items-center justify-between border-b border-[#2C2720] pb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-[#272119] text-[#E6CA9E] text-xs font-bold flex items-center justify-center border border-[#52412F]">
                      4
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#C5A880]">
                      {t.breakdown_shoes}
                    </span>
                  </div>
                  <span className="text-[11px] font-bold text-stone-300 bg-[#241F1A] border border-[#3E362C] px-2.5 py-0.5 rounded-md">
                    {adviceData.breakdown.shoes.color}
                  </span>
                </div>

                <h4 className="font-bold text-sm text-white">
                  {adviceData.breakdown.shoes.name}
                </h4>

                <div className="space-y-2 text-xs text-stone-300">
                  <div className="bg-[#141210] p-2.5 rounded-xl border border-[#302A22]">
                    <strong className="text-[#E6CA9E] block mb-0.5">{t.fit_cut_label}</strong>
                    <span>{adviceData.breakdown.shoes.style}</span>
                  </div>
                  <div className="bg-[#141210] p-2.5 rounded-xl border border-[#302A22]">
                    <strong className="text-[#E6CA9E] block mb-0.5">{t.fabric_label}</strong>
                    <span>{adviceData.breakdown.shoes.material}</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#E6CA9E] bg-[#241E18] p-2.5 rounded-xl border border-[#483B2C] leading-relaxed">
                  <strong>{t.pro_tip_label}</strong> {adviceData.breakdown.shoes.proTip}
                </div>
              </div>
            </div>
          </div>

          {/* قوانین طلایی و اشتباهات مهلک */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-[#112318] rounded-3xl p-6 border border-[#21432E] space-y-4">
              <div className="flex items-center gap-2 text-emerald-300 font-bold text-sm">
                <Check className="w-4 h-4 text-emerald-400" />
                <span>{t.golden_rules_title}</span>
              </div>
              <ul className="space-y-3 text-xs text-stone-200 leading-relaxed">
                {adviceData.goldenStylingRules.map((rule, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-[#0C1911] p-3 rounded-xl border border-[#1B3625]">
                    <span className="w-5 h-5 rounded-full bg-emerald-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#241113] rounded-3xl p-6 border border-[#481E23] space-y-4">
              <div className="flex items-center gap-2 text-rose-300 font-bold text-sm">
                <AlertTriangle className="w-4 h-4 text-rose-400" />
                <span>{t.mistakes_title}</span>
              </div>
              <ul className="space-y-3 text-xs text-stone-200 leading-relaxed">
                {adviceData.commonMistakesToAvoid.map((mistake, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 bg-[#190C0E] p-3 rounded-xl border border-[#38161B]">
                    <span className="w-5 h-5 rounded-full bg-rose-700 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      ✕
                    </span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* امضای بویایی و عطر هماهنگ */}
          <div className="bg-[#141210] text-[#E7E2D8] rounded-3xl p-6 sm:p-8 space-y-4 border border-[#3E362C] shadow-xl">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#2D2720] pb-3">
              <div className="flex items-center gap-2">
                <Flame className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] font-cinzel">
                  {t.signature_scent_title}
                </span>
              </div>
              <span className="text-[11px] text-stone-400 font-medium">
                {t.scent_family}: {adviceData.scentRecommendation.family}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-1">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">{t.scent_formula}:</span>
                <h4 className="font-serif text-base font-bold text-white">
                  {adviceData.scentRecommendation.name}
                </h4>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">{t.scent_notes}:</span>
                <p className="text-xs text-stone-300">
                  {adviceData.scentRecommendation.bestNotes}
                </p>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">{t.scent_vibe}:</span>
                <p className="text-xs text-[#E6CA9E] font-medium">
                  {adviceData.scentRecommendation.vibe}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ۳. مجموعه ابزارهای مدرن استایلینگ (MODERN STYLING SUITE) */}
        {/* ========================================================================= */}
        <section className="bg-gradient-to-b from-[#181614] to-[#100F0D] rounded-3xl border border-[#3E372E] p-6 sm:p-9 shadow-2xl space-y-6 text-[#F5EFEB]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#2D2720] pb-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-[#C5A880]" />
                <h3 className="font-serif text-xl font-bold text-white">
                  {t.smart_tools_title}
                </h3>
              </div>
              <p className="text-xs text-stone-400">
                {t.smart_tools_desc}
              </p>
            </div>

            {/* تب‌های جابجایی بین ۵ ابزار مدرن */}
            <div className="flex items-center gap-1 bg-[#211E1A] p-1.5 rounded-2xl border border-[#3A3329] overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveModernTab("weather")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeModernTab === "weather" ? "bg-[#C5A880] text-[#141210] font-extrabold" : "text-stone-300 hover:text-white"
                }`}
              >
                {t.tab_weather}
              </button>
              <button
                onClick={() => setActiveModernTab("body")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeModernTab === "body" ? "bg-[#C5A880] text-[#141210] font-extrabold" : "text-stone-300 hover:text-white"
                }`}
              >
                {t.tab_body}
              </button>
              <button
                onClick={() => setActiveModernTab("skin")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeModernTab === "skin" ? "bg-[#C5A880] text-[#141210] font-extrabold" : "text-stone-300 hover:text-white"
                }`}
              >
                {t.tab_skin}
              </button>
              <button
                onClick={() => setActiveModernTab("capsule")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeModernTab === "capsule" ? "bg-[#C5A880] text-[#141210] font-extrabold" : "text-stone-300 hover:text-white"
                }`}
              >
                {t.tab_capsule}
              </button>
              <button
                onClick={() => setActiveModernTab("mirror")}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  activeModernTab === "mirror" ? "bg-[#C5A880] text-[#141210] font-extrabold" : "text-stone-300 hover:text-white"
                }`}
              >
                {t.tab_mirror}
              </button>
            </div>
          </div>

          {/* ۱. تب آب و هوا */}
          {activeModernTab === "weather" && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <span className="text-xs font-bold text-stone-300 block">
                {currentLanguage === "fa" ? "دمای هوای امروز را مشخص کنید تا جنس پارچه و تعداد لایه‌ها تنظیم شود:" :
                 currentLanguage === "fr" ? "Indiquez la météo pour calibrer les matières et couches idéales :" :
                 currentLanguage === "it" ? "Seleziona la temperatura odierna per calibrare tessuti e strati :" :
                 currentLanguage === "ar" ? "حدد حالة الطقس لضبط خامات الأقمشة وعدد طبقات الملابس المناسبة :" :
                 "Select today's weather condition to calibrate appropriate fabrics and layering:"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {WEATHER_CONDITIONS.map((w) => {
                  const isSel = activeWeatherId === w.id;
                  const loc = LOCALIZED_WEATHER[w.id]?.[currentLanguage] || { name: w.nameFa, temp: w.tempFa, fabricAdvice: w.fabricAdvice, layerCount: w.layerCount };
                  return (
                    <button
                      key={w.id}
                      onClick={() => setActiveWeatherId(w.id)}
                      className={`p-4 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer space-y-2 ${
                        isSel
                          ? "bg-[#25201A] text-white border-[#C5A880] ring-1 ring-[#C5A880]/50"
                          : "bg-[#161412] hover:bg-[#1F1B17] text-stone-300 border-[#332C24]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-2xl">{w.icon}</span>
                        <span className={`text-xs font-bold ${isSel ? "text-[#C5A880]" : "text-stone-400"}`}>
                          {loc.temp}
                        </span>
                      </div>
                      <span className="font-bold text-xs block">{loc.name}</span>
                    </button>
                  );
                })}
              </div>

              {(() => {
                const loc = LOCALIZED_WEATHER[currentWeather.id]?.[currentLanguage] || {
                  name: currentWeather.nameFa,
                  temp: currentWeather.tempFa,
                  fabricAdvice: currentWeather.fabricAdvice,
                  layerCount: currentWeather.layerCount
                };
                return (
                  <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] space-y-2">
                    <div className="flex items-center gap-2 text-white font-bold text-xs">
                      <Layers className="w-4 h-4 text-[#C5A880]" />
                      <span>{loc.name}:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                      {loc.fabricAdvice}
                    </p>
                    <div className="pt-2 border-t border-[#2D2720] text-xs text-stone-400">
                      <strong>{currentLanguage === "fa" ? "تعداد لایه‌های ایده‌آل:" : currentLanguage === "fr" ? "Nombre de couches conseillé :" : currentLanguage === "it" ? "Numero di strati ideale :" : currentLanguage === "ar" ? "عدد الطبقات المثالي:" : "Recommended Layering:"}</strong> {loc.layerCount}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* ۲. تب فرم اندام و نسبت‌های بدنی */}
          {activeModernTab === "body" && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <span className="text-xs font-bold text-stone-300 block">
                {currentLanguage === "fa" ? "فرم اندام خود را انتخاب کنید تا متناسب‌ترین مدل لباس به شما پیشنهاد شود:" :
                 currentLanguage === "fr" ? "Choisissez votre morphologie pour recevoir les coupes les plus flatteuses :" :
                 currentLanguage === "it" ? "Seleziona la tua fisionomia per tagli e proporzioni sartoriali perfette :" :
                 currentLanguage === "ar" ? "اختر طبيعة قوامك للحصول على أنسب قصة وتفصيل هندسي لملابسك:" :
                 "Select your physique profile to calibrate the most flattering cut and tailoring silhouette:"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {BODY_PROPORTIONS[selectedGender].map((b) => {
                  const isSel = activeBodyId === b.id;
                  const key = b.id === "athletic-v" || b.id === "hourglass" ? "athletic" : b.id.includes("tall") ? "lean-tall" : "athletic";
                  const loc = LOCALIZED_BODY_PROPORTIONS[key]?.[currentLanguage] || { name: b.nameFa, silhouetteTip: b.silhouetteTip, suitCutRecommendation: b.suitCutRecommendation };
                  return (
                    <button
                      key={b.id}
                      onClick={() => setActiveBodyId(b.id)}
                      className={`p-4 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer space-y-2 ${
                        isSel
                          ? "bg-[#25201A] text-white border-[#C5A880] ring-1 ring-[#C5A880]/50"
                          : "bg-[#161412] hover:bg-[#1F1B17] text-stone-300 border-[#332C24]"
                      }`}
                    >
                      <span className="text-2xl block">{b.icon}</span>
                      <span className="font-bold text-xs block leading-snug">{currentLanguage === "fa" ? b.nameFa : loc.name}</span>
                    </button>
                  );
                })}
              </div>

              {(() => {
                const key = currentBodyProfile.id === "athletic-v" || currentBodyProfile.id === "hourglass" ? "athletic" : currentBodyProfile.id.includes("tall") ? "lean-tall" : "athletic";
                const loc = LOCALIZED_BODY_PROPORTIONS[key]?.[currentLanguage] || {
                  name: currentBodyProfile.nameFa,
                  silhouetteTip: currentBodyProfile.silhouetteTip,
                  suitCutRecommendation: currentBodyProfile.suitCutRecommendation
                };
                return (
                  <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] text-[#C5A880] font-bold uppercase tracking-wider block font-cinzel">
                        SILHOUETTE RATIO ADVICE:
                      </span>
                      <p className="text-xs sm:text-sm text-white font-medium">
                        {currentLanguage === "fa" ? currentBodyProfile.silhouetteTip : loc.silhouetteTip}
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#2D2720] text-xs text-stone-300 space-y-1">
                      <strong className="text-[#E6CA9E] block">{currentLanguage === "fa" ? "مدل و فرم پیشنهادی لباس:" : currentLanguage === "fr" ? "Coupe recommandée :" : currentLanguage === "it" ? "Taglio e vestibilità consigliata :" : currentLanguage === "ar" ? "القصة الموصى بها:" : "Recommended Cut & Drape:"}</strong>
                      <span>{currentLanguage === "fa" ? currentBodyProfile.suitCutRecommendation : loc.suitCutRecommendation}</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* ۳. تب تنالیته پوست و فلزات اکسسوری */}
          {activeModernTab === "skin" && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <span className="text-xs font-bold text-stone-300 block">
                {currentLanguage === "fa" ? "تنالیته پوست خود را انتخاب کنید تا رنگ لباس و زیورآلات هماهنگ شود:" :
                 currentLanguage === "fr" ? "Sélectionnez votre sous-ton de peau pour harmoniser métaux et palettes :" :
                 currentLanguage === "it" ? "Identifica il sottotono della tua pelle per accordare metalli e colori :" :
                 currentLanguage === "ar" ? "اختر درجة لون بشرتك لمطابقة الألوان والمعادن الثمينة بدقة:" :
                 "Select your skin undertone to harmonize garment tones and luxury metal accents:"}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {SKIN_UNDERTONES.map((s) => {
                  const isSel = activeSkinId === s.id;
                  const locKey = s.id.includes("warm") ? "warm" : s.id.includes("cool") ? "cool" : "neutral";
                  const loc = LOCALIZED_SKIN_UNDERTONES[locKey]?.[currentLanguage] || { name: s.nameFa, description: s.description, bestMetals: s.bestMetals, bestColors: s.bestBaseColors.join(" • "), avoidColors: s.colorsToAvoid.join(" • ") };
                  return (
                    <button
                      key={s.id}
                      onClick={() => setActiveSkinId(s.id)}
                      className={`p-4 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer space-y-1.5 ${
                        isSel
                          ? "bg-[#25201A] text-white border-[#C5A880] ring-1 ring-[#C5A880]/50"
                          : "bg-[#161412] hover:bg-[#1F1B17] text-stone-300 border-[#332C24]"
                      }`}
                    >
                      <span className="font-bold text-xs block text-white">{currentLanguage === "fa" ? s.nameFa : loc.name}</span>
                      <p className={`text-[10px] leading-relaxed ${isSel ? "text-stone-300" : "text-stone-400"}`}>
                        {currentLanguage === "fa" ? s.description : loc.description}
                      </p>
                    </button>
                  );
                })}
              </div>

              {(() => {
                const locKey = currentSkinProfile.id.includes("warm") ? "warm" : currentSkinProfile.id.includes("cool") ? "cool" : "neutral";
                const loc = LOCALIZED_SKIN_UNDERTONES[locKey]?.[currentLanguage] || {
                  name: currentSkinProfile.nameFa,
                  description: currentSkinProfile.description,
                  bestMetals: currentSkinProfile.bestMetals,
                  bestColors: currentSkinProfile.bestBaseColors.join(" • "),
                  avoidColors: currentSkinProfile.colorsToAvoid.join(" • ")
                };
                return (
                  <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                      <div className="space-y-1">
                        <strong className="text-[#E6CA9E] block">{currentLanguage === "fa" ? "بهترین رنگ فلزات زیورآلات و ساعت:" : currentLanguage === "fr" ? "Métaux précieux recommandés :" : currentLanguage === "it" ? "Metalli per orologi e accessori :" : currentLanguage === "ar" ? "أفضل معادن للساعات والمجوهرات:" : "Complementary Timepiece Metals:"}</strong>
                        <span className="text-stone-300">{currentLanguage === "fa" ? currentSkinProfile.bestMetals : loc.bestMetals}</span>
                      </div>
                      <div className="space-y-1">
                        <strong className="text-emerald-300 block">{currentLanguage === "fa" ? "رنگ‌های اصلی که به چهره جلوه می‌دهند:" : currentLanguage === "fr" ? "Couleurs sublimant le teint :" : currentLanguage === "it" ? "Tonalità che valorizzano il viso :" : currentLanguage === "ar" ? "ألوان تمنح الوجه إشراقاً:" : "Flattering Core Palette:"}</strong>
                        <span className="text-stone-300">{currentLanguage === "fa" ? currentSkinProfile.bestBaseColors.join(" • ") : loc.bestColors}</span>
                      </div>
                      <div className="space-y-1">
                        <strong className="text-rose-300 block">{currentLanguage === "fa" ? "رنگ‌هایی که جلوه چهره را کم می‌کنند:" : currentLanguage === "fr" ? "Tonalités à éviter :" : currentLanguage === "it" ? "Colori da evitare :" : currentLanguage === "ar" ? "ألوان يُفضل تجنبها:" : "Tones to Avoid:"}</strong>
                        <span className="text-stone-300">{currentLanguage === "fa" ? currentSkinProfile.colorsToAvoid.join(" • ") : loc.avoidColors}</span>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* ۴. تب هوش کپسول کمد من */}
          {activeModernTab === "capsule" && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-300 block">
                  {currentLanguage === "fa" ? "لباس‌های پایه که در کمد خود دارید را علامت بزنید:" :
                   currentLanguage === "fr" ? "Cochez les pièces maîtresses présentes dans votre vestiaire :" :
                   currentLanguage === "it" ? "Seleziona i capi fondamentali presenti nel tuo guardaroba :" :
                   currentLanguage === "ar" ? "حدد القطع الأساسية المتوفرة في خزانتك الحالية:" :
                   "Check the foundation pieces currently in your personal capsule closet:"}
                </span>
                <span className="text-[11px] text-stone-400">
                  {selectedWardrobeItems.length} {currentLanguage === "fa" ? "آیتم انتخاب شده" : "items selected"}
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {currentWardrobePool.map((item) => {
                  const isChecked = selectedWardrobeItems.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleToggleWardrobeItem(item.id)}
                      className={`p-3 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        isChecked
                          ? "bg-[#25201A] text-[#E6CA9E] border-[#C5A880]"
                          : "bg-[#161412] hover:bg-[#1F1B17] text-stone-300 border-[#332C24]"
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span className="text-base">{item.icon}</span>
                        <span className="text-xs font-bold truncate">{currentLanguage === "fa" ? item.nameFa : item.nameFa.split("(")[0]}</span>
                      </div>
                      {isChecked ? (
                        <CheckSquare className="w-4 h-4 text-[#C5A880] shrink-0" />
                      ) : (
                        <Square className="w-4 h-4 text-stone-500 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="bg-[#191714] p-5 rounded-2xl border border-[#3E362C] flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="space-y-1 text-xs">
                  <strong className="text-white block text-sm">
                    {currentLanguage === "fa" ? "تحلیل موجودی کمد کپسولی شما:" : "Capsule Closet Synthesis:"}
                  </strong>
                  <p className="text-stone-400">
                    {currentLanguage === "fa"
                      ? `با ${selectedWardrobeItems.length} تکه لباس علامت‌خورده، می‌توانید چندین ترکیب استایل کلاسیک بسازید.`
                      : `With ${selectedWardrobeItems.length} core pieces selected, you possess sufficient foundations for a versatile luxury rotation.`}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSearchQuery(currentLanguage === "fa" ? "یک ست کامل با وسایل موجود در کمد من" : "Full ensemble styled from my capsule wardrobe");
                    handleSearchSubmit();
                  }}
                  className="bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] text-xs font-extrabold px-5 py-2.5 rounded-xl whitespace-nowrap transition-colors cursor-pointer shrink-0"
                >
                  {currentLanguage === "fa" ? "ست کردن با کمد من ✨" : "Style with My Capsule ✨"}
                </button>
              </div>
            </div>
          )}

          {/* ۵. تب چک‌لیست ۶۰ ثانیه‌ای جلوی آینه */}
          {activeModernTab === "mirror" && (
            <div className="space-y-5 animate-in fade-in duration-300">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-300 block">
                  {currentLanguage === "fa" ? "قبل از خروج از منزل، این ۵ نکته نهایی را جلوی آینه چک کنید:" :
                   currentLanguage === "fr" ? "Avant de sortir, vérifiez ces 5 points cruciaux face au miroir :" :
                   currentLanguage === "it" ? "Prima di uscire, controlla questi 5 punti davanti allo specchio :" :
                   currentLanguage === "ar" ? "قبل الخروج من المنزل، تحقق من هذه النقاط الخمس أمام المرآة:" :
                   "Perform this 60-second Savile Row mirror check before leaving:"}
                </span>
                <span className="text-xs font-bold text-[#E6CA9E] bg-[#272119] border border-[#52412F] px-3 py-1 rounded-full">
                  {completedMirrorChecks.length} / 5 {currentLanguage === "fa" ? "تأیید شد" : "verified"}
                </span>
              </div>

              <div className="space-y-2.5">
                {currentChecklist.map((item, idx) => {
                  const isDone = completedMirrorChecks.includes(item.id);
                  const loc = LOCALIZED_MIRROR_CHECKS[currentLanguage]?.[idx] || { title: item.textFa, desc: item.detailFa };
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleToggleMirrorCheck(item.id)}
                      className={`w-full p-4 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer flex items-start gap-3.5 ${
                        isDone
                          ? "bg-[#112318] border-emerald-500/50 text-emerald-200"
                          : "bg-[#161412] hover:bg-[#1F1B17] border-[#332C24] text-stone-300"
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isDone ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                        ) : (
                          <div className="w-5 h-5 rounded-full border-2 border-stone-500" />
                        )}
                      </div>
                      <div className="space-y-0.5 text-xs">
                        <strong className={`block font-bold ${isDone ? "text-emerald-300 line-through opacity-80" : "text-white"}`}>
                          {currentLanguage === "fa" ? item.textFa : loc.title}
                        </strong>
                        <p className="text-stone-400 text-[11px]">
                          {currentLanguage === "fa" ? item.detailFa : loc.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {completedMirrorChecks.length === 5 && (
                <div className="bg-emerald-800 text-white p-4 rounded-2xl text-center text-xs font-bold flex items-center justify-center gap-2 animate-bounce">
                  <span>⚜️ {currentLanguage === "fa" ? "آراستگی و استایل شما کاملاً مرتب و آماده حضور در مجالس است!" : "Flawless Sartorial Execution — You are ready to present with absolute confidence."}</span>
                </div>
              )}
            </div>
          )}
        </section>

        {/* ۴ ابزار مدرن استایلینگ: برنامه‌ریز هفتگی، چمدان سفر، ترکیب خلاقانه و تست خرید */}
        <AdvancedStylingSuite
          gender={selectedGender}
          lang={currentLanguage}
          onSelectOccasion={(occId, title) => {
            setSelectedOccasionId(occId);
            if (title) setSearchQuery(title);
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        />

        {/* بخش تخصصی ۵ اصل طلایی استایل مدرن کلاسیک (Quiet Luxury & Old Money 2026) */}
        <QuietLuxuryMastery gender={selectedGender} lang={currentLanguage} />

        {/* اسکنر بافت‌شناسی و لمسی الیاف لوکس جهانی (HAUTE TEXTILE ATLAS) */}
        <TactileFabricScanner lang={currentLanguage} />

        {/* ۱. برنامه‌ریز هوشمند چرخش ۷ روزه کمد کپسولی اشرافی (7-Day Capsule Rotation Planner) */}
        <WeeklyWardrobePlanner
          selectedGender={selectedGender}
          lang={currentLanguage}
          isVip={isVip}
          onOpenVipModal={() => setIsVipModalOpen(true)}
          onOpenPassportModal={() => setIsPassportModalOpen(true)}
        />

        {/* ملزومات منتخب و اصیل استایل (Shop The Curated Look - Affiliate & Artisan Showcase) */}
        <LuxuryAffiliateShopCurator
          gender={selectedGender}
          lang={currentLanguage}
        />

        {/* ۲. ماشین‌حساب ارزش به ازای هر بار پوشیدن و بازدهی سرمایه‌گذاری لوکس (Cost-Per-Wear ROI) */}
        <CostPerWearCalculator lang={currentLanguage} />

        {/* ۳. ممیزی و کشف خلاءهای کمد کپسولی (Virtual Capsule Closet Auditor) */}
        <VirtualCapsuleAuditor selectedGender={selectedGender} lang={currentLanguage} />

        {/* ۴. باشگاه منتقدان کیفیت، گزارش باگ و دریافت هدیه VIP آتلیه (Quality & Bug Bounty Center) */}
        <QualityRewardFeedbackCenter onOpenAdminInbox={() => setIsAdminInboxOpen(true)} lang={currentLanguage} />
          </div>
        )}
      </main>

      {/* Haute Concierge & Photography Lighting Secrets Modal */}
      <AtelierConciergeModal
        isOpen={isConciergeGuideOpen}
        onClose={() => setIsConciergeGuideOpen(false)}
        lang={currentLanguage}
      />

      {/* Admin Feedback & Bug Management Modal */}
      <AdminFeedbackInboxModal
        isOpen={isAdminInboxOpen}
        onClose={() => setIsAdminInboxOpen(false)}
        lang={currentLanguage}
      />

      {/* VIP Subscription & Automated Crypto/License Modal */}
      <VipSubscriptionModal
        isOpen={isVipModalOpen}
        onClose={() => setIsVipModalOpen(false)}
        lang={currentLanguage}
        isVip={isVip}
        onActivateVip={handleActivateVip}
      />

      {/* VIP Exclusive 30-Day Passport & Haute Lookbook PDF Export Modal */}
      <VipExclusivePassportModal
        isOpen={isPassportModalOpen}
        onClose={() => setIsPassportModalOpen(false)}
        lang={currentLanguage}
        gender={selectedGender}
        onOpenSubscribe={() => {
          setIsPassportModalOpen(false);
          setIsVipModalOpen(true);
        }}
        isVip={isVip}
      />

      {/* Footer */}
      <footer className="bg-[#141210] border-t border-[#2C2720] mt-16 py-8 text-xs text-stone-400">
        <div className={`max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center ${isRtl ? "sm:text-right" : "sm:text-left"}`}>
          <div>
            <span className="font-serif text-base font-bold text-white block font-cinzel">Maison Saadat — Haute Atelier 2026</span>
            <span className="text-[10px] text-[#C5A880] font-cinzel">HAUTE COUTURE & AI ATELIER • PARIS & MILAN</span>
          </div>
          <div className="text-[11px] text-stone-400">
            {t.footer_text}
          </div>
        </div>
      </footer>

      {/* Floating Toast Notification */}
      {showCopyToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#1A1815] text-[#E6CA9E] text-xs font-bold px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-2 border border-[#C5A880] z-50 animate-bounce">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>{t.copied_btn}</span>
        </div>
      )}
    </div>
  );
}
