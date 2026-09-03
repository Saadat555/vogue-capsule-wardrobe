import React from "react";
import {
  X,
  Sparkles,
  Camera,
  Sun,
  DollarSign,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Award,
  Zap
} from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface AtelierConciergeModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: LanguageCode;
}

export function AtelierConciergeModal({
  isOpen,
  onClose,
  lang,
}: AtelierConciergeModalProps) {
  if (!isOpen) return null;
  const isRtl = lang === "fa" || lang === "ar";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn"
      dir={isRtl ? "rtl" : "ltr"}
    >
      <div className="bg-[#151310] border border-[#3A3227] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl relative text-[#F3EFEA]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#201B15] hover:bg-[#2F261C] border border-[#3A3227] text-stone-400 hover:text-white flex items-center justify-center transition-all cursor-pointer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-[#2C241B] pb-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#292117] text-[#E6CA9E] border border-[#52412F] text-[10px] font-bold font-cinzel">
            <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
            <span>MAISON SAADAT • CONCIERGE & SECRETS GUIDE</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            {lang === "fa" ? "راهنمای تخصصی عکاسی، نور و درآمدزایی دلاری" : "Haute Photography, Lighting & Monetization Guide"}
          </h2>
          <p className="text-xs sm:text-sm text-[#C5A880] font-serif italic">
            {lang === "fa"
              ? "اسرار استودیوهای مد میلان و پاریس برای دریافت بالاترین کیفیت و جذب مشتریان بین‌المللی"
              : "Master secrets from Milan and Paris studios for pristine 4K neural renders and monetization."}
          </p>
        </div>

        {/* Section 1: Photography & Lighting Secrets */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <Sun className="w-4 h-4 text-[#C5A880]" />
            <h3>{lang === "fa" ? "۱. رازهای نورپردازی و زاویه کمره (برای دقت ۱۰۰٪ طبیعی)" : "1. Photography & Lighting Secrets"}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="bg-[#1A1713] p-3.5 rounded-2xl border border-[#332A1F] space-y-1.5">
              <strong className="text-[#E6CA9E] flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{lang === "fa" ? "نور طبیعی ملایم (Soft Daylight)" : "Soft Natural Daylight"}</span>
              </strong>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                {lang === "fa"
                  ? "بهترین عکس‌ها رو به پنجره یا زیر نور غیرمستقیم روز گرفته می‌شوند تا خطوط مو و سایه لباس شفاف بماند."
                  : "Stand facing a bright window or diffused daylight to prevent harsh facial shadows."}
              </p>
            </div>

            <div className="bg-[#1A1713] p-3.5 rounded-2xl border border-[#332A1F] space-y-1.5">
              <strong className="text-[#E6CA9E] flex items-center gap-1.5 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{lang === "fa" ? "عکاسی از روبرو (Front-Facing Angle)" : "Direct Front Angle"}</span>
              </strong>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                {lang === "fa"
                  ? "دوربین هم‌سطح چشم‌ها باشد و از چرخش شدید سر یا کج کردن زاویه خودداری کنید."
                  : "Keep camera at eye level with relaxed shoulders and neutral perspective."}
              </p>
            </div>
          </div>
        </div>

        {/* Section 2: Pinterest & Viral Monetization Playbook */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <TrendingUp className="w-4 h-4 text-[#C5A880]" />
            <h3>{lang === "fa" ? "۲. فرمول وایرال شدن در پینترست و اینستاگرام" : "2. Pinterest & Instagram Viral Playbook"}</h3>
          </div>

          <div className="bg-[#1A1713] p-4 rounded-2xl border border-[#332A1F] space-y-2.5 text-xs">
            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#2C2317] text-[#E6CA9E] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                A
              </span>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                <strong className="text-white block mb-0.5">
                  {lang === "fa" ? "قلاب کنجکاوی قبل و بعد (Before/After Hook):" : "Curiosity Before/After Hook:"}
                </strong>
                {lang === "fa"
                  ? "یک عکس سلفی ساده را در کنار خروجی مو یا پرو لباس بگذارید و بنویسید: «قبل از کوتاهی/خرید، خودتو در ۵ ثانیه ببین!»"
                  : "Pair a standard selfie with the 4K render and title it: 'See your dream haircut in 5s before cutting!'"}
              </p>
            </div>

            <div className="flex items-start gap-2.5">
              <span className="w-5 h-5 rounded-full bg-[#2C2317] text-[#E6CA9E] text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                B
              </span>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                <strong className="text-white block mb-0.5">
                  {lang === "fa" ? "پین‌های عمودی با کیفیت بالا (2:3 Ratio):" : "Vertical 2:3 Pinterest Ratio:"}
                </strong>
                {lang === "fa"
                  ? "تصاویر با ابعاد عمودی ۱۰۰۰ در ۱۵۰۰ در پینترست بیشترین ضریب اشتراک‌گذاری را جذب می‌کنند."
                  : "Vertical 1000x1500px pins receive 4x more impressions and click-through rates."}
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: B2B Boutique Pricing Guide */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-white font-bold text-sm">
            <DollarSign className="w-4 h-4 text-[#C5A880]" />
            <h3>{lang === "fa" ? "۳. تعرفه خدمات به فروشگاه‌ها و آنلاین‌شاپ‌ها" : "3. Commercial Pricing Guide for Boutiques"}</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-center text-xs">
            <div className="bg-[#1C1813] p-3.5 rounded-2xl border border-[#3A3022] space-y-1">
              <span className="text-[10px] font-cinzel text-stone-400 block font-bold">STARTER PACK</span>
              <strong className="text-base font-bold text-[#E6CA9E] block">$50</strong>
              <span className="text-[10px] text-stone-300 block">
                {lang === "fa" ? "۱۰ عکس کاتالوگ لباس" : "10 Garment Fits"}
              </span>
            </div>

            <div className="bg-[#241E17] p-3.5 rounded-2xl border border-[#C5A880] space-y-1 ring-1 ring-[#C5A880]/40">
              <span className="text-[10px] font-cinzel text-[#D4AF37] block font-bold">STUDIO PRO</span>
              <strong className="text-base font-bold text-white block">$150</strong>
              <span className="text-[10px] text-stone-200 block">
                {lang === "fa" ? "۴۰ عکس + پس‌زمینه میلان" : "40 Fits + Milan Scenes"}
              </span>
            </div>

            <div className="bg-[#1C1813] p-3.5 rounded-2xl border border-[#3A3022] space-y-1">
              <span className="text-[10px] font-cinzel text-stone-400 block font-bold">HAUTE ATELIER</span>
              <strong className="text-base font-bold text-[#E6CA9E] block">$350/mo</strong>
              <span className="text-[10px] text-stone-300 block">
                {lang === "fa" ? "اشتراک ماهانه نامحدود" : "Unlimited Monthly"}
              </span>
            </div>
          </div>
        </div>

        {/* Footer Action */}
        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] font-extrabold text-xs py-3.5 rounded-xl transition-all cursor-pointer shadow-md"
          >
            {lang === "fa" ? "متوجه شدم، بازگشت به آتلیه" : "Understood, Return to Studio"}
          </button>
        </div>
      </div>
    </div>
  );
}
