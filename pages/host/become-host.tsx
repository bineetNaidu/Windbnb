import type { NextPage } from 'next';
import Layout from '../../components/Layout';
import { withPageAuthRequired, UserProfile } from '@auth0/nextjs-auth0';
import { useState, useCallback } from 'react';
import { CreateHostModal } from '../../components/CreateHostModal';

const BecomeHost: NextPage<{ user: UserProfile }> = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
  }, [setIsModalOpen]);

  const handleOpen = useCallback(() => {
    setIsModalOpen(true);
  }, [setIsModalOpen]);

  return (
    <>
      {isModalOpen && (
        <CreateHostModal authUser={user} handleClose={handleClose} />
      )}
      <Layout title="Host Your Home in WindBnb">
        <main className="flex flex-col justify-center items-center mt-10">
          <h1 className="text-5xl font-bold text-green-800 mb-5">
            Open your door to hosting
          </h1>

          <div className="text-green-600 font-light text-xl flex flex-col items-center">
            <p>
              WindBnb is a platform for people to host their homes and share
              them with others.
            </p>
            <p>
              To become a host, you need to have a verified email address and a
              verified phone number.
            </p>
            <p>You can also host your home on WindBnb for free.</p>

            <button
              className="bg-green-500 hover:bg-green-700 text-white font-bold rounded px-4 py-2 top-2.5 right-4 transition-all mt-10 text-base"
              onClick={handleOpen}
            >
              Try Hosting
            </button>
          </div>
        </main>

        <main></main>
      </Layout>
    </>
  );
};

export const getServerSideProps = withPageAuthRequired();

export default BecomeHost;
