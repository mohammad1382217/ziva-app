import Link from "next/link";
import { usePathname } from "next/navigation";
import { SidebarResponsiveProps } from "../Sidebar";
import { Box, Flex } from "@chakra-ui/react";

const BottomNav = (props: SidebarResponsiveProps) => {
  const pathname = usePathname();
  const { routes } = props;

  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      bgGradient="linear(-80deg, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.8))"
      backdropBlur="5px"
      shadow="lg"
      py={2}
      display={{sm: "block" , xl: "none"}}
    >
      <Flex justify="space-around" maxW="md" mx="auto">
        {routes.map((route, index) => {
          const isActive = pathname === `${route.layout}${route.path}`;

          return (
            <Link key={index} href={route.layout + route.path} passHref>
              <Box
                as="a"
                textAlign="center"
                color={isActive ? "black" : "gray.500"}
                _hover={{ color: "blue.500" }}
                cursor="pointer"
              >
                <Box
                  p={2}
                  bg={isActive ? "#ff5400" : "white"}
                  borderRadius="full"
                  w={8}
                  h={8}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  {isActive ? route.activeIcon : route.icon}
                </Box>
              </Box>
            </Link>
          );
        })}
      </Flex>
    </Box>
  );
};

export default BottomNav;