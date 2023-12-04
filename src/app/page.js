import Image from "next/image";

export default function Home() {
  return (
    <div className="container py-8 mx-auto lg:px-8">
      <div className="px-8 lg:px-0">
        <span className="text-2xl font-semibold">PORTOFOLIO</span>
      </div>
      <div className="flex flex-col flex-wrap items-center justify-between gap-8 mt-12 lg:flex-row">
        <div className="flex flex-col w-3/4 gap-4 lg:w-1/2 xl:w-2/5">
          <span className="text-4xl font-bold">
            I&apos;m <span className="text-blue-700">Back End</span> Developer,
            Denis Arsyatya a.k.a{" "}
            <span className="text-blue-700">WaxArsatia</span>
          </span>
          <p className="text-justify">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos natus
            voluptas aut accusantium modi velit voluptate deserunt excepturi ab
            quia quibusdam dolore optio illum porro nisi, architecto suscipit
            quaerat molestias ea eligendi rem in temporibus, ratione quis? Sequi
            error nulla deserunt iure, dolores libero, quos nisi dolor magni
            voluptate quisquam?
          </p>
        </div>
        <div className="hidden xl:block 2xl:scale-125">
          <Image
            src="/undraw_arrow.svg"
            width={220}
            height={220}
            alt="Arrow SVG"
          />
        </div>
        <div>
          <Image
            src="/hero.jpg"
            width={350}
            height={350}
            alt="Denis Arsyatya Photo"
            className="rounded-full ring-blue-700 ring-4"
          />
        </div>
      </div>
    </div>
  );
}
