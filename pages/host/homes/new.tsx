import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Formik, Form } from 'formik';
import { Field } from '../../../components/Field';
import Layout from '../../../components/Layout';
import { prisma } from '../../../lib/prisma';
import { useMutation } from 'react-query';
import { createRoom } from '../../../lib/requestClients';
import { CreateRoomInput } from '../../../lib/graphql';
import toast, { Toaster } from 'react-hot-toast';
import { NextPage } from 'next';
import Router from 'next/router';
import { useUser } from '@auth0/nextjs-auth0';

const INITIAL_VALUES = {
  name: '',
  images: ['', '', '', '', ''],
  rating: 0,
  apartmentType: '',
  location: '',
  beds: 0,
  bedrooms: 0,
  bathrooms: 0,
  guests: 0,
  price: 0,
  description: '',
  cancellable: true,
  hasTv: true,
  hasKitchen: true,
  hasAirconditioning: false,
  hasWifi: true,
  hasFreeParking: false,
};

const NewHome: NextPage = () => {
  const createRoomMutation = useMutation((data: CreateRoomInput) =>
    createRoom({ data })
  );
  const { user, isLoading } = useUser();

  return (
    <Layout title="List New Home | WindBnb">
      <Toaster />
      <main className="mx-auto w-9/12 mt-8">
        <h1 className="text-4xl text-green-600 font-bold">List New Home</h1>

        <Formik
          initialValues={INITIAL_VALUES}
          onSubmit={async (values, { setSubmitting, setValues }) => {
            try {
              setSubmitting(true);
              await createRoomMutation.mutateAsync({
                ...values,
                beds: parseInt(values.beds as any),
                bedrooms: parseInt(values.bedrooms as any),
                bathrooms: parseInt(values.bathrooms as any),
                guests: parseInt(values.guests as any),
                price: parseInt(values.price as any),
                hostEmail: user?.email!,
              });
              toast.success('Your home has been listed!');
              setValues(INITIAL_VALUES);
              Router.push('/host/homes');
              setSubmitting(false);
            } catch (error) {
              toast.error((error as any).response.errors[0].message);
            }
          }}
        >
          {({ isSubmitting, getFieldProps }) => (
            <Form>
              <hr className="border-t border-green-500 my-4" />

              <div className="flex flex-col py-8">
                <main>
                  <h2 className="text-2xl font-semibold text-green-500 italic">
                    Home Details
                  </h2>
                  <div>
                    <Field
                      label="Name"
                      formikProps={getFieldProps('name')}
                      placeholder="Name"
                      type="text"
                    />
                    <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                      <Field
                        label="Apartment Type"
                        formikProps={getFieldProps('apartmentType')}
                        placeholder="Apartment Type"
                        type="text"
                      />
                      <Field
                        label="Location"
                        formikProps={getFieldProps('location')}
                        placeholder="Location"
                        type="text"
                      />
                    </div>
                    <Field
                      label="Description"
                      formikProps={getFieldProps('description')}
                      isTextArea
                    />
                  </div>
                </main>
                <hr className="border-t border-green-500 my-4" />

                <main>
                  <h2 className="text-2xl font-semibold text-green-500 italic">
                    Home/Room Images
                  </h2>
                  <div className="grid grid-col-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Images 1"
                      formikProps={getFieldProps('images[0]')}
                      placeholder="Images 1"
                      type="text"
                    />
                    <Field
                      label="Images 2"
                      formikProps={getFieldProps('images[1]')}
                      placeholder="Images 2"
                      type="text"
                    />
                    <Field
                      label="Images 3"
                      formikProps={getFieldProps('images[2]')}
                      placeholder="Images 3"
                      type="text"
                    />
                    <Field
                      label="Images 4"
                      formikProps={getFieldProps('images[3]')}
                      placeholder="Images 4"
                      type="text"
                    />
                  </div>
                  <Field
                    label="Images 5"
                    formikProps={getFieldProps('images[4]')}
                    placeholder="Images 5"
                    type="text"
                  />
                </main>

                <hr className="border-t border-green-500 my-4" />
                <main>
                  <h2 className="text-2xl font-semibold text-green-500 italic">
                    Room Informations
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-4">
                    <Field
                      label="Beds"
                      formikProps={getFieldProps('beds')}
                      placeholder="Beds"
                      type="number"
                    />
                    <Field
                      label="Bedrooms"
                      formikProps={getFieldProps('bedrooms')}
                      placeholder="Bedrooms"
                      type="number"
                    />
                    <Field
                      label="Bathrooms"
                      formikProps={getFieldProps('bathrooms')}
                      placeholder="Bathrooms"
                      type="number"
                    />
                    <Field
                      label="Guests"
                      formikProps={getFieldProps('guests')}
                      placeholder="Guests"
                      type="number"
                    />
                    <Field
                      label="Price"
                      formikProps={getFieldProps('price')}
                      placeholder="Price"
                      type="number"
                    />
                    <Field
                      label="Cancellable"
                      formikProps={getFieldProps('cancellable')}
                      isBoolean
                    />
                  </div>
                </main>

                <hr className="border-t border-green-500 my-4" />
                <main>
                  <h2 className="text-2xl font-semibold text-green-500 italic">
                    What will your place offer?
                  </h2>
                  <div className="flex justify-between w-8/12 sm:flex-col lg:flex-row mt-2">
                    <Field
                      label="Has TV"
                      formikProps={getFieldProps('hasTv')}
                      isBoolean
                    />
                    <Field
                      label="Has Kitchen"
                      formikProps={getFieldProps('hasKitchen')}
                      isBoolean
                    />
                    <Field
                      label="Has Airconditioning"
                      formikProps={getFieldProps('hasAirconditioning')}
                      isBoolean
                    />
                    <Field
                      label="Has Wifi"
                      formikProps={getFieldProps('hasWifi')}
                      isBoolean
                    />
                    <Field
                      label="Has Free Parking"
                      formikProps={getFieldProps('hasFreeParking')}
                      isBoolean
                    />
                  </div>

                  <hr className="border-t border-green-500 my-4" />

                  <div>
                    <button
                      disabled={isLoading && isSubmitting}
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      Add Home
                    </button>
                  </div>
                </main>
              </div>
            </Form>
          )}
        </Formik>
      </main>
    </Layout>
  );
};

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
  async getServerSideProps(ctx) {
    // access the user session
    const session = getSession(ctx.req, ctx.res);
    // check if the user is host?
    const user = session?.user;
    const host = await prisma.host.findUnique({
      where: { email: user!.email },
    });
    return {
      props: {},
      redirect: !host ? '/' : undefined,
    };
  },
});

export default NewHome;
