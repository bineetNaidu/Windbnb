import Layout from '../components/Layout';
import type { NextPage } from 'next';
import { dehydrate, useQuery } from 'react-query';
import { getRooms, queryClient } from '../lib/requestClients';

const Home: NextPage = () => {
  const { data } = useQuery(['rooms'], () => getRooms());

  return (
    <Layout>
      <h1>Welcome to WindBnB</h1>
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
