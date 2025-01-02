import Image from "next/image";

const partnersLogo = [
  {
    id: 1,
    img: "/videoask.png",
  },
  {
    id: 2,
    img: "/hubspot.png",
  },
  {
    id: 3,
    img: "/mapbox.png",
  },
];

export const Partners = () => {
  return (
    <div className="bg-fade-dark-bg px-28 py-3 flex place-items-center justify-between">
      <section className="flex flex-col gap-2">
        <p className="text-[32px] font-bold">970K+ More</p>
        <p className="capitalize text-xl  font-semibold ">
          Trusted companies partner
        </p>
      </section>
      <section className="flex place-items-center ">
        {partnersLogo.map((partner) => (
          <div className="w-[180px] h-[100px] relative" key={partner.id}>
            <Image src={partner.img} alt="partners" fill className="" />
          </div>
        ))}
      </section>
    </div>
  );
};
