import { Box, Card, Flex, Text, SimpleGrid } from "@chakra-ui/react";

const Account = (props: { [x: string]: any }) => {
  const { ...rest } = props;
  return (
    <Box pt={{ base: "130px", md: "120px", xl: "120px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px">
          <Card p="20px" alignItems="start" flexDirection="column" w="100%" {...rest}>
            <Flex alignItems="center" justifyContent="space-between" w="100%" mb="30px">
              <Text color={"ff5400"} fontSize="lg" fontWeight="700">
                اطلاعات حساب
              </Text>
            </Flex>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default Account;
