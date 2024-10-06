import Link from "next/link";
import { IRoute } from "../../../types/navigation";
import { usePathname } from "next/navigation";
import { HStack, Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

interface SidebarLinksProps {
  routes: IRoute[];
}

export function SidebarLinks({ routes }: SidebarLinksProps) {
  const pathname = usePathname();

  const createLinks = (routes: IRoute[]) => {
    return routes.map((route, index: number) => {
      const isActive = pathname === `${route.layout}${route.path}`;

      return (
        <Link key={index} href={route.layout + route.path}>
          <Box
            borderRadius={isActive ? "xl" : "none"}
            alignItems="center"
            justifyItems="center"
          >
            <HStack spacing={isActive ? "22px" : "26px"} py="8px" ps="10px">
              <Flex
                w="100%"
                alignItems="center"
                justifyContent="center"
                bg={isActive ? "white" : "inherit"}
              >
                <Box
                  me="18px"
                  p={"2"}
                  borderRadius="xl"
                  bg={isActive ? "#ff5400" : "white"}
                  w="8"
                  h="8"
                >
                  {isActive ? route.activeIcon : route.icon}
                </Box>
                <Text
                  me="auto"
                  color={isActive ? "gray.800" : "slategrey"}
                  fontWeight={isActive ? "bold" : "normal"}
                >
                  {route.name}
                </Text>
              </Flex>
            </HStack>
          </Box>
        </Link>
      );
    });
  };

  return <>{createLinks(routes)}</>;
}

export default SidebarLinks;