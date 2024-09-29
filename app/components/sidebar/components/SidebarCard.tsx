import {
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { QuestionCircle } from 'solar-icon-set';

export default function SidebarDocs() {
  const borderColor = useColorModeValue('white', 'navy.800');

  return (
    <Flex
      justify="center"
      direction="column"
      align="center"
      bg={"white"}
      borderRadius="30px"
      padding="1rem"
      me="20px"
      position="relative"
    >
      <Flex
        direction="column"
        mb="12px"
        align="start"
        justify="start"
      >
        <Flex
          border="5px solid"
          borderColor={"#ff5400"}
          bg={"#ff5400"}
          borderRadius="12px"
          w="26px"
          h="26px"
          align="start"
          justify="center"
          mb={4}
        >
          <QuestionCircle iconStyle="Bold" color="white" width="60px" height="60px" />
        </Flex>
        <Text
          fontSize={{ base: 'lg', xl: '18px' }}
          color="gray.800"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          mb="14px"
        >
          کمک می‌خواهید؟
        </Text>
        <Text
          fontSize={{ base: 'xs'}}
          color="gray.800"
          mb="14px"
          textAlign="start"
        >
          در صورت نیاز، با پشتیبانی زیوا، تماس بگیرید
        </Text>
      </Flex>
      <Link href="https://horizon-ui.com/pro">
        <Button
          bg="gray.50"
          _hover={{ bg: 'gray.100' }}
          _active={{ bg: 'gray.200' }}
          mb={{ sm: '16px', xl: '24px' }}
          color="gray.800"
          fontWeight="regular"
          fontSize="sm"
          minW="185px"
          mx="auto"
        >
          0912 345 6789
        </Button>
      </Link>
    </Flex>
  );
}