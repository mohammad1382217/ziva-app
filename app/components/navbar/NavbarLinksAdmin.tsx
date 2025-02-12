"use client";
// Chakra Imports
import {
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom Components
import ItemContent from "../../components/menu/ItemContent";
import { SidebarResponsive } from "../../components/sidebar/Sidebar";
import { Bell, SmileSquare } from "solar-icon-set";
import routes from "../../(dashboard)/routes";

const HeaderLinks = (props: {
  secondary: boolean;
  onOpen: boolean | any;
  fixed: boolean | any;
}) => {
  const { secondary } = props;
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.700", "brand.400");
  const shadow = useColorModeValue(
    "14px 17px 40px 4px rgba(112, 144, 176, 0.18)",
    "14px 17px 40px 4px rgba(112, 144, 176, 0.06)",
  );

  return (
    <Flex
      w={{ sm: "auto" }}
      alignItems="center"
      justifyContent="center"
      flexDirection="row"
      flexWrap={secondary ? { base: "wrap", md: "nowrap" } : "unset"}
      borderRadius="30px"
      px="0"
      p="10px"
      boxShadow={shadow}
    >
      <Menu>
        <MenuButton p="0px" mt="8px">
          <Bell iconStyle="Bold" width={"18px"} height="18px" />
        </MenuButton>
        <MenuList
          boxShadow={shadow}
          p="20px"
          borderRadius="20px"
          bg={"white"}
          border="none"
          mt="22px"
          me={{ base: "30px", md: "unset" }}
          minW={{ base: "unset", md: "400px", xl: "450px" }}
          maxW={{ base: "360px", md: "unset" }}
        >
          <Flex w="100%" mb="20px">
            <Text fontSize="md" fontWeight="600" color={textColor}>
              Notifications
            </Text>
            <Text
              fontSize="sm"
              fontWeight="500"
              color={textColorBrand}
              ms="auto"
              cursor="pointer"
            >
              Mark all read
            </Text>
          </Flex>
          <Flex flexDirection="column">
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              <ItemContent info="Horizon UI Dashboard PRO" />
            </MenuItem>
            <MenuItem
              _hover={{ bg: "none" }}
              _focus={{ bg: "none" }}
              px="0"
              borderRadius="8px"
              mb="10px"
            >
              <ItemContent info="Horizon Design System Free" />
            </MenuItem>
          </Flex>
        </MenuList>
      </Menu>
      <Flex align="center" justify="center" gap="16px">
        <Flex flexDirection="column">
          <span className="mr-4 text-slate-900 text-lg font-bold">
            نام و نام خانوادگی
          </span>
        </Flex>
        <Flex
          className="bg-blue-200"
          borderRadius="12px"
          w="56px"
          h="56px"
          align="center"
          justify="center"
        >
          <SmileSquare iconStyle="Outline" color="white" className="z-50 !w-6 !h-6" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderLinks;
