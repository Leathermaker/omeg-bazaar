import {
  foundation,
  JuicerJag,
  purse,
  shoe,
  toy
} from "../../../constants/imagePath";
import Footer from "./Footer";

const NewFooter = () => {
  return (
    <div className="w-full h-screen flex flex-col">
      <div className="h-[30rem] flex gap-4 items-end justify-center bg-gradient-to-b from-transparent to-red-100">
        <img
          src={JuicerJag}
          className="hidden lg:block w-[10rem] aspect-auto"
        />

        <img src={purse} className="hidden md:block w-[12rem] aspect-auto" />

        <img
          src={toy}
          className="w-[12rem] aspect-auto translate-y-6 relative z-10"
        />

        <img
          src={foundation}
          className="hidden md:block w-[7rem] aspect-auto"
        />

        <img src={shoe} className="hidden lg:block w-[15rem] aspect-auto" />
      </div>

      <div className="flex justify-center">
        <Footer />
      </div>
    </div>
  );
};

export default NewFooter;
