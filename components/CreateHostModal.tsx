import { UserProfile } from '@auth0/nextjs-auth0';
import { FC } from 'react';
import { Formik, Form } from 'formik';
import { useMutation } from 'react-query';
import { createHost } from '../lib/requestClients';
import { CreateHostInput } from '../lib/graphql';
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';

interface CreateHostModalProps {
  handleClose: () => void;
  authUser: UserProfile;
}

const CreateHostModal: FC<CreateHostModalProps> = ({
  handleClose,
  authUser,
}) => {
  const createHostMutation = useMutation((newHost: CreateHostInput) =>
    createHost({ data: newHost })
  );

  const router = useRouter();

  return (
    <main className="bg-[#000000ad] w-full mx-auto p-6 absolute top-0 right-0 bottom-0 z-50">
      <Toaster />
      <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 relative max-w-md">
        <div className="mx-auto">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Add your Hosting Details
              </h1>
            </div>

            <div className="mt-5">
              <Formik
                initialValues={{
                  country: '',
                  phoneNumber: 0,
                }}
                onSubmit={async (values, { setSubmitting, setValues }) => {
                  setSubmitting(true);
                  try {
                    await createHostMutation.mutateAsync({
                      ...values,
                      avatar_url: authUser.picture!,
                      email: authUser.email!,
                      name: authUser.name!,
                    });
                    toast.success('You are now a host!');
                    setValues({
                      country: '',
                      phoneNumber: 0,
                    });
                    router.push('/host/homes');
                    handleClose();
                    setSubmitting(false);
                  } catch (error) {
                    toast.error((error as any).response.errors[0].message);
                  }
                }}
              >
                {({ isSubmitting, getFieldProps }) => (
                  <Form>
                    <div className="grid gap-y-4">
                      <div>
                        <span className="block text-sm mb-2 dark:text-white">
                          Country/Region
                        </span>
                        <div className="relative">
                          <input
                            className="py-3 px-4 block w-full border-2 border-green-300 rounded-md text-sm focus:border-green-500 "
                            required
                            {...getFieldProps('country')}
                          />
                        </div>
                      </div>

                      <div>
                        <span className="block text-sm mb-2 dark:text-white">
                          Phone Number
                        </span>
                        <div className="relative">
                          <input
                            type="number"
                            className="py-3 px-4 block w-full border-2 border-green-300 rounded-md text-sm focus:border-green-500 "
                            required
                            {...getFieldProps('phoneNumber')}
                          />
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={isSubmitting}
                      >
                        Become Host!
                      </button>
                      <div
                        className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-all text-sm cursor-pointer"
                        onClick={handleClose}
                      >
                        Cancel
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export { CreateHostModal };
