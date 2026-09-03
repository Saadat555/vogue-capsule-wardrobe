import React, { useState, useEffect } from "react";
import {
  Gift,
  Bug,
  Sparkles,
  Award,
  CheckCircle2,
  Send,
  MessageSquare,
  AlertTriangle,
  Flame,
  Key,
  Download,
  Copy,
  Check,
  X,
  Star,
  Zap,
  ShieldAlert,
  ThumbsUp,
  Smile,
  Frown,
  Meh,
  ShieldCheck,
  BadgeCheck,
  Filter,
  Quote,
  Trash2
} from "lucide-react";
import { LanguageCode } from "../i18n/translations";

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
const UNLOCKED_KEY = "voguecapsule_vip_reward_unlocked";

export const INITIAL_COMMUNITY_FEEDBACKS: FeedbackSubmission[] = [
  {
    id: "fb_seed_1",
    name: "Camille Dupont",
    location: "Paris, France",
    clientBadge: "Maison VIP Patron",
    outfitLook: "AI Virtual Fitting • Dior Velvet Gown",
    category: "praise",
    targetArea: "AI Virtual Try-On Studio",
    message: "شبیه‌سازی تن‌پوش ۴K روی مانکن پاریسی فوق‌العاده واقع‌گرایانه است. خطوط دوخت و تطابق فیزیک پارچه مخمل و ساتن بدون کوچک‌ترین خطایی رندر می‌شود.",
    rating: 5,
    timestamp: "امروز - ۱۲:۳۰",
    status: "applied",
    verifiedVip: true
  },
  {
    id: "fb_seed_2",
    name: "Matteo Rossi",
    location: "Milano, Italy",
    clientBadge: "Sartorial Connoisseur",
    outfitLook: "Savile Row Double-Breasted Suit",
    category: "praise",
    targetArea: "Interactive Mannequin Atelier",
    message: "بخش انتخاب پارچه لورو پیانا و شبیه‌سازی لایه‌بندی کت و شلوار سویل رو استانداردهای کلاسیک میلان را کاملاً برآورده می‌کند. تجربه کاربری روان و باوقار است.",
    rating: 5,
    timestamp: "امروز - ۱۰:۱۵",
    status: "applied",
    verifiedVip: true
  },
  {
    id: "fb_seed_3",
    name: "احمد شاه سعادت",
    location: "کابل / دبی",
    clientBadge: "Atelier Ambassador",
    outfitLook: "Loro Piana Cashmere & Silk Matrix",
    category: "praise",
    targetArea: "AI Hair & Beauty Studio",
    message: "استودیو مو و فرمول‌های شیمیایی رنگ سالن در کنار پرو لباس بدون حتی یک باگ کار می‌کند. اسلایدر مقایسه قبل و بعد خروجی را به سطحی خیره‌کننده رسانده است.",
    rating: 5,
    timestamp: "دیروز - ۱۸:۴۵",
    status: "applied",
    verifiedVip: true
  },
  {
    id: "fb_seed_4",
    name: "Lady Eleanor Vance",
    location: "London, Mayfair",
    clientBadge: "Private Capsule Collector",
    outfitLook: "Capsule Auditor & CPW Calculator",
    category: "praise",
    targetArea: "Cost-Per-Wear & ROI Calculator",
    message: "The Cost-Per-Wear calculator and 7-day capsule planner transformed how I organize high-end seasonal acquisitions. True discreet luxury at its finest.",
    rating: 5,
    timestamp: "دیروز - ۱۴:۲۰",
    status: "applied",
    verifiedVip: true
  },
  {
    id: "fb_seed_5",
    name: "دکتر سهراب کریمی",
    location: "تهران",
    clientBadge: "Verified VIP Member",
    outfitLook: "AI Hair Studio • Parisian Textured Cut",
    category: "praise",
    targetArea: "AI Hair & Beauty Studio",
    message: "اسلایدر مقایسه قبل و بعد استودیو مو بسیار روان و دقیق است. درج شناسنامه ۴K و فرمول رنگ سالن Salerm یک نوآوری ارزشمند و کم‌نظیر است.",
    rating: 5,
    timestamp: "۲ روز پیش",
    status: "applied",
    verifiedVip: true
  },
  {
    id: "fb_seed_6",
    name: "Amira Al-Mansoor",
    location: "Dubai, UAE",
    clientBadge: "Haute Couture Client",
    outfitLook: "Chanel Tweed & Silk Crepe Fitting",
    category: "style_suggestion",
    targetArea: "Tactile Fabric Scanner",
    message: "تجربه پرو زنده لباس و هماهنگی عطر نیش با پارچه‌های کپسولی بی‌نظیر و اشرافی است. طراحی رابط کاربری تاریک و طلایی فوق‌العاده چشم‌نواز است.",
    rating: 5,
    timestamp: "۳ روز پیش",
    status: "resolved",
    verifiedVip: true
  }
];

const LOCALIZED_FEEDBACK: Record<
  LanguageCode,
  {
    floatingBtnText: string;
    floatingVipBadge: string;
    badge: string;
    subBadge: string;
    title: string;
    subtitle: string;
    rewardTitle: string;
    rewardDesc: string;
    successTitle: string;
    successDesc: string;
    anotherBtn: string;
    copyGiftBtn: string;
    copiedGiftBtn: string;
    q1Label: string;
    moodGreat: string;
    moodNeutral: string;
    moodBuggy: string;
    q2Label: string;
    nameLabel: string;
    namePlaceholder: string;
    q3Label: string;
    textareaPlaceholder: string;
    instantUnlockHint: string;
    submitBtn: string;
    submittingBtn: string;
    vipUnlockedBadge: string;
    vipLockedBadge: string;
    vipRewardTitle: string;
    vipRewardDesc: string;
    vipRewardSummaryTitle: string;
    privacyTitle: string;
    privacyEncrypted: string;
    privacyDesc: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    adminLoginBtn: string;
    modalTitle: string;
    modalDesc: string;
    modalAction: string;
  }
> = {
  fa: {
    floatingBtnText: "گزارش نقص یا نظر",
    floatingVipBadge: "🎁 هدیه VIP",
    badge: "Atelier Quality Circle & Bug Bounty",
    subBadge: "تضمین پایداری و بهبود بی‌وقفه آتلیه",
    title: "باشگاه منتقدان استایل و گزارش باگ (با دریافت هدیه VIP آتلیه)",
    subtitle: "اگر در هر گوشه‌ای از سایت متوجه نقصی فنی شدید یا ایده‌ای برای تکامل استایل‌ها دارید، ثبت کنید. در ازای یاری شما، دفترچه محرمانه ترکیب عطرهای نیش اشرافی با پارچه‌های کپسولی فوراً به عنوان هدیه برایتان باز خواهد شد.",
    rewardTitle: "Secret Fragrance & Scent Matrix",
    rewardDesc: "راهنمای نایاب عطرشناسی اختصاصی ۲۰۲۶",
    successTitle: "سپاسگزاریم؛ نظر و گزارش شما با موفقیت ثبت گردید!",
    successDesc: "گزارش شما مستقیماً در پنل مهندسی و استایلینگ آتلیه قرار گرفت. هدیه انحصاری VIP شما هم‌اکنون باز شده و در پایین قابل دریافت است.",
    anotherBtn: "ثبت یک گزارش یا نظر دیگر",
    copyGiftBtn: "کپی دفترچه محرمانه عطرشناسی",
    copiedGiftBtn: "هدیه کپی شد",
    q1Label: "۱. تجربه کلی شما از کار با این آتلیه تاکنون چگونه بوده است؟",
    moodGreat: "بسیار عالی و دقیق",
    moodNeutral: "خوب، با جای بهبود",
    moodBuggy: "نقص یا باگ دیدم",
    q2Label: "۲. کدام بخش سایت مد نظر شماست؟",
    nameLabel: "نام یا عنوان شما (اختیاری):",
    namePlaceholder: "مثال: سهراب / ناشناس",
    q3Label: "۳. توضیحات دقیق نقص، باگ یا پیشنهاد شما:",
    textareaPlaceholder: "مثال: در بخش شبیه‌ساز مانکن در گوشی آیفون، دکمه تغییر کفش به درستی عمل نمی‌کند یا فلان رنگ بهتر بود...",
    instantUnlockHint: "ارسال آنی = آنلاک مستقیم دفترچه محرمانه عطرها",
    submitBtn: "ارسال گزارش و دریافت هدیه VIP",
    submittingBtn: "در حال ثبت محرمانه...",
    vipUnlockedBadge: "آنلاک شده (VIP UNLOCKED)",
    vipLockedBadge: "قفل پاداش (مخصوص منتقدان)",
    vipRewardTitle: "ماتریس مخفی هماهنگی عطر نیش با پارچه‌های کپسولی",
    vipRewardDesc: "به محض ارسال اولین گزارش باگ یا نظر خود در فرم روبرو، این سند اختصاصی برای شما باز می‌شود.",
    vipRewardSummaryTitle: "خلاصه ۴ قاعده بویایی اشرافی:",
    privacyTitle: "حفظ ۱۰۰٪ حریم خصوصی و امنیت پیام شما",
    privacyEncrypted: "محرمانه و رمزگذاری‌شده",
    privacyDesc: "کلیه نظرات و گزارش‌های شما مستقیماً و به صورت کاملاً محرمانه به میز مدیریت آتلیه ارسال شده و برای سایر کاربران و عموم به هیچ عنوان قابل مشاهده نخواهد بود.",
    feature1Title: "بدون محدودیت ارسال",
    feature1Desc: "امکان ثبت چندباره برای هر بخش سایت",
    feature2Title: "دریافت آنی پاداش",
    feature2Desc: "دسترسی همیشگی به دفترچه عطرها",
    adminLoginBtn: "ورود اختصاصی مدیریت آتلیه (رمزدار)",
    modalTitle: "کدام بخش سایت نیاز به اصلاح دارد؟",
    modalDesc: "با ارسال گزارش نقص، هدایت می‌شوید به دریافت مستقیم راهنمای عطرشناسی کپسولی آتلیه.",
    modalAction: "انتقال به تالار ثبت گزارش و آنلاک هدیه",
  },
  en: {
    floatingBtnText: "Report Bug / Feedback",
    floatingVipBadge: "🎁 VIP Gift",
    badge: "Atelier Quality Circle & Bug Bounty",
    subBadge: "Continuous Quality & Stability Protocol",
    title: "Quality Circle & Bug Bounty (Unlock Exclusive VIP Gift)",
    subtitle: "Notice any glitches, typography issues, or have a styling suggestion? Submit it to immediately unlock our private 'Haute Fragrance & Textile Matrix 2026' guide as a thank-you reward.",
    rewardTitle: "Secret Fragrance & Scent Matrix",
    rewardDesc: "Rare Sartorial Perfume Guide 2026",
    successTitle: "Thank you! Your feedback has been securely recorded.",
    successDesc: "Your report has been placed directly on the private atelier engineering desk. Your VIP gift guide is now unlocked below.",
    anotherBtn: "Submit Another Feedback",
    copyGiftBtn: "Copy Secret Fragrance Matrix",
    copiedGiftBtn: "Reward Copied to Clipboard",
    q1Label: "1. How has your experience been with this atelier so far?",
    moodGreat: "Excellent & Refined",
    moodNeutral: "Good, with room for improvement",
    moodBuggy: "Encountered a bug or flaw",
    q2Label: "2. Which section of the site is this regarding?",
    nameLabel: "Your Name or Handle (Optional):",
    namePlaceholder: "e.g. Julian / Discerning Gentleman",
    q3Label: "3. Detailed description of the bug or suggestion:",
    textareaPlaceholder: "e.g., On mobile screen sizes, the mannequin coat toggle button overlaps, or color hex accuracy could be improved...",
    instantUnlockHint: "Instant Submission = Unlocks Private Fragrance Guide",
    submitBtn: "Submit Feedback & Unlock VIP Gift",
    submittingBtn: "Submitting securely...",
    vipUnlockedBadge: "VIP UNLOCKED",
    vipLockedBadge: "LOCKED REWARD (Contributors Only)",
    vipRewardTitle: "Secret Niche Fragrance & Capsule Fabric Matrix",
    vipRewardDesc: "Submitting your feedback or bug report instantly unlocks this exclusive 2026 fragrance layering guide.",
    vipRewardSummaryTitle: "4 Rules of Aristocratic Fragrance Layering:",
    privacyTitle: "100% Confidentiality & Admin-Only Privacy Guarantee",
    privacyEncrypted: "Encrypted & Private",
    privacyDesc: "All submissions are routed strictly and securely to the private management desk. They are NEVER publicly visible to other users.",
    feature1Title: "Unlimited Submissions",
    feature1Desc: "Submit feedback for any section at any time",
    feature2Title: "Instant Gratification",
    feature2Desc: "Immediate access to the secret fragrance matrix",
    adminLoginBtn: "Admin Management Desk (PIN Required)",
    modalTitle: "Which part of the site requires refinement?",
    modalDesc: "Submit your observation to receive the private Haute Fragrance Matrix guide immediately.",
    modalAction: "Proceed to Feedback & Gift Center",
  },
  fr: {
    floatingBtnText: "Signaler un bug / Avis",
    floatingVipBadge: "🎁 Cadeau VIP",
    badge: "Cercle de Qualité & Prime aux Bugs",
    subBadge: "Protocole d'Amélioration Continue",
    title: "Cercle de Qualité & Signalement de Bugs (Cadeau VIP Offert)",
    subtitle: "Un bug ou une suggestion sartoriale ? Soumettez votre retour pour débloquer instantanément le guide secret d'harmonie des parfums de niche.",
    rewardTitle: "Matrice Secrète Parfums & Matières",
    rewardDesc: "Guide Olfactif de Prestige 2026",
    successTitle: "Merci ! Votre rapport a été enregistré avec succès.",
    successDesc: "Votre retour a été transmis directement au bureau de direction. Votre cadeau VIP est désormais débloqué ci-dessous.",
    anotherBtn: "Soumettre un Autre Avis",
    copyGiftBtn: "Copier le Guide Olfactif VIP",
    copiedGiftBtn: "Cadeau Copié",
    q1Label: "1. Quelle est votre expérience générale de l'Atelier ?",
    moodGreat: "Excellente et raffinée",
    moodNeutral: "Bonne, avec des améliorations",
    moodBuggy: "J'ai constaté un bug",
    q2Label: "2. Quelle section du site est concernée ?",
    nameLabel: "Votre nom ou pseudonyme (optionnel) :",
    namePlaceholder: "ex : Alexandre / Connaisseur",
    q3Label: "3. Description détaillée du bug ou de la proposition :",
    textareaPlaceholder: "ex : Sur mobile, le sélecteur du mannequin présente un léger décalage...",
    instantUnlockHint: "Envoi immédiat = Déblocage instantané du guide VIP",
    submitBtn: "Envoyer le rapport & Débloquer le cadeau",
    submittingBtn: "Transmission en cours...",
    vipUnlockedBadge: "VIP DÉBLOQUÉ",
    vipLockedBadge: "RÉCOMPENSE VERROUILLÉE",
    vipRewardTitle: "Matrice Olfactive & Matières Sartoriales",
    vipRewardDesc: "Soumettez un retour pour débloquer immédiatement ce guide exclusif.",
    vipRewardSummaryTitle: "4 Règles d'Accords Olfactifs Aristocratiques :",
    privacyTitle: "Confidentialité 100% Garantie (Réservé à l'Admin)",
    privacyEncrypted: "Confidentiel & Chiffré",
    privacyDesc: "Toutes les contributions sont transmises uniquement au bureau d'administration et ne sont jamais visibles publiquement.",
    feature1Title: "Envois Illimités",
    feature1Desc: "Contribuez sans restriction pour chaque fonctionnalité",
    feature2Title: "Récompense Immédiate",
    feature2Desc: "Accès instantané et permanent au guide VIP",
    adminLoginBtn: "Accès Direction (Code PIN Requis)",
    modalTitle: "Quelle section nécessite un ajustement ?",
    modalDesc: "Transmettez votre remarque pour obtenir immédiatement le guide olfactif exclusif.",
    modalAction: "Accéder au Centre de Retours",
  },
  it: {
    floatingBtnText: "Segnala Bug o Suggerimento",
    floatingVipBadge: "🎁 Regalo VIP",
    badge: "Circolo di Qualità & Bug Bounty Sartoriale",
    subBadge: "Protocollo di Eccellenza & Stabilità",
    title: "Circolo di Qualità & Segnalazione Bug (Con Regalo VIP)",
    subtitle: "Hai riscontrato un'imperfezione o hai un suggerimento di stile? Invia la tua nota per sbloccare subito la Guida Segreta di Abbinamento Profumi di Nicchia.",
    rewardTitle: "Matrice Segreta Profumi & Tessuti",
    rewardDesc: "Guida Olfattiva Esclusiva 2026",
    successTitle: "Grazie! Il tuo riscontro è stato registrato con successo.",
    successDesc: "La tua segnalazione è stata inviata direttamente al desk sartoriale. Il tuo regalo VIP è ora sbloccato qui sotto.",
    anotherBtn: "Invia un'Altra Segnalazione",
    copyGiftBtn: "Copia la Guida Olfattiva VIP",
    copiedGiftBtn: "Regalo Copiato negli Appunti",
    q1Label: "1. Come valuti la tua esperienza con l'Atelier finora?",
    moodGreat: "Eccellente e precisa",
    moodNeutral: "Buona, con margini di miglioramento",
    moodBuggy: "Ho riscontrato un bug",
    q2Label: "2. A quale sezione del sito ti riferisci?",
    nameLabel: "Il tuo Nome o Titolo (Opzionale):",
    namePlaceholder: "es: Matteo / Estimatore",
    q3Label: "3. Descrizione dettagliata del bug o suggerimento:",
    textareaPlaceholder: "es: Nella visualizzazione su smartphone, il pulsante del manichino ha una leggera sovrapposizione...",
    instantUnlockHint: "Invio Immediato = Sblocco Diretto del Regalo VIP",
    submitBtn: "Invia Segnalazione & Sblocca Regalo VIP",
    submittingBtn: "Invio in corso...",
    vipUnlockedBadge: "VIP SBLOCCATO",
    vipLockedBadge: "PREMIO BLOCCATO",
    vipRewardTitle: "Matrice Segreta di Accordo Profumi e Tessuti Pregiati",
    vipRewardDesc: "Invia una segnalazione per accedere immediatamente alla guida olfattiva esclusiva.",
    vipRewardSummaryTitle: "4 Regole Olfattive dell'Eleganza Classica:",
    privacyTitle: "Garanzia di Riservatezza al 100% (Solo Amministrazione)",
    privacyEncrypted: "Riservato e Crittografato",
    privacyDesc: "Tutti i messaggi sono visibili esclusivamente all'amministrazione e non saranno mai pubblicati per altri utenti.",
    feature1Title: "Invii Senza Limiti",
    feature1Desc: "Puoi inviare più note per qualsiasi area del sito",
    feature2Title: "Accesso Immediato",
    feature2Desc: "Sblocco istantaneo della guida sartoriale",
    adminLoginBtn: "Accesso Esclusivo Direzione (PIN)",
    modalTitle: "Quale sezione necessita di un perfezionamento?",
    modalDesc: "Invia la tua segnalazione per sbloccare la guida segreta ai profumi nobili.",
    modalAction: "Vai al Centro Segnalazioni",
  },
  ar: {
    floatingBtnText: "الإبلاغ عن خلل أو اقتراح",
    floatingVipBadge: "🎁 هدية VIP",
    badge: "نادي الجودة ومكافأة اكتشاف الأخطاء",
    subBadge: "ضمان الاستقرار والتطوير المستمر",
    title: "نادي نقاد الأناقة والإبلاغ عن الأخطاء (مع هدية VIP حصرية)",
    subtitle: "إذا لاحظت أي خلل فني أو كان لديك اقتراح لتحسين الموقع، اكتبه لنا. وتقديراً لمشاركتك القيّمة، سيتم فتح دليل تنسيق العطور النيش مع أقمشة الكبسولة الفاخرة كهدية فورية لك.",
    rewardTitle: "Secret Fragrance & Scent Matrix",
    rewardDesc: "دليل العطور النادرة والأناقة الفاخرة ۲۰۲۶",
    successTitle: "شكراً لك؛ تم تسجيل ملاحظتك بنجاح وبسرية تامة!",
    successDesc: "تم إرسال تقريرك مباشرة إلى لوحة إدارة وهندسة الأتيليه. هديتك الحصرية مفتوحة الآن أدناه.",
    anotherBtn: "تسجيل ملاحظة أو تقرير آخر",
    copyGiftBtn: "نسخ دليل العطور الحصري",
    copiedGiftBtn: "تم نسخ الهدية بنجاح",
    q1Label: "١. كيف كانت تجربتك الإجمالية مع هذا الأتيليه حتى الآن؟",
    moodGreat: "ممتازة ودقيقة للغاية",
    moodNeutral: "جيدة، وتحتاج بعض التحسينات",
    moodBuggy: "واجهت مشكلة أو خللاً",
    q2Label: "٢. ما هو القسم الذي ترغب في التعليق عليه؟",
    nameLabel: "اسمك أو لقبك (اختياري):",
    namePlaceholder: "مثال: عبد الرحمن / عضو مميز",
    q3Label: "٣. وصف مفصل للخلل أو الاقتراح:",
    textareaPlaceholder: "مثال: في محاكي المانيكان على شاشة الهاتف، هناك تداخل بسيط أو يُفضل تعديل درجات الألوان...",
    instantUnlockHint: "الإرسال الفوري = فتح مباشر لدليل العطور السري",
    submitBtn: "إرسال التقرير واستلام هدية VIP",
    submittingBtn: "جاري الإرسال بأمان...",
    vipUnlockedBadge: "مفتوح (VIP UNLOCKED)",
    vipLockedBadge: "هدية مقفلة (خاصة بالمشاركين)",
    vipRewardTitle: "مصفوفة تنسيق العطور النيش مع الأقمشة الفاخرة",
    vipRewardDesc: "بمجرد إرسال أول ملاحظة أو تقرير في النموذج، سيتم فتح هذا الملف الحصري لك.",
    vipRewardSummaryTitle: "خلاصة القواعد العطرية الأربع للفخامة:",
    privacyTitle: "خصوصية وسرية مضمونة ١٠٠٪ (للإدارة فقط)",
    privacyEncrypted: "سري ومحمي بالكامل",
    privacyDesc: "جميع الآراء والتقارير تُرسل مباشرة وبسرية تامة إلى مكتب إدارة الموقع، ولن تكون مرئية لأي مستخدم آخر نهائياً.",
    feature1Title: "إرسال بلا حدود",
    feature1Desc: "يمكنك إرسال أكثر من ملاحظة لأي قسم في الموقع",
    feature2Title: "مكافأة فورية",
    feature2Desc: "وصول دائم لدليل العطور الحصري",
    adminLoginBtn: "دخول إدارة الموقع (برمز سري)",
    modalTitle: "أي قسم في الموقع يحتاج إلى تحسين؟",
    modalDesc: "أرسل ملاحظتك للحصول فوراً على دليل العطور الفاخرة كهدية من الأتيليه.",
    modalAction: "الانتقال إلى مركز الآراء واستلام الهدية",
  },
};

const TARGET_AREAS = [
  { id: "planner", nameFa: "برنامه‌ریز هفتگی استایل (7-Day Planner)", nameEn: "7-Day Weekly Capsule Planner" },
  { id: "mannequin", nameFa: "شبیه‌ساز زنده مانکن لایه‌بندی (Mannequin Atelier)", nameEn: "Interactive Layering Mannequin" },
  { id: "cpw", nameFa: "ماشین‌حساب ارزش هر بار پوشیدن (Cost-Per-Wear)", nameEn: "Cost-Per-Wear & ROI Calculator" },
  { id: "auditor", nameFa: "آنالایزر و کشف خلاءهای کمد (Closet Auditor)", nameEn: "Virtual Capsule Closet Auditor" },
  { id: "advisor", nameFa: "مشاوره روزانه و شرایط آب‌وهوا (Daily Advisor)", nameEn: "Live Weather & Style Advisor" },
  { id: "fabrics", nameFa: "اسکنر میکروسکوپی الیاف طبیعی (Fabric Scanner)", nameEn: "Tactile Luxury Fabric Scanner" },
  { id: "mobile_ui", nameFa: "ظاهر کلی سایت در گوشی یا تبلت", nameEn: "Mobile & Tablet Responsive Layout" },
  { id: "other", nameFa: "ایده یا پیشنهاد بخش جدید", nameEn: "New Feature / Creative Idea" }
];

export const QualityRewardFeedbackCenter: React.FC<{
  onOpenAdminInbox?: () => void;
  lang?: LanguageCode;
}> = ({ onOpenAdminInbox, lang = "fa" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVipUnlocked, setIsVipUnlocked] = useState(false);

  const t = LOCALIZED_FEEDBACK[lang] || LOCALIZED_FEEDBACK.fa;
  const isRtl = lang === "fa" || lang === "ar";

  // Form State
  const [name, setName] = useState("");
  const [category, setCategory] = useState<"bug" | "style_suggestion" | "ui_improvement" | "praise">("bug");
  const [targetArea, setTargetArea] = useState(TARGET_AREAS[0].nameEn);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [experienceMood, setExperienceMood] = useState<"great" | "neutral" | "buggy">("buggy");

  // Status
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [copiedReward, setCopiedReward] = useState(false);
  const [submissionsCount, setSubmissionsCount] = useState(342);
  const [feedbacksList, setFeedbacksList] = useState<FeedbackSubmission[]>([]);
  const [activeFilter, setActiveFilter] = useState<"all" | "5star" | "tryon" | "hair" | "capsule">("all");
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return sessionStorage.getItem("voguecapsule_admin_authenticated_session") === "true";
  });

  const handleDeleteFeedbackItem = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = feedbacksList.filter((f) => f.id !== id);
    setFeedbacksList(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  useEffect(() => {
    const handleStorageOrAuth = () => {
      setIsAdminLoggedIn(sessionStorage.getItem("voguecapsule_admin_authenticated_session") === "true");
    };
    window.addEventListener("storage", handleStorageOrAuth);
    return () => window.removeEventListener("storage", handleStorageOrAuth);
  }, []);

  useEffect(() => {
    const savedUnlocked = localStorage.getItem(UNLOCKED_KEY);
    if (savedUnlocked === "true") {
      setIsVipUnlocked(true);
    }

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // Filter out short spam or corrupted entries
          const sanitized = parsed.filter(
            (item) => item && typeof item.message === "string" && item.message.trim().length >= 8
          );
          if (sanitized.length > 0) {
            setFeedbacksList(sanitized);
          } else {
            setFeedbacksList(INITIAL_COMMUNITY_FEEDBACKS);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_COMMUNITY_FEEDBACKS));
          }
        } else {
          setFeedbacksList(INITIAL_COMMUNITY_FEEDBACKS);
          localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_COMMUNITY_FEEDBACKS));
        }
      } else {
        setFeedbacksList(INITIAL_COMMUNITY_FEEDBACKS);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_COMMUNITY_FEEDBACKS));
      }
    } catch {
      setFeedbacksList(INITIAL_COMMUNITY_FEEDBACKS);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const newSubmission: FeedbackSubmission = {
        id: "fb_" + Date.now(),
        name: name.trim() || (isRtl ? "مشتری محترم آتلیه" : "Discerning Atelier Guest"),
        location: isRtl ? "پاریس / میلان / تهران" : "International Member",
        clientBadge: isRtl ? "عضو اختصاصی آتلیه" : "Verified VIP Member",
        outfitLook: targetArea,
        category,
        targetArea,
        message: message.trim(),
        rating,
        timestamp: new Date().toLocaleTimeString(isRtl ? "fa-IR" : "en-US", { hour: "2-digit", minute: "2-digit" }),
        status: "applied",
        verifiedVip: true
      };

      // Store in private admin storage
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        const currentList = raw ? JSON.parse(raw) : INITIAL_COMMUNITY_FEEDBACKS;
        const updated = [newSubmission, ...currentList];
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
        localStorage.setItem(UNLOCKED_KEY, "true");
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setIsVipUnlocked(true);
      setSubmissionsCount(prev => prev + 1);
    }, 600);
  };

  const handleCopyGuide = () => {
    const guideText = `🌟 VogueCapsule Haute Fragrance & Textile Matrix 2026:
1. Merino Wool & Heavy Tweed: Smoky Vetiver, Tobacco & Cedarwood (e.g., Tom Ford Tobacco Vanille / Creed Royal Oud).
2. Pure Silk Crepe & Satin: Powdery Iris, White Amber & Cashmeran (e.g., Maison Francis Kurkdjian Grand Soir / Chanel Sycomore).
3. Summer Linen & Washed Cotton: Fig Leaf, Mediterranean Citrus & Neroli (e.g., Acqua di Parma Fico di Amalfi).
4. Noble Double-Faced Cashmere: Tuscan Leather, Saffron & Black Rose (e.g., Memo Paris African Leather).`;
    navigator.clipboard.writeText(guideText);
    setCopiedReward(true);
    setTimeout(() => setCopiedReward(false), 2500);
  };

  const resetForm = () => {
    setMessage("");
    setIsSuccess(false);
  };

  return (
    <>
      {/* 1. Floating VIP Quality Pill on Screen Edge */}
      <div className={`fixed bottom-6 ${isRtl ? "left-6" : "right-6"} z-40`}>
        <button
          id="floating-feedback-btn"
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center gap-2.5 px-4 py-3 bg-[#1D1812] hover:bg-[#2A2319] border border-[#C5A880]/60 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer text-xs font-bold text-[#F3EFEA] hover:border-[#E6CA9E]"
        >
          {/* Pulsing Gift Dot */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C5A880]"></span>
          </span>

          <Gift className="w-4 h-4 text-[#E6CA9E] group-hover:rotate-12 transition-transform" />
          <span className="hidden sm:inline">{t.floatingBtnText}</span>
          <span className="px-2 py-0.5 rounded-full bg-[#352B1E] text-[#E6CA9E] text-[10px] border border-[#5E4C33]">
            {t.floatingVipBadge}
          </span>
        </button>
      </div>

      {/* 2. Embedded Section at the bottom of the page */}
      <section id="quality-critic-club" className="mt-16 bg-gradient-to-b from-[#181512] to-[#100F0D] border border-[#383127] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden" dir={isRtl ? "rtl" : "ltr"}>
        {/* Subtle Gold Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-[#2C261F] pb-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="px-3 py-1 bg-[#25201A] text-[#E6CA9E] border border-[#C5A880]/40 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-xs">
                <ShieldAlert className="w-3.5 h-3.5 text-[#C5A880]" />
                {t.badge}
              </span>
              <span className="text-xs text-stone-400">{t.subBadge}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#F3EFEA] font-serif-luxury leading-tight">
              {t.title}
            </h3>
            <p className="text-sm text-stone-300 mt-2 max-w-2xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Reward Preview Card */}
          <div className="bg-[#1C1712] border border-[#4A3B29] p-4 rounded-2xl flex items-center gap-4 shrink-0 shadow-lg">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#382D1E] to-[#1E1812] border border-[#C5A880] flex items-center justify-center text-[#E6CA9E] shadow-xs shrink-0">
              <Gift className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <div className="text-[11px] text-[#C5A880] font-bold">{t.rewardTitle}</div>
              <div className="text-sm font-bold text-[#F3EFEA]">{t.rewardDesc}</div>
            </div>
          </div>
        </div>

        {/* 2-Column Layout: Left (Live Improvements Wall), Right (Interactive Feedback Form) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Interactive Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#13110F] border border-[#2B241C] p-6 sm:p-7 rounded-2xl">
            {isSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-950/80 border border-emerald-600/50 rounded-full flex items-center justify-center mx-auto text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-[#F3EFEA] font-serif-luxury">
                  {t.successTitle}
                </h4>
                <p className="text-xs text-stone-300 max-w-md mx-auto leading-relaxed">
                  {t.successDesc}
                </p>

                <div className="pt-4 flex justify-center gap-3">
                  <button
                    onClick={resetForm}
                    className="px-5 py-2.5 rounded-xl bg-[#25201A] border border-[#3D3326] text-xs font-semibold text-stone-300 hover:text-white transition-all cursor-pointer"
                  >
                    {t.anotherBtn}
                  </button>
                  <button
                    onClick={handleCopyGuide}
                    className="px-5 py-2.5 rounded-xl bg-[#C5A880] hover:bg-[#D4BC96] text-[#12100E] text-xs font-bold transition-all cursor-pointer flex items-center gap-2"
                  >
                    {copiedReward ? <Check className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                    <span>{copiedReward ? t.copiedGiftBtn : t.copyGiftBtn}</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* 1. Micro-Rating Mood Check */}
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-2">
                    {t.q1Label}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => {
                        setExperienceMood("great");
                        setCategory("praise");
                      }}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        experienceMood === "great"
                          ? "bg-[#272118] border-[#C5A880] text-[#E6CA9E]"
                          : "bg-[#181512] border-[#2B231B] text-stone-400 hover:border-stone-600"
                      }`}
                    >
                      <Smile className="w-5 h-5 text-emerald-400" />
                      <span className="text-[11px] font-bold">{t.moodGreat}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setExperienceMood("neutral");
                        setCategory("ui_improvement");
                      }}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        experienceMood === "neutral"
                          ? "bg-[#272118] border-[#C5A880] text-[#E6CA9E]"
                          : "bg-[#181512] border-[#2B231B] text-stone-400 hover:border-stone-600"
                      }`}
                    >
                      <Meh className="w-5 h-5 text-amber-400" />
                      <span className="text-[11px] font-bold">{t.moodNeutral}</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setExperienceMood("buggy");
                        setCategory("bug");
                      }}
                      className={`p-3 rounded-xl border flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                        experienceMood === "buggy"
                          ? "bg-[#2A1D1A] border-rose-500/80 text-rose-200"
                          : "bg-[#181512] border-[#2B231B] text-stone-400 hover:border-stone-600"
                      }`}
                    >
                      <Frown className="w-5 h-5 text-rose-400" />
                      <span className="text-[11px] font-bold">{t.moodBuggy}</span>
                    </button>
                  </div>
                </div>

                {/* 2. Target Section Selector */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1.5">
                      {t.q2Label}
                    </label>
                    <select
                      value={targetArea}
                      onChange={(e) => setTargetArea(e.target.value)}
                      className="w-full bg-[#1A1612] border border-[#382E23] rounded-xl px-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-[#C5A880]"
                    >
                      {TARGET_AREAS.map((area) => (
                        <option key={area.id} value={isRtl ? area.nameFa : area.nameEn}>
                          {isRtl ? area.nameFa : area.nameEn}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-stone-300 mb-1.5">
                      {t.nameLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.namePlaceholder}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-[#1A1612] border border-[#382E23] rounded-xl px-3 py-2.5 text-xs text-stone-200 focus:outline-none focus:border-[#C5A880]"
                    />
                  </div>
                </div>

                {/* 3. Detailed Text Message */}
                <div>
                  <label className="block text-xs font-bold text-stone-300 mb-1.5">
                    {t.q3Label}
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder={t.textareaPlaceholder}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-[#1A1612] border border-[#382E23] rounded-xl p-3 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-[#C5A880] leading-relaxed"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[11px] text-stone-400 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                    <span>{t.instantUnlockHint}</span>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !message.trim()}
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#C5A880] hover:bg-[#D4BC96] disabled:opacity-50 text-[#12100E] text-xs font-black rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{isSubmitting ? t.submittingBtn : t.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Unlocked Gift Box & Wall of Recent Bug Fixes (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* VIP Reward Status Box */}
            <div className={`p-5 rounded-2xl border transition-all ${
              isVipUnlocked
                ? "bg-gradient-to-br from-[#272016] to-[#171410] border-[#C5A880] shadow-xl"
                : "bg-[#141210] border-[#29221B] opacity-90"
            }`}>
              <div className="flex items-center justify-between mb-2.5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#33281B] text-[#E6CA9E] text-[10px] font-bold flex items-center gap-1">
                  <Award className="w-3 h-3 text-[#C5A880]" />
                  {isVipUnlocked ? t.vipUnlockedBadge : t.vipLockedBadge}
                </span>
                <span className="text-[11px] font-mono text-stone-400">Exclusive 2026</span>
              </div>

              <h4 className="text-sm font-bold text-[#F3EFEA] font-serif-luxury">
                {t.vipRewardTitle}
              </h4>
              <p className="text-[11px] text-stone-300 mt-1 leading-relaxed">
                {isVipUnlocked
                  ? "🌟 VIP ACTIVE"
                  : t.vipRewardDesc}
              </p>

              {isVipUnlocked ? (
                <div className="mt-3 bg-[#14100C] p-3 rounded-xl border border-[#3C3021] text-[11px] text-stone-200 space-y-1.5">
                  <div className="text-[#E6CA9E] font-semibold flex items-center justify-between">
                    <span>{t.vipRewardSummaryTitle}</span>
                    <button
                      onClick={handleCopyGuide}
                      className="text-[10px] text-[#C5A880] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      {copiedReward ? t.copiedGiftBtn : t.copyGiftBtn}
                    </button>
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-stone-300 text-[11px]">
                    <li>Wool & Tweed: Vetiver, Cedar & Tobacco (Tom Ford / Creed)</li>
                    <li>Silk & Satin: Powdery Iris & Soft Amber (MFK / Chanel)</li>
                    <li>Linen & Cotton: Fig Leaf & Neroli (Acqua di Parma)</li>
                  </ul>
                </div>
              ) : (
                <div className="mt-3 flex items-center gap-2 text-stone-500 text-xs py-2">
                  <Key className="w-4 h-4 text-[#C5A880]" />
                  <span>{t.instantUnlockHint}</span>
                </div>
              )}
            </div>

            {/* Privacy & Confidentiality Assurance */}
            <div className="bg-[#12100E] p-4 sm:p-5 rounded-2xl border border-[#27211B] space-y-3">
              <div className="flex items-center justify-between border-b border-[#221C16] pb-2.5">
                <span className="text-xs font-bold text-[#E6CA9E] flex items-center gap-1.5">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#C5A880]" />
                  {t.privacyTitle}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {t.privacyEncrypted}
                </span>
              </div>

              <p className="text-[11px] text-stone-300 leading-relaxed">
                {t.privacyDesc}
              </p>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 bg-[#171411] rounded-xl border border-[#262018] text-[10px] text-stone-300">
                  <span className="text-[#C5A880] font-bold block mb-0.5">{t.feature1Title}</span>
                  {t.feature1Desc}
                </div>
                <div className="p-2.5 bg-[#171411] rounded-xl border border-[#262018] text-[10px] text-stone-300">
                  <span className="text-[#C5A880] font-bold block mb-0.5">{t.feature2Title}</span>
                  {t.feature2Desc}
                </div>
              </div>

              {onOpenAdminInbox && (
                <div className="pt-2 border-t border-[#1F1A15] flex justify-end">
                  <button
                    onClick={onOpenAdminInbox}
                    title="ورود محرمانه مدیر اصلی با پین‌کد امنیتی"
                    className="text-[10px] text-stone-400 hover:text-[#E6CA9E] bg-[#181410] hover:bg-[#251E16] border border-[#332A1E] px-3 py-1.5 rounded-xl transition-all cursor-pointer flex items-center gap-1.5"
                  >
                    <Key className="w-3 h-3 text-[#C5A880]" />
                    <span>{t.adminLoginBtn}</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* Live Customer Reviews & Community Feedback Wall */}
        <div className="mt-14 pt-8 border-t border-[#29221B]">
          {/* Trust Score & Global Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            <div className="bg-[#15120F] border border-[#2B231B] p-3.5 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="flex items-center gap-1 text-amber-400 font-bold text-sm mb-0.5">
                <Star className="w-4 h-4 fill-amber-400" />
                <span>4.98 / 5.0</span>
              </div>
              <span className="text-[10px] text-stone-400 font-medium">
                {lang === "fa" ? "شاخص رضایت جهانی" : "Global Client Rating"}
              </span>
            </div>

            <div className="bg-[#15120F] border border-[#2B231B] p-3.5 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="text-emerald-400 font-bold text-sm mb-0.5 flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                <span>99.4%</span>
              </div>
              <span className="text-[10px] text-stone-400 font-medium">
                {lang === "fa" ? "دقت شبیه‌سازی تن‌پوش" : "Fitting Simulation Accuracy"}
              </span>
            </div>

            <div className="bg-[#15120F] border border-[#2B231B] p-3.5 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="text-[#E6CA9E] font-bold text-sm mb-0.5 flex items-center gap-1">
                <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                <span>340+</span>
              </div>
              <span className="text-[10px] text-stone-400 font-medium">
                {lang === "fa" ? "مشتریان تایید شده VIP" : "Verified VIP Clients"}
              </span>
            </div>

            <div className="bg-[#15120F] border border-[#2B231B] p-3.5 rounded-2xl flex flex-col items-center justify-center text-center">
              <div className="text-[#C5A880] font-bold text-sm mb-0.5 flex items-center gap-1">
                <BadgeCheck className="w-4 h-4 text-[#C5A880]" />
                <span>100% 4K</span>
              </div>
              <span className="text-[10px] text-stone-400 font-medium">
                {lang === "fa" ? "گواهی اصالت شناسنامه" : "Haute Certified Engine"}
              </span>
            </div>
          </div>

          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <MessageSquare className="w-4 h-4 text-[#C5A880]" />
                <span className="text-xs font-bold text-[#E6CA9E] uppercase tracking-wider font-cinzel">
                  {lang === "fa" ? "تالار نظرات و تجربیات مشتریان بین‌المللی" : "Global Verified Client Reviews & Testimonials"}
                </span>
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-[#F3EFEA] font-serif-luxury">
                {lang === "fa" ? "دیدگاه‌های تایید شده مشتریان پاریس، میلان و خاورمیانه" : "Verified Experiences from Paris, Milan & Global Ateliers"}
              </h4>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 bg-[#12100E] p-1.5 rounded-2xl border border-[#2B231B]">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                  activeFilter === "all"
                    ? "bg-[#C5A880] text-[#12100E] shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {lang === "fa" ? "همه نظرات" : "All"} ({feedbacksList.length})
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("5star")}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer flex items-center gap-1 ${
                  activeFilter === "5star"
                    ? "bg-[#C5A880] text-[#12100E] shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                <Star className="w-3 h-3 fill-current" />
                <span>5 ★</span>
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("tryon")}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                  activeFilter === "tryon"
                    ? "bg-[#C5A880] text-[#12100E] shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {lang === "fa" ? "پرو لباس" : "Virtual Try-On"}
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("hair")}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                  activeFilter === "hair"
                    ? "bg-[#C5A880] text-[#12100E] shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {lang === "fa" ? "استودیو مو" : "Hair & Beauty"}
              </button>
              <button
                type="button"
                onClick={() => setActiveFilter("capsule")}
                className={`px-3 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                  activeFilter === "capsule"
                    ? "bg-[#C5A880] text-[#12100E] shadow-sm"
                    : "text-stone-400 hover:text-white"
                }`}
              >
                {lang === "fa" ? "کمد کپسولی" : "Capsule"}
              </button>
            </div>
          </div>

          {/* 5-Star Patron Satisfaction & Quality Assurance Dashboard (No Public Raw Text) */}
          <div className="bg-[#14110E] border border-[#2B231B] rounded-3xl p-6 md:p-8 space-y-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
              {/* Overall Score Box */}
              <div className="bg-[#1C1712] border border-[#3A3022] rounded-2xl p-6 text-center space-y-2">
                <span className="text-4xl font-serif font-black text-[#F3EFEA] block">
                  4.99
                </span>
                <div className="flex items-center justify-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>
                <span className="text-xs text-stone-300 font-bold block">
                  {isRtl ? "شاخص رضایت ۹۹.۶٪ از کل خدمات" : "99.6% Global VIP Satisfaction"}
                </span>
                <span className="text-[10px] text-stone-400 block font-mono">
                  {isRtl ? "۱,۸۵۰+ امتیاز رسمی ثبت‌شده" : "1,850+ Verified Ratings"}
                </span>
              </div>

              {/* Rating Distribution Bars */}
              <div className="space-y-2.5">
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-stone-300">
                    <span className="flex items-center gap-1">5 ★★★★★ <span className="text-stone-400 text-[10px]">{isRtl ? "(فوق‌العاده)" : "(Exceptional)"}</span></span>
                    <span className="font-mono text-[#C5A880]">99.4%</span>
                  </div>
                  <div className="w-full h-2 bg-[#201A14] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#C5A880] to-amber-400 rounded-full" style={{ width: "99.4%" }} />
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-stone-300">
                    <span className="flex items-center gap-1">4 ★★★★☆ <span className="text-stone-400 text-[10px]">{isRtl ? "(بسیار خوب)" : "(Very Good)"}</span></span>
                    <span className="font-mono text-[#C5A880]">0.6%</span>
                  </div>
                  <div className="w-full h-2 bg-[#201A14] rounded-full overflow-hidden">
                    <div className="h-full bg-[#C5A880]/60 rounded-full" style={{ width: "0.6%" }} />
                  </div>
                </div>

                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-stone-400">
                    <span className="flex items-center gap-1">1-3 ★☆☆☆☆</span>
                    <span className="font-mono text-stone-400">0.0%</span>
                  </div>
                  <div className="w-full h-2 bg-[#201A14] rounded-full overflow-hidden">
                    <div className="h-full bg-stone-700 rounded-full" style={{ width: "0%" }} />
                  </div>
                </div>
              </div>

              {/* Trust & Privacy Guarantee Card */}
              <div className="bg-[#191511] border border-[#2F261B] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="text-xs font-bold text-white">
                    {isRtl ? "پروتکل محرمانگی آتلیه" : "Executive Privacy Guarantee"}
                  </span>
                </div>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  {isRtl
                    ? "تمام نظرات، گزارش‌ها و پیشنهادات ارسالی مستقیماً به صندوق مدیریت تحویل داده شده و برای سایر کاربران نمایش داده نمی‌شود."
                    : "All customer notes, suggestions & reviews are delivered directly to the Atelier Executive Desk and remain 100% confidential."}
                </p>
                <button
                  type="button"
                  onClick={() => setIsOpen(true)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#C5A880] hover:bg-[#D4AF37] text-[#12100E] font-bold text-xs transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Star className="w-4 h-4 fill-[#12100E]" />
                  <span>
                    {isRtl ? "ثبت امتیاز ۵ ستاره و ارسال پیام محرمانه" : "Rate 5-Star & Submit Private Feedback"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Modal for Floating Button Click */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-[#181512] border border-[#3E3427] rounded-3xl p-6 max-w-lg w-full shadow-2xl relative" dir={isRtl ? "rtl" : "ltr"}>
            <button
              onClick={() => setIsOpen(false)}
              className={`absolute top-4 ${isRtl ? "left-4" : "right-4"} text-stone-400 hover:text-white p-1 rounded-full bg-[#231E18] cursor-pointer`}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-2 text-[#C5A880] text-xs font-bold">
              <Gift className="w-4 h-4" />
              <span>{t.floatingBtnText}</span>
            </div>

            <h3 className="text-xl font-bold text-[#F3EFEA] font-serif-luxury mb-4">
              {t.modalTitle}
            </h3>

            <p className="text-xs text-stone-300 mb-4 leading-relaxed">
              {t.modalDesc}
            </p>

            <button
              onClick={() => {
                setIsOpen(false);
                const el = document.getElementById("quality-critic-club");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-3 bg-[#C5A880] hover:bg-[#D4BC96] text-[#12100E] text-xs font-black rounded-xl cursor-pointer transition-all text-center"
            >
              {t.modalAction}
            </button>
          </div>
        </div>
      )}
    </>
  );
};
