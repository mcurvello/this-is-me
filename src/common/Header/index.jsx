import { HStack, Image, Text } from "native-base";

import Logo from "../../assets/images/this-is-me-logo.png";

const menu = [
  {
    id: 1,
    page: "HOME",
  },
  {
    id: 2,
    page: "SOBRE MIM",
  },
  {
    id: 3,
    page: "CONTATO",
  },
  {
    id: 4,
    page: "EXPERIÊNCIAS",
  },
  {
    id: 5,
    page: "FORMAÇÃO",
  },
];

export default function Header() {
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
          <Text fontFamily="menu" fontSize="xs" fontWeight="bold" ml={8}>
            {item.page}
          </Text>
        ))}
      </HStack>
    </HStack>
  );
}
