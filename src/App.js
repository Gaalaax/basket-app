import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  Container,
  SimpleGrid,
  List,
  ThemeIcon,
  rem,
  Indicator,
  Input,
  Button,
  Group,
  Drawer,
} from "@mantine/core";
import { IconCircleCheck, IconCircleDashed } from "@tabler/icons-react";
import Card from "./Components/Card";
import "./App.css";

const storeItems = [
  {
    name: "Camera",
    src: "camera",
    price: 20,
  },
  {
    name: "Headphone",
    src: "headphone",
    price: 10,
  },
  {
    name: "Camera Lens",
    src: "lens",
    price: 25,
  },
  {
    name: "Retro Camera",
    src: "retro-cam",
    price: 25,
  },
  {
    name: "Toy Car",
    src: "toy-car",
    price: 25,
  },
  {
    name: "Watch",
    src: "watch",
    price: 25,
  },
];

function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <Container>
      <Group align="end">
        <Input.Wrapper label="Search ">
          <Input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </Input.Wrapper>
        <Button onClick={() => setSearchValue("")}>Clear</Button>
        <Indicator color="red" label={basketItems.length} size={18}>
          <Button onClick={open}>Open Drawer</Button>
        </Indicator>
      </Group>

      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ name, src }) => {
          return (
            <Card
              key={name}
              src={src}
              name={name}
              onAdd={() => setBasketItems([...basketItems, { name }])}
            />
          );
        })}
      </SimpleGrid>

      <Drawer
        opened={opened}
        onClose={close}
        title="Cart"
        overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      >
        <List
          class="list"
          spacing="xs"
          size="sm"
          center
          icon={
            <ThemeIcon color="teal" size={24} radius="xl">
              <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
            </ThemeIcon>
          }
        >
          {basketItems.map(({ name }, index) => (
            <List.Item key={index}>{name}</List.Item>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
