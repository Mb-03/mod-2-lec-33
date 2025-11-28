import { useQuery } from "@tanstack/react-query";
import { getTemplate } from "./templates";

export function useTemplate() {
    return useQuery({
        queryKey: ["template"],
        queryFn: getTemplate
    })
}