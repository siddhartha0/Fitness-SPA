"use client";

import { useState } from "react";
import { Testimonial } from "./Testimonial";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

const pricingData = [
  {
    id: 1,
    title: "Discover",
    price: "$99",
    usage: "per month",
    content: [
      "5 classes per month",
      "4 group class monthly",
      "online class access",
      "E-book fitness guide",
    ],
  },
  {
    id: 2,
    title: "Enterprise",
    price: "$299",
    usage: "per month",
    content: [
      "10 classes per month",
      "8 group class monthly",
      "online class access",
      "E-book fitness guide",
      "7 Extra fitness training",
    ],
  },
  {
    id: 3,
    title: "Professional",
    price: "$199",
    usage: "per month",
    content: [
      "7 classes per month",
      "6 group class monthly",
      "online class access",
      "E-book fitness guide",
    ],
  },
];

const testimonialData = [
  {
    id: 1,
    clientName: "Farhan Rio",
    clientFeedback:
      "I've been coming to this gym for 3 year now and i've never been in better shape. The trainers are amazing and they always push me by my best. I'm so glad to this gym",
    clientImage: "/hero.jpg",
    clientMoral: "Happy Customer",
    star: 5,
  },
  {
    id: 2,
    clientName: "Sarashms Rio",
    clientFeedback:
      "I've been coming to this gym for 3 year now and i've never been in better shape. The trainers are amazing and they always push me by my best. I'm so glad to this gym",
    clientImage: "/hero.jpg",
    clientMoral: "Loyal Customer",
    star: 4,
  },
];

const reviewers = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    name: "Sarah",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
    name: "Michael",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    name: "David",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
    name: "Emma",
  },
];

export const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    if (currentIndex !== testimonialData.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
    setCurrentIndex(testimonialData.length - 1);
  };

  const prevTestimonial = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prev) => prev - 1);
    }
    setCurrentIndex(0);
  };

  return (
    <div className="bg-fade-dark-bg flex flex-col px-28 py-16 gap-20 ">
      <section className="flex flex-col gap-8 text-center">
        <p className="capitalize font-bold text-[32px]">choose the best plan</p>
        <p>
          choose a plan that's right for your growing team. Simple pricing & No
          hidden charges.
        </p>

        <div className="flex  text-center justify-center gap-4 border-2 border-darkish-red  w-fit  rounded-full m-auto ">
          <p className="bg-darkish-red py-3 px-6 rounded-full">Monthly</p>
          <p className="py-3 px-6">Annual</p>
        </div>

        <div className="flex place-items-center justify-center gap-8 cursor-pointer">
          {pricingData.map((pricing) => (
            <section
              key={pricing.id}
              className={`flex flex-col gap-8 ${
                pricing.id === 2 ? "bg-orange" : "bg-fadish-brown"
              } px-20 py-8 rounded-lg`}
            >
              <p className="text-center uppercase text-base">{pricing.title}</p>
              <label className="font-bold text-[32px] flex place-items-center gap-1">
                {pricing.price}
                <p className="font-normal text-base">/ {pricing.usage}</p>
              </label>
              <div className="flex flex-col gap-4">
                {pricing.content.map((content, index) => (
                  <section
                    key={index}
                    className="flex place-items-center gap-2"
                  >
                    <Icon icon="charm:tick" width={28} fontSize={24} />
                    <p className="text-sm text-start">{content}</p>
                  </section>
                ))}
              </div>
              <button
                className={`border border-white rounded-full ${
                  pricing.id === 2 ? "bg-white text-orange" : ""
                } p-3 capitalize`}
              >
                choose plan
              </button>
            </section>
          ))}
        </div>
      </section>

      <section className="flex justify-between relative">
        <div className="flex flex-col gap-6 ">
          <p className="text-[32px] font-bold capitalize w-[45%]">
            what our happy clients say about us
          </p>
          <p className="w-[50%] text-sm">
            I've been a member of Fitness Within for about 6 months now and i
            absolutely love it! The trainers are so motivate and they really
            help to reach fitness goals.
          </p>

          <div className="flex items-center gap-4 ">
            <div className="flex -space-x-3">
              {reviewers.map((reviewer) => (
                <div
                  key={reviewer.id}
                  className="w-10 h-10   hover:translate-y-1 transition-transform relative"
                >
                  <Image
                    src={reviewer.image}
                    className="rounded-full"
                    fill
                    alt={reviewer.name}
                  />
                </div>
              ))}
              <button
                className="w-10 h-10 rounded-full bg-red  flex items-center justify-center text-white  hover:translate-y-1 transition-transform"
                aria-label="Add review"
              >
                <Icon icon="ic:baseline-plus" className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center gap-1.5">
              <Icon
                icon="material-symbols:star"
                className="w-5 h-5  text-yellow"
              />
              <span className="text-white font-medium">4.9</span>
              <span className="text-gray-400">(450 Reviews)</span>
            </div>
          </div>

          <div className="w-[210px] h-[100px] relative">
            <Image
              src="/trustpilot.png"
              alt="partners"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="absolute left-1/2 bottom-2 transform -translate-x-1/2">
          <section className="relative w-[200px] h-[150px]">
            <Image src="/arrow.png" fill alt="arrow" />
          </section>
        </div>

        <div className="w-[38%] relative">
          <div
            className="p-2 bg-fadish-grey rounded-full absolute top-36 -left-4 cursor-pointer"
            onClick={prevTestimonial}
          >
            <Icon icon="solar:arrow-left-linear" />
          </div>
          <Testimonial
            clientFeedback={testimonialData[currentIndex].clientFeedback}
            clientImage={testimonialData[currentIndex].clientImage}
            clientMoral={testimonialData[currentIndex].clientMoral}
            clientName={testimonialData[currentIndex].clientName}
            star={testimonialData[currentIndex].star}
          />
          <div
            className="p-2 bg-red rounded-full absolute top-36 -right-4 cursor-pointer"
            onClick={nextTestimonial}
          >
            <Icon icon="mdi-light:arrow-right" />
          </div>
        </div>
      </section>
    </div>
  );
};
