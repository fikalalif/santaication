import Image from "next/image"

const HeaderSection = ({
    title,
    subTitle
}:{
    title : string;
    subTitle : string;
}) => {
  return (
    <header className="relative h-10 text-white overflow-hidden">
        <div className="absolute inset-0">
            <Image src="/labuan-bajo.jpg" alt="Header Imaged" fill className="object-cover object-center w-full h-full" />
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative flex flex-col justify-center items-center h-60 text-center pt-14">
            <h1 className="text-5xl font-bold leading-tight capitalize">{title}</h1>
            <h1 className="text-xl text-gray-300">{subTitle}</h1>
        </div>
    </header>
  )
}

export default HeaderSection