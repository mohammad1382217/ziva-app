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
      className="z-10 w-[440px] max-w-[90%] h-auto grid items-center bg-gradient-f-90-f-8045 bg-opacity-20 backdrop-blur-xl border-2 border-solid border-white rounded-2xl shadow-lg"
    >
      <div className="w-full h-auto grid gap-8 items-center p-6 sm-max:p-4">
        <section className="grid gap-4">
          <h1 className="sm-min:text-2xl text-lg text-center font-bold text-slate-900">
            ورود | ثبت نام
          </h1>
          <h2 className="sm-min:text-lg text-sm text-center font-normal text-slate-500">
            برای ادامه، شماره موبایل خود را وارد کنید{" "}
          </h2>
        </section>
        <section className="grid gap-6">
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
              theme="default"
            />
            <p
              lang="fa"
              role="text"
              className="text-sm font-semibold text-center text-slate-500"
            >
              ورود شما به معنای پذیرش <span className="text-blue-500">شرایط زیوا</span> و{" "}
              <span className="text-blue-500"> قوانین حریم خصوصی</span> است
            </p>
          </div>
        </section>
      </div>
    </form>
  );
};

export default LoginForm;
