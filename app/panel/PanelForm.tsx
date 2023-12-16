"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { issueSchema } from "../validationSchemas";
import { z } from "zod";
import { Button, Flex, TextField } from "@radix-ui/themes";

type PanelFormData = z.infer<typeof issueSchema>;

const PanelForm = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PanelFormData>({
    resolver: zodResolver(issueSchema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form className="space-y-3" onSubmit={onSubmit}>
      <Flex direction="column" gap="3">
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <Button disabled={false}>Save</Button>
      </Flex>
    </form>
  );
};

export default PanelForm;
