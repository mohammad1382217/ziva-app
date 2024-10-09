"use client";

import React from "react";
import ButtonZiva from "./ButtonZiva";
import OtpInput from "react-otp-input/lib/index";

const OtpValid: React.FC = () => {
  const [otp, setotp] = React.useState("");

  const handleOtpChange = (otp: string) => {
    setotp(otp);
    console.log(otp);
  };

  return (
    <form className="z-10 w-[440px] max-w-[90%] h-auto grid items-center bg-gradient-f-90-f-8045 bg-opacity-20 backdrop-blur-xl border-2 border-solid border-white rounded-2xl shadow-lg">
      <div className="w-full h-auto grid gap-8 items-center p-6 sm-max:p-4">
        <section className="grid gap-4">
          <h1 className="sm-min:text-2xl text-lg text-center font-bold text-slate-900">
            اعتبار سنجی
          </h1>
          <section className="grid gap-2">
            <h2 className="sm-min:text-lg text-sm text-center font-normal text-slate-500">
              کد ارسال شده به 0912 345 6789 را وارد کنید
            </h2>
            <p className="sm-min:text-lg text-sm text-center font-normal text-slate-500">
              شماره اشتباه است؟
              <span className="text-blue-500 mr-2">اصلاح شماره موبایل</span>
            </p>
          </section>
        </section>
        <section className="grid gap-6">
          <section className="flex justify-between gap-6">
            <OtpInput
              value={otp}
              inputType="number"
              onChange={handleOtpChange}
              numInputs={4}
              inputStyle={
                "!w-20 !h-20 sm-max:!w-14 sm-max:!h-14 xs-max:!w-12 xs-max:!h-12 border border-slate-300 focus-visible:outline-slate-900 rounded-lg"
              }
              containerStyle={
                "w-full justify-between flex-row-reverse text-center text-2xl font-bold text-slate-700 gap-6"
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
        </section>
      </div>
    </form>
  );
};

export default OtpValid;