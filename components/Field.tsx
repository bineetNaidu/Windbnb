import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';

interface FieldProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  formikProps: any;
  isBoolean?: boolean;
  isTextArea?: boolean;
}

const Field: FC<FieldProps> = ({
  label,
  formikProps,
  isBoolean,
  isTextArea,
}) => {
  if (isBoolean) {
    return (
      <div className="flex justify-start items-center">
        <label className="text-gray-700 text-sm font-bold pr-2">{label}</label>
        <input type="checkbox" {...formikProps} />
      </div>
    );
  }

  if (isTextArea) {
    return (
      <div className="my-1">
        <span className="block text-sm mb-2 text-gray-700 font-bold">
          {label}
        </span>
        <div className="relative">
          <textarea
            className="py-2 px-3 block w-full border-2 border-green-300 rounded-md text-sm focus:border-green-500"
            {...formikProps}
          ></textarea>
        </div>
      </div>
    );
  }

  return (
    <div className="my-1">
      <span className="block text-sm mb-2 text-gray-700 font-bold">
        {label}
      </span>
      <div className="relative">
        <input
          className="py-2 px-3 block w-full border-2 border-green-300 rounded-md text-sm focus:border-green-500"
          {...formikProps}
        />
      </div>
    </div>
  );
};

export { Field };
