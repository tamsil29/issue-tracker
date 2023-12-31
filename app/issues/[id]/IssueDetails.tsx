import { IssueStatusBadge } from "@/app/components";
import { Issue } from "@prisma/client";
import { Box, Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";

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
      </Flex>
      <Card className="prose max-w-full" mt={"4"}>
        <ReactMarkdown className="text-[var(--gray-12)]">
          {issue.description}
        </ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
