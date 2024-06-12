import { useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
const Form = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const validateForm = (firstName, lastName, email, phoneNumber) => {
    const validEmail = "^[^s@]+@[^s@]+.[^s@]+$".match(email);
    let validLastName = lastName !== "";
    let validFirstName = firstName !== "";
    let validPhoneNumber = phoneNumber !== "";

    if ((validEmail, validLastName, validFirstName, validPhoneNumber)) {
      console.log("Valid");
      return true;
    } else {
      console.log("Invalid");
      return false;
    }
  };

  const clearFields = () => {
    firstNameRef.current.value = "";
    lastNameRef.current.value = "";
    emailRef.current.value = "";
    phoneRef.current.value = "";
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const email = emailRef.current.value;
    const lastName = lastNameRef.current.value;
    const phoneNumber = phoneRef.current.value;

    const checkValid = validateForm(firstName, lastName, email, phoneNumber);
    if (checkValid) {
      console.log("Registered successfully");
      clearFields(firstNameRef, lastName);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);
    } else {
      console.log("Sth was wrong");
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <>
      <form
        className="relative py-4 px-7  rounded-e-xl flex flex-col gap-4  justify-center lg:w-1/3 lg:border"
        onSubmit={handleSubmit}
      >
        <div
          className={`absolute flex gap-2 items-center top-1 left-0 bg-white border px-4 py-3 rounded-lg shadow-sm transition-all ${
            success && `translate-x-[50%] mb-5`
          } translate-x-[400%]`}
        >
          Registered Successfully <FaCheckCircle className="text-green-500" />
        </div>

        <div
          className={`absolute flex gap-2 items-center top-1 left-0 bg-white border px-4 py-3 rounded-lg shadow-sm transition-all ${
            error && `translate-x-[50%] mb-5`
          } translate-x-[400%]`}
        >
          Please fill in all fields <FaCheckCircle className="text-red-500" />
        </div>

        <div className="flex py-5  mt-5 flex-col gap-4 w-full">
          <div className="flex flex-col gap-2">
            <label htmlFor="First Name">FirstName</label>
            <input
              type="text"
              className="py-3 px-4 rounded-md border focus:outline-none"
              name="firstName"
              ref={firstNameRef}
              placeholder="Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="Last name">Last Name</label>
            <input
              className="py-3 px-4 rounded-md border focus:outline-none"
              type="text"
              name="lastName"
              ref={lastNameRef}
              placeholder="John"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="py-3 px-4 rounded-md border focus:outline-none"
              type="email"
              name="email"
              ref={emailRef}
              placeholder="name@example.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="Phone">Phone</label>

            <input
              className="py-3 px-4 rounded-md border focus:outline-none"
              type="tel"
              name="phoneNumber"
              ref={phoneRef}
              placeholder="0-906-692-7835"
            />
          </div>

          <button className="py-3 px-6 bg-slate-600 w-full text-white font-semibold rounded-sm transition-all hover:bg-slate-700">
            {" "}
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
