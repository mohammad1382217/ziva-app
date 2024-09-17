import LoginForm from "./components/LoginForm";
import bg_login from "./assests/RectangleLoginPage.png"
import Image from "next/image";

const Home: React.FC = () => {
  return (
    <main
      lang="fa-IR"
      className="absolute flex text-black w-full min-h-screen flex-col items-center p-6"
    >
      <Image
        className="relative top-0 w-full h-[280px] flex flex-col self-start" src={bg_login} alt={"bg_login"} width={1392} height={280}
      />
      <LoginForm />
    </main>
  );
};

export default Home;
