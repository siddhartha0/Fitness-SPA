import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Head from "next/head";

export const Banner = () => {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Get Ready to Reach Your Fitness Goals - Best Gym Services</title>
        <meta
          name="description"
          content="Join us at [Your Gym Name] for expert training and personalized fitness programs. Reach your fitness goals with our professional trainers."
        />
      </Head>

      <div className="flex place-items-center gap-44 px-28 py-20 bg-fadish-dark">
        <section className="relative w-[450px] h-[320px]">
          <Image
            src="/banner.jpg"
            alt="Professional gym trainer helping client with fitness goals" // Optimized alt text
            fill
            className="rounded-xl object-cover"
          />
          <div className="bg-white py-2 px-6 absolute -right-20 bottom-10 rounded-lg flex place-items-center gap-3">
            <Icon
              icon="guidance:weightlifting"
              fontSize={30}
              className="text-orange"
            />
            <div className="flex flex-col">
              <span className="text-black font-bold">Professional</span>
              <span className="text-black font-bold">Trainer</span>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-6 w-[30%]">
          {/* Page Heading - H1 for SEO */}
          <h1 className="capitalize font-bold text-[36px]">
            Get Ready to Reach Your Fitness Goals
          </h1>

          <div className="flex flex-col gap-3">
            {/* SEO-Optimized Content */}
            <p>
              We are a gym that is committed to helping people reach their
              fitness goals. We offer a variety of programs and services to fit
              your needs, whether you are an experienced athlete or just
              starting your journey.
            </p>
            <p>
              We believe that everyone should have access to the benefits of
              exercise, and we’re here to help you make it happen.
            </p>
          </div>

          {/* CTA Button - Using keyword in button text */}
          <button className="bg-red rounded-lg capitalize font-semibold py-3 w-[50%]">
            Free Trial Today
          </button>
        </section>
      </div>
    </>
  );
};
