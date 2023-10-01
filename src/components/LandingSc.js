import { BsArrowRight } from "react-icons/bs";
import { ReactComponent as SquaresOne } from "../assets/squares1.svg";
import { ReactComponent as SquareTwo } from "../assets/squares2.svg";

const LandingSc = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 sm:px-4 md:gap-4 md:flex-row w-full px-8 md:px-10 pt-10  pb-6 h-5/6">
      <div className=" w-full md:w-3/6 h-full flex  flex-col md:pt-20 gap-8 md:pl-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl fontSora font-black ">
          <b>
            Show Them
            <br /> Don't Just Tell
          </b>
        </h1>
        <p className="specP">
          Help your friends and loved ones by creating and sending videos on how
          to get things done on a website
        </p>
        <button className="fontWorkSans flex items-center primaryColor text-white w-48 justify-center gap-2 h-14 rounded-xl cursor-pointer text-base">
          Install HelpMeOut
          <div>
            <BsArrowRight />
          </div>
        </button>
      </div>

      <div className="h-80 sm:h-96 md:h-full w-full md:w-4/6 flex items-center justify-center relative">
        <div className="absolute top-0 right-0 h-3/6  w-3/6 overflow-hidden">
          <SquaresOne className="h-fit w-full" />
        </div>
        <div className="absolute bottom-0 left-0  h-3/6  w-3/6 overflow-hidden">
          <SquareTwo className=" h-fit w-full" />
        </div>
        <div className="flex items-center justify-center w-11/12 md:w-9/12 gap-2 h-5/12 relative">
          <div className="flex flex-col items-center justify-center gap-2 w-full h-full">
            <div className="w-full h-full">
              <img
                src="https://res.cloudinary.com/du8oaagwi/image/upload/v1695996786/womanusinglaptop_cci8z3.png"
                alt="a woman using her laptop"
                className="w-full h-full rounded-xl"
              />
            </div>
            <div className="z-10 w-full h-full relative">
              <img
                src="https://res.cloudinary.com/du8oaagwi/image/upload/v1695996796/peopleusinglaptop_aqqt8i.png"
                alt="a child and a man using a laptop together"
                className="w-full h-full rounded-xl"
              />
            </div>
          </div>
          <div className="w-full h-full relative">
            <div className="relative w-full h-full">
              <img
                src="https://res.cloudinary.com/du8oaagwi/image/upload/v1695996774/woman-using-smartphone-technology_aiejjf.png"
                alt="a woman using smartphone technology"
                className="w-full h-full z-10 rounded-xl "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSc;
