import Card from "@/app/components/Card";
import { Box, SimpleGrid } from "@chakra-ui/react";

const MyFavorite = () => {
  return (
    <Box pt={{ base: "130px", md: "120px", xl: "120px" }}>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px" mb="20px">
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
        <Card rate={0} like={false} discount={""} name={""} location={""} price={""} navigate={"/"} />
      </SimpleGrid>
    </Box>
  );
};

export default MyFavorite;