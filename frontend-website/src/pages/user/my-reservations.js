import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { IoBagHandle } from 'react-icons/io5';

//internal import
import useAsync from '@hooks/useAsync';
import Dashboard from '@pages/user/dashboard';
import ReservationServices from '@services/ReservationServices';
import Loading from '@component/preloader/Loading';
import { UserContext } from '@context/UserContext';
import ReservationHistory from '@component/reservation/ReservationHistory';

const MyReservations = () => {
  const router = useRouter();
  const {
    state: { userInfo },
  } = useContext(UserContext);
  const { data, error, loading } = useAsync(ReservationServices.getReservationByUser);

  useEffect(() => {
    if (!userInfo) {
      router.push('/');
    }
  }, []);

  return (
    <Dashboard title="My Reservations" description="This is user Reservation history page">
      <div className="overflow-hidden rounded-md font-serif">
        {loading ? (
          <Loading loading={loading} />
        ) : error ? (
          <h2 className="text-2xl text-center my-10 mx-auto w-11/12">
            {error}
          </h2>
        ) : data.length === 0 ? (
          <div className="text-center">
            <span className="flex justify-center my-30 pt-16 new-text-600 font-semibold text-6xl">
              <IoBagHandle />
            </span>
            <h2 className="font-medium text-md my-4 text-gray-600">
              You Have no Reservations Yet!
            </h2>
          </div>
        ) : (
          <div className="flex flex-col">
            <h2 className="text-xl font-serif font-semibold mb-5">My Reservations</h2>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                  <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr className="bg-gray-100">
                        <th
                          scope="col"
                          className="text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                        >
                          Service Date
                        </th>

                        <th
                          scope="col"
                          className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                        >
                          Service Time
                        </th>
                        <th
                          scope="col"
                          className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                        >
                          Service Type
                        </th>
                        <th
                          scope="col"
                          className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                        >
                          Payment Method
                        </th>
                        <th
                          scope="col"
                          className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {data?.map((reservation) => (
                        <tr key={reservation._id}>
                          <ReservationHistory reservation={reservation} />
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </Dashboard>
  );
};

export default MyReservations;
