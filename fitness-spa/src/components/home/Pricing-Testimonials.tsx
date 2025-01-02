"use client";

import { useState } from "react";
import { Testimonial } from "./Testimonial";
import { Icon } from "@iconify/react/dist/iconify.js";

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
    clientMoral: "Happy Customer",
    star: 5,
  },
];

export const Pricing = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

      <section className="flex justify-between">
        <div className="flex flex-col gap-6 ">
          <p className="text-[32px] font-bold capitalize w-[45%]">
            what our happy clients say about us
          </p>
          <p className="w-[50%] text-sm">
            I've been a member of Fitness Within for about 6 months now and i
            absolutely love it! The trainers are so motivate and they really
            help to reach fitness goals.
          </p>
        </div>
        <div className="w-[38%] ">
          <Testimonial
            clientFeedback={testimonialData[currentIndex].clientFeedback}
            clientImage={testimonialData[currentIndex].clientImage}
            clientMoral={testimonialData[currentIndex].clientMoral}
            clientName={testimonialData[currentIndex].clientName}
            star={testimonialData[currentIndex].star}
          />
        </div>
      </section>
    </div>
  );
};
