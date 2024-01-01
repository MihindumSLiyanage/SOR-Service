import Link from 'next/link';
import React from 'react';

const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h1 className="font-serif text-xl">
            <span className="text-cyan-600 font-bold">
              100% Certified Quality
            </span>{' '}
            Original Product
          </h1>

          <p className="text-gray-500">
            See Our latest discounted products from here and get a special
            <Link href="#discount">
              <a className="text-cyan-600 ml-1">discount product</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Banner;
