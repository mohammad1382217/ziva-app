import Image from "next/image";
import { Input } from "@nextui-org/input";

export default function Home() {
  return (

    <main lang="fa-IR" className="flex text-black min-h-screen  flex-col items-center justify-between p-24">
      {/* <div className="w-[340px]  h-[240px] px-8 rounded-2xl flex-col gap-y-4 flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"> */}
        <Input variant="bordered" dir="rtl" lang="fa" type="text" label="نام و نام خانوادگی" classNames={{
          label: "!self-end mr-0 !origin-top-right",
          input: "text-right mr-1",
          inputWrapper:"w-64",
          innerWrapper:""
        }}>
        </Input>
        <Input variant="faded" dir="rtl" lang="fa" type="text" label="نام و نام خانوادگی" classNames={{
          label: "!self-end mr-0 !origin-top-right",
          input: "text-right mr-1",
          inputWrapper:"w-64",
          innerWrapper:""
        }}>
        </Input>
        <Input variant="flat" dir="rtl" lang="fa" type="text" label="نام و نام خانوادگی" classNames={{
          label: "!self-end mr-0 !origin-top-right",
          input: "text-right mr-1",
          inputWrapper:"w-64",
          innerWrapper:""
        }}>
        </Input>
        <Input variant="underlined" dir="rtl" lang="fa" type="text" label="نام و نام خانوادگی" classNames={{
          label: "!self-end mr-0 !origin-top-right",
          input: "text-right mr-1",
          inputWrapper:"w-64",
          innerWrapper:""
        }}>
        </Input>
      {/* </div> */}
    </main>
  );
}
