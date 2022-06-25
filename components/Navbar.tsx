import { FC } from 'react';
import Link from 'next/link';

const Navbar: FC = () => {
  return (
    <div className="flex justify-between p-6">
      <div>
        <a className="text-3xl font-bold text-green-800">WindBnB</a>
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
        <Link href="/login">
          <div className="bg-green-300 border-green-600 px-4 py-2 rounded-lg text-green-800 border-2 hover:bg-green-600 hover:text-white transition-all cursor-pointer mr-2">
            Login
          </div>
        </Link>

        <Link href="/register">
          <div className="bg-green-300 border-green-600 px-4 py-2 rounded-lg text-green-800 border-2 hover:bg-green-600 hover:text-white transition-all cursor-pointer">
            Register
          </div>
        </Link>
      </div>
    </div>
  );
};

export { Navbar };
