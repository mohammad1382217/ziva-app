import ButtonZiva from "./Button";
import InputZiva from "./input";

const LoginForm: React.FC = () => {
  
  const handleSubmit = async (formData: FormData) => {
    "use server";
    const phone_number = formData.get("phone_number");
    console.log("phone_number:", phone_number);
  };

  return (
    <form
      action={handleSubmit}
      className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] max-w-[90%] h-auto grid items-center justify-center gap-8 bg-gradient-to-r from-white/90 to-white/80 bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-lg p-6"
    >
      <section className="grid gap-4">
        <h1 className="text-2xl text-center font-bold text-gray-900">
          ورود | ثبت نام
        </h1>
        <h2 className="text-lg text-center font-normal text-gray-500">
          برای ادامه، شماره موبایل خود را وارد کنید{" "}
        </h2>
      </section>
      <section className="grid gap-8">
        <InputZiva
          name="phone_number"
          label="شماره موبایل"
          type="text"
          classNames={{ inputWrapper: "w-full min-w-[116px]" }}
        />
        <div className="grid gap-4">
          <ButtonZiva
            className="font-semibold"
            buttonText={"تایید و دریافت کد"}
            type={"submit"}
          />
          <p
            lang="fa"
            role="text"
            className="text-center text-gray-500 font-normal"
          >
            ورود شما به معنای پذیرش{" "}
            <span className="text-blue-500">شرایط زیوا</span> و{" "}
            <span className="text-blue-500"> قوانین حریم خصوصی</span> است
          </p>
        </div>
      </section>
    </form>
  );
};

export default LoginForm;