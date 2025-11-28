import { useMutation, useQuery } from "@tanstack/react-query";
import { getRandomFortune, saveFortune } from "./fortuneApi";
import { SaveFortunePayload } from "../types/fortuneTypes";

export function useRandomFortune() {
  return useQuery({
    queryKey: ["fortune", "random"],
    queryFn: getRandomFortune,
    enabled: false,
  });
}

export function useSavedFortune() {
  return useMutation({
    mutationFn: (payload: SaveFortunePayload) => saveFortune(payload),
  });
}
