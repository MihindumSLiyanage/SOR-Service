import {
  FiBook,
  FiGrid,
  FiShoppingBag,
  FiUsers,
  FiUser,
  FiCompass,
  FiGift,
  FiList,
  FiBattery
} from 'react-icons/fi';

const sidebar = [
  {
    path: '/dashboard', // the url
    icon: FiGrid, // icon
    name: 'Dashboard', // name that appear in Sidebar
  },
  {
    path: '/reservations',
    icon: FiBattery,
    name: 'Reservations',
  },
  {
    path: '/products',
    icon: FiShoppingBag,
    name: 'Products',
  },
  {
    path: '/category',
    icon: FiList,
    name: 'Category',
  },
  {
    path: '/customers',
    icon: FiUsers,
    name: 'Customers',
  },
  // {
  //   path: '/reports',
  //   icon: FiBook,
  //   name: 'Reports',
  // },
  {
    path: '/orders',
    icon: FiCompass,
    name: 'Orders',
  },
  {
    path: '/coupons',
    icon: FiGift,
    name: 'Coupons',
  },
  {
    path: '/staff',
    icon: FiUser,
    name: 'Staff',
  },

];

export default sidebar;
