import { lazy } from 'react';

// use lazy for better code splitting
const Dashboard = lazy(() => import('../pages/Dashboard'));
const Products = lazy(() => import('../pages/Products'));
const ProductDetails = lazy(() => import('../pages/ProductDetails'));
const Category = lazy(() => import('../pages/Category'));
const Staff = lazy(() => import('../pages/Staff'));
const Customers = lazy(() => import('../pages/Customers'));
const CustomerOrder = lazy(() => import('../pages/CustomerOrder'));
const Orders = lazy(() => import('../pages/Orders'));
const OrderInvoice = lazy(() => import('../pages/OrderInvoice'));
const Coupons = lazy(() => import('../pages/Coupons'));
const Reports = lazy(() => import("../pages/Reports"));
// const Setting = lazy(() => import("../pages/Setting"));
const Page404 = lazy(() => import('../pages/404'));
const EditProfile = lazy(() => import('../pages/EditProfile'));
const Reservation = lazy(() => import('../pages/Reservation'));
const ReservationDetails = lazy(() => import('../pages/ReservationDetails'));
const ReservationInvoice = lazy(() => import('../pages/ReservationInvoice'));

const routes = [
  {
    path: '/dashboard',
    component: Dashboard,
  },
  {
    path: '/reservations',
    component: Reservation,
  },
  {
    path: '/reservations/:id',
    component: ReservationDetails,
  },
  {
    path: '/reservations/:id/invoice',
    component: ReservationInvoice,
  },
  {
    path: '/products',
    component: Products,
  },
  {
    path: '/product/:id',
    component: ProductDetails,
  },
  {
    path: '/category',
    component: Category,
  },
  {
    path: '/customers',
    component: Customers,
  },
  {
    path: '/customer-order/:id',
    component: CustomerOrder,
  },
  {
    path: '/reports',
    component: Reports,
  },
  {
    path: '/staff',
    component: Staff,
  },
  {
    path: '/orders',
    component: Orders,
  },
  {
    path: '/order/:id',
    component: OrderInvoice,
  },
  {
    path: '/coupons',
    component: Coupons,
  },
  { path: '/setting', component: EditProfile },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/edit-profile',
    component: EditProfile,
  },
];

export default routes;
