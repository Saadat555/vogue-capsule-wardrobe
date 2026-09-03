import { CapsuleOutfit, StyleVibe } from "../types";

export const STYLE_VIBES: StyleVibe[] = [
  {
    id: "oldmoney",
    name: "Old Money & Quiet Luxury",
    tagline: "Timeless European tailoring, cashmere, equestrian heritage, and noble neutrals.",
    icon: "👑",
    heroBadge: "The Heritage Standard"
  },
  {
    id: "parisian",
    name: "Parisian Chic & Saint-Germain",
    tagline: "Effortless French nonchalance, Breton stripes, tailored blazers, and sleek loafers.",
    icon: "🥐",
    heroBadge: "Editor's Cult Favorite"
  },
  {
    id: "cleangirl",
    name: "Clean Girl & Scandinavian Minimal",
    tagline: "Ultra-crisp organic cottons, relaxed monochrome drape, and slick minimalist leather.",
    icon: "🤍",
    heroBadge: "Global Pinterest Viral"
  },
  {
    id: "darkacademia",
    name: "Dark Academia & Ivy League",
    tagline: "Heavy tweed blazers, Oxford knitwear, pleated wool skirts, and antique brass details.",
    icon: "☕",
    heroBadge: "Autumn Classic"
  },
  {
    id: "resort",
    name: "Riviera & Coastal Grandmother",
    tagline: "Sun-bleached linen button-downs, crisp ecru sailor trousers, and woven raffia totes.",
    icon: "⛵",
    heroBadge: "Sun-Soaked Luxury"
  },
  {
    id: "streetwear",
    name: "Retro Minimal Streetwear",
    tagline: "Heavyweight boxy cottons, vintage raw denim, tailored trench coats, and archival sneakers.",
    icon: "🛹",
    heroBadge: "Contemporary High-Street"
  }
];

export const OUTFIT_DATABASE: Record<string, { warm: CapsuleOutfit; cold: CapsuleOutfit }> = {
  oldmoney: {
    warm: {
      id: "om-warm",
      vibeId: "oldmoney",
      vibeName: "Old Money & Quiet Luxury",
      season: "warm",
      title: "The Cap d'Antibes Summer Linen",
      subtitle: "Mediterranean Riviera Elegance with Monochromatic Textures",
      description: "A refined composition inspired by late-afternoon strolls along the French Riviera. Premium lightweight Belgian linen paired with tailored pleated shorts and butter-soft Italian driving loafers.",
      editorialQuote: "Real luxury whispers; it never screams for attention.",
      styleKeywords: ["Belgian Linen", "Pleated Tailoring", "Tortoiseshell", "Italian Loafers"],
      colorPalette: [
        { name: "Raw Ecru Linen", hex: "#F4F0EA", role: "Primary Base" },
        { name: "Tuscan Sand", hex: "#D8C7B5", role: "Tailoring" },
        { name: "Deep Espresso", hex: "#2E241E", role: "Leather Accent" },
        { name: "Brushed Antique Gold", hex: "#C5A880", role: "Hardware" }
      ],
      items: [
        {
          id: "om-w-1",
          category: "Top",
          name: "Relaxed Italian Linen Button-Down Shirt",
          material: "100% Normandy Flax Linen",
          colorName: "Crisp Ecru White",
          image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens 100 linen button down shirt white relaxed fit"
        },
        {
          id: "om-w-2",
          category: "Bottom",
          name: "High-Waisted Double-Pleated Tailored Shorts",
          material: "Cotton-Linen Blend with Silk Twill Lining",
          colorName: "Oatmeal Beige",
          image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "high waisted tailored pleated linen bermuda shorts beige"
        },
        {
          id: "om-w-3",
          category: "Shoes",
          name: "Handcrafted Suede Penny Driving Loafers",
          material: "Supple Calfskin Suede",
          colorName: "Cognac Brown",
          image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens suede leather penny loafers brown luxury"
        },
        {
          id: "om-w-4",
          category: "Accessory",
          name: "Vintage Tortoiseshell Sunglasses & Cable-Knit Drape",
          material: "Italian Acetate + Merino Wool",
          colorName: "Deep Havana / Cream",
          image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "vintage polarized tortoiseshell sunglasses classic luxury"
        }
      ],
      stylingTips: [
        "Roll the linen cuffs loosely twice up the forearm to give an unbothered, nonchalant summer silhouette.",
        "Drape a lightweight cream crewneck sweater loosely over your shoulders for the signature Hamptons aesthetic.",
        "Keep jewelry strictly minimalist: thin gold hoops and a vintage Roman numeral leather watch."
      ],
      signatureFragrance: {
        name: "Neroli Portofino & Bergamot",
        notes: "Italian Citrus, Tunisian Neroli, Crisp White Amber",
        vibe: "Fresh, sun-drenched, aristocratic sea breeze."
      },
      pinterestDescription: "Old money aesthetic summer outfit: Linen shirt, tailored beige shorts, suede loafers, vintage tortoiseshell sunglasses. The ultimate quiet luxury capsule wardrobe."
    },
    cold: {
      id: "om-cold",
      vibeId: "oldmoney",
      vibeName: "Old Money & Quiet Luxury",
      season: "cold",
      title: "The Swiss Chalet Cashmere & Wool Coat",
      subtitle: "Alpine Sophistication with Double-Faced Tailoring",
      description: "The epitome of timeless winter wardrobe architecture. An impeccably cut double-breasted camel wool trench layered over 3-ply Mongolian cashmere and tailored charcoal flannel trousers.",
      editorialQuote: "Quality is remembered long after the price is forgotten.",
      styleKeywords: ["Mongolian Cashmere", "Camel Wool", "Equestrian Leather", "Charcoal Flannel"],
      colorPalette: [
        { name: "Rich Camel Wool", hex: "#C19A6B", role: "Outerwear Dominant" },
        { name: "Butter Cream Cashmere", hex: "#FDFBF7", role: "Inner Layer" },
        { name: "Charcoal Slate", hex: "#3A3B3C", role: "Trousers" },
        { name: "Burnished Oxblood", hex: "#4A1521", role: "Leather Accent" }
      ],
      items: [
        {
          id: "om-c-1",
          category: "Outerwear",
          name: "Double-Faced Wool & Cashmere Belted Trench Coat",
          material: "90% Virgin Wool, 10% Cashmere",
          colorName: "Classic Camel",
          image: "https://images.unsplash.com/photo-1539533018447-63fcce667823?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens double breasted wool trench coat camel long"
        },
        {
          id: "om-c-2",
          category: "Top",
          name: "Fine-Gauge Cashmere Turtleneck Sweater",
          material: "100% Grade-A Mongolian Cashmere",
          colorName: "Warm Alabaster Cream",
          image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "100 percent pure cashmere turtleneck sweater cream women"
        },
        {
          id: "om-c-3",
          category: "Bottom",
          name: "High-Rise Wide-Leg Wool Flannel Trousers",
          material: "Super 120s Worsted Flannel",
          colorName: "Deep Melange Charcoal",
          image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "high waist wide leg wool pleated trousers charcoal women"
        },
        {
          id: "om-c-4",
          category: "Shoes",
          name: "Equestrian Calfskin Riding Boots with Brass Buckle",
          material: "Hand-Polished Full-Grain Leather",
          colorName: "Deep Mahagony / Dark Chocolate",
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "tall knee high leather riding boots women classic brown"
        }
      ],
      stylingTips: [
        "Leave the trench coat unbuttoned and tie the belt loosely behind the back for an elongated tailored drape.",
        "Tuck the high-rise trousers cleanly into structured knee-high riding boots.",
        "Add a 100% silk printed equestrian scarf tied neatly around the collar."
      ],
      signatureFragrance: {
        name: "Santal, Cardamom & Smoky Vanilla",
        notes: "Australian Sandalwood, Iris, Rich Leather, Amber",
        vibe: "Warm, enveloping, fireside aristocrat luxury."
      },
      pinterestDescription: "Winter old money capsule wardrobe: Camel wool trench coat, cream cashmere turtleneck, wide leg trousers, leather knee-high boots. Quiet luxury fashion inspiration."
    }
  },
  parisian: {
    warm: {
      id: "pa-warm",
      vibeId: "parisian",
      vibeName: "Parisian Chic & Saint-Germain",
      season: "warm",
      title: "The Rue Saint-Honoré Breton & Denim",
      subtitle: "The Timeless Left-Bank Café Archetype",
      description: "Quintessential French elegance that looks like it took 2 minutes to put together. Heavyweight combed Breton nautical stripes paired with vintage cropped denim and red leather ballet flats.",
      editorialQuote: "Fashion changes, but style endures. — Coco Chanel",
      styleKeywords: ["Breton Stripe", "Straight Raw Denim", "Ballet Flats", "Woven Basket"],
      colorPalette: [
        { name: "Nautical Navy", hex: "#1B2A4A", role: "Pattern Stripe" },
        { name: "Chalk White", hex: "#F8F8F6", role: "Cotton Base" },
        { name: "Vintage French Blue", hex: "#466995", role: "Denim" },
        { name: "Parisian Rouge", hex: "#9E2A2B", role: "Pop of Color" }
      ],
      items: [
        {
          id: "pa-w-1",
          category: "Top",
          name: "Heavyweight Boatneck Breton Striped Top",
          material: "100% Combed Organic Cotton",
          colorName: "Ivory & Navy Blue Stripe",
          image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens boatneck striped breton sailor shirt navy white"
        },
        {
          id: "pa-w-2",
          category: "Bottom",
          name: "High-Waist Cropped Straight-Leg Denim Jeans",
          material: "100% Rigid Organic Cotton Denim",
          colorName: "Classic Mid-Wash French Indigo",
          image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens 100 cotton straight leg cropped jeans high rise"
        },
        {
          id: "pa-w-3",
          category: "Shoes",
          name: "French Cap-Toe Leather Ballet Flats",
          material: "Supple Lambskin Leather",
          colorName: "Cherry Red or Beige/Black",
          image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens genuine leather cap toe ballet flats classic"
        },
        {
          id: "pa-w-4",
          category: "Accessory",
          name: "Woven Wicker Market Bag & Vintage Gold Coin Pendant",
          material: "Natural Palm Straw & 18k Gold Vermeil",
          colorName: "Natural Straw / Gold",
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "woven french market basket bag tote leather handles"
        }
      ],
      stylingTips: [
        "French tuck the front hem of the striped shirt into the high-waisted denim.",
        "Wear hair in an effortless low bun or tousled waves with zero heat styling.",
        "Swipe on a sheer velvet Parisian red lipstick (blotted lightly with fingers)."
      ],
      signatureFragrance: {
        name: "Damask Rose & Blackcurrant Leaf",
        notes: "Centifolia Rose, Cassis, Fresh Green Moss",
        vibe: "Fresh, romantic, early morning Seine flower market."
      },
      pinterestDescription: "Parisian chic style guide: Breton stripe top, straight high waist jeans, ballet flats, straw bag. French girl aesthetic capsule wardrobe."
    },
    cold: {
      id: "pa-cold",
      vibeId: "parisian",
      vibeName: "Parisian Chic & Saint-Germain",
      season: "cold",
      title: "The Marais Oversized Houndstooth Blazer",
      subtitle: "Boyfriend Tailoring with Feminine Subtlety",
      description: "The classic autumn Marais formula: a structured wool houndstooth blazer over a fine ribbed mockneck sweater, ankle-grazing trousers, and sleek Chelsea boots.",
      editorialQuote: "Simplicity is the keynote of all true elegance.",
      styleKeywords: ["Houndstooth Wool", "Ribbed Mockneck", "Structured Blazer", "Chelsea Boots"],
      colorPalette: [
        { name: "Houndstooth Check", hex: "#2C2C2C", role: "Outerwear Motif" },
        { name: "Oat Milk Beige", hex: "#EDE8E1", role: "Knitwear" },
        { name: "Black Caviar", hex: "#181818", role: "Base Foundation" },
        { name: "Burgundy Wine", hex: "#581825", role: "Lip & Bag Accent" }
      ],
      items: [
        {
          id: "pa-c-1",
          category: "Outerwear",
          name: "Oversized Double-Breasted Wool Houndstooth Blazer",
          material: "Heritage British Wool Tweed",
          colorName: "Black & Oatmeal Micro Check",
          image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens oversized houndstooth wool blazer jacket double breasted"
        },
        {
          id: "pa-c-2",
          category: "Top",
          name: "Fine Ribbed Merino Wool Mockneck Top",
          material: "100% Extra-Fine Merino Wool",
          colorName: "Midnight Noir",
          image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens merino wool mock neck slim fit black sweater"
        },
        {
          id: "pa-c-3",
          category: "Bottom",
          name: "Tailored Cigarette Cut Wool Blend Trousers",
          material: "Stretch Wool Twill",
          colorName: "Deep Pitch Black",
          image: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens ankle length slim tailored cigarette pants black"
        },
        {
          id: "pa-c-4",
          category: "Shoes",
          name: "Almond-Toe Italian Leather Chelsea Boots",
          material: "Smooth Boxcalf Leather with Elastic Gusset",
          colorName: "Glossy Black",
          image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens leather chelsea boots almond toe low heel black"
        }
      ],
      stylingTips: [
        "Push up the blazer sleeves slightly toward the elbow to show off a delicate gold link watch.",
        "Add a structured leather baguette bag tucked snugly under the arm.",
        "Keep the wool coat unfastened to maintain dynamic walking lines."
      ],
      signatureFragrance: {
        name: "Black Pepper, Tonka & Smoked Cedar",
        notes: "Crushed Peppercorn, Warm Cashmeran, Cedarwood",
        vibe: "Intellectual, cozy, candlelit Parisian bistro."
      },
      pinterestDescription: "Parisian winter capsule: Oversized wool blazer, black mockneck knit, slim trousers, leather Chelsea boots. Chic French aesthetic outfit idea."
    }
  },
  cleangirl: {
    warm: {
      id: "cg-warm",
      vibeId: "cleangirl",
      vibeName: "Clean Girl & Scandinavian Minimal",
      season: "warm",
      title: "The Copenhagen Organic Linen & Poplin",
      subtitle: "Uncomplicated Modernist Monochromatic Layers",
      description: "Crisp white oversized poplin cotton shirt worn open over a fitted organic ribbed tank, paired with high-waist fluid linen trousers and retro gum-sole trainers.",
      editorialQuote: "Less, but better. — Dieter Rams",
      styleKeywords: ["Crisp Poplin", "Fluid Linen", "Samba Vibe", "Pebbled Leather"],
      colorPalette: [
        { name: "Optic White", hex: "#FFFFFF", role: "Primary Bright" },
        { name: "Bleached Pebble", hex: "#E7E4DF", role: "Linen Trousers" },
        { name: "Matcha Mist", hex: "#C8D5C8", role: "Soft Pastel Accent" },
        { name: "Raw Gum Rubber", hex: "#C29B64", role: "Sneaker Sole" }
      ],
      items: [
        {
          id: "cg-w-1",
          category: "Top",
          name: "Oversized Crisp Cotton Poplin Boyfriend Shirt",
          material: "100% GOTS Certified Organic Cotton Poplin",
          colorName: "Pure Optic White",
          image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens crisp poplin oversized white button up boyfriend shirt"
        },
        {
          id: "cg-w-2",
          category: "Top",
          name: "Seamless Heavy Ribbed Scoop-Neck Tank",
          material: "95% Micro-Modal, 5% Elastane",
          colorName: "Pale Vanilla Cream",
          image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens ribbed scoop neck tank top thick straps white"
        },
        {
          id: "cg-w-3",
          category: "Bottom",
          name: "High-Waist Drapey Pleated Linen-Tencel Pants",
          material: "60% Linen, 40% Tencel Lyocell",
          colorName: "Stone Gray-Beige",
          image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens wide leg drapey linen blend trousers high waisted"
        },
        {
          id: "cg-w-4",
          category: "Shoes",
          name: "Low-Profile Retro Gum-Sole Suede Sneakers",
          material: "Suede Overlay on Smooth Leather",
          colorName: "White / Gray / Gum",
          image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "retro low top leather gum sole sneakers white grey"
        }
      ],
      stylingTips: [
        "Slick hair into a middle-part glossy claw-clip bun with hair oil.",
        "Leave the white poplin shirt completely unbuttoned like a light summer duster.",
        "Carry a structured canvas tote with an iced oat latte in hand."
      ],
      signatureFragrance: {
        name: "White Musk & Crisp Cotton Blossom",
        notes: "Clean Aldehydes, Ambroxan, Iris, Sheer Woods",
        vibe: "Freshly laundered luxury hotel linen, skin-scent minimalist."
      },
      pinterestDescription: "Clean girl aesthetic summer outfit: Oversized white button down, ribbed tank, beige wide leg pants, retro sneakers. Scandi minimalist capsule wardrobe."
    },
    cold: {
      id: "cg-cold",
      vibeId: "cleangirl",
      vibeName: "Clean Girl & Scandinavian Minimal",
      season: "cold",
      title: "The Stockholm Heavy Knit & Boxy Wool Coat",
      subtitle: "Sculptural Volume and Warm Scandinavian Neutrals",
      description: "Generously proportioned chunky fisherman rib knit layered under a boxy tailored wool cocoon coat, paired with thick straight-leg off-white ecru denim and shearling slip-ons.",
      editorialQuote: "Functionality infused with quiet calm.",
      styleKeywords: ["Chunky Rib Knit", "Cocoon Coat", "Ecru Denim", "Shearling Suede"],
      colorPalette: [
        { name: "Oatmeal Melange", hex: "#DFD9CE", role: "Chunky Knit" },
        { name: "Deep Heather Charcoal", hex: "#2B2D2F", role: "Cocoon Coat" },
        { name: "Raw Ecru", hex: "#F3EFEA", role: "Denim" },
        { name: "Warm Honey Suede", hex: "#A87A4F", role: "Footwear" }
      ],
      items: [
        {
          id: "cg-c-1",
          category: "Outerwear",
          name: "Boxy Cocoon Silhouette Heavy Wool Coat",
          material: "85% Recycled Wool, 15% Polyamide",
          colorName: "Heathered Granite Charcoal",
          image: "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens oversized wool cocoon coat relaxed fit charcoal"
        },
        {
          id: "cg-c-2",
          category: "Top",
          name: "Chunky Fisherman Ribbed Wool-Alpaca Sweater",
          material: "70% Merino Wool, 30% Royal Baby Alpaca",
          colorName: "Nordic Oatmeal",
          image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens chunky knit oversized ribbed wool sweater oatmeal"
        },
        {
          id: "cg-c-3",
          category: "Bottom",
          name: "Straight-Leg High-Rise Rigid Ecru Jeans",
          material: "14oz Undyed Organic Cotton Denim",
          colorName: "Natural Raw Ecru",
          image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens straight leg ecru off white high rise denim jeans"
        },
        {
          id: "cg-c-4",
          category: "Shoes",
          name: "Shearling-Lined Platform Suede Mules",
          material: "Genuine Australian Shearling & Cow Suede",
          colorName: "Chestnut Tan",
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens shearling lined platform suede slip on mules chestnut"
        }
      ],
      stylingTips: [
        "Pair with an oversized ribbed knit beanie in matching oatmeal wool.",
        "Keep the silhouette deliberate: high volume up top grounded by straight clean lines on bottom.",
        "Use a moisturizing dewy lip balm and glass-skin cheek gloss."
      ],
      signatureFragrance: {
        name: "Warm Milk, Cardamom & Cedar",
        notes: "Steamed Milk, Ceylon Cardamom, Creamy Sandalwood",
        vibe: "Warm, cozy, morning Hygge coffee ritual."
      },
      pinterestDescription: "Winter clean girl outfit idea: Charcoal wool cocoon coat, chunky oatmeal knit sweater, ecru straight jeans, shearling mules. Scandi winter aesthetic."
    }
  },
  darkacademia: {
    warm: {
      id: "da-warm",
      vibeId: "darkacademia",
      vibeName: "Dark Academia & Ivy League",
      season: "warm",
      title: "The Oxford Library Vest & Pleats",
      subtitle: "Vintage Scholar Elegance with Antique Heritage",
      description: "Cable-knit sleeveless collegiate sweater vest worn over a crisp short-sleeve collared shirt, paired with high-rise pleated glen plaid shorts and oxblood penny loafers.",
      editorialQuote: "I like books that smell of dust, history, and secret gardens.",
      styleKeywords: ["Cable Vest", "Glen Plaid", "Oxblood Loafers", "Brass Details"],
      colorPalette: [
        { name: "Forest Ivy Green", hex: "#1C352D", role: "Knit Vest" },
        { name: "Antique Parchment", hex: "#F5F0E6", role: "Shirt Base" },
        { name: "Glen Plaid Tweed", hex: "#635345", role: "Bottoms" },
        { name: "Deep Burgundy Cordovan", hex: "#42121A", role: "Leather Footwear" }
      ],
      items: [
        {
          id: "da-w-1",
          category: "Top",
          name: "Cable-Knit V-Neck Collegiate Sweater Vest",
          material: "100% Pima Cotton Cable Knit",
          colorName: "Deep Forest Hunter Green",
          image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens cable knit v neck sweater vest hunter green"
        },
        {
          id: "da-w-2",
          category: "Top",
          name: "Crisp Oxford Cotton Collared Button-Down",
          material: "100% Ring-Spun Cotton Oxford",
          colorName: "Parchment Ivory",
          image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens oxford cotton button down collar shirt ivory"
        },
        {
          id: "da-w-3",
          category: "Bottom",
          name: "High-Waist Tailored Glen Plaid Pleated Shorts",
          material: "Lightweight Wool Blend Twill",
          colorName: "Warm Brown Plaid Check",
          image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens plaid high waist pleated tailored shorts vintage"
        },
        {
          id: "da-w-4",
          category: "Shoes",
          name: "Burnished Leather Penny Loafers with White Crew Socks",
          material: "Polished Full-Grain Leather",
          colorName: "Rich Oxblood Wine",
          image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens leather penny loafers oxblood burgundy classic"
        }
      ],
      stylingTips: [
        "Layer the sweater vest with the shirt collar popped and buttoned to the top.",
        "Wear classic ribbed cream crew socks pushed down slightly above the ankle with the loafers.",
        "Carry a structured leather satchel bag with brass turn-locks."
      ],
      signatureFragrance: {
        name: "Old Paper, Black Tea & Leather",
        notes: "Smoked Black Tea, Antique Papyrus, Vetiver, Benzoin",
        vibe: "Atmospheric, intellectual, vintage library book study."
      },
      pinterestDescription: "Dark academia summer outfit: Hunter green sweater vest, oxford shirt, plaid pleated shorts, oxblood penny loafers with white socks. Vintage scholar style."
    },
    cold: {
      id: "da-cold",
      vibeId: "darkacademia",
      vibeName: "Dark Academia & Ivy League",
      season: "cold",
      title: "The Cambridge Tweed & Pleated Wool Midi",
      subtitle: "Winter Gothic Scholar with Heavy Wool Textures",
      description: "Structured herringbone wool blazer over a rich chocolate brown fine-gauge turtleneck, paired with an ankle-length pleated wool tartan skirt and lace-up Victorian oxford boots.",
      editorialQuote: "We read to know that we are not alone.",
      styleKeywords: ["Herringbone Tweed", "Tartan Wool", "Victorian Boots", "Leather Satchel"],
      colorPalette: [
        { name: "Herringbone Taupe", hex: "#4A4036", role: "Blazer Tweed" },
        { name: "Espresso Bean", hex: "#231B15", role: "Knit Base" },
        { name: "Highland Tartan", hex: "#2B3A2C", role: "Pleated Midi" },
        { name: "Antique Walnut Leather", hex: "#3D2B1F", role: "Boots & Belt" }
      ],
      items: [
        {
          id: "da-c-1",
          category: "Outerwear",
          name: "Heritage Wool Herringbone Tailored Blazer",
          material: "100% Scottish Wool with Suede Elbow Patches",
          colorName: "Muted Olive-Taupe Herringbone",
          image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens wool herringbone tweed blazer vintage tailored"
        },
        {
          id: "da-c-2",
          category: "Top",
          name: "Superfine Merino Wool Ribbed Turtleneck",
          material: "100% Australian Merino Wool",
          colorName: "Deep Chocolate Espresso",
          image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens merino wool turtleneck sweater dark brown"
        },
        {
          id: "da-c-3",
          category: "Bottom",
          name: "A-Line Knife-Pleated Heavy Wool Midi Skirt",
          material: "Heavyweight Virgin Wool Blend",
          colorName: "Muted Dark Forest Green Tartan",
          image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens high waist wool pleated midi skirt vintage dark green"
        },
        {
          id: "da-c-4",
          category: "Shoes",
          name: "Lace-Up Leather Victorian Oxford Ankle Boots",
          material: "Hand-Burnished Boxcalf Leather with Wood Stack Heel",
          colorName: "Dark Antique Walnut",
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens lace up leather oxford ankle boots vintage heel"
        }
      ],
      stylingTips: [
        "Cinch the blazer at the waist with a slim vintage brass-buckle leather belt.",
        "Add thick ribbed dark brown wool tights for cozy warmth and textural depth.",
        "Wear antique gold wire-rim spectacles and hold a hardcover leather journal."
      ],
      signatureFragrance: {
        name: "Incense, Black Plum & Patchouli",
        notes: "Frankincense, Dark Amber, Dried Plum, Indonesian Patchouli",
        vibe: "Mysterious, scholarly, historic cathedral architecture."
      },
      pinterestDescription: "Dark academia winter capsule: Herringbone tweed blazer, chocolate turtleneck, pleated wool midi skirt, lace-up oxford boots. Winter scholar aesthetic."
    }
  },
  resort: {
    warm: {
      id: "re-warm",
      vibeId: "resort",
      vibeName: "Riviera & Coastal Grandmother",
      season: "warm",
      title: "The Positano Sun-Bleached Linen & Straw",
      subtitle: "Effortless Coastal Luxury and Crisp Ocean Breeze",
      description: "Relaxed open-collar striped linen shirt paired with fluid wide-leg white linen sailor pants, woven raffia slide sandals, and an oversized woven straw tote.",
      editorialQuote: "Life takes on a slower, sweeter cadence by the sea.",
      styleKeywords: ["Striped Linen", "Sailor Pants", "Woven Raffia", "Tortoiseshell"],
      colorPalette: [
        { name: "Aegean Sky Blue", hex: "#7E9FB8", role: "Stripe Accent" },
        { name: "Sunlit White", hex: "#FFFFFF", role: "Crisp Foundation" },
        { name: "Natural Palm Raffia", hex: "#D2B48C", role: "Woven Texture" },
        { name: "Cognac Tan", hex: "#8B5A2B", role: "Leather Trim" }
      ],
      items: [
        {
          id: "re-w-1",
          category: "Top",
          name: "Relaxed Camp-Collar Striped French Linen Shirt",
          material: "100% Pure Normandy Flax Linen",
          colorName: "Sky Blue & White Deck Stripe",
          image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens camp collar striped linen button down shirt blue white"
        },
        {
          id: "re-w-2",
          category: "Bottom",
          name: "High-Rise Wide-Leg Linen Sailor Pants",
          material: "100% Heavy Slub Linen",
          colorName: "Bright Coastal White",
          image: "https://images.unsplash.com/photo-1584370848010-d7fe6bc767ec?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens high waist wide leg white linen sailor pants"
        },
        {
          id: "re-w-3",
          category: "Shoes",
          name: "Woven Raffia Slide Sandals with Leather Footbed",
          material: "Hand-Braided Natural Raffia & Italian Leather",
          colorName: "Natural Sand / Tan",
          image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens woven raffia slide sandals leather flat"
        },
        {
          id: "re-w-4",
          category: "Accessory",
          name: "Oversized Hand-Woven Straw Tote & Wide-Brim Sun Hat",
          material: "Madagascar Raffia Straw",
          colorName: "Sun-Bleached Natural Straw",
          image: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "large woven straw tote bag beach summer vacation leather handles"
        }
      ],
      stylingTips: [
        "Leave the camp collar unbuttoned with layered delicate gold herringbone chains.",
        "Roll the pant cuffs slightly if walking bare feet near the shore.",
        "Keep a pair of oversized square sunglasses pushed up atop your hair."
      ],
      signatureFragrance: {
        name: "Sea Salt, Fig Leaf & Sunlit Lemon",
        notes: "Mediterranean Fig, Mineral Sea Salt, Amalfi Lemon, Driftwood",
        vibe: "Airy, luminous, sun-soaked cliffside terrace."
      },
      pinterestDescription: "Coastal grandmother summer aesthetic: Striped linen shirt, white wide leg pants, woven raffia sandals, straw beach tote. Riviera capsule wardrobe."
    },
    cold: {
      id: "re-cold",
      vibeId: "resort",
      vibeName: "Riviera & Coastal Grandmother",
      season: "cold",
      title: "The Cape Cod Fisherman Knit & Wool Peacoat",
      subtitle: "Maritime Winter Warmth with Crisp Coastal Textures",
      description: "Thick hand-knit Aran cable sweater layered beneath a navy melton wool double-breasted peacoat, paired with tailored ecru corduroy trousers and waterproof leather duck boots.",
      editorialQuote: "The sea speaks a timeless language of resilience and calm.",
      styleKeywords: ["Aran Cable Knit", "Melton Wool", "Ecru Corduroy", "Leather Boots"],
      colorPalette: [
        { name: "Deep Admiral Navy", hex: "#0E1A2E", role: "Peacoat Outerwear" },
        { name: "Irish Cream Wool", hex: "#FAF6EE", role: "Cable Knit" },
        { name: "Oatmeal Corduroy", hex: "#D6CEBF", role: "Textured Pants" },
        { name: "Saddle Tan", hex: "#8A532B", role: "Leather Boots" }
      ],
      items: [
        {
          id: "re-c-1",
          category: "Outerwear",
          name: "Double-Breasted Heavy Melton Wool Peacoat",
          material: "100% Recycled Melton Wool with Anchor Buttons",
          colorName: "Deep Navy Blue",
          image: "https://images.unsplash.com/photo-1539533018447-63fcce667823?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens classic double breasted navy wool peacoat"
        },
        {
          id: "re-c-2",
          category: "Top",
          name: "Heritage Aran Hand-Knit Cable Crewneck Sweater",
          material: "100% Pure Irish Merino Wool",
          colorName: "Unbleached Natural Cream",
          image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens 100 merino wool authentic aran cable knit sweater cream"
        },
        {
          id: "re-c-3",
          category: "Bottom",
          name: "High-Waist Wide-Wale Corduroy Trousers",
          material: "100% Cotton 8-Wale Corduroy",
          colorName: "Warm Sand / Ecru",
          image: "https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens high waist wide leg corduroy pants ecru beige"
        },
        {
          id: "re-c-4",
          category: "Shoes",
          name: "Waterproof Leather & Rubber Lined Ankle Boots",
          material: "Full-Grain Waterproof Leather & Vulcanized Rubber",
          colorName: "Brown & Navy Trim",
          image: "https://images.unsplash.com/photo-1608256246200-53e635b5b65f?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "womens waterproof leather duck boots winter rain"
        }
      ],
      stylingTips: [
        "Turn up the collar of the navy peacoat to shield against chilly coastal winds.",
        "Layer a soft cashmere scarf in heather grey tucked inside the lapels.",
        "Embrace rich contrasting textures: heavy cable knit against ridged corduroy."
      ],
      signatureFragrance: {
        name: "Sea Pine, Juniper & Ambergris",
        notes: "Coastal Juniper, Salted Pine Needles, Clean Amber",
        vibe: "Brisk, invigorating winter morning on a rocky shoreline."
      },
      pinterestDescription: "Coastal grandmother winter capsule: Navy wool peacoat, cream Aran cable knit sweater, corduroy pants, leather boots. Winter maritime aesthetic."
    }
  },
  streetwear: {
    warm: {
      id: "sw-warm",
      vibeId: "streetwear",
      vibeName: "Retro Minimal Streetwear",
      season: "warm",
      title: "The Tokyo Shibuya Oversized Graphic & Cargo",
      subtitle: "Contemporary Street Cut with 90s Heritage Proportions",
      description: "Heavyweight 280GSM vintage washed graphic boxy tee paired with wide-leg relaxed technical cargo pants and archival skate sneakers.",
      editorialQuote: "Streetwear is the modern armor of authentic self-expression.",
      styleKeywords: ["Boxy Heavyweight Tee", "Relaxed Cargos", "Archival Skate", "Silver Chains"],
      colorPalette: [
        { name: "Washed Vintage Charcoal", hex: "#2A2A2A", role: "Heavy Cotton" },
        { name: "Military Sage", hex: "#5C6B53", role: "Cargo Fabric" },
        { name: "Bone Off-White", hex: "#E8E4DC", role: "Sneaker Leather" },
        { name: "Liquid Sterling Silver", hex: "#C0C0C0", role: "Hardware & Chains" }
      ],
      items: [
        {
          id: "sw-w-1",
          category: "Top",
          name: "Boxy Drop-Shoulder Heavyweight Vintage Wash T-Shirt",
          material: "100% 280GSM Combed Cotton with Ribbed Crew Collar",
          colorName: "Faded Acid Charcoal Gray",
          image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "heavyweight vintage wash drop shoulder oversized t shirt black"
        },
        {
          id: "sw-w-2",
          category: "Bottom",
          name: "Wide-Leg Relaxed Fit Ripstop Multi-Pocket Cargo Pants",
          material: "100% Durable Cotton Ripstop with Bungee Hem",
          colorName: "Muted Olive Sage",
          image: "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "wide leg baggy parachute cargo pants olive green relaxed fit"
        },
        {
          id: "sw-w-3",
          category: "Shoes",
          name: "Archival High-Top Retro Suede Skate Sneakers",
          material: "Durable Suede Upper & Waffle Vulcanized Rubber Sole",
          colorName: "Black / Chalk White",
          image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "retro high top skate sneakers black white suede"
        },
        {
          id: "sw-w-4",
          category: "Accessory",
          name: "Heavy Stainless Steel Cuban Link Chain & Structured Nylon Cap",
          material: "316L Stainless Steel & Waterproof Ripstop",
          colorName: "Brushed Silver / Matte Black",
          image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "stainless steel cuban link chain necklace heavy silver"
        }
      ],
      stylingTips: [
        "Cinch the adjustable bungee hems at the ankle to show off the sneaker silhouette.",
        "Stack 2 different widths of silver Cuban chains over the thick crewneck collar.",
        "Add a small crossbody nylon technical pouch for high-utility styling."
      ],
      signatureFragrance: {
        name: "Yuzu, Metallic Musk & Vetiver",
        notes: "Japanese Yuzu, Ozonic Notes, White Cedar, Clean Vetiver",
        vibe: "Urban, sharp, modern high-tech city street."
      },
      pinterestDescription: "Retro minimalist streetwear summer outfit: Heavyweight drop-shoulder tee, olive wide-leg cargo pants, high-top skate shoes, silver Cuban chain. 90s street fashion."
    },
    cold: {
      id: "sw-cold",
      vibeId: "streetwear",
      vibeName: "Retro Minimal Streetwear",
      season: "cold",
      title: "The Berlin Distressed Leather Bomber & Raw Denim",
      subtitle: "Brutalist Urban Outerwear with Heavy Denim Drape",
      description: "Oversized distressed vintage leather bomber jacket layered over a 450GSM double-fleece hooded sweatshirt, paired with loose-fit raw selvedge denim and chunky platform work boots.",
      editorialQuote: "Style is knowing who you are and what you want to say.",
      styleKeywords: ["Leather Bomber", "Heavy Fleece Hoodie", "Raw Selvedge", "Lug Platform Boots"],
      colorPalette: [
        { name: "Distressed Oil Black", hex: "#1C1B1A", role: "Leather Jacket" },
        { name: "Concrete Heather Gray", hex: "#7D7E80", role: "Fleece Hood" },
        { name: "Raw Indigo Selvedge", hex: "#152238", role: "Heavy Denim" },
        { name: "Matte Black Rubber", hex: "#111111", role: "Chunky Lug Sole" }
      ],
      items: [
        {
          id: "sw-c-1",
          category: "Outerwear",
          name: "Oversized Distressed Faux-Leather Flight Bomber Jacket",
          material: "Heavyweight Vegan Leather with Quilted Satin Lining",
          colorName: "Washed Vintage Brown-Black",
          image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "oversized distressed leather bomber jacket vintage flight"
        },
        {
          id: "sw-c-2",
          category: "Top",
          name: "450GSM Heavyweight Cross-Grain Cotton Fleece Hoodie",
          material: "100% Ring-Spun Combed Cotton with Double-Layer Hood",
          colorName: "Cement Melange Heather Gray",
          image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "heavyweight 450 gsm fleece hoodie pullover plain oversized"
        },
        {
          id: "sw-c-3",
          category: "Bottom",
          name: "Loose Baggy Fit Raw Indigo Selvedge Denim Jeans",
          material: "14.5oz Unwashed 100% Cotton Denim",
          colorName: "Deep Inky Selvedge Indigo",
          image: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "loose fit baggy raw selvedge denim jeans 90s vintage"
        },
        {
          id: "sw-c-4",
          category: "Shoes",
          name: "Chunky Platform 8-Eyelet Lug Sole Leather Work Boots",
          material: "Smooth Polishable Leather with Commando Lug Outsole",
          colorName: "Jet Matte Black",
          image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=700&q=85",
          amazonSearchQuery: "8 eyelet platform leather combat work boots chunky lug sole"
        }
      ],
      stylingTips: [
        "Let the structured heavy hood of the sweatshirt rest cleanly outside the leather bomber collar.",
        "Roll a thick single cuff at the bottom of the raw indigo denim to showcase the selvedge ID line.",
        "Wear a micro-ribbed fisherman beanie rolled above the ears."
      ],
      signatureFragrance: {
        name: "Smoky Birch Tar, Suede & Black Amber",
        notes: "Birch Smoke, Soft Black Suede, Dark Amber Resin",
        vibe: "Moody, raw, confident nocturnal energy."
      },
      pinterestDescription: "Winter streetwear aesthetic outfit: Oversized leather bomber jacket, grey heavyweight hoodie, raw selvedge denim, chunky lug platform boots. Modern 90s streetwear capsule."
    }
  }
};
