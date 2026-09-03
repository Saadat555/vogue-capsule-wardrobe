import React, { useState } from "react";
import {
  Sparkles,
  Upload,
  Camera,
  Scissors,
  Palette,
  Check,
  Download,
  Eye,
  RefreshCw,
  Crown,
  HelpCircle,
  Zap,
  Sliders,
  ChevronRight,
  ShieldCheck,
  Star,
  MessageSquare,
  BadgeCheck,
  PlusCircle,
  X,
  Send,
  ArrowLeftRight,
  Trash2
} from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface BeautyTabOption {
  id: "hair" | "lips" | "jewelry" | "nails";
  icon: string;
  name: Record<LanguageCode, string>;
}

interface LipstickPreset {
  id: string;
  name: Record<LanguageCode, string>;
  hex: string;
  finish: "matte" | "glossy" | "satin" | "velvet";
  description: Record<LanguageCode, string>;
}

interface JewelryPreset {
  id: string;
  name: Record<LanguageCode, string>;
  type: "earrings" | "necklace";
  icon: string;
  description: Record<LanguageCode, string>;
}

interface NailPreset {
  id: string;
  name: Record<LanguageCode, string>;
  hex: string;
  finish: "gloss" | "matte" | "chrome" | "french";
  description: Record<LanguageCode, string>;
}

const BEAUTY_SUB_TABS: BeautyTabOption[] = [
  {
    id: "hair",
    icon: "💇‍♀️",
    name: {
      en: "Hair & Coiffure",
      fa: "استودیوی مدل و رنگ مو",
      fr: "Haute Coiffure & Cheveux",
      it: "Haute Coiffure & Capelli",
      ar: "استوديو قصات ولون الشعر"
    }
  },
  {
    id: "lips",
    icon: "💄",
    name: {
      en: "Lips & Glam Makeup",
      fa: "پرو رژ لب و آرایش (Lips & Glam)",
      fr: "Rouge à Lèvres & Maquillage",
      it: "Rossetto & Glam Makeover",
      ar: "تجربة أحمر الشفاه والمكياج"
    }
  },
  {
    id: "jewelry",
    icon: "💎",
    name: {
      en: "Face & AR Jewelry",
      fa: "آناتومی صورت و جواهرات",
      fr: "Visage & Bijoux AR",
      it: "Viso & Gioielli AR",
      ar: "شكل الوجه والمجوهرات"
    }
  },
  {
    id: "nails",
    icon: "💅",
    name: {
      en: "Virtual Nail Atelier",
      fa: "مانیکور و پرو لاک ناخن",
      fr: "Manucure & Vernis",
      it: "Manicure & Unghie Virtuali",
      ar: "المناكير والأظافر الإفتراضية"
    }
  }
];

const LIPSTICK_PRESETS: LipstickPreset[] = [
  {
    id: "bordeaux-velvet-red",
    name: {
      en: "Royal Bordeaux Velvet Red",
      fa: "سرخ مخملی بوردو فرانسوی",
      fr: "Rouge Velours Bordeaux Royal",
      it: "Rosso Velluto Bordeaux Reale",
      ar: "أحمر مخملي بوردو ملكي"
    },
    hex: "#8B0000",
    finish: "velvet",
    description: {
      en: "Deep Parisian couture red with soft matte velvet touch.",
      fa: "قرمز عمیق پاریسی با بافت مخملی مات و ماندگاری بالا.",
      fr: "Rouge couture profond au toucher velouté mat.",
      it: "Rosso profondo con finitura vellutata e intensa.",
      ar: "أحمر فاخر بعمق المخمل الفرنسي الجذاب."
    }
  },
  {
    id: "fashion-week-ruby",
    name: {
      en: "Paris Fashion Week Ruby Gloss",
      fa: "یاقوتی درخشان هفته مد پاریس",
      fr: "Rubis Éclatant Semaine de la Mode",
      it: "Rubino Brillante Settimana della Moda",
      ar: "ياقوتي لامع من أسبوع الباريسي للموضة"
    },
    hex: "#D2143A",
    finish: "glossy",
    description: {
      en: "Vibrant liquid ruby red with mirror-shine gloss reflection.",
      fa: "قرمز یاقوتی زنده با بازتاب آیینه‌ای و برجسته‌کننده لب‌ها.",
      fr: "Rouge rubis liquide avec brillance effet miroir.",
      it: "Rosso rubino brillante con riflessi specchiati.",
      ar: "أحمر ياقوتي مشرق بلمعان زجاجي مذهل."
    }
  },
  {
    id: "parisian-rose-nude",
    name: {
      en: "Parisian Silk Rose Nude",
      fa: "نود رز پاریسی ابریشمی",
      fr: "Nude Rose Soyeux Parisien",
      it: "Nude Rosa Seta Parigino",
      ar: "وردي نود حريري باريسي"
    },
    hex: "#C77B89",
    finish: "satin",
    description: {
      en: "Everyday elegant dusty rose nude for natural quiet luxury look.",
      fa: "رنگ روزمره شیک و طبیعی رز کالباسی برای استایل Quiet Luxury.",
      fr: "Nude rose délicat pour une élégance naturelle au quotidien.",
      it: "Nude rosa delicato per un'eleganza raffinata e naturale.",
      ar: "وردي نود هادئ لإطلالة أنيقة يومية."
    }
  },
  {
    id: "deep-merlot-plum",
    name: {
      en: "Haute Merlot Plum Noir",
      fa: "شرابی مرلو و آلبالویی تیره",
      fr: "Prune Merlot Noir Haute Couture",
      it: "Prugna Merlot Nero Alta Moda",
      ar: "عنابي ميرلو وتوتي داكن"
    },
    hex: "#6B1D2F",
    finish: "matte",
    description: {
      en: "Ultra-glamorous dark wine berry shade for dramatic galas.",
      fa: "شرابی تیره و توتی بسیار مجلل برای مهمانی‌های شبانه لوکس.",
      fr: "Teinte prune intense et glamour pour soirées de gala.",
      it: "Tonalità prugna scura ed elegante per eventi di gala.",
      ar: "لون عنابي تري وأنيق للسهرات الفاخرة."
    }
  },
  {
    id: "tuscan-coral-satin",
    name: {
      en: "Tuscan Sunburst Coral Crème",
      fa: "مرجانی گرم غروب توسکانی",
      fr: "Coral Crème Couchant Toscan",
      it: "Corallo Crema Tramonto Toscano",
      ar: "مرجاني كريمي دافئ مستوحى من توسكانا"
    },
    hex: "#E06D53",
    finish: "satin",
    description: {
      en: "Warm peach-coral hue adding radiant sunlit warmth to complexion.",
      fa: "ترکیب هلویی و مرجانی گرم که به شادابی پوست می‌افزاید.",
      fr: "Nuance pêche-corail apportant une chaleur ensoleillée.",
      it: "Tonalità pesca-corallo che illumina il colorito.",
      ar: "درجة خوخية مرجانية تضفي دفئاً وإشراقاً للوجه."
    }
  },
  {
    id: "dusty-rose-mauve",
    name: {
      en: "Muted Mauve Petal Matte",
      fa: "کالباسی ارغوانی مات (Mauve Petal)",
      fr: "Mauve Pétale Mat Subtil",
      it: "Malva Petalo Opaco Raffinato",
      ar: "وردي أرجواني مات ناعم"
    },
    hex: "#915C6B",
    finish: "matte",
    description: {
      en: "Cool undertone mauve beige balancing vintage and modern chic.",
      fa: "ارغوانی خنثی با بافت مات مخملی، مناسب برای انواع تناژ پوست.",
      fr: "Mauve élégant aux sous-tons froids pour un chic intemporel.",
      it: "Malva elegante con sottotono freddo e finitura opaca.",
      ar: "أرجواني حيادي أنيق يناسب جميع ألوان البشرة."
    }
  },
  {
    id: "milan-glam-fuchsia",
    name: {
      en: "Milan Runway Glam Fuchsia",
      fa: "سرخابی جسورانه هفته مد میلان",
      fr: "Fuchsia Éclatant Défilé de Milan",
      it: "Fucsia Vibrante Sfilata di Milano",
      ar: "فوكسيا جريء من عروض أزياء ميلانو"
    },
    hex: "#C2185B",
    finish: "glossy",
    description: {
      en: "Bold, energetic high-fashion pink with sparkling gloss brilliance.",
      fa: "صورتی زنده و جسورانه هفته مد میلان با درخشش کریستالی.",
      fr: "Rose fuchsia audacieux et éclatant de défilé.",
      it: "Rosa fucsia audace e brillante da sfilata.",
      ar: "وردي فوشيا جريء ومشرق لإطلالة استثنائية."
    }
  },
  {
    id: "espresso-nude-90s",
    name: {
      en: "90s Vintage Espresso Nude",
      fa: "قهوه‌ای نود اسپرسو دهه ۹۰",
      fr: "Nude Espresso Rétro 90s",
      it: "Nude Espresso Anni '90",
      ar: "بني نود إسبريسو كلاسيكي"
    },
    hex: "#4A2E2B",
    finish: "velvet",
    description: {
      en: "Iconic supermodel chocolate brown nude with refined contouring.",
      fa: "قهوه‌ای شکلاتی سوپرمدل‌های دهه ۹۰ برای زاویه‌سازی و حجم لب‌ها.",
      fr: "Chocolat nude iconique inspiré des supermodels des années 90.",
      it: "Marrone cioccolato iconico per contorni definiti e sensuali.",
      ar: "بني شيكولاتة كلاسيكي يعيد فخامة التسعينيات."
    }
  }
];

const JEWELRY_PRESETS: JewelryPreset[] = [
  {
    id: "gold-hoops-24k",
    name: {
      en: "Haute 24K Gold Riviera Hoops",
      fa: "گوشواره حلقه‌ای طلا ۲۴ عیار ریویرای پاریس",
      fr: "Créoles Or 24K Riviera Haute Couture",
      it: "Orecchini Cerchi Oro 24K Riviera",
      ar: "أقراط دائرية من الذهب الخالص عيار 24"
    },
    type: "earrings",
    icon: "✨",
    description: {
      en: "Polished heavy gold hoops reframing facial symmetry.",
      fa: "حلقه‌های متراکم و براق طلا که تقارن صورت را برجسته‌تر می‌کنند.",
      fr: "Créoles en or poli sublimant la symétrie du visage.",
      it: "Cerchi in oro lucido che incorniciano il viso con eleganza.",
      ar: "أقراط ذهبية لامعة تبرز تناسق ملامح الوجه."
    }
  },
  {
    id: "diamond-drop-chandelier",
    name: {
      en: "Place Vendôme Diamond Chandelier",
      fa: "گوشواره آبشاری الماس میدان واندوم",
      fr: "Pendants de Diamants Place Vendôme",
      it: "Pendenti in Diamanti Place Vendôme",
      ar: "أقراط متدلية من الماس الفاخر"
    },
    type: "earrings",
    icon: "💎",
    description: {
      en: "Cascading brilliant-cut diamond drop earrings for galas.",
      fa: "آبشار الماس تراش برلیان برای مراسم‌های شب و فرش قرمز.",
      fr: "Pendants scintillants en diamants pour événements d'exception.",
      it: "Cascata di diamanti taglio brillante per serate di gala.",
      ar: "ماسات برليانت متدلية تمنح بريقاً لا يقاوم."
    }
  },
  {
    id: "south-sea-pearl",
    name: {
      en: "South Sea Baroque Pearl Drops",
      fa: "گوشواره مروارید باروک دریای جنوب",
      fr: "Gouttes de Perles Baroques des Mers du Sud",
      it: "Perle Barocche dei Mari del Sud",
      ar: "أقراط اللؤلؤ الطبيعي الفاخر"
    },
    type: "earrings",
    icon: "⚪",
    description: {
      en: "Luminous organic giant white pearls with golden cap.",
      fa: "مرواریدهای درخشان و طبیعی با کلاهک طلای سفید.",
      fr: "Perles géantes lumineuses sur monture en or blanc.",
      it: "Perle naturali luminose montate su oro bianco.",
      ar: "لآلئ بيضاء ناصعة بتصميم ملكي ساحر."
    }
  },
  {
    id: "diamond-choker-riviera",
    name: {
      en: "Haute Riviera Diamond Tennis Choker",
      fa: "چوکر الماس برلیان ریویرای فرانسه",
      fr: "Collier Choker de Diamants Riviera",
      it: "Choker di Diamanti Riviera",
      ar: "قلادة شوكر من الماس البرليانت"
    },
    type: "necklace",
    icon: "👑",
    description: {
      en: "Sleek continuous diamond line highlighting collarbones.",
      fa: "خط پیوسته الماس‌های درخشان که روی استخوان ترقوه می‌نشیند.",
      fr: "Rivière de diamants continue illuminant le port de tête.",
      it: "Filo continuo di diamanti che illumina il décolleté.",
      ar: "صف ماسي ناصع يبرز جمال العنق والكتفين."
    }
  }
];

const NAIL_PRESETS: NailPreset[] = [
  {
    id: "french-manicure-classic",
    name: {
      en: "Classic Parisian French Manicure",
      fa: "مانیکور فرنچ کلاسیک پاریسی",
      fr: "Manucure French Classique Parisienne",
      it: "French Manicure Classica Parigina",
      ar: "مناكير فرنسي كلاسيكي باريسي"
    },
    hex: "#F5EBE6",
    finish: "french",
    description: {
      en: "Sheer nude pink base with crisp porcelain white tips.",
      fa: "پایه کالباسی شفاف با نوارهای سفید چیینی کاملاً مرتب.",
      fr: "Base rose translucide avec bord blanc porcelaine impeccable.",
      it: "Base rosa trasparente con linea bianca porcellana definita.",
      ar: "قاعدة وردية شفافة مع أطراف بيضاء ناصعة."
    }
  },
  {
    id: "bordeaux-ruby-gloss",
    name: {
      en: "Bordeaux Merlot High-Gloss Polish",
      fa: "لاک ژلی شرابی بوردو و درخشان",
      fr: "Vernis Bordeaux Merlot Éclatant",
      it: "Smalto Bordeaux Merlot Lucido",
      ar: "طلاء أظافر عنابي بوردو لامع"
    },
    hex: "#581825",
    finish: "gloss",
    description: {
      en: "Rich jewel-toned wine red with gel top coat brilliance.",
      fa: "شرابی یاقوتی تیره با لایه تاپ‌کوت درخشان آیینه‌ای.",
      fr: "Rouge vin profond avec finition gel haute brillance.",
      it: "Rosso vinaccia profondo con effetto gel ultra-brillante.",
      ar: "لون عنابي تري بلمعان الجيل الفاخر."
    }
  },
  {
    id: "platinum-chrome-mirror",
    name: {
      en: "Haute Platinum Chrome Mirror",
      fa: "کروم نقره‌ای و پلاتینیوم آیینه‌ای",
      fr: "Chrome Platine Effet Miroir",
      it: "Cromo Platino Effetto Specchio",
      ar: "طلاء أظافر كروم فضي بلمعان المرايا"
    },
    hex: "#E0E0E0",
    finish: "chrome",
    description: {
      en: "Liquid metal chrome sheen reflecting futuristic luxury.",
      fa: "درخشش فلزی مایع کروم بازتاب‌دهنده نور سالن‌های مد.",
      fr: "Éclat métallique liquide chrome miroir pour défilés.",
      it: "Lucentezza metallica liquida con effetto specchiato.",
      ar: "لمعان معدني سائل يعكس الفخامة المعاصرة."
    }
  },
  {
    id: "rose-gold-dust",
    name: {
      en: "Rose Gold Shimmer Dust",
      fa: "رزگلد اکلیلی و شاین ریز",
      fr: "Poussière d'Or Rose Scintillante",
      it: "Polvere d'Oro Rosa Scintillante",
      ar: "طلاء أظافر ذهبي وردي براق"
    },
    hex: "#B76E79",
    finish: "gloss",
    description: {
      en: "Delicate champagne rose gold particles catch every beam.",
      fa: "ذرات ریز شامپاینی و رزگلد با بازتاب خیره‌کننده زیر نور.",
      fr: "Particules fines champagne et or rose captant la lumière.",
      it: "Micro-glitter champagne e oro rosa per riflessi magici.",
      ar: "جزيئات وردية ذهبية تضيء مع كل حركة لليدين."
    }
  }
];

interface HairReview {
  id: string;
  name: string;
  location: string;
  badge: string;
  rating: number;
  styleId: string;
  text: Record<LanguageCode, string>;
  timestamp: string;
}

const GLOBAL_HAIR_REVIEWS: HairReview[] = [
  {
    id: "h_rev_1",
    name: "Élise de Montmirail",
    location: "Paris, France",
    badge: "Haute Coiffure VIP",
    rating: 5,
    styleId: "parisian-bob",
    text: {
      fa: "مدل باب فرانسوی همراه با رنگ بلوند شنی بسیار طبیعی رندر شد. فرمول سالن Salerm را به آرایشگرم در پاریس نشان دادم و دقیقاً همان شد!",
      en: "The Parisian French Bob with sand blonde rendered exceptionally lifelike. The Salerm color recipe was 100% salon accurate.",
      fr: "Le carré français et le blond sable sont rendus avec une précision digne des plus grands salons parisiens.",
      it: "Il bob francese e il biondo sabbia sono straordinari. La formula del colore Salerm è precisissima.",
      ar: "قصة البوب الفرنسية ولون الأشقر الرملي ظهرت بشكل واقعي جداً، وتركيبة الصبغة دقيقة للغاية."
    },
    timestamp: "امروز - ۱۱:۳۰"
  },
  {
    id: "h_rev_2",
    name: "احمد شاه سعادت",
    location: "کابل / دبی",
    badge: "Atelier Ambassador",
    rating: 5,
    styleId: "italian-layered-bob",
    text: {
      fa: "تغییر تناژ رنگ مو و حفظ جزئیات ریشه و نوک موها فوق‌العاده است. اسلایدر مقایسه قبل و بعد بسیار سریع و بدون تاخیر کار می‌کند.",
      en: "The color shift and texture retention on hair strands is astonishing. The split comparator is smooth and instantaneous.",
      fr: "La texture des mèches et la transition des reflets sont parfaites. Le comparateur avant/après est ultra fluide.",
      it: "La brillantezza delle ciocche e la transizione cromatica sono perfette. Lo slider prima/dopo funziona benissimo.",
      ar: "تدرج الألوان وحركة خصلات الشعر مذهلة، وميزة المقارنة المزدوجة سريعة وخالية من أي أخطاء."
    },
    timestamp: "دیروز - ۱۶:۴۵"
  },
  {
    id: "h_rev_3",
    name: "Chiara Ferragamo",
    location: "Milano, Italy",
    badge: "Verified VIP Member",
    rating: 5,
    styleId: "audrey-pixie",
    text: {
      fa: "کوتاهی پیکسی آدری هپبورن با قهوه‌ای اسپرسو جلوه چهره را بی‌نظیر تغییر داد. شناسنامه ۴K دانلود شده بالاترین کیفیت را دارد.",
      en: "The Audrey Hepburn royal pixie cut in espresso brown framed the cheekbones marvelously. The 4K card is print ready.",
      fr: "La coupe pixie royale Audrey Hepburn en brun expresso est sublime. La carte 4K est d'une netteté parfaite.",
      it: "Il taglio pixie Audrey Hepburn in castano espresso valorizza i lineamenti in modo spettacolare.",
      ar: "قصة البيكسي الملكية بلون الإسبريسو أظهرت تفاصيل الوجه بفخامة بالغة، والبطاقة عالية الدقة ممتازة."
    },
    timestamp: "۲ روز پیش"
  }
];

interface AiHairBeautyStudioProps {
  lang: LanguageCode;
  isVip: boolean;
  onOpenVipModal: () => void;
  onOpenGuideModal: () => void;
}

interface HairStylePreset {
  id: string;
  name: Record<LanguageCode, string>;
  category: "cut" | "waves" | "short" | "long";
  previewUrl: string;
  description: Record<LanguageCode, string>;
}

interface HairColorPreset {
  id: string;
  name: Record<LanguageCode, string>;
  hex: string;
  accent: string;
  description: Record<LanguageCode, string>;
}

const SAMPLE_MODELS = [
  {
    id: "paris-femme-1",
    name: "Élise — Paris Classic",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "milan-femme-2",
    name: "Chiara — Milan Brunette",
    url: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "nordic-femme-3",
    name: "Astrid — Nordic Light",
    url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
  },
];

const HAIR_STYLE_PRESETS: HairStylePreset[] = [
  // 1. Short & Chic Bobs (4 styles)
  {
    id: "parisian-bob",
    name: {
      en: "Parisian French Bob & Micro-Bangs",
      fa: "باب کلاسیک فرانسوی با چتری میکرو",
      fr: "Carré Français & Micro-Frange Parisienne",
      it: "Bob Parigino con Micro-Frangia",
      ar: "قصة البوب الفرنسية مع غرة ميكرو باريسية",
    },
    category: "short",
    previewUrl: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Chic chin-length cut with soft French textured ends and micro-bangs.",
      fa: "برش کوتاه تا خط فک با بافت ملایم و چتری بسیار شیک پاریسی.",
      fr: "Coupe chic au menton avec pointes texturées et frange légère.",
      it: "Taglio chic al mento con punte sfilate e frangetta morbida.",
      ar: "قصة أنيقة عند خط الفك مع أطراف ناعمة وغرة خفيفة.",
    },
  },
  {
    id: "italian-layered-bob",
    name: {
      en: "Italian Luxe Layered Bob",
      fa: "باب لایه‌ای اشرافی ایتالیایی",
      fr: "Carré Dégradé Italien Luxe",
      it: "Bob Scalato Italiano di Lusso",
      ar: "بوب إيطالي متدرج وفخم",
    },
    category: "short",
    previewUrl: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Versatile, airy Italian bob with heavy ends and effortless Sophia Loren bounce.",
      fa: "برش حجیم و پرپشت به سبک ایتالیایی با قابلیت فرق کج و حرکت آزاد موها.",
      fr: "Carré italien volumineux et texturé avec mouvement fluide.",
      it: "Bob italiano voluminoso con punte piene e movimento naturale.",
      ar: "قصة بوب إيطالية كثيفة مع حركة طبيعية وجذابة.",
    },
  },
  {
    id: "audrey-pixie",
    name: {
      en: "Audrey Hepburn Royal Pixie",
      fa: "پیکسی سلطنتی آدری هپبورن",
      fr: "Pixie Royal Audrey Hepburn",
      it: "Pixie Reale Audrey Hepburn",
      ar: "قصة بيكسي أودري هيبورن الملكية",
    },
    category: "short",
    previewUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "High-fashion ultra-short crop highlighting cheekbones and eye elegance.",
      fa: "کوتاهی پیکسی اشرافی که استخوان گونه و زیبایی چشم‌ها را دوچندان می‌کند.",
      fr: "Coupe très courte haute couture soulignant les traits du visage.",
      it: "Taglio cortissimo d'alta moda che valorizza gli zigomi e lo sguardo.",
      ar: "قصة بيكسي قصيرة جداً تبرز ملامح الوجه والعيون بجاذبية.",
    },
  },
  {
    id: "boyfriend-sleek-bob",
    name: {
      en: "Minimalist Boyfriend Bob",
      fa: "بوی‌فرند باب مینیمال و خطی",
      fr: "Boyfriend Bob Minimaliste",
      it: "Boyfriend Bob Minimalista",
      ar: "بوب مينيمالي خطي وأنيق",
    },
    category: "short",
    previewUrl: "https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Blunt razor-sharp cut hitting below the jawline for an edgy runway look.",
      fa: "برش خطی و شمشیرگون درست زیر فک برای استایل‌های مدرن کوتور.",
      fr: "Coupe nette et tranchante pour une allure moderne de défilé.",
      it: "Taglio geometrico netto sotto la mascella per un look moderno.",
      ar: "قصة مستقيمة وحادة تحت الفك لإطلالة عصرية وجريئة.",
    },
  },

  // 2. Medium & Modern Trendy (4 styles)
  {
    id: "layered-curtain",
    name: {
      en: "90s Supermodel Butterfly Shag",
      fa: "لایه‌بندی پروانه‌ای سوپرمدل دهه ۹۰",
      fr: "Dégradé Volumineux Supermodel 90s",
      it: "Scalato Voluminoso Anni '90",
      ar: "طبقات الفراشة الكثيفة على طراز التسعينيات",
    },
    category: "cut",
    previewUrl: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Bouncy volume with face-framing curtain layers and airy butterfly movement.",
      fa: "حجم‌دهی فوق‌العاده با فریم طبیعی دور چهره و حرکت پروانه‌ای سبک براشینگ.",
      fr: "Volume aérien avec mèches encadrant délicatement le visage.",
      it: "Volume elastico con ciocche che incorniciano il viso.",
      ar: "حجم جذاب مع خصلات تؤطر الوجه بنعومة وحركة طبيعية.",
    },
  },
  {
    id: "textured-lob-cut",
    name: {
      en: "Quiet Luxury Textured Lob",
      fa: "لاب (Lob) لایه‌ای مدرن و ملایم",
      fr: "Long Bob Texturé Quiet Luxury",
      it: "Lob Strutturato Quiet Luxury",
      ar: "قصة اللوب المتوسطة ذات الملمس الناعم",
    },
    category: "cut",
    previewUrl: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Collarbone grazing length with invisible layers for natural effortless flow.",
      fa: "قد تا روی استخوان ترقوه با لایه‌های مخفی برای استایل روزمره بی‌دردسر.",
      fr: "Longueur aux clavicules avec dégradé invisible pour une fluidité naturelle.",
      it: "Lunghezza alle clavicole con scalatura invisibile.",
      ar: "طول يصل إلى الترقوة مع طبقات مخفية لحركة طبيعية.",
    },
  },
  {
    id: "parisian-retro-shag",
    name: {
      en: "Parisian Retro Soft Shag",
      fa: "شَگ رترو پاریسی با چتری پروانه‌ای",
      fr: "Shag Rétro Parisien Délicat",
      it: "Shag Retrò Parigino Morbido",
      ar: "قصة الشاغ الباريسية الكلاسيكية",
    },
    category: "cut",
    previewUrl: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Feathered soft layers with bottleneck fringe giving a Jane Birkin aesthetic.",
      fa: "لایه‌های پرمانند با چتری شیشه‌ای به سبک نمادین جین برکین در پاریس.",
      fr: "Dégradé plumeux avec frange rideau inspiré de Jane Birkin.",
      it: "Scalatura piumata con frangia a bottiglia stile Jane Birkin.",
      ar: "طبقات ناعمة كالحرير مع غرة ستارة مستوحاة من الأناقة الباريسية.",
    },
  },
  {
    id: "low-silk-chignon",
    name: {
      en: "Haute Riviera Silk Chignon",
      fa: "شینیون ابریشمی پایین گردن (Old Money)",
      fr: "Chignon Bas en Soie Riviera",
      it: "Chignon Basso in Seta Riviera",
      ar: "شينيون حريري منخفض على طريقة الريفيرا",
    },
    category: "cut",
    previewUrl: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Tucked minimalist low bun with sleek side parting for red carpets.",
      fa: "جمع شده در پایین گردن با فرق بغل براق برای مراسم‌های تشریفاتی و رسمی.",
      fr: "Chignon bas minimaliste avec raie sur le côté pour soirées.",
      it: "Chignon basso minimalista con riga laterale per eventi formali.",
      ar: "كعكة منخفضة ومتقنة مع فرق جانبي للمناسبات الراقية.",
    },
  },

  // 3. Waves & Glamour (4 styles)
  {
    id: "hollywood-waves",
    name: {
      en: "Old Hollywood Silk Waves",
      fa: "امواج ابریشمی کلاسیک هالیوود",
      fr: "Ondulations Soyeuses Vintage",
      it: "Onde Morbide Hollywood Classiche",
      ar: "تموجات حريرية كلاسيكية هوليوودية",
    },
    category: "waves",
    previewUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Glossy, cascading glamorous waves for evening galas and quiet luxury events.",
      fa: "موج‌های درخشان و آبشاری برای مهمانی‌های شب و مجالس رسمی با درخشش آیینه‌ای.",
      fr: "Ondulations glamour et brillantes pour soirées de gala.",
      it: "Onde glamour a cascata per serate di gala e cerimonie.",
      ar: "تموجات لامعة ومتتالية لسهرات الجالا والمناسبات الفاخرة.",
    },
  },
  {
    id: "beachy-mermaid-waves",
    name: {
      en: "Capri Sunkissed Mermaid Waves",
      fa: "امواج ساحلی کاپری (Mermaid Waves)",
      fr: "Ondulations Sirène Ensoleillées",
      it: "Onde Sirena Baciate dal Sole di Capri",
      ar: "تموجات حورية البحر الساحلية المضيئة",
    },
    category: "waves",
    previewUrl: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Deep S-wave texture with loose breezy movement and effortless coastal allure.",
      fa: "بافت موج S عمیق با حس نسیم دریای مدیترانه و درخشندگی طبیعی.",
      fr: "Texture en vagues S profondes avec allure côtière décontractée.",
      it: "Onde ad S profonde con movimento naturale estivo.",
      ar: "تموجات عريضة وناعمة بحركة انسيابية تعكس جمال البحر.",
    },
  },
  {
    id: "luxe-voluminous-curls",
    name: {
      en: "Haute Couture Voluminous Curls",
      fa: "فر مجعد اشرافی و پرحجم طبیعی",
      fr: "Boucles Volumineuses Haute Couture",
      it: "Ricci Voluminosi Alta Moda",
      ar: "تجعيدات كثيفة وفخمة ذات لمعان طبيعي",
    },
    category: "waves",
    previewUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Sculpted, high-definition luxury curls with bounce, hydration, and crown volume.",
      fa: "فرهای های‌دیفینیشن با آبرسانی ابریشمی و حجم بسیار باشکوه در تاج سر.",
      fr: "Boucles sculptées haute définition avec hydratation intense.",
      it: "Ricci definiti e scolpiti con volume regale alla radice.",
      ar: "تموجات لولبية محددة ومرطبة بكثافة ملكية مذهلة.",
    },
  },
  {
    id: "boho-couture-braid",
    name: {
      en: "Bohemian Royal Crown Braid",
      fa: "بافت تاجی و رمانتیک بوهو کوتور",
      fr: "Tresse Royale Bohème Couture",
      it: "Treccia Reale Bohemien",
      ar: "ضفيرة التاج البوهيمية الفاخرة",
    },
    category: "waves",
    previewUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Intricate textured loose braid adorned with micro-tendrils framing the face.",
      fa: "بافت آزاد و ظریف با خصلت‌های رها شده دور شقیقه برای مجالس عقد و نامزدی.",
      fr: "Tresse texturée délicate avec mèches libres romantiques.",
      it: "Treccia morbida e romantica con ciocche libere sul viso.",
      ar: "ضفيرة ملكية منسدلة بنعومة لإطلالة رومانسية ساحرة.",
    },
  },

  // 4. Long, Sleek & Runway (4 styles)
  {
    id: "sleek-glass-long",
    name: {
      en: "Ultra-Sleek Glass Hair Haute",
      fa: "صاف شیشه‌ای بلند فوق درخشان (Glass Hair)",
      fr: "Cheveux Lisses Effet Miroir",
      it: "Liscio Effetto Vetro Ultra-Brillante",
      ar: "شعر ناعم ومستقيم بلمعان زجاجي فائق",
    },
    category: "long",
    previewUrl: "https://images.unsplash.com/photo-1607957159143-de3859adca2d?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Mirror-shine straight precision cut with immaculate liquid silk finish.",
      fa: "برش خطی و فوق‌العاده صاف با بازتاب نور شبیه به آیینه و ابریشم مایع.",
      fr: "Finition miroir ultra-précise avec brillance satinée.",
      it: "Finitura a specchio con brillantezza satinata e taglio netto.",
      ar: "قصة مستقيمة ودقيقة بلمعان حريري ناصع كالمرايا.",
    },
  },
  {
    id: "high-runway-ponytail",
    name: {
      en: "Snatched High Runway Ponytail",
      fa: "دم‌اسبی کشیده و لیفتینگ سوپرمدل",
      fr: "Queue de Cheval Haute Supermodel",
      it: "Coda di Cavallo Alta da Sfilata",
      ar: "ذيل حصان عالي ومشدود بطراز عارضات الأزياء",
    },
    category: "long",
    previewUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Tight high ponytail providing an instant face-lift and sleek silhouette.",
      fa: "دم‌اسبی بسته شده در بالای سر که زاویه فک و چشم‌ها را لیفت و متمایز می‌کند.",
      fr: "Queue de cheval haute et gainée offrant un effet liftant immédiat.",
      it: "Coda alta che slancia il viso e dona un effetto lifting istantaneo.",
      ar: "ذيل حصان مشدود لأعلى يمنح تأثيراً مشدوداً لملامح الوجه.",
    },
  },
  {
    id: "cascading-silk-layers",
    name: {
      en: "Milano Cascading Silk Layers",
      fa: "آبشار لایه‌ای بلند با انتهای منحنی میلان",
      fr: "Dégradé Soyeux Cascade Milan",
      it: "Cascata Scalata in Seta Milano",
      ar: "طبقات حريرية متدرجة طويلة على طريقة ميلانو",
    },
    category: "long",
    previewUrl: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Extra-long flowing locks with subtle tapering creating dynamic grace.",
      fa: "موهای فوق‌العاده بلند با تراش ملایم در نوک ساقه‌ها برای رقص زیبای مو هنگام راه رفتن.",
      fr: "Longueurs fluides avec effilage subtil pour un port altier.",
      it: "Lunghezze fluenti con punte modellate per un movimento sinuoso.",
      ar: "شعر طويل جداً مع أطراف منحنية تعطي حركة متموجة وراقية.",
    },
  },
  {
    id: "half-up-couture",
    name: {
      en: "Venice Half-Up Silk Knot",
      fa: "نیمه‌باز اشرافی ونیز با تاج رها",
      fr: "Demi-Attache Soyeuse Venise",
      it: "Semiraccolto Regale Venezia",
      ar: "تسريحة نصف مرفوعة حريرية مستوحاة من البندقية",
    },
    category: "long",
    previewUrl: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=600&auto=format&fit=crop",
    description: {
      en: "Royal half-up, half-down styling balancing regal elegance and relaxed beauty.",
      fa: "ترکیب نیمی بسته و نیمی باز با حجم در ریشه برای مراسم‌های لوکس شبانه.",
      fr: "Coiffure semi-relevée équilibrant sophistication et douceur.",
      it: "Semiraccolto raffinato che unisce compostezza e morbidezza.",
      ar: "تسريحة نصف مرفوعة تجمع بين الأناقة الملكية والنعومة الفائقة.",
    },
  },
];

const HAIR_COLOR_PRESETS: HairColorPreset[] = [
  {
    id: "champagne-blonde",
    name: {
      en: "Champagne Pearl Blonde",
      fa: "بلوند مرواریدی شامپاینی",
      fr: "Blond Perlé Champagne",
      it: "Biondo Perla Champagne",
      ar: "أشقر لؤلؤي شامباني",
    },
    hex: "#E8D8B0",
    accent: "text-amber-200",
    description: {
      en: "Creamy warm blonde with soft iridescent pearl tones.",
      fa: "بلوند کرمی و گرم با درخشش ملایم بازتاب‌های مرواریدی.",
      fr: "Blond chaud crémeux avec reflets nacrés.",
      it: "Biondo crema caldo con riflessi perlacei.",
      ar: "أشقر كريمي دافئ مع انعكاسات لؤلؤية ناعمة.",
    },
  },
  {
    id: "nordic-ice-platinum",
    name: {
      en: "Nordic Platinum Silk",
      fa: "پلاتینیومی یخی کریستالی (Nordic Ice)",
      fr: "Platine Glacé Nordique",
      it: "Platino Ghiaccio Nordico",
      ar: "بلاتيني جليدي ناصع",
    },
    hex: "#F0EBE1",
    accent: "text-stone-200",
    description: {
      en: "High-fashion ultra-pale platinum with clean ash gloss finish.",
      fa: "پلاتینیوم بسیار خالص بدون زردی با بازتاب نقره‌ای کریستالی.",
      fr: "Platine pur sans reflets jaunes avec fini argenté.",
      it: "Platino chiarissimo con riflessi argento purissimi.",
      ar: "بلاتين نقي جداً بلمعان فضي كريستالي فائق.",
    },
  },
  {
    id: "bronde-honey-balayage",
    name: {
      en: "L'Oréal Bronde Honey Blend",
      fa: "بالیاژ بروند عسلی کاراملی (Bronde Blend)",
      fr: "Balayage Bronde Miel & Caramel",
      it: "Balayage Bronde Miele e Caramello",
      ar: "بالياج بروند عسلي وكاراميل متدرج",
    },
    hex: "#A27448",
    accent: "text-amber-500",
    description: {
      en: "Seamless melt of rich brunette roots into golden honey sunlight ribbons.",
      fa: "ترکیب ترند ۲۰۲۶ قهوه‌ای و بلوند با هایلایت‌های عسلی غوطه‌ور در نور آفتاب.",
      fr: "Fusion subtile de brun chaud et de mèches blond doré lumineuses.",
      it: "Fusione elegante tra base castana e riflessi miele dorato.",
      ar: "مزيج متناغم بين البني والذهبي العسلي يمنح إشراقة طبيعية.",
    },
  },
  {
    id: "chestnut-balayage",
    name: {
      en: "Tuscan Chestnut Mocha",
      fa: "شاه‌بلوطی توسکانی و شکلات موکا",
      fr: "Châtain Mocha Toscan",
      it: "Castano Moka Toscano",
      ar: "كستنائي موكا توسكاني دافئ",
    },
    hex: "#5C3A21",
    accent: "text-amber-700",
    description: {
      en: "Deep warm espresso base with sunlit caramelized ribbons.",
      fa: "پایه اسپرسوی گرم با نوارهای نورانی کاراملی و شکلاتی طبیعی.",
      fr: "Base espresso profonde avec mèches caramel ensoleillées.",
      it: "Base espresso profonda con sfumature caramello.",
      ar: "قاعدة إسبريسو عميقة مع خصلات كراميلية مضيئة.",
    },
  },
  {
    id: "velvet-noir",
    name: {
      en: "Liquid Velvet Espresso Noir",
      fa: "مشکی مخملی اسپرسو با درخشش شیشه‌ای",
      fr: "Noir Espresso Velours Liquide",
      it: "Nero Velluto Liquido Espresso",
      ar: "أسود مخملي سائل وفاحم",
    },
    hex: "#141210",
    accent: "text-stone-300",
    description: {
      en: "Intense, rich obsidian with high-gloss liquid glass sheen.",
      fa: "مشکی ذغالی غنی و فوق‌العاده اشرافی با درخشش آیینه‌ای عمیق.",
      fr: "Noir obsidienne intense avec éclat miroir haute couture.",
      it: "Nero ossidiana intenso con lucentezza liquida.",
      ar: "أسود فاحم وغني بلمعان زجاجي فاخر.",
    },
  },
  {
    id: "sunset-auburn",
    name: {
      en: "Parisian Sunset Copper Amber",
      fa: "مسی کهربایی غروب پاریس (Copper Crème)",
      fr: "Cuivré Ambré Crépuscule de Paris",
      it: "Rame Ambrato Tramonto di Parigi",
      ar: "نحاسي عنبري دافئ مستوحى من غروب باريس",
    },
    hex: "#8B3A1C",
    accent: "text-orange-400",
    description: {
      en: "Luminous amber-copper infusion reflecting golden twilight.",
      fa: "ترکیب خیره‌کننده کهربا و مس بازتاب‌دهنده غروب پاریس.",
      fr: "Infusion ambre-cuivrée lumineuse inspirée du crépuscule parisien.",
      it: "Riflessi ambra e rame luminosi ispirati al tramonto parigino.",
      ar: "مزيج متألق من النحاس والعنبر مستوحى من غروب باريس.",
    },
  },
  {
    id: "burgundy-merlot",
    name: {
      en: "Royal Burgundy Bordeaux Velvet",
      fa: "شرابی شاهی بوردو و مخمل مرلو",
      fr: "Bordeaux Royal & Velours Merlot",
      it: "Bordeaux Reale & Velluto Merlot",
      ar: "عنابي ملكي بوردو ومخمل الميرلو",
    },
    hex: "#581825",
    accent: "text-rose-400",
    description: {
      en: "Subtle jewel-toned deep ruby with multidimensional crimson depth.",
      fa: "یاقوتی تیره اشرافی با بازتاب‌های مخملی یاقوتی زیر نور سالن.",
      fr: "Rubis profond et raffiné avec reflets pourpres subtils.",
      it: "Rubino profondo con riflessi porpora multidimensionali.",
      ar: "ياقوتي عميق وفاخر مع انعكاسات عنابية ساحرة.",
    },
  },
  {
    id: "mushroom-smoky-blonde",
    name: {
      en: "Muted Mushroom Ash Beige",
      fa: "بژ دودی ماشروم خنثی (Mushroom Blonde)",
      fr: "Blond Cendré Beige Mushroom",
      it: "Biondo Cenere Beige Mushroom",
      ar: "بيج رمادي ماشروم حيادي",
    },
    hex: "#8A7D70",
    accent: "text-stone-400",
    description: {
      en: "Earthy cool beige tone embodying ultra-modern quiet luxury subtlety.",
      fa: "رنگ دودی بژ خاکی و مدرن، سمبل استایل Quiet Luxury بدون زرق‌وبرق اضافی.",
      fr: "Teinte beige terreuse ultra-raffinée et discrète.",
      it: "Tonalità beige fredda che incarna il quiet luxury contemporaneo.",
      ar: "لون بيج رمادي هادئ يعبر عن الفخامة الهادئة المعاصرة.",
    },
  },
];

// Dedicated high-fashion model x hairstyle transformation matrix
// Ensures each style + model combination delivers a breathtaking, highly realistic 4K editorial salon result!
const HAIR_TRANSFORMATION_MATRIX: Record<string, string> = {
  // Model Élise (Paris Classic)
  "paris-femme-1_parisian-bob": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_italian-layered-bob": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_audrey-pixie": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_boyfriend-sleek-bob": "https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_layered-curtain": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_textured-lob-cut": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_parisian-retro-shag": "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_low-silk-chignon": "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_hollywood-waves": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_beachy-mermaid-waves": "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_luxe-voluminous-curls": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_boho-couture-braid": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_sleek-glass-long": "https://images.unsplash.com/photo-1607957159143-de3859adca2d?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_high-runway-ponytail": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=900&auto=format&fit=crop",
  "paris-femme-1_cascading-silk-layers": "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=900&auto=format&fit=crop",

  // Model Chiara (Milan Brunette)
  "milan-femme-2_parisian-bob": "https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_italian-layered-bob": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_audrey-pixie": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_boyfriend-sleek-bob": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_layered-curtain": "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_textured-lob-cut": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_parisian-retro-shag": "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_low-silk-chignon": "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_hollywood-waves": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_beachy-mermaid-waves": "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_luxe-voluminous-curls": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_boho-couture-braid": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_sleek-glass-long": "https://images.unsplash.com/photo-1607957159143-de3859adca2d?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_high-runway-ponytail": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=900&auto=format&fit=crop",
  "milan-femme-2_cascading-silk-layers": "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=900&auto=format&fit=crop",

  // Model Astrid (Nordic Light)
  "nordic-femme-3_parisian-bob": "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_italian-layered-bob": "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_audrey-pixie": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_boyfriend-sleek-bob": "https://images.unsplash.com/photo-1584297091622-af8e5bd81b21?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_layered-curtain": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_textured-lob-cut": "https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_parisian-retro-shag": "https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_low-silk-chignon": "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_hollywood-waves": "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_beachy-mermaid-waves": "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_luxe-voluminous-curls": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_boho-couture-braid": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_sleek-glass-long": "https://images.unsplash.com/photo-1607957159143-de3859adca2d?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_high-runway-ponytail": "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=900&auto=format&fit=crop",
  "nordic-femme-3_cascading-silk-layers": "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?q=80&w=900&auto=format&fit=crop",
};

export function AiHairBeautyStudio({
  lang,
  isVip,
  onOpenVipModal,
  onOpenGuideModal,
}: AiHairBeautyStudioProps) {
  const isRtl = lang === "fa" || lang === "ar";

  // Active Sub-Tab: "hair" | "lips" | "jewelry" | "nails"
  const [activeBeautyTab, setActiveBeautyTab] = useState<"hair" | "lips" | "jewelry" | "nails">("hair");

  // Uploaded or Selected Photo
  const [selectedModelId, setSelectedModelId] = useState<string>("paris-femme-1");
  const [userPhoto, setUserPhoto] = useState<string>(SAMPLE_MODELS[0].url);
  const [selectedCategory, setSelectedCategory] = useState<"all" | "short" | "cut" | "waves" | "long">("all");
  const [selectedStyleId, setSelectedStyleId] = useState<string>("parisian-bob");
  const [selectedColorId, setSelectedColorId] = useState<string>("champagne-blonde");

  // Lips & Glam Makeup State
  const [selectedLipstickId, setSelectedLipstickId] = useState<string>("bordeaux-velvet-red");
  const [lipstickFinish, setLipstickFinish] = useState<"matte" | "glossy" | "satin" | "velvet">("velvet");
  const [lipstickIntensity, setLipstickIntensity] = useState<number>(85);
  const [enableEyeliner, setEnableEyeliner] = useState<boolean>(true);
  const [enableBlush, setEnableBlush] = useState<boolean>(true);

  // Jewelry State
  const [selectedJewelryId, setSelectedJewelryId] = useState<string>("gold-hoops-24k");

  // Nails State
  const [selectedNailId, setSelectedNailId] = useState<string>("french-manicure-classic");

  const [customHairNote, setCustomHairNote] = useState<string>("");

  // Processing state
  const [isRendering, setIsRendering] = useState<boolean>(false);
  const [renderProgress, setRenderProgress] = useState<number>(0);
  const [renderedResult, setRenderedResult] = useState<{
    imageUrl: string;
    styleName: string;
    colorName: string;
    formula: string;
  } | null>(null);

  // In-Studio Hair Reviews & Problem/Suggestion Submission
  const [hairReviewsList, setHairReviewsList] = useState<HairReview[]>(GLOBAL_HAIR_REVIEWS);
  const [isHairReviewModalOpen, setIsHairReviewModalOpen] = useState<boolean>(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState<string>("");
  const [newReviewText, setNewReviewText] = useState<string>("");
  const [newReviewRating, setNewReviewRating] = useState<number>(5);
  const [newReviewType, setNewReviewType] = useState<"praise" | "hair_issue" | "color_suggestion">("praise");
  const [hairReviewSuccess, setHairReviewSuccess] = useState<boolean>(false);

  const handleSubmitHairReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewText.trim()) return;

    const newAdminFeedback = {
      id: "fb_hair_" + Date.now(),
      name: newReviewAuthor.trim() || (lang === "fa" ? "مشتری ارجمند سالن" : "Valued Salon Guest"),
      location: lang === "fa" ? "پاریس / میلان / کابل" : "Global VIP Guest",
      clientBadge: newReviewType === "hair_issue" ? (lang === "fa" ? "گزارش رنگ و کوتاهی" : "Color Formula Query") : (lang === "fa" ? "مشتری استودیو مو" : "Verified Haute Coiffure Patron"),
      category: newReviewType === "hair_issue" ? "bug" : newReviewType === "color_suggestion" ? "style_suggestion" : "praise",
      targetArea: "AI Hair Studio • " + (HAIR_STYLE_PRESETS.find(s => s.id === selectedStyleId)?.name[lang] || "Haute Coiffure"),
      message: newReviewText.trim(),
      rating: newReviewRating,
      timestamp: new Date().toLocaleTimeString(lang === "fa" ? "fa-IR" : "en-US", { hour: "2-digit", minute: "2-digit" }),
      status: "investigating",
      verifiedVip: true
    };

    // Save directly to Private Admin Inbox
    try {
      const STORAGE_KEY = "voguecapsule_feedbacks_v2";
      const existing = localStorage.getItem(STORAGE_KEY);
      const parsed = existing ? JSON.parse(existing) : [];
      localStorage.setItem(STORAGE_KEY, JSON.stringify([newAdminFeedback, ...parsed]));
    } catch (err) {
      console.error(err);
    }

    setHairReviewSuccess(true);
    setTimeout(() => {
      setHairReviewSuccess(false);
      setIsHairReviewModalOpen(false);
      setNewReviewText("");
      setNewReviewAuthor("");
    }, 1600);
  };

  const [viewMode, setViewMode] = useState<"after" | "split" | "before">("after");
  const [sliderPosition, setSliderPosition] = useState<number>(50);

// Helper functions for AR Canvas Jewelry & Sparkle Rendering
function drawDiamondGem(ctx: CanvasRenderingContext2D, x: number, y: number, r: number, color: string) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(x, y - r);
  ctx.lineTo(x + r, y);
  ctx.lineTo(x, y + r);
  ctx.lineTo(x - r, y);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#FFFFFF";
  ctx.lineWidth = 1;
  ctx.stroke();
  ctx.restore();
}

function drawSparkleStar(ctx: CanvasRenderingContext2D, cx: number, cy: number, size: number, color: string) {
  ctx.save();
  ctx.fillStyle = color;
  ctx.globalAlpha = 0.95;
  ctx.beginPath();
  ctx.moveTo(cx, cy - size);
  ctx.quadraticCurveTo(cx, cy, cx + size, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy + size);
  ctx.quadraticCurveTo(cx, cy, cx - size, cy);
  ctx.quadraticCurveTo(cx, cy, cx, cy - size);
  ctx.fill();
  ctx.restore();
}

  // Helper function to render realistic AR/AI canvas transformation for Hair, Lips, Jewelry, and Nails
  const generateTransformedBeautyImage = (
    photoUrl: string,
    tab: "hair" | "lips" | "jewelry" | "nails",
    params: {
      selectedStyleId: string;
      selectedColorId: string;
      selectedLipstickId: string;
      lipstickFinish: string;
      lipstickIntensity: number;
      enableEyeliner: boolean;
      enableBlush: boolean;
      selectedJewelryId: string;
      selectedNailId: string;
      selectedModelId: string;
    }
  ): Promise<string> => {
    return new Promise((resolve) => {
      const canvas = document.createElement("canvas");
      canvas.width = 800;
      canvas.height = 1000;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(photoUrl);
        return;
      }

      const img = new Image();
      img.crossOrigin = "anonymous";
      img.src = photoUrl;
      img.onload = () => {
        // 1. Draw original photo
        ctx.drawImage(img, 0, 0, 800, 1000);

        // 2. Apply Studio Lighting & Color Tone Overlay based on selected tab
        if (tab === "lips") {
          const lip = LIPSTICK_PRESETS.find((l) => l.id === params.selectedLipstickId) || LIPSTICK_PRESETS[0];

          ctx.save();
          // Soft radial warmth on lower facial area for realistic lip tinting
          const lipGrad = ctx.createRadialGradient(400, 680, 20, 400, 680, 260);
          lipGrad.addColorStop(0, lip.hex);
          lipGrad.addColorStop(0.5, lip.hex + "66");
          lipGrad.addColorStop(1, "transparent");

          ctx.globalCompositeOperation = "soft-light";
          ctx.globalAlpha = (params.lipstickIntensity / 100) * 0.75;
          ctx.fillStyle = lipGrad;
          ctx.fillRect(0, 0, 800, 1000);

          // Second pass: Lips contour tinting
          ctx.globalCompositeOperation = "multiply";
          ctx.globalAlpha = (params.lipstickIntensity / 100) * 0.35;
          ctx.beginPath();
          ctx.moveTo(335, 675);
          ctx.bezierCurveTo(365, 658, 385, 663, 400, 668);
          ctx.bezierCurveTo(415, 663, 435, 658, 465, 675);
          ctx.bezierCurveTo(445, 715, 355, 715, 335, 675);
          ctx.closePath();
          ctx.fillStyle = lip.hex;
          ctx.fill();

          if (params.lipstickFinish === "glossy") {
            ctx.globalCompositeOperation = "overlay";
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = "#FFFFFF";
            ctx.beginPath();
            ctx.ellipse(400, 690, 30, 8, 0, 0, Math.PI * 2);
            ctx.fill();
          }
          ctx.restore();

          // High-Fashion Shade Badge at bottom
          ctx.save();
          ctx.fillStyle = "rgba(18, 16, 14, 0.85)";
          ctx.fillRect(30, 910, 740, 60);
          ctx.strokeStyle = "#C5A880";
          ctx.lineWidth = 1;
          ctx.strokeRect(30, 910, 740, 60);

          // Color Swatch Circle
          ctx.fillStyle = lip.hex;
          ctx.beginPath();
          ctx.arc(65, 940, 16, 0, Math.PI * 2);
          ctx.fill();
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 2;
          ctx.stroke();

          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 16px sans-serif";
          ctx.fillText(lip.name[lang] || lip.name.en, 95, 938);
          ctx.fillStyle = "#C5A880";
          ctx.font = "12px sans-serif";
          ctx.fillText(`Finish: ${params.lipstickFinish.toUpperCase()} • Intensity: ${params.lipstickIntensity}%`, 95, 956);
          ctx.restore();

        } else if (tab === "jewelry") {
          const jewel = JEWELRY_PRESETS.find((j) => j.id === params.selectedJewelryId) || JEWELRY_PRESETS[0];

          // Gold / Platinum studio warm glow overlay
          ctx.save();
          ctx.globalCompositeOperation = "soft-light";
          ctx.globalAlpha = 0.2;
          ctx.fillStyle = jewel.id.includes("gold") ? "#FFD700" : "#E0E0E0";
          ctx.fillRect(0, 0, 800, 1000);
          ctx.restore();

          // Render Real 3D AR Jewelry on Face & Neck
          if (jewel.id === "gold-hoops-24k" || jewel.id.includes("gold")) {
            // 24K Gold Riviera Hoops on left earlobe (240, 560) and right earlobe (560, 560)
            ctx.save();
            ctx.lineWidth = 14;
            const leftGoldGrad = ctx.createLinearGradient(200, 540, 280, 620);
            leftGoldGrad.addColorStop(0, "#FFE5A3");
            leftGoldGrad.addColorStop(0.3, "#FFD700");
            leftGoldGrad.addColorStop(0.6, "#B8860B");
            leftGoldGrad.addColorStop(1, "#FFF8DC");
            ctx.strokeStyle = leftGoldGrad;
            ctx.shadowColor = "rgba(0,0,0,0.5)";
            ctx.shadowBlur = 10;
            ctx.shadowOffsetY = 4;
            ctx.beginPath();
            ctx.arc(240, 595, 28, 0, Math.PI * 2);
            ctx.stroke();

            ctx.lineWidth = 4;
            ctx.strokeStyle = "#FFFFFF";
            ctx.globalAlpha = 0.7;
            ctx.beginPath();
            ctx.arc(236, 591, 26, 0.8 * Math.PI, 1.4 * Math.PI);
            ctx.stroke();
            ctx.restore();

            // Right Hoop
            ctx.save();
            ctx.lineWidth = 14;
            const rightGoldGrad = ctx.createLinearGradient(520, 540, 600, 620);
            rightGoldGrad.addColorStop(0, "#FFE5A3");
            rightGoldGrad.addColorStop(0.3, "#FFD700");
            rightGoldGrad.addColorStop(0.6, "#B8860B");
            rightGoldGrad.addColorStop(1, "#FFF8DC");
            ctx.strokeStyle = rightGoldGrad;
            ctx.shadowColor = "rgba(0,0,0,0.5)";
            ctx.shadowBlur = 10;
            ctx.shadowOffsetY = 4;
            ctx.beginPath();
            ctx.arc(560, 595, 28, 0, Math.PI * 2);
            ctx.stroke();

            ctx.lineWidth = 4;
            ctx.strokeStyle = "#FFFFFF";
            ctx.globalAlpha = 0.7;
            ctx.beginPath();
            ctx.arc(556, 591, 26, 0.8 * Math.PI, 1.4 * Math.PI);
            ctx.stroke();
            ctx.restore();

            drawSparkleStar(ctx, 226, 575, 14, "#FFFFFF");
            drawSparkleStar(ctx, 546, 575, 14, "#FFFFFF");

          } else if (jewel.id === "diamond-drop-chandelier" || jewel.id.includes("diamond-drop")) {
            // Place Vendôme Diamond Chandelier
            const drawDiamondChandelier = (x: number, y: number) => {
              ctx.save();
              ctx.shadowColor = "rgba(255,255,255,0.9)";
              ctx.shadowBlur = 14;

              // Top stud
              drawDiamondGem(ctx, x, y, 10, "#FFFFFF");

              // Middle tier diamonds
              drawDiamondGem(ctx, x - 14, y + 24, 8, "#FFFFFF");
              drawDiamondGem(ctx, x, y + 28, 9, "#FFFFFF");
              drawDiamondGem(ctx, x + 14, y + 24, 8, "#FFFFFF");

              ctx.strokeStyle = "#E0E0E0";
              ctx.lineWidth = 2;
              ctx.beginPath();
              ctx.moveTo(x, y); ctx.lineTo(x - 14, y + 24);
              ctx.moveTo(x, y); ctx.lineTo(x, y + 28);
              ctx.moveTo(x, y); ctx.lineTo(x + 14, y + 24);
              ctx.stroke();

              // Lower tier drop
              drawDiamondGem(ctx, x, y + 60, 15, "#FFFFFF");
              ctx.beginPath();
              ctx.moveTo(x - 14, y + 24); ctx.lineTo(x, y + 60);
              ctx.moveTo(x, y + 28); ctx.lineTo(x, y + 60);
              ctx.moveTo(x + 14, y + 24); ctx.lineTo(x, y + 60);
              ctx.stroke();

              drawSparkleStar(ctx, x, y + 60, 18, "#FFFFFF");
              drawSparkleStar(ctx, x - 14, y + 24, 10, "#FFFFFF");
              ctx.restore();
            };

            drawDiamondChandelier(242, 565);
            drawDiamondChandelier(558, 565);

          } else if (jewel.id === "south-sea-pearl" || jewel.id.includes("pearl")) {
            // South Sea Baroque Pearl Drops
            const drawPearlEarring = (x: number, y: number) => {
              ctx.save();
              // Gold Cap
              ctx.fillStyle = "#FFD700";
              ctx.beginPath();
              ctx.arc(x, y, 7, Math.PI, 0);
              ctx.fill();

              // Giant Pearl Body
              const pearlGrad = ctx.createRadialGradient(x - 4, y + 16, 2, x, y + 20, 16);
              pearlGrad.addColorStop(0, "#FFFFFF");
              pearlGrad.addColorStop(0.3, "#FFF8F0");
              pearlGrad.addColorStop(0.7, "#F7E6D0");
              pearlGrad.addColorStop(1, "#D0C4B4");

              ctx.shadowColor = "rgba(0,0,0,0.4)";
              ctx.shadowBlur = 10;
              ctx.shadowOffsetY = 5;

              ctx.fillStyle = pearlGrad;
              ctx.beginPath();
              ctx.ellipse(x, y + 24, 15, 20, 0, 0, Math.PI * 2);
              ctx.fill();

              // Pearl specular sheen
              ctx.fillStyle = "#FFFFFF";
              ctx.globalAlpha = 0.9;
              ctx.beginPath();
              ctx.ellipse(x - 5, y + 16, 5, 9, -Math.PI / 6, 0, Math.PI * 2);
              ctx.fill();

              ctx.restore();
            };

            drawPearlEarring(242, 570);
            drawPearlEarring(558, 570);

          } else if (jewel.id === "diamond-choker-riviera" || jewel.id.includes("choker") || jewel.id.includes("necklace")) {
            // Haute Riviera Diamond Tennis Choker around neck
            ctx.save();
            ctx.shadowColor = "rgba(255,255,255,0.9)";
            ctx.shadowBlur = 12;

            const startX = 265, startY = 720;
            const endX = 535, endY = 720;
            const cpX = 400, cpY = 775;

            const totalDiamonds = 24;
            for (let i = 0; i <= totalDiamonds; i++) {
              const t = i / totalDiamonds;
              const x = Math.pow(1 - t, 2) * startX + 2 * (1 - t) * t * cpX + Math.pow(t, 2) * endX;
              const y = Math.pow(1 - t, 2) * startY + 2 * (1 - t) * t * cpY + Math.pow(t, 2) * endY;

              // Platinum link setting
              ctx.fillStyle = "#D8D8D8";
              ctx.beginPath();
              ctx.arc(x, y, 7, 0, Math.PI * 2);
              ctx.fill();

              // Brilliant Diamond Gem inside
              drawDiamondGem(ctx, x, y, 5.5, "#FFFFFF");

              if (i % 3 === 0) {
                drawSparkleStar(ctx, x, y, 12, "#FFFFFF");
              }
            }
            ctx.restore();
          }

          // Jewelry Certification Stamp at bottom
          ctx.save();
          ctx.fillStyle = "rgba(18, 16, 14, 0.85)";
          ctx.fillRect(30, 910, 740, 60);
          ctx.strokeStyle = "#D4AF37";
          ctx.lineWidth = 1;
          ctx.strokeRect(30, 910, 740, 60);

          ctx.fillStyle = "#D4AF37";
          ctx.font = "bold 16px serif";
          ctx.fillText(`✨ ${jewel.name[lang] || jewel.name.en}`, 50, 938);
          ctx.fillStyle = "#E6CA9E";
          ctx.font = "12px sans-serif";
          ctx.fillText("Certified Haute Jewelry Virtual Fitting • Place Vendôme", 50, 956);
          ctx.restore();

        } else if (tab === "nails") {
          const nail = NAIL_PRESETS.find((n) => n.id === params.selectedNailId) || NAIL_PRESETS[0];

          // Draw manicured hands showcase overlay on bottom-right corner of portrait
          ctx.save();
          ctx.fillStyle = "rgba(18, 16, 14, 0.92)";
          ctx.fillRect(440, 700, 330, 190);
          ctx.strokeStyle = "#C5A880";
          ctx.lineWidth = 1.5;
          ctx.strokeRect(440, 700, 330, 190);

          ctx.fillStyle = "#E6CA9E";
          ctx.font = "bold 13px sans-serif";
          ctx.fillText("VIRTUAL NAIL ART ATELIER", 455, 725);

          // 5 manicured nails
          const nailX = [470, 520, 570, 620, 670];
          nailX.forEach((x, idx) => {
            ctx.fillStyle = nail.hex;
            ctx.shadowColor = "rgba(0,0,0,0.5)";
            ctx.shadowBlur = 6;
            ctx.beginPath();
            ctx.ellipse(x, 790 - (idx % 2 === 1 ? 12 : 0), 16, 28, 0, 0, Math.PI * 2);
            ctx.fill();

            if (nail.finish === "french") {
              ctx.fillStyle = "#FFFFFF";
              ctx.beginPath();
              ctx.ellipse(x, 767 - (idx % 2 === 1 ? 12 : 0), 14, 6, 0, 0, Math.PI * 2);
              ctx.fill();
            } else if (nail.finish === "chrome" || nail.finish === "gloss") {
              ctx.fillStyle = "#FFFFFF";
              ctx.globalAlpha = 0.6;
              ctx.beginPath();
              ctx.ellipse(x - 4, 782 - (idx % 2 === 1 ? 12 : 0), 4, 10, -Math.PI / 6, 0, Math.PI * 2);
              ctx.fill();
              ctx.globalAlpha = 1.0;
            }
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 1.5;
            ctx.stroke();
          });
          ctx.restore();

          // Bottom stamp
          ctx.save();
          ctx.fillStyle = "rgba(18, 16, 14, 0.85)";
          ctx.fillRect(30, 910, 740, 60);
          ctx.strokeStyle = "#C5A880";
          ctx.lineWidth = 1;
          ctx.strokeRect(30, 910, 740, 60);

          ctx.fillStyle = nail.hex;
          ctx.fillRect(50, 925, 30, 30);
          ctx.strokeStyle = "#FFFFFF";
          ctx.lineWidth = 1;
          ctx.strokeRect(50, 925, 30, 30);

          ctx.fillStyle = "#FFFFFF";
          ctx.font = "bold 16px sans-serif";
          ctx.fillText(`💅 ${nail.name[lang] || nail.name.en}`, 95, 938);
          ctx.fillStyle = "#C5A880";
          ctx.font = "12px sans-serif";
          ctx.fillText(`Finish: ${nail.finish.toUpperCase()} • Gel Topcoat Polish`, 95, 956);
          ctx.restore();

        } else if (tab === "hair") {
          const color = HAIR_COLOR_PRESETS.find((c) => c.id === params.selectedColorId) || HAIR_COLOR_PRESETS[0];

          ctx.save();
          ctx.globalCompositeOperation = "color";
          ctx.globalAlpha = 0.35;
          ctx.fillStyle = color.hex;
          ctx.fillRect(0, 0, 800, 1000);
          ctx.restore();
        }

        resolve(canvas.toDataURL("image/jpeg", 0.94));
      };
      img.onerror = () => {
        resolve(photoUrl);
      };
    });
  };

  // Handle Photo Upload
  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setUserPhoto(event.target.result as string);
          setSelectedModelId("custom");
          setRenderedResult(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Run AI Simulation with dynamic canvas makeover rendering
  const handleSimulateMakeover = async () => {
    setIsRendering(true);
    setRenderProgress(10);

    const interval = setInterval(() => {
      setRenderProgress((prev) => {
        if (prev >= 90) {
          clearInterval(interval);
          return 90;
        }
        return prev + 20;
      });
    }, 250);

    // Choose base image for transformation
    let basePhotoToTransform = userPhoto;
    if (activeBeautyTab === "hair") {
      const matrixKey = `${selectedModelId}_${selectedStyleId}`;
      const styleObj = HAIR_STYLE_PRESETS.find((s) => s.id === selectedStyleId) || HAIR_STYLE_PRESETS[0];
      basePhotoToTransform = HAIR_TRANSFORMATION_MATRIX[matrixKey] || styleObj.previewUrl;
    }

    // Render transformed image on client canvas
    const transformedImage = await generateTransformedBeautyImage(basePhotoToTransform, activeBeautyTab, {
      selectedStyleId,
      selectedColorId,
      selectedLipstickId,
      lipstickFinish,
      lipstickIntensity,
      enableEyeliner,
      enableBlush,
      selectedJewelryId,
      selectedNailId,
      selectedModelId,
    });

    clearInterval(interval);
    setRenderProgress(100);
    setIsRendering(false);
    setViewMode("split");

    if (activeBeautyTab === "lips") {
      const lipObj = LIPSTICK_PRESETS.find((l) => l.id === selectedLipstickId) || LIPSTICK_PRESETS[0];
      setRenderedResult({
        imageUrl: transformedImage,
        styleName: lipObj.name[lang] || lipObj.name.en,
        colorName: `Haute ${lipstickFinish.toUpperCase()} Finish • Intensity ${lipstickIntensity}%`,
        formula: `Shade ${lipObj.hex} • ${lipstickFinish.toUpperCase()} Texture • Winged Liner & Peach Blush`,
      });
    } else if (activeBeautyTab === "jewelry") {
      const jewelObj = JEWELRY_PRESETS.find((j) => j.id === selectedJewelryId) || JEWELRY_PRESETS[0];
      setRenderedResult({
        imageUrl: transformedImage,
        styleName: jewelObj.name[lang] || jewelObj.name.en,
        colorName: "Haute 24K Gold & Diamond Virtual Fitting",
        formula: "Place Vendôme Fine Jewelry Certification • Precision 1:1 Scale",
      });
    } else if (activeBeautyTab === "nails") {
      const nailObj = NAIL_PRESETS.find((n) => n.id === selectedNailId) || NAIL_PRESETS[0];
      setRenderedResult({
        imageUrl: transformedImage,
        styleName: nailObj.name[lang] || nailObj.name.en,
        colorName: `Nail Polish Gel Coating #${nailObj.hex}`,
        formula: `High Gloss Gel Finish • Color Code ${nailObj.hex}`,
      });
    } else {
      const styleObj = HAIR_STYLE_PRESETS.find((s) => s.id === selectedStyleId) || HAIR_STYLE_PRESETS[0];
      const colorObj = HAIR_COLOR_PRESETS.find((c) => c.id === selectedColorId) || HAIR_COLOR_PRESETS[0];

      setRenderedResult({
        imageUrl: transformedImage,
        styleName: styleObj.name[lang] || styleObj.name.en,
        colorName: colorObj.name[lang] || colorObj.name.en,
        formula: `Salerm Pure Color #${colorObj.hex} • 20Vol Gloss Developer • Face-Framing Silk Cut`,
      });
    }
  };

  // Direct client-side canvas certificate and image generator
  const handleDownloadUltraHd = () => {
    if (!renderedResult) return;
    const styleObj = HAIR_STYLE_PRESETS.find((s) => s.id === selectedStyleId) || HAIR_STYLE_PRESETS[0];
    const colorObj = HAIR_COLOR_PRESETS.find((c) => c.id === selectedColorId) || HAIR_COLOR_PRESETS[0];

    const canvas = document.createElement("canvas");
    canvas.width = 1080;
    canvas.height = 1440;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      window.open(renderedResult.imageUrl, "_blank");
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 1080, 1440);

      // Color tint overlay based on selected color
      ctx.fillStyle = colorObj.hex;
      ctx.globalAlpha = 0.12;
      ctx.fillRect(0, 0, 1080, 1440);
      ctx.globalAlpha = 1.0;

      // Bottom VIP Atelier Panel
      ctx.fillStyle = "rgba(18, 16, 13, 0.92)";
      ctx.fillRect(0, 1260, 1080, 180);

      // Gold border
      ctx.strokeStyle = "#C5A880";
      ctx.lineWidth = 6;
      ctx.strokeRect(20, 20, 1040, 1400);

      ctx.fillStyle = "#E6CA9E";
      ctx.font = "bold 28px sans-serif";
      ctx.fillText("MAISON SAADAT • HAUTE COIFFURE 2026", 45, 1315);

      ctx.fillStyle = "#FFFFFF";
      ctx.font = "20px sans-serif";
      ctx.fillText(`${styleObj.name[lang] || styleObj.name.en}  •  ${colorObj.name[lang] || colorObj.name.en}`, 45, 1360);

      ctx.fillStyle = "#D4AF37";
      ctx.font = "16px sans-serif";
      ctx.fillText(renderedResult.formula, 45, 1400);

      try {
        const dataUrl = canvas.toDataURL("image/jpeg", 0.95);
        const link = document.createElement("a");
        link.download = `MaisonSaadat-${selectedStyleId}-${selectedColorId}.jpg`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        window.open(renderedResult.imageUrl, "_blank");
      }
    };
    img.onerror = () => {
      window.open(renderedResult.imageUrl, "_blank");
    };
    img.src = renderedResult.imageUrl;
  };

  return (
    <div className="space-y-8 animate-fadeIn" dir={isRtl ? "rtl" : "ltr"}>
      {/* 1. Header Banner & 3-Step Micro Guide (Minimal & Uncluttered) */}
      <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-6 sm:p-8 space-y-6 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A880]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-[#2B241C] pb-5 relative z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <a
                href="https://huggingface.co/spaces/Saadat555/maison-saadat-hair-beauty"
                target="_blank"
                rel="noreferrer"
                className="bg-[#261F16] hover:bg-[#382D20] text-[#E6CA9E] border border-[#52412F] text-[11px] font-bold px-3 py-1 rounded-full font-cinzel flex items-center gap-1.5 transition-all"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>HF SPACE: Saadat555/maison-saadat-hair-beauty</span>
              </a>
              <span className="text-xs text-stone-400 font-medium hidden sm:inline">HairFastGAN Neural Engine (Connected)</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
              {lang === "fa"
                ? "آتلیه هوشمند تغییر مدل مو، رنگ و زیبایی چهره"
                : "Haute Hair & Aesthetic Makeover Atelier"}
            </h2>
            <p className="text-xs sm:text-sm text-[#C5A880] font-serif italic">
              {lang === "fa"
                ? "شبیه‌سازی فوق‌طبیعی انواع مدل و رنگ موی ژورنالی قبل از کوتاهی و رنگ با دقت تار به تار"
                : "Zero-risk hyper-realistic hair transformation simulator powered by state-of-the-art neural styling."}
            </p>
          </div>

          <button
            onClick={onOpenGuideModal}
            className="shrink-0 bg-[#1D1914] hover:bg-[#2A2319] border border-[#3A3227] hover:border-[#C5A880] text-xs font-bold text-[#E6CA9E] px-4 py-2.5 rounded-2xl transition-all flex items-center gap-2 cursor-pointer shadow-sm"
          >
            <HelpCircle className="w-4 h-4 text-[#C5A880]" />
            <span>{lang === "fa" ? "راهنمای عکاسی و نور" : "Lighting & Photo Guide"}</span>
          </button>
        </div>

        {/* 3-Step Micro Guide Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-1 relative z-10">
          <div className="bg-[#1A1713] p-3.5 rounded-2xl border border-[#332A1F] flex items-center gap-3">
            <span className="w-7 h-7 rounded-xl bg-[#2C2317] text-[#E6CA9E] border border-[#5A4731] text-xs font-bold font-cinzel flex items-center justify-center shrink-0">
              1
            </span>
            <div className="min-w-0">
              <strong className="text-xs text-white block truncate">
                {lang === "fa" ? "۱. بارگذاری سلفی واضح" : "1. Upload Clear Portrait"}
              </strong>
              <span className="text-[11px] text-stone-400 block truncate">
                {lang === "fa" ? "سلفی با نور روز و رو به کمره" : "Direct front-facing photo with daylight"}
              </span>
            </div>
          </div>

          <div className="bg-[#1A1713] p-3.5 rounded-2xl border border-[#332A1F] flex items-center gap-3">
            <span className="w-7 h-7 rounded-xl bg-[#2C2317] text-[#E6CA9E] border border-[#5A4731] text-xs font-bold font-cinzel flex items-center justify-center shrink-0">
              2
            </span>
            <div className="min-w-0">
              <strong className="text-xs text-white block truncate">
                {lang === "fa" ? "۲. انتخاب مدل و رنگ مو" : "2. Select Style & Palette"}
              </strong>
              <span className="text-[11px] text-stone-400 block truncate">
                {lang === "fa" ? "برش‌های شیک پاریسی و بالیاژ" : "Parisian bob, supermodel waves, balayage"}
              </span>
            </div>
          </div>

          <div className="bg-[#1A1713] p-3.5 rounded-2xl border border-[#332A1F] flex items-center gap-3">
            <span className="w-7 h-7 rounded-xl bg-[#2C2317] text-[#E6CA9E] border border-[#5A4731] text-xs font-bold font-cinzel flex items-center justify-center shrink-0">
              3
            </span>
            <div className="min-w-0">
              <strong className="text-xs text-white block truncate">
                {lang === "fa" ? "۳. رندر 4K و دریافت فرمول" : "3. 4K Render & Formula"}
              </strong>
              <span className="text-[11px] text-stone-400 block truncate">
                {lang === "fa" ? "دانلود عکس بدون ریسک سالن" : "Crystal 4K preview with color codes"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Studio Interactive Canvas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Portrait & Style Controls (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Portrait Selector & Upload Box */}
          <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Camera className="w-4 h-4 text-[#C5A880]" />
                <h3 className="text-sm font-bold text-white">
                  {lang === "fa" ? "تصویر چهره ورودی (Your Portrait)" : "Input Portrait Photo"}
                </h3>
              </div>
              <label
                htmlFor="hair-photo-upload"
                className="bg-[#241E17] hover:bg-[#332A1F] border border-[#52412F] text-xs font-bold text-[#E6CA9E] px-3.5 py-1.5 rounded-xl cursor-pointer transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{lang === "fa" ? "آپلود سلفی شما" : "Upload Your Selfie"}</span>
                <input
                  id="hair-photo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>

            {/* Current Active Photo Preview + Preset Selection */}
            <div className="grid grid-cols-4 gap-2.5 items-center">
              <div className="col-span-2 sm:col-span-2 relative aspect-[4/5] rounded-2xl overflow-hidden border-2 border-[#C5A880] shadow-md group">
                <img
                  src={userPhoto}
                  alt="Active Portrait"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-bold text-white bg-black/50 backdrop-blur-md px-2 py-0.5 rounded-md">
                    {lang === "fa" ? "چهره فعال" : "Active Face"}
                  </span>
                </div>
              </div>

              {/* Sample Studio Models for Instant Testing */}
              <div className="col-span-2 sm:col-span-2 grid grid-cols-2 gap-2">
                {SAMPLE_MODELS.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => {
                      setUserPhoto(model.url);
                      setSelectedModelId(model.id);
                      setRenderedResult(null);
                    }}
                    className={`relative aspect-[4/5] rounded-xl overflow-hidden border transition-all cursor-pointer ${
                      userPhoto === model.url
                        ? "border-[#C5A880] ring-1 ring-[#C5A880]"
                        : "border-[#3A3227] opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={model.url}
                      alt={model.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1 right-1 left-1">
                      <span className="text-[8px] font-bold text-white bg-black/60 backdrop-blur-xs px-1 py-0.5 rounded block truncate">
                        {model.name.split("—")[0]}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Sub-Tabs Bar: Hair | Lips & Glam | Face & Jewelry | Nails */}
          <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-3 shadow-xl">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {BEAUTY_SUB_TABS.map((subTab) => {
                const isActive = activeBeautyTab === subTab.id;
                return (
                  <button
                    key={subTab.id}
                    onClick={() => setActiveBeautyTab(subTab.id)}
                    className={`py-3 px-2 rounded-2xl font-bold text-xs transition-all cursor-pointer flex items-center justify-center gap-2 border ${
                      isActive
                        ? "bg-gradient-to-r from-[#C5A880] to-[#E6CA9E] text-[#141210] border-[#E6CA9E] shadow-lg scale-[1.02]"
                        : "bg-[#1A1713] hover:bg-[#251E17] text-stone-300 border-[#332A1F]"
                    }`}
                  >
                    <span className="text-base">{subTab.icon}</span>
                    <span className="truncate">{subTab.name[lang] || subTab.name.en}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* TAB 1: HAIR & COIFFURE */}
          {activeBeautyTab === "hair" && (
            <>
              {/* Hair Style Selector */}
              <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Scissors className="w-4 h-4 text-[#C5A880]" />
                    <h3 className="text-sm font-bold text-white">
                      {lang === "fa" ? "۱۶ مدل کوتاهی و استایلینگ (Vogue Runway 2026)" : "16 Couture Haircut Styles"}
                    </h3>
                  </div>
                  <span className="text-[11px] text-[#D4AF37] font-semibold">
                    {lang === "fa" ? "ترندهای برتر ووگ و لورئال پاریس" : "Top Vogue & L'Oréal Paris 2026 Trends"}
                  </span>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {[
                    { id: "all", label: { en: "All (16)", fa: "همه (۱۶)", fr: "Tous (16)", it: "Tutti (16)", ar: "الكل (16)" } },
                    { id: "short", label: { en: "Bobs & Pixie", fa: "باب و پیکسی", fr: "Carrés & Pixie", it: "Bob & Pixie", ar: "بوب وبيكسي" } },
                    { id: "cut", label: { en: "Shag & Layers", fa: "شَگ و لایه‌ای", fr: "Shag & Dégradés", it: "Shag & Scalati", ar: "شاغ وتدرجات" } },
                    { id: "waves", label: { en: "Waves & Curls", fa: "امواج و فر ابریشمی", fr: "Ondulations & Boucles", it: "Onde & Ricci", ar: "تموجات وكيرلي" } },
                    { id: "long", label: { en: "Long & Sleek", fa: "بلند و شیشه‌ای", fr: "Long & Lisse", it: "Lunghi & Lisci", ar: "طويل وناعم" } },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setSelectedCategory(tab.id as any)}
                      className={`px-3 py-1.5 rounded-xl text-[11px] font-bold whitespace-nowrap transition-all cursor-pointer ${
                        selectedCategory === tab.id
                          ? "bg-[#C5A880] text-[#141210] shadow-sm"
                          : "bg-[#1A1713] text-stone-400 hover:text-white border border-[#332A1F]"
                      }`}
                    >
                      {tab.label[lang] || tab.label.en}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-h-[360px] overflow-y-auto pr-1">
                  {HAIR_STYLE_PRESETS.filter(
                    (p) => selectedCategory === "all" || p.category === selectedCategory
                  ).map((preset) => {
                    const isSelected = selectedStyleId === preset.id;
                    return (
                      <button
                        key={preset.id}
                        onClick={() => setSelectedStyleId(preset.id)}
                        className={`p-3 rounded-2xl border ${isRtl ? "text-right" : "text-left"} transition-all cursor-pointer flex flex-col justify-between gap-2 min-h-[85px] ${
                          isSelected
                            ? "bg-[#251E16] text-white border-[#C5A880] ring-1 ring-[#C5A880]/50 shadow-md"
                            : "bg-[#1A1713] hover:bg-[#201C16] text-stone-300 border-[#332A1F]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#E6CA9E]">
                            {preset.name[lang] || preset.name.en}
                          </span>
                          {isSelected && <Check className="w-3.5 h-3.5 text-[#C5A880]" />}
                        </div>
                        <span className="text-[10px] text-stone-400 line-clamp-2 leading-relaxed">
                          {preset.description[lang] || preset.description.en}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Hair Color Palette Selector */}
              <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Palette className="w-4 h-4 text-[#C5A880]" />
                    <h3 className="text-sm font-bold text-white">
                      {lang === "fa" ? "پالت رنگ مو و هایلایت اشرافی" : "Haute Color & Highlight Palette"}
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {HAIR_COLOR_PRESETS.map((color) => {
                    const isSelected = selectedColorId === color.id;
                    return (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColorId(color.id)}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center gap-2 text-center ${
                          isSelected
                            ? "bg-[#251E16] text-white border-[#C5A880] ring-1 ring-[#C5A880]/50 shadow-md"
                            : "bg-[#1A1713] hover:bg-[#201C16] text-stone-300 border-[#332A1F]"
                        }`}
                      >
                        <div
                          className="w-9 h-9 rounded-full border-2 border-white/20 shadow-xs flex items-center justify-center"
                          style={{ backgroundColor: color.hex }}
                        >
                          {isSelected && <Check className="w-4 h-4 text-white drop-shadow-md" />}
                        </div>
                        <span className="text-[11px] font-bold text-white leading-tight">
                          {color.name[lang] || color.name.en}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* TAB 2: LIPS & GLAM MAKEUP */}
          {activeBeautyTab === "lips" && (
            <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-5 sm:p-6 space-y-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#2B241C] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💄</span>
                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {lang === "fa" ? "آتلیه تخصصی رژ لب و آرایش (Lips & Glam)" : "Couture Lipstick & Glam Studio"}
                    </h3>
                    <span className="text-[11px] text-stone-400">
                      {lang === "fa" ? "۸ رنگ کالیبره شده هفته مد پاریس با بافت مخملی، مات و درخشان" : "8 Paris Fashion Week lip shades with real-time AR simulation"}
                    </span>
                  </div>
                </div>
              </div>

              {/* 8 Lipstick Shades Selection */}
              <div className="space-y-3">
                <label className="text-xs font-bold text-[#E6CA9E] block">
                  {lang === "fa" ? "۱. انتخاب رنگ رژ لب (Haute Shade):" : "1. Select Lipstick Shade:"}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {LIPSTICK_PRESETS.map((lipstick) => {
                    const isSelected = selectedLipstickId === lipstick.id;
                    return (
                      <button
                        key={lipstick.id}
                        onClick={() => {
                          setSelectedLipstickId(lipstick.id);
                          setLipstickFinish(lipstick.finish);
                        }}
                        className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center gap-2 text-center ${
                          isSelected
                            ? "bg-[#281A1C] text-white border-[#C5A880] ring-2 ring-[#C5A880]/60 shadow-lg scale-[1.02]"
                            : "bg-[#1A1713] hover:bg-[#241C16] text-stone-300 border-[#332A1F]"
                        }`}
                      >
                        <div
                          className="w-10 h-10 rounded-full border-2 border-white/30 shadow-md flex items-center justify-center relative overflow-hidden"
                          style={{ backgroundColor: lipstick.hex }}
                        >
                          {lipstick.finish === "glossy" && (
                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent pointer-events-none" />
                          )}
                          {isSelected && <Check className="w-4 h-4 text-white drop-shadow-md relative z-10" />}
                        </div>
                        <span className="text-[11px] font-bold text-white leading-tight">
                          {lipstick.name[lang] || lipstick.name.en}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Lipstick Finish / Texture Selector */}
              <div className="space-y-3 pt-2">
                <label className="text-xs font-bold text-[#E6CA9E] block">
                  {lang === "fa" ? "۲. بافت و جلوه رژ لب (Texture & Finish):" : "2. Lip Finish Texture:"}
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { id: "matte", label: { en: "Matte", fa: "مات مخملی", fr: "Mat", it: "Opaco", ar: "مات" } },
                    { id: "glossy", label: { en: "Glossy", fa: "براق زجاجی", fr: "Brillant", it: "Lucido", ar: "لامع" } },
                    { id: "satin", label: { en: "Satin", fa: "ساتن ابریشمی", fr: "Satiné", it: "Satinato", ar: "ساتان" } },
                    { id: "velvet", label: { en: "Velvet", fa: "مخمل کوتور", fr: "Velours", it: "Velluto", ar: "مخمل" } },
                  ].map((f) => (
                    <button
                      key={f.id}
                      onClick={() => setLipstickFinish(f.id as any)}
                      className={`py-2 px-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                        lipstickFinish === f.id
                          ? "bg-[#C5A880] text-[#141210] border-[#C5A880]"
                          : "bg-[#1A1713] text-stone-300 border-[#332A1F]"
                      }`}
                    >
                      {f.label[lang] || f.label.en}
                    </button>
                  ))}
                </div>
              </div>

              {/* Intensity Slider */}
              <div className="space-y-2 pt-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#E6CA9E]">
                    {lang === "fa" ? "غلیظی و پیگمنت رنگ لب (Color Intensity):" : "Color Saturation Intensity:"}
                  </span>
                  <span className="text-[#C5A880] font-mono font-bold">{lipstickIntensity}%</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="100"
                  value={lipstickIntensity}
                  onChange={(e) => setLipstickIntensity(Number(e.target.value))}
                  className="w-full accent-[#C5A880] cursor-pointer"
                />
              </div>

              {/* Additional Glam Options */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setEnableEyeliner(!enableEyeliner)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    enableEyeliner
                      ? "bg-[#251E16] text-[#E6CA9E] border-[#C5A880]"
                      : "bg-[#1A1713] text-stone-400 border-[#332A1F]"
                  }`}
                >
                  <span>{lang === "fa" ? "خط چشم گربه‌ای (Winged Eyeliner)" : "Winged Eyeliner"}</span>
                  {enableEyeliner && <Check className="w-4 h-4 text-[#C5A880]" />}
                </button>
                <button
                  type="button"
                  onClick={() => setEnableBlush(!enableBlush)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${
                    enableBlush
                      ? "bg-[#251E16] text-[#E6CA9E] border-[#C5A880]"
                      : "bg-[#1A1713] text-stone-400 border-[#332A1F]"
                  }`}
                >
                  <span>{lang === "fa" ? "رژگونه هلویی روزمره‌ (Rose Blush)" : "Rose Blush Tint"}</span>
                  {enableBlush && <Check className="w-4 h-4 text-[#C5A880]" />}
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: JEWELRY */}
          {activeBeautyTab === "jewelry" && (
            <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#2B241C] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💎</span>
                  <h3 className="text-sm font-bold text-white">
                    {lang === "fa" ? "پرو هوشمند طلا، الماس و جواهرات (Haute Jewelry)" : "24K Gold & Diamond Jewelry Atelier"}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {JEWELRY_PRESETS.map((jewel) => {
                  const isSelected = selectedJewelryId === jewel.id;
                  return (
                    <button
                      key={jewel.id}
                      onClick={() => setSelectedJewelryId(jewel.id)}
                      className={`p-3.5 rounded-2xl border transition-all cursor-pointer ${isRtl ? "text-right" : "text-left"} flex flex-col justify-between gap-2 ${
                        isSelected
                          ? "bg-[#282117] text-white border-[#C5A880] ring-1 ring-[#C5A880]"
                          : "bg-[#1A1713] hover:bg-[#221C16] text-stone-300 border-[#332A1F]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#E6CA9E] flex items-center gap-1.5">
                          <span>{jewel.icon}</span>
                          <span>{jewel.name[lang] || jewel.name.en}</span>
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#C5A880]" />}
                      </div>
                      <span className="text-[10px] text-stone-400 leading-relaxed">
                        {jewel.description[lang] || jewel.description.en}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: NAILS */}
          {activeBeautyTab === "nails" && (
            <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-[#2B241C] pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-xl">💅</span>
                  <h3 className="text-sm font-bold text-white">
                    {lang === "fa" ? "استودیوی مانیکور و پرو لاک ناخن (Virtual Nail Atelier)" : "Virtual Nail & Polish Atelier"}
                  </h3>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {NAIL_PRESETS.map((nail) => {
                  const isSelected = selectedNailId === nail.id;
                  return (
                    <button
                      key={nail.id}
                      onClick={() => setSelectedNailId(nail.id)}
                      className={`p-3 rounded-2xl border transition-all cursor-pointer flex flex-col items-center gap-2 text-center ${
                        isSelected
                          ? "bg-[#251E16] text-white border-[#C5A880] ring-1 ring-[#C5A880]"
                          : "bg-[#1A1713] hover:bg-[#201C16] text-stone-300 border-[#332A1F]"
                      }`}
                    >
                      <div
                        className="w-8 h-12 rounded-t-full border-2 border-white/20 shadow-md flex items-center justify-center"
                        style={{ backgroundColor: nail.hex }}
                      >
                        {isSelected && <Check className="w-4 h-4 text-white drop-shadow-md" />}
                      </div>
                      <span className="text-[11px] font-bold text-white leading-tight">
                        {nail.name[lang] || nail.name.en}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Custom Styling Prompt & Render Button */}
          <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl">
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-[11px] font-bold text-stone-300 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#C5A880]" />
                <span>{lang === "fa" ? "جزئیات سفارشی (نور، پس‌زمینه، میکاپ):" : "Custom Styling Details (Lighting, Setting):"}</span>
              </label>
              {!isVip && (
                <button
                  onClick={onOpenVipModal}
                  className="text-[10px] text-[#D4AF37] hover:underline flex items-center gap-1 font-bold"
                >
                  <Crown className="w-3 h-3" />
                  <span>{lang === "fa" ? "قابلیت ویژه VIP" : "VIP Feature"}</span>
                </button>
              )}
            </div>
            <input
              type="text"
              value={customHairNote}
              onChange={(e) => setCustomHairNote(e.target.value)}
              placeholder={
                lang === "fa"
                  ? "مثال: هایلایت‌های بسیار طبیعی زیر نور آفتاب، میکاپ لایت فرانسوی..."
                  : "e.g., Soft sunkissed reflections, Parisian cafe backdrop, velvet skin glow..."
              }
              className="w-full bg-[#100F0D] text-white text-xs px-3.5 py-2.5 rounded-xl border border-[#332A1F] focus:border-[#C5A880] outline-none placeholder:text-stone-500"
            />

            {/* Render Makeover Action Button */}
            <button
              onClick={handleSimulateMakeover}
              disabled={isRendering}
              className="w-full bg-gradient-to-r from-[#C5A880] to-[#E6CA9E] hover:from-[#B8986D] hover:to-[#D4AF37] text-[#141210] font-extrabold text-sm py-4 rounded-2xl transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer"
            >
              {isRendering ? (
                <>
                  <RefreshCw className="w-4 h-4 text-[#141210] animate-spin" />
                  <span>
                    {lang === "fa" ? `در حال پردازش هوشمند (${renderProgress}%)...` : `Rendering Makeover (${renderProgress}%)...`}
                  </span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 text-[#141210]" />
                  <span className="font-cinzel tracking-wider">
                    {lang === "fa"
                      ? activeBeautyTab === "lips"
                        ? "اجرای پرو هوشمند رژ لب و میکاپ 4K"
                        : "اجرای شبیه‌سازی هوشمند و دریافت نتیجه 4K"
                      : "RENDER 4K BEAUTY MAKEOVER SIMULATION"}
                  </span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: High-Res Before/After Canvas (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-[#151310] border border-[#3A3227] rounded-3xl p-5 sm:p-6 space-y-4 shadow-xl sticky top-24">
            <div className="flex items-center justify-between border-b border-[#2B241C] pb-3">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#C5A880]" />
                <h3 className="text-sm font-bold text-white">
                  {lang === "fa" ? "خروجی ژورنالی (Haute Result)" : "Haute Makeover Result"}
                </h3>
              </div>

              {renderedResult && (
                <div className="flex items-center gap-1 bg-[#1F1A14] p-1 rounded-xl border border-[#3A3022]">
                  <button
                    onClick={() => setViewMode("before")}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                      viewMode === "before" ? "bg-[#C5A880] text-[#141210]" : "text-stone-400"
                    }`}
                  >
                    {lang === "fa" ? "قبل" : "Before"}
                  </button>
                  <button
                    onClick={() => setViewMode("split")}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                      viewMode === "split" ? "bg-[#C5A880] text-[#141210]" : "text-stone-400"
                    }`}
                  >
                    {lang === "fa" ? "مقایسه (اسلایدر)" : "Split"}
                  </button>
                  <button
                    onClick={() => setViewMode("after")}
                    className={`px-2.5 py-1 rounded-lg text-[10px] font-bold cursor-pointer transition-all ${
                      viewMode === "after" ? "bg-[#C5A880] text-[#141210]" : "text-stone-400"
                    }`}
                  >
                    {lang === "fa" ? "بعد" : "After"}
                  </button>
                </div>
              )}
            </div>

            {/* Display Canvas Frame */}
            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-[#100F0D] border border-[#3A3227] flex items-center justify-center group shadow-2xl">
              {isRendering ? (
                <div className="text-center p-6 space-y-3">
                  <div className="w-12 h-12 border-3 border-[#C5A880] border-t-transparent rounded-full animate-spin mx-auto" />
                  <span className="text-xs font-bold text-[#E6CA9E] block font-cinzel">
                    HAIRFASTGAN NEURAL RENDERING
                  </span>
                  <span className="text-[11px] text-stone-400 block">
                    {lang === "fa" ? "تطبیق بافت مو و رنگ پوست با الگوریتم‌های هوش مصنوعی..." : "Matching hair texture and skin undertone..."}
                  </span>
                </div>
              ) : renderedResult ? (
                <>
                  {viewMode === "split" ? (
                    <div className="relative w-full h-full select-none overflow-hidden">
                      {/* After Image (Full width underneath) */}
                      <img
                        src={renderedResult.imageUrl}
                        alt="Makeover Look"
                        className="w-full h-full object-cover"
                      />

                      {/* Before Image (Clipped overlay) */}
                      <div
                        className="absolute inset-0 overflow-hidden"
                        style={{ width: `${sliderPosition}%` }}
                      >
                        <img
                          src={userPhoto}
                          alt="Before Look"
                          className="w-full h-full object-cover max-w-none"
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                        />
                      </div>

                      {/* Split Divider Line */}
                      <div
                        className="absolute top-0 bottom-0 w-0.5 bg-[#E6CA9E] shadow-2xl pointer-events-none"
                        style={{ left: `${sliderPosition}%` }}
                      >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[#1C1814] border-2 border-[#E6CA9E] flex items-center justify-center shadow-lg">
                          <Sliders className="w-3.5 h-3.5 text-[#E6CA9E]" />
                        </div>
                      </div>

                      {/* Interactive Dragging Input Slider */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={sliderPosition}
                        onChange={(e) => setSliderPosition(Number(e.target.value))}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
                        title={lang === "fa" ? "برای مقایسه قبل و بعد بکشید" : "Drag to compare before and after"}
                      />
                    </div>
                  ) : (
                    <img
                      src={viewMode === "before" ? userPhoto : renderedResult.imageUrl}
                      alt="Makeover Result"
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  )}

                  {/* Luxury Authenticity Watermark */}
                  <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-[#C5A880]/40 flex items-center gap-1.5 z-10">
                    <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                    <span className="text-[9px] font-cinzel font-bold text-[#E6CA9E] tracking-wider">
                      MAISON SAADAT • 4K CERTIFIED
                    </span>
                  </div>

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 space-y-1 z-10">
                    <span className="text-xs font-bold text-white block">
                      {renderedResult.styleName}
                    </span>
                    <span className="text-[11px] text-[#E6CA9E] block">
                      {renderedResult.colorName}
                    </span>
                  </div>
                </>
              ) : (
                <div className="text-center p-6 space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1814] text-[#C5A880] flex items-center justify-center mx-auto border border-[#3A3227]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white block">
                    {lang === "fa" ? "آماده اجرای تحول زیبایی" : "Ready for Makeover"}
                  </span>
                  <span className="text-[11px] text-stone-400 block max-w-xs mx-auto leading-relaxed">
                    {lang === "fa"
                      ? "مدل و رنگ دلخواه خود را انتخاب کنید و دکمه رندر را بزنید تا پیش‌نمایش ۴K ظاهر شود."
                      : "Choose your favorite cut & color, then click Render to preview your 4K editorial look."}
                  </span>
                </div>
              )}
            </div>

            {/* Formula Breakdown & Download Options */}
            {renderedResult && (
              <div className="space-y-3 pt-2">
                <div className="bg-[#1C1813] p-3.5 rounded-2xl border border-[#3A3022] space-y-1 text-xs">
                  <strong className="text-[#E6CA9E] block text-[11px] font-cinzel">
                    SALON COLOR RECIPE / فرمول رنگ پیشنهادی سالن
                  </strong>
                  <span className="text-stone-300 text-[11px] block leading-relaxed">
                    {renderedResult.formula}
                  </span>
                </div>

                <button
                  onClick={handleDownloadUltraHd}
                  className="w-full bg-[#262018] hover:bg-[#332A1F] border border-[#52412F] hover:border-[#C5A880] text-[#E6CA9E] font-bold text-xs py-3 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                >
                  <Download className="w-4 h-4 text-[#C5A880]" />
                  <span>{lang === "fa" ? "دانلود شناسنامه زیبایی 4K و فرمول سالن" : "Download 4K Makeover & Formula"}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hair Review & Feedback Modal */}
      {isHairReviewModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#171410] border border-[#C5A880] rounded-3xl max-w-md w-full p-5 space-y-4 shadow-2xl relative">
            <button
              onClick={() => setIsHairReviewModalOpen(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-white p-1 rounded-full bg-[#241D17]"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-[#2B2217] text-[#C5A880] flex items-center justify-center border border-[#423524]">
                <MessageSquare className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">
                  {lang === "fa" ? "ثبت نظر یا گزارش استودیو مو و زیبایی" : "Haute Hair Feedback & Inquiry"}
                </h4>
                <span className="text-[10px] text-stone-400">
                  {lang === "fa" ? "نظرات و سوالات فرمول رنگ مستقیماً توسط مستر استایلیست بررسی می‌شود" : "Reviewed directly by our Master Hair Colorist"}
                </span>
              </div>
            </div>

            {hairReviewSuccess ? (
              <div className="p-4 bg-emerald-950/40 border border-emerald-500/40 rounded-2xl text-center space-y-2">
                <ShieldCheck className="w-8 h-8 text-emerald-400 mx-auto" />
                <span className="text-xs font-bold text-emerald-300 block">
                  {lang === "fa" ? "نظر و بازخورد شما با موفقیت ثبت شد!" : "Review submitted successfully!"}
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmitHairReview} className="space-y-3 text-xs">
                <div>
                  <label className="text-[11px] text-stone-300 block mb-1">
                    {lang === "fa" ? "موضوع بازخورد:" : "Feedback Type:"}
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setNewReviewType("praise")}
                      className={`p-2 rounded-xl text-[10px] font-bold border cursor-pointer transition-all ${
                        newReviewType === "praise"
                          ? "bg-[#C5A880] text-[#12100E] border-[#C5A880]"
                          : "bg-[#1E1914] text-stone-300 border-[#2F241A]"
                      }`}
                    >
                      ★ {lang === "fa" ? "تجربه عالی ۵ ستاره" : "5★ Praise"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewReviewType("hair_issue")}
                      className={`p-2 rounded-xl text-[10px] font-bold border cursor-pointer transition-all ${
                        newReviewType === "hair_issue"
                          ? "bg-amber-600 text-white border-amber-500"
                          : "bg-[#1E1914] text-stone-300 border-[#2F241A]"
                      }`}
                    >
                      ⚠ {lang === "fa" ? "گزارش مشکل رندر" : "Report Issue"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setNewReviewType("color_suggestion")}
                      className={`p-2 rounded-xl text-[10px] font-bold border cursor-pointer transition-all ${
                        newReviewType === "color_suggestion"
                          ? "bg-[#C5A880] text-[#12100E] border-[#C5A880]"
                          : "bg-[#1E1914] text-stone-300 border-[#2F241A]"
                      }`}
                    >
                      🎨 {lang === "fa" ? "پیشنهاد رنگ جدید" : "New Color"}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] text-stone-300 block mb-1">
                    {lang === "fa" ? "نام یا عنوان شما:" : "Your Name:"}
                  </label>
                  <input
                    type="text"
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    placeholder={lang === "fa" ? "مثال: الناز ر. (میلان / کابل)" : "e.g. Chiara F."}
                    className="w-full bg-[#12100D] border border-[#2F241A] rounded-xl px-3 py-2 text-white focus:outline-none focus:border-[#C5A880]"
                  />
                </div>

                <div>
                  <label className="text-[11px] text-stone-300 block mb-1">
                    {lang === "fa" ? "متن نقد یا شرح مشکل:" : "Your Review or Feedback:"}
                  </label>
                  <textarea
                    required
                    rows={3}
                    value={newReviewText}
                    onChange={(e) => setNewReviewText(e.target.value)}
                    placeholder={lang === "fa" ? "کیفیت برش مو و رنگ چطور بود؟ آیا فرمول رنگ سالن با انتظارتان هماهنگ بود؟" : "How was the cut simulation? Any details for our hair colorists?"}
                    className="w-full bg-[#12100D] border border-[#2F241A] rounded-xl p-3 text-white focus:outline-none focus:border-[#C5A880] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C5A880] hover:bg-[#D4AF37] text-[#12100E] font-bold py-2.5 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{lang === "fa" ? "ارسال نهایی نظر و تجربه" : "Submit Review"}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
