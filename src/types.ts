export interface RealOutfitAdvice {
  id: string;
  title: string;
  subtitle: string;
  targetSituation: string;
  whyThisWorks: string;
  colorRule: {
    primary: string;
    secondary: string;
    accent: string;
    colorRationale: string;
    swatches: { name: string; hex: string; role: string }[];
  };
  breakdown: {
    top: {
      name: string;
      cutAndFit: string;
      material: string;
      color: string;
      proTip: string;
    };
    layerOrOuterwear?: {
      name: string;
      cutAndFit: string;
      material: string;
      color: string;
      proTip: string;
    };
    bottom: {
      name: string;
      cutAndFit: string;
      material: string;
      color: string;
      proTip: string;
    };
    shoes: {
      name: string;
      style: string;
      material: string;
      color: string;
      proTip: string;
    };
    accessories: {
      name: string;
      details: string;
      proTip: string;
    }[];
  };
  goldenStylingRules: string[];
  commonMistakesToAvoid: string[];
  scentRecommendation: {
    name: string;
    family: string;
    bestNotes: string;
    vibe: string;
  };
}

export interface OccasionCategory {
  id: string;
  title: string;
  persianTitle: string;
  icon: string;
  description: string;
  keywords: string[];
}

export interface WeatherCondition {
  id: "warm-sunny" | "mild-spring" | "chilly-autumn" | "cold-rain-snow";
  nameFa: string;
  tempFa: string;
  icon: string;
  fabricAdvice: string;
  layerCount: string;
}

export interface BodyProportionProfile {
  id: "athletic" | "lean-tall" | "broad-stout" | "petite-compact";
  nameFa: string;
  icon: string;
  silhouetteTip: string;
  suitCutRecommendation: string;
}

export interface SkinUndertoneProfile {
  id: "warm-olive" | "cool-fair" | "neutral-medium";
  nameFa: string;
  description: string;
  bestMetals: string;
  bestBaseColors: string[];
  colorsToAvoid: string[];
}

export interface WardrobeItem {
  id: string;
  category: "top" | "layer" | "bottom" | "shoes" | "accessory";
  nameFa: string;
  icon: string;
}

// Legacy support with loose fields for outfits.ts
export interface StyleVibe {
  id: string;
  name: string;
  tagline: string;
  icon: string;
  heroBadge: string;
}

export interface CapsuleOutfit {
  [key: string]: any;
}
