import React from 'react';
import { FaAward, FaDharmachakra } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 px-3 lg:px-0 mt-16">
      <div className="w-full h-full flex items-center justify-center">
        <div className="space-y-7">
          <div className="flex items-center space-x-1">
            <p className="w-7 h-1 bg-primary"></p>
            <p className="text-primary font-bold">Our Services</p>
            <p className="w-7 h-1 bg-primary"></p>
          </div>
          <h1 className="text-accent text-3xl lg:text-5xl font-bold">
            We're providing the best customer
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-2 h-3 transform -skew-x-12 bg-primary" />
              <span className="relative inline-block text-scborder-secondary">
                service
              </span>
            </span>
            {/* <span className="text-primary"> service</span> */}
          </h1>
          <p className="text-gray-500 font-bold">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            explicabo voluptatibus quis dignissimos nam illum porro magnam rerum
            cupiditate facere. Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
          <button className="px-8 py-3 bg-actext-accent mt-5 text-white font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* --------- */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 pt-14">
        <div className="space-y-7 ">
          <div className="w-full h-64 py-10 px-6 space-y-4 border-t-8 border-primary shadow-lg">
            <p className="text-primary text-sm font-bold">Explore Service</p>
            <h5 className="text-accent font-bold text-2xl">
              Managed service solution
            </h5>
            <button className="text-accent font-bold">read more</button>
          </div>
          <div className="w-full h-64 py-10 px-6 space-y-4 border-t-8 border-primary shadow-lg">
            <p className="text-primary text-sm font-bold">Explore Service</p>
            <h5 className="text-accent font-bold text-2xl">
              Collax business solution
            </h5>
            <button className="text-accent font-bold">read more</button>
          </div>
        </div>
        <div className="space-y-7 pt-8">
          <div className="w-full h-64 py-10 px-6 space-y-4 border-t-8 border-primary shadow-lg">
            <p className="text-primary text-sm font-bold">Explore Service</p>
            <h5 className="text-accent font-bold text-2xl">
              Web, app development
            </h5>
            <button className="text-accent font-bold">read more</button>
          </div>
          <div className="w-full h-64 py-10 px-6 space-y-4 border-t-8 border-primary shadow-lg">
            <p className="text-primary text-sm font-bold">Explore Service</p>
            <h5 className="text-accent font-bold text-2xl">
              On Time & On Budget
            </h5>
            <button className="text-accent font-bold">read more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
