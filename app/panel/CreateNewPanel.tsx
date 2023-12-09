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

const CreateNewPanel = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Create New Panel</Button>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Create New Panel</SheetTitle>
            <SheetDescription>
              <Text>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </Text>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CreateNewPanel;
