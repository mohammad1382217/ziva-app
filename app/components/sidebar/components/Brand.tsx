// Chakra imports
import { Box, Center, Flex, MenuButton, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../assests/magicpattern-mesh-gradient-1717062120559.webp";

export const SidebarBrand = () => {
  //   Chakra color mode
  let logoColor = useColorModeValue("brand.700", "white");

  return (
    <Flex alignItems="center" overflow={"hidden"} px="20px">
      <Box p="0px" style={{ position: "relative" }}>
        <Box
          _hover={{ cursor: "pointer" }}
          color="white"
          bg="#11047A"
          w="40px"
          h="40px"
          borderRadius={"50%"}
					overflow={"hidden"}
        />
        <Center top={0} left={0} position={"absolute"} w={"100%"} h={"100%"} overflow={"hidden"} borderRadius={"50%"}>
          <Image src={logo} alt={"logo"} />
        </Center>
      </Box>
      <Box h="26px" w="175px" my="32px" mr="8px" color={logoColor}>
        <span className="font-bold text-xl">زیوا</span>
      </Box>
    </Flex>
  );
};

export default SidebarBrand;