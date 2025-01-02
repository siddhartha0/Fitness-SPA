import { Icon } from "@iconify/react/dist/iconify.js";
import Head from "next/head";

const offerData = [
  {
    id: 1,
    title: "strength training",
    content:
      "Our trainers will design progressive workout plans that properly achieve strength gains.",
    icon: "gg:gym",
  },
  {
    id: 2,
    title: "basic yoga",
    content:
      "This program combines yoga with cardio & strength training to help lose weight & improve fitness.",
    icon: "hugeicons:yoga-01",
  },
  {
    id: 3,
    title: "body building",
    content:
      "For those looking to increase strength and build lean muscle, our strength & muscle programs are ideal.",
    icon: "icon-park-outline:muscle",
  },
  {
    id: 4,
    title: "weight loss",
    content:
      "Our weight loss programs are designed to help you make sustainable lifestyle changes and achieve long-term results.",
    icon: "ri:run-line",
  },
];

export const OurOfferring = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>
          Our Fitness Programs - Strength Training, Yoga, Bodybuilding, Weight
          Loss
        </title>
        <meta
          name="description"
          content="Explore our diverse fitness programs including strength training, yoga, bodybuilding, and weight loss to achieve your personal fitness goals."
        />
      </Head>

      <div className="bg-fade-dark-bg flex flex-col px-28 py-16 gap-10">
        <section className="flex place-items-center justify-between">
          <p className="capitalize text-[36px] w-[35%] font-bold">
            The Best Programs We Offer For You
          </p>
          <p className="w-[35%]">
            We offer a wide range of comprehensive fitness programs designed to
            cater to individuals of all fitness levels. Our aim is to help you
            achieve specific goals and maximize your results.
          </p>
        </section>
        <section className="grid grid-cols-4 gap-6">
          {offerData.map((offer) => (
            <div
              key={offer.id}
              className={`flex flex-col gap-5 bg-fade-grey p-6 rounded-lg ${
                offer.id === 3 ? "bg-orange" : ""
              }`}
            >
              <Icon icon={offer.icon} fontSize={44} />
              <p className="capitalize font-bold text-xl">{offer.title}</p>
              <p>{offer.content}</p>
              <div className="flex place-items-center gap-1">
                <p className="capitalize">Learn More</p>
                <Icon icon="si:arrow-right-duotone" fontSize={24} />
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};
