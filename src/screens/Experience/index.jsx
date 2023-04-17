import { HStack, VStack } from "native-base";
import Title from "../../components/Title";
import Card from "../../components/Card";

export default function Experience() {
  return (
    <VStack alignItems="center">
      <Title>Experiência Profissional</Title>
      <HStack pl={32} pr={32} flexWrap="wrap" justifyContent="center">
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
