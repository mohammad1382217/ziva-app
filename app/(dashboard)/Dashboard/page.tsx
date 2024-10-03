"use client";

import Image from "next/image";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import bg_login from "../../assests/RectangleLoginPage.webp";
import ImageCard from "../../components/rtl/components/ImageCard";
import ComplexTable from "../../components/rtl/components/ComplexTable";
import Tasks from "../../components/rtl/components/Information";
import tableDataCheck from "../../components/rtl/variables/tableDataCheck";
import tableDataComplex from "../../components/rtl/variables/tableDataComplex";
import { SmileSquare } from "solar-icon-set";

export const UserReports = () => {
  const tableDataComplex = [{ name: "استخر الف" }, { name: "استخر ب" }];

  const columnsConfig = [
    { accessor: "name", header: "نام", isImage: true }, // ستونی با عکس
    { accessor: "status", header: "وضعیت", isStatus: true }, // ستونی با آیکون مشاهده
  ];

  return (
    <Box pt={{ base: "130px", md: "120px", xl: "120px" }}>
      <SimpleGrid w="100%" columns={{ base: 1, md: 1 }} gap="20px" mb="20px">
        <Box
          p="0px"
          style={{ position: "relative" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            className="flex flex-col gap-[2px] bg-gradient-to-b from-white/70 to-white/80 bg-opacity-20 backdrop-blur-lg"
            _hover={{ cursor: "pointer" }}
            color="white"
            w="90%"
            h="86px"
            padding="16px"
            overflow={"hidden"}
            style={{ position: "relative" }}
            top="150px"
            zIndex="10"
            borderRadius="20px"
            mb="150px"
          >
            <Flex>
              <Flex
                className="bg-blue-200"
                borderRadius="12px"
                w="56px"
                h="56px"
                align="center"
                justify="center"
                mb={4}
              >
                <SmileSquare
                  iconStyle="Outline"
                  color="white"
                  className="z-50 !w-6 !h-6"
                />
              </Flex>
              <Flex flexDirection="column">
                <span className="mr-4 text-gray-900 text-lg font-bold">
                  نام و نام خانوادگی
                </span>
                <span className="mr-4 text-gray-500 text-sm font-normal">
                  6789 345 0912
                </span>
              </Flex>
            </Flex>
          </Box>
          <Box bottom={0} left={0} position={"absolute"} w={"100%"} h={"100%"}>
            <Image
              className="relative top-0 w-full h-[190px] flex flex-col self-start rounded-3xl"
              src={bg_login}
              alt={"bg_login"}
              width={1392}
              height={190}
            />
          </Box>
        </Box>
      </SimpleGrid>
      <SimpleGrid columns={{ base: 1, md: 1, xl: 1 }} gap="20px" mb="20px">
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap="20px">
          <ImageCard />
          <ComplexTable
            tableData={tableDataComplex}
            HeaderText="استخر های مورد علاقه"
            columnsConfig={columnsConfig}
            showImage={true}
          />
          <Tasks />
        </SimpleGrid>
      </SimpleGrid>
    </Box>
  );
};

export default UserReports;
