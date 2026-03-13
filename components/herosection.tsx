import Image from "next/image";

export default function HeroSection() {
  return (
    <div id="home" className="relative w-full h-[90vh] scroll-mt-16">
      <Image
        src={"/site4.png"}
        alt={""}
        className="object-cover absolute"
        fill
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col w-full space-y-9 md:space-y-12">
        <div className="relative size-22 md:size-32 ">
          <Image src={"/icon.png"} alt={""} className="object-contain" fill />
        </div>
        <h1 className="text-white text-center text-xl md:text-4xl font-normal font-quicksand">
          existe algo além dos <br className="flex sm:hidden" /> elementos
          visíveis
        </h1>
        <div className="border-bottom border border-white w-18"></div>
        <div className="relative h-10 md:h-12 z-20 w-full ">
          <Image
            src={"/footer-image.png"}
            alt={""}
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
