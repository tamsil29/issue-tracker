import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Card, Flex, Heading, Link, Text } from "@radix-ui/themes";
import React from "react";

const PanelUsersCard = ({
  onClick,
}: {
  onClick: React.MouseEventHandler<HTMLDivElement>;
}) => {
  return (
    <Card variant="surface" className="hover:cursor-pointer" onClick={onClick}>
      <Flex justify={"between"} align={"center"}>
        <Flex direction={"column"} gap={"1"}>
          <Heading size={"2"}>Manage Panel Users</Heading>
          <Text size={"1"}>
            <Link>Add</Link> or <Link color="red">remove</Link> users
          </Text>
        </Flex>
        <ArrowRightIcon />
      </Flex>
    </Card>
  );
};

export default PanelUsersCard;