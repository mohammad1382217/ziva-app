// Chakra imports
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Card from '../../../components/card/Card';
// Assets
import { Pen2 } from 'solar-icon-set';

const Conversion = (props: { [x: string]: any }) => {
	const { ...rest } = props;

	// Chakra Color Mode
	const textColor = useColorModeValue('secondaryGray.900', 'white');
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
		<Card p='20px' alignItems='start' flexDirection='column' w='100%' {...rest}>
			<Flex alignItems='center' justifyContent="space-between" w='100%' mb='30px'>
				<Text color={textColor} fontSize='lg' fontWeight='700'>
					اطلاعات حساب
				</Text>
				<Flex gap="2px" alignItems="center" justifyContent="center">
					<Pen2 iconStyle="Outline" width="24px" height="24px" color="#ff5400" />
					<Text fontWeight='bold' color="#111827" fontSize='xs' textAlign='start' cursor="pointer">
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
}

export default Conversion;