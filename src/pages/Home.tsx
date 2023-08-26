import Button from "../components/Button";
import Lamp from "../components/Lamp";

const Home = () => {
  return (
    <div className="group px-28">
      <div className="flex justify-center">
        <Lamp />
        <div className="absolute h-36 w-36 -translate-y-3 bg-gradient-radial-light opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:h-96 lg:w-96 " />
      </div>

      <section className="mt-20 flex h-[700px] flex-col items-center justify-center self-center">
        {/* mb-7 mt-16 font-secondaryFont text-9xl font-medium */}
        <h2
          className="
         -mt-9 mb-6 text-center font-secondaryFont
        text-5xl font-medium lg:mb-7 lg:mt-16 lg:text-9xl
        "
        >
          Web Designer
        </h2>
        <h3 className="mb-16 text-center font-secondaryFont text-3xl font-light lg:mb-24 lg:text-5xl">
          SARYA KATBY
        </h3>
        <Button />
      </section>

      <section className="-mt-28 flex items-center justify-center overflow-hidden">
        <div className="h-20 w-full rounded-full bg-gradient-radial opacity-0 transition-opacity duration-500 group-hover:opacity-100 lg:h-32 lg:w-[700px] " />
      </section>
    </div>
  );
};

export default Home;
