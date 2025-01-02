import { Icon } from "@iconify/react/dist/iconify.js";

const offerData = [
  {
    id: 1,
    title: "strength training",
    content:
      "Our trainers will design that a progressive workout plans that proper achieve gains strength.",
    icon: "gg:gym",
  },
  {
    id: 2,
    title: "basic yoga",
    content:
      "This program combines yoga with cardio & strength training to help lose weight & fitness.",
    icon: "hugeicons:yoga-01",
  },
  {
    id: 3,
    title: "body building",
    content:
      "For those looking to increase strength build lean muscle, our strength & muscle.",
    icon: "icon-park-outline:muscle",
  },
  {
    id: 4,
    title: "weight loss",
    content:
      "Our weight loss programs are designed to help you make sustainable lifestyle changes.",
    icon: "ri:run-line",
  },
];

export const OurOfferring = () => {
  return (
    <div className="bg-fade-dark-bg flex flex-col px-28 py-16 gap-10">
      <section className="flex place-items-center justify-between">
        <p className="capitalize text-[36px] w-[35%] font-bold">
          the best programs we offer for you
        </p>
        <p className="w-[35%]">
          we offer a wide range of comprehensive fintess programs designed to
          cater to individuals of all fitness levels. Our aim to help you
          achieve specific goals & maximize results.
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
              <p className="capitalize">Learn more</p>
              <Icon icon="si:arrow-right-duotone" fontSize={24} />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
