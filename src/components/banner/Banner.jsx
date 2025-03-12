import img from "../../assets/Pi7_Passport_Photo__1_-removebg-preview-picaai.png";
import sign from "../../assets/signature.png";
import dev from "../../assets/signature (1).png";
import design from "../../assets/signature (2).png";
import "animate.css";
const Banner = () => {
  return (
    <div className="relativemin-h-screen flex flex-col items-center text-center p-6 md:p-10 ">
      <div className="flex flex-col justify-center items-center h-screen px-4 text-center">
        <h1 className="text-lg md:text-4xl -mt-14 md:mt-[200px] lg:mt-0 font-semibold text-gray-800 flex items-center">
          <span className="mr-2 animate__animated animate__wobble animate__delay-1s">
            👋
          </span>{" "}
          My name is Sowrov & I am a
        </h1>
        <div className="relative">
          <h2
            className="text-4xl z-10 relative sm:text-6xl md:text-[80px] lg:text-[115px] animate__animated animate__backInDown font-bold text-[#ff0051] sm:mt-4  "
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: 700,
              fontStyle: "normal",
            }}
          >
            Web Developer
          </h2>
          <img
            src={img}
            className="absolute  animate__animated animate__bounceInUp  animate__slow  -top-0 lg:top-5 left-16 md:left-32  lg:left-48 mx-auto w-7/12"
            alt=""
          />
        </div>
        <h3
          className="text-5xl md:text-[100px]  lg:text-[150px] text-gray-500 font-light lg:mt-8 md:mt-5 mt-3"
          style={{ fontFamily: '"Bungee Outline", sans-serif' }}
        >
          & Designer
        </h3>
      </div>
      <div
        className="flex gap-1 lg:mt-16 md:mt-72 -m-20   ml-18 lg:ml-60 md:ml-22 mx-auto bg-[#ECF0F3] z-50 "
        style={{
          background:
            "linear-gradient(0deg, rgba(236,240,243,1) 51%, rgba(175,175,175,0) 100%)",
        }}
      >
        <img
          src={sign}
          className="lg:w-60 lg:h-32  md:w-44 md:h-24 w-20 h-8"
          alt=""
        />
        <img
          src={dev}
          className="lg:w-60 lg:h-32 md:w-44 md:h-24 w-20 h-8"
          alt=""
        />
        <img
          src={design}
          className="lg:w-60 lg:h-32 md:w-44 md:h-24 w-20 h-8"
          alt=""
        />
      </div>
    </div>
  );
};
export default Banner;
