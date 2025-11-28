"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import { useTemplate } from "../../api/useTemplate";
import { useCreateTemplate } from "../../api/useCreateTemaplte";
import toast from "react-hot-toast";

const schema = z.object({
  text: z
    .string()
    .min(1, "Please Enter Fortune Text")
    .max(500, "Max 500 Characthers"),
});

type FormData = z.infer<typeof schema>;

const CreateTemplatePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { text: "" },
  });

  const createTemplateMutation = useCreateTemplate();

  const onSubmit = async (data: FormData) => {
    try {
      await createTemplateMutation.mutate(data.text);
      toast.success("Fortune Template Created");
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const textValue = watch("text");

  return <div>CreateTemplatePage</div>;
};

export default CreateTemplatePage;
