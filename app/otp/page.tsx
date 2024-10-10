import bg_login from "../public/RectangleLoginPage.webp";
import Image from "next/image";
import OtpValid from "../components/OtpValid";

const Otp: React.FC = () => {
  return (
    <main
      lang="fa-IR"
      className="relative flex text-black w-full min-h-screen flex-col items-center justify-center sm-min:p-6"
    >
      <section className="absolute inset-0 sm-min:p-6 w-full self-start">
        <Image
          className="w-full h-[280px] flex flex-col self-start rounded-none sm-min:rounded-xl"
          src={bg_login}
          alt={"bg_login"}
          width={1392}
          height={280}
        />
      </section>
      <OtpValid />
    </main>
  );
};

export default Otp;
