import ButtonZiva from "./ButtonZiva";
import InputZiva from "./InputZiva";

const LoginForm: React.FC = () => {
  const handleSubmitLogin = async (formData: FormData) => {
    "use server";
    const phone_number = formData.get("phone_number");
    const phoneNumber = { phone_number };
    console.log("phoneNumber:", phoneNumber);

    // await fetch(`${baseURL}/api/login/`, {
    //   method: "POST",
    //   body: JSON.stringify(phoneNumber),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${getCookie("accessToken")}`,
    //   },
    // });
  };

  return (
    <form
      action={handleSubmitLogin}
      className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] max-w-[90%] h-auto grid items-center justify-center gap-8 bg-gradient-to-br from-white/90 to-white/80 bg-opacity-20 backdrop-blur-xl rounded-3xl shadow-lg p-6"
    >
      <section className="grid gap-4">
        <h1 className="sm-min:text-2xl text-lg text-center font-bold text-slate-900">
          ورود | ثبت نام
        </h1>
        <h2 className="sm-min:text-lg text-sm text-center font-normal text-slate-500">
          برای ادامه، شماره موبایل خود را وارد کنید{" "}
        </h2>
      </section>
      <section className="grid gap-8">
        <InputZiva
          name="phone_number"
          label="شماره موبایل"
          type="text"
          classNames={{
            inputWrapper: "w-full min-w-[116px]",
            label: "text-medium sm-max:text-tiny",
          }}
        />
        <div className="grid gap-4">
          <ButtonZiva
            className="text-lg sm-min:text-xl font-semibold bg-orange-500 hover:bg-orange-600"
            buttonText={"تایید و دریافت کد"}
            type={"submit"}
            color="primary"
          />
          <p
            lang="fa"
            role="text"
            className="sm-min:text-sm text-xs text-center text-slate-500 font-normal"
          >
            ورود شما به معنای پذیرش <span className="text-blue-500">شرایط زیوا</span> و{" "}
            <span className="text-blue-500"> قوانین حریم خصوصی</span> است
          </p>
        </div>
      </section>
    </form>
  );
};

export default LoginForm;
