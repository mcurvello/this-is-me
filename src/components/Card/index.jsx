import { Text, VStack } from "native-base";

export default function Card({
  item1,
  item2,
  item3,
  fontColor,
  backgroundColor,
}) {
  return (
    <VStack
      justifyContent="center"
      alignItems="flex-start"
      backgroundColor={backgroundColor || "gray.900"}
      w={236}
      h={236}
      m={8}
      pl={8}
    >
      <Text fontFamily="caption" color={fontColor || "white"}>
        {item1}
      </Text>
      <Text fontFamily="caption" color={fontColor || "white"}>
        {item2}
      </Text>
      <Text fontFamily="caption" color={fontColor || "white"}>
        {item3}
      </Text>
    </VStack>
  );
}
