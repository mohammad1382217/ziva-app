import React from "react";
import InputZiva from "./input";
import ButtonZiva from "./Button";

const OtpValid: React.FC = () => {
  // تابع سرور برای پردازش کد OTP
  const handleSubmitLogin = async (formData: FormData) => {
    "use server"; // نشان‌دهنده اینکه این یک اکشن سرور است
    const otpCode = Array.from(formData.values()).reverse().join(""); // ترکیب مقادیر ورودی به یک رشته
    console.log(otpCode)

    // // انجام درخواست به API
    // const response = await fetch(`/api/validate-otp`, {
    //   method: "POST",
    //   body: JSON.stringify({ otpCode }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });

    // if (response.ok) {
    //   const result = await response.json();
    //   console.log(result.message); // پیام موفقیت
    // } else {
    //   console.error("Error validating OTP");
    // }
  };

  return (
    <form
      action={handleSubmitLogin}
      className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] max-w-[90%] h-auto grid items-center justify-center gap-8 bg-gradient-to-r from-white/90 to-white/80 bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-lg p-6"
    >
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

      <section className="grid grid-cols-4 gap-6 justify-center">
        {/* ایجاد چهار ورودی برای OTP */}
        {[...Array(4)].map((_, index) => (
          <InputZiva
            key={index}
            name={`otp-${index}`} // نام منحصر به فرد برای هر ورودی
            type="text"
            maxLength={1}
            classNames={{
              inputWrapper: "w-20 h-20 sm-max:w-14 sm-max:h-14 border border-gray-300 rounded-lg",
              input: "text-center text-2xl font-bold text-gray-700",
              label: "hidden",
            }}
          />
        ))}
      </section>

      <section className="grid gap-4">
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