import { InfoCircledIcon } from "@radix-ui/react-icons";
import { HoverCard, Strong, Text } from "@radix-ui/themes";

const PanelAccessibilityDetails = () => {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger>
        <InfoCircledIcon />
      </HoverCard.Trigger>
      <HoverCard.Content className="z-50 max-w-sm">
        <Text size={"1"}>
          <Strong>Private:</Strong> Users not in the panel will not be able to
          see any content. They can only request to join
        </Text>
        <br />
        <Text size={"1"}>
          <Strong>Public:</Strong> Users not in the panel will be able to see
          all the content. They can't make any changes or delete anything in the
          panel. They can request to join
        </Text>
      </HoverCard.Content>
    </HoverCard.Root>
  );
};

export default PanelAccessibilityDetails;
