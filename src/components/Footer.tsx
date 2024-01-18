import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className="flex gap-2 items-center px-4 md:px-12 lg:px-16 mt-20">
        <Image
          src={"/project-wing-logo.png"}
          alt="hero-project-wing-logo"
          width={110}
          height={123}
          className=" w-14 md:w-[72px] lg:w-20"
        ></Image>
        <Image
          src={
            "https://res.cloudinary.com/dlkd1pzli/image/upload/v1705253344/mlsa/rwwrftcyhhoto75nfqke.svg"
          }
          alt="hero-project-wing-logo"
          width={127}
          height={123}
          className=" w-16 md:w-20 lg:w-28"
        ></Image>
        <div className="h-[1px] w-full bg-black"></div>
      </div>
      <div className="w-screen overflow-hidden mt-20">
        <div className="uppercase font-bold text-[9vw] sm:text-[9.4vw] md:text-[10.4vw] lg:text-[9.8vw] -translate-x-2 md:-translate-x-5 whitespace-nowrap md:tracking-[-5px] leading-none">
          project wing x{" "}
          <span className=" bg-recruitment-text bg-clip-text text-transparent">
            rec
          </span>
        </div>
      </div>
      <div className="flex items-end justify-between ">
        <div className="pb-1 md:pb-2 lg:pb-3 pl-4 px-4 text-xs md:text-xl font-medium text-gray-600 ">@2023-2024 projectwingxmlsa@copyright</div>
        <h1 className="uppercase text-[9.8vw] md:tracking-[-5px] font-bold leading-none bg-recruitment-text bg-clip-text text-transparent">ruitment</h1>
      </div>
    </>
  );
};

export default Footer;
