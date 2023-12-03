import Image from "next/image";

export default function Home() {
  return (
    <div className="container h-screen mx-auto px-28">
      <div className="relative h-full">
        <div className="pt-12">
          <span className="text-2xl font-bold">PORTOFOLIO</span>
        </div>
        <div className="flex items-center justify-between mt-48">
          <div className="flex flex-col w-1/3 gap-10">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">
                I&#39;m <span className="text-blue-700">Back End</span>{" "}
                Developer Denis Arsyatya a.k.a{" "}
                <span className="text-blue-700">WaxArsatia</span>
              </span>
            </div>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quae
                quas, velit error quos omnis asperiores. Placeat delectus ea
                nobis sed quaerat fugiat, velit quo esse neque dolorem ab illum
                sint explicabo dolorum? Sequi in nisi praesentium quia odio
                placeat, recusandae officiis. Odio tenetur atque mollitia
                adipisci dolores unde doloribus.
              </p>
            </div>
          </div>
          <div>
            <Image
              src="/undraw_arrow.svg"
              width={220}
              height={220}
              alt="Arrow SVG"
              loading="eager"
            />
          </div>
          <div className="bg-blue-700 rounded-full">
            <div className="scale-95">
              <Image
                src="/hero.jpg"
                width={350}
                height={350}
                alt="Denis Arsyatya Photo"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full pb-8 text-center text-slate-600">
          <span>
            Copyright 2023 www.waxarsatia.net - Denis Arsyatya. All Rights
            Reserved
          </span>
        </div>
      </div>
    </div>
  );
}
