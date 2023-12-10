"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/Sheet";
import { Button, Heading, Text } from "@radix-ui/themes";

import React, { useState } from "react";
import PanelForm from "./PanelForm";

const CreateNewPanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create New Panel</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create New Panel</SheetTitle>
          </SheetHeader>
          <SheetDescription>
            <div>
              <PanelForm />
            </div>
          </SheetDescription>
        </SheetContent>
        <PanelForm />
      </Sheet>
    </>
  );
};

export default CreateNewPanel;
