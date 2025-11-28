import { safeFetch } from "@/features/lib/apiClient";
import { Fortune, SaveFortunePayload } from "../types/fortuneTypes";

export function getRandomFortune() {
  return safeFetch<Fortune>("/random");
}

export function saveFortune(payload: SaveFortunePayload) {
  return safeFetch<Fortune>("/save", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}
