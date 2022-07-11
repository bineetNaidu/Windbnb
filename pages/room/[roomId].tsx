import { Input, InputWrapper } from '@mantine/core';
import { DateRangePicker } from '@mantine/dates';
import type { GetServerSidePropsContext, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useMemo, useState } from 'react';
import { dehydrate, useQuery } from 'react-query';
import Layout from '../../components/Layout';
import { getRoom, queryClient } from '../../lib/requestClients';

const Home: NextPage<{ roomId: number }> = ({ roomId }) => {
  const { data, isLoading } = useQuery(['room'], () => getRoom({ id: roomId }));
  const [[checkIn, checkOut], setSelectedDates] = useState<
    [Date | null, Date | null]
  >([new Date(Date.now()), new Date(Date.now() + 1000 * 60 * 60 * 24 * 7)]);

  const numberOfDays = useMemo(() => {
    if (!checkIn || !checkOut) return 0;
    return checkOut.getDate() - checkIn.getDate();
  }, [checkIn, checkOut]);

  const rentCharge = useMemo(() => {
    if (!data) return 0;
    return data.room!.price * (numberOfDays - 1);
  }, [data, numberOfDays]);

  const totalCharge = useMemo(() => {
    if (!data) return 0;
    return rentCharge + 5000;
  }, [data, rentCharge]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <Layout title={`${data?.room?.name}, ${data?.room?.location} | Windbnb`}>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      {!data || !data.room ? (
        <div className="text-center">
          <h1>Something Went Wrong!</h1>
        </div>
      ) : (
        <main className="py-8">
          <div className="mb-8">
            <h1 className="text-4xl text-green-700 font-bold">
              <span>{data.room.name}</span>
              {data.room.host?.isSuperhost && (
                <span className="text-base border border-green-600 rounded p-1 ml-3">
                  <i className="fa-solid fa-star mr-1"></i>
                  SuperHost
                </span>
              )}
            </h1>
            <h2 className="text-xl text-green-900 underline">
              {data.room.location}
            </h2>
          </div>
          <div className="grid grid-flow-col grid-rows gap-4">
            {data.room.images.map((img, idx) => (
              <div
                className={`${idx === 0 && 'row-span-2'} h-full w-full`}
                key={idx}
              >
                <Image
                  src={img}
                  alt={`image-${idx}`}
                  width={'100%'}
                  height={'100%'}
                  layout="responsive"
                  className="rounded-xl"
                />
              </div>
            ))}
          </div>

          <main className="flex py-8">
            <div className="flex-[0.6]">
              <div className="flex-col">
                <div className="mt-8">
                  <h2 className="text-2xl text-green-900 font-medium">
                    {data.room.apartmentType} is hosted by{' '}
                    {data.room.host?.name}
                  </h2>
                  <p className="text-lg text-green-700">
                    {data.room.guests} Guests * {data.room.beds} Beds *{' '}
                    {data.room.bedrooms} Bedrooms * {data.room.bathrooms}{' '}
                    Bathrooms
                  </p>
                </div>
                <hr className="border-t my-4 border-green-300" />
                <div className="text-green-700 py-5">
                  <h1 className="text-2xl font-medium mb-4">
                    Our Cancelation Policy
                  </h1>

                  <p>
                    Every booking includes free protection from Host
                    cancellations, listing inaccuracies, and other issues like
                    trouble checking in
                  </p>
                </div>
                <hr className="border-t my-4 border-green-300" />
                <div className="text-green-700 py-5">
                  {data.room.description}
                </div>
                <hr className="border-t my-4 border-green-300" />
                <div className="text-green-700 py-5">
                  <h1 className="text-2xl font-medium mb-4">
                    Where You will sleep
                  </h1>

                  <div className="flex">
                    <div className="shadow-xl rounded-lg bg-green-200 p-8">
                      {data.room.bedrooms} Bedrooms
                    </div>
                  </div>
                </div>
                <hr className="border-t my-4 border-green-300" />
                <div className="text-green-700 py-5">
                  <h1 className="text-2xl font-medium mb-4">
                    What this place offers
                  </h1>

                  <ul className="list-disc list-inside">
                    {data.room.hasTv && (
                      <li>
                        <span className="text-green-700">TV</span>
                      </li>
                    )}
                    {data.room.hasWifi && (
                      <li>
                        <span className="text-green-700">Wifi</span>
                      </li>
                    )}
                    {data.room.hasKitchen && (
                      <li>
                        <span className="text-green-700">Kitchen</span>
                      </li>
                    )}
                    {data.room.hasFreeParking && (
                      <li>
                        <span className="text-green-700">
                          Free Parking Area
                        </span>
                      </li>
                    )}
                    {data.room.hasAirconditioning && (
                      <li>
                        <span className="text-green-700">AC rooms</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-[0.4]">
              <div className="flex flex-col justify-center items-center">
                <div className="shadow-2xl rounded-lg bg-green-200 p-8 w-11/12 text-green-800">
                  <h1 className="text-xl font-medium mb-4">
                    Rs. {data.room.price} per night
                  </h1>

                  <div>
                    <DateRangePicker
                      label="Check In/Out"
                      placeholder="Pick dates range"
                      value={[checkIn, checkOut]}
                      onChange={setSelectedDates}
                    />
                    <InputWrapper
                      className="mt-4"
                      required
                      label="Number of Guests"
                      description="Please enter the number of guests you would like to book"
                    >
                      <Input
                        component="select"
                        rightSection={
                          <i className="fa-solid fa-chevron-down"></i>
                        }
                      >
                        {new Array(data.room.guests).fill(0).map((_, idx) => (
                          <option key={idx} value={idx + 1}>
                            {idx + 1}
                          </option>
                        ))}
                      </Input>
                    </InputWrapper>
                  </div>
                  <div className="my-4 flex flex-col items-center">
                    <button
                      className="bg-green-500 text-white font-bold py-2 px-10 rounded-lg 
											hover:bg-green-600 transition-all active:shadow-lg"
                    >
                      Reserve Now
                    </button>
                    <span className="text-green-600 font-light mt-4">
                      You wont be charged yet
                    </span>
                  </div>
                  <hr className="border-t border-green-500 my-5" />
                  <div className="flex justify-between">
                    <span className="underline">Number of Days/Nights</span>
                    <span>
                      {numberOfDays - 1}
                      Nights / {numberOfDays} Days
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Rent Charges</span>
                    <span>Rs {rentCharge}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="underline">Service Fee</span>
                    <span>Rs 5000</span>
                  </div>
                  <hr className="border-t border-green-500 my-5" />
                  <div className="flex justify-between">
                    <span className="underline">Total Charges</span>
                    <span>Rs {totalCharge}</span>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </main>
      )}
    </Layout>
  );
};

export const getServerSideProps = async (
  ctx: GetServerSidePropsContext<{ roomId: string }>
) => {
  const roomId = parseInt(ctx.params!.roomId);
  await queryClient.prefetchQuery(['room'], () => getRoom({ id: roomId }));

  return {
    props: {
      roomId,
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default Home;
