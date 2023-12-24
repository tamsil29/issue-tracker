import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import React from "react";
import UserCard from "./UserCard";

const UserListing = () => {
  return (
    <div className="mt-4 flex flex-col gap-4">
      <TextField.Root>
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Search..." />
      </TextField.Root>
      <div className="flex flex-col gap-2">
        {Array(10)
          .fill(1)
          .map((item, index) => (
            <UserCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default UserListing;
