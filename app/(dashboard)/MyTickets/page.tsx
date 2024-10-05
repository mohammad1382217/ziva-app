import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";

const MyTickets = () => {
  return (
    <Box pt={{ base: "130px", md: "120px", xl: "120px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px" mb="20px"></SimpleGrid>
    </Box>
  );
};

export default MyTickets;
