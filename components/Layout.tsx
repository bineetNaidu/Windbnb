import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from './Navbar';

interface LayoutProps {
  title?: string;
  children?: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title ?? 'WindBnB'}</title>
        <meta
          name="description"
          content="Wirbnb, Inc. is an Indian company that operates an online marketplace for lodging, primarily homestays for vacation rentals, and tourism activities."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-green-100 min-h-screen h-full">
        <div className="container mx-auto">
          <Navbar />
          <main className="xl:px-6 lg:px-5 md:px-3 sm:px-0">{children}</main>
        </div>
      </div>
    </>
  );
};

export default Layout;
