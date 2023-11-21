import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Heading, Flex, Card, Text, Box } from "@radix-ui/themes";
import React from "react";
import ReactMarkdown from "react-markdown";
import StatusSelect from "./StatusSelect";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <>
      <Flex justify={"between"} align={"center"}>
        <Box>
          <Heading>{issue.title}</Heading>
          <Flex gap="3" my="2">
            <IssueStatusBadge status={issue.status} />
            <Text>{issue.createdAt.toDateString()}</Text>
          </Flex>
        </Box>
        <StatusSelect issue={issue} />
      </Flex>
      <Card className="prose max-w-full" mt={"4"}>
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
