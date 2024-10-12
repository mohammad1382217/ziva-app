import Card from "@/app/components/Card";
import { Box, SimpleGrid } from "@chakra-ui/react";

const MyFavorite = () => {
  return (
    <Box pt={{ base: "90px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap="20px"
        mb="20px"
        alignItems={{ sm: "center", md: "flex-start" }}
      >
        <Card
          rate={0}
          like={false}
          discount={""}
          name={""}
          location={""}
          price={""}
          navigate={"/"}
        />
        <Card
          rate={0}
          like={false}
          discount={""}
          name={""}
          location={""}
          price={""}
          navigate={"/"}
        />
        <Card
          rate={0}
          like={false}
          discount={""}
          name={""}
          location={""}
          price={""}
          navigate={"/"}
        />
        <Card
          rate={0}
          like={false}
          discount={""}
          name={""}
          location={""}
          price={""}
          navigate={"/"}
        />
        <Card
          rate={0}
          like={false}
          discount={""}
          name={""}
          location={""}
          price={""}
          navigate={"/"}
        />
        <Card
          rate={0}
          like={false}
          discount={""}
          name={""}
          location={""}
          price={""}
          navigate={"/"}
        />
        <Card
          rate={0}
          like={false}
          discount={""}
          name={""}
          location={""}
          price={""}
          navigate={"/"}
        />
        <Card
          rate={0}
          like={false}
          discount={""}
          name={""}
          location={""}
          price={""}
          navigate={"/"}
        />
      </SimpleGrid>
    </Box>
  );
};

export default MyFavorite;