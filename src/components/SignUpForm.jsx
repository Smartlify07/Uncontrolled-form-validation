import { Form, Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import TextInput from "./TextInput";
const SignUpForm = () => {
  const [success, setSuccess] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .min(3, "Must be more than 2 characters")
            .required("Required"),
          lastName: Yup.string()
            .min(3, "Must be more than 2 characters")
            .required("Required"),
          email: Yup.string()
            .email("Invalid Email address")
            .required("Required"),
          phone: Yup.string()
            .matches(
              /^\+?(\d{1,3})?[-.\s]?(\(?\d{3}\)?)?[-.\s]?\d{3}[-.\s]?\d{4}$/,
              "Invalid phone number"
            )
            .min(11, "Invalid phone number")
            .max(14, "Invalid phone number")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setSubmitting(false);
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
          resetForm();
        }}
      >
        {(formik) => (
          <Form
            className="relative py-4 px-7  rounded-e-xl flex flex-col gap-2  justify-center lg:w-1/3 lg:border"
            onSubmit={formik.handleSubmit}
          >
            <div
              className={`absolute flex gap-2 items-center top-1 left-0 bg-white border px-4 py-3 rounded-lg shadow-sm transition-all ${
                success && `translate-x-[50%] mb-5`
              } translate-x-[400%]`}
            >
              Registered Successfully{" "}
              <FaCheckCircle className="text-green-500" />
            </div>

            <TextInput
              label={"First Name"}
              type="text"
              placeholder="John"
              name="firstName"
            />
            <TextInput
              label={"Last Name"}
              type="text"
              placeholder="Doe"
              name="lastName"
            />
            <TextInput
              label={"Email"}
              type="text"
              placeholder="email@example.com"
              name="email"
            />
            <TextInput
              label={"Phone"}
              type="tel"
              placeholder="080335467891"
              name="phone"
            />

            <button
              type="submit"
              className="w-full text-white font-semibold py-3 px-5 rounded-md transition-all bg-slate-700 hover:bg-slate-800"
            >
              Sign up
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SignUpForm;
