import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { ImStack } from 'react-icons/im';
import { FiRefreshCw, FiCheck, FiBook } from 'react-icons/fi';

import useAsync from '../hooks/useAsync';
import useFilter from '../hooks/useFilter';
import ReservationServices from '../services/ReservationServices';
import ChartCard from '../components/chart/ChartCard';
import CardItem from '../components/dashboard/CardItem';
import PageTitle from '../components/Typography/PageTitle';
import { barOptions, doughnutOptions } from '../utils/chartsData';
import DashboardOrderCard from '../components/dashboard/DashboardOrderCard';
import DashboardOrderTable from '../components/dashboard/DashboardOrderTable';
import DashboardRevTable from '../components/dashboard/DashboardRevTable';

const Dashboard = () => {
  const { data } = useAsync(ReservationServices.getAllReservations);

  const {
    pending,
    processing,
    completed,
  } = useFilter(data);

  return (
    <>
      <PageTitle>Dashboard Overview</PageTitle>

      <DashboardOrderCard />

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <CardItem
          title="Total Reservation"
          Icon={FiBook}
          quantity={data.length}
          className="text-orange-600 dark:text-orange-100 bg-orange-100 dark:bg-orange-500"
        />
        <CardItem
          title="Reservation Pending"
          Icon={FiRefreshCw}
          quantity={pending.length}
          className="text-blue-600 dark:text-blue-100 bg-blue-100 dark:bg-blue-500"
        />
        <CardItem
          title="Reservation Processing"
          Icon={ImStack}
          quantity={processing.length}
          className="text-teal-600 dark:text-teal-100 bg-teal-100 dark:bg-teal-500"
        />
        <CardItem
          title="Reservation Completed"
          Icon={FiCheck}
          quantity={completed.length}
          className="text-green-600 dark:text-green-100 bg-green-100 dark:bg-green-500"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2 my-8">
        <ChartCard title="Monthly Sales">
          <Bar {...barOptions} />
        </ChartCard>
        <ChartCard title="Best Selling Category">
          <Doughnut {...doughnutOptions} className="chart" />
        </ChartCard>
      </div>

      <PageTitle>Recent Order</PageTitle>
      <DashboardOrderTable />

      <PageTitle>Recent Reservation</PageTitle>
      <DashboardRevTable />
    </>
  );
};

export default Dashboard;
