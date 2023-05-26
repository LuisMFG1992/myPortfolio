import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      color="white"
      bg="color.2"
      px="4"
      justifyItems={{ base: "center" }}
      alignItems="center"
      w="100%"
      minH="20"
      gap="4"
    >
      <GridItem colSpan={{ base: 3, md: 1 }}>
        <HStack fontSize="24" fontWeight="bold">
          <Text>Luis</Text>
          <Text color="color.1">Flores</Text>
        </HStack>
      </GridItem>
      <GridItem colSpan={{ base: 3, md: 1 }}>
        <Text textAlign="center">Copyright © 2023. All rights reserved.</Text>
      </GridItem>
      <GridItem colSpan={{ base: 3, md: 1 }}>
        <HStack gap="4">
          <Image src={github} cursor="pointer" boxSize="8" />
          <Image src={linkedin} cursor="pointer" boxSize="8" />
          <Image src={twitter} cursor="pointer" boxSize="8" />
          <Image src={instagram} cursor="pointer" boxSize="8" />
        </HStack>
      </GridItem>
    </Grid>
  );
};

export default Footer;
