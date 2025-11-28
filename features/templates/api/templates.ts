import { safeFetch } from "@/features/lib/apiClient";

export type Template = {
  _id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export async function getTemplate(): Promise<Template[]> {
  return safeFetch<Template[]>("/templates");
}

export async function createTemplate(text: string): Promise<Template> {
  return safeFetch<Template>("/templates", {
    method: "POST",
    body: JSON.stringify(text),
  });
}
