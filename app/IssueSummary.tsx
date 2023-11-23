import { Status } from "@prisma/client";
import { Card, Flex, Grid, Text } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummary = ({ open, inProgress, closed }: Props) => {
  const containers: { label: string; value: number; status: Status }[] = [
    { label: "Open Issues", value: open, status: "OPEN" },
    { label: "In Progress", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed", value: closed, status: "CLOSED" },
  ];
  return (
    <Grid gap={"4"} columns={"3"}>
      {containers.map((container) => (
        <Card key={container.label} asChild>
          <Link
            className="text-sm font-medium"
            href={`/issues/list?status=${container.status}`}
          >
            <Flex direction={"column"} gap={"1"}>
              {container.label}
              <Text size={"5"} className="font-bold">
                {container.value}
              </Text>
            </Flex>
          </Link>
        </Card>
      ))}
    </Grid>
  );
};

export default IssueSummary;
