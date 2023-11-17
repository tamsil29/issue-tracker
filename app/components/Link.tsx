import React from "react";
import NextLink from "next/link";
import { Link as RadixLink } from "@radix-ui/themes";

interface Props {
  href: string;
  text: string;
}

const Link = ({ href, text }: Props) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
      <RadixLink>{text}</RadixLink>
    </NextLink>
  );
};

export default Link;
