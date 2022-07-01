import Link from 'next/link';
import Layout from '../../../components/Layout';
import { withPageAuthRequired, useUser, getSession } from '@auth0/nextjs-auth0';
import { dehydrate, useQuery } from 'react-query';
import { queryClient, roomsByHost } from '../../../lib/requestClients';
import { PropertyCard } from '../../../components/PropertyCard';

const HostHomes = () => {
  const { user } = useUser();
  const { data: hostRoomData, isLoading: isLoadingHostRooms } = useQuery(
    ['hostRooms'],
    () => roomsByHost({ hostEmail: user?.email ?? '' })
  );

  return (
    <Layout title="Host | Listed Homes">
      <hr className="border-t-1 border-green-500 my-5" />

      <main className="flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-green-700">Hey Host,</h1>
          <h2 className="text-3xl font-semibold text-green-600">
            Your listed homes.
          </h2>
        </div>

        <div>
          <Link href="/host/homes/new">
            <a className="bg-green-500 hover:bg-green-700 text-white font-bold rounded px-4 py-2 top-2.5 right-4 transition-all mt-10 text-base">
              Register your home?
            </a>
          </Link>
        </div>
      </main>

      <hr className="border-b-1 border-green-500 my-5" />

      <article className="pb-8">
        {isLoadingHostRooms ? (
          <div>Loading...</div>
        ) : hostRoomData?.roomsByHost?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {hostRoomData.roomsByHost.map((room) => (
              <PropertyCard room={room} key={room.id} />
            ))}
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-thin text-green-600 italic mb-5">
              You have no listed homes.
            </h2>
            <Link href="/host/homes/new">
              <a className="bg-green-500 hover:bg-green-700 text-white font-bold rounded px-4 py-2 top-2.5 right-4 transition-all mt-10 text-base">
                Register your home?
              </a>
            </Link>
          </div>
        )}
      </article>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps(ctx) {
    const session = getSession(ctx.req, ctx.res);
    await queryClient.prefetchQuery(['hostRooms'], () =>
      roomsByHost({ hostEmail: session!.user.email })
    );
    return {
      props: {
        dehydratedState: dehydrate(queryClient),
      },
    };
  },
});

export default HostHomes;
