import { Text } from "native-base";

export default function Title({ children, ...rest }) {
  return (
    <Text
      fontFamily="heading"
      fontSize="xl"
      fontWeight="bold"
      color="black"
      mt={1}
      {...rest}
    >
      {children}
    </Text>
  );
}
