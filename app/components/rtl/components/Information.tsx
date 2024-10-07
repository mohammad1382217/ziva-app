import { Box, Flex, Text } from "@chakra-ui/react";
import Card from "../../card/Card";
import { Pen2 } from "solar-icon-set";

const Information: React.FC = () => {
  const userData = {
    fullName: "علی محمدی",
    phoneNumber: "09123456789",
    email: "ali.mohammadi@example.com",
    gender: "مرد",
    birthDate: "1370/01/01",
  };

  const infoFields = [
    { label: "نام و نام خانوادگی", value: userData.fullName },
    { label: "شماره تلفن", value: userData.phoneNumber },
    { label: "ایمیل", value: userData.email },
    { label: "جنسیت", value: userData.gender },
    { label: "تاریخ تولد", value: userData.birthDate },
  ];

  return (
    <Card p="20px" alignItems="start" flexDirection="column" w="100%">
      <Flex alignItems="center" justifyContent="space-between" w="100%" mb="30px">
        <Text className="text-slate-900" fontSize="lg" fontWeight="700">
          اطلاعات حساب
        </Text>
        <Flex gap="2px" alignItems="center" justifyContent="center">
          <Pen2 iconStyle="Outline" width="24px" height="24px" color="#ff5400" />
          <Text
            fontWeight="bold"
            color="#111827"
            fontSize="xs"
            textAlign="start"
            cursor="pointer"
          >
            ویرایش اطلاعات
          </Text>
        </Flex>
      </Flex>
      <Box>
        {infoFields.map((field, index) => (
          <Flex key={index} mb="20px" gap="8px">
            <Text fontWeight="semibold" color="#667085" fontSize="sm" textAlign="start">
              {field.label}:
            </Text>
            <Text fontWeight="medium" fontSize="sm" textAlign="start" color="#98A2B3">
              {field.value}
            </Text>
          </Flex>
        ))}
      </Box>
    </Card>
  );
};

export default Information;
