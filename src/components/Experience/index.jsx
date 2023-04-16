import { HStack, VStack } from "native-base";
import Title from "../Title";
import Card from "../../common/ Card";

export default function Experience() {
  return (
    <VStack mt={1} p={24} alignItems="center">
      <Title>Experiência Profissional</Title>
      <HStack flexWrap="wrap" justifyContent="center">
        <Card item1="Empresa" item2="Cargo" item3="Período" />
        <Card item1="Empresa" item2="Cargo" item3="Período" />
        <Card item1="Empresa" item2="Cargo" item3="Período" />
        <Card item1="Empresa" item2="Cargo" item3="Período" />
        <Card item1="Empresa" item2="Cargo" item3="Período" />
        <Card item1="Empresa" item2="Cargo" item3="Período" />
      </HStack>
    </VStack>
  );
}
