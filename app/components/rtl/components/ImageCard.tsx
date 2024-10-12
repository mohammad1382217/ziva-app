import React from "react";
import Image from "next/image";
import Card from "../../card/Card";
import { Box, Flex } from "@chakra-ui/react";
import imageCard from "../../../../public/blue-swimming-pool-rippled-water-detail.webp";
import ButtonZiva from "../../ButtonZiva";
import { Ticket } from "solar-icon-set";

const ImageCard = () => {
  return (
    <Card
      flexDirection="column"
      w="100%"
      h="auto"
      p={1.5}
      position="relative"
      overflow="hidden"
    >
      <Flex justifyContent="space-between" align="center" position="relative">
        <Box position="relative" w="100%" h="300px" overflow="hidden">
          <Image
            src={imageCard}
            alt={"استخر"}
            fill
            className="rounded-2xl"
            style={{ objectFit: "cover" }}
          />
        </Box>
        <Box
          position="absolute"
          bottom="6px" // فاصله از پایین
          left="6px" // فاصله از چپ
          right="6px" // فاصله از راست
          w="calc(100% - 12px)" // عرض باکس با توجه به فاصله‌ها
          h="auto"
          className="flex flex-col gap-[2px] bg-gradient-f-20-f-3080 backdrop-blur-lg"
          _hover={{ cursor: "pointer" }}
          color="white"
          padding="16px"
          zIndex="10"
          borderRadius="12px"
          border="1px solid var(--gradient-f-40-f-5050)"
        >
          <Flex className="justify-between ">
            <Flex flexDirection="column" gap={1}>
              <span className="mr-4 text-slate-100 text-sm font-semibold">
                اولین بلیط پیش‌رو
              </span>
              <span className="mr-4 text-white text-lg font-black">نام استخر</span>
            </Flex>
            <Flex flexDirection="column">
              <ButtonZiva
                buttonText="123456"
                leftIcon={<Ticket />}
                className="text-slate-100 text-sm font-semibold rounded-[7px] !bg-white !bg-opacity-20"
                theme="default"
                type={"button"}
              />
            </Flex>
          </Flex>
        </Box>
      </Flex>
    </Card>
  );
};

export default ImageCard;
