import { Card, Image, Text, Badge, Button, Group } from "@mantine/core";

const CardComponent = ({ name, src, onAdd }) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <Image
          src={"/assets/images/" + src + ".jpg"}
          height={160}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={500}>{name}</Text>
        <Badge color="pink">On Sale</Badge>
      </Group>

      <Text size="sm" c="dimmed">
        With Fjord Tours you can explore more of the magical fjord landscapes
        with tours and activities on and around the fjords of Norway
      </Text>

      <Button color="blue" fullWidth mt="md" radius="md" onClick={onAdd}>
        Add
      </Button>
    </Card>
  );
};

export default CardComponent;
