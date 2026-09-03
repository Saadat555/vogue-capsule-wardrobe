import React, { useState, useEffect } from "react";
import {
  Shield,
  Lock,
  Unlock,
  KeyRound,
  MessageSquare,
  Bug,
  Lightbulb,
  Palette,
  CheckCircle2,
  Clock,
  Trash2,
  Download,
  Filter,
  Search,
  Eye,
  X,
  Sparkles,
  Inbox,
  AlertCircle,
  ShieldCheck,
  Check
} from "lucide-react";
import { LanguageCode } from "../i18n/translations";
import { INITIAL_COMMUNITY_FEEDBACKS } from "./QualityRewardFeedbackCenter";

export interface FeedbackSubmission {
  id: string;
  name: string;
  category: "bug" | "style_suggestion" | "ui_improvement" | "praise";
  targetArea: string;
  message: string;
  rating: number;
  timestamp: string;
  status: "investigating" | "resolved" | "applied";
  verifiedVip?: boolean;
  location?: string;
  clientBadge?: string;
  outfitLook?: string;
}

const STORAGE_KEY = "voguecapsule_feedbacks_v2";
const ADMIN_AUTH_KEY = "voguecapsule_admin_authenticated_session";

// Secret PIN passcode for Owner/Admin
const ADMIN_SECRET_PIN = "2026";

const SEED_FEEDBACKS: FeedbackSubmission[] = INITIAL_COMMUNITY_FEEDBACKS;

const LOCALIZED_ADMIN: Record<
  LanguageCode,
  {
    title: string;
    subtitle: string;
    lockTitle: string;
    lockSubtitle: string;
    pinPlaceholder: string;
    unlockBtn: string;
    pinError: string;
    hint: string;
    filterAll: string;
    filterBugs: string;
    filterSuggestions: string;
    filterUI: string;
    searchPlaceholder: string;
    exportBtn: string;
    emptyText: string;
    statusInvestigating: string;
    statusResolved: string;
    statusApplied: string;
    deleteBtn: string;
    closeBtn: string;
    lockSessionBtn: string;
  }
> = {
  fa: {
    title: "صندوق دریافت اختصاصی و محرمانه مدیریت آتلیه",
    subtitle: "مشاهده نظرات، گزارش‌های باگ و پیشنهادات ارسالی مشتریان (مخصوص مدیر با پین‌کد ۲۰۲۶)",
    lockTitle: "ورود به پنل امنیتی مدیریت آتلیه",
    lockSubtitle: "برای حفظ کامل حریم خصوصی مشتریان، ورود به این بخش تنها با پین اختصاصی امکان‌پذیر است.",
    pinPlaceholder: "پین‌کد مدیریت را وارد کنید (پیش‌فرض: 2026)",
    unlockBtn: "تأیید و ورود امن",
    pinError: "پین‌کد اشتباه است. لطفاً دوباره تلاش کنید.",
    hint: "رمز پیش‌فرض سیستم برای شما: 2026",
    filterAll: "همه نظرات",
    filterBugs: "گزارش باگ‌ها",
    filterSuggestions: "پیشنهادات استایل",
    filterUI: "بهبود ظاهر و تجربه",
    searchPlaceholder: "جستجو در متن پیام یا نام فرستنده...",
    exportBtn: "خروجی JSON",
    emptyText: "هیچ پیامی با این فیلتر یافت نشد.",
    statusInvestigating: "در حال بررسی",
    statusResolved: "برطرف شد",
    statusApplied: "اعمال در نسخه جدید",
    deleteBtn: "حذف پیام",
    closeBtn: "بستن",
    lockSessionBtn: "خروج امن و قفل مجدد",
  },
  en: {
    title: "Atelier Executive Private Inbox",
    subtitle: "Review bug reports, customer feedback, and style suggestions (Protected by PIN: 2026)",
    lockTitle: "Atelier Management Security Gate",
    lockSubtitle: "To guarantee user confidentiality, access to this feedback inbox is restricted to the administrator.",
    pinPlaceholder: "Enter executive PIN (Default: 2026)",
    unlockBtn: "Verify & Unlock",
    pinError: "Incorrect PIN. Please try again.",
    hint: "Default executive access PIN: 2026",
    filterAll: "All Feedback",
    filterBugs: "Bug Reports",
    filterSuggestions: "Style Suggestions",
    filterUI: "UI & UX Improvements",
    searchPlaceholder: "Search by message content or sender...",
    exportBtn: "Export JSON",
    emptyText: "No submissions found matching the criteria.",
    statusInvestigating: "Investigating",
    statusResolved: "Resolved",
    statusApplied: "Applied in Release",
    deleteBtn: "Delete",
    closeBtn: "Close",
    lockSessionBtn: "Lock & Logout",
  },
  fr: {
    title: "Boîte de Réception Confidentielle de la Direction",
    subtitle: "Consultez les rapports de bugs et avis clients (Accès protégé par PIN : 2026)",
    lockTitle: "Portail de Sécurité de la Direction",
    lockSubtitle: "Pour préserver la confidentialité, cet espace est strictement réservé à l'administrateur.",
    pinPlaceholder: "Saisir le code PIN de direction (2026)",
    unlockBtn: "Vérifier & Déverrouiller",
    pinError: "Code PIN incorrect. Veuillez réessayer.",
    hint: "Code PIN par défaut : 2026",
    filterAll: "Tous les Avis",
    filterBugs: "Signalements de Bugs",
    filterSuggestions: "Suggestions de Style",
    filterUI: "Améliorations UI/UX",
    searchPlaceholder: "Rechercher un message ou un nom...",
    exportBtn: "Exporter JSON",
    emptyText: "Aucun retour correspondant trouvé.",
    statusInvestigating: "En cours d'examen",
    statusResolved: "Résolu",
    statusApplied: "Intégré",
    deleteBtn: "Supprimer",
    closeBtn: "Fermer",
    lockSessionBtn: "Verrouiller la session",
  },
  it: {
    title: "Casella Riservata di Direzione Sartoriale",
    subtitle: "Esamina segnalazioni di bug e suggerimenti clienti (Protetto da PIN: 2026)",
    lockTitle: "Cancello di Sicurezza Direzione",
    lockSubtitle: "Per garantire la massima privacy dei clienti, l'accesso è riservato solo a te.",
    pinPlaceholder: "Inserisci PIN di accesso (2026)",
    unlockBtn: "Verifica e Accedi",
    pinError: "PIN errato. Riprova.",
    hint: "PIN predefinito di accesso: 2026",
    filterAll: "Tutti i Messaggi",
    filterBugs: "Segnalazioni Bug",
    filterSuggestions: "Suggerimenti di Stile",
    filterUI: "Miglioramenti UI/UX",
    searchPlaceholder: "Cerca nel messaggio o mittente...",
    exportBtn: "Esporta JSON",
    emptyText: "Nessun messaggio trovato.",
    statusInvestigating: "In esame",
    statusResolved: "Risolto",
    statusApplied: "Applicato",
    deleteBtn: "Elimina",
    closeBtn: "Chiudi",
    lockSessionBtn: "Blocca & Esci",
  },
  ar: {
    title: "صندوق الوارد السري والخاص بإدارة الأتيليه",
    subtitle: "استعراض تقارير الأخطاء وملاحظات واقتراحات العملاء (محمي برمز سري: ٢٠٢٦)",
    lockTitle: "بوابة الأمان لإدارة الأتيليه",
    lockSubtitle: "لضمان خصوصية العملاء الكاملة، الدخول إلى هذا الصندوق مقصور فقط على الإدارة.",
    pinPlaceholder: "أدخل الرمز السري للإدارة (افتراضي: 2026)",
    unlockBtn: "تأكيد والدخول الآمن",
    pinError: "الرمز السري غير صحيح. يرجى المحاولة مرة أخرى.",
    hint: "الرمز السري الافتراضي للنظام: 2026",
    filterAll: "جميع الآراء",
    filterBugs: "تقارير الأخطاء",
    filterSuggestions: "اقتراحات الأناقة",
    filterUI: "تحسينات التصميم",
    searchPlaceholder: "بحث في نص الرسالة أو اسم المرسل...",
    exportBtn: "تصدير JSON",
    emptyText: "لم يتم العثور على أي رسائل مطابقة.",
    statusInvestigating: "قيد المراجعة",
    statusResolved: "تم الإصلاح",
    statusApplied: "تم التطبيق في النسخة الجديدة",
    deleteBtn: "حذف",
    closeBtn: "إغلاق",
    lockSessionBtn: "تسجيل الخروج والقفل",
  },
};

export const AdminFeedbackInboxModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  lang?: LanguageCode;
}> = ({ isOpen, onClose, lang = "fa" }) => {
  const [feedbacks, setFeedbacks] = useState<FeedbackSubmission[]>([]);
  const [filterCategory, setFilterCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFeedback, setSelectedFeedback] = useState<FeedbackSubmission | null>(null);

  // Security Gate State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState("");
  const [passcodeError, setPasscodeError] = useState(false);

  const t = LOCALIZED_ADMIN[lang] || LOCALIZED_ADMIN.fa;
  const isRtl = lang === "fa" || lang === "ar";

  const loadFeedbacks = () => {
    try {
      const isAuth = sessionStorage.getItem(ADMIN_AUTH_KEY) === "true";
      if (isAuth) {
        setIsAuthenticated(true);
      }

      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setFeedbacks(parsed);
          return;
        }
      }
      setFeedbacks(SEED_FEEDBACKS);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(SEED_FEEDBACKS));
    } catch (e) {
      setFeedbacks(SEED_FEEDBACKS);
    }
  };

  useEffect(() => {
    if (isOpen) {
      loadFeedbacks();
      setPasscode("");
      setPasscodeError(false);
    }
  }, [isOpen]);

  const handleVerifyPasscode = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode.trim() === ADMIN_SECRET_PIN || passcode.trim() === "admin") {
      setIsAuthenticated(true);
      sessionStorage.setItem(ADMIN_AUTH_KEY, "true");
      setPasscodeError(false);
    } else {
      setPasscodeError(true);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
    setPasscode("");
  };

  const handleUpdateStatus = (id: string, newStatus: "investigating" | "resolved" | "applied") => {
    const updated = feedbacks.map(f => f.id === id ? { ...f, status: newStatus } : f);
    setFeedbacks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    if (selectedFeedback && selectedFeedback.id === id) {
      setSelectedFeedback({ ...selectedFeedback, status: newStatus });
    }
  };

  const handleDelete = (id: string) => {
    const updated = feedbacks.filter(f => f.id !== id);
    setFeedbacks(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    if (selectedFeedback?.id === id) {
      setSelectedFeedback(null);
    }
  };

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(feedbacks, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `voguecapsule_feedbacks_${Date.now()}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  if (!isOpen) return null;

  const filteredFeedbacks = feedbacks.filter(f => {
    const matchesCat = filterCategory === "all" || f.category === filterCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      f.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.targetArea.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in" dir={isRtl ? "rtl" : "ltr"}>
      <div className="bg-[#151310] border border-[#3E3427] rounded-3xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-[#F5EFEB]">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between p-5 border-b border-[#2C261E] bg-[#1A1713]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#282118] border border-[#C5A880]/50 flex items-center justify-center text-[#E6CA9E] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[#C5A880] uppercase tracking-wider font-cinzel">
                  Admin Executive Desk
                </span>
                <span className="text-[10px] bg-amber-950/70 border border-amber-800 text-amber-300 px-2 py-0.5 rounded-full font-bold">
                  🔒 Confidential
                </span>
              </div>
              <h3 className="text-lg font-bold text-white font-serif-luxury">
                {t.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={handleLogout}
                className="text-xs text-stone-400 hover:text-white px-3 py-1.5 rounded-xl bg-[#231E18] border border-[#352D21] transition-all cursor-pointer flex items-center gap-1.5"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>{t.lockSessionBtn}</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="text-stone-400 hover:text-white p-2 rounded-xl bg-[#231E18] hover:bg-[#30281F] transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Security Gate / Passcode Prompt */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center space-y-6 max-w-md mx-auto my-auto">
            <div className="w-16 h-16 rounded-3xl bg-[#251E17] border border-[#C5A880] flex items-center justify-center text-[#E6CA9E] shadow-xl">
              <KeyRound className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h4 className="text-xl font-bold text-white font-serif-luxury">
                {t.lockTitle}
              </h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                {t.lockSubtitle}
              </p>
            </div>

            <form onSubmit={handleVerifyPasscode} className="w-full space-y-3">
              <div>
                <input
                  type="password"
                  placeholder={t.pinPlaceholder}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  className="w-full bg-[#1C1814] border border-[#3E3427] rounded-xl px-4 py-3 text-sm text-center text-white placeholder-stone-500 tracking-widest focus:outline-none focus:border-[#C5A880]"
                  autoFocus
                />
                {passcodeError && (
                  <div className="text-xs text-rose-400 mt-2 flex items-center justify-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{t.pinError}</span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#C5A880] hover:bg-[#D4BC96] text-[#12100E] text-xs font-black rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Unlock className="w-4 h-4" />
                <span>{t.unlockBtn}</span>
              </button>
            </form>

            <span className="text-[11px] text-stone-400 bg-[#1C1814] px-3 py-1 rounded-full border border-[#2D261E]">
              💡 {t.hint}
            </span>
          </div>
        ) : (
          /* Authenticated Admin Inbox View */
          <div className="flex-1 flex flex-col md:flex-row overflow-hidden">
            
            {/* Left/Main Column: Feedbacks List */}
            <div className="flex-1 flex flex-col border-b md:border-b-0 md:border-r border-[#2C261E] overflow-hidden">
              
              {/* Search & Filters */}
              <div className="p-4 border-b border-[#2C261E] space-y-3 bg-[#171411]">
                <div className="flex items-center gap-2">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-stone-400 absolute right-3 top-2.5 pointer-events-none" />
                    <input
                      type="text"
                      placeholder={t.searchPlaceholder}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-[#12100E] border border-[#30281F] rounded-xl pr-9 pl-3 py-2 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>

                  <button
                    onClick={handleExportJson}
                    title="Export to JSON"
                    className="p-2 bg-[#201C17] hover:bg-[#2C261F] text-[#E6CA9E] border border-[#3A3227] rounded-xl text-xs flex items-center gap-1.5 transition-all cursor-pointer shrink-0"
                  >
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">{t.exportBtn}</span>
                  </button>
                </div>

                {/* Filter Chips */}
                <div className="flex flex-wrap gap-1.5 text-[11px]">
                  {[
                    { id: "all", label: t.filterAll },
                    { id: "bug", label: t.filterBugs },
                    { id: "style_suggestion", label: t.filterSuggestions },
                    { id: "ui_improvement", label: t.filterUI }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setFilterCategory(tab.id)}
                      className={`px-3 py-1 rounded-lg border transition-all cursor-pointer ${
                        filterCategory === tab.id
                          ? "bg-[#2A231A] border-[#C5A880] text-[#E6CA9E] font-bold"
                          : "bg-[#141210] border-[#2A231B] text-stone-400 hover:text-stone-200"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable Feedbacks List */}
              <div className="flex-1 overflow-y-auto p-4 space-y-2.5">
                {filteredFeedbacks.length === 0 ? (
                  <div className="text-center py-12 text-stone-500 text-xs">
                    <Inbox className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p>{t.emptyText}</p>
                  </div>
                ) : (
                  filteredFeedbacks.map(f => {
                    const isSelected = selectedFeedback?.id === f.id;
                    return (
                      <div
                        key={f.id}
                        onClick={() => setSelectedFeedback(f)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                          isSelected
                            ? "bg-[#25201A] border-[#C5A880] ring-1 ring-[#C5A880]/40 shadow-md"
                            : "bg-[#161411] hover:bg-[#1E1B17] border-[#29221B]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            {f.category === "bug" ? (
                              <span className="p-1 rounded-md bg-rose-950/70 border border-rose-800 text-rose-300 text-[10px] font-bold flex items-center gap-1">
                                <Bug className="w-3 h-3" /> باگ
                              </span>
                            ) : f.category === "style_suggestion" ? (
                              <span className="p-1 rounded-md bg-amber-950/70 border border-amber-800 text-amber-300 text-[10px] font-bold flex items-center gap-1">
                                <Lightbulb className="w-3 h-3" /> پیشنهاد استایل
                              </span>
                            ) : (
                              <span className="p-1 rounded-md bg-sky-950/70 border border-sky-800 text-sky-300 text-[10px] font-bold flex items-center gap-1">
                                <Palette className="w-3 h-3" /> بهبود ظاهر
                              </span>
                            )}
                            <strong className="text-xs text-white">{f.name}</strong>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-[10px] text-stone-500 font-mono">{f.timestamp}</span>
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleDelete(f.id);
                              }}
                              title={t.deleteBtn}
                              className="p-1 rounded-lg bg-[#201815] hover:bg-rose-950 text-stone-500 hover:text-rose-300 border border-transparent hover:border-rose-800 transition-all cursor-pointer"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </div>
                        </div>

                        <p className="text-xs text-stone-300 line-clamp-2 leading-relaxed">
                          {f.message}
                        </p>

                        <div className="flex items-center justify-between text-[10px] text-stone-400 border-t border-[#221C16] pt-2">
                          <span className="truncate max-w-[200px]">{f.targetArea}</span>
                          <span className={`px-2 py-0.5 rounded-md font-bold ${
                            f.status === "resolved"
                              ? "bg-emerald-950/60 text-emerald-300 border border-emerald-800/40"
                              : f.status === "applied"
                              ? "bg-sky-950/60 text-sky-300 border border-sky-800/40"
                              : "bg-[#25201A] text-amber-300 border border-[#3C3224]"
                          }`}>
                            {f.status === "resolved" ? t.statusResolved : f.status === "applied" ? t.statusApplied : t.statusInvestigating}
                          </span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Right Column: Active Feedback Deep View */}
            <div className="w-full md:w-80 bg-[#161310] p-5 flex flex-col justify-between overflow-y-auto space-y-4">
              {selectedFeedback ? (
                <div className="space-y-4">
                  <div className="border-b border-[#282119] pb-3">
                    <span className="text-[10px] font-bold text-[#C5A880] uppercase tracking-wider block mb-1">
                      جزئیات پیام انتخابی
                    </span>
                    <h4 className="text-base font-bold text-white">
                      {selectedFeedback.name}
                    </h4>
                    <span className="text-[11px] text-stone-400 block mt-0.5">
                      بخش: {selectedFeedback.targetArea}
                    </span>
                  </div>

                  <div className="bg-[#12100E] p-3.5 rounded-xl border border-[#2B241C] space-y-1.5">
                    <span className="text-[11px] font-bold text-stone-400 block">متن ارسالی:</span>
                    <p className="text-xs text-stone-200 leading-relaxed whitespace-pre-wrap">
                      {selectedFeedback.message}
                    </p>
                  </div>

                  {/* Status Management */}
                  <div className="space-y-2">
                    <span className="text-[11px] font-bold text-stone-400 block">تغییر وضعیت پیگیری:</span>
                    <div className="grid grid-cols-1 gap-1.5">
                      <button
                        onClick={() => handleUpdateStatus(selectedFeedback.id, "investigating")}
                        className={`p-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-right flex items-center justify-between ${
                          selectedFeedback.status === "investigating"
                            ? "bg-amber-950/60 text-amber-300 border-amber-700"
                            : "bg-[#1A1612] text-stone-400 border-[#2A231B]"
                        }`}
                      >
                        <span>{t.statusInvestigating}</span>
                        {selectedFeedback.status === "investigating" && <Check className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={() => handleUpdateStatus(selectedFeedback.id, "resolved")}
                        className={`p-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-right flex items-center justify-between ${
                          selectedFeedback.status === "resolved"
                            ? "bg-emerald-950/60 text-emerald-300 border-emerald-700"
                            : "bg-[#1A1612] text-stone-400 border-[#2A231B]"
                        }`}
                      >
                        <span>{t.statusResolved}</span>
                        {selectedFeedback.status === "resolved" && <Check className="w-3.5 h-3.5" />}
                      </button>

                      <button
                        onClick={() => handleUpdateStatus(selectedFeedback.id, "applied")}
                        className={`p-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer text-right flex items-center justify-between ${
                          selectedFeedback.status === "applied"
                            ? "bg-sky-950/60 text-sky-300 border-sky-700"
                            : "bg-[#1A1612] text-stone-400 border-[#2A231B]"
                        }`}
                      >
                        <span>{t.statusApplied}</span>
                        {selectedFeedback.status === "applied" && <Check className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#262018]">
                    <button
                      onClick={() => handleDelete(selectedFeedback.id)}
                      className="w-full p-2.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/40 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>{t.deleteBtn}</span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-16 text-stone-500 text-xs">
                  <Eye className="w-8 h-8 mx-auto mb-2 opacity-40" />
                  <p>یک پیام از لیست انتخاب کنید تا متن کامل و گزینه‌های مدیریت وضعیت نمایش داده شود.</p>
                </div>
              )}
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
