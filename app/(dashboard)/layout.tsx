"use client";
// Chakra imports
import { Portal, Box, useDisclosure } from "@chakra-ui/react";
// Layout components
import Navbar from "../components/navbar/NavbarRTL";
import Sidebar from "../components/sidebar/Sidebar";
import RtlProvider from "../components/rtlProvider/RtlProvider";
import { SidebarContext } from "../contexts/SidebarContext";
import { PropsWithChildren, useEffect, useState } from "react";
import routes from "./routes";
import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute,
  isWindowAvailable,
} from "../utils/navigation";

interface RTLLayoutProps extends PropsWithChildren {}

// Custom Chakra theme
const RTLLayout = (props: RTLLayoutProps) => {
  const { children, ...rest } = props;
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);

  useEffect(() => {
    if (!isWindowAvailable()) return;
    window.document.documentElement.dir = "rtl";
  });

  const { onOpen } = useDisclosure();
  return (
    <RtlProvider>
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
            w={{ base: "100%", xl: "calc( 100% - 214px )" }}
            maxWidth={{ base: "100%", xl: "calc( 100% - 214px )" }}
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
                  brandText={getActiveRoute(routes)}
                  secondary={getActiveNavbar(routes)}
                  message={getActiveNavbarText(routes)}
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
        </SidebarContext.Provider>
      </Box>
    </RtlProvider>
  );
};

export default RTLLayout;