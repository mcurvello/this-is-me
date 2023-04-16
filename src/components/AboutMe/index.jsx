import { Badge, Image, Text, VStack } from "native-base";
import Title from "../Title";
import Separator from "../../common/Divider";

import Photo from "../../assets/images/unsplash_a19OVaa2rzA.png";

export default function AboutMe() {
  return (
    <VStack pl={24} pr={24}>
      <VStack alignItems="center" mb={16}>
        <Image source={Photo} alt="Photo" size={480} resizeMode="contain" />
        <Title fontSize="lg" color="gray.900">
          Roger Machado
        </Title>
        <Badge
          mt={6}
          p={3}
          w={"56"}
          borderLeftColor="primary"
          borderWidth={2}
          _text={{ fontFamily: "heading", fontSize: "xs" }}
        >
          Engenheiro Civil
        </Badge>
      </VStack>
      <Separator />
      <Title>Sobre mim</Title>
      <Text
        fontFamily="body"
        fontSize="sm"
        fontWeight="500"
        letterSpacing="0.1em"
        mt={7}
      >
        Pellentesque sapien. Integer in sapien. Itaque earum rerum hic tenetur a
        sapiente delectus, ut aut reiciendis voluptatibus maiores alias
        consequatur aut perferendis doloribus asperiores repellat. Maecenas
        sollicitudin. Integer malesuada. Nullam lectus justo, vulputate eget
        mollis sed, tempor sed magna. Nullam rhoncus aliquam metus. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
        fugiat nulla pariatur. Fusce suscipit libero eget elit. Aliquam ante.
        Curabitur ligula sapien, pulvinar a vestibulum quis, facilisis vel
        sapien. Cras pede libero, dapibus nec, pretium sit amet, tempor quis.
        Fusce suscipit libero eget elit.
      </Text>
    </VStack>
  );
}
