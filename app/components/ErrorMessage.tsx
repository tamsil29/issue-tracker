import React, { PropsWithChildren } from "react";
import { Text } from "@radix-ui/themes";

const ErrorMessage = ({ message }: { message: string }) => {
  if (!message) return null;
  return (
    <Text color="red" as="p">
      {message}
    </Text>
  );
};

export default ErrorMessage;
