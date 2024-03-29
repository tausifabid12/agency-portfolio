import React from 'react';

const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-accent uppercase rounded-full bg-primary">
            Blogs
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-accent sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="db164e35-2a0e-4c0f-ab05-f14edc6d4d30"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#db164e35-2a0e-4c0f-ab05-f14edc6d4d30)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Learn About Our </span>
            Latest News and{' '}
            <span className="relative px-1">
              <div className="absolute inset-x-0 bottom-1 h-3 transform -skew-x-12 bg-primary" />
              <span className="relative inline-block text-scborder-secondary">
                Updates
              </span>
            </span>
          </span>{' '}
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque rem aperiam, eaque ipsa quae.
        </p>
      </div>
      <div className="grid max-w-sm gap-5 mb-8 lg:grid-cols-3 sm:mx-auto lg:max-w-full">
        <div className="px-10 py-20 text-center shadow-lg ring-1 ring-gray-200 rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            20 Nov 2020
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-primary"
            aria-label="Read article"
            title="Nori grape silver beet broccoli kombu beet"
          >
            Nori grape silver beet broccoli kombu beet
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-primary "
          >
            Read more
          </a>
        </div>
        <div className="px-10 py-20 text-center shadow-lg ring-1 ring-gray-200 rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            20 Nov 2020
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-primary"
            aria-label="Read article"
            title="Well, the way they make shows is, they make one"
          >
            Well, the way they make shows is, they make one
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Some pilots get picked and become television programs. Some don't,
            become nothing.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-primary "
          >
            Read more
          </a>
        </div>
        <div className="px-10 py-20 text-center shadow-lg ring-1 ring-gray-200 rounded lg:px-5 lg:py-10 xl:py-20">
          <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase">
            20 Nov 2020
          </p>
          <a
            href="/"
            className="inline-block max-w-xs mx-auto mb-3 text-2xl font-extrabold leading-7 transition-colors duration-200 hover:text-primary"
            aria-label="Read article"
            title="Pommy ipsum smeg head whizz morris himer due"
          >
            Pommy ipsum smeg head whizz morris himer due
          </a>
          <p className="max-w-xs mx-auto mb-2 text-gray-700">
            Taking the mick middle className bog roll bow ties are cool posh
            nosh off t'shop, stew and dumps.
          </p>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-primary "
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
