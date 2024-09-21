import ButtonZiva from "./Button";
import InputZiva from "./input";
import InputDate from "./inputDate";
import RadioGroupZiva from "./RadioGroup";

const SignUpForm: React.FC = () => {
  const handleSubmitSignUp = async (formData: FormData) => {
    "use server";
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const birth_date = formData.get("birth_date");

    const SignUp = { first_name, last_name, email, birth_date };
    console.log("SignUp:", SignUp);

    // await fetch(`${baseURL}/api/store/`, {
    //   method: "POST",
    //   body: JSON.stringify(newStores),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${getCookie("accessToken")}`,
    //   },
    // });
  };

  return (
    <form
      action={handleSubmitSignUp}
      className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] max-w-[90%] h-auto grid items-center justify-center gap-8 bg-gradient-to-r from-white/90 to-white/80 bg-opacity-20 backdrop-blur-lg rounded-3xl shadow-lg p-6"
    >
      <section className="grid gap-4">
        <h1 className="text-2xl text-center font-bold text-gray-900">ثبت نام</h1>
        <h2 className="text-lg text-center font-normal text-gray-500">
          برای ساخت حساب، اطلاعات خود را وارد کنید
        </h2>
      </section>
      <section className="grid gap-4">
        <InputZiva
          name="first_name"
          label="نام"
          type="text"
          classNames={{ inputWrapper: "w-full min-w-[116px]" }}
        />
        <InputZiva
          name="last_name"
          label="نام خانوادگی"
          type="text"
          classNames={{ inputWrapper: "w-full min-w-[116px]" }}
        />
        <InputZiva
          name="email"
          label="ایمیل"
          type="text"
          classNames={{ inputWrapper: "w-full min-w-[116px]" }}
        />
        <InputDate name="birth_date" placeholder="تاریخ تولد" />
        <RadioGroupZiva
          label="جنسیت"
          options={[
            { label: "آقا", value: "male" },
            { label: "خانم", value: "female" },
          ]}
        />

        <div className="grid gap-4">
          <ButtonZiva
            className="font-semibold"
            buttonText={"تایید و دریافت کد"}
            type={"submit"}
          />
          <p lang="fa" role="text" className="text-center text-gray-500 font-normal">
            ورود شما به معنای پذیرش <span className="text-blue-500">شرایط زیوا</span> و{" "}
            <span className="text-blue-500"> قوانین حریم خصوصی</span> است
          </p>
        </div>
      </section>
    </form>
  );
};

export default SignUpForm;
