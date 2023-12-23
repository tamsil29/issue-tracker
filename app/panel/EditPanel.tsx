"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/app/components/Sheet";
import { ArrowLeftIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button, TextField } from "@radix-ui/themes";
import cn from "clsx";
import { useState } from "react";
import PanelForm from "./PanelForm";
import UserCard from "./UserCard";
import dynamic from "next/dynamic";

const UserListing = dynamic(() => import("./UserListing"));

enum Views {
  USERS = "USERS",
  FORM = "FORM",
}

const EditPanel = () => {
  const [currentView, setCurrentView] = useState(Views.FORM);

  return (
    <>
      <Sheet>
        <SheetTrigger>
          <Button>Create New Panel</Button>
        </SheetTrigger>
        <SheetContent className="overflow-hidden">
          <div
            className={cn("duration-300 transition-all", {
              ["translate-x-0"]: currentView === Views.FORM,
              ["-translate-x-[120%]"]: currentView === Views.USERS,
            })}
          >
            <SheetHeader>
              <SheetTitle>Panel Info</SheetTitle>
            </SheetHeader>
            <div className="mt-4">
              <PanelForm onUserClick={() => setCurrentView(Views.USERS)} />
            </div>
          </div>

          <div
            className={cn(
              "duration-300 transition-all p-5 absolute top-0 left-0 w-full overflow-y-auto",
              {
                ["translate-x-[200%] invisible"]: currentView === Views.FORM,
                ["visible h-screen"]: currentView === Views.USERS,
              }
            )}
          >
            <SheetHeader>
              <div className="flex flex-row gap-2 items-center sm:justify-start justify-between">
                <ArrowLeftIcon
                  className="h-4 w-4 cursor-pointer"
                  onClick={() => setCurrentView(Views.FORM)}
                />
                <SheetTitle>Panel Users</SheetTitle>
                <div className="sm:hidden block" />
              </div>
            </SheetHeader>
            <UserListing />
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default EditPanel;
