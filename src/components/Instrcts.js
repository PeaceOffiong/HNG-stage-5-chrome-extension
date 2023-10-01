import { ReactComponent as Imagerep } from "../assets/imgrep.svg";

const Instrcts = () => {
  return (
    <div className="px-8 md:px-14 pb-14">
      <div className="flex flex-col items-center justify-center py-10 gap-4">
        <h1 className="features fontSora text-3xl font-black">
          <b>How it works</b>
        </h1>
      </div>

      <ul className="flex flex-col md:flex-row items-center justify-center gap-8 flex-wrap">
        <li className="flex flex-col items-center text-center gap-4 w-96">
          <div className="h-12 w-12 rounded-full primaryColor text-white flex items-center justify-center text-center text-2xl">
            1
          </div>
          <div>
            <h3 className="fontInter text-xl md:text-2xl">
              <b>Record Screen</b>
            </h3>
          </div>
          <div className="w-4/5 text-center">
            <p className="fontWorkSans">
              Click the "Start Recording" button in our extension. choose which
              part of your screen to capture and who you want to send it to.
            </p>
          </div>
          <div className="h-full w-full">
            <Imagerep />
          </div>
        </li>

        <li className="flex flex-col items-center text-center w-96 gap-4">
          <div className="h-12 w-12 rounded-full primaryColor text-white flex items-center justify-center text-center text-2xl">
            2
          </div>
          <div>
            <h3 className="fontInter text-xl md:text-2xl">
              <b>Share Your Recording</b>
            </h3>
          </div>
          <div className="w-4/5 text-center">
            <p className="fontWorkSans">
              We generate a shareable link for your video. Simply send it to
              your audience via email or copy the link to send via any platform.
            </p>
          </div>
          <div className="h-full w-full">
            <Imagerep />
          </div>
        </li>

        <li className="flex flex-col items-center text-center w-96 gap-4">
          <div className="h-12 w-12 rounded-full primaryColor text-white flex items-center justify-center text-center text-2xl">
            3
          </div>
          <div>
            <h3 className="fontInter text-xl md:text-2xl">
              <b>Learn Effortlessly</b>
            </h3>
          </div>
          <div className="w-4/5 text-center">
            <p className="fontWorkSans">
              Recipients can access your video effortlessly through the provided
              link, with our user-friendly interface suitable for everyone.
            </p>
          </div>
          <div className="h-full w-full">
            <Imagerep />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Instrcts;
