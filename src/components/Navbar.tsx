import Image from "next/image"

const Navbar = () => {
  return (
     <div className="flex cursor-default gap-3 px-4 py-4 md:px-10 md:py-7 lg:px-20 lg:py-10 bg-gradient-to-b from-[#FFF] to-transparent z-30 absolute top-0 left-0 right-0">
        <Image 
          src={"https://res.cloudinary.com/dlkd1pzli/image/upload/v1705253344/mlsa/rwwrftcyhhoto75nfqke.svg"} 
          alt="navbar-mlsa-logo"
          width={41}
          height={36}
          className=""
        ></Image>
        <div className=" leading-4 md:leading-5 font-semibold text-sm md:text-base">
          Microsoft Learn <br/>
          Student Ambassador
        </div>
      </div> 
  )
}

export default Navbar