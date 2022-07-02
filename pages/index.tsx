import Layout from '../components/Layout';
import type { NextPage } from 'next';
import { dehydrate, useQuery } from 'react-query';
import { getRooms, queryClient } from '../lib/requestClients';
import { PropertyCard } from '../components/PropertyCard';

const Home: NextPage = () => {
  const { data } = useQuery(['rooms'], () => getRooms());

  return (
    <Layout>
      <main className="py-8">
        <h1 className="text-4xl text-green-800 font-medium pb-10">
          Some awesome room here:
        </h1>
        {!data?.rooms ? (
          <div className="text-center">
            <h1 className="italic text-green-600 pt-16">
              No Room Available at the moment. sorry!
            </h1>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {data.rooms.map((room) => (
              <PropertyCard room={room} key={room.id} />
            ))}
          </div>
        )}
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  await queryClient.prefetchQuery(['rooms'], () => getRooms());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default Home;
