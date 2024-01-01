import {
  FiUser,
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import {
  IoBagCheckOutline,
  IoGridOutline,
  IoListOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

const pages = [
  {
    title: 'User',
    href: '/user/dashboard',
    icon: FiUser,
  },
  {
    title: 'Offer',
    href: '/offer',
    icon: FiGift,
  },
  {
    title: 'Checkout',
    href: '/checkout',
    icon: IoBagCheckOutline,
  },
  {
    title: 'Catalog',
    href: '/catalog',
    icon: IoBagCheckOutline,
  },
  {
    title: 'FAQ',
    href: '/faq',
    icon: FiHelpCircle,
  },
  {
    title: 'About Us',
    href: '/about-us',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
    icon: HiOutlinePhoneIncoming,
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'Terms & Conditions',
    href: '/terms-and-conditions',
    icon: HiOutlineDocumentText,
  },
  {
    title: 'Reservation',
    href: '/reservation',
    icon: FiAlertCircle,
  },
];

const userSidebar = [
  {
    title: 'Dashboard',
    href: '/user/dashboard',
    icon: IoGridOutline,
  },
  {
    title: 'My Reservations',
    href: '/user/my-reservations',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'My Orders',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'Update Profile',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  },
  {
    title: 'Change Password',
    href: '/user/change-password',
    icon: HiOutlineDocumentText,
  },
];

const sliderData = [
  {
    id: 1,
    title: 'The Best Quality Products Guaranteed!',
    info: 'Dramatically facilitate effective total linkage for go forward processes...',
    image: '/slider/slider-1.jpg',
  },
  {
    id: 2,
    title: 'Different Types of Categories',
    info: 'Quickly aggregate empowered networks after emerging products...',
    image: '/slider/slider-2.jpg',
  },
  {
    id: 3,
    title: 'Quality 100% Guaranteed!',
    info: 'Intrinsicly fashion performance based products rather than accurate benefits...',
    image: '/slider/slider-3.jpg',
  },
];

const featurePromo = [
  {
    id: 1,
    title: 'Any Product',
    info: 'Starting From Rs.500.00',
    icon: HiOutlineShieldCheck,
  },
  {
    id: 2,
    title: 'Support 24/7',
    info: 'At Anytime',
    icon: FiPhoneCall,
  },
  {
    id: 3,
    title: 'Secure Payment',
    info: 'Totally Safe',
    icon: FiCreditCard,
  },
  {
    id: 4,
    title: 'Latest Offer',
    info: 'Upto 20% Off',
    icon: FiGift,
  },
];

const contactData = [
  {
    id: 1,
    title: 'Email Us',
    info: 'Interactively grow empowered for process-centric total linkage.',
    icon: FiMail,
    contact: 'sorservice12@gmail.com',
    className: 'bg-blue-100',
  },
  {
    id: 2,
    title: 'Call Us',
    info: 'Distinctively disseminate focused solutions clicks-and-mortar ministate.',
    icon: FiPhoneCall,
    contact: '037-2230564',
    className: 'bg-blue-100',
  },
  {
    id: 3,
    title: 'Location',
    info: 'Come have a look at our service center',
    icon: FiMapPin,
    contact: 'No 81, Mallawapitiya, Kurunegala',
    className: 'bg-blue-100',
  },
];

export {
  pages,
  userSidebar,
  sliderData,
  featurePromo,
  contactData,
};
