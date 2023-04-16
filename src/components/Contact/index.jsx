import { HStack, VStack } from "native-base";
import Title from "../Title";
import Separator from "../../common/Divider";
import ContactCard from "../../common/ContactCard";

import Address from "../../assets/images/address.png";
import Mail from "../../assets/images/mail.png";
import WhatsApp from "../../assets/images/whatsapp.png";

export default function Contact() {
  return (
    <VStack pr={24} pl={24} mt={24}>
      <VStack alignItems="flex-end">
        <Title>Contato</Title>
        <Separator w="300" mb={10} />
      </VStack>
      <HStack justifyContent="center" alignItems="center" flexWrap="wrap">
        <ContactCard label="São Paulo - SP" source={Address} />
        <ContactCard
          label="roger@email.com"
          backgroundColor="gray.800"
          fontColor="white"
          width={395}
          height={382}
          source={Mail}
        />
        <ContactCard label="(12) 98839-9888" source={WhatsApp} />
      </HStack>
    </VStack>
  );
}
