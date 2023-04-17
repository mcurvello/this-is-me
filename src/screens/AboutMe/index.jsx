import { Text, VStack } from "native-base";

import Title from "../../components/Title";
import Separator from "../../components/Divider";

import CustomButton from "../../components/CustomButton";
import { useAddress } from "../../hooks/useAddress";

export default function AboutMe() {
  const cep = "20230010";
  const { address } = useAddress(cep);

  function handleClick() {
    if (address) {
      alert(
        `ENDEREÇO COMPLETO:\n\nEndereço: ${address.logradouro}\nBairro: ${address.bairro}\nLocalidade: ${address.localidade}\nUF: ${address.uf}`
      );
    } else {
      alert("Não foi possível buscar as informações do endereço.");
    }
  }
  return (
    <VStack pl={24} pr={24}>
      <Separator />
      <Title mb={10}>Sobre mim</Title>
      <CustomButton
        backgroundColor="primary"
        borderWidth="none"
        alignSelf="center"
        onPress={handleClick}
      >
        CEP: {cep}
      </CustomButton>
      <Text
        fontFamily="caption"
        color="gray.800"
        fontSize="14"
        alignSelf="center"
      >
        Clique no botão para visualizar endereço completo
      </Text>
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
