import React, { useState } from "react";
import { CheckSquare, Square, PieChart, AlertTriangle, RefreshCw } from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface AuditCategory {
  title: Record<LanguageCode, string>;
  items: {
    id: string;
    name: Record<LanguageCode, string>;
    desc: Record<LanguageCode, string>;
    icon: string;
    importance: "vital" | "recommended";
  }[];
}

const AUDIT_DATA: Record<"men" | "women", AuditCategory[]> = {
  men: [
    {
      title: {
        fa: "کت‌ها و پوشش‌های رویی (Tailoring & Outerwear)",
        en: "Tailoring & Outerwear Foundations",
        fr: "Vestes & Pièces d'Extérieur Structurées",
        it: "Giacche Sartoriali & Capi Spalla",
        ar: "السترات والمعاطف المهندمة (Tailoring & Outerwear)",
      },
      items: [
        {
          id: "m1",
          name: {
            fa: "کت تک سرمه‌ای (Navy Wool Blazer)",
            en: "Navy Wool Hopsack Blazer",
            fr: "Blazer Hopsack en Laine Bleu Nuit",
            it: "Blazer in Lana Hopsack Blu Notte",
            ar: "سترة كحلي صوف طبيعي (Navy Wool Blazer)",
          },
          desc: {
            fa: "سنگ‌بنای اصلی استایل اسمارت کژوال و بیزینس",
            en: "The quintessential bedrock of executive smart-casual and board meetings",
            fr: "La pièce maîtresse du vestiaire business casual et des réunions de direction",
            it: "Il caposaldo essenziale dello smart casual e delle riunioni aziendali",
            ar: "حجر الأساس الرئيسي لإطلالات سمارت كاجوال واجتماعات العمل الرفيعة",
          },
          icon: "🧥",
          importance: "vital",
        },
        {
          id: "m2",
          name: {
            fa: "ترنچ‌کت کلاسیک بژ یا خاکی",
            en: "Classic Sand Trench Coat",
            fr: "Trench-Coat Classique Gabardine Sable",
            it: "Trench Classico in Gabardine Sabbia",
            ar: "معطف الترنش الكلاسيكي بلون بيج أو رملي",
          },
          desc: {
            fa: "محافظ شیک در برابر باران و هوای انتقالی بهار/پاییز",
            en: "Water-resistant heritage coat for transitional spring and autumn weather",
            fr: "Protection imperméable emblématique pour les saisons intermédiaires",
            it: "Capospalla impermeabile per le mezze stagioni con eleganza senza tempo",
            ar: "حماية أنيقة مقاومة للماء للأجواء المتقلبة في فصلي الربيع والخريف",
          },
          icon: "🧥",
          importance: "recommended",
        },
        {
          id: "m3",
          name: {
            fa: "پالتوی پشمی ذغالی یا شتری",
            en: "Charcoal or Camel Wool Overcoat",
            fr: "Manteau en Laine Anthracite ou Camel",
            it: "Cappotto in Lana Vergine Antracite o Cammello",
            ar: "معطف صوف شتوي فحمي أو جملي",
          },
          desc: {
            fa: "پوشش زمستانی رسمی با قد بالای زانو",
            en: "Knee-length virgin wool overcoat for cold weather elegance",
            fr: "Manteau long en laine vierge pour une élégance hivernale irréprochable",
            it: "Cappotto sartoriale al ginocchio per un'impeccabile presenza invernale",
            ar: "معطف شتوي رسمي بطول متناسق يعكس فخامة دافئة",
          },
          icon: "🧥",
          importance: "vital",
        },
      ],
    },
    {
      title: {
        fa: "پیراهن‌ها و بافت‌های پایه (Tops & Fine Knits)",
        en: "Tops & Fine Natural Knits",
        fr: "Chemises & Mailles Fines Naturelles",
        it: "Camicie & Maglieria Pregiata",
        ar: "القمصان والكنزات الصوفية الأساسية (Tops & Knits)",
      },
      items: [
        {
          id: "m4",
          name: {
            fa: "پیراهن سفید کتان آکسفورد (OCBD)",
            en: "Crisp White Oxford Cloth Button-Down",
            fr: "Chemise Blanche Oxford Button-Down",
            it: "Camicia Oxford Bianca Button-Down",
            ar: "قميص أكسفورد أبيض كلاسيكي (OCBD)",
          },
          desc: {
            fa: "بدون طرح با یقه دکمه‌دار تمیز",
            en: "Pure Egyptian cotton with a neat button-down collar",
            fr: "Coton égyptien pur avec col boutonné net et sans fioritures",
            it: "Puro cotone con colletto button-down pulito e versatile",
            ar: "قطن مصري ناصع البياض بياقة أزرار مهندمة بدون أي نقوش",
          },
          icon: "👔",
          importance: "vital",
        },
        {
          id: "m5",
          name: {
            fa: "پیراهن آبی آسمانی پوپلین",
            en: "Sky Blue Poplin Dress Shirt",
            fr: "Chemise Habillée en Popeline Bleu Ciel",
            it: "Camicia Sartoriale in Popeline Celeste",
            ar: "قميص بوبلين أزرق سماوي رسمي",
          },
          desc: {
            fa: "گزینه روزمره برای جلسات کاری و دفتر",
            en: "Daily essential for modern corporate and creative atmospheres",
            fr: "Essentiel quotidien pour les environnements professionnels et créatifs",
            it: "Capo essenziale per l'ufficio e contesti professionali raffinati",
            ar: "قطعة يومية حيوية للاجتماعات وبيئات العمل الإبداعية والرسمية",
          },
          icon: "👔",
          importance: "vital",
        },
        {
          id: "m6",
          name: {
            fa: "پلیور یقه گرد پشم مرینو سرمه‌ای/طوسی",
            en: "Fine-Gauge Merino Crewneck (Navy/Grey)",
            fr: "Pull Col Rond Fin en Laine Mérinos (Marine/Gris)",
            it: "Girocollo Sottile in Lana Merino (Blu/Grigio)",
            ar: "كنزة صوف ميرينو بقبة مستديرة (كحلي/رمادي)",
          },
          desc: {
            fa: "بافت ظریف مناسب لایه‌بندی زیر کت",
            en: "Ultra-fine gauge knit ideal for 3-tier layering beneath blazers",
            fr: "Maille ultra-fine idéale pour la superposition sous un blazer",
            it: "Maglia finissima ideale da indossare sotto giacche e blazer",
            ar: "نسيج صوفي ناعم وخفيف مثالي لارتدائه تحت السترات",
          },
          icon: "🧶",
          importance: "vital",
        },
        {
          id: "m7",
          name: {
            fa: "تیشرت سنگین‌وزن سفید/شیری ۱۰۰٪ پنبه",
            en: "Heavyweight 100% Cotton Tee (Ivory/White)",
            fr: "T-Shirt Épais 100% Coton (Blanc/Écru)",
            it: "T-Shirt Spessa 100% Cotone (Bianco/Panna)",
            ar: "تيشيرت قطن فاخر عالي الكثافة (أبيض/عاجي)",
          },
          desc: {
            fa: "بدون هیچ لوگو یا نوشته گرافیکی",
            en: "Substantial 240+ GSM cotton, free from any loud logos or branding",
            fr: "Coton dense 240+ GSM sans logos ni inscriptions graphiques",
            it: "Cotone compatto 240+ GSM privo di scritte o loghi vistosi",
            ar: "قطن طبيعي متماسك بكثافة عالية خالٍ تماماً من الشعارات التجارية",
          },
          icon: "👕",
          importance: "recommended",
        },
      ],
    },
    {
      title: {
        fa: "شلوارها و لایه پایین‌تنه (Trousers & Denim)",
        en: "Sartorial Trousers & Classic Denim",
        fr: "Pantalons Habillés & Denim Brut",
        it: "Pantaloni Sartoriali & Denim Classico",
        ar: "البناطيل الرسمية والجينز الكلاسيكي (Trousers & Denim)",
      },
      items: [
        {
          id: "m8",
          name: {
            fa: "شلوار پارچه‌ای طوسی زغالی فاق‌بلند",
            en: "High-Rise Charcoal Wool Trousers",
            fr: "Pantalon en Laine Anthracite Taille Haute",
            it: "Pantaloni a Vita Alta in Lana Antracite",
            ar: "بنطال صوف رمادي فحمي بخصر مرتفع",
          },
          desc: {
            fa: "ترجیحاً پشم ترپیکال یا فلانل چهارفصل",
            en: "Four-season tropical wool or flannel with tailored drape",
            fr: "Laine froide ou flanelle quatre saisons au tombé impeccable",
            it: "Lana tropicale o flanella quattro stagioni con caduta fluida",
            ar: "صوف استوائي أو فلانيل مريح لجميع الفصول بقصة انسيابية",
          },
          icon: "👖",
          importance: "vital",
        },
        {
          id: "m9",
          name: {
            fa: "شلوار کتان (چینو) بژ یا شنی",
            en: "Tailored Sand / Beige Chino Pants",
            fr: "Chino Coton Ajusté Beige / Sable",
            it: "Pantaloni Chino Sartoriali Sabbia / Beige",
            ar: "بنطال تشينو قطني متناسق بلون رملي أو بيج",
          },
          desc: {
            fa: "برش راسته متناسب بدون لوله‌های چسبان",
            en: "Straight-tapered silhouette in crisp twill cotton",
            fr: "Coupe droite fuselée en sergé de coton élégant",
            it: "Silhouette dritta affusolata in twill di cotone strutturato",
            ar: "قصة مستقيمة ومريحة من قماش التويل القطني المتين",
          },
          icon: "👖",
          importance: "vital",
        },
        {
          id: "m10",
          name: {
            fa: "شلوار جین سرمه‌ای تیره خام (Raw Denim)",
            en: "Dark Indigo Raw Selvedge Denim",
            fr: "Jean Brut Selvedge Indigo Foncé",
            it: "Jeans Selvedge Indigo Scuro Senza Trattamenti",
            ar: "جينز نيلي خام داكن غير معالج (Raw Denim)",
          },
          desc: {
            fa: "یکدست بدون هیچ‌گونه زاپ یا سنگ‌شور",
            en: "Uniform dark wash with zero distressing or bleaching",
            fr: "Lavage uniforme sombre sans déchirures ni délavage artificiel",
            it: "Lavaggio scuro uniforme privo di strappi o abrasioni",
            ar: "لون كحلي نيلي موحد ونقي خالٍ من التمزقات أو المعالجات الكيميائية",
          },
          icon: "👖",
          importance: "recommended",
        },
      ],
    },
    {
      title: {
        fa: "کفش و اکسسوری چرمی (Footwear & Leather)",
        en: "Leather Footwear & Refined Accessories",
        fr: "Souliers en Cuir & Maroquinerie Épurée",
        it: "Calzature in Cuoio & Accessori in Pelle",
        ar: "الأحذية الجلدية والإكسسوارات الفاخرة (Footwear & Leather)",
      },
      items: [
        {
          id: "m11",
          name: {
            fa: "کفش آکسفورد یا دربی چرم قهوه‌ای سوخته",
            en: "Burnished Espresso Leather Oxfords/Derbies",
            fr: "Richelieus ou Derbies en Cuir Marron Foncé",
            it: "Francesine o Derby in Cuoio Testa di Moro",
            ar: "حذاء أكسفورد أو ديربي جلد بلون بني محروق",
          },
          desc: {
            fa: "چرم طبیعی گوساله با فرم پنجه بادامی",
            en: "Full-grain calfskin with almond toe profile and Goodyear welt",
            fr: "Cuir de veau pleine fleur avec profil en amande et cousu Goodyear",
            it: "Pelle di vitello pieno fiore a punta a mandorla e guardolo Goodyear",
            ar: "جلد عجل طبيعي فاخر بمقدمة لوزية وخياطة غوديير المتينة",
          },
          icon: "👞",
          importance: "vital",
        },
        {
          id: "m12",
          name: {
            fa: "کفش لوفر پنی (Penny Loafer) چرم یا جیر",
            en: "Suede or Calfskin Penny Loafers",
            fr: "Mocassins Penny en Daim ou Cuir Lisse",
            it: "Mocassini Penny in Camoscio o Vitello",
            ar: "حذاء لوفر بيني من الجلد الطبيعي أو الشمواه",
          },
          desc: {
            fa: "برای استایل‌های بیزینس کژوال و سفرهای کاری",
            en: "Effortless versatility for business travel and smart leisure",
            fr: "Polyvalence élégante pour les voyages d'affaires et les loisirs chics",
            it: "Versatilità fluida per viaggi di lavoro e tempo libero distinto",
            ar: "مرونة وأناقة مريحة للرحلات العملية والإطلالات الذكية",
          },
          icon: "👞",
          importance: "recommended",
        },
        {
          id: "m13",
          name: {
            fa: "اسنیکر چرم مینیمال تمام‌سفید",
            en: "Minimalist Low-Top White Leather Sneakers",
            fr: "Baskets Basses en Cuir Blanc Épuré",
            it: "Sneakers Minimaliste in Pelle Bianca",
            ar: "حذاء رياضي جلد أبيض كلاسيكي مبسط",
          },
          desc: {
            fa: "طراحی کاملاً ساده بدون نشان‌های تجاری بزرگ",
            en: "Monochrome silhouette crafted from supple nappa leather",
            fr: "Silhouette sobre confectionnée en cuir nappa souple sans logos",
            it: "Design pulito in morbida nappa senza elementi grafici invasivi",
            ar: "تصميم انسيابي أحادي اللون من جلد النابا بدون علامات تجارية بارزة",
          },
          icon: "👟",
          importance: "recommended",
        },
        {
          id: "m14",
          name: {
            fa: "کمربند چرم متناسب با رنگ کفش",
            en: "Full-Grain Leather Belt (Tonal Match)",
            fr: "Ceinture en Cuir Pleine Fleur Assortie",
            it: "Cintura in Pelle Pieno Fiore Coordinata",
            ar: "حزام جلد طبيعي متناسق مع لون الحذاء",
          },
          desc: {
            fa: "سگک نقره‌ای یا برنزی مات ساده",
            en: "Brushed silver buckle precisely synchronized with shoe patina",
            fr: "Boucle argentée brossée sobre en harmonie avec la patine des souliers",
            it: "Fibbia satinata coordinata con precisione alla finitura delle scarpe",
            ar: "إبزيم معدني مطفي مصقول يتطابق مع درجة لمعان الحذاء",
          },
          icon: "⌚",
          importance: "vital",
        },
      ],
    },
  ],
  women: [
    {
      title: {
        fa: "کت‌ها و لایه‌بندی ساختاریافته (Blazers & Coats)",
        en: "Structured Blazers & Tailored Coats",
        fr: "Blazers Structurés & Manteaux Sartoriaux",
        it: "Blazer Strutturati & Cappotti Sartoriali",
        ar: "السترات المهندمة والمعاطف الراقية (Blazers & Coats)",
      },
      items: [
        {
          id: "w1",
          name: {
            fa: "کت بلیزر مشکی یا دودی خوش‌دوخت",
            en: "Tailored Charcoal or Black Blazer",
            fr: "Blazer Tailleur Noir ou Anthracite",
            it: "Blazer Sartoriale Nero o Antracite",
            ar: "سترة بليزر سوداء أو فحمية محبوكة بإتقان",
          },
          desc: {
            fa: "سرشانه‌های ساختاریافته با آستر ابریشمی",
            en: "Sculpted shoulders with luxurious cupro/silk lining",
            fr: "Épaulettes équilibrées et doublure soyeuse en cupro ou soie",
            it: "Spalle definite e fodera interna pregiata in seta o cupro",
            ar: "أكتاف مهندمة ببطانة حريرية فاخرة تمنح قواماً واثقاً",
          },
          icon: "🧥",
          importance: "vital",
        },
        {
          id: "w2",
          name: {
            fa: "ترنچ‌کت دو ردیف دکمه شنی/خاکی",
            en: "Double-Breasted Heritage Trench Coat",
            fr: "Trench-Coat Croisé Classique Sable",
            it: "Trench Doppiopetto Classico color Sabbia",
            ar: "معطف ترنش مزدوج الأزرار بلون رملي كلاسيكي",
          },
          desc: {
            fa: "قد میدی با کمربند پارچه‌ای کلاسیک",
            en: "Midi length in water-repellent sand gabardine with self-belt",
            fr: "Longueur midi en gabardine déperlante avec ceinture assortie",
            it: "Lunghezza midi in gabardine idrorepellente con cintura in tessuto",
            ar: "طول ميدي من قماش الغاباردين المقاوم للماء مع حزام قماشي",
          },
          icon: "🧥",
          importance: "vital",
        },
        {
          id: "w3",
          name: {
            fa: "کت بافت تویید / بوکله ژورنالی",
            en: "Textured Bouclé / Tweed Lady Jacket",
            fr: "Veste Courte en Tweed / Bouclé Texturé",
            it: "Giacca Strutturata in Tweed / Bouclé",
            ar: "سترة قصيرة من قماش التويد والبوكليه الفاخر",
          },
          desc: {
            fa: "الهام‌گرفته از استایل مزون شنل برای وقار فوری",
            en: "Collarless architectural texture providing instant poise",
            fr: "Texture noble sans col inspirée de la haute couture parisienne",
            it: "Texture ricca e senza colletto per un'eleganza sofisticata e immediata",
            ar: "تصميم هندسي مستوحى من دور الأزياء الباريسية يمنح وقاراً فورياً",
          },
          icon: "🧥",
          importance: "recommended",
        },
      ],
    },
    {
      title: {
        fa: "شومیزها و بافت‌های لوکس (Silk Tops & Cashmere)",
        en: "Pure Silk Tops & Cashmere Knits",
        fr: "Chemisiers en Soie & Mailles Cachemire",
        it: "Camicie in Seta & Maglieria in Cashmere",
        ar: "البلوزات الحريرية وكنزات الكشمير (Silk & Cashmere)",
      },
      items: [
        {
          id: "w4",
          name: {
            fa: "شومیز سفید پنبه‌ای آهاردار یا پوپلین",
            en: "Crisp White Cotton Poplin Shirt",
            fr: "Chemisier Popeline de Coton Blanc Épuré",
            it: "Camicia Bianca in Popeline di Cotone",
            ar: "بلوزة قطن بوبلين بيضاء ناصعة ومريحة",
          },
          desc: {
            fa: "یقه کلاسیک با دوخت تمیز فرانسوی",
            en: "Classic point collar with immaculate French seam construction",
            fr: "Col classique et coutures anglaises d'une précision exemplaire",
            it: "Colletto classico con cuciture sartoriali raffinate",
            ar: "ياقة كلاسيكية محبوكة بخياطة فرنسية فائقة الدقة",
          },
          icon: "👚",
          importance: "vital",
        },
        {
          id: "w5",
          name: {
            fa: "تاپ یا شومیز ساتن ابریشمی رنگ نود",
            en: "Matte Mulberry Silk Camisole / Blouse",
            fr: "Caraco ou Chemisier en Soie Végétale Nude",
            it: "Top o Blusa in Seta Nude a Tinta Unita",
            ar: "بلوزة حرير التوت الطبيعي بلون نيود ناعم",
          },
          desc: {
            fa: "بافت نرم با درخشش ملایم زیر کت",
            en: "Soft fluid drape with subtle sheen for jacket layering",
            fr: "Drapé fluide au lustre soyeux parfait sous un blazer",
            it: "Caduta morbida e lucentezza discreta ideale sotto la giacca",
            ar: "انسيابية ناعمة ببريق هادئ مناسبة للارتداء تحت السترات",
          },
          icon: "👚",
          importance: "vital",
        },
        {
          id: "w6",
          name: {
            fa: "کاردیگان یا پلیور کشمیر کرم عاجی",
            en: "Ivory Mongolian Cashmere Knit",
            fr: "Maille en Cachemire Écru de Mongolie",
            it: "Maglia in Cashmere Mongolo Panna / Avorio",
            ar: "كنزة محبوكة من صوف الكشمير العاجي الخالص",
          },
          desc: {
            fa: "نرمی بی‌نظیر برای هوای خنک و بهاره",
            en: "Featherweight warmth for climate transitions and travel",
            fr: "Douceur suprême et chaleur légère pour les saisons fraîches",
            it: "Morbidezza ineguagliabile e calore leggero per i viaggi",
            ar: "دفء خفيف الوزن ونعومة فائقة للأجواء المعتدلة والرحلات",
          },
          icon: "🧶",
          importance: "vital",
        },
        {
          id: "w7",
          name: {
            fa: "بافت ملوانی راه‌راه برتون (Breton Stripe)",
            en: "Breton Stripe Nautical Long-Sleeve",
            fr: "Marinière Rayée Bretonne en Coton Lourd",
            it: "Maglia a Righe Nautiche Marinière",
            ar: "قميص مخطط بالأكمام الطويلة على الطراز البحري",
          },
          desc: {
            fa: "امضای استایل شیک پاریسی",
            en: "Timeless Parisian signature top in heavy organic cotton",
            fr: "La signature du chic parisien décontracté en coton biologique",
            it: "L'icona dello stile parigino senza tempo in cotone compatto",
            ar: "البصمة الخالدة للأناقة الباريسية من القطن العضوي المتين",
          },
          icon: "👚",
          importance: "recommended",
        },
      ],
    },
    {
      title: {
        fa: "شلوارها و دامن‌های کپسولی (Bottoms & Skirts)",
        en: "Capsule Trousers & Satin Skirts",
        fr: "Pantalons Fluides & Jupes en Satin",
        it: "Pantaloni a Gamba Larga & Gonne in Raso",
        ar: "البناطيل الانسيابية والتنانير الساتان (Bottoms & Skirts)",
      },
      items: [
        {
          id: "w8",
          name: {
            fa: "شلوار واید لگ پارچه‌ای فاق‌بلند",
            en: "High-Waisted Wide-Leg Wool Trousers",
            fr: "Pantalon Large Taille Haute en Laine",
            it: "Pantaloni a Gamba Larga a Vita Alta in Lana",
            ar: "بنطال صوف واسع الساقين بخصر مرتفع",
          },
          desc: {
            fa: "ریزش عالی پارچه کرپ یا پشم ظریف",
            en: "Superb drape in fine wool crepe elongating the vertical line",
            fr: "Tombé majestueux en crêpe de laine allongeant la silhouette",
            it: "Splendida caduta in crêpe di lana che slancia la figura",
            ar: "انسدال رائع من قماش كريب الصوف يبرز رشاقة القوام وطول القامة",
          },
          icon: "👖",
          importance: "vital",
        },
        {
          id: "w9",
          name: {
            fa: "دامن میدی ساتن زیتونی یا مشکی",
            en: "Bias-Cut Silk/Satin Midi Skirt",
            fr: "Jupe Midi Biseautée en Satin (Olive/Noir)",
            it: "Gonna Midi in Sbieco in Raso (Oliva/Nero)",
            ar: "تنورة ميدي من الساتان الحريري (زيتي أو أسود)",
          },
          desc: {
            fa: "ایجاد تعادل جذاب با بافت‌های پشمی زمستانه",
            en: "Fluid contrast against chunky knits and structured blazers",
            fr: "Contraste vaporeux avec les mailles volumineuses et vestes structurées",
            it: "Contrasto fluido e sensuale abbinato a maglioni e blazer",
            ar: "تباين انسيابي جذاب عند تنسيقها مع الكنزات الصوفية والسترات",
          },
          icon: "👗",
          importance: "recommended",
        },
        {
          id: "w10",
          name: {
            fa: "جین راسته آبی کلاسیک بدون زاپ",
            en: "Classic Mid-Blue Straight-Leg Denim",
            fr: "Jean Droit Bleu Moyen Brut",
            it: "Jeans a Gamba Dritta Blu Classico",
            ar: "جينز أزرق كلاسيكي مستقيم القصة بدون أي تمزقات",
          },
          desc: {
            fa: "فاق متوسط تا بلند برای قد کشیده‌تر",
            en: "Clean non-distressed wash engineered with flattering proportions",
            fr: "Coupe droite sans délavage artificiel allongeant les jambes",
            it: "Lavaggio pulito e proporzioni studiate per valorizzare la figura",
            ar: "قصة مستقيمة نظيفة بخصر مريح تمنح مظهراً مرتباً وأنيقاً",
          },
          icon: "👖",
          importance: "vital",
        },
      ],
    },
    {
      title: {
        fa: "کفش‌ها و چرم‌های بدون لوگو (Footwear & Bags)",
        en: "Logo-Free Leather Shoes & Structured Bags",
        fr: "Souliers & Sacs en Cuir Sans Logo",
        it: "Calzature & Borse in Pelle Senza Logo",
        ar: "الأحذية والحقائب الجلدية الخالية من الشعارات (Footwear & Bags)",
      },
      items: [
        {
          id: "w11",
          name: {
            fa: "کفش پاشنه‌دار بلوکی (Block Heel) رنگ نود یا مشکی",
            en: "Nude or Black Block-Heel Pumps",
            fr: "Escarpins à Talon Bloc (Nude ou Noir)",
            it: "Décolleté con Tacco a Blocco (Nude o Nero)",
            ar: "حذاء كعب عريض مريح بلون نيود أو أسود (Block Heel)",
          },
          desc: {
            fa: "راحتی برای ایستادن طولانی در عین جذابیت",
            en: "Ergonomic 5cm block heel delivering height without discomfort",
            fr: "Talon bloc stable de 5 cm alliant allure et confort prolongé",
            it: "Tacco a blocco ergonomico di 5 cm per camminare con sicurezza e grazia",
            ar: "كعب عريض بارتفاع ٥ سم يجمع بين الراحة التامة والجاذبية طوال اليوم",
          },
          icon: "👠",
          importance: "vital",
        },
        {
          id: "w12",
          name: {
            fa: "کفش لوفر چرم با سگک ظریف طلایی",
            en: "Calfskin Loafers with Delicate Gold Bit",
            fr: "Mocassins en Cuir à Mors Doré Subtil",
            it: "Mocassini in Vitello con Morsetto Dorato",
            ar: "حذاء لوفر جلد ناعم بحلية ذهبية راقية",
          },
          desc: {
            fa: "آراستگی بدون دردسر برای قرارهای روزانه",
            en: "Effortless polished footwear for meetings and daily mobility",
            fr: "Élégance naturelle pour les réunions et les déplacements quotidiens",
            it: "Raffinatezza immediata per impegni quotidiani e appuntamenti di lavoro",
            ar: "أناقة عملية وفخامة انسيابية للمواعيد اليومية والتنقلات",
          },
          icon: "👞",
          importance: "vital",
        },
        {
          id: "w13",
          name: {
            fa: "کفش فلت بالرین چرمی",
            en: "Soft Leather Ballerina Flats",
            fr: "Ballerines en Cuir Souple",
            it: "Ballerine in Morbida Pelle Nappa",
            ar: "حذاء باليرينا فلات من الجلد المرن",
          },
          desc: {
            fa: "نهایت راحتی و ظرافت به سبک بانوان فرانسوی",
            en: "Supple nappa leather ballerinas for supreme French chic",
            fr: "Le summum de la grâce et du confort à la française",
            it: "Il massimo della grazia parigina unita al comfort assoluto",
            ar: "قمة الراحة والنعومة على الطريقة الفرنسية الأيقونية",
          },
          icon: "🥿",
          importance: "recommended",
        },
        {
          id: "w14",
          name: {
            fa: "کیف چرم ساختاریافته بدون لوگوی برجسته",
            en: "Architectural Logo-Free Leather Tote",
            fr: "Cabas Structuré en Cuir Pleine Fleur Sans Logo",
            it: "Borsa Tote Strutturata in Pelle Senza Logo",
            ar: "حقيبة جلدية هندسية راقية بدون أي شعار تجاري",
          },
          desc: {
            fa: "رنگ خنثی (شکلاتی، قهوه‌ای عسلی یا مشکی)",
            en: "Neutral full-grain leather tote with immaculate minimal seams",
            fr: "Teinte sobre (chocolat, cognac ou noir) aux finitions parfaites",
            it: "Tinta neutra (testa di moro, cuoio o nero) con cuciture invisibili",
            ar: "لون محايد كلاسيكي (بني داكن، عسلي أو أسود) بحواف وخياطة نقية",
          },
          icon: "👜",
          importance: "vital",
        },
      ],
    },
  ],
};

const LOCALIZED_AUDITOR: Record<
  LanguageCode,
  {
    badge: string;
    subBadge: string;
    title: string;
    subtitle: string;
    capsuleIndex: string;
    ofKeyPieces: string;
    readyHigh: string;
    readyMid: string;
    readyLow: string;
    instruction: string;
    selectAll: string;
    reset: string;
    missingWarningTitle: string;
    missingWarningSubtitle: string;
    vitalBadge: string;
    recommendedBadge: string;
  }
> = {
  fa: {
    badge: "Virtual Capsule Closet Auditor",
    subBadge: "آنالایزر هوشمند سلامت و آمادگی کمد",
    title: "چک‌لیست ممیزی و کشف خلاءهای کمد کپسولی (Closet Gap Finder)",
    subtitle: "آیتم‌هایی که در کمد دارید را تیک بزنید تا سیستم نمره آمادگی استایل شما و مهره‌های کلیدی گمشده را تحلیل کند.",
    capsuleIndex: "شاخص کپسول اشرافی",
    ofKeyPieces: "از کل قطعات کلیدی",
    readyHigh: "کمد کاملاً غنی و آماده استایل",
    readyMid: "پایه‌های خوب، نیازمند تکمیل",
    readyLow: "نیاز به تقویت تکه‌های پایه",
    instruction: "روی آیتم‌ها کلیک کنید تا وضعیت کمدتان ذخیره شود:",
    selectAll: "انتخاب همه",
    reset: "پاک کردن",
    missingWarningTitle: "خلاءهای کلیدی شناسایی‌شده در کمد کپسولی شما:",
    missingWarningSubtitle: "برای ساختن ست‌های بدون نقص، پیشنهاد می‌شود این قطعات حیاتی را در اولویت خرید بعدی قرار دهید.",
    vitalBadge: "حیاتی",
    recommendedBadge: "پیشنهادی",
  },
  en: {
    badge: "Virtual Capsule Closet Auditor",
    subBadge: "Smart Wardrobe Health & Gap Finder",
    title: "Virtual Capsule Closet Health & Gap Auditor",
    subtitle: "Check the pieces you currently own to compute your wardrobe readiness score and discover missing sartorial pillars.",
    capsuleIndex: "Capsule Readiness Index",
    ofKeyPieces: "of essential foundation pieces",
    readyHigh: "Impeccable & Fully Cohesive Wardrobe",
    readyMid: "Solid Foundations, Minor Gaps",
    readyLow: "Crucial Base Pieces Missing",
    instruction: "Check items below to audit your closet completeness:",
    selectAll: "Select All",
    reset: "Clear All",
    missingWarningTitle: "Identified Critical Wardrobe Gaps:",
    missingWarningSubtitle: "Prioritize acquiring these vital foundation pieces to unlock endless styling combinations.",
    vitalBadge: "Vital Pillar",
    recommendedBadge: "Recommended",
  },
  fr: {
    badge: "Auditeur Garde-Robe Capsule",
    subBadge: "Analyseur de Dressing Virtuel",
    title: "Auditeur et Détecteur de Lacunes du Dressing Capsule",
    subtitle: "Cochez les pièces de votre garde-robe pour évaluer sa complétude et découvrir les éléments manquants.",
    capsuleIndex: "Indice de Garde-Robe",
    ofKeyPieces: "des pièces fondamentales",
    readyHigh: "Dressing Parfaitement Équilibré",
    readyMid: "Bases Solides, Quelques Lacunes",
    readyLow: "Pièces Fondamentales Manquantes",
    instruction: "Cliquez pour cocher les pièces présentes dans votre armoire :",
    selectAll: "Tout Sélectionner",
    reset: "Effacer",
    missingWarningTitle: "Lacunes Clés Détectées dans Votre Dressing :",
    missingWarningSubtitle: "Ces pièces indispensables vous permettront de créer une infinité de silhouettes harmonieuses.",
    vitalBadge: "Indispensable",
    recommendedBadge: "Recommandé",
  },
  it: {
    badge: "Audit Guardaroba Capsula",
    subBadge: "Analizzatore di Salute del Guardaroba",
    title: "Audit e Analizzatore Vuoti del Guardaroba Capsula",
    subtitle: "Spunta i capi che possiedi per calcolare la completezza del tuo guardaroba e colmare i gap di stile.",
    capsuleIndex: "Indice di Completezza",
    ofKeyPieces: "dei capi essenziali",
    readyHigh: "Guardaroba Completo & Impeccabile",
    readyMid: "Buone Basi, Da Perfezionare",
    readyLow: "Capi Fondamentali Mancanti",
    instruction: "Seleziona i capi presenti nel tuo armadio:",
    selectAll: "Seleziona Tutti",
    reset: "Azzera",
    missingWarningTitle: "Capi Chiave Mancanti Identificati:",
    missingWarningSubtitle: "Completa questi elementi cardine per creare infiniti abbinamenti sartoriali.",
    vitalBadge: "Cardine",
    recommendedBadge: "Consigliato",
  },
  ar: {
    badge: "مدقق خزانة الكبسولة الذكي",
    subBadge: "محلل اكتمال خزانة الملابس",
    title: "مدقق ومكتشف النواقص في خزانة الكبسولة (Closet Gap Finder)",
    subtitle: "حدد القطع المتوفرة في خزانة ملابسك لحساب مؤشر الجاهزية واكتشاف الركائز الأساسية المفقودة.",
    capsuleIndex: "مؤشر كبسولة الأناقة",
    ofKeyPieces: "من إجمالي القطع الأساسية",
    readyHigh: "خزانة متكاملة وثرية بالأناقة",
    readyMid: "أساسيات جيدة، بحاجة لاكتمال",
    readyLow: "تحتاج إلى تعزيز القطع الأساسية",
    instruction: "انقر على القطع المتوفرة لحفظ حالة خزانتك:",
    selectAll: "تحديد الكل",
    reset: "مسح التحديد",
    missingWarningTitle: "النواقص الأساسية التي تم اكتشافها في خزانتك:",
    missingWarningSubtitle: "يُنصح بمنح الأولوية لشراء هذه القطع الجوهرية لتسهيل تنسيق الإطلالات اليومية.",
    vitalBadge: "جوهري",
    recommendedBadge: "موصى به",
  },
};

export const VirtualCapsuleAuditor: React.FC<{ selectedGender: "men" | "women"; lang?: LanguageCode }> = ({
  selectedGender,
  lang = "fa"
}) => {
  const rawCategories = AUDIT_DATA[selectedGender];
  const allItems = rawCategories.flatMap(c => c.items);
  const totalCount = allItems.length;

  const t = LOCALIZED_AUDITOR[lang] || LOCALIZED_AUDITOR.fa;
  const isRtl = lang === "fa" || lang === "ar";

  // Initial checked state: default some essential items checked
  const [checkedIds, setCheckedIds] = useState<string[]>(["m1", "m4", "m8", "m11", "w1", "w4", "w8", "w11"]);

  const toggleItem = (id: string) => {
    setCheckedIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const currentGenderCheckedCount = allItems.filter(i => checkedIds.includes(i.id)).length;
  const scorePercent = Math.round((currentGenderCheckedCount / totalCount) * 100);

  const missingVitalItems = allItems.filter(i => i.importance === "vital" && !checkedIds.includes(i.id));

  const selectAll = () => {
    const genderIds = allItems.map(i => i.id);
    setCheckedIds(prev => Array.from(new Set([...prev, ...genderIds])));
  };

  const resetSelection = () => {
    const genderIds = new Set(allItems.map(i => i.id));
    setCheckedIds(prev => prev.filter(id => !genderIds.has(id)));
  };

  return (
    <div id="virtual-capsule-auditor" className="bg-[#171513] border border-[#383127] rounded-3xl p-6 sm:p-8 shadow-xl" dir={isRtl ? "rtl" : "ltr"}>
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#2C261F] pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-[#25201A] text-[#E6CA9E] border border-[#C5A880]/30 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <PieChart className="w-3.5 h-3.5 text-[#C5A880]" />
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

        {/* Score Radial & Actions */}
        <div className="flex items-center gap-4 bg-[#11100E] p-4 rounded-2xl border border-[#2D2720]">
          <div className={isRtl ? "text-right" : "text-left"}>
            <div className="text-xs text-stone-400">{t.capsuleIndex}</div>
            <div className="text-lg font-bold text-[#F3EFEA] font-serif-luxury">
              {currentGenderCheckedCount} / {totalCount} {t.ofKeyPieces}
            </div>
            <div className="text-[11px] text-[#C5A880] mt-0.5">
              {scorePercent >= 80 ? t.readyHigh : scorePercent >= 50 ? t.readyMid : t.readyLow}
            </div>
          </div>

          <div className="w-16 h-16 rounded-full border-4 border-[#C5A880] flex flex-col items-center justify-center bg-[#201B15] shrink-0">
            <span className="text-base font-black text-[#E6CA9E] font-mono">{scorePercent}%</span>
            <span className="text-[9px] text-stone-400 font-mono">READY</span>
          </div>
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="flex items-center justify-between gap-2 mb-6 text-xs">
        <span className="text-stone-400 font-medium">{t.instruction}</span>
        <div className="flex gap-2">
          <button
            onClick={selectAll}
            className="px-3 py-1.5 rounded-lg bg-[#201C17] hover:bg-[#2C261F] text-stone-300 text-xs border border-[#3A3228] transition-all cursor-pointer"
          >
            {t.selectAll}
          </button>
          <button
            onClick={resetSelection}
            className="px-3 py-1.5 rounded-lg bg-[#201C17] hover:bg-[#2C261F] text-stone-400 text-xs border border-[#3A3228] transition-all cursor-pointer flex items-center gap-1"
          >
            <RefreshCw className="w-3 h-3" />
            {t.reset}
          </button>
        </div>
      </div>

      {/* Missing Vital Warning Box if applicable */}
      {missingVitalItems.length > 0 && (
        <div className="bg-amber-950/30 border border-amber-800/40 rounded-2xl p-4 mb-6 flex items-start gap-3 text-xs text-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-amber-300 mb-1">
              {t.missingWarningTitle}
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {missingVitalItems.map(item => {
                const itemName = item.name[lang] || item.name.en || item.name.fa;
                return (
                  <span key={item.id} className="px-2.5 py-1 bg-amber-900/40 border border-amber-700/50 rounded-lg text-amber-100 flex items-center gap-1">
                    <span>{item.icon}</span>
                    <span>{itemName}</span>
                  </span>
                );
              })}
            </div>
            <p className="text-[11px] text-amber-300/80 mt-2">
              {t.missingWarningSubtitle}
            </p>
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rawCategories.map((cat, idx) => {
          const categoryTitle = cat.title[lang] || cat.title.en || cat.title.fa;
          return (
            <div key={idx} className="bg-[#12100E] border border-[#27221C] rounded-2xl p-5 space-y-3">
              <h4 className="text-sm font-bold text-[#E6CA9E] border-b border-[#241E18] pb-2 font-serif-luxury">
                {categoryTitle}
              </h4>
              <div className="space-y-2">
                {cat.items.map(item => {
                  const isChecked = checkedIds.includes(item.id);
                  const itemName = item.name[lang] || item.name.en || item.name.fa;
                  const itemDesc = item.desc[lang] || item.desc.en || item.desc.fa;
                  return (
                    <div
                      key={item.id}
                      onClick={() => toggleItem(item.id)}
                      className={`p-3 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        isChecked
                          ? "bg-[#221C16] border-[#C5A880]/60 text-stone-100"
                          : "bg-[#161412] border-[#221D17] text-stone-400 hover:border-stone-600"
                      }`}
                    >
                      <div className="mt-0.5 shrink-0">
                        {isChecked ? (
                          <CheckSquare className="w-4 h-4 text-[#C5A880]" />
                        ) : (
                          <Square className="w-4 h-4 text-stone-500" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className={`text-xs font-bold flex items-center gap-1.5 ${isChecked ? "text-[#F3EFEA]" : "text-stone-300"}`}>
                            <span>{item.icon}</span>
                            <span>{itemName}</span>
                          </span>
                          {item.importance === "vital" ? (
                            <span className="text-[9px] px-1.5 py-0.5 bg-rose-950/60 text-rose-300 border border-rose-800/40 rounded font-semibold">
                              {t.vitalBadge}
                            </span>
                          ) : (
                            <span className="text-[9px] px-1.5 py-0.5 bg-[#25201A] text-stone-400 border border-[#383127] rounded">
                              {t.recommendedBadge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-stone-400 mt-1 leading-normal">
                          {itemDesc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
};
