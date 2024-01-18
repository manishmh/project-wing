import Image from "next/image";

const Timeline = () => {
  return (
    <div className="lg:pt-48">
      <div className=" bg-gradient-to-t from-white to-transparent relative z-10">
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-[-1]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent z-[-1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b blur-md from-white to-transparent z-[-1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b blur-md from-white to-transparent z-[-1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b blur-md from-white to-transparent z-[-1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b blur-md from-white to-transparent z-[-1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b blur-md from-white to-transparent z-[-1]"></div>
        <div className="flex gap-9 items-center px-4 md:px-8 lg:px-16">
          <div className="h-[1px] w-full bg-black"></div>
          <span className="lg:tracking-[-3px] uppercase font-bold text-2xl md:text-4xl lg:text-5xl bg-recruitment-text bg-clip-text text-transparent">
            Timeline
          </span>
          <div className="h-[1px] w-full bg-black"></div>
        </div>
      </div>
      <div className="px-4 md:px-8 lg:px-16 bg-white">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="440"
          viewBox="0 0 18 440"
          fill="none"
          className="absolute"
        >
          <path
            d="M9 0.339746L0.339746 9L9 17.6603L17.6603 9L9 0.339746ZM1 432C1 436.418 4.58172 440 9 440C13.4183 440 17 436.418 17 432C17 427.582 13.4183 424 9 424C4.58172 424 1 427.582 1 432ZM7.5 9V432H10.5V9H7.5Z"
            fill="black"
          />
        </svg>
        <div className="pt-8 space-y-6 md:space-y-4 pl-4 md:pl-0">
          <div className="">
            <div className=" md:w-3/12 lg:w-1/5">
              <div className="relative bg-[#b4e4ff99] rounded-2xl font-normal text-center px-6 py-3">
                <Image
                  src="/timeline-orientation.svg"
                  alt={`timeline-orientation`}
                  width={32}
                  height={32}
                  className="absolute -top-3 left-2"
                ></Image>
                <span className="text-xl md:text-2xl">Orientation</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end md:ml-2">
            <div className="w-full md:w-4/5">
              <div className="relative bg-[#b4c9ff99] rounded-2xl font-normal text-center px-6 py-3 md:w-1/4">
                <Image
                  src="/timeline-videocall.svg"
                  alt={`timeline-interview`}
                  width={32}
                  height={32}
                  className="absolute -top-3 left-2"
                ></Image>
                <span className="text-xl md:text-2xl">Interview</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end md:ml-6">
            <div className="md:w-8/12 lg:w-3/5 w-full ">
              <div className="relative bg-[#f4b4ff99] rounded-2xl font-normal text-center px-6 py-3 md:w-6/12 lg:w-2/5">
                <Image
                  src="/timelie-gp.svg"
                  alt={`timeline-commencement`}
                  width={32}
                  height={32}
                  className="absolute -top-3 left-2"
                ></Image>
                <span className="text-xl md:text-2xl">
                  Commencement of <span className="font-bold">PW</span>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-end md:mr-4">
            <div className="md:w-2/6 w-full ">
              <div className="relative bg-[#fff7b499] rounded-2xl font-normal text-center px-6 py-3 md:w-4/5 lg:w-3/6">
                <Image
                  src="/timeline-completion.svg"
                  alt={`timeline-completion`}
                  width={32}
                  height={32}
                  className="absolute -top-3 left-2"
                ></Image>
                <span className="text-xl md:text-2xl">Completion</span>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="md:w-1/6 w-full ">
              <div className="relative border-[4px] border-[#18CE2A] bg-[#b5ffc599] rounded-2xl font-normal text-center px-6 py-3 w-full">
                {/* <Image
                  src="/timeline-completion.svg"
                  alt={`timeline-completion`}
                  width={32}
                  height={32}
                  className="absolute -top-3 left-2"
                ></Image> */}
                <span className="text-xl md:text-2xl ">results</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
