import Button from "../components/Button";
import Lamp from "../components/Lamp";

const Home = () => {
  return (
    <div className="group px-28">
      <div className="flex justify-center">
        <Lamp />
        <div className="absolute h-96 w-96 -translate-y-3 bg-gradient-radial-light opacity-0 transition-opacity duration-500 group-hover:opacity-100 " />
      </div>

      <section className="mt-20 flex h-[700px] flex-col items-center justify-center self-center">
        <h2 className="mb-7 mt-16 font-secondaryFont text-9xl font-medium">
          Web Designer
        </h2>
        <h3 className="mb-24 font-secondaryFont text-5xl font-light">
          SARYA KATBY
        </h3>
        <Button />
      </section>

      <section className="-mt-28 flex items-center justify-center overflow-hidden">
        <div className="h-32 w-[700px] rounded-full bg-gradient-radial opacity-0 transition-opacity duration-500 group-hover:opacity-100 " />
      </section>
    </div>
  );
};

export default Home;
