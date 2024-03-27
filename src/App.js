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
  ActionIcon,
  Icon,
  Group,
  Drawer,
  Badge,
} from "@mantine/core";
import { IconCircleCheck, IconShoppingCart } from "@tabler/icons-react";
import Card from "./Components/Card";
import "./App.css";

const storeItems = [
  {
    id: 100,
    name: "Camera",
    src: "camera",
    price: 20,
  },
  {
    id: 101,
    name: "Headphone",
    src: "headphone",
    price: 10,
  },
  {
    id: 102,
    name: "Camera Lens",
    src: "lens",
    price: 25,
  },
  {
    id: 103,
    name: "Retro Camera",
    src: "retro-cam",
    price: 25,
  },
  {
    id: 104,
    name: "Toy Car",
    src: "toy-car",
    price: 25,
  },
  {
    id: 105,
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
  let addToBasket = ({ id, name }) => {
    let basketIndex = basketItems.findIndex((item) => item.id === id);
    if (basketIndex >= 0) {
      let _basketItems = [...basketItems];
      _basketItems[basketIndex].count += 1;
      setBasketItems(_basketItems);
    } else {
      setBasketItems([...basketItems, { id, name, count: 1 }]);
    }
  };

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
          <Button onClick={open}>
            <IconShoppingCart size={22} />
          </Button>
        </Indicator>
      </Group>

      <SimpleGrid cols={3} className="Store">
        {filteredItems.map(({ id, name, src }) => {
          return (
            <Card
              key={name}
              src={src}
              name={name}
              onAdd={() => addToBasket({ id, name })}
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
          {basketItems.map(({ name, count }, index) => (
            <List.Item key={index}>
              {name}{" "}
              <Badge variant="light" color="blue">
                {count}
              </Badge>
            </List.Item>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}

export default App;
