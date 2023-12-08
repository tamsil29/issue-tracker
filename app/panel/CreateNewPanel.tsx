import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/Sheet";
import { Button, Heading, Text } from "@radix-ui/themes";

import React from "react";

const CreateNewPanel = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Button>New Panel</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            <Heading>Are you sure absolutely sure?</Heading>
          </SheetTitle>
          <SheetDescription>
            <Text>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </Text>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CreateNewPanel;
