import { HStack, VStack } from "native-base";
import Card from "../../components/Card";
import Title from "../../components/Title";

export default function Education() {
  return (
    <VStack alignItems="center">
      <Title>Formação</Title>
      <HStack pl={32} pr={32} flexWrap="wrap" justifyContent="center">
        <Card item1="Curso" item2="Instituição" item3="Duração" />
        <Card item1="Curso" item2="Instituição" item3="Duração" />
        <Card item1="Curso" item2="Instituição" item3="Duração" />
        <Card item1="Curso" item2="Instituição" item3="Duração" />
        <Card item1="Curso" item2="Instituição" item3="Duração" />
        <Card item1="Curso" item2="Instituição" item3="Duração" />
      </HStack>
    </VStack>
  );
}
