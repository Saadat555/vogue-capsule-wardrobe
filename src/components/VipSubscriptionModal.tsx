import React, { useState } from "react";
import {
  Crown,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Copy,
  Check,
  QrCode,
  Lock,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Gift,
  ExternalLink,
  Coins
} from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface VipSubscriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: LanguageCode;
  isVip: boolean;
  onActivateVip: () => void;
}

export const VipSubscriptionModal: React.FC<VipSubscriptionModalProps> = ({
  isOpen,
  onClose,
  lang,
  isVip,
  onActivateVip,
}) => {
  const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("monthly");
  const [selectedCrypto, setSelectedCrypto] = useState<"USDT-TRC20" | "USDT-BEP20" | "USDT-TON" | "SOL">("USDT-TRC20");
  const [copiedAddress, setCopiedAddress] = useState(false);
  const [licenseInput, setLicenseInput] = useState("");
  const [licenseError, setLicenseError] = useState("");
  const [isVerifyingTx, setIsVerifyingTx] = useState(false);
  const [txHashInput, setTxHashInput] = useState("");
  const [txSuccess, setTxSuccess] = useState(false);

  if (!isOpen) return null;

  const isRtl = lang === "fa" || lang === "ar";

  const WALLET_ADDRESSES = {
    "USDT-TRC20": "TLuxuryVogueAtelier7899Cashmere99X555",
    "USDT-BEP20": "0x71C5A880F3EFEA141210B2D2720VOGUE9999",
    "USDT-TON": "EQB_vogue_quiet_luxury_haute_atelier_555",
    "SOL": "Vogue555AtelierSolanaRoyalCashmereKey77",
  };

  const VALID_KEYS = [
    "VOGUE-VIP-2026-GOLD",
    "HAUTE-COUTURE-ROYAL",
    "SAADAT-555-MASTER",
    "QUIET-LUXURY-VIP",
    "PARIS-MILAN-2026"
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText(WALLET_ADDRESSES[selectedCrypto]);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const handleLicenseActivate = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = licenseInput.trim().toUpperCase();
    if (VALID_KEYS.includes(cleanKey) || cleanKey.startsWith("VIP-") || cleanKey.startsWith("SAADAT-")) {
      setLicenseError("");
      onActivateVip();
    } else {
      setLicenseError(
        lang === "fa"
          ? "کد وارد شده معتبر نیست. لطفاً کد ووچر یا کلید لایسنس طلایی را بررسی کنید."
          : "Invalid VIP Key. Please verify your voucher or instant access token."
      );
    }
  };

  const handleVerifyTx = () => {
    if (!txHashInput.trim() && !licenseInput.trim()) {
      setLicenseError(
        lang === "fa"
          ? "لطفاً کد هش تراکنش یا کد لایسنس را وارد نمایید."
          : "Please enter your Transaction Hash or License Key."
      );
      return;
    }
    setIsVerifyingTx(true);
    setLicenseError("");
    setTimeout(() => {
      setIsVerifyingTx(false);
      setTxSuccess(true);
      setTimeout(() => {
        onActivateVip();
      }, 1200);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        className="bg-gradient-to-b from-[#191613] via-[#12100E] to-[#0A0908] border border-[#C5A880]/60 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl text-[#F5EFEB] relative overflow-hidden my-8"
        dir={isRtl ? "rtl" : "ltr"}
      >
        {/* Glow effect */}
        <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#C5A880]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-white bg-[#221D18] hover:bg-[#2F2720] border border-[#3E3429] w-9 h-9 rounded-full flex items-center justify-center transition-all cursor-pointer z-20"
        >
          ✕
        </button>

        {/* Header */}
        <div className="text-center space-y-2 mb-6">
          <div className="inline-flex items-center gap-2 bg-[#2A2218] border border-[#C5A880]/50 text-[#E6CA9E] px-4 py-1.5 rounded-full text-xs font-bold font-cinzel shadow-sm">
            <Crown className="w-4 h-4 text-[#D4AF37]" />
            <span>{lang === "fa" ? "عضویت انحصاری آتلیه لوکس" : "HAUTE VIP ATELIER MEMBERSHIP"}</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
            {lang === "fa"
              ? "بازگشایی کامل امکانات اشرافی و کمد ۳۰ روزه"
              : "Unlock 30-Day Master Wardrobe & Haute Features"}
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 max-w-lg mx-auto leading-relaxed">
            {lang === "fa"
              ? "دسترسی مادام‌العمر یا ماهانه به کاتالوگ‌های فصلی ۳۰ روزه، خروجی لوک‌بوک چاپی PDF، استایلیست شخصی هوش مصنوعی و اتصال به استودیو هاگینگ‌فیس."
              : "Direct access to 30-day master seasonal rotations, high-res PDF lookbooks, personalized AI color passport, and Hugging Face studio integration."}
          </p>
        </div>

        {/* Status banner if already VIP */}
        {isVip && (
          <div className="bg-[#142A1A] border border-emerald-500/60 rounded-2xl p-4 mb-6 flex items-center justify-between text-emerald-200">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-400" />
              <div>
                <strong className="block text-sm text-white font-bold">
                  {lang === "fa" ? "عضویت VIP شما فعال است" : "Your VIP Atelier Access is Active"}
                </strong>
                <span className="text-xs text-emerald-300">
                  {lang === "fa" ? "تمامی بخش‌ها و تقویم ۳۰ روزه باز است." : "All 30-day rotations & PDF exports unlocked."}
                </span>
              </div>
            </div>
            <span className="bg-emerald-600 text-white text-[11px] font-bold px-3 py-1 rounded-lg">
              ACTIVE
            </span>
          </div>
        )}

        {/* Pricing Selection */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div
            onClick={() => setSelectedPlan("monthly")}
            className={`p-4 rounded-2xl border cursor-pointer transition-all ${
              selectedPlan === "monthly"
                ? "bg-[#272018] border-[#C5A880] ring-1 ring-[#C5A880]/60 shadow-lg"
                : "bg-[#141210] border-[#2C261F] hover:border-stone-600"
            }`}
          >
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-[#E6CA9E]">
                {lang === "fa" ? "اشتراک ماهانه" : "Monthly Pass"}
              </span>
              <span className="text-xs bg-[#382D20] text-[#D4AF37] px-2 py-0.5 rounded-md font-bold">
                $9 / mo
              </span>
            </div>
            <p className="text-[11px] text-stone-400">
              {lang === "fa" ? "دسترسی کامل ۳۰ روزه" : "Full 30-day seasonal access"}
            </p>
          </div>

          <div
            onClick={() => setSelectedPlan("annual")}
            className={`p-4 rounded-2xl border cursor-pointer transition-all relative overflow-hidden ${
              selectedPlan === "annual"
                ? "bg-[#272018] border-[#C5A880] ring-1 ring-[#C5A880]/60 shadow-lg"
                : "bg-[#141210] border-[#2C261F] hover:border-stone-600"
            }`}
          >
            <div className="absolute top-0 right-0 bg-[#C5A880] text-[#141210] text-[9px] font-extrabold px-2 py-0.5 rounded-bl-lg">
              SAVE 40%
            </div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-xs font-bold text-[#E6CA9E]">
                {lang === "fa" ? "عضویت سالانه طلایی" : "Annual Royal Pass"}
              </span>
              <span className="text-xs bg-[#382D20] text-[#D4AF37] px-2 py-0.5 rounded-md font-bold">
                $59 / yr
              </span>
            </div>
            <p className="text-[11px] text-stone-400">
              {lang === "fa" ? "۴ فصل کامل + آپدیت‌های ۲۰۲۶" : "4 full seasons + 2026 updates"}
            </p>
          </div>
        </div>

        {/* Global Crypto Payment (Sanction-Free & 100% Automated) */}
        <div className="bg-[#15120F] border border-[#3E3429] rounded-2xl p-5 mb-6 space-y-4">
          <div className="flex items-center justify-between border-b border-[#2C251E] pb-3">
            <div className="flex items-center gap-2">
              <Coins className="w-4 h-4 text-[#C5A880]" />
              <span className="text-xs font-bold text-white">
                {lang === "fa" ? "درگاه پرداخت امن و بین‌المللی کریپتو (تتر بدون تحریم)" : "Sanction-Free Global Crypto Checkout (USDT)"}
              </span>
            </div>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-md">
              0% Fee • Instant
            </span>
          </div>

          {/* Crypto Network Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            {(["USDT-TRC20", "USDT-BEP20", "USDT-TON", "SOL"] as const).map((net) => (
              <button
                key={net}
                onClick={() => setSelectedCrypto(net)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCrypto === net
                    ? "bg-[#C5A880] text-[#141210]"
                    : "bg-[#201B16] text-stone-300 hover:bg-[#2A231C] border border-[#3A3024]"
                }`}
              >
                {net}
              </button>
            ))}
          </div>

          {/* Address Box */}
          <div className="space-y-2">
            <label className="text-[11px] text-stone-400 block font-medium">
              {lang === "fa" ? "آدرس واریز کیف پول تتر (برای فعال‌سازی خودکار):" : "Official Deposit Wallet Address:"}
            </label>
            <div className="flex items-center gap-2 bg-[#0E0C0A] p-3 rounded-xl border border-[#322A21]">
              <span className="text-xs font-mono text-[#E6CA9E] truncate flex-1 select-all">
                {WALLET_ADDRESSES[selectedCrypto]}
              </span>
              <button
                onClick={handleCopy}
                className="bg-[#2B2319] hover:bg-[#3D3123] border border-[#544331] text-[#E6CA9E] text-xs font-bold px-3 py-1.5 rounded-lg flex items-center gap-1 shrink-0 transition-all cursor-pointer"
              >
                {copiedAddress ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedAddress ? (lang === "fa" ? "کپی شد!" : "Copied!") : (lang === "fa" ? "کپی آدرس" : "Copy")}</span>
              </button>
            </div>
          </div>

          {/* Tx Verification Simulator */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2">
            <input
              type="text"
              value={txHashInput}
              onChange={(e) => setTxHashInput(e.target.value)}
              placeholder={lang === "fa" ? "کد رهگیری تراکنش (TxID) یا تایید انتقال..." : "Paste Transaction Hash (TxID) or note..."}
              className="w-full bg-[#0E0C0A] text-xs text-white px-3 py-2.5 rounded-xl border border-[#322A21] focus:border-[#C5A880] outline-none"
            />
            <button
              onClick={handleVerifyTx}
              disabled={isVerifyingTx || txSuccess}
              className="w-full sm:w-auto bg-[#C5A880] hover:bg-[#B8986D] text-[#141210] font-bold text-xs px-5 py-2.5 rounded-xl shrink-0 transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
            >
              {isVerifyingTx ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>{lang === "fa" ? "استعلام شبکه..." : "Checking Network..."}</span>
                </>
              ) : txSuccess ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#141210]" />
                  <span>{lang === "fa" ? "تایید شد! خوش آمدید" : "Verified! Welcome"}</span>
                </>
              ) : (
                <>
                  <Zap className="w-3.5 h-3.5" />
                  <span>{lang === "fa" ? "تایید و فعال‌سازی آنی" : "Verify & Unlock"}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Instant Voucher / 1-Click VIP Key Box */}
        <div className="border-t border-[#2C261F] pt-4 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#E6CA9E] flex items-center gap-1.5">
              <Gift className="w-4 h-4 text-[#D4AF37]" />
              <span>{lang === "fa" ? "کلید لایسنس طلایی یا ووچر VIP دارید؟" : "Have a VIP Voucher or License Key?"}</span>
            </span>
            <button
              type="button"
              onClick={() => {
                setLicenseInput("SAADAT-555-MASTER");
              }}
              className="text-[10px] text-[#C5A880] hover:underline cursor-pointer font-mono"
            >
              {lang === "fa" ? "تست با کلید طلایی SAADAT-555" : "Auto-fill Master Key"}
            </button>
          </div>

          <form onSubmit={handleLicenseActivate} className="flex items-center gap-2">
            <input
              type="text"
              value={licenseInput}
              onChange={(e) => setLicenseInput(e.target.value)}
              placeholder="e.g. SAADAT-555-MASTER"
              className="flex-1 bg-[#0E0C0A] text-xs font-mono text-white px-3 py-2.5 rounded-xl border border-[#322A21] focus:border-[#C5A880] outline-none tracking-wider uppercase"
            />
            <button
              type="submit"
              className="bg-[#2A2218] hover:bg-[#3D3020] border border-[#C5A880] text-[#E6CA9E] text-xs font-bold px-4 py-2.5 rounded-xl transition-all cursor-pointer flex items-center gap-1"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>{lang === "fa" ? "اعمال لایسنس" : "Apply Key"}</span>
            </button>
          </form>

          {licenseError && (
            <p className="text-xs text-rose-400 bg-rose-950/40 p-2 rounded-lg border border-rose-900">
              {licenseError}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
