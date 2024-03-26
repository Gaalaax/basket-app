import { useState } from "react";
import {
  Container,
  SimpleGrid,
  List,
  ThemeIcon,
  rem,
  Input,
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
  let filteredItems = basketItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  return (
    <Container>
      <SimpleGrid cols={3} className="Store">
        {storeItems.map(({ name, src }) => {
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
      <Input.Wrapper label="Search ">
        <Input onChange={(e) => setSearchValue(e.target.value)} />
      </Input.Wrapper>
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
        {filteredItems.map(({ name }, index) => (
          <List.Item key={index}>{name}</List.Item>
        ))}
      </List>
    </Container>
  );
}

export default App;
