"use client"


// Alternate way for onSave in FortuneHome.tsx

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { SavedFortuneSchema, savedFortuneSchema } from "../../schemas/fortuneSchema"

const SaveForm = () => {

    const form = useForm<SavedFortuneSchema>({
        resolver: zodResolver(savedFortuneSchema),
        defaultValues: {
            name: "",
            // text,
        }
    })



  return (
    <div>SaveForm</div>
  )
}

export default SaveForm