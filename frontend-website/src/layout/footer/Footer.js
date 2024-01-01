import React, { useContext } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  FacebookIcon,
  LinkedinIcon,
  PinterestIcon,
  TwitterIcon,
  WhatsappIcon,
  LineIcon
} from 'react-share';

//internal import
import { UserContext } from '@context/UserContext';

const Footer = ({ companyLogo, dataPath, companyName, locationName, locationAddress1, locationAddress2, locationCity, locationStateOrProvince, locationCountry, locationPostalCode,
  locationEmail, locationTel,
}) => {
  const {
    state: { userInfo },
  } = useContext(UserContext);


  var companyFacebook = '';
  var companyLine = '';
  if (sessionStorage.getItem('companyFacebook')) {

    companyFacebook = sessionStorage.getItem('companyFacebook');

    //alert(companyFacebook)
  }
  if (sessionStorage.getItem('companyLine')) {

    companyLine = sessionStorage.getItem('companyLine');
  }



  return (
    <div className="pb-16 lg:pb-0 xl:pb-0 bg-white">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-10">
        <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 lg:py-16 justify-between">
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              Company
            </h3>
            <ul className="text-sm flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/about-us">
                  <a className="text-gray-600 inline-block w-full hover:text-cyan-500">
                    About Us
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/contact-us">
                  <a className="text-gray-600 inline-block w-full hover:text-cyan-500">
                    Contact us
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/reservation">
                  <a className="text-gray-600 inline-block w-full hover:text-cyan-500">
                    Reservations
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="/offer">
                  <a className="text-gray-600 inline-block w-full hover:text-cyan-500">
                    Offers
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              My Account
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? "/user/dashboard" : "#"}`}>
                  <a className="text-black inline-block w-full hover:new-text-600">
                    Dashboard
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href={`${userInfo?.email ? "/user/my-orders" : "#"}`}>
                  <a className="text-black inline-block w-full hover:new-text-600">
                    My Orders
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href={`${userInfo?.email ? '/user/dashboard' : '#'}`}
                >
                  <a className="text-gray-600 inline-block w-full hover:text-cyan-500">
                    Recent Orders
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link
                  href={`${userInfo?.email ? "/user/update-profile" : "#"}`}
                >
                  <a className="text-black inline-block w-full hover:new-text-600">
                    Updated Profile
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <h3 className="text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
              Top Category
            </h3>
            <ul className="text-sm lg:text-15px flex flex-col space-y-3">
              <li className="flex items-baseline">
                <Link href="/search?Category=audio">
                  <a className="text-gray-600 inline-block w-full hover:text-cyan-500">
                    Audio
                  </a>
                </Link>
              </li>

              <li className="flex items-baseline">
                <Link href="/search?Category=battery">
                  <a className="text-gray-600 inline-block w-full hover:text-cyan-500">
                    Battery
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=exterior">
                  <a className="text-gray-600 inline-block w-full hover:text-cyan-500">
                    Exterior
                  </a>
                </Link>
              </li>
              <li className="flex items-baseline">
                <Link href="search?Category=interior">
                  <a className="text-gray-600 inline-block w-full hover:text-cyan-500">
                    Interior
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
            <Image
              width={300}
              height={80}
              src="/logo/Logo.jpg"
              alt="logo"
            />
            <p className="leading-7 font-sans text-sm text-gray-600 mt-3">
              <span>
                SOR Service
              </span>
              <br />
              <span>
                Location:
              </span>
              <br />
              No 81, Mallawapitiya, Kurunegala
              <br />
              <span>Tel: 0372230564</span>
              <br />
              <span>Email: sorservice12@gmail.com</span>
            </p>
          </div>
        </div>

        <hr className="hr-line"></hr>
      </div>

      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 flex justify-center py-4">
        <p className="text-sm text-gray-500 leading-6">
          Copyright {new Date().getFullYear()} @{' '}
          <Link href="https://www.linkedin.com/in/mihindum-liyanage-576a961b1/?original_referer=">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500"
            >
              Mihindum Liyanage
            </a>
          </Link>
          , All rights reserved.
          Prolifit Software & Technology Co., Ltd. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Footer), { ssr: false });
