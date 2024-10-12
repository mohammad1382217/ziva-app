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
      className="z-10 w-[440px] max-w-[90%] h-auto grid items-center bg-gradient-f-90-f-8045 bg-opacity-20 backdrop-blur-xl border-2 border-solid border-white rounded-2xl shadow-lg"
    >
      <div className="w-full grid gap-8 items-center p-6 sm-max:p-4">
        <section className="grid gap-4">
          <h1 className="sm-min:text-2xl text-lg text-center font-bold text-slate-900">
            ثبت نام
          </h1>
          <h2 className="sm-min:text-lg text-sm text-center font-normal text-slate-500">
            برای ساخت حساب، اطلاعات خود را وارد کنید
          </h2>
        </section>
        <section className="grid gap-6">
          <section className="grid gap-4">
            <InputZiva
              name="first_name"
              label="نام"
              type="text"
              classNames={{
                inputWrapper: "w-full min-w-[116px]",
                label: "text-medium sm-max:text-tiny",
              }}
              isRequired
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
          </section>
          <section className="grid">
            <ButtonZiva
              className="text-lg sm-min:text-xl font-semibold"
              buttonText={"تایید و ثبت اطلاعات"}
              theme="orange"
              type={"submit"}
            />
          </section>
        </section>
      </div>
    </form>
  );
};

export default SignUpForm;
