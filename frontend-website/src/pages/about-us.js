import React from 'react';
import Image from 'next/image';

//internal import
import Layout from '@layout/Layout';
import PageHeader from '@component/header/PageHeader';

const AboutUs = () => {
  return (
    <Layout title="About Us" description="This is about us page">
      <PageHeader title="About Us" />

      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto lg:py-20 py-10 px-4 sm:px-10">
          <div className="grid grid-flow-row lg:grid-cols-2 gap-4 lg:gap-16 items-center">
            <div className="">
              <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                Welcome to our SOR Service
              </h3>
              <div className="mt-3 text-base opacity-90 leading-7">
                <p>
                  Welcome to our SOR Service Center! We are a team of dedicated professionals with a passion for delivering
                  top-notch auto repair and maintenance services to our valued customers.Our center has been serving the local
                  community for several years, and we take pride in providing exceptional services that keep our customers coming
                  back time and time again. Our experienced mechanics are skilled in diagnosing and repairing a wide range of vehicle
                  issues, from routine maintenance to complex repairs.
                </p>

                <p>
                  At our service center, we prioritize customer satisfaction above all else. We believe that communication and
                  transparency are essential to building trust with our customers, which is why we keep you informed throughout the
                  repair process. We provide detailed estimates, explain our recommended services, and always obtain your approval
                  before proceeding with any repairs. We use only the highest quality parts and state-of-the-art equipment to ensure
                  that your vehicle receives the best possible care. We offer a full range of services, including oil changes, brake
                  repairs, engine diagnostics, tire replacements, and more. No matter what your vehicle needs, we are here to help.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-2 xl:gap-6 mt-8">
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                    10K
                  </span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    Listed Products
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">
                    Dynamically morph team driven partnerships after vertical.{' '}
                  </p>
                </div>
                <div className="p-8 bg-indigo-50 shadow-sm rounded-lg">
                  <span className="text-3xl block font-extrabold font-serif mb-4 text-gray-800">
                    8K
                  </span>
                  <h4 className="text-lg font-serif font-bold mb-1">
                    Lovely Customer
                  </h4>
                  <p className="mb-0 opacity-90 leading-7">
                    Competently productize virtual models without performance.{' '}
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0">
              <Image width={700} height={500} src="/about-us.jpg" alt="logo" />
            </div>
          </div>
          <div className="mt-10 lg:mt-16 text-base opacity-90 leading-7">
            <p>
              We understand that having your car in the shop can be stressful and inconvenient, which is why we offer flexible
              scheduling and quick turnaround times. We strive to make the repair process as easy and hassle-free as possible, so
              you can get back on the road with confidence. Thank you for considering our Vehicle Service Center for your auto repair
              needs. We look forward to the opportunity to serve you and exceed your expectations.{' '}
            </p>

            <p>
              {' '}
              Our team of certified technicians has years of experience in the automotive industry and undergoes continuous training
              to stay up-to-date with the latest technologies and trends. We use state-of-the-art diagnostic equipment and tools to
              identify and fix any issues with your vehicle, ensuring that it runs smoothly and efficiently. At our service center,
              we believe in transparency and honesty in our work. We will never recommend any unnecessary repairs or services, and
              we will always provide you with a detailed estimate of the cost and timeline for any work that needs to be done.
              We are committed to delivering high-quality work at competitive prices, so you can have peace of mind knowing that
              you are getting the best value for your money. We take pride in our work and stand behind it with a warranty on all
              of our services. Our goal is to provide you with a hassle-free and convenient experience, so you can get back on the
              road as soon as possible.
            </p>
          </div>
          <div className="mt-10 lg:mt-12 flex flex-col sm:grid gap-4">
            <Image
              width={1000}
              height={800}
              src="/about-banner.jpg"
              alt="logo"
              className="block rounded-lg"
            />
          </div>
        </div>
        <div className="bg-gray-50 lg:py-20 py-10">
          <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
            <div className="relative flex flex-col sm:flex-row sm:items-end justify-between mb-8">
              <div className="max-w-2xl">
                <h3 className="text-xl lg:text-3xl mb-2 font-serif font-semibold">
                  Our Founder
                </h3>
                <p className="mt-2 md:mt-3 font-normal block text-base">
                  We’re impartial and independent, and every day we create
                  distinctive, world-class reintermediate backend supply
                  programmes.
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-6 xl:gap-x-8">
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-1.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Niamh Shea
                  </h5>
                  <span className="opacity-75 text-sm">
                    Co-founder & Executive
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-2.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Orla Dwyer
                  </h5>
                  <span className="opacity-75 text-sm">Chief Executive</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-3.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Danien James
                  </h5>
                  <span className="opacity-75 text-sm">
                    Co-founder, Chairman
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-4.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Dara Frazier
                  </h5>
                  <span className="opacity-75 text-sm">
                    Chief Strategy Officer
                  </span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-5.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Glenda Arvidson
                  </h5>
                  <span className="opacity-75 text-sm">HR Officer</span>
                </div>
              </div>
              <div className="max-w-sm">
                <Image
                  width={420}
                  height={420}
                  src="/team/team-6.jpg"
                  alt="logo"
                  className="block rounded-lg"
                />
                <div className="py-4">
                  <h5 className="text-lg font-semibold font-serif">
                    Melvin Davis
                  </h5>
                  <span className="opacity-75 text-sm">Lead Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutUs;
