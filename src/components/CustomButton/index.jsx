import { Button, Text } from "native-base";

export default function CustomButton({ children, ...rest }) {
  return (
    <Button
      backgroundColor="white"
      borderColor="black"
      borderWidth="1"
      w="64"
      {...rest}
    >
      <Text fontFamily="caption">{children}</Text>
    </Button>
  );
}
