import Image from "next/image";
import { Icon } from "@iconify/react";

const statsData = [
  { id: 1, title: "expert trainers", data: "105+" },
  {
    id: 2,
    title: "member joined",
    data: "970+",
  },

  { id: 3, title: "fitness programs", data: "135+" },
];

export const HeroSection = () => {
  return (
    <div className="flex place-items-center  py-6 px-14">
      <section className="flex flex-col gap-8">
        <div>
          <p className="uppercase text-[50px] w-[65%] font-bold">
            get healthy body with the perfect exercises
          </p>
        </div>
        <p className="w-[48%]">
          We are always there to help you to make a healthy body and mind
          through the power of fitness.
        </p>
        <div className="flex place-items-center gap-8">
          <button className="flex bg-red rounded-lg capitalize font-semibold py-3 px-6">
            Get Started
          </button>

          <section className="flex place-items-center gap-3">
            <div className="bg-div-bg p-3 rounded-full">
              <Icon icon="iconoir:play-solid" fontSize={24} />
            </div>
            <p className="capitalize font-bold">watch video</p>
          </section>
        </div>

        <div className="flex items-center">
          {statsData.map((stats) => (
            <section className="text-center flex " key={stats.id}>
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {stats.data}
                </h3>
                <p className="text-gray-300 text-sm capitalize">
                  {stats.title}
                </p>
              </div>
              <div
                className={`h-12 w-[1px] bg-fadish-grey mx-8  ${
                  stats.id === 3 ? "hidden" : "block"
                }`}
                aria-hidden="true"
              />
            </section>
          ))}
        </div>
      </section>
      <section className="relative">
        <Image src="/hero.png" alt="hero" width={880} height={630} />
      </section>
    </div>
  );
};
