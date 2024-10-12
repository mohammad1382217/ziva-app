import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { PhoneCallingRounded, QuestionCircle } from "solar-icon-set";
import ButtonZiva from "../../ButtonZiva";

const SidebarDocs = () => {
  return (
    <Flex
      className="rounded-[16px] shadow-[0_16px_40px_-16px_rgba(241,245,249,1)] bg-opacity-20"
      justify="center"
      direction="column"
      align="center"
      bg={"white"}
      padding="1rem"
      marginBottom={10}
      position="relative"
      backgroundImage={`url('/help-card-noBG.webp')`}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
    >
      <Flex direction="column" mb="12px" align="start" justify="start">
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
          <QuestionCircle
            iconStyle="Bold"
            color="white"
            width="60px"
            height="60px"
            className="z-50"
          />
        </Flex>
        <Text
          fontSize={{ base: "lg", xl: "18px" }}
          color="gray.800"
          fontWeight="bold"
          lineHeight="150%"
          textAlign="center"
          mb="8px"
        >
          کمک می‌خواهید؟
        </Text>
        <Text fontSize={{ base: "0.6rem" }} color="gray.800" mb="16px" textAlign="start">
          در صورت نیاز، با پشتیبانی زیوا، تماس بگیرید
        </Text>
      </Flex>
      <Link href="https://horizon-ui.com/pro">
        <ButtonZiva
          type={"button"}
          rightIcon={
            <PhoneCallingRounded
              iconStyle="Bold"
              width="16px"
              height="16px"
              color="#FF9866"
            />
          }
          buttonText="6789 345 0912"
          buttonTextClassName="text-orange-500 text-base font-semibold"
          theme="default"
        />
      </Link>
    </Flex>
  );
};

export default SidebarDocs;