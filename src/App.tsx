import Button from "./components/Button";
import Lamp from "./components/Lamp";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="px-28">
      <div className="flex justify-center">
        <Navbar />
        <Lamp />
      </div>

      <section className="mt-20 flex h-[700px] flex-col items-center justify-center self-center">
        <h2 className="mb-7 mt-10 text-8xl font-medium">Web Designer</h2>
        <h3 className="mb-24 text-5xl font-light">SARYA KATBY</h3>
        <Button />
      </section>

      <section className=" -mt-28 flex items-center justify-center overflow-hidden">
        <div className="h-32 w-[700px] rounded-full bg-gradient-radial "></div>
      </section>
    </div>
  );
};

export default App;
