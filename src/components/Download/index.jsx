import { Box } from "native-base";
import CustomButton from "../CustomButton";

export default function Download() {
  return (
    <Box
      backgroundColor="primary"
      h={150}
      alignItems="center"
      justifyContent="center"
    >
      <CustomButton>Baixar Currículo</CustomButton>
    </Box>
  );
}
