import ButtonZiva from "./ButtonZiva";
import InputZiva from "./InputZiva";
import InputDate from "./inputDate";
import RadioGroupZiva from "./RadioGroup";

const SignUpForm: React.FC = () => {
  const handleSubmitSignUp = async (formData: FormData) => {
    "use server";
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const email = formData.get("email");
    const birth_date = formData.get("birth_date");
    const gender = formData.get("gender");

    const SignUp = { first_name, last_name, email, birth_date, gender };
    console.log("SignUp:", SignUp);

    // await fetch(`${baseURL}/api/SignUp`, {
    //   method: "POST",
    //   body: JSON.stringify(SignUp),
    //   headers: {
    //     "Content-Type": "application/json",
    //     Authorization: `Bearer ${getCookie("accessToken")}`,
    //   },
    // });
  };

  return (
    <form
      action={handleSubmitSignUp}
      className="z-10 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[440px] max-w-[90%] h-auto grid items-center justify-center gap-8 bg-gradient-to-br from-white/90 to-white/80 bg-opacity-20 backdrop-blur-xl rounded-3xl shadow-lg p-6"
    >
      <section className="grid gap-4">
        <h1 className="sm-min:text-2xl text-lg text-center font-bold text-gray-900">
          ثبت نام
        </h1>
        <h2 className="sm-min:text-lg text-sm text-center font-normal text-gray-500">
          برای ساخت حساب، اطلاعات خود را وارد کنید
        </h2>
      </section>
      <section className="grid gap-4">
        <InputZiva
          name="first_name"
          label="نام"
          type="text"
          classNames={{
            inputWrapper: "w-full min-w-[116px]",
            label: "text-medium sm-max:text-tiny",
          }}
        />
        <InputZiva
          name="last_name"
          label="نام خانوادگی"
          type="text"
          classNames={{
            inputWrapper: "w-full min-w-[116px]",
            label: "text-medium sm-max:text-tiny",
          }}
        />
        <InputZiva
          name="email"
          label="ایمیل"
          type="text"
          classNames={{
            inputWrapper: "w-full min-w-[116px]",
            label: "text-medium sm-max:text-tiny",
          }}
        />
        <InputDate name="birth_date" placeholder="تاریخ تولد" />
        <RadioGroupZiva
          label="جنسیت"
          name="gender"
          options={[
            { label: "آقا", value: "male" },
            { label: "خانم", value: "female" },
          ]}
        />

        <div className="grid gap-4">
          <ButtonZiva
            className="text-lg sm-min:text-xl font-semibold bg-orange-500 hover:bg-orange-600"
            buttonText={"تایید و ثبت اطلاعات"}
            type={"submit"}
          />
        </div>
      </section>
    </form>
  );
};

export default SignUpForm;
