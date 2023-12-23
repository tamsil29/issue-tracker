"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  Button,
  Flex,
  Switch,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { MouseEventHandler } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ErrorMessage } from "../components";
import { SheetClose } from "../components/Sheet";
import { issueSchema } from "../validationSchemas";
import PanelAccessibilityDetails from "./PanelAccessibilityDetails";
import PanelUsersCard from "./PanelUsersCard";

type PanelFormData = z.infer<typeof issueSchema>;

const PanelForm = ({
  onUserClick,
}: {
  onUserClick: MouseEventHandler<HTMLDivElement>;
}) => {
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
    <form className="space-y-8" onSubmit={onSubmit}>
      <Flex direction="column" gap="3">
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        <ErrorMessage message={errors.title?.message || ""} />

        <TextArea
          size="2"
          placeholder="Enter Description..."
          {...register("description")}
        />
        <ErrorMessage message={errors.description?.message || ""} />

        <PanelUsersCard onClick={onUserClick} />

        <Box>
          <Flex justify={"between"} px={"2"}>
            <Flex align={"center"} gap={"2"}>
              <Text>Private</Text>
              <PanelAccessibilityDetails />
            </Flex>
            <Switch />
          </Flex>
        </Box>
      </Flex>
      <Flex gap={"3"} justify={"end"}>
        <Button color="red">
          <SheetClose type="reset">Cancel</SheetClose>
        </Button>
        <Button disabled={false}>Save</Button>
      </Flex>
    </form>
  );
};

export default PanelForm;
