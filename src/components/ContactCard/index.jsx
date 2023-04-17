import { Image, Text, VStack } from "native-base";

export default function ContactCard({
  source,
  label,
  fontColor,
  backgroundColor,
  width,
  height,
}) {
  return (
    <VStack
      justifyContent="center"
      alignItems="center"
      backgroundColor={backgroundColor || "gray.400"}
      w={width || 284}
      h={height || 274}
      m={6}
    >
      <Image source={source} size="lg" resizeMode="contain" />
      <Text fontFamily="caption" color={fontColor || "black"}>
        {label}
      </Text>
    </VStack>
  );
}
