import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <Image
        src={
          "https://res.cloudinary.com/dlkd1pzli/image/upload/v1705257244/mlsa/mt32h5hexokn2bbtndbw.svg"
        }
        alt="hero-bg"
        width={1440}
        height={720}
        className="w-screen absolute inset-0 h-screen lg:h-[130vh] object-cover z-[-1]"
      ></Image>
      <div className="h-screen flex justify-center items-center ">
        <div className="flex flex-col gap-12 py-14 w-full mx-4 md:mx-14 lg:mx-20 rounded-full relative ">
          <div className="absolute inset-0 hero-radial z-[-1] blur-3xl rounded-full"></div>
          <div className="space-y-4">
            <div className="flex justify-center items-center mb-14">
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
                className="w-16 md:w-20 lg:w-28 "
              ></Image>
            </div>
            <div className="uppercase font-bold text-3xl md:text-4xl lg:text-6xl text-center">
              project wing x{" "}
              <span className=" bg-recruitment-text bg-clip-text text-transparent">
                recruitment
              </span>
            </div>
            <div className="flex justify-center items-center text-center font-medium text-[#151515]">
              <div className="md:w-1/2 text-sm md:text-base">
                WE ENCOURAGE YOUNG MINDS TO PURSUE KNOWLEDGE AND EXCELLENCE IN
                UNIQUE WAYS
              </div>
            </div>
          </div>

          <div className="flex gap-9 justify-center">
            <Link href="#domain-section">
              <button className="cursor-pointer leading-5 md:text-2xl bg-[#eaeaea99] px-9 py-3 rounded-full">
                Explore Domains
              </button>
            </Link>
            <Link
              href={
                "https://forms.office.com/pages/responsepage.aspx?id=oBzDhDusrk6tEVGdgCM-b8bdeoyqY3RAqmK1iIVzm2NUMVEwRVNONEtLTlBMUERRT0k3TzNPTVVZUS4u"
              }
              target="_blank"
            >
              <button className="leading-5 md:text-2xl text-[#00affffa] px-9 py-3 rounded-full bg-[#b4e4ff99]">
                Register Here
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
