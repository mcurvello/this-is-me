import { HStack, VStack } from "native-base";
import Title from "../Title";
import Separator from "../Divider";
import ProgressCard from "../ProgressCard";

export default function Skills() {
  return (
    <VStack mt={24} alignItems="center">
      <Separator left={-100} w={200} />
      <Title>Habilidades</Title>
      <HStack mt={10} flexWrap="wrap" justifyContent="center">
        <ProgressCard value={4.0} label="Adobe PhotoShop" />
        <ProgressCard value={4.8} label="Microsoft Excel" />
        <ProgressCard value={3.1} label="Microsoft Word " />
        <ProgressCard value={4.7} label="Figma" />
      </HStack>
    </VStack>
  );
}
