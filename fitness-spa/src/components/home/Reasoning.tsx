import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const reasoningData = [
  {
    id: 1,
    title: "Personal training",
    content:
      "Our personal trainers can help you create a personalized fitness plan and track your progress.",
  },
  {
    id: 2,
    title: "expert trainer",
    content:
      "Our gym is proud to offer a team of highly skilled and certified trainer help achieve your health & fitness goals.",
  },
  {
    id: 3,
    title: "flexible time",
    content:
      "There are many fitness classes that are offered during off-peak hours, such as early morning or late evening.",
  },
];

export const Reasoning = () => {
  return (
    <div className="flex bg-fadish-dark py-16 px-28 justify-between place-items-center">
      <section className="flex flex-col gap-5">
        <p className="font-bold text-[32px] capitalize w-[60%]">
          Why should people choose fitnesxia services
        </p>

        <div className="flex flex-col gap-4 w-[55%]">
          {reasoningData.map((reasons) => (
            <section key={reasons.id} className="flex flex-col gap-5">
              <div className="flex place-items-center gap-4">
                <div className="bg-orange text-center p-1 rounded-full">
                  <Icon icon="charm:tick" />
                </div>
                <p className="text-xl capitalize font-bold ">{reasons.title}</p>
              </div>
              <p>{reasons.content}</p>
            </section>
          ))}
        </div>

        <button className=" bg-red rounded-lg capitalize font-semibold py-3  w-[20%]">
          join today
        </button>
      </section>
      <div className="bg-orange rounded-full relative">
        <section className="relative w-[450px] h-[450px]">
          <Image src="/trainer.png" alt="hero" fill className="object-cover" />
        </section>
        <section className="bg-white flex place-items-center absolute bottom-4 rounded-lg gap-3 p-3">
          <Icon icon="noto:fire" fontSize={28} />
          <div className="flex flex-col text-black">
            <p className="font-bold">24%</p>
            <p className="font-semibold text-gray-500">Fat Burning</p>
          </div>
        </section>

        <section className="bg-white flex place-items-center absolute top-20 right-10 rounded-lg gap-3 p-3">
          <Icon
            icon="solar:heart-pulse-2-broken"
            className="text-red"
            fontSize={28}
          />
          <div className="flex flex-col text-black">
            <p className="font-bold">70 bpm</p>
            <p className="font-semibold text-gray-500">Heart Rate</p>
          </div>
        </section>
      </div>
    </div>
  );
};
