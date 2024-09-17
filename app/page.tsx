import LoginForm from "./componects/LoginForm";

const Home: React.FC = () => {
  return (
    <main
      lang="fa-IR"
      className="flex text-black w-screen min-h-screen flex-col items-center justify-center p-6"
    >
      <LoginForm />
    </main>
  );
}

export default Home;