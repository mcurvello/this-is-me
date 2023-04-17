import { Button, HStack, Image, Text } from "native-base";

import Logo from "../../assets/images/this-is-me-logo.png";
import { useEffect, useState } from "react";

const menu = [
  {
    id: 1,
    page: "HOME",
    route: "/",
  },
  {
    id: 2,
    page: "SOBRE MIM",
    route: "/about-me",
  },
  {
    id: 3,
    page: "CONTATO",
    route: "/contact",
  },
  {
    id: 4,
    page: "EXPERIÊNCIAS",
    route: "/experiences",
  },
  {
    id: 5,
    page: "FORMAÇÃO",
    route: "/education",
  },
];

export default function Header() {
  const [activePage, setActivePage] = useState(menu[0]);
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname);
    const page = menu.find((item) => item.route.includes(path));
    if (page) {
      setActivePage(page);
    }
  }, [path]);

  const handleClick = (page) => {
    setActivePage(page);
  };

  return (
    <HStack
      w="100%"
      alignItems="center"
      justifyContent="space-between"
      pl={24}
      pr={24}
    >
      <Image source={Logo} alt="logo" size="xl" resizeMode="contain" />
      <HStack>
        {menu.map((item) => (
          <Button onPress={() => handleClick(item)}>
            <Text
              fontFamily="menu"
              fontSize="xs"
              fontWeight="bold"
              href={item.route}
              color={activePage.id === item.id ? "primary" : "black"}
            >
              {item.page}
            </Text>
          </Button>
        ))}
      </HStack>
    </HStack>
  );
}
