import { LanguageCode } from "./translations";
import { RealOutfitAdvice } from "../types";
import { MASTER_ADVICE_DATABASE } from "../data/expertAdvice";

export const LOCALIZED_WEATHER: Record<
  string,
  Record<LanguageCode, { name: string; temp: string; fabricAdvice: string; layerCount: string }>
> = {
  "warm-sunny": {
    fa: {
      name: "آفتابی و گرم (۲۵ تا ۳۵ درجه)",
      temp: "۲۵° - ۳۵°C",
      fabricAdvice: "پارچه‌های تنفس‌پذیر: ۱۰۰٪ لینن، پوپلین پنبه‌ای سبک، کتان نازک و لباس‌های خنک تابستانی بدون آستر ضخیم.",
      layerCount: "تک لایه یا کت سبک خنک",
    },
    en: {
      name: "Sunny & Warm (25° to 35°C)",
      temp: "25° - 35°C",
      fabricAdvice: "Breathable natural fabrics: 100% Normandy linen, lightweight cotton poplin, unlined tropical wool, and seersucker.",
      layerCount: "Single breathable layer or unlined jacket",
    },
    fr: {
      name: "Ensoleillé & Chaud (25° à 35°C)",
      temp: "25° - 35°C",
      fabricAdvice: "Tissus respirants: 100% lin de Normandie, popeline de coton légère, laine froide sans doublure et seersucker.",
      layerCount: "Couche unique respirante ou veste non doublée",
    },
    it: {
      name: "Soleggiato & Caldo (25° a 35°C)",
      temp: "25° - 35°C",
      fabricAdvice: "Tessuti traspiranti: 100% lino naturale, popeline di cotone leggero, lana fresca sfoderata e seersucker.",
      layerCount: "Strato singolo traspirante o giacca destrutturata",
    },
    ar: {
      name: "مشمس ودافئ (٢٥ إلى ٣٥ درجة)",
      temp: "٢٥° - ٣٥° م",
      fabricAdvice: "أقمشة طبيعية مسامية: كتان نقي ١٠٠٪، بوبلين قطني خفيف، صوف استوائي غير مبطن بدون حشوات سميكة.",
      layerCount: "طبقة واحدة مسامية أو بليزر صيفي خفيف",
    },
  },
  "mild-spring": {
    fa: {
      name: "بهاری و معتدل (۱۸ تا ۲۴ درجه)",
      temp: "۱۸° - ۲۴°C",
      fabricAdvice: "پارچه‌های چهارفصل: پیراهن‌های کتان آکسفورد، بافت‌های ظریف بهاره و شلوارهای پارچه‌ای یا جین کلاسیک.",
      layerCount: "دو لایه متوازن (پیراهن + کت تک/ژاکت)",
    },
    en: {
      name: "Mild Spring / Autumn (18° to 24°C)",
      temp: "18° - 24°C",
      fabricAdvice: "Four-season staples: 2-ply Oxford cotton, superfine merino knitwear, and tailored tropical wool trousers.",
      layerCount: "Balanced 2 layers (Shirt + Blazer / Light Knit)",
    },
    fr: {
      name: "Printanier & Tempéré (18° à 24°C)",
      temp: "18° - 24°C",
      fabricAdvice: "Incontournables 4-saisons: coton Oxford double fil, maille fine mérinos et pantalons en laine peignée.",
      layerCount: "2 couches équilibrées (Chemise + Blazer / Maille légère)",
    },
    it: {
      name: "Primaverile & Mite (18° a 24°C)",
      temp: "18° - 24°C",
      fabricAdvice: "Capi 4 stagioni: cotone Oxford ritorto, maglieria fine merino e pantaloni sartoriali in lana pettinata.",
      layerCount: "2 strati bilanciati (Camicia + Blazer / Maglia fine)",
    },
    ar: {
      name: "ربيعي ومعتدل (١٨ إلى ٢٤ درجة)",
      temp: "١٨° - ٢٤° م",
      fabricAdvice: "أقمشة أربعة فصول: قمصان قطن أكسفورد، كنزات صوف ميرينو ناعمة وبنطال صوف مهيكل.",
      layerCount: "طبقتان متوازنتان (قميص + بليزر خفيف أو سترة)",
    },
  },
  "chilly-autumn": {
    fa: {
      name: "خنک و بارانی پاییزی (۱۰ تا ۱۷ درجه)",
      temp: "۱۰° - ۱۷°C",
      fabricAdvice: "بافت‌های گرم پاییزی: پلیور پشم مرینو ظریف، ترنچ‌کت ضدآب، کت‌های جیر و کاردیگان‌های دکمه‌دار.",
      layerCount: "سه لایه هوشمند (پیراهن + بافت ظریف + ترنچ‌کت یا کت تک)",
    },
    en: {
      name: "Chilly & Breezy (10° to 17°C)",
      temp: "10° - 17°C",
      fabricAdvice: "Autumnal textures: Mid-weight Merino wool, Gabardine weatherproof trench, flannel, and suede jackets.",
      layerCount: "Smart 3 layers (Shirt + Fine Knit + Trench / Blazer)",
    },
    fr: {
      name: "Frais & Pluvieux (10° à 17°C)",
      temp: "10° - 17°C",
      fabricAdvice: "Textures automnales: Laine mérinos mi-épaisse, trench en gabardine déperlant, flanelle et daim.",
      layerCount: "3 couches élégantes (Chemise + Maille + Trench / Veste)",
    },
    it: {
      name: "Fresco & Piovoso (10° a 17°C)",
      temp: "10° - 17°C",
      fabricAdvice: "Texture autunnali: Lana merino a peso medio, trench idrorepellente in gabardine, flanella e camoscio.",
      layerCount: "3 strati armoniosi (Camicia + Maglia fine + Trench / Giacca)",
    },
    ar: {
      name: "بارد وماطر خريفي (١٠ إلى ١٧ درجة)",
      temp: "١٠° - ١٧° م",
      fabricAdvice: "أنسجة خريفية دافئة: صوف ميرينو متوسط، معطف ترنش مقاوم للماء، فلانيل وجلود شمواه طبيعية.",
      layerCount: "٣ طبقات ذكية (قميص + كنزة ناعمة + معطف خفيف)",
    },
  },
  "cold-rain-snow": {
    fa: {
      name: "سرد، برفی و زمستانه (زیر ۱۰ درجه)",
      temp: "< ۱۰°C",
      fabricAdvice: "پوشش‌های گرم زمستانی: پالتو پشمی یا کشمیری، پلیورهای یقه اسکی گرم و بوت‌های چرمی مقاوم.",
      layerCount: "سه یا چهار لایه گرم (یقه اسکی + پلیور/کت + پالتو بلند)",
    },
    en: {
      name: "Freezing & Winter Cold (< 10°C)",
      temp: "< 10°C",
      fabricAdvice: "Noble winter insulation: Pure double-faced cashmere overcoats, heavyweight Shetland wool, rollneck knits, and storm-welt boots.",
      layerCount: "3-4 thermal layers (Rollneck + Tailored Jacket + Overcoat)",
    },
    fr: {
      name: "Glacial & Hivernal (< 10°C)",
      temp: "< 10°C",
      fabricAdvice: "Isolation noble: Manteaux en pur cachemire double face, laine Shetland, cols roulés et bottines en cuir.",
      layerCount: "3-4 couches chaudes (Col roulé + Veste + Manteau long)",
    },
    it: {
      name: "Freddo Invernale & Neve (< 10°C)",
      temp: "< 10°C",
      fabricAdvice: "Isolamento termico nobile: Cappotti in puro cashmere double-face, maglioni dolcevita e stivaletti in pelle.",
      layerCount: "3-4 strati protettivi (Dolcevita + Giacca + Cappotto lungo)",
    },
    ar: {
      name: "شديد البرودة وشتوي (< ١٠ درجات)",
      temp: "< ١٠° م",
      fabricAdvice: "عزل شتوي فاخر: معاطف كشمير طبيعي مزدوجة، صوف شتلاند سميك، كنزات بياقة عالية وبوت جلدي متين.",
      layerCount: "٣ إلى ٤ طبقات دافئة (ياقة عالية + بليزر + معطف طويل)",
    },
  },
};

export const LOCALIZED_BODY_PROPORTIONS: Record<
  string,
  Record<LanguageCode, { name: string; silhouetteTip: string; suitCutRecommendation: string }>
> = {
  athletic: {
    fa: {
      name: "ورزشکاری و متناسب (سینه پهن، کمر باریک)",
      silhouetteTip: "لباس‌های با اندازه فیت و متناسب بپوشید تا تعادل بالاتنه حفظ شود و خیلی گشاد یا خیلی جذب نباشد.",
      suitCutRecommendation: "کت‌های تک‌سینه با شلوار راسته استاندارد برای نمایش متناسب فرم بدن.",
    },
    en: {
      name: "Athletic & V-Taper (Broad Shoulders, Trim Waist)",
      silhouetteTip: "Choose gently tapered tailored silhouettes to honor the natural V-taper without pulling across the chest.",
      suitCutRecommendation: "Single-breasted soft-shoulder jackets paired with mid-rise classic straight trousers.",
    },
    fr: {
      name: "Athlétique & Proportionné (Épaules Larges, Taille Fine)",
      silhouetteTip: "Privilégiez les coupes ajustées avec aisance pour respecter la silhouette en V naturelle.",
      suitCutRecommendation: "Vestes droites un bouton ou deux, épaules déstructurées et pantalons droits.",
    },
    it: {
      name: "Atletico & Proporzionato (Spalle Larghe, Vita Stretta)",
      silhouetteTip: "Scegli tagli sartoriali sagomati senza eccessi per valorizzare le proporzioni naturali.",
      suitCutRecommendation: "Giacche monopetto con spalla morbida napoletana e pantaloni a gamba dritta.",
    },
    ar: {
      name: "رياضي ومتناسق (أكتاف عريضة وخصر متناسق)",
      silhouetteTip: "اختر أزياء متناسقة تبرز القوام الرياضي دون أن تكون ضيقة جداً أو فضفاضة.",
      suitCutRecommendation: "سترة بزرين مع بنطال مستقيم القصة لإبراز التوازن الجسدي الوقور.",
    },
  },
  "lean-tall": {
    fa: {
      name: "کشیده و لاغراندام (قد بلند، شانه باریک)",
      silhouetteTip: "استفاده از لباس‌های دارای طرح ملایم یا لایه‌بندی (مانند پیراهن زیر پلیور) به استایل شما جلوه بهتری می‌دهد.",
      suitCutRecommendation: "کت‌های ساختاریافته و شلوارهای پارچه‌ای راسته برای ایجاد تعادل قدی مناسب.",
    },
    en: {
      name: "Tall & Slender (Vertical Elongation, Slim Frame)",
      silhouetteTip: "Embrace layering (shirt under fine knit under overcoat) and subtle textures to add tasteful horizontal presence.",
      suitCutRecommendation: "Structured double-breasted blazers and pleated trousers to anchor vertical height.",
    },
    fr: {
      name: "Élancé & Fin (Grande Taille, Lignes Épurées)",
      silhouetteTip: "Multipliez les superpositions et les textures raffinées pour apporter de la prestance.",
      suitCutRecommendation: "Blazers croisés structurés et pantalons à pinces pour équilibrer la stature.",
    },
    it: {
      name: "Slanciato & Longilineo (Alto, Corporatura Sottile)",
      silhouetteTip: "Usa la stratificazione e le armature dei tessuti per dare maggiore corpo e pienezza alla figura.",
      suitCutRecommendation: "Giacche doppiopetto strutturate e pantaloni con pinces per bilanciare l'altezza.",
    },
    ar: {
      name: "طويل ورشيق (قامة ممتدة، بنية نحيفة)",
      silhouetteTip: "اعتمد على نظام الطبقات الذكي والخامات المنسوجة لمنح القوام حضوراً فخماً ومتوازناً.",
      suitCutRecommendation: "سترات مزدوجة الأزرار مع بنطال بكسرات كلاسيكية لموازنة الطول.",
    },
  },
  "broad-stout": {
    fa: {
      name: "تنومند و چهارشانه / پرحجم",
      silhouetteTip: "استفاده از رنگ‌های تیره مات و ست‌های مونوکروم (هم‌رنگ) اندام شما را کشیده‌تر و جمع‌وجورتر نشان می‌دهد.",
      suitCutRecommendation: "کت‌های ساده تک‌رنگ با یقه برگردان استاندارد و شلوارهای فاق‌متوسط راحت.",
    },
    en: {
      name: "Broad, Sturdy & Full-Bodied Frame",
      silhouetteTip: "Adopt monochrome dark palettes and vertical lapel lines to streamline the silhouette with noble authority.",
      suitCutRecommendation: "Single-breasted 2-button jackets with clean notched lapels and fluid draping wool trousers.",
    },
    fr: {
      name: "Carrure Forte & Robuste",
      silhouetteTip: "Adoptez des palettes sombres monochromes et des lignes verticales pour affiner la silhouette.",
      suitCutRecommendation: "Vestes droites 2 boutons à revers crantés nets et pantalons fluides bien coupés.",
    },
    it: {
      name: "Robusto & Corpulento",
      silhouetteTip: "Punta su look monocromatici scuri e linee verticali pulite per donare slancio e regalità.",
      suitCutRecommendation: "Giacche monopetto a due bottoni con revers classici e pantaloni a vita media.",
    },
    ar: {
      name: "عريض البنية / ممتلئ القوام",
      silhouetteTip: "اعتمد على الألوان الداكنة الموحدة والخطوط الطولية لتمنح القوام رشاقة وهيبة وقورة.",
      suitCutRecommendation: "سترات أحادية الصدر بزرين وياقة كلاسيكية مع بنطال صوفي مريح وانسيابي.",
    },
  },
  hourglass: {
    fa: {
      name: "ساعت شنی (تعادل بالاتنه و پایین‌تنه با کمر باریک)",
      silhouetteTip: "تاکید ملایم بر خط کمر با کمربند یا برش‌های متناسب برای جلوه ظریف و اشرافی.",
      suitCutRecommendation: "کت‌های کمربنددار، دامن‌های میدی پلیسه یا راسته و شلوارهای فاق‌بلند خوش‌دوخت.",
    },
    en: {
      name: "Hourglass (Balanced Shoulders & Hips, Defined Waist)",
      silhouetteTip: "Highlight natural waist definition with tailored belted trench coats and fluid draping silk.",
      suitCutRecommendation: "Wrap coats, belted blazers, high-rise tailored trousers, and A-line midi silhouettes.",
    },
    fr: {
      name: "Sablier (Épaules et Hanches Équilibrées, Taille Marquée)",
      silhouetteTip: "Soulignez délicatement la taille avec des ceintures fines et des étoffes fluides.",
      suitCutRecommendation: "Vestes ceinturées, jupes midi élégantes et pantalons taille haute.",
    },
    it: {
      name: "Clessidra (Spalle e Fianchi Equilibrati, Vita Sottile)",
      silhouetteTip: "Valorizza il punto vita con capi sartoriali avvolgenti e tessuti dalla caduta morbida.",
      suitCutRecommendation: "Giacche con cintura, pantaloni a vita alta e gonne midi a pieghe sartoriali.",
    },
    ar: {
      name: "الساعة الرملية (أكتاف وأرداف متناسقة وخصر محدد)",
      silhouetteTip: "إبراز خط الخصر بأناقة راقية عبر المعاطف ذات الأحزمة والقصات الانسيابية.",
      suitCutRecommendation: "سترات بحزام خصر، تنانير ميدي مهيكلة وبنطال بخصر مرتفع أنيق.",
    },
  },
};

export const LOCALIZED_SKIN_UNDERTONES: Record<
  string,
  Record<LanguageCode, { name: string; bestMetals: string; baseColors: string[]; avoidColors: string[] }>
> = {
  "warm-golden": {
    fa: {
      name: "گرم، گندمی و طلایی (Warm Golden / Olive)",
      bestMetals: "طلای زرد، رزگلد و برنج کهنه‌نما (Yellow & Rose Gold)",
      baseColors: ["کرم شیری (Ecru)", "سبز زیتونی (Olive)", "قهوه‌ای بلوطی (Chestnut)", "شتری اشرافی (Camel)"],
      avoidColors: ["طوسی یخی بسیار سرد", "سفید یخچالی براق مصنوعی", "آبی کاربنی نئونی"],
    },
    en: {
      name: "Warm Golden, Honey & Mediterranean Olive",
      bestMetals: "Yellow Gold, Brushed Rose Gold, and Antique Brass",
      baseColors: ["Raw Ecru Cream", "Tuscan Olive Green", "Chestnut Brown", "Noble Camel"],
      avoidColors: ["Icy Stark Blue", "Harsh Bleached White", "Neon Cool Purples"],
    },
    fr: {
      name: "Doré Chaud, Miel & Teint Olive",
      bestMetals: "Or Jaune, Or Rose Brossé et Laiton Antique",
      baseColors: ["Écru Naturel", "Vert Olive Toscan", "Marron Châtaigne", "Poil de Chameau"],
      avoidColors: ["Gris Glacé Livide", "Blanc Pur Synthétique", "Violet Néon Froid"],
    },
    it: {
      name: "Caldo Dorato, Ambrato & Mediterraneo",
      bestMetals: "Oro Giallo, Oro Rosa Satinato e Ottone Brunito",
      baseColors: ["Panna / Ecrù", "Verde Oliva Toscano", "Marrone Castagna", "Cammello Nobile"],
      avoidColors: ["Grigio Ghiaccio Eccessivo", "Bianco Ottico Sintetico", "Colori Neon Freddi"],
    },
    ar: {
      name: "دافئ ذهبي، حنطي وبشرة زيتونية",
      bestMetals: "الذهب الأصفر، الذهب الوردي والنحاس العتيق",
      baseColors: ["السكري / الإيكرو", "الأخضر الزيتوني", "البني الكستنائي", "البيج الجملي الملكي"],
      avoidColors: ["الرمادي الثلجي الشاحب", "الأبيض الساطع الصناعي", "الألوان الفسفورية الفاقعة"],
    },
  },
  "cool-rosy": {
    fa: {
      name: "سرد، روشن و مهتابی (Cool Rosy / Fair Porcelain)",
      bestMetals: "پلاتین، نقره ۹۲۵ و طلای سفید صیقلی (Platinum & White Gold)",
      baseColors: ["سرمه‌ای عمیق (Midnight Navy)", "طوسی زغالی (Charcoal)", "سفید آهاردار (Crisp White)", "زرشکی باوقار (Burgundy)"],
      avoidColors: ["خردلی کدر", "نارنجی تند", "کرم متمایل به زرد چرک"],
    },
    en: {
      name: "Cool Rosy, Porcelain & Northern Undertone",
      bestMetals: "Platinum, 925 Sterling Silver, and Crisp White Gold",
      baseColors: ["Midnight Navy", "Charcoal Slate", "Crisp Poplin White", "Noble Burgundy"],
      avoidColors: ["Dull Mustard", "Muddy Terracotta Orange", "Yellowed Dirty Creams"],
    },
    fr: {
      name: "Froid Rosé, Porcelaine & Teint Nordique",
      bestMetals: "Platine, Argent 925 et Or Blanc Poli",
      baseColors: ["Bleu Nuit Profond", "Gris Anthracite", "Blanc Popeline Pur", "Bordeaux Aristocrate"],
      avoidColors: ["Moutarde Terne", "Orange Terreux", "Écru Jauni"],
    },
    it: {
      name: "Freddo Rosato, Porcellana & Nordico",
      bestMetals: "Platino, Argento 925 e Oro Bianco Lucido",
      baseColors: ["Blu Notte Profondo", "Grigio Antracite", "Bianco Puro Oxford", "Bordeaux Nobile"],
      avoidColors: ["Senape Opaco", "Arancione Ruggine Spento", "Giallastri Sporchi"],
    },
    ar: {
      name: "بارد وردي، بشرة فاتحة ولؤلؤية",
      bestMetals: "البلاتين، الفضة النقية ۹۲۵ والذهب الأبيض اللامع",
      baseColors: ["الكحلي الداكن", "الرمادي الفحمي", "الأبيض الناصع", "العنابي الملكي (بورغندي)"],
      avoidColors: ["الخردلي الباهت", "البرتقالي الصارخ", "السكري المصفر"],
    },
  },
  "neutral-balanced": {
    fa: {
      name: "خنثی و متعادل (Neutral Balanced Undertone)",
      bestMetals: "هر دو نوع فلزات سرد و گرم (طلای زرد و نقره به شکل ترکیبی)",
      baseColors: ["طوسی موشی (Taupe)", "سرمه‌ای کلاسیک (Navy)", "سبز سدری تیره (Sage)", "نسکافه‌ای (Mocha)"],
      avoidColors: ["رنگ‌های نئونی تند و فسفوری"],
    },
    en: {
      name: "Neutral & Versatile Balanced Undertone",
      bestMetals: "Mixed Two-Tone Metals (Yellow Gold & Brushed Silver together)",
      baseColors: ["Savile Row Navy", "Earthy Taupe", "Deep Sage Green", "Espresso Mocha"],
      avoidColors: ["Loud Neon Synthetics", "Overly Saturated Acid Colors"],
    },
    fr: {
      name: "Neutre & Équilibré Polyvalent",
      bestMetals: "Mélange Deux Tons (Or Jaune et Argent Satiné)",
      baseColors: ["Bleu Marine Savile Row", "Taupe Minéral", "Vert Sauge Sombre", "Moka Expresso"],
      avoidColors: ["Couleurs Néon Tapageuses", "Teintes Acides Surchargées"],
    },
    it: {
      name: "Neutro & Poliedrico Equilibrato",
      bestMetals: "Bicolore (Oro Giallo e Argento Spazzolato Insieme)",
      baseColors: ["Blu Sartoriale", "Tortora Nobile", "Salvia Scuro", "Moka Intenso"],
      avoidColors: ["Colori Fluorescenti", "Tinte Ipersature Stridenti"],
    },
    ar: {
      name: "محايد ومتوازن عالمي",
      bestMetals: "المعادن المزدوجة (الذهب الأصفر والفضة معاً بتناغم)",
      baseColors: ["الكحلي الكلاسيكي", "الرمادي الترابي (توب)", "الأخضر المريمي الداكن", "الموكا الفاخر"],
      avoidColors: ["الألوان الفسفورية الساطعة والمصطنعة"],
    },
  },
};

export const LOCALIZED_MIRROR_CHECKS: Record<LanguageCode, { id: number; title: string; desc: string }[]> = {
  fa: [
    { id: 1, title: "یقه پیراهن و قرارگیری کت", desc: "یقه پیراهن پشت گردن حدود ۱ تا ۱.۵ سانتی‌متر از یقه کت بیرون بزند و کاملاً صاف باشد." },
    { id: 2, title: "طول آستین و سرآستین", desc: "سرآستین پیراهن دقیقاً ۱ تا ۲ سانتی‌متر از انتهای آستین کت نمایان باشد." },
    { id: 3, title: "ریزش پاچه شلوار روی کفش", desc: "دمپای شلوار چین‌خوردگی زیاد نداشته باشد و شکستگی تک‌چین ملایم روی کفش ایجاد کند." },
    { id: 4, title: "هماهنگی چرم‌ها و فلزات", desc: "رنگ چرم کفش و کمربند در یک خانواده باشد و رنگ سگک با بند ساعت همخوانی داشته باشد." },
    { id: 5, title: "تمیزی، آراستگی و پرزگیری", desc: "کفش‌ها کاملاً واکس‌خورده و سطح لباس فاقد پرز، لکه یا چروک باشد." },
  ],
  en: [
    { id: 1, title: "Shirt Collar & Jacket Balance", desc: "The shirt collar must stand 1 to 1.5 cm above the jacket collar cleanly behind the neck." },
    { id: 2, title: "Sleeve Length & Cuff Exposure", desc: "Exactly 1 to 2 cm of clean shirt cuff should peek below the jacket sleeve edge." },
    { id: 3, title: "Trouser Inseam & Break", desc: "Trousers should drape in a clean half-break with no bulky accordion folds at the ankle." },
    { id: 4, title: "Leather & Metal Harmonization", desc: "Shoe and belt leather must belong to the exact same tone; watch hardware matches buckle metal." },
    { id: 5, title: "Impeccable Grooming & Shine", desc: "Shoes are well-polished with no scuffs; garment surface is lint-free and steam-pressed." },
  ],
  fr: [
    { id: 1, title: "Col de Chemise & Revers de Veste", desc: "Le col de chemise doit dépasser de 1 à 1,5 cm derrière la nuque de manière nette." },
    { id: 2, title: "Longueur de Manche & Poignet", desc: "Entre 1 et 2 cm de poignet de chemise doivent être visibles sous la veste." },
    { id: 3, title: "Cassure du Pantalon sur la Chaussure", desc: "Le bas du pantalon doit présenter un pli unique et net sans accumulation de tissu." },
    { id: 4, title: "Accord des Cuirs & des Métaux", desc: "Cuir des souliers et de la ceinture identiques; métal de la boucle assorti à la montre." },
    { id: 5, title: "Cirage Impeccable & Finitions", desc: "Chaussures lustrées, aucun pli froissé et surface du tissu soigneusement brossée." },
  ],
  it: [
    { id: 1, title: "Colletto della Camicia & Giacca", desc: "Il colletto della camicia deve sporgere di 1-1,5 cm dal collo della giacca in modo pulito." },
    { id: 2, title: "Lunghezza Manica & Polsino", desc: "Il polsino della camicia deve mostrarsi per 1-2 cm sotto la manica della giacca." },
    { id: 3, title: "Caduta del Pantalone (Piombo)", desc: "Il fondo del pantalone deve avere una piega singola e pulita senza arricciature." },
    { id: 4, title: "Armonia di Pelli & Metalli", desc: "Scarpe e cintura nello stesso pellame; fibbia della cintura coordinata alla cassa dell'orologio." },
    { id: 5, title: "Lucidatura & Cura dei Dettagli", desc: "Scarpe impeccabilmente lucidate a specchio e tessuti privi di pieghe o impurità." },
  ],
  ar: [
    { id: 1, title: "ياقة القميص والسترة", desc: "يجب أن تبرز ياقة القميص بمقدار ١ إلى ١.٥ سم من خلف ياقة السترة باستقامة تامة." },
    { id: 2, title: "طول أكمام القميص والسترة", desc: "يجب أن تظهر أساور القميص بمقدار ١ إلى ٢ سم تحت حافة أكمام السترة." },
    { id: 3, title: "انسدال حاشية البنطال", desc: "يجب أن ينسدل البنطال بكسرة واحدة خفيفة دون تراكم قماش عند الكاحل." },
    { id: 4, title: "تناسق الجلود والمعادن", desc: "يجب أن يتطابق لون جلد الحذاء مع الحزام، ومعدن إبزيم الحزام مع إطار الساعة." },
    { id: 5, title: "النظافة التامة ولمعان الحذاء", desc: "الحذاء ملمع تماماً وخالٍ من الخدوش، والأقمشة خالية من التجاعيد والشوائب." },
  ],
};

// English Full Database
const ENGLISH_ADVICE_DATABASE: Record<string, Record<"men" | "women", RealOutfitAdvice>> = {
  "formal-wedding": {
    men: {
      id: "formal-wedding-men",
      title: "Savile Row Super 130s Midnight Wool Smoking / Black-Tie Tuxedo",
      subtitle: "The Sovereign Standard of Formal Evening Splendor & Sovereign Poise",
      targetSituation: "Black-Tie Galas, Royal Weddings, Opera Premieres & Diplomatic Banquets",
      whyThisWorks: "Deep midnight blue absorbs artificial and flash lighting more richly than pure black, accentuating sharp facial contours and conveying imperial elegance with zero brand logos.",
      colorRule: {
        primary: "Midnight Tuxedo Navy (#0F172A)",
        secondary: "Crisp Piqué White (#FFFFFF)",
        accent: "Grosgrain Silk Facing (#1E293B)",
        colorRationale: "Pure optical contrast between silk-faced lapels and pleated piqué cotton collar creates clean facial framing.",
        swatches: [
          { name: "Midnight Navy", hex: "#0F172A", role: "Jacket & Trousers (75%)" },
          { name: "Piqué White", hex: "#FFFFFF", role: "Formal Shirt (20%)" },
          { name: "Onyx Silk", hex: "#111827", role: "Bowtie & Cummerbund (5%)" },
        ]
      },
      breakdown: {
        top: {
          name: "Marcella Piqué Bib Formal Shirt with French Cuffs",
          cutAndFit: "Structured collar tailored with mother-of-pearl or onyx stud fasteners; French cuffs flush with jacket wrist.",
          material: "100% 2-Ply Egyptian Giza 87 Cotton (Marcella Bib)",
          color: "Pure Optical White",
          proTip: "Ensure 1.5 cm of clean double-cuff peeks symmetrically beyond the jacket sleeve."
        },
        layerOrOuterwear: {
          name: "Single-Breasted One-Button Shawl Collar Tuxedo Jacket",
          cutAndFit: "Structured shoulder with natural roping, jetted pockets, and silk grosgrain facing.",
          material: "Super 130s Merino Worsted Wool with Silk Lapels",
          color: "Deep Midnight Navy / Sovereign Black",
          proTip: "Never unbutton a single-button tuxedo jacket while standing."
        },
        bottom: {
          name: "High-Waisted Flat-Front Trousers with Silk Braid Stripe",
          cutAndFit: "Side waist adjusters (no belt loops), perfectly straight drape with minimal break.",
          material: "Super 130s Worsted Wool with Grosgrain Side Braid",
          color: "Midnight Navy matching jacket exactly",
          proTip: "Suspenders (braces) must be silk-ended and buttoned inside the waistband."
        },
        shoes: {
          name: "Goodyear-Welted Patent Leather Wholecut Oxfords or Velvet Slippers",
          style: "Single-piece seamless leather upper with mirror gloss finish",
          material: "Calfskin Patent Leather / Quilted Silk Velvet",
          color: "Mirror Black",
          proTip: "Always wear over-the-calf black silk or ultra-fine merino dress socks."
        },
        accessories: [
          { name: "Self-Tie Grosgrain Silk Bowtie", details: "100% Mulberry Silk grosgrain", proTip: "Tie with natural architectural asymmetry." },
          { name: "Onyx & Platinum Cufflinks", details: "Natural Onyx & 925 Silver", proTip: "Understated jewel accent flush with French cuffs." }
        ]
      },
      goldenStylingRules: [
        "Never wear a regular wristwatch with black-tie; choose a slim ultra-thin dress watch or pocket watch.",
        "Ensure the bow tie is self-tied with natural architectural asymmetry.",
        "Never use belt loops on black-tie evening trousers.",
        "Trousers must sit at your natural waist for optimal vertical proportion."
      ],
      commonMistakesToAvoid: [
        "Never wear a pre-tied shiny polyester clip-on bow tie.",
        "Avoid notch lapels on black-tie dinner jackets (prefer shawl or peak lapels).",
        "Never wear everyday rubber-soled business shoes to a formal evening gala.",
        "Avoid colorful novelty cummerbunds or loud patterned socks."
      ],
      scentRecommendation: {
        name: "Imperial Oud, Black Amber & Damask Rose",
        family: "Oriental Woody / Amber Noble",
        bestNotes: "Smoky Oud, Damascena Rose, Ambergris, Bourbon Vanilla",
        vibe: "Imperial, captivating, and deeply sophisticated."
      }
    },
    women: {
      id: "formal-wedding-women",
      title: "Haute Silk Crepe Column Gown with Tailored Wool Capelet",
      subtitle: "The Timeless Royal Gala Standard — Understated Radiance & Architectural Lines",
      targetSituation: "Evening Weddings, State Galas, Opera Galas & High-Society Receptions",
      whyThisWorks: "Clean floor-skimming silhouette in pure mulberry silk crepe elongates the figure effortlessly while noble jewelry reflects subtle candlelight.",
      colorRule: {
        primary: "Noble Emerald / Pearl Ivory (#0B3B24)",
        secondary: "Champagne Silk (#F7E7CE)",
        accent: "Brushed 18k Yellow Gold (#D4AF37)",
        colorRationale: "Harmonious jewel tones command reverence in evening ambient lighting without competing with flash photography.",
        swatches: [
          { name: "Deep Emerald", hex: "#0B3B24", role: "Column Gown (80%)" },
          { name: "Pearl White", hex: "#FDFBF7", role: "Capelet / Wrap (15%)" },
          { name: "Brushed Gold", hex: "#D4AF37", role: "Fine Jewelry & Clutch (5%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Asymmetrical Drape Silk Crepe Bodice",
          cutAndFit: "Structured internal boning with fluid bias-cut drape.",
          material: "100% Heavy Mulberry Silk Crepe de Chine",
          color: "Deep Sovereign Emerald or Pearl Ivory",
          proTip: "Opt for seamless nude foundation garments for immaculate surface smoothness."
        },
        layerOrOuterwear: {
          name: "Hand-Tailored Silk-Lined Wool & Cashmere Capelet",
          cutAndFit: "Clean shoulder line resting softly over the collarbone with fluid back drape.",
          material: "Double-Face Superfine Wool & Cashmere",
          color: "Soft Ecru or Midnight Onyx",
          proTip: "Drape gently over the shoulders rather than fastening tightly."
        },
        bottom: {
          name: "Architectural Column Skirt with Discreet Walking Slit",
          cutAndFit: "High-waisted column drape gently touching the top of the shoe vamp.",
          material: "Matching Heavy Silk Crepe",
          color: "Deep Emerald matching bodice",
          proTip: "Hem should float exactly 1.5 cm above the floor with evening heels."
        },
        shoes: {
          name: "Pointed-Toe Satin or Metallic Leather Slingback Stilettos",
          style: "8.5 cm architectural slender heel with delicate ankle strap",
          material: "Silk Satin / Metallic Italian Kidskin",
          color: "Champagne Gold or Mirror Black",
          proTip: "Carry leather heel protectors for outdoor stone receptions."
        },
        accessories: [
          { name: "Brushed Gold Minaudière Evening Clutch", details: "Satin-Lined Metal/Leather", proTip: "Hold gently from the base; keep hardware unbranded." },
          { name: "Natural South Sea Pearl Drop Earrings", details: "18k Yellow Gold & Natural Pearls", proTip: "Luminous reflection against evening candlelight." }
        ]
      },
      goldenStylingRules: [
        "Select only one focal statement jewelry piece (earrings or necklace, never compete).",
        "Maintain a disciplined unbranded aesthetic—no visible logos on clutches or wraps.",
        "Ensure gown hemline is calibrated precisely to your chosen evening shoe height.",
        "Opt for soft, luminous hair styling that frames the neckline cleanly."
      ],
      commonMistakesToAvoid: [
        "Avoid overly busy sequins or synthetic polyester satins that look harsh in flash photos.",
        "Never carry an oversized daytime handbag to a black-tie event.",
        "Avoid heavy clunky platform heels that disrupt the gown's vertical drape.",
        "Never wear mismatched metals across earrings, rings, and clutch hardware."
      ],
      scentRecommendation: {
        name: "Florentine Orris, Grasse Jasmine & White Amber",
        family: "Floral Woody Musc",
        bestNotes: "Iris Butter, Sambac Jasmine, Sandalwood, Cashmeran",
        vibe: "Luminous, aristocratic, and unforgettable."
      }
    }
  },
  "business-smart": {
    men: {
      id: "business-smart-men",
      title: "Savile Row Super 120s Navy Blazer with Crisp Poplin & Grey Flannel",
      subtitle: "The Executive Boardroom Formula — Quiet Authority & Natural Fibers",
      targetSituation: "Executive Board Meetings, Investor Pitches, High-Stakes Negotiations",
      whyThisWorks: "Deep Navy paired with mid-grey worsted wool projects timeless corporate authority, stability, and intellectual prestige without any aggressive flashiness.",
      colorRule: {
        primary: "Deep Savile Navy (#1A2433)",
        secondary: "Crisp Oxford White (#FFFFFF)",
        accent: "Cognac Full-Grain Leather (#4A2C1B)",
        colorRationale: "High contrast between shirt collar and navy jacket creates an authoritative visual frame around your face.",
        swatches: [
          { name: "Deep Navy", hex: "#1A2433", role: "Jacket (70%)" },
          { name: "Pure Poplin", hex: "#FFFFFF", role: "Base Shirt (20%)" },
          { name: "Slate Grey", hex: "#545B63", role: "Trousers (10%)" },
          { name: "Rich Cognac", hex: "#4A2C1B", role: "Footwear & Belt" }
        ]
      },
      breakdown: {
        top: {
          name: "2-Ply Egyptian Giza Cotton Shirt (Semi-Spread Collar)",
          cutAndFit: "Tailored slim-classic fit with comfortable room across the chest; structured fused collar.",
          material: "100% Egyptian Giza Long-Staple Cotton (Poplin or Fine Twill)",
          color: "Crisp Pure White",
          proTip: "Allow 1.5 cm of clean shirt cuff to extend past the jacket sleeve."
        },
        layerOrOuterwear: {
          name: "Single-Breasted Two-Button Super 120s Wool Blazer",
          cutAndFit: "Soft Neapolitan shoulder with subtle waist suppression; vents lay flat over hips.",
          material: "Super 120s Worsted Australian Wool (280 GSM)",
          color: "Midnight Savile Navy",
          proTip: "Fasten only the top button when standing; unbutton fluidly before sitting."
        },
        bottom: {
          name: "Mid-Rise Flat-Front Trousers with Sharp Crease",
          cutAndFit: "Clean straight taper resting with an elegant half-break on the shoe vamp.",
          material: "Worsted Flannel or High-Twist Tropical Wool",
          color: "Medium Slate Grey",
          proTip: "Keep trouser pockets flat and empty to preserve architectural drape."
        },
        shoes: {
          name: "Goodyear-Welted Cap-Toe Oxford or Dark Brown Penny Loafers",
          style: "Almond toe English last with hand-burnished finishing",
          material: "Full-Grain Italian Calfskin",
          color: "Deep Oak Cognac or Dark Espresso",
          proTip: "Belt leather and shoe tone must harmonize seamlessly."
        },
        accessories: [
          { name: "Silk Grenadine Necktie (Navy/Burgundy)", details: "Italian Grenadine Silk", proTip: "Provides deep non-reflective matte texture." },
          { name: "Matte Leather Dress Watch", details: "Steel case & Calf Leather", proTip: "Coordinate strap leather with shoe patina." }
        ]
      },
      goldenStylingRules: [
        "Ensure jacket collar hugs the shirt collar flush with zero gap behind the neck.",
        "Choose a matte leather watch strap matching your shoe tone.",
        "Trousers must sit at your natural waist for optimal vertical elongation.",
        "Opt for over-the-calf merino wool dress socks in dark navy."
      ],
      commonMistakesToAvoid: [
        "Never wear shiny polyester synthetic suits under halogen board lights.",
        "Never fasten the bottom button of a suit jacket.",
        "Avoid loud novelty ties or printed socks in serious executive settings.",
        "Never carry a bulky backpack over a structured tailored suit jacket."
      ],
      scentRecommendation: {
        name: "Vetiver, Haitian Cedarwood & Crisp Bergamot",
        family: "Woody Chypre / Citrus Aromatic",
        bestNotes: "Dry Vetiver, Cedar, Bergamot, Pink Pepper",
        vibe: "Commanding, calm, and intellectually composed."
      }
    },
    women: {
      id: "business-smart-women",
      title: "Savile Row Inspired Navy Wool Pantsuit with Silk Georgette Shirt",
      subtitle: "The C-Suite Formula — Executive Gravitas, Pure Lines & Natural Fibers",
      targetSituation: "Board Meetings, Keynote Presentations, M&A Negotiations & Executive Summits",
      whyThisWorks: "A tailored navy wool suit with sharp peak lapels and fluid wide-leg trousers projects unassailable competence and timeless authority.",
      colorRule: {
        primary: "Midnight Navy (#1E293B)",
        secondary: "Crisp Ecru (#FAF7F2)",
        accent: "Espresso Leather (#3E2723)",
        colorRationale: "Sharp tonal contrast focuses interlocutor attention directly upon facial expressions and speech.",
        swatches: [
          { name: "Midnight Navy", hex: "#1E293B", role: "Suit (75%)" },
          { name: "Crisp Ecru", hex: "#FAF7F2", role: "Silk Blouse (20%)" },
          { name: "Espresso Leather", hex: "#3E2723", role: "Tote & Pumps (5%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Concealed Placket Silk Georgette Blouse",
          cutAndFit: "Refined mandarin or pointed collar with fluid natural drape over shoulders.",
          material: "100% Pure Silk Crepe / Georgette",
          color: "Soft Ecru or French Blue",
          proTip: "Tuck neatly into the high-waist band for a clean waistline."
        },
        layerOrOuterwear: {
          name: "Single-Breasted Super 120s Tailored Wool Jacket",
          cutAndFit: "Slightly relaxed boyfriend tailoring with razor-sharp lapels and working horn buttons.",
          material: "Super 120s Italian Worsted Wool",
          color: "Deep Midnight Navy",
          proTip: "Leave jacket unbuttoned when seated to preserve smooth lapel lines."
        },
        bottom: {
          name: "High-Rise Wide-Leg Wool Trousers with Front Pleats",
          cutAndFit: "Fluid drape lengthening legs, breaking cleanly just above shoe soles.",
          material: "Matching Super 120s Worsted Wool",
          color: "Deep Midnight Navy",
          proTip: "Ensure side pockets lie flat without pulling or gapping."
        },
        shoes: {
          name: "Pointed-Toe Leather Block-Heel Pumps or Loafers",
          style: "6 cm stable sculptural heel for effortless mobility between conference rooms",
          material: "Full-Grain Italian Calfskin",
          color: "Dark Espresso or Deep Burgundy",
          proTip: "Keep toe boxes polished and scuff-free with natural beeswax balm."
        },
        accessories: [
          { name: "Structured Leather Document Tote (Laptop Size)", details: "Unbranded Grain Calfskin", proTip: "Preserves clean architectural lines while carrying files." },
          { name: "Geometric Gold Signet Ring & Minimalist Watch", details: "18k Brushed Gold & Swiss Movement", proTip: "Refined, discreet wrist statement." }
        ]
      },
      goldenStylingRules: [
        "Select suits in four-season natural wool rather than synthetic blends.",
        "Ensure sleeve cuffs sit exactly at the wrist bone.",
        "Keep hardware and jewelry coordinated in identical brushed metallic tones.",
        "Use a tailored steam press rather than high-temperature dry-ironing."
      ],
      commonMistakesToAvoid: [
        "Avoid overly tight blazers that pull across the bust or shoulder blades.",
        "Never wear open-toe sandals or casual canvas totes in formal boardroom settings.",
        "Avoid distracting heavy perfume; opt for subtle skin-scents.",
        "Never mix contrasting leather tones between handbag and footwear."
      ],
      scentRecommendation: {
        name: "Cardamom, White Amber & Santal 33",
        family: "Spicy Woody Minimalist",
        bestNotes: "Cardamom, Papyrus, Sandalwood, Cedar",
        vibe: "Laser-focused, visionary, and self-assured."
      }
    }
  },
  "first-date": {
    men: {
      id: "first-date-men",
      title: "Italian Riviera Knit Blazer with Supima Cotton Tee & Sand Chinos",
      subtitle: "The Sprezzatura Date Formula — Approachable Charm, Tactile Warmth & Ease",
      targetSituation: "Wine Bars, Contemporary Bistros, Rooftop Cocktails & Art Gallery Dates",
      whyThisWorks: "Soft textures and warm earthy neutrals make you magnetic and approachable without looking over-rehearsed or stiff.",
      colorRule: {
        primary: "Sand Camel & Oat (#C5A880)",
        secondary: "Warm Ivory (#FDFBF7)",
        accent: "Chocolate Suede (#4A2C1B)",
        colorRationale: "Warm tonal palettes trigger subconscious feelings of comfort, trust, and intimacy.",
        swatches: [
          { name: "Warm Camel", hex: "#C5A880", role: "Unlined Jacket (50%)" },
          { name: "Ivory", hex: "#FDFBF7", role: "Knit Top (30%)" },
          { name: "Olive Chino", hex: "#3D4E3A", role: "Trousers (15%)" },
          { name: "Chocolate Suede", hex: "#4A2C1B", role: "Footwear (5%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Fine-Gauge Silk-Cotton Knit Johnny Polo",
          cutAndFit: "Tailored slim-fit with seamless collar that sits cleanly over the collarbone.",
          material: "70% Supima Mercerized Cotton + 30% Silk",
          color: "Warm Ivory Cream",
          proTip: "Never wear a standard undershirt that shows collar lines beneath the polo."
        },
        layerOrOuterwear: {
          name: "Unlined Deconstructed Camel Wool or Linen-Cashmere Blazer",
          cutAndFit: "Completely soft shoulder (Spalla Camicia) that moves naturally with your posture.",
          material: "Loro Piana Linen & Wool Blend or Fine Hopsack",
          color: "Rich Sand Camel",
          proTip: "Keep hands out of the outer patch pockets to avoid stretching."
        },
        bottom: {
          name: "Single-Pleat Tapered Cotton-Linen Trousers",
          cutAndFit: "Comfortable thigh taper with slight crop exposing the ankle cleanly above loafers.",
          material: "Italian Stretch Cotton Twill or Heavy Flax",
          color: "Muted Olive or Slate Sand",
          proTip: "No socks or no-show ultra-low bamboo loafer liners."
        },
        shoes: {
          name: "Handmade Tuscan Suede Penny Loafers or Suede Chelsea Boots",
          style: "Supple unlined suede with flexible leather soles",
          material: "Italian Calf Suede",
          color: "Rich Dark Chocolate or Tobacco",
          proTip: "Brush suede lightly before leaving to restore deep velvety nap."
        },
        accessories: [
          { name: "Vintage Tortoiseshell Acetate Sunglasses", details: "Mazzucchelli Italian Acetate", proTip: "Effortless casual elegance for sunset drinks." },
          { name: "Braided Leather Bracelet", details: "Hand-braided Tuscan Leather", proTip: "Subtle artisanal touch on the wrist." }
        ]
      },
      goldenStylingRules: [
        "Prioritize soft, touchable fabrics like suede, cashmere, and washed linen.",
        "Ensure footwear is completely clean and well-maintained.",
        "Apply fragrance moderately: one spray on the chest and one behind each ear.",
        "Smile, keep posture open, and let the relaxed tailoring speak for itself."
      ],
      commonMistakesToAvoid: [
        "Never wear stiff formal corporate suits on a casual romantic evening.",
        "Avoid heavily branded graphic tees or athletic sneakers.",
        "Never douse yourself in overpowering cologne.",
        "Avoid overly tight trousers that restrict comfortable seating."
      ],
      scentRecommendation: {
        name: "Calabrian Bergamot, Cashmeran & Warm Ambergris",
        family: "Warm Citrus Amber",
        bestNotes: "Bergamot, Tonka Bean, Cashmeran Wood, Cedar",
        vibe: "Intimate, warm, and delightfully memorable."
      }
    },
    women: {
      id: "first-date-women",
      title: "Silk Midi Slip Dress with Slouchy Cashmere Cardigan & Suede Boots",
      subtitle: "Effortless Romance — Fluid Drapery, Tactile Softness & Understated Allure",
      targetSituation: "Intimate Dinners, Candlelit Wine Bars, Jazz Clubs & Sunset Cocktails",
      whyThisWorks: "The contrast between fluid, lustrous mulberry silk and chunky, soft cashmere creates a dynamic interplay of textures that is magnetic and effortless.",
      colorRule: {
        primary: "Champagne Pearl (#EFE8DC)",
        secondary: "Muted Terracotta / Sage (#A37B62)",
        accent: "Espresso Suede (#3A2418)",
        colorRationale: "Soft warm neutrals highlight skin glow under evening ambient candlelight.",
        swatches: [
          { name: "Champagne Silk", hex: "#EFE8DC", role: "Slip Dress (60%)" },
          { name: "Oatmeal Knit", hex: "#D4C7B8", role: "Cardigan / Wrap (30%)" },
          { name: "Espresso Suede", hex: "#3A2418", role: "Boots & Bag (10%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Bias-Cut Pure Silk Crepe Slip Dress / Camisole",
          cutAndFit: "Fluid bias cut skimming natural body contours without clinging.",
          material: "100% Heavy Mulberry Silk Crepe",
          color: "Champagne Pearl or Warm Terracotta",
          proTip: "Bias cut automatically adjusts to your posture as you walk and sit."
        },
        layerOrOuterwear: {
          name: "Oversized Ribbed Cashmere Knit Cardigan",
          cutAndFit: "Soft drop-shoulder knit falling loosely over one shoulder.",
          material: "100% Mongolian Cashmere 4-Ply",
          color: "Warm Oatmeal Melange",
          proTip: "Leave the top buttons open to reveal the delicate silk neckline."
        },
        bottom: {
          name: "Flowing Midi Skirt Hemline",
          cutAndFit: "Graceful movement with every step, falling to mid-calf.",
          material: "Matching Bias-Cut Mulberry Silk",
          color: "Champagne Pearl",
          proTip: "Pair with seamless micro-mesh slips."
        },
        shoes: {
          name: "Pointed-Toe Suede Ankle Boots or Strappy Kitten Heels",
          style: "5.5 cm slender heel with soft glove-like ankle fit",
          material: "Velvety Calf Suede",
          color: "Deep Espresso or Warm Toffee",
          proTip: "Waterproof suede spray protects against unexpected pavement spills."
        },
        accessories: [
          { name: "Delicate Gold Layering Necklaces", details: "14k Solid Gold", proTip: "Catches candlelight with subtle décolletage shimmer." },
          { name: "Soft Leather Pouch Clutch", details: "Supple Nappa Calfskin", proTip: "Effortless tactile chic that tucks under your arm." }
        ]
      },
      goldenStylingRules: [
        "Contrast fluid sheen (silk) with matte texture (cashmere or suede).",
        "Keep jewelry minimal and delicate so it catches candlelight naturally.",
        "Ensure comfort is primary—confidence flows from bodily ease.",
        "Wear hair in effortless natural waves or a soft French updo."
      ],
      commonMistakesToAvoid: [
        "Avoid overly restrictive tight clothing that impedes enjoying a meal comfortably.",
        "Never wear painful new shoes that you haven't broken in.",
        "Avoid neon or high-glare synthetic fabrics that look cheap under warm lighting.",
        "Avoid heavy cakey foundation that hides natural skin luminosity."
      ],
      scentRecommendation: {
        name: "Damask Rose, Madagascar Vanilla & Soft Cashmere Musk",
        family: "Floral Amber Gourmand",
        bestNotes: "Rose Petals, Bourbon Vanilla, Ambroxan, White Musk",
        vibe: "Romantic, cozy, and deeply enchanting."
      }
    }
  },
  "casual-brunch": {
    men: {
      id: "casual-brunch-men",
      title: "French Flax Linen Overshirt with Supima Crewneck & Drawstring Trousers",
      subtitle: "The Weekend Leisure Formula — Organic Comfort & Clean Minimalism",
      targetSituation: "Specialty Coffee Shops, Weekend Farmers Markets, Art Strolls & Casual Brunch",
      whyThisWorks: "Clean organic materials in neutral hues create a polished off-duty aesthetic that commands respect without trying too hard.",
      colorRule: {
        primary: "Muted Olive Sage (#404B3E)",
        secondary: "Crisp Ecru (#FAF7F2)",
        accent: "Natural Gum & Vachetta Leather (#C49A68)",
        colorRationale: "Earthy tones feel grounded, fresh, and perfectly calibrated for natural daytime light.",
        swatches: [
          { name: "Sage Olive", hex: "#404B3E", role: "Overshirt (40%)" },
          { name: "Pure Ecru", hex: "#FAF7F2", role: "Base Tee (30%)" },
          { name: "Sand Trousers", hex: "#DFD7C7", role: "Trousers (25%)" },
          { name: "Vachetta Leather", hex: "#C49A68", role: "Footwear (5%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Heavyweight Organic Supima Cotton Crewneck T-Shirt",
          cutAndFit: "Relaxed tailored cut with clean ribbed collar that lies completely flat.",
          material: "100% Extra-Long Staple Supima Cotton (220 GSM)",
          color: "Pure Ecru or Warm Chalk White",
          proTip: "Heavyweight 220 GSM ensures the shirt never looks see-through or limp."
        },
        layerOrOuterwear: {
          name: "French Flax Linen-Cotton Utility Overshirt (Shacket)",
          cutAndFit: "Boxy relaxed silhouette with horn buttons and double chest pockets.",
          material: "100% Normandy Flax Linen (Pre-Washed)",
          color: "Earthy Sage Olive or Sand Beige",
          proTip: "Roll sleeves once casually to forearm for a relaxed off-duty vibe."
        },
        bottom: {
          name: "Relaxed-Taper Drawstring Cotton-Linen Trousers",
          cutAndFit: "Elasticated back waistband with internal drawstring and clean front pleats.",
          material: "Cotton-Linen Summer Blend",
          color: "Sand Khaki or Stone White",
          proTip: "Hem should hover just above clean minimalist sneakers or leather slides."
        },
        shoes: {
          name: "Minimalist Unbranded White Leather Court Sneakers or Suede Mules",
          style: "Low-profile Italian Margom rubber sole with clean unbranded leather uppers",
          material: "Full-Grain White Italian Calfskin",
          color: "Chalk White with Tan Leather Lining",
          proTip: "Keep sneaker soles spotless using a quick leather wipe before stepping out."
        },
        accessories: [
          { name: "Canvas & Bridle Leather Weekend Tote", details: "Heavy Cotton Canvas + Saddle Leather", proTip: "Functional storage for books and weekend finds." },
          { name: "Field Watch on Olive NATO Strap", details: "Brushed Titanium & Canvas", proTip: "Rugged elegance with water resistance." }
        ]
      },
      goldenStylingRules: [
        "Ensure casual items are impeccably clean, pressed, and properly sized.",
        "Embrace the natural organic slub and texture of pure linen.",
        "Keep sneaker laces clean and tied with understated symmetry.",
        "Layer lightly so you can adjust comfortably between indoor and outdoor café seating."
      ],
      commonMistakesToAvoid: [
        "Never wear worn-out running gym shoes with tailored casual outfits.",
        "Avoid graphic logo tees or promotional event merchandise.",
        "Never wear stained or baggy cargo sweatpants to upscale venues.",
        "Avoid synthetic polyester shirts that produce unpleasant odor in sunshine."
      ],
      scentRecommendation: {
        name: "Grapefruit, Bitter Orange, Neroli & Cedar",
        family: "Fresh Citrus Woody",
        bestNotes: "Pink Grapefruit, Bigarade, Petitgrain, White Cedar",
        vibe: "Bright, invigorating, and sun-kissed."
      }
    },
    women: {
      id: "casual-brunch-women",
      title: "French Flax Linen Shirt with High-Rise Pleated Chinos & Leather Mules",
      subtitle: "The Chic Weekend Formula — Sunlit Ease, Pure Textures & Polished Comfort",
      targetSituation: "Weekend Brunch, Artisan Boutiques, Botanical Gardens & Café Catchups",
      whyThisWorks: "Crisp natural linen combined with structured high-waisted cotton chinos delivers effortless European elegance that transitions from morning coffee to afternoon galleries.",
      colorRule: {
        primary: "French Sky Blue (#B8CCE0)",
        secondary: "Crisp Chalk White (#FFFFFF)",
        accent: "Natural Raffia & Tan Leather (#C99E66)",
        colorRationale: "Bright airy palette reflects sunlight beautifully and evokes crisp coastal mornings.",
        swatches: [
          { name: "Sky Blue", hex: "#B8CCE0", role: "Linen Shirt (45%)" },
          { name: "Chalk White", hex: "#FFFFFF", role: "Trousers (45%)" },
          { name: "Tan Leather", hex: "#C99E66", role: "Bag & Slides (10%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Relaxed French Flax Linen Button-Down Shirt",
          cutAndFit: "Slightly oversized boyfriend fit with unbuttoned neckline and rolled cuffs.",
          material: "100% Normandy Linen",
          color: "Soft French Sky Blue or Crisp White",
          proTip: "French tuck (front tucked, back loose) defines waistline effortlessly."
        },
        layerOrOuterwear: {
          name: "Fine-Knit Cotton-Merino Crewneck Sweater (Shoulder Draped)",
          cutAndFit: "Lightweight knit draped casually over shoulders and loosely tied at the chest.",
          material: "70% Organic Cotton + 30% Superfine Merino",
          color: "Navy Blue or Oatmeal Stripe",
          proTip: "The draped shoulder knit adds instant French chic and guards against chilly AC."
        },
        bottom: {
          name: "High-Rise Wide-Leg Cotton-Twill Chinos",
          cutAndFit: "Pleated high waist with wide architectural leg falling to the top of feet.",
          material: "100% Breathable Organic Cotton Twill",
          color: "Crisp Chalk White or Warm Sand",
          proTip: "Ensure underwear is seamless and nude-toned for total opacity."
        },
        shoes: {
          name: "Handmade Tan Leather Slides or Pointed Suede Mules",
          style: "Minimalist cross-strap slide with cushioned leather footbed",
          material: "Supple Vegetable-Tanned Tuscan Leather",
          color: "Warm Saddle Tan",
          proTip: "A well-moisturized pedicure completes the polished summer slide look."
        },
        accessories: [
          { name: "Handwoven Raffia & Leather Basket Bag", details: "Madagascar Raffia + Leather Straps", proTip: "Summertime classic with light texture." },
          { name: "Chunky Gold Huggie Earrings", details: "18k Gold Vermeil", proTip: "Adds warm facial glow in natural sunlight." }
        ]
      },
      goldenStylingRules: [
        "Use the French tuck to give loose garments structured proportion.",
        "Pair casual fabrics like linen with refined leather and jewelry accents.",
        "Embrace linen wrinkles—they signify authentic natural fibers.",
        "Keep sunglasses handy in classic tortoiseshell or warm caramel frames."
      ],
      commonMistakesToAvoid: [
        "Avoid overly dressy stiletto heels for casual brunch walks.",
        "Never wear transparent white pants without nude seamless undergarments.",
        "Avoid heavily branded fast-fashion athletic leggings.",
        "Avoid carrying heavy structured corporate briefcases on relaxed weekends."
      ],
      scentRecommendation: {
        name: "Fig Leaf, Coconut Milk & White Cedarwood",
        family: "Green Woody Fresh",
        bestNotes: "Fresh Fig, Fig Leaf, Green Sap, Cedar",
        vibe: "Sunlit, green, and wonderfully refreshing."
      }
    }
  },
  "travel-resort": {
    men: {
      id: "travel-resort-men",
      title: "First-Class Travel Knit Bomber with Wrinkle-Free Tropical Wool Pants",
      subtitle: "The Luxury Flight & Resort Formula — Thermoregulation, Stretch & First-Class Ease",
      targetSituation: "Long-Haul First Class Flights, VIP Airport Lounges, Five-Star Luxury Resorts",
      whyThisWorks: "Natural high-twist tropical wool and fine merino regulate body temperature during flight cabins and resist wrinkles automatically.",
      colorRule: {
        primary: "Midnight Navy & Slate (#1E293B)",
        secondary: "Soft Oatmeal Heather (#E2D9CC)",
        accent: "Espresso Travel Leather (#382416)",
        colorRationale: "Darker anchor tones hide travel dust while warm oatmeal knitwear adds first-class tactile comfort.",
        swatches: [
          { name: "Midnight Travel Navy", hex: "#1E293B", role: "Outerwear (45%)" },
          { name: "Oatmeal Knit", hex: "#E2D9CC", role: "Midlayer (30%)" },
          { name: "Slate Wool Pants", hex: "#4B5563", role: "Trousers (20%)" },
          { name: "Espresso Leather", hex: "#382416", role: "Travel Duffle (5%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Merino Wool Long-Sleeve Thermal Crewneck",
          cutAndFit: "Slim-fit base layer with ultra-soft flatlock seams that prevent chafing.",
          material: "100% New Zealand 17.5-Micron Superfine Merino Wool",
          color: "Oatmeal Heather or Deep Navy",
          proTip: "Merino wool naturally neutralizes odors across 15+ hour flight itineraries."
        },
        layerOrOuterwear: {
          name: "Full-Zip Merino & Cashmere Knit Flight Jacket / Bomber",
          cutAndFit: "Two-way zipper for effortless temperature regulation in flight cabins.",
          material: "90% Extra-Fine Merino + 10% Cashmere",
          color: "Midnight Navy or Charcoal Melange",
          proTip: "Use the two-way zipper to open from the bottom when seated in aircraft chairs."
        },
        bottom: {
          name: "High-Twist Tropical Wool Travel Trousers with Hidden Elastic",
          cutAndFit: "Tailored straight leg with internal drawstring and natural 4-way mechanical stretch.",
          material: "100% High-Twist Fresco Wool (High Crease Recovery)",
          color: "Deep Slate Grey or Navy",
          proTip: "Any minor flight wrinkles fall out naturally within 30 minutes of walking."
        },
        shoes: {
          name: "Slip-On Suede Penny Loafers or Soft Leather Travel Slip-Ons",
          style: "Supple deconstructed last for quick removal at airport security",
          material: "Water-Repellent Italian Calf Suede",
          color: "Dark Espresso or Snuff Brown",
          proTip: "Wear comfortable compression socks underneath for long-haul circulation."
        },
        accessories: [
          { name: "Full-Grain Leather 48-Hour Weekender Duffle", details: "Hand-Waxed Tuscan Leather", proTip: "Fits airline overhead bins with classic patina." },
          { name: "Dual-Time GMT Luxury Mechanical Watch", details: "Titanium case & Automatic movement", proTip: "Track origin and destination time zones at a glance." }
        ]
      },
      goldenStylingRules: [
        "Rely strictly on natural temperature-regulating fibers: merino, cashmere, and high-twist wool.",
        "Choose slip-on footwear for effortless transit through security checkpoints.",
        "Keep travel documents organized in a slim leather passport folio.",
        "Stay well hydrated and moisturize face during pressurized cabin flights."
      ],
      commonMistakesToAvoid: [
        "Avoid synthetic polyester sweatpants that look sloppy and trap heat in cabins.",
        "Never wear complicated lace-up high boots to airport security.",
        "Avoid rigid restrictive denim that pinches circulation during long sitting.",
        "Never carry bulky metal accessories that slow down transit."
      ],
      scentRecommendation: {
        name: "Juniper Berry, Sandalwood & Crisp Cardamom",
        family: "Aromatic Woody Fresh",
        bestNotes: "Juniper, Cardamom, Sandalwood, Ozone",
        vibe: "Crisp, calming, and effortlessly sophisticated."
      }
    },
    women: {
      id: "travel-resort-women",
      title: "Cashmere Travel Wrap Set with Silk-Blend Wide-Leg Pants & Leather Duffle",
      subtitle: "The Jet-Set Luxury Formula — Cocooning Warmth, Fluid Elegance & Effortless Transit",
      targetSituation: "Long-Haul First Class Travel, Private Aviation, Luxury Resort Lounges",
      whyThisWorks: "A generous double-face cashmere travel wrap converts into a luxurious blanket in-flight while silk-wool wide-leg trousers keep you looking impeccably poised on arrival.",
      colorRule: {
        primary: "Sand Camel & Cream (#C5A880)",
        secondary: "Soft Ivory (#FDFBF7)",
        accent: "Espresso Travel Leather (#3A2418)",
        colorRationale: "Warm tonal neutrals convey supreme composure and blend effortlessly into 5-star hotel lobbies.",
        swatches: [
          { name: "Sand Camel", hex: "#C5A880", role: "Travel Wrap (50%)" },
          { name: "Ivory Silk", hex: "#FDFBF7", role: "Top (30%)" },
          { name: "Camel Trousers", hex: "#B88B58", role: "Trousers (15%)" },
          { name: "Espresso Leather", hex: "#3A2418", role: "Luggage (5%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Silk-Cashmere Fine-Knit Short-Sleeve Top",
          cutAndFit: "Seamless crewneck silhouette with ultra-soft hand feel.",
          material: "70% Mulberry Silk + 30% Grade-A Cashmere",
          color: "Warm Ivory Cream",
          proTip: "Provides natural thermoregulation whether cabins are freezing or warm."
        },
        layerOrOuterwear: {
          name: "Oversized Reversible Cashmere Travel Wrap / Blanket Scarf",
          cutAndFit: "Generous 200cm x 75cm dimensions with hand-rolled fringes.",
          material: "100% Pure Mongolian Cashmere (2-Ply)",
          color: "Two-Tone Camel & Oatmeal",
          proTip: "Drapes as an elegant shawl in lounges and unfolds as a cozy blanket on board."
        },
        bottom: {
          name: "High-Waisted Silk-Wool Wide-Leg Travel Trousers",
          cutAndFit: "Elasticated back waist with a clean flat front pleat for zero constriction.",
          material: "Worsted Wool & Silk Blend (Wrinkle-Resistant)",
          color: "Warm Camel or Charcoal Slate",
          proTip: "The fluid cut allows complete leg freedom without losing its tailored silhouette."
        },
        shoes: {
          name: "Glove Leather Pointed-Toe Travel Flats or Soft Mules",
          style: "Ultra-flexible cushioned leather sole that folds easily in carry-on bags",
          material: "Supple French Nappa Calfskin",
          color: "Warm Cognac or Matte Black",
          proTip: "Pack cashmere travel slippers in your carry-on for overnight flights."
        },
        accessories: [
          { name: "Structured Leather Carry-On Duffle & Passport Holder", details: "Full-Grain Italian Calfskin", proTip: "Timeless luxury with organized flight compartments." },
          { name: "Oversized Acetate Aviator Sunglasses", details: "UV400 Polarized Lenses & Mazzucchelli frame", proTip: "Discreet chic for stepping into bright sunny arrival cities." }
        ]
      },
      goldenStylingRules: [
        "Invest in a high-grade cashmere travel wrap—it is the ultimate flight essential.",
        "Keep valuable jewelry and passports secured in an unbranded leather pouch.",
        "Drink plenty of water and apply hyaluronic serum mid-flight to sustain glow.",
        "Wear hair in a loose low chignon with a pure silk scrunchie."
      ],
      commonMistakesToAvoid: [
        "Avoid tight non-breathable denim that cuts off circulation during long flights.",
        "Never wear complicated lace-up footwear that delays airport queues.",
        "Avoid synthetic polyester blankets provided on planes that cause static electricity.",
        "Never spray heavy fragrance inside enclosed airplane cabins."
      ],
      scentRecommendation: {
        name: "White Tea, Bergamot, Clary Sage & Iris",
        family: "Fresh Clean Aromatic",
        bestNotes: "White Tea, Bergamot, Orris Butter, White Musk",
        vibe: "Serene, immaculate, and rejuvenating."
      }
    }
  },
  "autumn-winter-coat": {
    men: {
      id: "autumn-winter-coat-men",
      title: "Double-Breasted Wool & Cashmere Greatcoat with Ribbed Turtleneck",
      subtitle: "The Master Layering Formula — Architectural Warmth, Heavy Flannel & Sovereign Presence",
      targetSituation: "Winter Receptions, European City Breaks, Gala Entrances & Cold-Weather Summits",
      whyThisWorks: "Heavy 550 GSM double-breasted overcoat creates a powerful masculine V-taper silhouette while protecting against freezing winds with timeless grace.",
      colorRule: {
        primary: "Noble Camel / Charcoal Slate (#B88B58)",
        secondary: "Midnight Navy (#1E293B)",
        accent: "Espresso Full-Grain Leather (#3E2723)",
        colorRationale: "Rich warm outerwear contrasting with dark monochrome layers adds three-dimensional visual depth.",
        swatches: [
          { name: "Noble Camel", hex: "#B88B58", role: "Overcoat (50%)" },
          { name: "Charcoal Slate", hex: "#374151", role: "Turtleneck Knit (25%)" },
          { name: "Navy Flannel", hex: "#1E293B", role: "Trousers (20%)" },
          { name: "Espresso Leather", hex: "#3E2723", role: "Boots & Gloves (5%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Heavy-Gauge Ribbed Pure Cashmere Turtleneck Sweater",
          cutAndFit: "Folded ribbed neck hugging securely without constriction; ribbed hem and cuffs.",
          material: "100% Grade-A Mongolian Cashmere (4-Ply Heavyweight)",
          color: "Deep Charcoal Grey or Ivory Oatmeal",
          proTip: "The turtleneck replaces a formal tie in winter while elevating intellectual status."
        },
        layerOrOuterwear: {
          name: "Double-Breasted Peak-Lapel Wool & Cashmere Overcoat (Greatcoat)",
          cutAndFit: "Structured wide lapels, knee-length hemline, and deep horn button stance.",
          material: "90% Italian Melton Wool + 10% Cashmere (550 GSM)",
          color: "Noble Camel, Charcoal, or Midnight Navy",
          proTip: "Ensure the coat shoulder accommodates an internal tailored blazer if needed."
        },
        bottom: {
          name: "Heavyweight Worsted Flannel Trousers with Sharp Crease",
          cutAndFit: "Mid-rise classic straight drape that falls cleanly with zero wind flutter.",
          material: "100% British Worsted Wool Flannel (380 GSM)",
          color: "Midnight Navy or Charcoal Slate",
          proTip: "Heavy 380 GSM flannel holds a razor-sharp crease through rain and sleet."
        },
        shoes: {
          name: "Goodyear-Welted Dainite-Sole Leather Dress Boots or Chelsea Boots",
          style: "Almond toe English last with storm welt and Dainite rubber studded sole",
          material: "Full-Grain Waterproof Waxed Calfskin",
          color: "Deep Espresso or Dark Oxblood",
          proTip: "Dainite studded rubber soles provide total ice traction while looking formal."
        },
        accessories: [
          { name: "Hand-Stitched Peccary Leather Gloves (Cashmere Lined)", details: "Peccary Leather + Cashmere Lining", proTip: "Winter luxury benchmark for hand protection." },
          { name: "Woven Cashmere Scarf with Fringe", details: "100% Scottish Cashmere", proTip: "Drape loosely under the coat lapel." }
        ]
      },
      goldenStylingRules: [
        "Calibrate layer weights so you can transition smoothly into heated indoors.",
        "Overcoat hemline should always land at or slightly below the knee for optimal proportion.",
        "Match glove leather tone to boot leather and briefcase tone.",
        "Brush wool coats with a natural boar-bristle brush after exposure to snow."
      ],
      commonMistakesToAvoid: [
        "Never wear puffy synthetic down jackets over formal tailored suits.",
        "Avoid short overcoats that stop above the suit jacket hemline.",
        "Never wear soaked unprotected suede in heavy downpours.",
        "Avoid cheap acrylic scarves that pill rapidly and generate static frizz."
      ],
      scentRecommendation: {
        name: "Smoky Birch, Bourbon Tobacco, Cinnamon & Tonka",
        family: "Spicy Amber Woody",
        bestNotes: "Birch Tar, Havana Tobacco, Cinnamon Bark, Tonka Bean",
        vibe: "Commanding, warm, and deeply comforting."
      }
    },
    women: {
      id: "autumn-winter-coat-women",
      title: "Hand-Stitched Double-Face Cashmere Wrap Coat with Tall Leather Boots",
      subtitle: "The Winter Royalty Formula — Sculptural Volume, Tactile Luxury & Timeless Warmth",
      targetSituation: "Winter Galas, Alpine Resorts, Metropolitan Evenings & Holiday Banquets",
      whyThisWorks: "Luxurious double-face cashmere wraps seamlessly around the body, cinched with a self-tie belt to flatter the waistline while knee-high leather boots elongate the silhouette.",
      colorRule: {
        primary: "Noble Camel & Toffee (#B58450)",
        secondary: "Ivory Cream (#FAF7F2)",
        accent: "Deep Espresso Leather (#3A2418)",
        colorRationale: "Warm monochromatic layering radiates high social status and cold-weather cozy luxury.",
        swatches: [
          { name: "Golden Camel", hex: "#B58450", role: "Cashmere Coat (55%)" },
          { name: "Ivory Cream", hex: "#FAF7F2", role: "Turtleneck (25%)" },
          { name: "Charcoal Slate", hex: "#374151", role: "Flannel Pants (15%)" },
          { name: "Espresso Leather", hex: "#3A2418", role: "Boots & Gloves (5%)" }
        ]
      },
      breakdown: {
        top: {
          name: "Grade-A Mongolian Cashmere Ribbed Turtleneck Sweater",
          cutAndFit: "Tailored fit that slides smoothly under coat sleeves without bunching.",
          material: "100% Mongolian Cashmere (2-Ply)",
          color: "Soft Ivory or Oatmeal Melange",
          proTip: "A high collar shields the neck and eliminates the immediate need for a bulky scarf."
        },
        layerOrOuterwear: {
          name: "Hand-Stitched Double-Face Pure Wool & Cashmere Wrap Coat",
          cutAndFit: "Unlined double-face tailoring with generous notched lapels and self-tie belt.",
          material: "Double-Face Italian Wool & Cashmere (Hand-Stitched Seams)",
          color: "Golden Camel, Oatmeal, or Jet Black",
          proTip: "Tie the belt in an effortless half-knot rather than a rigid bow."
        },
        bottom: {
          name: "Tailored Heavy Wool Flannel Wide-Leg Trousers or Midi Skirt",
          cutAndFit: "High-rise fit with generous flowing drape over boot shafts.",
          material: "100% Worsted Italian Wool Flannel",
          color: "Charcoal Slate or Cream",
          proTip: "The structured weight of flannel keeps trouser hems hanging perfectly straight."
        },
        shoes: {
          name: "Knee-High Sculptural Heel Leather Boots",
          style: "Almond toe with a sturdy 7 cm stacked leather block heel",
          material: "Full-Grain Italian Calfskin",
          color: "Deep Espresso Brown or Rich Cognac",
          proTip: "Insert cedar boot trees after each wear to preserve shaft height and prevent creases."
        },
        accessories: [
          { name: "Cashmere-Lined Leather Driving Gloves", details: "Italian Lambskin + Cashmere Lining", proTip: "Hand protection and poise in cold wind." },
          { name: "Structured Top-Handle Leather Handbag", details: "Palmellato Textured Calfskin", proTip: "Winter sculptural accent with unbranded brass hardware." }
        ]
      },
      goldenStylingRules: [
        "Invest in double-face cashmere coats whose interior is as beautiful as the exterior.",
        "Ensure boot shafts tuck seamlessly under wide-leg trouser hems.",
        "Keep gloves in coat pockets so hands are always shielded from chilly winds.",
        "Condition leather boots monthly with beeswax cream to prevent winter salt stains."
      ],
      commonMistakesToAvoid: [
        "Avoid overly bulky synthetic puffers that hide silhouette lines at upscale events.",
        "Never wear bare ankles in sub-zero winter temperatures.",
        "Avoid cheap synthetic gloves that ruin a tailored coat ensemble.",
        "Never dry wet wool garments on direct radiators (allow natural air drying)."
      ],
      scentRecommendation: {
        name: "Smoky Vanilla, Cashmere Wood, Benzoin & Saffron",
        family: "Amber Oriental Gourmand",
        bestNotes: "Bourbon Vanilla, Cashmeran, Saffron, Benzoin Resin",
        vibe: "Opulent, warm, and deeply comforting."
      }
    }
  }
};

export function getLocalizedAdvice(
  occasionId: string,
  gender: "men" | "women",
  lang: LanguageCode
): RealOutfitAdvice {
  const base = MASTER_ADVICE_DATABASE[occasionId]?.[gender] || MASTER_ADVICE_DATABASE["formal-wedding"][gender];
  
  // If Persian, return base verbatim
  if (lang === "fa") {
    return base;
  }

  // English Localized Advice
  if (lang === "en") {
    const englishMatch = ENGLISH_ADVICE_DATABASE[occasionId]?.[gender] || ENGLISH_ADVICE_DATABASE["formal-wedding"][gender];
    if (englishMatch) {
      return englishMatch;
    }
  }

  // French Localized Advice
  if (lang === "fr") {
    const eng = ENGLISH_ADVICE_DATABASE[occasionId]?.[gender] || ENGLISH_ADVICE_DATABASE["formal-wedding"][gender];
    return {
      ...eng,
      title: "Formule Haute Élégance Sartoriale : " + (gender === "men" ? "Costume Sur Mesure" : "Ensemble Tailleur"),
      subtitle: "L'Étalon d'Or Sartorial — Lignes Pures, Matières Nobles & Harmonies",
      targetSituation: "Pour les réceptions officielles, conseils d'administration et soirées exclusives.",
      whyThisWorks: "Alliant le tombé impeccable de la laine peignée et la netteté du coton égyptien, cette formule offre une prestance royale sans aucun logo ostentatoire.",
      goldenStylingRules: [
        "Privilégiez les fibres 100% pures : laine mérinos, cachemire et popeline de coton.",
        "Le col de la chemise doit dépasser nettement de 1 à 1,5 cm derrière la veste.",
        "Maintenez une harmonie stricte des cuirs et des métaux.",
        "Un tombé fluide sans plis cassés sur les souliers."
      ],
      commonMistakesToAvoid: [
        "Bannir absolument les matières synthétiques brillantes.",
        "Ne jamais fermer le bouton inférieur d'une veste.",
        "Éviter les logos visibles qui détruisent l'allure raffinée."
      ]
    };
  }

  // Italian Localized Advice
  if (lang === "it") {
    const eng = ENGLISH_ADVICE_DATABASE[occasionId]?.[gender] || ENGLISH_ADVICE_DATABASE["formal-wedding"][gender];
    return {
      ...eng,
      title: "Formula Sartoriale di Pregio : " + (gender === "men" ? "Abito Su Misura" : "Tailleur Esclusivo"),
      subtitle: "L'Armonia Perfetta dello Stile Senza Tempo — Sprezzatura & Nobiltà",
      targetSituation: "Per cene di gala, riunioni d'affari e appuntamenti esclusivi.",
      whyThisWorks: "L'eccellenza della manifattura italiana e il taglio sartoriale creano una figura slanciata e autorevole.",
      goldenStylingRules: [
        "Scegli solo tessuti naturali di Lanifici storici (Biella, Loro Piana).",
        "Polsino della camicia visibile per 1-2 cm sotto la giacca.",
        "Scarpe in cuoio pieno fiore sempre impeccabilmente lucidate."
      ],
      commonMistakesToAvoid: [
        "Evitare tessuti sintetici o loghi vistosi.",
        "Non abbottonare mai l'ultimo bottone della giacca."
      ]
    };
  }

  // Arabic Localized Advice
  return {
    ...base,
    title: gender === "men" ? "تنسيق الخياطة الراقية الفاخرة للرجال" : "تنسيق الأناقة الملكية الهادئة للسيدات",
    subtitle: "المعيار الذهبي للأناقة الكلاسيكية والتناغم البصري الراقي",
    targetSituation: "المناسبات الرسمية، اجتماعات الأعمال الرفيعة واللقاءات الاستثمارية",
    whyThisWorks: "يعتمد هذا التنسيق على توازن الألوان الكلاسيكية وخامات الصوف والقطن الطبيعي لإبراز الهيبة والوقار بدون تكلف.",
    goldenStylingRules: [
      "اختر دائماً الأقمشة الطبيعية ١٠٠٪ مثل صوف الميرينو والقطن المصري.",
      "تأكد من بروز ياقة القمیص بمقدار ١ إلى ١.٥ سم خلف السترة.",
      "تطابق لون جلد الحذاء مع الحزام ومعدن الساعة مع إبزيم الحزام."
    ],
    commonMistakesToAvoid: [
      "تجنب الأقمشة الصناعية اللامعة التي تفقد القوام فخامته.",
      "عدم إغلاق الزر السفلي للسترة أبداً في المعايير العالمية.",
      "الابتعاد عن الشعارات التجارية البارزة للمحافظة على الفخامة الهادئة."
    ]
  };
}

