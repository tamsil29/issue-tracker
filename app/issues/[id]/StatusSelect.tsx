"use client";

import { Issue, Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import toast, { Toaster } from "react-hot-toast";

const statuses: { label: string; value: Status }[] = [
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];

const StatusSelect = ({ issue }: { issue: Issue }) => {
  const router = useRouter();
  const updateIssue = async (status: Status) => {
    try {
      await axios.patch("/api/issues/" + issue.id, { status });
      router.refresh();
    } catch (error) {
      toast.error("Changes could not be saved.");
    }
  };
  return (
    <>
      <Select.Root defaultValue={issue?.status} onValueChange={updateIssue}>
        <Select.Trigger placeholder="Status" />
        <Select.Content>
          {statuses.map((status) => (
            <Select.Item value={status.value} key={status.label}>
              {status.label}
            </Select.Item>
          ))}
        </Select.Content>
      </Select.Root>
      <Toaster />
    </>
  );
};

export default StatusSelect;
