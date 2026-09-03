export interface PrestigeStyleCollection {
  id: string;
  titleFa: string;
  titleEn: string;
  subtitleFa: string;
  subtitleEn: string;
  city: string;
  icon: string;
  targetOccasionId: string;
  conceptStoryFa: string;
  conceptStoryEn: string;
  topWearFa: string;
  topWearEn: string;
  bottomWearFa: string;
  bottomWearEn: string;
  footwearFa: string;
  footwearEn: string;
  keyAccessoryFa: string;
  keyAccessoryEn: string;
  fabricsUsedFa: string;
  fabricsUsedEn: string;
  signatureScentFa: string;
  signatureScentEn: string;
  paletteFa: {
    name: string;
    hex: string;
  }[];
  paletteEn: {
    name: string;
    hex: string;
  }[];
}

export const MENS_PRESTIGE_COLLECTIONS: PrestigeStyleCollection[] = [
  {
    id: "mayfair-heritage",
    titleFa: "کالکشن میفر لندن (The Savile Row Gentleman)",
    titleEn: "Mayfair Sartorial Heritage",
    subtitleFa: "نماد قدرت خاموش، وقار اصیل و مذاکرات رسمی سطح بالا",
    subtitleEn: "Quiet executive power, timeless nobility, and boardroom authority",
    city: "LONDON",
    icon: "🏛️",
    targetOccasionId: "business-smart",
    conceptStoryFa: "برش‌های هندسی دقیق و سرشانه‌های ساختاریافته الهام‌گرفته از کهنه‌کارترین خیاطان خیابان ساویل‌رو. پشم مرینو سوپر ۱۲۰ با زیردست ابریشمی که فرم مقتدرانه‌ای خلق می‌کند.",
    conceptStoryEn: "Precision geometry and structured Neapolitan shoulders inspired by venerable Savile Row masters. Super 120s worsted wool with a silk-like hand creating an unmistakable aura of command.",
    topWearFa: "کت بلیزر سرمه‌ای دبل‌برست شش‌دکمه با پیراهن پاپلین سفید",
    topWearEn: "Super 120s Double-Breasted Navy Blazer with Pure Poplin Shirt",
    bottomWearFa: "شلوار فلانل طوسی زغالی با خط اتوی تیز",
    bottomWearEn: "Charcoal Flannel Trousers with Sharp Architectural Crease",
    footwearFa: "کفش آکسفورد چرم قهوه‌ای شاه‌بلوطی واکس‌خورده دست‌دوز",
    footwearEn: "Hand-Burnished Rich Oak Calfskin Cap-Toe Oxfords",
    keyAccessoryFa: "ساعت مکانیکی بند چرم طبیعی + پوشت ابریشمی تا خورده سفید",
    keyAccessoryEn: "Mechanical Dress Watch (Alligator Strap) + Presidential Pocket Square",
    fabricsUsedFa: "پشم مرینو ۱۲۰ بیلا + کتان ۱۰۰٪ مصری",
    fabricsUsedEn: "Lanificio Biella Super 120s Wool + Egyptian Giza Cotton",
    signatureScentFa: "روایح چوبی، وتیور خاکی و برگ تنباکوی هاوانا",
    signatureScentEn: "Earthy Haitian Vetiver, Cedarwood & Cuban Tobacco Leaf",
    paletteFa: [
      { name: "سرمه‌ای ناپلی", hex: "#1A2536" },
      { name: "سفید خالص", hex: "#F8F8FA" },
      { name: "چرم شاه‌بلوطی", hex: "#5C3A21" }
    ],
    paletteEn: [
      { name: "Savile Navy", hex: "#1A2536" },
      { name: "Crisp Poplin", hex: "#F8F8FA" },
      { name: "Chestnut Leather", hex: "#5C3A21" }
    ]
  },
  {
    id: "milano-sprezzatura",
    titleFa: "کالکشن میلان و کومو (The Italian Riviera)",
    titleEn: "Milano Sprezzatura Edit",
    subtitleFa: "جذابیت بی‌تکلف، راحتی اشرافی و رنگ‌های خاکی گرم",
    subtitleEn: "Effortless Italian nonchalance, Riviera ease, and warm earthy tones",
    city: "MILAN",
    icon: "🛥️",
    targetOccasionId: "first-date",
    conceptStoryFa: "تعریف اصیل هنر اسپرتزاتورا در ایتالیا: به نظر رسیدن در نهایت خوش‌پوشی بدون اینکه نشان دهید تلاشی کرده‌اید. پارچه‌های لینن تنفس‌پذیر و شلوارهای راسته راحت.",
    conceptStoryEn: "The true essence of Italian sprezzatura: looking impeccably composed without seeming to try. Breathable Normandy linen and tailored drawstring trousers.",
    topWearFa: "کت تک بدون آستر خاکی-شتری + تیشرت نخی ابریشمی کرم شیری",
    topWearEn: "Unlined Sand Camel Blazer + Mercerized Silk-Cotton Knit Tee",
    bottomWearFa: "شلوار کتان کشی راسته به رنگ بژ شنی",
    bottomWearEn: "Tailored Sand-Beige Stretch Cotton Chinos",
    footwearFa: "لوفر جیر شکلاتی بدون جوراب یا با جوراب کالج نامرئی",
    footwearEn: "Hand-Stitched Chocolate Tuscan Suede Penny Loafers",
    keyAccessoryFa: "عینک آفتابی استات لاک‌پشتی + دستبند چرم بافت مینیمال",
    keyAccessoryEn: "Tortoiseshell Acetate Sunglasses + Braided Tuscan Leather Band",
    fabricsUsedFa: "لینن فرآوری‌شده بدون چروک + نخ مرسریزه",
    fabricsUsedEn: "Wrinkle-Resistant French Flax Linen + Mercerized Cotton",
    signatureScentFa: "ترنج کالابریا، بهارنارنج و چوب صندل گرم",
    signatureScentEn: "Calabrian Bergamot, Neroli Blossom & Warm Sandalwood",
    paletteFa: [
      { name: "کرم شتری", hex: "#B88B58" },
      { name: "بژ شنی", hex: "#E5DAC8" },
      { name: "جیر شکلاتی", hex: "#422D1D" }
    ],
    paletteEn: [
      { name: "Camel Sand", hex: "#B88B58" },
      { name: "Ivory Ecru", hex: "#E5DAC8" },
      { name: "Chocolate Suede", hex: "#422D1D" }
    ]
  },
  {
    id: "geneva-executive",
    titleFa: "کالکشن ژنو و زوریخ (The Alpine Monochrome)",
    titleEn: "Geneva Precision Monochrome",
    subtitleFa: "مینیمالیسم هندسی، رنگ‌های خنثی یخی و انضباط سوئیسی",
    subtitleEn: "Architectural minimalism, slate neutrals, and Swiss precision",
    city: "GENEVA",
    icon: "🏔️",
    targetOccasionId: "business-smart",
    conceptStoryFa: "پوششی مونوکروم و بسیار شارپ بر پایه پالت طوسی سنگی، زغالی و مشکی مات. مناسب افراد قدرتمند که نیازی به رنگ‌های پر سر و صدا ندارند.",
    conceptStoryEn: "A sharp monochrome silhouette built upon slate grey, charcoal, and obsidian black. Designed for visionary leaders who command attention through silence.",
    topWearFa: "پلیور یقه اسکی کشمیر زغالی + کت پشمی گاباردین ضدآب",
    topWearEn: "Mongolian Cashmere Charcoal Turtleneck + Weatherproof Wool Overcoat",
    bottomWearFa: "شلوار پشمی راسته مشکی مات",
    bottomWearEn: "Flat-Front Obsidian Black Tailored Worsted Trousers",
    footwearFa: "بوت چلسی چرم مشکی فرانسوی",
    footwearEn: "French Box Calf Black Leather Chelsea Boots",
    keyAccessoryFa: "کیف فولیو چرم مشکی صاف بدون مارک",
    keyAccessoryEn: "Unbranded Matte Black Calfskin Document Folio",
    fabricsUsedFa: "کشمیر دولایه مغولی + پشم گاباردین متراکم",
    fabricsUsedEn: "Grade-A Mongolian Cashmere + High-Density Wool Gabardine",
    signatureScentFa: "عنبر خاکستری، سرو کوهی و صمغ لادن",
    signatureScentEn: "Grey Ambergris, Alpine Juniper & Smoky Labdanum",
    paletteFa: [
      { name: "زغالی مات", hex: "#282C30" },
      { name: "طوسی سنگی", hex: "#8A9199" },
      { name: "مشکی آبنوسی", hex: "#141414" }
    ],
    paletteEn: [
      { name: "Matte Charcoal", hex: "#282C30" },
      { name: "Slate Grey", hex: "#8A9199" },
      { name: "Obsidian Black", hex: "#141414" }
    ]
  }
];

export const WOMENS_PRESTIGE_COLLECTIONS: PrestigeStyleCollection[] = [
  {
    id: "paris-vendome",
    titleFa: "کالکشن پلاس وندوم پاریس (Parisian Quiet Luxury)",
    titleEn: "Place Vendôme Haute Edit",
    subtitleFa: "شیک‌پوشی بی‌زمان فرانسوی، ابریشم طبیعی و خطوط تمیز",
    subtitleEn: "Timeless Parisian haute elegance, pure silk, and unbranded poise",
    city: "PARIS",
    icon: "💎",
    targetOccasionId: "formal-wedding",
    conceptStoryFa: "الهام‌گرفته از خانه‌های مد پاریسی که در آنها اصالت، برش شکیل و عدم حضور هرگونه مارک تجاری نشانه نهایت شکوه است. ریزش رویایی ابریشم و کت فیت دست‌دوز.",
    conceptStoryEn: "Inspired by Parisian haute ateliers where supreme craftsmanship and zero brand logos define true status. Fluid silk drape with bespoke tailoring.",
    topWearFa: "کت بلیزر کرپ ابریشمی با یقه بلیطی ظریف + تاپ ابریشم خام",
    topWearEn: "Silk Crepe Tailored Blazer + Raw Mulberry Silk Camisole",
    bottomWearFa: "شلوار وایدلگ پارچه‌ای کرپ با ریزش روان و خط اتوی مخفی",
    bottomWearEn: "High-Waisted Flowing Crepe Wide-Leg Trousers",
    footwearFa: "کفش پاشنه کوتاه چرم ناپا با پنجه کشیده ملایم",
    footwearEn: "Nappa Calfskin Pointed-Toe Kitten Heel Pumps",
    keyAccessoryFa: "گوشواره‌های حلقه‌ای طلای مات + کیف کلاچ چرم ناپا",
    keyAccessoryEn: "Brushed Matte Gold Hoops + Handcrafted Leather Clutch",
    fabricsUsedFa: "ابریشم مال‌بری ۱۰۰٪ + پارچه کرپ دو شین سنگین",
    fabricsUsedEn: "100% Mulberry Silk + Heavyweight Crepe de Chine",
    signatureScentFa: "زنبق فلورانسی، رز دمشقی و مشک سفید خالص",
    signatureScentEn: "Florentine Orris, Damascena Rose & Pure White Musk",
    paletteFa: [
      { name: "کرم مرواریدی", hex: "#F3EFEA" },
      { name: "طلای مات", hex: "#C5A880" },
      { name: "مشکی ساتن", hex: "#161514" }
    ],
    paletteEn: [
      { name: "Pearl Ecru", hex: "#F3EFEA" },
      { name: "Brushed Gold", hex: "#C5A880" },
      { name: "Obsidian", hex: "#161514" }
    ]
  },
  {
    id: "st-moritz-cashmere",
    titleFa: "کالکشن سنت موریتز (The Alpine Cashmere Cocoon)",
    titleEn: "St. Moritz Cashmere Lounge",
    subtitleFa: "گرما، لطافت مخملی و لوکس‌ترین تناژهای کرم شتری",
    subtitleEn: "Sumptuous cocooning warmth, double-face cashmere, and camel tones",
    city: "ST. MORITZ",
    icon: "❄️",
    targetOccasionId: "autumn-winter-coat",
    conceptStoryFa: "پالتوهای پشم و کشمیر بدون وزن اما فوق‌العاده گرم. استایل لایه‌بندی در تناژهای گرم کاپوچینو و شیری که حسی اشرافی و صمیمی القا می‌کند.",
    conceptStoryEn: "Featherweight yet ultra-warm double-face cashmere wrap coats. A comforting symphony of cappuccino and oatmeal tones radiating quiet opulence.",
    topWearFa: "پالتو بلند پشم و کشمیر کمربنددار + پلیور بافت یقه اسکی",
    topWearEn: "Double-Face Cashmere Wrap Coat + Ribbed Turtleneck Knit",
    bottomWearFa: "شلوار راسته فلانل نرم رنگ کرم جو دوسر",
    bottomWearEn: "Tailored Soft Oatmeal Wool Flannel Trousers",
    footwearFa: "بوت چرم تا مچ با پاشنه بلوکی کوتاه اسپرسو",
    footwearEn: "Hand-Waxed Espresso Calfskin Block-Heel Ankle Boots",
    keyAccessoryFa: "شال کشمیر دست‌بافت با حاشیه مخملی ظریف",
    keyAccessoryEn: "Handwoven Mongolian Cashmere Travel Wrap",
    fabricsUsedFa: "کشمیر گرید A + پشم آلپاکای سبک",
    fabricsUsedEn: "Grade-A Mongolian Cashmere + Baby Alpaca Wool",
    signatureScentFa: "وانیل ماداگاسکار، چوب کشمیر و دانه تونکا",
    signatureScentEn: "Bourbon Vanilla, Cashmere Wood & Roasted Tonka Bean",
    paletteFa: [
      { name: "شتری گرم", hex: "#B88B58" },
      { name: "شیری جو دوسر", hex: "#EAE2D5" },
      { name: "اسپرسو عمیق", hex: "#32251D" }
    ],
    paletteEn: [
      { name: "Noble Camel", hex: "#B88B58" },
      { name: "Oatmeal Melange", hex: "#EAE2D5" },
      { name: "Espresso Leather", hex: "#32251D" }
    ]
  },
  {
    id: "cote-dazur-sun",
    titleFa: "کالکشن کوت دازور (The Riviera Sun & Linen)",
    titleEn: "Côte d'Azur Resort Edit",
    subtitleFa: "پوشش نسیم ساحلی، شومیزهای لینن و کلاه‌های دست‌بافت",
    subtitleEn: "Coastal breezes, airy Normandy linen blouses, and handcrafted slides",
    city: "MONACO",
    icon: "👒",
    targetOccasionId: "travel-resort",
    conceptStoryFa: "هوای آزاد مدیترانه و سواحل موناکو؛ شومیزهای لینن نرم که با هر نسیم به رقص درمی‌آیند همراه با شلوارهای کتان سبک و صندل‌های دست‌دوز چرمی.",
    conceptStoryEn: "Sun-drenched Mediterranean escapism. Airy French linen tunics that float in the sea breeze paired with organic cotton trousers and handmade slides.",
    topWearFa: "شومیز لینن شسته شده با یقه ماندارین آزاد",
    topWearEn: "Washed French Linen Mandarin-Collar Relaxed Blouse",
    bottomWearFa: "شلوار لینن وایدلگ با کمر کشسان ظریف و بند ابریشمی",
    bottomWearEn: "Wide-Leg Linen Resort Trousers with Silk Drawstring",
    footwearFa: "صندل چرم اسلاید دست‌دوز به رنگ عسلی روشن",
    footwearEn: "Handcrafted Honey Leather Minimalist Resort Slides",
    keyAccessoryFa: "کلاه حصیری پاناما اصل اکوادور + عینک فریم قهوه‌ای ملایم",
    keyAccessoryEn: "Authentic Ecuadorian Toquilla Panama Hat + Bronze Sunglasses",
    fabricsUsedFa: "۱۰۰٪ لینن نرم فرانسوی + کتان ارگانیک",
    fabricsUsedEn: "100% Normandy French Flax Linen + Organic Voile",
    signatureScentFa: "شکوفه پرتقال، لیمو آمالفی و نمک دریایی کریستالی",
    signatureScentEn: "Orange Blossom, Amalfi Lemon & Crystal Sea Salt",
    paletteFa: [
      { name: "سفید ابری", hex: "#FAFAFA" },
      { name: "آبی ساحلی", hex: "#9BB3C9" },
      { name: "عسلی روشن", hex: "#C79354" }
    ],
    paletteEn: [
      { name: "Cloud White", hex: "#FAFAFA" },
      { name: "Riviera Blue", hex: "#9BB3C9" },
      { name: "Honey Leather", hex: "#C79354" }
    ]
  }
];
