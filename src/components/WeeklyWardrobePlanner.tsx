import React, { useState } from "react";
import { Calendar, CheckCircle2, Clock, Sparkles, Copy, Check } from "lucide-react";
import { LanguageCode } from "../i18n/translations";

interface DayPlan {
  dayName: Record<LanguageCode, string>;
  dayShort: Record<LanguageCode, string>;
  occasionType: Record<LanguageCode, string>;
  outfitTitle: Record<LanguageCode, string>;
  formula: Record<LanguageCode, string>;
  items: {
    icon: string;
    name: Record<LanguageCode, string>;
  }[];
  vibeTag: Record<LanguageCode, string>;
  curatorNote: Record<LanguageCode, string>;
}

const WEEKLY_ROTATIONS: Record<"men" | "women", DayPlan[]> = {
  men: [
    {
      dayName: {
        fa: "شنبه",
        en: "Saturday",
        fr: "Samedi",
        it: "Sabato",
        ar: "السبت",
      },
      dayShort: {
        fa: "شنبه",
        en: "Sat",
        fr: "Sam",
        it: "Sab",
        ar: "سبت",
      },
      occasionType: {
        fa: "جلسات استراتژیک اول هفته و امضای قراردادها",
        en: "Executive Board Meetings & Strategic Contract Signings",
        fr: "Réunions de Direction & Signatures Stratégiques",
        it: "Riunioni di Consiglio & Firme di Contratti Strategici",
        ar: "الاجتماعات الاستراتيجية وتوقيع العقود الرسمية",
      },
      outfitTitle: {
        fa: "استایل مونوکروم سرمه‌ای اشرافی (Mayfair Executive)",
        en: "Mayfair Executive Midnight Navy Monolith",
        fr: "Ensemble Mayfair Exécutif en Bleu Nuit Monochrome",
        it: "Eleganza Sartoriale Mayfair in Blu Notte Monocromatico",
        ar: "طقم مايفير التنفيذي بكحلي ملكي أحادي اللون",
      },
      formula: {
        fa: "کت سرمه‌ای پشمی + پیراهن سفید آهاردار + شلوار طوسی زغالی + کفش آکسفورد قهوه‌ای سوخته",
        en: "Navy Wool Hopsack Blazer + Crisp White Oxford + Charcoal Flannel Trousers + Burnished Espresso Oxfords",
        fr: "Blazer Laine Hopsack Bleu Nuit + Chemise Oxford Blanche + Pantalon Flanelle Anthracite + Souliers Richelieu Brun Foncé",
        it: "Giacca in Lana Hopsack Blu Notte + Camicia Oxford Bianca + Pantaloni in Flanella Antracite + Francesine Testa di Moro",
        ar: "سترة كحلي صوف طبيعي + قميص أكسفورد أبيض ناصع + بنطال فلانيل رمادي فحمي + حذاء أكسفورد بني محروق",
      },
      items: [
        {
          icon: "🧥",
          name: {
            fa: "کت تک سرمه‌ای بافت هاپ‌سک",
            en: "Navy Hopsack Wool Blazer",
            fr: "Blazer Hopsack en Laine Bleu Nuit",
            it: "Blazer Hopsack in Lana Blu",
            ar: "سترة كحلي بنسيج هوبساك الصوفي",
          },
        },
        {
          icon: "👔",
          name: {
            fa: "پیراهن سفید آکسفورد دوخت تمیز",
            en: "Immaculate White Oxford Shirt",
            fr: "Chemise Oxford Blanche Impeccable",
            it: "Camicia Oxford Bianca Sartoriale",
            ar: "قميص أكسفورد أبيض محبوك بعناية",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار پشمی ترپیکال زغالی",
            en: "Charcoal Tropical Wool Trousers",
            fr: "Pantalon en Laine Froide Anthracite",
            it: "Pantaloni in Lana Tropical Antracite",
            ar: "بنطال صوف استوائي رمادي فحمي",
          },
        },
        {
          icon: "👞",
          name: {
            fa: "کفش آکسفورد بنددار چرم گوساله",
            en: "Box Calfskin Oxford Lace-Ups",
            fr: "Souliers Richelieu en Cuir de Veau",
            it: "Francesine Allacciate in Vitello",
            ar: "حذاء أكسفورد برباط من جلد العجل",
          },
        },
        {
          icon: "⌚",
          name: {
            fa: "ساعت کلاسیک قاب استیل بند چرم",
            en: "Steel Dress Watch with Alligator Strap",
            fr: "Montre Habillée Acier & Bracelet Cuir",
            it: "Orologio Classico in Acciaio e Cinturino in Pelle",
            ar: "ساعة كلاسيكية بإطار فولاذي وحزام جلدي",
          },
        },
      ],
      vibeTag: {
        fa: "اقتدار، نظم و اعتماد به نفس بی‌کلام",
        en: "Quiet Authority, Impeccable Discipline & Poise",
        fr: "Autorité Silencieuse, Rigueur & Confiance",
        it: "Autorevolezza Sobria, Disciplina & Rigore",
        ar: "هيبة هادئة، انضباط وثقة مطلقة",
      },
      curatorNote: {
        fa: "برای شروع پرانرژی هفته، هیچ ترکیبی به اندازه سرمه‌ای ملوانی و طوسی زغالی حس اقتدار خونسردانه ایجاد نمی‌کند.",
        en: "To inaugurate the week with gravitas, nothing commands effortless respect like high-twist navy paired with charcoal flannel.",
        fr: "Pour débuter la semaine avec distinction, rien n'égale le bleu nuit associé à la flanelle anthracite.",
        it: "Per iniziare la settimana con prestigio, l'abbinamento tra blu navy e antracite dona un'impeccabile sicurezza.",
        ar: "لبداية أسبوع مفعمة بالثقة، لا شيء يضاهي التناغم بين الكحلي الداكن والرمادي الفحمي لإبراز الهيبة والوقار.",
      },
    },
    {
      dayName: {
        fa: "یک‌شنبه",
        en: "Sunday",
        fr: "Dimanche",
        it: "Domenica",
        ar: "الأحد",
      },
      dayShort: {
        fa: "یک‌شنبه",
        en: "Sun",
        fr: "Dim",
        it: "Dom",
        ar: "أحد",
      },
      occasionType: {
        fa: "کارهای اجرایی اداری و جلسات درون‌سازمانی",
        en: "Executive Operations & Internal Strategic Briefings",
        fr: "Opérations Internes & Réunions d'Équipe",
        it: "Operatività Aziendale & Briefing di Team",
        ar: "الأعمال التنفيذية والاجتماعات الداخلية للفرق",
      },
      outfitTitle: {
        fa: "ترکیب بیزینس اسمارت با لایه‌بندی مرینو (Smart Tailoring)",
        en: "Merino Smart Layering & Tonal Sophistication",
        fr: "Superposition Mérinos Élégante & Chic Décontracté",
        it: "Stratificazione in Lana Merino & Eleganza Smart",
        ar: "تنسيق ذكي بطبقات صوف الميرينو الراقي",
      },
      formula: {
        fa: "پلیور یقه گرد مرینو سرمه‌ای + پیراهن آبی آسمانی + شلوار کتان شنی + لوفر چرم",
        en: "Navy Merino Crewneck + Pale Sky Blue Shirt + Sand Chinos + Dark Brown Penny Loafers",
        fr: "Pull Col Rond Mérinos Bleu Marine + Chemise Bleu Ciel + Chino Sable + Mocassins en Cuir",
        it: "Girocollo in Lana Merino Blu + Camicia Celeste + Chino Sabbia + Mocassini in Pelle",
        ar: "كنزة ميرينو كحلية بقبة مستديرة + قميص أزرق سماوي + بنطال تشينو رملي + لوفر جلدي فاخر",
      },
      items: [
        {
          icon: "🧶",
          name: {
            fa: "پلیور ظریف پشم مرینو سرمه‌ای",
            en: "Fine-Gauge Navy Merino Knit",
            fr: "Pull Fin en Laine Mérinos Marine",
            it: "Maglia Fine in Lana Merino Navy",
            ar: "كنزة خفيفة من صوف الميرينو الكحلي",
          },
        },
        {
          icon: "👔",
          name: {
            fa: "پیراهن آبی روشن کتان پنبه‌ای",
            en: "Pale Blue Oxford Cotton Shirt",
            fr: "Chemise Coton Oxford Bleu Clair",
            it: "Camicia in Cotone Celeste",
            ar: "قميص قطن أزرق فاتح مريح",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار کتان فیت بژ / شنی",
            en: "Tailored Sand / Beige Chinos",
            fr: "Pantalon Chino Ajusté Beige Sable",
            it: "Pantaloni Chino Sabbia Sartoriali",
            ar: "بنطال تشينو متناسق بلون رملي بيج",
          },
        },
        {
          icon: "👞",
          name: {
            fa: "کفش لوفر چرمی با زیره چرم",
            en: "Leather-Soled Penny Loafers",
            fr: "Mocassins Classiques en Cuir",
            it: "Mocassini Penny in Cuoio",
            ar: "حذاء لوفر جلدي بنعل طبيعي",
          },
        },
      ],
      vibeTag: {
        fa: "آراستگی حرفه‌ای، راحتی بالا در طول روز",
        en: "Professional Poise & All-Day Fluid Mobility",
        fr: "Élégance Fluide & Confort Tout au Long du Jour",
        it: "Compostezza Professionale & Massimo Comfort",
        ar: "أناقة عملية وراحة فائقة طوال اليوم",
      },
      curatorNote: {
        fa: "یقه پیراهن را زیر پلیور قرار دهید تا بدون نیاز به کت، ظاهری اتوکشیده و شیک داشته باشید.",
        en: "Tuck the shirt collar neatly under the merino crewneck to maintain an immaculate tailored silhouette without needing a blazer.",
        fr: "Glissez le col de chemise sous le pull col rond pour une silhouette soignée sans l'encombrement d'une veste.",
        it: "Mantieni il colletto sotto il girocollo merino per un look impeccabile anche senza giacca.",
        ar: "أدخل ياقة القميص بلطف تحت كنزة الميرينو للحصول على مظهر مرتب ومهندم دون الحاجة لارتداء سترة.",
      },
    },
    {
      dayName: {
        fa: "دوشنبه",
        en: "Monday",
        fr: "Lundi",
        it: "Lunedì",
        ar: "الإثنين",
      },
      dayShort: {
        fa: "دوشنبه",
        en: "Mon",
        fr: "Lun",
        it: "Lun",
        ar: "إثنين",
      },
      occasionType: {
        fa: "ناهار کاری مهم با سرمایه‌گذاران و شرکا",
        en: "Executive Luncheon & Investor Consultations",
        fr: "Déjeuner d'Affaires & Rendez-vous Investisseurs",
        it: "Pranzo di Lavoro con Partner e Investitori",
        ar: "غداء عمل رفيع المستوى مع الشركاء والمستثمرين",
      },
      outfitTitle: {
        fa: "ژاکت فلانل شکلاتی و شلوار شیری (Continental Sophistication)",
        en: "Continental Espresso Flannel & Ivory Trousers",
        fr: "Veste Flanelle Chocolat & Pantalon Crème Écru",
        it: "Giacca in Flanella Cioccolato & Pantaloni Panna",
        ar: "سترة فلانيل بنية وشاح شيري (أناقة قارية)",
      },
      formula: {
        fa: "کت بلیزر فلانل خاکی/قهوه‌ای + پیراهن کرم شیری + شلوار کرم تافته + بوت چلسی جیر",
        en: "Chocolate Flannel Blazer + Ivory Silk-Cotton Shirt + Off-White Wool Trousers + Dark Suede Chelsea Boots",
        fr: "Blazer Flanelle Marron Écorce + Chemise Soie-Coton Écru + Pantalon Laine Crème + Bottines Chelsea en Daim",
        it: "Blazer Flanella Bruno + Camicia Seta-Cotone Avorio + Pantaloni in Lana Panna + Stivaletti Chelsea Scamosciati",
        ar: "سترة فلانيل بنية دافئة + قميص حرير قطن عاجي + بنطال صوف كريمي + حذاء تشيلسي من الجلد السويدي",
      },
      items: [
        {
          icon: "🧥",
          name: {
            fa: "کت فلانل ملانژ قهوه‌ای بلوطی",
            en: "Chestnut Mélange Flannel Jacket",
            fr: "Veste en Flanelle Mélangée Châtaigne",
            it: "Giacca in Flanella Melange Castagno",
            ar: "سترة فلانيل كستنائية فاخرة",
          },
        },
        {
          icon: "👔",
          name: {
            fa: "پیراهن ابریشم-پنبه کرم عاجی",
            en: "Ivory Silk-Cotton Blend Shirt",
            fr: "Chemise Crème Soie & Coton",
            it: "Camicia Panna in Seta e Cotone",
            ar: "قميص مزيج الحرير والقطن العاجي",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار کتان فلانل شیری کم‌رنگ",
            en: "Ecru Tailored Flannel Trousers",
            fr: "Pantalon en Flanelle Écru",
            it: "Pantaloni Sartoriali in Flanella Écru",
            ar: "بنطال فلانيل عاجي خفيف",
          },
        },
        {
          icon: "👢",
          name: {
            fa: "بوت چلسی جیر قهوه‌ای تیره",
            en: "Dark Espresso Suede Chelsea Boots",
            fr: "Bottines Chelsea en Daim Espresso",
            it: "Chelsea Boot in Camoscio Testa di Moro",
            ar: "حذاء تشيلسي شمواه بلون الإسبريسو",
          },
        },
      ],
      vibeTag: {
        fa: "طبع گرم و اصیل سبک میلان و توسکانی",
        en: "Warm Milanese Refinement & Sprezzatura",
        fr: "Chaleur Noble & Sprezzatura Milanaise",
        it: "Raffinatezza Milanese & Sprezzatura",
        ar: "دفء راقٍ على طراز ميلانو وتوسكانا الأصيل",
      },
      curatorNote: {
        fa: "ترکیب قهوه‌ای و رنگ شیری در فضاهای رستوران و ناهار کاری حس صمیمیت هوشمندانه القا می‌کند.",
        en: "Earthy espresso paired with warm ecru creates an aura of approachable wealth, ideal for relaxed private dining.",
        fr: "L'harmonie entre le chocolat et l'écru inspire une opulence chaleureuse et mesurée.",
        it: "L'abbinamento marrone ed écru trasmette calore e autorevolezza raffinata.",
        ar: "تناغم البني الإسبريسو مع الأبيض العاجي يمنح إحساساً بالفخامة الودودة والمثالية للقاءات الغداء.",
      },
    },
    {
      dayName: {
        fa: "سه‌شنبه",
        en: "Tuesday",
        fr: "Mardi",
        it: "Martedì",
        ar: "الثلاثاء",
      },
      dayShort: {
        fa: "سه‌شنبه",
        en: "Tue",
        fr: "Mar",
        it: "Mar",
        ar: "ثلاثاء",
      },
      occasionType: {
        fa: "جلسات پروژه‌ای فشرده، بازدید میدانی و سفر کاری روزانه",
        en: "Intensive Project Reviews, Site Inspections & Day Travel",
        fr: "Revues de Projets & Déplacements Professionnels",
        it: "Workshop Intensivi & Viaggi di Lavoro Giornalieri",
        ar: "ورش العمل، الجولات الميدانية ورحلات العمل السريعة",
      },
      outfitTitle: {
        fa: "استایل چهارفصل پویا (Traveler Capsule)",
        en: "Dynamic Traveler Shawl Cardigan Capsule",
        fr: "Capsule Voyageur Dynamique au Cardigan Châle",
        it: "Capsule Dinamica con Cardigan a Collo Scialle",
        ar: "كبسولة المسافر الديناميكية بكارديجان شال",
      },
      formula: {
        fa: "کاردیگان ضخیم شال‌دار + پیراهن سفید + شلوار جین تیره بدون زاپ + اسنیکر سفید مینیمال",
        en: "Chunky Charcoal Shawl Cardigan + Poplin Shirt + Raw Dark Selvedge Denim + Minimalist Leather Sneakers",
        fr: "Cardigan Col Châle Cachemire + Chemise Popeline Blanche + Jean Selvedge Brut + Baskets Minimalistes en Cuir",
        it: "Cardigan a Scialle in Cashmere + Camicia Bianca + Denim Selvedge Scuro + Sneakers Minimal in Pelle",
        ar: "كارديجان صوف شال فحمي + قميص بوبلين أبيض + جينز نيلي خام غير ممزق + سنيكرز جلد أبيض",
      },
      items: [
        {
          icon: "🧥",
          name: {
            fa: "کاردیگان شال‌دار کشمیری ذغالی",
            en: "Charcoal Cashmere Shawl Collar Cardigan",
            fr: "Cardigan Col Châle en Cachemire Anthracite",
            it: "Cardigan Collo Scialle in Cashmere Antracite",
            ar: "كارديجان كشمير بقبة شال فحمية",
          },
        },
        {
          icon: "👔",
          name: {
            fa: "پیراهن پاپلین بدون چروک",
            en: "Non-Iron Pure Cotton Poplin Shirt",
            fr: "Chemise Popeline Pur Coton Infroissable",
            it: "Camicia Popeline Puro Cotone No-Stiro",
            ar: "قميص بوبلين قطني مقاوم للتجعد",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار جین سرمه‌ای خام یکدست",
            en: "Deep Indigo Raw Selvedge Denim",
            fr: "Jean Brut Selvedge Indigo Foncé",
            it: "Jeans Selvedge Indigo Intenso",
            ar: "جينز نيلي خام بدون أي معالجة صناعية",
          },
        },
        {
          icon: "👟",
          name: {
            fa: "اسنیکر چرم سفید تمام‌دست‌دوز",
            en: "Handcrafted Low-Top White Leather Sneakers",
            fr: "Baskets Basses en Cuir Blanc Fait-Main",
            it: "Sneakers Artigianali in Pelle Bianca",
            ar: "حذاء رياضي جلد أبيض كلاسيكي مصنوع يدوياً",
          },
        },
      ],
      vibeTag: {
        fa: "راحتی لوکس و انعطاف‌پذیری تمام‌روز",
        en: "Quiet Mobility, Unencumbered Luxury & Agility",
        fr: "Confort Haut de Gamme & Mobilité Aisée",
        it: "Mobilità Raffinata & Comfort per Tutto il Giorno",
        ar: "راحة مترفة وحرية حركة كاملة طوال اليوم",
      },
      curatorNote: {
        fa: "شلوار جین خام بدون زاپ همراه با کاردیگان شال‌دار، مرز بین راحتی و پرستیژ را بی‌نقص تعریف می‌کند.",
        en: "Flawlessly uniform raw selvedge denim framed by a shawl-collar knit bridges the gap between relaxed ease and sartorial pedigree.",
        fr: "Le denim brut sans délavage associé à la maille noble établit la frontière parfaite entre décontraction et raffinement.",
        it: "Il denim scuro e la maglieria nobile creano un connubio perfetto tra praticità e distinzione.",
        ar: "الجينز النيلي الخام المتجانس مع الكارديجان الصوفي يرسم التوازن الأمثل بين الراحة والوقار.",
      },
    },
    {
      dayName: {
        fa: "چهارشنبه",
        en: "Wednesday",
        fr: "Mercredi",
        it: "Mercoledì",
        ar: "الأربعاء",
      },
      dayShort: {
        fa: "چهارشنبه",
        en: "Wed",
        fr: "Mer",
        it: "Mer",
        ar: "أربعاء",
      },
      occasionType: {
        fa: "جلسات پایانی هفته، جمع‌بندی گزارش‌ها و دیدارهای کاری عصر",
        en: "Midweek Closings, Analytical De-briefs & Twilight Cocktails",
        fr: "Synthèse Hebdomadaire & Cocktails de Fin de Journée",
        it: "Chiusura Progetti & Incontri di Lavoro Serali",
        ar: "جلسات ختام الأسبوع، مراجعة التقارير ولقاءات المساء",
      },
      outfitTitle: {
        fa: "ترکیب مدرن کت شتری و پیراهن راه‌راه (Old Money Preppy)",
        en: "Camelhair Tailored Blazer & Banker Stripe",
        fr: "Blazer Poil de Chameau & Rayures Banquier",
        it: "Blazer Cammello & Camicia Gessata",
        ar: "سترة صوف جملي مع قميص مخطط كلاسيكي",
      },
      formula: {
        fa: "کت شتری پشمی + پیراهن راه‌راه بنکر آبی-سفید + شلوار پشمی فلانل دودی + کفش دربی چرم",
        en: "Camel Wool Blazer + Blue/White Bengal Stripe Shirt + Slate Grey Flannel Trousers + Chestnut Derby Shoes",
        fr: "Blazer Laine Camel + Chemise Rayée Banquier Bleu-Blanc + Pantalon Flanelle Gris Ardoise + Derbies Châtaigne",
        it: "Blazer Lana Cammello + Camicia a Righe Banker + Pantaloni in Flanella Ardesia + Derby Castagno",
        ar: "سترة صوف جملي + قميص بنكر مخطط أزرق وأبيض + بنطال فلانيل رمادي رمادي + حذاء ديربي بني عسلي",
      },
      items: [
        {
          icon: "🧥",
          name: {
            fa: "کت تک دوچاک شتری با دکمه شاخی",
            en: "Camel Wool Double-Vent Blazer with Horn Buttons",
            fr: "Blazer Laine Camel aux Boutons en Corne",
            it: "Giacca in Lana Cammello con Bottoni in Corno",
            ar: "سترة صوف جملي بفتحتين وأزرار قرنية طبيعية",
          },
        },
        {
          icon: "👔",
          name: {
            fa: "پیراهن نخی راه‌راه آبی ملایم",
            en: "Fine Blue Bengal Stripe Cotton Shirt",
            fr: "Chemise Rayée Bengale Bleu et Blanc",
            it: "Camicia a Righe Bengala Azzurra",
            ar: "قميص قطني فاخر بخطوط زرقاء وبيضاء رفيعة",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار پشمی راسته خاکستری ملایم",
            en: "Mid-Grey Worsted Flannel Trousers",
            fr: "Pantalon en Flanelle Peignée Gris Moyen",
            it: "Pantaloni in Flanella Pettinata Grigio Medio",
            ar: "بنطال صوف فلانيل مستقيم رمادي هادئ",
          },
        },
        {
          icon: "👞",
          name: {
            fa: "کفش دربی عسلی پولیش‌خورده",
            en: "Polished Chestnut Calf Leather Derbies",
            fr: "Souliers Derby en Cuir Cognac Lustré",
            it: "Scarpe Derby in Cuoio Cognac Lucidato",
            ar: "حذاء ديربي جلد عجل ملمع بلون الكستناء",
          },
        },
      ],
      vibeTag: {
        fa: "اصالت، جذابیت و حس شیک دانشگاه‌های آیوی‌لیگ",
        en: "Heritage Savoir-Faire & Ivy League Poise",
        fr: "Prestige Académique & Charme Intemporel",
        it: "Stile Ivy League & Fascino Senza Tempo",
        ar: "أصالة أكاديمية وهيبة كلاسيكية متوارثة",
      },
      curatorNote: {
        fa: "پیراهن با راه‌راه‌های ظریف بنکر در کنار کت رنگ شتری، تناسب هارمونیک بی‌نظیری خلق می‌کند.",
        en: "Delicate banker stripes create a captivating mathematical rhythm against the rich texture of camelhair.",
        fr: "Les rayures fines contrastent superbement avec la texture douce et chaude de la laine camel.",
        it: "Le righe sottili donano un tocco dinamico ed elegante alla morbidezza della lana cammello.",
        ar: "الخطوط الرفيعة للقميص تمنح توازناً بصرياً ساحراً مع الملمس الغني لصوف الجمل.",
      },
    },
    {
      dayName: {
        fa: "پنج‌شنبه",
        en: "Thursday",
        fr: "Jeudi",
        it: "Giovedì",
        ar: "الخميس",
      },
      dayShort: {
        fa: "پنج‌شنبه",
        en: "Thu",
        fr: "Jeu",
        it: "Gio",
        ar: "خميس",
      },
      occasionType: {
        fa: "مهمانی عصرانه، دیت عاشقانه و رستوران سطح بالا",
        en: "Fine Dining Soirée, Opera & Twilight Romance",
        fr: "Dîner Gastronomique, Opéra & Soirée Élégante",
        it: "Cena Gourmet, Teatro & Serata di Gala",
        ar: "أمسيات العشاء الفاخر، الأوبرا والمناسبات الراقية",
      },
      outfitTitle: {
        fa: "استایل مونوکروم تمام مشکی با بافت لوکس (Sleek Nocturne)",
        en: "Sleek Nocturne Velvet & Black Monolith",
        fr: "Nocturne Élégant Noir Profond & Matières Nobles",
        it: "Monocromo Notte in Velluto & Lana Nera",
        ar: "أناقة الليل المونوكرومية بالقماش المخملي الفاخر",
      },
      formula: {
        fa: "کت مشکی تک بدون اپل + تیشرت یا بلوز نخی کرم/مشکی + شلوار مشکی راسته + لوفر ورنی",
        en: "Soft-Shoulder Black Cashmere Jacket + Silk-Blend Black Knit + High-Rise Wool Trousers + Patent/Velvet Loafers",
        fr: "Veste Cachemire Noire Épaules Souples + Maille Soie Noire + Pantalon Laine Noir + Mocassins Vernis/Velours",
        it: "Giacca Nera in Cashmere Senza Spalline + Maglia Seta Nera + Pantaloni Sartoriali Neri + Mocassini in Velluto",
        ar: "سترة كشمير سوداء بأكتاف طبيعية + كنزة حريرية سوداء + بنطال صوف أسود + لوفر مخملي لامع",
      },
      items: [
        {
          icon: "🧥",
          name: {
            fa: "کت تک کشمیر بدون لایه‌گذاری شانه",
            en: "Deconstructed Black Cashmere Jacket",
            fr: "Veste Déconstruite en Cachemire Noir",
            it: "Giacca Destrutturata in Cashmere Nero",
            ar: "سترة كشمير سوداء انسيابية خفيفة",
          },
        },
        {
          icon: "👕",
          name: {
            fa: "تیشرت پنبه سوپریما کرم عاجی",
            en: "Supima Cotton & Silk Base Top",
            fr: "Haut en Coton Supima & Soie",
            it: "Top in Cotone Supima e Seta",
            ar: "قميص داخلي من قطن السوبيما والحرير",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار پارچه‌ای مشکی فاق‌بلند",
            en: "High-Waisted Black Barathea Trousers",
            fr: "Pantalon Taille Haute en Laine Barathea Noire",
            it: "Pantaloni a Vita Alta in Lana Nera",
            ar: "بنطال قماش أسود بخصر مرتفع",
          },
        },
        {
          icon: "👞",
          name: {
            fa: "کفش لوفر مخمل یا چرم براق",
            en: "Hand-Embroidered Velvet or Polished Loafers",
            fr: "Mocassins en Velours Noir ou Cuir Glacé",
            it: "Mocassini in Velluto Nero o Spazzolato",
            ar: "حذاء لوفر مخملي أسود أو جلد لامع",
          },
        },
      ],
      vibeTag: {
        fa: "جذابیت آرام، متانت و ظرافت شبانه",
        en: "Nocturnal Mystique, Restraint & Pure Magnetism",
        fr: "Mystère Nocturne, Retenue & Magnétisme",
        it: "Mistero Notturno & Fascino Calmo",
        ar: "غموض ساحر، رزانة وجاذبية ليلية آسرة",
      },
      curatorNote: {
        fa: "سادگی در رنگ‌بندی باعث می‌شود کیفیت بافت پارچه زیر نور ملایم شبانه بدرخشد.",
        en: "Monochromatic discipline allows the subtle gleam of fine cashmere and silk to radiate under candlelit ambiance.",
        fr: "L'absence de motifs fait ressortir la somptuosité des matières sous les lumières tamisées.",
        it: "La disciplina monocromatica esalta la lucentezza dei tessuti nobili sotto la luce serale.",
        ar: "الانضباط اللوني المونوكرومي يبرز فخامة وبريق أنسجة الكشمير والحرير تحت الأضواء الهادئة.",
      },
    },
    {
      dayName: {
        fa: "جمعه",
        en: "Friday",
        fr: "Vendredi",
        it: "Venerdì",
        ar: "الجمعة",
      },
      dayShort: {
        fa: "جمعه",
        en: "Fri",
        fr: "Ven",
        it: "Ven",
        ar: "جمعة",
      },
      occasionType: {
        fa: "گالری‌گردی، کافه‌نشینی آرام و پیاده‌روی ریویرا",
        en: "Art Galleries, Promenade & Riviera Coastline Leisure",
        fr: "Vernissages, Flâneries en Terrasse & Détente Riviera",
        it: "Gallerie d'Arte, Caffè & Passeggiata Riviera",
        ar: "زيارة المعارض الفنية، الاسترخاء في المقاهي ونزهة الريفييرا",
      },
      outfitTitle: {
        fa: "کژوال لوکس تنفس‌پذیر (Riviera Weekend Chill)",
        en: "Riviera Unwashed Washed Linen & Suede Ease",
        fr: "Détente Riviera en Lin Lavé & Daim Naturel",
        it: "Weekend Riviera in Lino Lavato & Camoscio",
        ar: "أناقة الريفييرا المريحة بالكتان والجلد السويدي",
      },
      formula: {
        fa: "پیراهن لینن خنک بژ + شلوار کتان راسته خاکی + عینک آفتابی استات + اسنیکر مینیمال",
        en: "Breathable Sand Linen Shirt + Ecru Relaxed Trousers + Tortoiseshell Acetate Shades + Suede Slip-Ons",
        fr: "Chemise en Lin Respirant Sable + Pantalon Écru Ample + Lunettes Écaille + Slip-ons en Daim",
        it: "Camicia in Lino Sabbia + Pantaloni Morbidi Écru + Occhiali Tartarugati + Slip-on in Camoscio",
        ar: "قميص كتان رملي منساب + بنطال كتان مريح + نظارات شمسية كلاسيكية + حذاء خفيف من الشمواه",
      },
      items: [
        {
          icon: "👔",
          name: {
            fa: "پیراهن ۱۰۰٪ لینن شسته شده نسکافه‌ای",
            en: "100% Washed Sand Linen Shirt",
            fr: "Chemise 100% Lin Lavé Sable",
            it: "Camicia 100% Lino Lavato Sabbia",
            ar: "قميص كتان مغسول ١٠٠٪ بلون الرمل",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار کتان کشی راحت خاکی",
            en: "Tailored Drawstring Linen/Cotton Chinos",
            fr: "Pantalon Souple Lin & Coton à Cordon",
            it: "Pantaloni Morbidi in Lino e Cotone",
            ar: "بنطال كتان وقطن ناعم ومريح",
          },
        },
        {
          icon: "🕶️",
          name: {
            fa: "عینک آفتابی فریم استات پلنگی مات",
            en: "Matte Tortoiseshell Acetate Sunglasses",
            fr: "Lunettes de Soleil Écaille Mate",
            it: "Occhiali da Sole in Acetato Tartarugato Opaco",
            ar: "نظارات شمسية بإطار أسيتات عسلي كلاسيكي",
          },
        },
        {
          icon: "👟",
          name: {
            fa: "کفش اسلیپ‌آن جیر خنثی",
            en: "Neutral Suede Belgian Slip-Ons",
            fr: "Mocassins Belges Souples en Daim",
            it: "Slip-on Sartoriali in Camoscio Neutro",
            ar: "حذاء خفيف من الشمواه الناعم بلون محايد",
          },
        },
      ],
      vibeTag: {
        fa: "آرامش خالص، رهایی از قیدوبند و تجدید قوا",
        en: "Pure Serenity, Mediterranean Ease & Regeneration",
        fr: "Sérénité Absolue, Douceur Méditerranéenne & Ressourcement",
        it: "Pura Serenità, Relax Mediterraneo & Libertà",
        ar: "سكينة تامة، استرخاء البحر المتوسط وتجدد الحيوية",
      },
      curatorNote: {
        fa: "آستین پیراهن لینن را دو تا بزنید و از عینک کلاسیک با عدسی سبز زیتونی استفاده کنید.",
        en: "Roll the linen sleeves casually to the mid-forearm; the natural organic wrinkles are a badge of authentic leisure.",
        fr: "Relevez négligemment les manches en lin ; les plis naturels sont le signe même du luxe décontracté.",
        it: "Arrotola le maniche del lino con naturalezza: le pieghe organiche sono il vero emblema del lusso estivo.",
        ar: "اطوِ أكمام قميص الكتان بطبيعية؛ فتجاعيد الكتان الطبيعية هي علامة الراحة والاسترخاء الراقي.",
      },
    },
  ],
  women: [
    {
      dayName: {
        fa: "شنبه",
        en: "Saturday",
        fr: "Samedi",
        it: "Sabato",
        ar: "السبت",
      },
      dayShort: {
        fa: "شنبه",
        en: "Sat",
        fr: "Sam",
        it: "Sab",
        ar: "سبت",
      },
      occasionType: {
        fa: "جلسات کاری ارشد و ارائه پروژه‌های مهم",
        en: "Boardroom Presentations & Senior Executive Strategy",
        fr: "Présentations de Conseil & Décisions Stratégiques",
        it: "Presentazioni di Alto Livello & Strategia Esecutiva",
        ar: "عروض مجلس الإدارة والاجتماعات القيادية الكبرى",
      },
      outfitTitle: {
        fa: "کت و شلوار مونوکروم دودی با شومیز ابریشم (Parisienne Powerhouse)",
        en: "Parisienne Charcoal Powerhouse & Mulberry Silk",
        fr: "Tailleur Anthracite Parisien & Chemisier en Soie",
        it: "Tailleur Antracite Parigino & Blusa in Seta",
        ar: "بدلة رمادية فحمية مع بلوزة حريرية باريسية",
      },
      formula: {
        fa: "کت بلیزر دودی اوورسایز ملایم + شومیز سفید ابریشمی + شلوار واید لگ + پمپ چرم مشکی",
        en: "Tailored Charcoal Wool Blazer + Pure Silk Crêpe de Chine Blouse + High-Rise Wide-Leg Trousers + Block-Heel Pumps",
        fr: "Blazer Laine Anthracite + Chemisier Soie Crêpe de Chine + Pantalon Large Taille Haute + Escarpins Cuir Noir",
        it: "Blazer in Lana Antracite + Blusa in Seta Crepe de Chine + Pantaloni a Gamba Larga + Décolleté in Pelle",
        ar: "سترة صوف رمادية فحمية + بلوزة حرير كريب دو شين + بنطال واسع بخصر عالٍ + حذاء كعب جلدي أسود",
      },
      items: [
        {
          icon: "🧥",
          name: {
            fa: "کت بلیزر ساختاریافته فلانل زغالی",
            en: "Sculpted Charcoal Flannel Blazer",
            fr: "Blazer Structuré en Flanelle Anthracite",
            it: "Blazer Sartoriale in Flanella Antracite",
            ar: "سترة بليزر مهندمة من الفلانيل الفحمي",
          },
        },
        {
          icon: "👚",
          name: {
            fa: "شومیز ۱۰۰٪ سیلک کرپ دوشین سفید",
            en: "100% Silk Crêpe de Chine White Blouse",
            fr: "Chemisier 100% Soie Crêpe de Chine Blanc",
            it: "Blusa in 100% Seta Crepe de Chine Bianca",
            ar: "بلوزة حرير كريب دو شين بيضاء ١٠٠٪",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار واید لگ فاق‌بلند همرنگ کت",
            en: "Tonal High-Waisted Wide-Leg Wool Trousers",
            fr: "Pantalon Large Taille Haute Ton-sur-Ton",
            it: "Pantaloni a Gamba Larga a Vita Alta Coordinati",
            ar: "بنطال واسع متناسق الألوان بخصر مرتفع",
          },
        },
        {
          icon: "👠",
          name: {
            fa: "کفش پاشنه ۵ سانتی‌متری چرم مشکی",
            en: "5cm Ergonomic Black Calfskin Pumps",
            fr: "Escarpins Talon 5cm en Cuir Noir",
            it: "Décolleté Tacco 5cm in Vitello Nero",
            ar: "حذاء كعب مريح ٥ سم من جلد العجل الأسود",
          },
        },
        {
          icon: "👜",
          name: {
            fa: "کیف توت چرم ساختاریافته بدون لوگو",
            en: "Logo-Free Structured Full-Grain Leather Tote",
            fr: "Sac Cabas Structuré en Cuir Sans Logo",
            it: "Borsa Tote Strutturata in Pelle Senza Logo",
            ar: "حقيبة جلدية هندسية بدون أي شعار تجاري",
          },
        },
      ],
      vibeTag: {
        fa: "شکوه بانوی پیشرو، خطوط تمیز و کاریزمای آرام",
        en: "Executive Poise, Sculptural Lines & Quiet Charisma",
        fr: "Allure de Leader, Lignes Épurées & Charisme Feutré",
        it: "Autorevolezza Femminile, Linee Pure & Carisma",
        ar: "هيبة قيادية، خطوط معمارية نقية وكاريزما هادئة",
      },
      curatorNote: {
        fa: "ترکیب شومیز ابریشم لطیف با کت پشمی سنگین، نهایت تعادل حسی در استایل بانوان است.",
        en: "Juxtaposing gossamer mulberry silk against tailored masculine flannel strikes the quintessential quiet luxury balance.",
        fr: "Le dialogue entre la fluidité de la soie et la rigueur de la flanelle incarne la quintessence du chic exécutif.",
        it: "L'incontro tra la fluidità della seta e la struttura della flanella definisce l'armonia sartoriale perfetta.",
        ar: "التناغم بين انسيابية الحرير الخالص ومتانة الصوف الفاخر يجسد ذروة الأناقة المتوازنة.",
      },
    },
    {
      dayName: {
        fa: "یک‌شنبه",
        en: "Sunday",
        fr: "Dimanche",
        it: "Domenica",
        ar: "الأحد",
      },
      dayShort: {
        fa: "یک‌شنبه",
        en: "Sun",
        fr: "Dim",
        it: "Dom",
        ar: "أحد",
      },
      occasionType: {
        fa: "محیط کاری هوشمند، جلسات تیم و کافه‌کاری",
        en: "Smart Corporate Workspace & Creative Briefings",
        fr: "Espace de Travail Créatif & Réunions Informelles",
        it: "Ambiente di Lavoro Smart & Incontri di Progetto",
        ar: "بيئات العمل الذكية وورش التخطيط الإبداعي",
      },
      outfitTitle: {
        fa: "لایه‌بندی بافت کشمیر و دامن میدی ساتن (Subtle Luxury Silk)",
        en: "Oversized Ivory Cashmere & Olive Satin Midi",
        fr: "Cachemire Écru & Jupe Midi en Satin Olive",
        it: "Cashmere Panna & Gonna Midi in Raso Oliva",
        ar: "كنزة كشمير عاجية مع تنورة ساتان زيتونية متوسطة الطول",
      },
      formula: {
        fa: "پلیور کشمیر اورسایز کرمی + دامن میدی ساتن زیتونی + بوت چرم ساق‌کوتاه",
        en: "Slouchy Ivory Mongolian Cashmere Knit + Bias-Cut Olive Satin Skirt + Square-Toe Leather Ankle Boots",
        fr: "Pull Cachemire Ample Écru + Jupe Midi Satin Biais Olive + Bottines en Cuir Bout Carré",
        it: "Maglione in Cashmere Avorio + Gonna Midi in Raso Oliva + Stivaletti in Pelle a Punta Squadrata",
        ar: "كنزة كشمير عاجية واسعة + تنورة ساتان زيتي منسدلة + بوت كاحل جلدي أنيق",
      },
      items: [
        {
          icon: "🧶",
          name: {
            fa: "پلیور کشباف کشمیری عاجی رنگ",
            en: "Chunky Ivory Mongolian Cashmere Knit",
            fr: "Grosse Maille en Cachemire Écru",
            it: "Maglione in Cashmere Mongolo Panna",
            ar: "كنزة محبوكة من صوف الكشمير العاجي الفاخر",
          },
        },
        {
          icon: "👗",
          name: {
            fa: "دامن میدی ساتن براق ملایم",
            en: "Fluid Olive-Drab Satin Midi Skirt",
            fr: "Jupe Midi Fluide en Satin Olive",
            it: "Gonna Midi Fluida in Raso Verde Oliva",
            ar: "تنورة ميدي من الساتان الزيتوني الحريري",
          },
        },
        {
          icon: "👢",
          name: {
            fa: "بوت چرم چسبان پنجه مربعی",
            en: "Supple Square-Toe Leather Ankle Boots",
            fr: "Bottines en Cuir Souple Bout Carré",
            it: "Stivaletti in Morbida Pelle a Punta Squadrata",
            ar: "بوت كاحل جلدي فاخر بمقدمة مربعة عصرية",
          },
        },
        {
          icon: "✨",
          name: {
            fa: "گردنبند تک‌نگین طلای ظریف",
            en: "Minimalist 18k Gold Solitaire Pendant",
            fr: "Pendentif Solitaire en Or 18k Épuré",
            it: "Ciondolo Solitario in Oro 18k Minimalista",
            ar: "قلادة ذهب عيار ١٨ بتصميم بسيط وراقٍ",
          },
        },
      ],
      vibeTag: {
        fa: "تلفیق بافت زبر و درخشش نرم ابریشم",
        en: "Textural Contrast, Effortless Grace & Modern Poise",
        fr: "Contraste des Matières, Grâce & Fluidité",
        it: "Contrasto Tattile, Grazia Spontanea & Stile",
        ar: "تباين أنيق بين دفء الصوف وبريق الحرير الانسيابي",
      },
      curatorNote: {
        fa: "پلیور را به صورت نیمه‌فرورفته (French Tuck) جلو دامن قرار دهید تا فرم کمر حفظ شود.",
        en: "Employ a subtle French tuck at the front waistband to visually elongate leg proportions while embracing relaxed cashmere drape.",
        fr: "Glissez légèrement le devant du pull dans la ceinture (French tuck) pour souligner la silhouette.",
        it: "Applica un leggero French tuck davanti per definire il punto vita con nonchalance.",
        ar: "أدخلي مقدمة الكنزة بخفة داخل حزام التنورة (French Tuck) لإبراز تناسق القوام والرشاقة.",
      },
    },
    {
      dayName: {
        fa: "دوشنبه",
        en: "Monday",
        fr: "Lundi",
        it: "Lunedì",
        ar: "الإثنين",
      },
      dayShort: {
        fa: "دوشنبه",
        en: "Mon",
        fr: "Lun",
        it: "Lun",
        ar: "إثنين",
      },
      occasionType: {
        fa: "قرارهای ملاقات اداری و ناهار کاری خارج از شرکت",
        en: "Off-Site Client Consultations & Outdoor Bistro Luncheons",
        fr: "Rendez-vous Extérieurs & Déjeuners Bistro Chic",
        it: "Incontri di Lavoro Fuori Sede & Pranzi Informali",
        ar: "المواعيد الخارجية ولقاءات الغداء في الأجواء المفتوحة",
      },
      outfitTitle: {
        fa: "ترنچ‌کت کلاسیک و جین راسته اتوکشیده (Classic Parisian Chic)",
        en: "Heritage Sand Gabardine Trench & Breton Stripe",
        fr: "Trench-Coat Héritage Sable & Rayures Marinière",
        it: "Trench Classico color Sabbia & Marinière Parigina",
        ar: "معطف الترنش الكلاسيكي مع تيشيرت الخطوط البحرية",
      },
      formula: {
        fa: "ترنچ‌کت دو ردیف دکمه عسلی + بافت راه‌راه برتون + جین راسته شسته نشده + لوفر چرم",
        en: "Double-Breasted Sand Trench + Organic Cotton Breton Long-Sleeve + Clean Dark Straight Denim + Gold-Bit Loafers",
        fr: "Trench-Coat Croisé Sable + Marinière Coton Bio + Jean Droit Brut Épuré + Mocassins Mors Doré",
        it: "Trench Doppiopetto Sabbia + Maglia a Righe Marinière + Jeans Dritti Scuri + Mocassins con Morsetto",
        ar: "معطف ترنش رملي مزدوج الأزرار + كنزة بحرية مخططة + جينز كحلي مستقيم + لوفر بحلية ذهبية",
      },
      items: [
        {
          icon: "🧥",
          name: {
            fa: "ترنچ‌کت کلاسیک گاباردین ضدآب",
            en: "Double-Breasted Water-Resistant Gabardine Trench",
            fr: "Trench-Coat Croisé en Gabardine Imperméable",
            it: "Trench Doppiopetto in Gabardine Idrorepellente",
            ar: "معطف ترنش كلاسيكي من قماش الغاباردين المقاوم للماء",
          },
        },
        {
          icon: "👚",
          name: {
            fa: "بافت آستین بلند راه‌راه ملوانی کرم-مشکی",
            en: "Heavyweight Breton Stripe Nautical Top",
            fr: "Marinière Épaisse Coton Écru & Noir",
            it: "Maglia a Righe Nautiche in Cotone Spesso",
            ar: "قميص مخطط بأكمام طويلة على الطراز البحري",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار جین سرمه‌ای تیره راسته",
            en: "Uniform Dark Indigo Straight-Leg Jeans",
            fr: "Jean Droit Indigo Foncé Sans Délavage",
            it: "Jeans a Gamba Diritta Indigo Intenso",
            ar: "بنطال جينز كحلي مستقيم بقصة راقية",
          },
        },
        {
          icon: "👞",
          name: {
            fa: "لوفر چرم مشکی با سگک طلایی مات",
            en: "Black Calfskin Loafers with Brushed Gold Bit",
            fr: "Mocassins Cuir Noir à Mors Doré Brossé",
            it: "Mocassini in Vitello Nero con Morsetto Dorato",
            ar: "لوفر جلد أسود بحلية ذهبية كلاسيكية مطفية",
          },
        },
      ],
      vibeTag: {
        fa: "زیبایی بی‌زمان و بدون تاریخ انقضا",
        en: "Enduring Parisian Chic, Timeless Balance & Agility",
        fr: "Chic Parisien Intemporel & Élégance du Quotidien",
        it: "Eleganza Parigina Senza Tempo & Praticità",
        ar: "أناقة باريسية خالدة تتجاوز صيحات الموضة العابرة",
      },
      curatorNote: {
        fa: "کمربند ترنچ‌کت را پشت سر گره بزنید یا دور کمر بدون بستن سگک محکم کنید.",
        en: "Tie the trench belt loosely in a casual knot behind your back or cinch without buckling for unstudied Parisian nonchalance.",
        fr: "Nouez la ceinture du trench dans le dos ou ceinturez simplement sans boucler pour une allure naturelle.",
        it: "Annoda la cintura del trench sul retro per un effetto rilassato ed estremamente chic.",
        ar: "اعقدي حزام الترنش برقة من الخلف دون إغلاق الإبزيم لمظهر باريسي عفوي وآسر.",
      },
    },
    {
      dayName: {
        fa: "سه‌شنبه",
        en: "Tuesday",
        fr: "Mardi",
        it: "Martedì",
        ar: "الثلاثاء",
      },
      dayShort: {
        fa: "سه‌شنبه",
        en: "Tue",
        fr: "Mar",
        it: "Mar",
        ar: "ثلاثاء",
      },
      occasionType: {
        fa: "رویدادهای طراحی، نمایشگاه‌ها و ورکشاپ‌های تخصصی",
        en: "Architecture Biennales, Curated Galleries & Atelier Workshops",
        fr: "Vernissages de Design, Galeries d'Art & Ateliers",
        it: "Mostre di Design, Gallerie d'Arte & Workshop Creativi",
        ar: "معارض التصميم، الفعاليات المعمارية والورش الإبداعية",
      },
      outfitTitle: {
        fa: "مونوکروم خاکستری روشن و کت بدون آستر (Minimalist Sculptor)",
        en: "Minimalist Architectural Pearl Grey Monolith",
        fr: "Monochrome Gris Perle Minimaliste & Lignes Pures",
        it: "Monocromo Grigio Perla Minimalista & Struttura Pura",
        ar: "مونوكروم رمادي لؤلؤي بتصميم هندسي معاصر",
      },
      formula: {
        fa: "ژاکت فیت بافتنی طوسی + شلوار پارچه‌ای پیله‌دار + کفش تخت باله چرمی + گوشواره مروارید",
        en: "Fine Pearl Grey Cardigan with Mother-of-Pearl Buttons + Pleated Slate Trousers + Soft Leather Ballerinas + Baroque Pearl Studs",
        fr: "Gilet Gris Perle Boutons Nacre + Pantalon à Pinces Ardoise + Ballerines Cuir Souple + Perles Baroques",
        it: "Cardigan Grigio Perla con Bottoni in Madreperla + Pantaloni con Pinces + Ballerine in Morbida Pelle + Perle Barocche",
        ar: "كارديجان رمادي لؤلؤي بأزرار صدفية + بنطال قماش بطيات أمامية + حذاء باليرينا جلدي + أقراط لؤلؤ طبيعي",
      },
      items: [
        {
          icon: "🧥",
          name: {
            fa: "کاردیگان بافت با دکمه‌های صدفی",
            en: "Pearl Grey Knit with Natural Shell Buttons",
            fr: "Cardigan Gris Perle aux Boutons de Nacre",
            it: "Cardigan Grigio Perla con Bottoni in Conchiglia",
            ar: "كارديجان صوفي رمادي لؤلؤي بأزرار صدف طبيعي",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار پیله‌دار راسته طوسی مرواریدی",
            en: "Tailored Pleated Pearl Grey Trousers",
            fr: "Pantalon à Pinces Droit Gris Perle",
            it: "Pantaloni Sartoriali con Pinces Grigio Perla",
            ar: "بنطال بقصة مستقيمة وطيات أنيقة بلون رمادي لؤلؤي",
          },
        },
        {
          icon: "🥿",
          name: {
            fa: "کفش فلت بالرین چرم دست‌دوز",
            en: "Glove-Soft Handcrafted Leather Ballerinas",
            fr: "Ballerines Artisanales en Cuir Nappa Souple",
            it: "Ballerine Artigianali in Morbida Pelle Nappa",
            ar: "حذاء باليرينا من الجلد الطبيعي الناعم المصنوع يدوياً",
          },
        },
        {
          icon: "💍",
          name: {
            fa: "گوشواره میخی مروارید طبیعی باروک",
            en: "Organic Baroque Natural Pearl Studs",
            fr: "Puces d'Oreilles en Perles Baroques Naturelles",
            it: "Orecchini a Lobo con Perle Barocche Naturali",
            ar: "أقراط أذن من اللؤلؤ الطبيعي العضوي الباروكي",
          },
        },
      ],
      vibeTag: {
        fa: "آراستگی مدرن، آرامش بصری و خلاقیت",
        en: "Architectural Serenity, Sculptural Grace & Intellectual Wit",
        fr: "Sérénité Architecturale, Clarté & Sobriété",
        it: "Armonia Architettonica & Compostezza Intellettuale",
        ar: "سكينة معمارية، وقار فكري وأناقة بصرية مريحة",
      },
      curatorNote: {
        fa: "تنالیته‌های مختلف یک خانواده رنگی مانند طوسی و نقره‌ای بدون هیچ زحمتی لوکس به نظر می‌رسند.",
        en: "Layering subtle tonal gradations within the pearl-to-slate grey family projects supreme design fluency.",
        fr: "Décliner les nuances de gris perle et d'argent crée une impression de luxe serein et très contemporain.",
        it: "Le gradazioni di grigio chiaro e argento esprimono una raffinatezza contemporanea e senza sforzo.",
        ar: "تدرجات الرمادي الفضي واللؤلؤي تمنح مظهراً فائق الرقي والهدوء يعكس الذوق الرفيع.",
      },
    },
    {
      dayName: {
        fa: "چهارشنبه",
        en: "Wednesday",
        fr: "Mercredi",
        it: "Mercoledì",
        ar: "الأربعاء",
      },
      dayShort: {
        fa: "چهارشنبه",
        en: "Wed",
        fr: "Mer",
        it: "Mer",
        ar: "أربعاء",
      },
      occasionType: {
        fa: "جلسات عصرگاهی و دیدارهای دوستانه در کافه‌های خاص",
        en: "High-Tea Salon Discussions & Twilight Atelier Gatherings",
        fr: "Salons de Thé Confidentiels & Échanges Littéraires",
        it: "Aperitivi d'Autore & Incontri Pomeridiani Raffinati",
        ar: "جلسات الشاي الراقية واللقاءات الثقافية والاجتماعية",
      },
      outfitTitle: {
        fa: "کت شنل‌وار و شومیز نود (Haute Couture Leisure)",
        en: "Cream Textured Bouclé Lady Jacket & Nude Satin",
        fr: "Veste Bouclée Façon Haute Couture & Satin Nude",
        it: "Giacca Bouclé Ispirazione Couture & Seta Nude",
        ar: "سترة بوكليه كلاسيكية مع بلوزة ساتان هادئة",
      },
      formula: {
        fa: "کت تک بافت تویید بدون یقه + شومیز کرم نود + شلوار کتان راسته + کیف دوشی چرمی",
        en: "Collarless Cream Bouclé Lady Jacket + Matte Silk Camisole + Ecru Tailored Chinos + Matte Chain Shoulder Bag",
        fr: "Veste Sans Col en Bouclé Crème & Or + Caraco en Soie Nude + Pantalon Écru Droit + Sac Bandoulière Cuir",
        it: "Giacca Senza Collo in Bouclé Panna + Top in Seta Nude + Pantaloni Écru + Borsa a Tracolla in Cuoio",
        ar: "سترة بوكليه عاجية بدون ياقة + بلوزة حرير نود + بنطال كتان مستقيم + حقيبة كتف جلدية بسلسلة",
      },
      items: [
        {
          icon: "🧥",
          name: {
            fa: "کت بافت بوکله/تویید کرم و طلایی",
            en: "Ivory & Gold Textured Bouclé Lady Jacket",
            fr: "Veste en Bouclé Crème & Fils Dorés Délicats",
            it: "Giacca in Bouclé Avorio con Dettagli Dorati",
            ar: "سترة بوكليه عاجية بخيوط ذهبية خافتة ورقيقة",
          },
        },
        {
          icon: "👚",
          name: {
            fa: "شومیز ساتن نود مات",
            en: "Matte Mulberry Silk Camisole in Nude",
            fr: "Caraco en Soie Végétale Nude Mat",
            it: "Top in Seta di Gelso Nude Opaca",
            ar: "بلوزة حريرية بلون النود المطفي الأنيق",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار کتان بژ شیری راسته",
            en: "Tailored Ecru Cotton-Linen Trousers",
            fr: "Pantalon en Coton-Lin Écru Ajusté",
            it: "Pantaloni Sartoriali in Cotone-Lino Écru",
            ar: "بنطال كتان وقطن عاجي مستقيم",
          },
        },
        {
          icon: "👜",
          name: {
            fa: "کیف چرم کراس‌بادی زنجیردار مات",
            en: "Matte Box-Leather Crossbody with Brushed Chain",
            fr: "Sac Bandoulière Cuir Box & Chaîne Brossée",
            it: "Borsa a Tracolla in Pelle Spazzolata con Catena Opaca",
            ar: "حقيبة جلدية بحزام كروس وسلسلة مطفية راقية",
          },
        },
      ],
      vibeTag: {
        fa: "اصالت الهام‌گرفته از خانه مد شنل",
        en: "Haute Sartorial Legacy, Parisian Poise & Aristocratic Ease",
        fr: "Héritage Haute Couture, Noblesse des Matières & Élégance",
        it: "Eredità Alta Sartoria, Nobiltà & Fascino Discreto",
        ar: "أصالة مستوحاة من أعرق دور الأزياء الباريسية الراقية",
      },
      curatorNote: {
        fa: "کت تویید به هر استایل ساده‌ای هویت اشرافی و گران‌قیمت می‌بخشد.",
        en: "The intricate tactile weave of a bouclé jacket elevates even the simplest monochrome separates to couture status.",
        fr: "Le tissage riche d'une veste bouclée confère instantanément une allure aristocratique aux basiques les plus épurés.",
        it: "La texture ricercata del tessuto bouclé nobilita all'istante anche i capi più semplici.",
        ar: "النسيج المتقن لسترة البوكليه يضفي طابعاً ملكياً راقياً على أبسط الإطلالات اليومية.",
      },
    },
    {
      dayName: {
        fa: "پنج‌شنبه",
        en: "Thursday",
        fr: "Jeudi",
        it: "Giovedì",
        ar: "الخميس",
      },
      dayShort: {
        fa: "پنج‌شنبه",
        en: "Thu",
        fr: "Jeu",
        it: "Gio",
        ar: "خميس",
      },
      occasionType: {
        fa: "شام تشریفاتی در رستوران لوکس و کنسرت موسیقی",
        en: "Philharmonic Gala, Grand Opera & Black-Tie Dining",
        fr: "Soirée Philharmonique, Opéra & Dîner de Prestige",
        it: "Serata di Gala all'Opera & Cena a Lume di Candela",
        ar: "حفلات الأوبرا، العشاء الرسمي والسهرات الكلاسيكية الراقية",
      },
      outfitTitle: {
        fa: "پیراهن میدی مشکی کلاسیک (The Timeless LBD)",
        en: "The Timeless Black Crêpe Column Dress & Drape",
        fr: "L'Éternelle Robe Noire en Crêpe & Épaules Libres",
        it: "L'Intramontabile Abito Nero in Crepe & Drappeggio",
        ar: "الفستان الأسود الكلاسيكي الخالد من قماش الكريب",
      },
      formula: {
        fa: "پیراهن مشکی میدی با برش ساده + کت بلیزر مشکی روی شانه + کفش پاشنه‌دار تسمه‌ای",
        en: "Architectural Black Crêpe Midi Column + Draped Tuxedo Jacket + Minimalist Strappy Stiletto Sandals",
        fr: "Robe Midi Droite en Crêpe Noir + Veste Smoking Jetée sur les Épaules + Sandales Minimalistes à Talons",
        it: "Abito Midi Diritto in Crepe Nero + Giacca Smoking Appoggiata sulle Spalle + Sandali con Cinturino",
        ar: "فستان كريب أسود ميدي مستقيم + سترة سموكينغ على الكتفين + صندل كعب أنيق برباط رفيع",
      },
      items: [
        {
          icon: "👗",
          name: {
            fa: "پیراهن میدی کرپ مشکی بدون طرح",
            en: "Minimalist Black Wool-Silk Crêpe Column Midi",
            fr: "Robe Fourreau Noire en Crêpe de Laine & Soie",
            it: "Abito Midi a Colonna in Crepe di Lana e Seta",
            ar: "فستان ميدي أسود كريب من مزيج الصوف والحرير",
          },
        },
        {
          icon: "🧥",
          name: {
            fa: "کت تک بلیزر ساتن روی شانه",
            en: "Silk-Lapel Black Tuxedo Blazer (Shoulder Draped)",
            fr: "Veste Smoking Col Revers Satin (Posée sur les Épaules)",
            it: "Blazer Smoking con Revers in Raso (Portato sulle Spalle)",
            ar: "سترة سموكينغ سوداء بياقة ساتان على الكتفين",
          },
        },
        {
          icon: "👠",
          name: {
            fa: "کفش پاشنه‌دار استیلتو مشکی ورنی",
            en: "Polished Patent Black Barely-There Sandals",
            fr: "Sandales Épurées à Talons Aiguilles en Cuir Verni",
            it: "Sandali Stiletto Minimal in Vernice Nera",
            ar: "صندل كعب رفيع من الجلد الأسود اللامع",
          },
        },
        {
          icon: "💄",
          name: {
            fa: "رژ لب قرمز یاقوتی مات",
            en: "Classic Ruby Velvet Matte Lip Tint",
            fr: "Rouge à Lèvres Mat Velours Rubis Intemporel",
            it: "Rossetto Velluto Opaco Rosso Rubino",
            ar: "أحمر شفاه مخملي مطفي بلون الياقوت الكلاسيكي",
          },
        },
      ],
      vibeTag: {
        fa: "اوج شکوه زنانه، وقار و گیرایی شبانه",
        en: "Supreme Feminine Majesty, Restraint & Inescapable Radiance",
        fr: "Majesté Féminine, Distinction & Magnétisme Nocturne",
        it: "Maestosità Femminile, Rigore & Splendore Serale",
        ar: "ذروة الجاذبية والأنوثة الراقية والوقار الأخاذ",
      },
      curatorNote: {
        fa: "کت را نپوشید، بلکه فقط روی شانه‌هایتان بیندازید تا استایل شاهانه پیدا کند.",
        en: "Do not slip arms into the sleeves; drape the blazer casually over both shoulders for effortless regal poise.",
        fr: "Posez simplement la veste de smoking sur vos épaules pour créer une silhouette royale sans effort.",
        it: "Appoggia la giacca sulle spalle senza infilare le maniche per un portamento da vera icona di stile.",
        ar: "لا تدخلي ذراعيكِ في الأكمام، بل دعي السترة تستقر على كتفيكِ لتمنحكِ وقاراً ملكياً ساحراً.",
      },
    },
    {
      dayName: {
        fa: "جمعه",
        en: "Friday",
        fr: "Vendredi",
        it: "Venerdì",
        ar: "الجمعة",
      },
      dayShort: {
        fa: "جمعه",
        en: "Fri",
        fr: "Ven",
        it: "Ven",
        ar: "جمعة",
      },
      occasionType: {
        fa: "صبحانه آخر هفته در باغ، خرید شخصی و آرامش کامل",
        en: "Botanical Garden Brunch, Private Bookstores & Pure Serenity",
        fr: "Brunch Botanique, Librairies d'Art & Douceur de Vivre",
        it: "Brunch in Giardino, Antiquariato & Relax Assoluto",
        ar: "فطور حدائق نهاية الأسبوع، جولات حرة وراحة تامة",
      },
      outfitTitle: {
        fa: "استایل مونوکروم کتان و لینن طبیعی (Quiet Weekend Resort)",
        en: "Airy Oatmeal Linen Ensemble & Raw Textures",
        fr: "Harmonie Lin & Coton Végétal Écru Resort",
        it: "Completo in Lino color Avena & Capi Fluidi",
        ar: "طقم الكتان والقطن العضوي بلون الشوفان المريح",
      },
      formula: {
        fa: "شومیز آزاد لینن شیری + شلوار لینن گشاد کشی + اسلیپر چرمی + عینک گربه‌ای کلاسیک",
        en: "Relaxed-Fit Oatmeal Linen Shirt + Drawstring Wide-Leg Linen Trousers + Honey-Tan Leather Slides + Amber Acetate Shades",
        fr: "Chemisier Fluide en Lin Avoine + Pantalon Large en Lin à Cordon + Mules en Cuir Miel + Lunettes Ambrées",
        it: "Camicia Fluida in Lino Avena + Pantaloni Larghi in Lino con Coulisse + Ciabattine in Cuoio Miele + Occhiali Ambrati",
        ar: "قميص كتان فضفاض بلون الشوفان + بنطال كتان واسع مريح + حذاء سلايد جلدي عسلي + نظارات شمسية كهرمانية",
      },
      items: [
        {
          icon: "👚",
          name: {
            fa: "شومیز قواره‌آزاد لینن ارگانیک شیری",
            en: "100% Organic Oatmeal Linen Oversized Shirt",
            fr: "Chemisier Ample en Lin Biologique Avoine",
            it: "Camicia Morbida in 100% Lino Biologico Avena",
            ar: "قميص كتان عضوي مريح وفضفاض بلون الشوفان",
          },
        },
        {
          icon: "👖",
          name: {
            fa: "شلوار لینن کمرکش دار کرم جو دوسر",
            en: "Elastic-Waist Wide-Leg Linen Trousers",
            fr: "Pantalon Large en Lin à Taille Élastiquée",
            it: "Pantaloni a Gamba Larga in Lino con Elastico",
            ar: "بنطال كتان واسع بخصر مرن ومريح",
          },
        },
        {
          icon: "👡",
          name: {
            fa: "صندل چرم مینیمال قهوه‌ای عسلی",
            en: "Handcrafted Honey Calfskin Minimal Slides",
            fr: "Mules Minimalistes en Cuir de Veau Miel",
            it: "Ciabattine Artigianali in Cuoio Miele",
            ar: "صندل سلايد جلدي مسطح بلون العسل الطبيعي",
          },
        },
        {
          icon: "🕶️",
          name: {
            fa: "عینک آفتابی فریم کهربایی پهن",
            en: "Amber Cat-Eye Thick Acetate Sunglasses",
            fr: "Lunettes de Soleil Cat-Eye en Acétate Ambré",
            it: "Occhiali da Sole Cat-Eye in Acetato Ambrato",
            ar: "نظارات شمسية عريضة بإطار أسيتات كهرماني دافئ",
          },
        },
      ],
      vibeTag: {
        fa: "آرامش اعیانی، رهایی از اتوکشیدگی و لذت ناب",
        en: "Unpretentious Luxury, Tactile Simplicity & Pure Vitality",
        fr: "Luxe Sans Prétention, Douceur Vivante & Sérénité",
        it: "Lusso Spontaneo, Semplicità Tattile & Piacere Autentico",
        ar: "فخامة عفوية غير متكلفة، نقاء ملموس وسكينة منعشة",
      },
      curatorNote: {
        fa: "چروک‌های طبیعی پارچه لینن نشان‌دهنده اصالت الیاف طبیعی و زندگی بی‌دغدغه است.",
        en: "The organic, unhurried wrinkles of unbleached linen represent the utmost expression of refined leisure and authentic organic quality.",
        fr: "Le froissé naturel du lin noble est l'expression suprême d'une vie libérée de toute contrainte superficielle.",
        it: "Le pieghe naturali del lino testimoniano la purezza delle fibre e uno stile di vita autentico.",
        ar: "التجاعيد الطبيعية لكتان الشوفان النقي تعبر عن أسمى معاني الحياة الهادئة والفخامة الحقيقية.",
      },
    },
  ],
};

const LOCALIZED_PLANNER: Record<
  LanguageCode,
  {
    badge: string;
    subBadge: string;
    title: string;
    subtitle: string;
    progressTitle: string;
    progressSuffix: string;
    formulaLabel: string;
    itemsLabel: string;
    curatorLabel: string;
    copyBtn: string;
    copiedBtn: string;
    markDone: string;
    markedDone: string;
  }
> = {
  fa: {
    badge: "7-Day Smart Capsule Rotation",
    subBadge: "برنامه‌ریزی هوشمند چرخش ۷ روزه کمد",
    title: "برنامه‌ریز هفتگی استایل اشرافی",
    subtitle: "چگونه با ترکیب هوشمندانه تنها ۷ الی ۱۰ تکه کپسولی، کل ۷ روز هفته را با وقار و بدون تکرار سپری کنید.",
    progressTitle: "پیشرفت هفتگی استایل",
    progressSuffix: "از ۷ روز برنامه‌ریزی شده",
    formulaLabel: "فرمول هماهنگی و لایه‌بندی:",
    itemsLabel: "قطعات مورد نیاز از کمد کپسولی:",
    curatorLabel: "یادداشت خیاط و استایلیست:",
    copyBtn: "کپی ست این روز",
    copiedBtn: "کپی شد",
    markDone: "علامت به عنوان پوشیده شده",
    markedDone: "پوشیده شد",
  },
  en: {
    badge: "7-Day Smart Capsule Rotation",
    subBadge: "Smart Capsule Rotation Planner",
    title: "7-Day Haute Capsule Wardrobe Planner",
    subtitle: "How to intelligently rotate just 7-10 core capsule pieces across all 7 days of the week with effortless distinction.",
    progressTitle: "Weekly Sartorial Progress",
    progressSuffix: "of 7 days planned",
    formulaLabel: "Layering & Harmonization Formula:",
    itemsLabel: "Required Pieces from Capsule Closet:",
    curatorLabel: "Stylist & Sartorial Note:",
    copyBtn: "Copy Day Formula",
    copiedBtn: "Copied",
    markDone: "Mark as Worn",
    markedDone: "Completed",
  },
  fr: {
    badge: "Rotation Capsule 7 Jours",
    subBadge: "Planificateur de Garde-Robe Hebdomadaire",
    title: "Planificateur de Rotation de Garde-Robe sur 7 Jours",
    subtitle: "Comment combiner intelligemment 7 à 10 pièces intemporelles pour chaque jour de la semaine.",
    progressTitle: "Progression Hebdomadaire",
    progressSuffix: "sur 7 jours planifiés",
    formulaLabel: "Formule & Superposition :",
    itemsLabel: "Pièces Nécessaires du Dressing :",
    curatorLabel: "Note Sartoriale du Styliste :",
    copyBtn: "Copier la Tenue du Jour",
    copiedBtn: "Copié",
    markDone: "Marquer comme Porté",
    markedDone: "Validé",
  },
  it: {
    badge: "Rotazione Guardaroba 7 Giorni",
    subBadge: "Pianificatore Settimanale Intelligente",
    title: "Pianificatore di Rotazione Guardaroba di 7 Giorni",
    subtitle: "Come ruotare sapientemente 7-10 capi capsula per essere impeccabili per tutta la settimana.",
    progressTitle: "Progresso Settimanale",
    progressSuffix: "su 7 giorni pianificati",
    formulaLabel: "Formula di Stratificazione :",
    itemsLabel: "Capi Richiesti dal Guardaroba :",
    curatorLabel: "Consiglio Sartoriale :",
    copyBtn: "Copia Abbinamento",
    copiedBtn: "Copiato",
    markDone: "Segna Come Indossato",
    markedDone: "Indossato",
  },
  ar: {
    badge: "تدوير خزانة الكبسولة ٧ أيام",
    subBadge: "مخطط التدوير الذكي لخزانة الملابس",
    title: "مخطط تدوير خزانة الكبسولة لمدة ٧ أيام",
    subtitle: "كيفية تنسيق ٧ إلى ١٠ قطع أساسية على مدار الأسبوع بالكامل بأناقة متجددة ووقار لا يتكرر.",
    progressTitle: "تقدم الإطلالات الأسبوعية",
    progressSuffix: "من أصل ٧ أيام مكتملة",
    formulaLabel: "معادلة الطبقات والتناسق:",
    itemsLabel: "القطع المطلوبة من خزانة الكبسولة:",
    curatorLabel: "ملاحظة خبير المظهر والأناقة:",
    copyBtn: "نسخ تنسيق هذا اليوم",
    copiedBtn: "تم النسخ",
    markDone: "تحديد كإطلالة تم ارتداؤها",
    markedDone: "تم الارتداء",
  },
};

export const WeeklyWardrobePlanner: React.FC<{
  selectedGender: "men" | "women";
  lang?: LanguageCode;
  isVip?: boolean;
  onOpenVipModal?: () => void;
  onOpenPassportModal?: () => void;
}> = ({
  selectedGender,
  lang = "fa",
  isVip = false,
  onOpenVipModal,
  onOpenPassportModal,
}) => {
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [completedDays, setCompletedDays] = useState<number[]>([]);
  const [copied, setCopied] = useState(false);
  const [isRainyDay, setIsRainyDay] = useState(false);
  const [umbrellaChecked, setUmbrellaChecked] = useState(true);

  const safeLang = (lang && LOCALIZED_PLANNER[lang]) ? lang : "fa";
  const t = LOCALIZED_PLANNER[safeLang] || LOCALIZED_PLANNER.fa;
  const isRtl = safeLang === "fa" || safeLang === "ar";

  const currentList = WEEKLY_ROTATIONS[selectedGender];
  const currentPlan = currentList[selectedDayIndex] || currentList[0];

  const currentDayName = currentPlan.dayName[safeLang] || currentPlan.dayName.fa;
  const currentOccasion = currentPlan.occasionType[safeLang] || currentPlan.occasionType.fa;
  const currentTitle = currentPlan.outfitTitle[safeLang] || currentPlan.outfitTitle.fa;
  const currentFormula = currentPlan.formula[safeLang] || currentPlan.formula.fa;
  const currentVibe = currentPlan.vibeTag[safeLang] || currentPlan.vibeTag.fa;
  const currentCurator = currentPlan.curatorNote[safeLang] || currentPlan.curatorNote.fa;

  const toggleDayCompletion = (idx: number) => {
    setCompletedDays((prev) =>
      prev.includes(idx) ? prev.filter((d) => d !== idx) : [...prev, idx]
    );
  };

  const handleCopyOutfit = () => {
    const itemsText = currentPlan.items
      .map((i) => `- ${i.icon} ${i.name[safeLang] || i.name.fa}`)
      .join("\n");
    const text = `${currentDayName}: ${currentTitle}\n${t.formulaLabel} ${currentFormula}\n${t.itemsLabel}\n${itemsText}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="weekly-capsule-planner"
      className="bg-[#171513] border border-[#383127] rounded-3xl p-6 sm:p-8 shadow-xl"
      dir={isRtl ? "rtl" : "ltr"}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#2C261F] pb-6 mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-[#25201A] text-[#E6CA9E] border border-[#C5A880]/30 rounded-full text-xs font-semibold flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-[#C5A880]" />
              {t.badge}
            </span>
            <span className="text-xs text-stone-400">{t.subBadge}</span>
          </div>
          <h3 className="text-2xl font-bold text-[#F3EFEA] font-serif-luxury">
            {t.title}
          </h3>
          <p className="text-sm text-stone-300 mt-1">{t.subtitle}</p>
        </div>

        {/* Weekly Progress & VIP 30-Day Trigger */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={onOpenPassportModal || onOpenVipModal}
            className="bg-gradient-to-r from-[#2B2319] to-[#1C1610] hover:from-[#3A2F22] hover:to-[#282016] text-[#E6CA9E] border border-[#C5A880]/60 px-4 py-2.5 rounded-2xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 shadow-sm"
          >
            <span className="text-[#D4AF37] font-serif">👑</span>
            <span>{safeLang === "fa" ? "تقویم ۳۰ روزه فصلی (VIP)" : "30-Day Master Matrix (VIP)"}</span>
          </button>

          <div className="bg-[#100F0E] p-2.5 rounded-2xl border border-[#2D2720] flex items-center gap-3">
            <div className={isRtl ? "text-right" : "text-left"}>
              <div className="text-[10px] text-stone-400">{t.progressTitle}</div>
              <div className="text-xs font-bold text-[#E6CA9E]">
                {completedDays.length} {t.progressSuffix}
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#C5A880] flex items-center justify-center text-[10px] font-bold text-[#C5A880] bg-[#221D17]">
              {Math.round((completedDays.length / 7) * 100)}%
            </div>
          </div>
        </div>
      </div>

      {/* Days Tabs (Saturday to Friday) */}
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2 mb-6">
        {currentList.map((day, idx) => {
          const isSelected = selectedDayIndex === idx;
          const isDone = completedDays.includes(idx);
          const shortName = day.dayShort[safeLang] || day.dayShort.fa;
          const fullName = day.dayName[safeLang] || day.dayName.fa;
          return (
            <button
              key={idx}
              onClick={() => setSelectedDayIndex(idx)}
              className={`flex flex-col items-center py-3 px-1 sm:px-2 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? "bg-[#2A231A] border-[#C5A880] text-[#F3EFEA] shadow-md scale-[1.02]"
                  : isDone
                  ? "bg-[#141F17] border-emerald-800/40 text-emerald-300"
                  : "bg-[#100F0E] border-[#29241E] text-stone-400 hover:border-stone-600 hover:text-stone-200"
              }`}
            >
              <span className="text-xs sm:text-sm font-bold">{shortName}</span>
              <span className="text-[10px] text-stone-400 truncate max-w-full font-sans mt-0.5">
                {fullName}
              </span>
              {isDone && <CheckCircle2 className="w-3 h-3 text-emerald-400 mt-1" />}
            </button>
          );
        })}
      </div>

      {/* Active Day Detail Card */}
      <div className="bg-[#12100E] border border-[#2C261F] rounded-2xl p-5 sm:p-7 relative overflow-hidden">
        {/* Decorative Watermark */}
        <div className="absolute left-4 -bottom-4 text-7xl font-cinzel font-black text-stone-800/20 select-none pointer-events-none uppercase">
          {currentPlan.dayName.en}
        </div>

        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-[#241F19] pb-4 mb-5">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-md bg-[#25201A] text-[#C5A880] text-xs font-semibold">
                {currentDayName}
              </span>
              <span className="text-xs text-stone-400 flex items-center gap-1">
                <Clock className="w-3 h-3 text-stone-500" />
                {currentOccasion}
              </span>
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-[#F3EFEA] font-serif-luxury">
              {currentTitle}
            </h4>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyOutfit}
              className="px-3.5 py-2 rounded-xl bg-[#1E1A16] hover:bg-[#2A241E] border border-[#3A3228] text-xs font-medium text-stone-300 hover:text-white flex items-center gap-1.5 transition-all cursor-pointer"
            >
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3.5 h-3.5 text-[#C5A880]" />
              )}
              <span>{copied ? t.copiedBtn : t.copyBtn}</span>
            </button>

            <button
              onClick={() => toggleDayCompletion(selectedDayIndex)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                completedDays.includes(selectedDayIndex)
                  ? "bg-emerald-900/60 text-emerald-300 border border-emerald-700/50"
                  : "bg-[#25201A] hover:bg-[#322A21] text-[#E6CA9E] border border-[#C5A880]/40"
              }`}
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>
                {completedDays.includes(selectedDayIndex)
                  ? t.markedDone
                  : t.markDone}
              </span>
            </button>
          </div>
        </div>

        {/* Formula & Breakdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#181512] p-4 rounded-xl border border-[#2D2720]">
              <div className="text-xs font-bold text-[#C5A880] mb-1.5 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.formulaLabel}</span>
              </div>
              <p className="text-sm text-stone-200 leading-relaxed font-medium">
                {currentFormula}
              </p>
            </div>

            {/* Individual Items List */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-stone-400 block">
                  {t.itemsLabel}
                </span>

                {/* Rainy Weather Mode Toggle (Directly requested by Maryam Nezhad) */}
                <button
                  onClick={() => setIsRainyDay(!isRainyDay)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                    isRainyDay
                      ? "bg-sky-950/80 border-sky-500/50 text-sky-200 shadow-sm"
                      : "bg-[#181512] border-[#383025] text-stone-400 hover:text-stone-200"
                  }`}
                >
                  <span>🌧️ {lang === "fa" ? "حالت روز بارانی" : "Rainy Day Mode"}</span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-black/40 font-mono">
                    {isRainyDay ? (lang === "fa" ? "فعال" : "ON") : (lang === "fa" ? "خاموش" : "OFF")}
                  </span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {currentPlan.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-[#181512] border border-[#27221C] text-xs text-stone-200"
                  >
                    <span className="text-base">{item.icon}</span>
                    <span className="font-medium">
                      {item.name[safeLang] || item.name.fa}
                    </span>
                  </div>
                ))}

                {/* Handcrafted Wooden Umbrella - Added as per Maryam Nezhad's suggestion */}
                {isRainyDay && (
                  <div className="col-span-1 sm:col-span-2 flex items-center justify-between p-3.5 rounded-xl bg-[#132029] border border-sky-600/40 text-xs text-sky-100 shadow-md">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">☂️</span>
                      <div>
                        <strong className="block text-sky-200 font-bold">
                          {lang === "fa" ? "چتر کلاسیک دسته چوبی دست‌ساز (Fox Umbrellas Style)" : "Handcrafted Solid Wood Handle Umbrella"}
                        </strong>
                        <span className="text-[11px] text-sky-300/80">
                          {lang === "fa" 
                            ? "دسته چوب بلوط یا شاه‌بلوط با پارچه ضدآب نانو سرمه‌ای متناسب با استایل امروز" 
                            : "Solid chestnut handle with water-repellent navy canopy complementing today's capsule"}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setUmbrellaChecked(!umbrellaChecked)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1 ${
                        umbrellaChecked
                          ? "bg-sky-500 text-sky-950"
                          : "bg-sky-950 text-sky-300 border border-sky-800"
                      }`}
                    >
                      {umbrellaChecked ? "✓ همراه است" : "+ افزودن"}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stylist & Niche Fragrance Matrix Note (Praised by Maryam Nezhad) */}
          <div className="bg-[#181512] p-5 rounded-xl border border-[#2D2720] flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#E6CA9E] mb-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#C5A880]" />
                  <span>{currentVibe}</span>
                </div>
                <p className="text-xs text-stone-300 leading-relaxed">
                  "{currentCurator}"
                </p>
              </div>

              {/* Daily Niche Scent Pairing Box */}
              <div className="p-3 rounded-xl bg-[#201B15] border border-[#3D3222] space-y-1">
                <div className="flex items-center justify-between text-[11px] text-[#E6CA9E] font-bold">
                  <span>⚜ {lang === "fa" ? "عطر و امضای بویایی پیشنهادی:" : "Curated Niche Fragrance:"}</span>
                  <span className="text-[10px] text-amber-400 font-cinzel">QUIET LUXURY SCENT</span>
                </div>
                <p className="text-[11px] text-stone-300 leading-relaxed">
                  {selectedDayIndex === 0 && (lang === "fa" ? "تام فورد عود وود یا کرید گرین آیریش — رایحه چوبی، وتیور و هل شاهانه" : "Tom Ford Oud Wood & Royal Vetiver")}
                  {selectedDayIndex === 1 && (lang === "fa" ? "زرژوف الکساندریا ۲ یا ممو آیریش لدر — امضای چرمی اشرافی و رزین" : "Xerjoff Alexandria II & Noble Amber")}
                  {selectedDayIndex === 2 && (lang === "fa" ? "دیور پیورهوم او اینتنس یا لو لابو سانتال ۳۳ — چوب صندل و زنبق پودری" : "Le Labo Santal 33 & Tuscan Iris")}
                  {selectedDayIndex === 3 && (lang === "fa" ? "بایردو جیپسی واتر یا آمواژ رفلکشن من — ترنج کالابریایی و بهارنارنج" : "Byredo Gypsy Water & Italian Citrus")}
                  {selectedDayIndex === 4 && (lang === "fa" ? "فردریک مال پرتره آو ا لیدی — بخور مقدس، نعناع هندی و پچولی ناب" : "Frederic Malle Portrait of a Lady")}
                  {selectedDayIndex === 5 && (lang === "fa" ? "پارفومز د مارلی هرود یا تاور دزرت — تنباکوی وانیلی و چوب سدر" : "Parfums de Marly Herod & Tobacco Cedar")}
                  {selectedDayIndex === 6 && (lang === "fa" ? "کرید اونتوس یا روژا الیزیوم — سیب سبز، توس دودی و مشک سلطنتی" : "Roja Elysium & Smoked Birch Musk")}
                </p>
              </div>
            </div>
            
            <div className="text-[11px] text-[#C5A880] border-t border-[#29231C] pt-3 font-mono">
              {t.curatorLabel}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
