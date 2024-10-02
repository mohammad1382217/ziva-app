import {
  Box,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import Card from "../../../components/card/Card";
import * as React from "react";
import Image from "next/image";
import { Reply2 } from "solar-icon-set";
import Poll from "../../../assests/Rectangle 2491.png";
import { HSeparator } from "../../separator/Separator";

type RowObj = {
  name: string;
  status: string;
  date: string;
  progress: number;
};

const columnHelper = createColumnHelper<RowObj>();

export default function ComplexTable(props: { tableData: any; HeaderText: string }) {
  const { tableData, HeaderText } = props;
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");

  const columns = [
    columnHelper.accessor("name", {
      id: "name",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          نام
        </Text>
      ),
      cell: (info: any) => (
        <Flex align="center" gap="8px">
          <Image
            className="relative top-0 w-[60px] h-[45px] flex flex-col self-start rounded-lg"
            src={Poll}
            alt={"Poll"}
            width={60}
            height={45}
          />
          {/* Check if the data is loading and show a skeleton if true */}
          {tableData.length === 0 ? (
            <Flex width={100} />
          ) : (
            <Text color={textColor} fontSize="sm" fontWeight="700">
              {info.getValue()}
            </Text>
          )}
        </Flex>
      ),
    }),
    columnHelper.accessor("status", {
      id: "status",
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          وضعیت
        </Text>
      ),
      cell: () => (
        <Flex align="center" gap="4px" justifyContent="flex-end" px="14px">
          <Text color={"#ff5400"} fontSize="x-small" fontWeight="700">
            مشاهده
          </Text>
          <Reply2 size={14} iconStyle="Outline" color="#ff5400" />
        </Flex>
      ),
    }),
  ];

  const [data] = React.useState(() => [...tableData]);

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true,
  });

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}
    >
      <Flex
        px="25px"
        mb="8px"
        flexDirection="column"
        justifyContent="space-between"
        align="start"
        gap="10px"
      >
        <Text color={textColor} fontSize="18px" fontWeight="700" lineHeight="100%">
          {HeaderText}
        </Text>
        <HSeparator />
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Tbody>
            {table.getRowModel().rows.slice(0, 5).map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td
                    py="10px"
                    key={cell.id}
                    fontSize={{ sm: "14px" }}
                    minW={{ sm: "150px", md: "200px", lg: "auto" }}
                    borderColor="transparent"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Card>
  );
}