/* eslint-disable react/prop-types */
import { useField } from "formik";

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-1">
      <label className="text-black" htmlFor={props.id || props.name}>
        {label}
      </label>

      <input
        className={`py-3 px-4 rounded-md border ${
          meta.touched && meta.error && "border-red-500"
        } focus:outline-none`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error && (
        <p className="px-1 text-red-500 text-xs">{meta.error}</p>
      )}
    </div>
  );
};

export default TextInput;
