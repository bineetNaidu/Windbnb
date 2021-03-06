import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import { useQuery } from 'react-query';
import { getHost } from '../lib/requestClients';
import { useEffect } from 'react';

const Navbar: FC = () => {
  const { user, isLoading } = useUser();
  const { data: getHostdata, refetch: getHostRefetch } = useQuery(
    ['host'],
    () => getHost({ email: user?.email ?? '' })
  );

  useEffect(() => {
    if (user) {
      getHostRefetch();
    }
  }, [user, getHostRefetch]);

  return (
    <div className="flex justify-between p-6">
      <div>
        <Link href="/">
          <a className="text-3xl font-bold text-green-800">WindBnB</a>
        </Link>
      </div>

      <div className="relative">
        <input
          type="text"
          className="w-full py-2 pr-12 pl-6 border-2 border-green-600 rounded-3xl focus:bg-green-200 outline-none bg-transparent transition-all"
        />
        <button className="absolute bg-green-500 hover:bg-green-700 text-white font-bold rounded w-6 h-6 top-2.5 right-4 transition-all">
          +
        </button>
      </div>

      <div className="flex">
        {isLoading ? (
          <div>Loading...</div>
        ) : user ? (
          <div className="flex">
            {getHostdata?.host ? (
              <Link href="/host/homes">
                <div className="bg-green-300 border-green-600 px-4 py-2 rounded-lg text-green-900 border-2 hover:bg-green-600 hover:text-white transition-all cursor-pointer mr-2">
                  Your Homes
                </div>
              </Link>
            ) : (
              <Link href="/host/become-host">
                <div className="bg-green-300 border-green-600 px-4 py-2 rounded-lg text-green-900 border-2 hover:bg-green-600 hover:text-white transition-all cursor-pointer mr-2">
                  Become Host
                </div>
              </Link>
            )}
            <div className="bg-green-300 border-green-600 px-4 py-2 rounded-lg text-green-900 border-2 transition-all mr-2 flex">
              <Image
                src={user.picture!}
                alt={user.name!}
                width={25}
                height={25}
              />
              <span className="ml-2">{user.name}</span>
            </div>
            <Link href="/api/auth/logout">
              <div className="bg-green-300 border-green-600 px-4 py-2 rounded-lg text-green-900 border-2 hover:bg-green-600 hover:text-white transition-all cursor-pointer mr-2">
                Logout
              </div>
            </Link>
          </div>
        ) : (
          <Link href="/signin">
            <div className="bg-green-300 border-green-600 px-4 py-2 rounded-lg text-green-900 border-2 hover:bg-green-600 hover:text-white transition-all cursor-pointer mr-2">
              Signin
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export { Navbar };
