import { Badge, Box, Image, VStack } from "native-base";
import Contact from "../../screens/Contact";
import Skills from "../../components/Skills";
import Experience from "../../screens/Experience";
import Education from "../../screens/Education";
import Download from "../../components/Download";
import AboutMe from "../AboutMe";
import Title from "../../components/Title";
import Photo from "../../assets/images/unsplash_a19OVaa2rzA.png";

export default function Home() {
  return (
    <VStack>
      <VStack alignItems="center" mb={12}>
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
      <AboutMe />
      <Box mb={16} />
      <Contact />
      <Skills />
      <Box mb={16} />
      <Experience />
      <Box mb={16} />
      <Education />
      <Download />
    </VStack>
  );
}
