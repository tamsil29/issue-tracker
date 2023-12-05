import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Card, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";
import { AiFillSetting } from "react-icons/ai";

const PanelCard = () => {
  return (
    <Card variant="ghost" asChild>
      <Link href={"/"}>
        <Flex justify={"between"} align={"center"}>
          <Heading size={"3"} weight={"medium"}>
            Test Series
          </Heading>
          {/* <AiFillSetting /> */}
          <ArrowRightIcon />
        </Flex>
      </Link>
    </Card>
  );
};

export default PanelCard;
