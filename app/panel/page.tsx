import React from "react";
import PanelCard from "./PanelCard";
import { Box, Button, Flex, Separator } from "@radix-ui/themes";
import dynamic from "next/dynamic";

const CreateNewPanel = dynamic(() => import("@/app/panel/CreateNewPanel"));

const PanelListingPage = () => {
  return (
    <>
      <Flex direction={"column"} gap={"6"} align={"start"}>
        <CreateNewPanel />

        <Flex direction={"column"} gap={"4"} width={"100%"}>
          <PanelCard />
          <Separator size={"4"} />
          <PanelCard />
        </Flex>
      </Flex>
    </>
  );
};

export default PanelListingPage;
