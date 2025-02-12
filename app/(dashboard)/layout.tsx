"use client";
// Chakra imports
import { Portal, Box, useDisclosure } from "@chakra-ui/react";
// Layout components
import Navbar from "../components/navbar/NavbarRTL";
import Sidebar from "../components/sidebar/Sidebar";
import { SidebarContext } from "../contexts/SidebarContext";
import { PropsWithChildren, useEffect, useState } from "react";
import routes from "./routes";
import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute,
} from "../utils/navigation";
import { usePathname } from "next/navigation";
import ButtonBar from "../components/sidebar/components/ButtonBar";

interface RTLLayoutProps extends PropsWithChildren {}

// Custom Chakra theme
const RTLLayout = (props: RTLLayoutProps) => {
  const { children, ...rest } = props;
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const pathname = usePathname(); // دریافت مسیر فعلی
  const [brandText, setBrandText] = useState<string>("Default Brand Text");
  const [secondaryNavbar, setSecondaryNavbar] = useState<boolean>(false);
  const [message, setMessage] = useState<string | boolean>(false);

  useEffect(() => {
    setBrandText(getActiveRoute(routes, pathname));
    setSecondaryNavbar(getActiveNavbar(routes, pathname));
    setMessage(getActiveNavbarText(routes, pathname));
  }, [pathname]);

  const { onOpen } = useDisclosure();
  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar routes={routes} display="none" {...rest} />
        <Box
          float="left"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc( 100% - 230px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 230px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
          bg={"#F8FAFC"}
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={"زیوا"}
                brandText={brandText}
                secondary={secondaryNavbar}
                message={message}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          <Box
            mx="auto"
            p={{ base: "20px", md: "80px" }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
            {children}
          </Box>
        </Box>
        <ButtonBar routes={routes} />
      </SidebarContext.Provider>
    </Box>
  );
};

export default RTLLayout;
