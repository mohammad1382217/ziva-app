import ButtonZiva from "@/app/components/ButtonZiva";
import InputDate from "@/app/components/inputDate";
import InputZiva from "@/app/components/InputZiva";
import RadioGroupZiva from "@/app/components/RadioGroup";
import { HSeparator } from "@/app/components/separator/Separator";
import { Box, Card, Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { Unread, SmileSquare } from "solar-icon-set";

const Account = (props: { [x: string]: any }) => {
  const { ...rest } = props;
  return (
    <Box pt={{ base: "130px", md: "120px", xl: "120px" }}>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
          <Card p="20px" alignItems="start" flexDirection="column" w="100%" {...rest}>
            <Flex alignItems="center" justifyContent="space-between" w="100%" mb="30px">
              <Text color={"ff5400"} fontSize="lg" fontWeight="700" className="w-[145px]">
                اطلاعات فردی
              </Text>
              <HSeparator />
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px" w="100%">
              <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
                <InputZiva
                  name="first_name"
                  size="sm"
                  variant="bordered"
                  label="نام"
                  type="text"
                  classNames={{
                    inputWrapper: "w-full min-w-[116px]",
                    label: "text-medium sm-max:text-tiny",
                  }}
                />
                <InputZiva
                  name="last_name"
                  size="sm"
                  variant="bordered"
                  label="نام و نام خانوادگی"
                  type="text"
                  classNames={{
                    inputWrapper: "w-full min-w-[116px]",
                    label: "text-medium sm-max:text-tiny",
                  }}
                />
              </SimpleGrid>
              <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" w="100%">
                <InputZiva
                  name="phone_number"
                  size="sm"
                  variant="bordered"
                  label="شماره موبایل"
                  type="text"
                  classNames={{
                    inputWrapper: "w-full min-w-[116px]",
                    label: "text-medium sm-max:text-tiny",
                  }}
                />
                <InputDate
                  name="birth_date"
                  size="sm"
                  variant="bordered"
                  placeholder="تاریخ تولد"
                  className=""
                />
              </SimpleGrid>
              <SimpleGrid
                columns={{ base: 1, md: 2, xl: 2 }}
                gap="20px"
                w="100%"
                alignItems="center"
              >
                <InputZiva
                  name="email"
                  size="sm"
                  variant="bordered"
                  label="ایمیل"
                  type="text"
                  classNames={{
                    inputWrapper: "w-full min-w-[116px] ",
                    label: "text-medium sm-max:text-tiny",
                  }}
                />
                <RadioGroupZiva
                  label="جنسیت:"
                  name="gender"
                  options={[
                    { label: "آقا", value: "male" },
                    { label: "خانم", value: "female" },
                  ]}
                />
              </SimpleGrid>
              <SimpleGrid
                columns={{ base: 1 }}
                gap="20px"
                w="100%"
                alignItems="center"
                justifyItems="flex-end"
              >
                <ButtonZiva
                  buttonText="ذخیره"
                  type="button"
                  className={`w-32 sm-max:w-full h-11 font-semibold text-sm bg-orange-500 hover:bg-orange-600`}
                  leftIcon={<Unread color={"white"} height={20} width={20} />}
                />
              </SimpleGrid>
            </SimpleGrid>
          </Card>
          <Card p="20px" alignItems="start" flexDirection="column" w="100%" {...rest}>
            <Flex alignItems="center" justifyContent="space-between" w="100%" mb="30px">
              <Text color={"ff5400"} fontSize="lg" fontWeight="700" className="w-[165px]">
                تصویر پروفایل
              </Text>
              <HSeparator />
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px" w="100%">
              <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px">
                <Flex align="start" justify="start" gap="16px">
                  <Flex
                    className="bg-blue-200"
                    borderRadius="12px"
                    w="56px"
                    h="56px"
                    align="center"
                    justify="center"
                  >
                    <SmileSquare
                      iconStyle="Outline"
                      color="white"
                      className="z-50 !w-6 !h-6"
                    />
                  </Flex>
                  <Flex flexDirection="column" justifyContent="space-between" h="100%">
                    <span className="mr-4 text-gray-900 text-sm font-bold">
                      ویرایش تصویر
                    </span>
                    <span className="mr-4 text-red-500 text-xs font-bold">
                      حذف تصویر
                    </span>
                  </Flex>
                </Flex>
              </SimpleGrid>
              <SimpleGrid columns={{ base: 1, md: 2, xl: 2 }} gap="20px" w="100%">
                
              </SimpleGrid>
              <SimpleGrid
                columns={{ base: 1 }}
                gap="20px"
                w="100%"
                alignItems="center"
                justifyItems="flex-end"
              >
                <ButtonZiva
                  buttonText="ذخیره"
                  type="button"
                  className={`w-32 sm-max:w-full h-11 font-semibold text-sm bg-orange-500 hover:bg-orange-600`}
                  leftIcon={<Unread color={"white"} height={20} width={20} />}
                />
              </SimpleGrid>
            </SimpleGrid>
          </Card>
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default Account;