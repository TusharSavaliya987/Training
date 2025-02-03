import { Badge, Flex } from "@radix-ui/themes";

export default function BadgeComponent() {
  return (
    <>
      <Flex gap="2">
        <Badge color="indigo">New</Badge>
        <Badge color="cyan">New</Badge>
        <Badge color="orange">New</Badge>
        <Badge color="crimson">New</Badge>
      </Flex>
      <Flex direction="column" gap="2">
        <Flex gap="2">
          <Badge color="gray" variant="solid">
            New
          </Badge>
          <Badge color="gray" variant="soft">
            New
          </Badge>
          <Badge color="gray" variant="surface">
            New
          </Badge>
          <Badge color="gray" variant="outline">
            New
          </Badge>
        </Flex>
        <Flex gap="2">
          <Badge color="gray" variant="solid" highContrast>
            New
          </Badge>
          <Badge color="gray" variant="soft" highContrast>
            New
          </Badge>
          <Badge color="gray" variant="surface" highContrast>
            New
          </Badge>
          <Badge color="gray" variant="outline" highContrast>
            New
          </Badge>
        </Flex>
      </Flex>
    </>
  );
}
