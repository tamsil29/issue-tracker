"use client";

import { Container, Theme } from "@radix-ui/themes";
import React, { PropsWithChildren } from "react";
import { useTheme } from "next-themes";
import NavBar from "./NavBar";

const ManagedProvider = ({
  children,
  enableNav = true,
}: PropsWithChildren & { enableNav?: boolean }) => {
  const { theme } = useTheme();
  type themeType = "light" | "dark";
  return (
    <Theme appearance={theme as themeType} accentColor="violet">
      {enableNav && <NavBar />}
      <main className="p-5">
        <Container>{children}</Container>
      </main>
    </Theme>
  );
};

export default ManagedProvider;
