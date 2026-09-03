import { RealOutfitAdvice, OccasionCategory } from "../types";
import { MASTER_ADVICE_DATABASE, OCCASION_CATEGORIES } from "./expertAdvice";

export { OCCASION_CATEGORIES };

export function getAdviceByOccasionAndGender(occasionId: string, gender: "men" | "women"): RealOutfitAdvice | null {
  const match = MASTER_ADVICE_DATABASE[occasionId];
  if (match && match[gender]) {
    return match[gender];
  }
  // If not direct key, try fallback to formal or first
  const first = Object.values(MASTER_ADVICE_DATABASE)[0];
  return first ? first[gender] : null;
}

export const SEARCH_FALLBACK_ADVICE: Record<"men" | "women", RealOutfitAdvice> = {
  men: MASTER_ADVICE_DATABASE["formal-wedding"].men,
  women: MASTER_ADVICE_DATABASE["formal-wedding"].women
};
