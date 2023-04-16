import { HStack, VStack } from "native-base";
import Title from "../Title";
import Card from "../../common/ Card";

export default function Education() {
  return (
    <VStack pr={24} pl={24} alignItems="center">
      <Title>Formação</Title>
      <HStack flexWrap="wrap" justifyContent="center">
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
