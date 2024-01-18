import Image from "next/image";

const Domains = () => {
  return (
    <div id="domain-section" className="px-4 md:px-10 lg:px-20 mt-48">
      <div className="flex gap-9 items-center">
        <div className="h-[1px] w-full bg-black"></div>
        <span className=" lg:tracking-[-1px] uppercase font-bold text-2xl md:text-4xl lg:text-5xl bg-recruitment-text bg-clip-text text-transparent">
          Domains
        </span>
        <div className="h-[1px] w-full bg-black"></div>
      </div>
      <div className="flex flex-wrap gap-5 justify-center py-16">
        <DomainCard title="web developement" logo="/domains/globe.svg" />
        <DomainCard title="marketing" logo="/domains/2.svg" />
        <DomainCard title="Cloud Computing" logo="/domains/cloud.svg" />
        <DomainCard title="Cyber security" logo="/domains/sword.svg" />
        <DomainCard title="creative" logo="/domains/eye.svg" />
        <DomainCard title="app development" logo="/domains/6.svg" />
        <DomainCard title="competitive coding" logo="/domains/cp.svg" />
        <DomainCard title="Broadcasting media" logo="/domains/broadcast.svg" />
        <DomainCard title="user interface design" logo="/domains/cross.svg" />
      </div>
    </div>
  );
};

function DomainCard({
  title = "",
  logo = "",
}: {
  title?: string;
  logo?: string;
}): JSX.Element {
  return (
    <div className="border-4 border-black hover:border-[#0130FF] group rounded-2xl overflow-hidden w-[90%] md:w-[32%] max-w-md min-w-[200px] md:min-w-[300px] lg:max-w-sm transition-colors duration-300">
      <h1 className="text-xl md:text-2xl lg:text-3xl uppercase font-bold pl-3 pr-6 py-2 md:py-4 lg:py-7 md:px-4 xl:px-8 text-start group-hover:text-[#0130FF] transition-colors duration-200">{title}</h1>
      <div className="flex justify-end items-end translate-x-1 translate-y-8">
        <Image src={logo} alt="" width={194} height={194}></Image>
      </div>
    </div>
  );
}

export default Domains;
