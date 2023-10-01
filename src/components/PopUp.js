import { CgScreen } from "react-icons/cg";
import { FiSettings } from "react-icons/fi";
import { HiOutlineSquare2Stack, HiOutlineMicrophone } from "react-icons/hi2";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { BsToggleOn } from "react-icons/bs";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { MdOutlineCancel } from "react-icons/md";

const PopUp = () => {
  return (
    <div className="p-6 popUpShadow w-72 rounded-xl h-auto flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center h-full gap-2 cursor-pointer fontInter ">
          <Logo className="h-7 w-7" />
          <b>HelpMeOut</b>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FiSettings />
          <MdOutlineCancel />
        </div>
      </div>

      <div>
        <p className="text-base specP fontWorkSans">
          This extention helps you record and share help videos with ease.
        </p>
        <div className="flex py-4 items-center justify-center gap-2">
          <div className="flex flex-col items-center justify-center ">
            <CgScreen className="text-4xl cursor-pointer" />
            <p>Full Screen</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <HiOutlineSquare2Stack className="text-4xl cursor-pointer" />
            <p>Current Tab</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between border-2 border-black rounded-xl h-12 p-4">
          <div className="flex gap-2 items-center ">
            <div className="text-xl fontInter">
              <AiOutlineVideoCamera />
            </div>
            <p>
              <b>Camera</b>
            </p>
          </div>
          <div className="text-2xl">
            <BsToggleOn />
          </div>
        </div>

        <div className="flex items-center justify-between border-2 border-black rounded-xl h-12 p-4 ">
          <div className="flex gap-2 fontInter">
            <div className="text-2xl">
              <HiOutlineMicrophone />
            </div>
            <p>
              <b>Audio</b>
            </p>
          </div>
          <div className="text-2xl">
            <BsToggleOn />
          </div>
        </div>

        <button className="primaryColor h-14 p-4 flex text-white text-center items-center justify-center border-2 rounded-xl cursor-pointer">Start Recording</button>
      </div>
    </div>
  );
};

export default PopUp;
