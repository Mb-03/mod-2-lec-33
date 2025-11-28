import {z} from "zod"


export const savedFortuneSchema = z.object({
    name: z.string().min(1, "Name is Required"),
    text: z.string().min(1, "Fortune text is missing")
})

export type SavedFortuneSchema = z.infer<typeof savedFortuneSchema>