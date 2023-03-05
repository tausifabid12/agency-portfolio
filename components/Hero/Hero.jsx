import React from 'react';
import { BsPlayFill } from 'react-icons/bs';

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row mt-32 lg:mt-0">
      <div className="w-full lg:w-[58%] flex flex-col justify-center px-3 lg:px-16 space-y-10">
        <h1 className="text-accent text-3xl lg:text-5xl font-bold">
          Providing unparalleled IT business solution to maximum{' '}
          <span className="relative px-1">
            <div className="absolute inset-x-0 bottom-1 h-3 transform -skew-x-12 bg-primary" />
            <span className="relative inline-block text-scborder-secondary">
              satisfaction
            </span>
          </span>
        </h1>
        <p className="text-gray-400 font-bold">
          At collax we specialize in designing, building, shipping and scaling
          beautiful, usable products with blazing-fast efficiency
        </p>
        <div className="flex flex-col lg:flex-row items-center lg:space-x-10">
          <button className="bg-primary px-12 py-5 text-accent font-bold rounded-xl">
            Contact Us
          </button>
          <div className="hidden lg:flex items-center flex-wrap ">
            <button className="rounded-full p-4 bg-secondary text-accent">
              <BsPlayFill size={28} />
            </button>
            <span className="font-semibold text-gray-600 pl-4">
              How We Work
            </span>
          </div>
        </div>
      </div>
      <div
        style={{ background: "url('/assets/hero-back.png')" }}
        className="w-[42%] h-screen  hidden lg:flex items-end justify-end "
      >
        <img src="/assets/hero.png" className="min-w-[650px] mx-auto" alt="" />
      </div>
    </section>
  );
};

export default Hero;
