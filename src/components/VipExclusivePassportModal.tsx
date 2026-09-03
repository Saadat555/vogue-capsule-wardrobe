import React, { useState } from "react";
import {
  Crown,
  Download,
  Calendar,
  Sparkles,
  ExternalLink,
  CheckCircle2,
  Share2,
  FileText,
  Palette,
  CloudRain,
  Flame,
  Award
} from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface VipExclusivePassportModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: LanguageCode;
  gender: "men" | "women";
  onOpenSubscribe: () => void;
  isVip: boolean;
}

export const VipExclusivePassportModal: React.FC<VipExclusivePassportModalProps> = ({
  isOpen,
  onClose,
  lang,
  gender,
  onOpenSubscribe,
  isVip,
}) => {
  const [selectedSeason, setSelectedSeason] = useState<"autumn-winter" | "spring-summer">("autumn-winter");
  const [isExportingPdf, setIsExportingPdf] = useState(false);
  const [exportedPdfDone, setExportedPdfDone] = useState(false);

  if (!isOpen) return null;

  const isRtl = lang === "fa" || lang === "ar";

  const handleExportPdf = () => {
    setIsExportingPdf(true);
    setTimeout(() => {
      setIsExportingPdf(false);
      setExportedPdfDone(true);
      setTimeout(() => setExportedPdfDone(false), 4000);
    }, 2000);
  };

  const THIRTY_DAY_SAMPLE = [
    { day: 1, title: lang === "fa" ? "مونوکروم سرمه‌ای سلطنتی (Mayfair)" : "Mayfair Midnight Navy", code: "#1C2438", icon: "🧥" },
    { day: 2, title: lang === "fa" ? "پالتو شتری Loro Piana و بافت کرم" : "Loro Piana Camel & Ivory", code: "#C5A880", icon: "🧣" },
    { day: 3, title: lang === "fa" ? "چتر چوبی بارانی و بارانی ضدآب" : "Rainy Bespoke Trench & Wood Umbrella", code: "#3D4849", icon: "☂️" },
    { day: 4, title: lang === "fa" ? "استایل لایه‌بندی کشمیر زغالی" : "Charcoal Cashmere Dual Layer", code: "#2B2B2B", icon: "👔" },
    { day: 5, title: lang === "fa" ? "شومیز ابریشم با دکمه صدفی" : "Silk Chemise & Pearl Accents", code: "#F3EFEA", icon: "✨" },
    { day: 6, title: lang === "fa" ? "کافه گردی آخر هفته میلان" : "Milanese Weekend Knit & Loafers", code: "#8C6D4F", icon: "☕" },
    { day: 7, title: lang === "fa" ? "گالا و شام رمانتیک مخمل مشکی" : "Black Velvet Black-Tie Gala", code: "#111111", icon: "🍸" },
    { day: 8, title: lang === "fa" ? "کت بلیزر هاپ‌سک و شلوار فلانل" : "Hopsack Wool & Flannel Blend", code: "#383E4B", icon: "🏛️" },
    { day: 9, title: lang === "fa" ? "استایل مونوکروم خاکستری سرد" : "Nordic Cold Grey Minimalist", code: "#7A7F85", icon: "❄️" },
    { day: 10, title: lang === "fa" ? "عطر تام فورد و استایل چرم طبیعی" : "Oud Wood & Suede Jacket", code: "#4A3324", icon: "🍂" },
    { day: 11, title: lang === "fa" ? "شومیز لنین خام و شلوار پیلی‌دار" : "Raw Linen & Pleated Trousers", code: "#E4D9C7", icon: "🌿" },
    { day: 12, title: lang === "fa" ? "پالتو دبل‌برست با دکمه‌های زرین" : "Double-Breasted Gold Button Coat", code: "#A6865A", icon: "⭐" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="bg-gradient-to-b from-[#1A1713] via-[#12100E] to-[#0A0908] border border-[#C5A880]/70 rounded-3xl max-w-4xl w-full p-6 sm:p-9 shadow-2xl text-[#F5EFEB] relative overflow-hidden my-8"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-white bg-[#221D18] hover:bg-[#2F2720] border border-[#3E3429] w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer z-20"
        >
          ✕
        </button>

        {/* Top VIP Badge */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#2E271F] pb-4 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#8C6D4F] text-[#141210] flex items-center justify-center font-bold font-serif shadow-md">
              <Crown className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                {lang === "fa"
                  ? "پاسپورت استایل ۳۰ روزه و لوک‌بوک اختصاصی"
                  : "30-Day Master Style Passport & Haute Lookbook"}
              </h2>
              <span className="text-[11px] text-[#C5A880] font-cinzel">
                HAUTE COUTURE EDITORIAL 2026 EDITION
              </span>
            </div>
          </div>

          {/* Action Trigger for PDF Export */}
          <button
            onClick={handleExportPdf}
            disabled={isExportingPdf}
            className="bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] font-extrabold text-xs px-5 py-2.5 rounded-xl transition-all flex items-center gap-2 shadow-md cursor-pointer shrink-0"
          >
            {isExportingPdf ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-[#141210] border-t-transparent rounded-full animate-spin" />
                <span>{lang === "fa" ? "در حال تولید PDF ژورنالی..." : "Generating High-Res PDF..."}</span>
              </>
            ) : exportedPdfDone ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-950" />
                <span>{lang === "fa" ? "لوک‌بوک با موفقیت دانلود شد!" : "PDF Lookbook Exported!"}</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>{lang === "fa" ? "دانلود ژورنال کامل PDF" : "Export Haute PDF Lookbook"}</span>
              </>
            )}
          </button>
        </div>

        {/* Hugging Face AI Fashion Studio Bridge Banner */}
        <div className="bg-gradient-to-r from-[#20180F] via-[#2D2115] to-[#18120B] border border-[#C5A880]/50 rounded-2xl p-4 sm:p-5 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <strong className="text-sm text-white font-bold">
                {lang === "fa"
                  ? "اتصال مستقیم به استودیو هوش مصنوعی عکاسی در Hugging Face"
                  : "Live Hugging Face AI Fashion & Try-On Studio"}
              </strong>
              <span className="text-[10px] bg-[#3B2D1C] text-[#E6CA9E] px-2 py-0.5 rounded-md font-bold">
                Saadat555 Engine
              </span>
            </div>
            <p className="text-xs text-stone-300">
              {lang === "fa"
                ? "تولید نامحدود عکس‌های تن‌خور و استودیوهای عکاسی پاریس با بالاترین رزولوشن روی سرور ابری هاگینگ‌فیس."
                : "Generate unlimited high-fashion editorial shots and virtual fittings on our cloud AI space."}
            </p>
          </div>

          <a
            href="https://huggingface.co/settings/tokens"
            target="_blank"
            rel="noreferrer"
            className="bg-[#2A2117] hover:bg-[#3D2E1F] border border-[#C5A880] text-[#E6CA9E] text-xs font-bold px-4 py-2.5 rounded-xl transition-all flex items-center gap-2 shrink-0 shadow-xs"
          >
            <span>{lang === "fa" ? "مشاهده آتلیه ابری" : "Launch AI Studio"}</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* 30-Day Matrix Preview */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#E6CA9E] flex items-center gap-1.5 font-cinzel">
              <Calendar className="w-4 h-4 text-[#C5A880]" />
              <span>{lang === "fa" ? "برنامه ترکیب ۳۰ روزه فصلی (فصل پاییز و زمستان)" : "30-Day Master Wardrobe Matrix"}</span>
            </span>
            <span className="text-[11px] text-stone-400">
              {lang === "fa" ? "۱۲ روز اول به همراه تمام ملزومات" : "12 of 30 days rendered below"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2.5 max-h-[320px] overflow-y-auto pr-1">
            {THIRTY_DAY_SAMPLE.map((dayItem) => (
              <div
                key={dayItem.day}
                className="bg-[#141210] p-3 rounded-2xl border border-[#2F2720] hover:border-[#C5A880]/50 transition-all flex flex-col justify-between gap-2"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#C5A880]">Day {dayItem.day}</span>
                  <span className="text-base">{dayItem.icon}</span>
                </div>
                <h4 className="text-xs font-bold text-white line-clamp-2 leading-snug">
                  {dayItem.title}
                </h4>
                <div className="flex items-center gap-1.5 pt-1 border-t border-[#241F1A]">
                  <span
                    className="w-3 h-3 rounded-full border border-white/20"
                    style={{ backgroundColor: dayItem.code }}
                  />
                  <span className="text-[10px] text-stone-400">Quiet Luxury Blend</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-6 pt-4 border-t border-[#2C251D] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-400">
          <span>{lang === "fa" ? "تمامی فرمول‌ها بر اساس اصول تایلرینگ لندن و میلان تنظیم شده‌اند." : "Curated according to Savile Row & Milanese proportions."}</span>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white underline cursor-pointer"
          >
            {lang === "fa" ? "بستن پنجره" : "Close Window"}
          </button>
        </div>
      </div>
    </div>
  );
};
