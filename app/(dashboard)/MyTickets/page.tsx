import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const MyTickets = () => {
  return (
    <Box pt={{ base: "90px", md: "80px", xl: "80px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px" mb="20px"></SimpleGrid>
    </Box>
  );
};

export default MyTickets;
