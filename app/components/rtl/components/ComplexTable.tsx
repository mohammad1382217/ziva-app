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
  [key: string]: any;
};

type ColumnConfig = {
  accessor: string;
  header: string;
  isImage?: boolean;
  isStatus?: boolean;
};

const columnHelper = createColumnHelper<RowObj>();

export default function ComplexTable({
  tableData,
  HeaderText,
  columnsConfig,
  showImage = true,
}: {
  tableData: any;
  HeaderText: string;
  columnsConfig: ColumnConfig[];
  showImage?: boolean;
}) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");

  // Dynamically build columns based on columnsConfig
  const columns = columnsConfig.map((col) => {
    return columnHelper.accessor(col.accessor, {
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: "10px", lg: "12px" }}
          color="gray.400"
        >
          {col.header}
        </Text>
      ),
      cell: (info: any) => {
        if (col.isImage && showImage) {
          return (
            <Flex align="center" gap="8px">
              <Image
                className="relative top-0 w-[60px] h-[45px] flex flex-col self-start rounded-lg"
                src={Poll}
                alt={"Poll"}
                width={60}
                height={45}
              />
              <Text color={textColor} fontSize="sm" fontWeight="700">
                {info.getValue()}
              </Text>
            </Flex>
          );
        }

        if (col.isStatus) {
          return (
            <Flex
              align="center"
              gap="4px"
              justifyContent="flex-end"
              px="14px"
              cursor="pointer"
            >
              <Text color={"#ff5400"} fontSize="xs" fontWeight="700">
                مشاهده
              </Text>
              <Reply2 size={14} iconStyle="Outline" color="#ff5400" />
            </Flex>
          );
        }

        return (
          <Text color={textColor} fontSize="sm" fontWeight="700">
            {info.getValue()}
          </Text>
        );
      },
    });
  });

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
            {table
              .getRowModel()
              .rows.slice(0, 5)
              .map((row) => (
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