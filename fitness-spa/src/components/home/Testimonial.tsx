import Image from "next/image";

interface testimonialPropTypes {
  star: number;
  clientName: string;
  clientMoral: string;
  clientImage: string;
  clientFeedback: string;
}

export const Testimonial = ({
  clientFeedback,
  clientImage,
  clientMoral,
  clientName,
  star,
}: testimonialPropTypes) => {
  return (
    <div className="flex flex-col gap-3 bg-fadish-brown rounded-lg p-5 ">
      <section className="flex place-items-center gap-3">
        <div className="relative w-[80px] h-[80px] ">
          <Image
            src={clientImage}
            alt="client-image"
            fill
            className="rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xl font-bold">{clientName}</p>
          <p className="text-sm">{clientMoral}</p>
        </div>
      </section>
      {Array.of(star).map((_, index) => (
        <div key={index} className="bg-yellow"></div>
      ))}
      <p>{clientFeedback}</p>
    </div>
  );
};
