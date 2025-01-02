import Image from "next/image";

export const Banner = () => {
  return (
    <div className="flex place-items-center  gap-44 px-28 py-20 bg-fadish-dark">
      <section className="relative w-[450px] h-[320px]">
        <Image
          src="/banner.jpg"
          alt="hero"
          fill
          className="rounded-xl object-cover"
        />
      </section>
      <section className="flex flex-col gap-6 w-[30%]">
        <p className="capitalize font-bold text-[36px]">
          Get ready to reach you fitness goals
        </p>
        <div className="flex flex-col gap-3">
          <p>
            We are a gym that is committed to helping people reach their fitness
            goals. We offer a variety of theirs programs and services to fit you
            needs, whether you are an experienced athelete.
          </p>
          <p>
            We believe that everyone should have access to the benefits of
            exercise make it happen.
          </p>
        </div>
        <button className=" bg-red rounded-lg capitalize font-semibold py-3  w-[50%]">
          free trial today
        </button>
      </section>
    </div>
  );
};
