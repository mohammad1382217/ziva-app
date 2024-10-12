"use client";

import Image from "next/image";
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import bg_login from "../../../public/RectangleLoginPage.webp";
import ImageCard from "../../components/rtl/components/ImageCard";
import ComplexTable from "../../components/rtl/components/ComplexTable";
import Tasks from "../../components/rtl/components/Information";
import { Logout, SmileSquare } from "solar-icon-set";

export const UserReports = () => {
  const tableDataComplex = [{ name: "استخر الف" }, { name: "استخر ب" }];

  const columnsConfig = [
    { accessor: "name", header: "نام", isImage: true }, // ستونی با عکس
    { accessor: "status", header: "وضعیت", isStatus: true }, // ستونی با آیکون مشاهده
  ];

  return (
    <Box pt={{ base: "90px", md: "80px", xl: "80px" }}>
      <SimpleGrid w="100%" columns={{ base: 1, md: 1 }} gap="20px" mb="20px">
        <Box
          p="0px"
          style={{ position: "relative" }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            className="flex sm-max:flex-col bg-gradient-to-b from-white/70 to-white/80 bg-opacity-20 backdrop-blur-lg justify-between sm-max:justify-center sm-max:gap-5"
            _hover={{ cursor: "pointer" }}
            alignItems="center"
            color="white"
            w="90%"
            h={{ base: "86px", sm: "auto" }}
            padding="16px"
            overflow={"hidden"}
            style={{ position: "relative" }}
            top="150px"
            zIndex="10"
            borderRadius="20px"
            mb="150px"
          >
            <Flex
              flexDirection={{ sm: "column", lg: "row" }}
              alignItems="center"
              className="gap-6 sm-max:gap-4"
            >
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
              <Flex flexDirection="column" gap="2px" className="items-start sm-max:items-center">
                <span className="text-slate-900 text-lg font-bold">
                  نام و نام خانوادگی
                </span>
                <span className="text-slate-500 text-sm font-normal">
                  6789 345 0912
                </span>
              </Flex>
            </Flex>
            <Flex alignItems="center" gap={1}>
              <Flex flexDirection="column" alignItems="center">
                <span className="mr-4 text-[#F04438] text-sm font-semibold">
                  خروج از حساب
                </span>
              </Flex>
              <Flex borderRadius="12px" alignItems="center" justifyContent="center">
                <Logout
                  iconStyle="Outline"
                  color="#F04438"
                  className="z-50 !w-3.5 !h-3.5"
                />
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
