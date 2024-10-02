"use client"

import React from "react";
import ButtonZiva from "./ButtonZiva";
import OtpInput from "react-otp-input/lib/index";

const OtpValid: React.FC = () => {
  const [otp, setotp] = React.useState("")

  const handleOtpChange = (otp: string) => {
    setotp(otp);
    console.log(otp);
  };

  return (
    <form className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] max-w-[90%] h-auto grid items-center justify-center gap-8 bg-gradient-to-br from-white/90 to-white/80 bg-opacity-20 backdrop-blur-xl rounded-3xl shadow-lg p-6">
      <section className="grid gap-4">
        <h1 className="sm-min:text-2xl text-lg text-center font-bold text-gray-900">
          اعتبار سنجی
        </h1>
        <h2 className="sm-min:text-lg text-sm text-center font-normal text-gray-500">
          کد ارسال شده به 0912 345 6789 را وارد کنید
        </h2>
        <section className="grid gap-2">
          <p className="sm-min:text-lg text-sm text-center font-normal text-gray-500">
            شماره اشتباه است؟
            <span className="text-blue-500 mr-2">اصلاح شماره موبایل</span>
          </p>
        </section>
      </section>

      <section className="flex justify-between gap-6">
        <OtpInput
          value={otp}
          inputType="tel"
          onChange={handleOtpChange}
          numInputs={4}
          inputStyle={
            "!w-20 !h-20 sm-max:!w-14 sm-max:!h-14 xs-max:!w-12 xs-max:!h-12 border border-gray-300 rounded-lg"
          }
          containerStyle={
            "w-full justify-between flex-row-reverse text-center text-2xl font-bold text-gray-700 gap-6"
          }
          renderInput={(props) => <input {...props} />}
          shouldAutoFocus
        />
      </section>

      <section className="grid">
        <ButtonZiva
          className="text-lg sm-min:text-xl font-semibold bg-orange-500 hover:bg-orange-600"
          buttonText={"تایید و ادامه"}
          type={"submit"}
        />
      </section>
    </form>
  );
};

export default OtpValid;