"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/Sheet";
import { Button, Heading, Text, Theme } from "@radix-ui/themes";
import * as Dialog from "@radix-ui/react-dialog";
import React, { useState } from "react";
import PanelForm from "./PanelForm";

const CreateNewPanel = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button>Create New Panel</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Panel Info</SheetTitle>
          </SheetHeader>
          {/* <SheetDescription></SheetDescription> */}
          <div className="mt-4">
            <PanelForm />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default CreateNewPanel;
