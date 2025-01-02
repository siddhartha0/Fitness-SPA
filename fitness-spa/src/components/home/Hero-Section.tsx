import Image from "next/image";
import { Icon } from "@iconify/react";
import Head from "next/head";

const statsData = [
  { id: 1, title: "expert trainers", data: "105+" },
  {
    id: 2,
    title: "members joined",
    data: "970+",
  },
  { id: 3, title: "fitness programs", data: "135+" },
];

export const HeroSection = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Get Healthy with Expert Fitness Trainers & Programs</title>
        <meta
          name="description"
          content="Join us at [Your Gym Name] for expert trainers, engaging fitness programs, and personalized training to help you achieve your fitness goals."
        />
      </Head>

      <div className="flex place-items-center pt-6 px-28 relative">
        <section className="flex flex-col gap-8">
          <div className="relative">
            <p className="uppercase text-[50px] w-[75%] font-bold">
              Get healthy body with the perfect
            </p>
            <section className="flex place-items-center gap-6 uppercase text-[50px] w-[65%] font-bold">
              Exercises
              <div className="h-[40px] w-[280px] relative">
                <Image
                  src="/banner.jpg"
                  alt="Fitness banner showcasing exercises" // Optimized alt text
                  fill
                  className="object-cover rounded-full"
                />
              </div>
            </section>
          </div>
          <p className="w-[48%]">
            We are always here to help you achieve a healthy body and mind
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
              <p className="capitalize font-bold">Watch Video</p>
            </section>
          </div>

          {/* Stats Section */}
          <div className="flex items-center">
            {statsData.map((stats) => (
              <section className="text-center flex" key={stats.id}>
                <div>
                  <h3 className="text-4xl font-bold text-white mb-2">
                    {stats.data}
                  </h3>
                  <p className="text-gray-300 text-sm capitalize">
                    {stats.title}
                  </p>
                </div>
                <div
                  className={`h-12 w-[1px] bg-fadish-grey mx-8 ${
                    stats.id === 3 ? "hidden" : "block"
                  }`}
                  aria-hidden="true"
                />
              </section>
            ))}
          </div>
        </section>
        <section className="absolute top-0 left-[620px]">
          <Icon icon="gg:gym" className="text-fadish-brown" fontSize={80} />
        </section>
        <section className="relative">
          <div className="flex flex-col gap-1 z-[99999] absolute bottom-16 p-3 bg-white rounded-lg">
            <section className="">
              <p className="text-black text-[10px]">{`Today's Calories`}</p>
              <p className="text-black text-xl font-bold">150 Cal</p>
            </section>
            <section className="flex gap-5 place-items-center">
              <div className="flex place-items-center gap-1">
                <Icon
                  icon="material-symbols-light:trending-up"
                  fontSize={20}
                  className="text-red"
                />
                <p className="text-red text-[10px]">+2.75%</p>
                <p className="text-black text-[10px]">This Week</p>
              </div>
              <Icon
                icon="famicons:stats-chart"
                className="text-red"
                fontSize={40}
              />
            </section>
          </div>
          <div className="w-[510px] h-[630px]">
            <Image
              src="/hero.png"
              alt="Healthy fitness trainer with a client"
              fill
              className=""
            />
          </div>
        </section>
      </div>
    </>
  );
};
