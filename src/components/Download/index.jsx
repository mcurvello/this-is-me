import { Box, Button, Text } from "native-base";

export default function Download() {
  return (
    <Box
      backgroundColor="primary"
      h={150}
      alignItems="center"
      justifyContent="center"
    >
      <Button
        backgroundColor="white"
        borderColor="black"
        borderWidth="1"
        w="64"
      >
        <Text fontFamily="caption">Baixar Currículo</Text>
      </Button>
    </Box>
  );
}
