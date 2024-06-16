/* eslint-disable react/prop-types */
import { useField } from "formik";
import { BsExclamationCircle } from "react-icons/bs";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1">
      <label className="text-black text-sm" htmlFor={props.id || props.name}>
        {label}
      </label>

      <input
        className={`py-3 text-sm px-4 rounded-md border ${
          meta.touched && meta.error && "border-red-500 placeholder:text-sm"
        } focus:outline-none`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <>
          <p className="px-1 flex items-center gap-1 font-semibold text-red-500 text-xs">
            <BsExclamationCircle className="font-semibold inline" />
            {meta.error}
          </p>
        </>
      )}
    </div>
  );
};

export default TextInput;
