"use client";

import SkeletonLoader, { SkeletonProps } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import React from "react";
import { useTheme } from "next-themes";

const Skeleton = ({ ...props }: SkeletonProps) => {
  const { theme } = useTheme();
  return (
    <SkeletonLoader
      baseColor={theme === "dark" ? "#222222" : ""}
      highlightColor={theme === "dark" ? "#333333" : ""}
      {...props}
    />
  );
};

export default Skeleton;
