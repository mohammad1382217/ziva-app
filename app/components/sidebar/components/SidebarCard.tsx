import {
  Button,
  Flex,
  Link,
  Text,
} from '@chakra-ui/react';
import { PhoneCallingRounded, QuestionCircle } from 'solar-icon-set';

const SidebarDocs = () => {

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
          w="34px"
          h="34px"
          align="center"
          justify="center"
          mb={4}
        >
          <QuestionCircle iconStyle="Bold" color="white" width="60px" height="60px" className='z-50'/>
        </Flex>
        <Text
          fontSize={{ base: 'lg', xl: '18px' }}
          color="gray.800"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          mb="8px"
        >
          کمک می‌خواهید؟
        </Text>
        <Text
          fontSize={{ base: 'xs'}}
          color="gray.800"
          mb="16px"
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
          color="transparent"
          fontWeight="semibold"
          fontSize="base"
          minW="185px"
          height={"32px"}
          mx="auto"
          gap={"6px"}
          w="16px"
          h="16px"
          p={4}
        >
          <PhoneCallingRounded iconStyle='Outline' width="16px" height="16px" color="#FF9866" />
          <span className='text-orange-500'>6789 345 0912</span>
        </Button>
      </Link>
    </Flex>
  );
}

export default SidebarDocs;