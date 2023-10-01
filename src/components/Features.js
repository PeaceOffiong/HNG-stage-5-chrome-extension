const Features = () => {
  return (

    <div className="px-8 md:px-20 pb-14">
      <div className="flex flex-col items-center justify-center py-10 gap-4">
        <h2 className="features fontSora text-3xl font-black">
          <b>Features</b>
        </h2>
        <p className="key fontWorkSans">Key Hignlights of Our Extension </p>
      </div>

      <div className="flex gap-14 flex-col md:flex-row">
        <div className="md:w-3/6">
          <ul className="flex gap-12 flex-col">
            <li className="flex gap-4 ">
              <div className="h-16 w-16">
                <img
                  src="https://res.cloudinary.com/du8oaagwi/image/upload/v1696025429/Iconplaceholder_qbwgzo.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="fontInter text-xl md:text-2xl">
                  <b>Simple Screen Recording</b>
                </h3>
                <p className="fontWorkSans">
                  Effortless screen recording for everyone, Record with ease, no
                  tech expertise required
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="h-16 w-16">
                <img
                  src="https://res.cloudinary.com/du8oaagwi/image/upload/v1696025419/Iconplaceholder2_kclm8e.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="fontInter text-xl md:text-2xl">
                  <b>Easy-to-Share URL</b>
                </h3>
                <p className="fontWorkSans">
                  Share your recordings instantly with a single link. No
                  attachment, no downloads
                </p>
              </div>
            </li>

            <li className="flex gap-4">
              <div className="h-16 w-16">
                <img
                  src="https://res.cloudinary.com/du8oaagwi/image/upload/v1696025439/Iconplaceholder3_ovfwyf.png"
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="fontInter text-xl md:text-2xl">
                  <b>Revisit Recordings</b>
                </h3>
                <p className="fontWorkSans">
                  Access and review your past content effortlessly, Your
                  recordings, always at your fingertips.
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:w-4/6 h-4/5">
          <img
            src="https://res.cloudinary.com/du8oaagwi/image/upload/v1696031006/VideoRepository_s7ip9b.png"
            alt="video repository"
            className="h-3/5"
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
