import SignUpForm from "./components/SignUpForm";

function App() {
  return (
    <>
      <div className="flex flex-col py-6 justify-center min-h-screen lg:flex-row overflow-hidden ">
        <div className="hidden rounded-s-xl relative bg-slate-600 w-1/3  items-center justify-center lg:flex">
          <h1 className="text-3xl text-white font-semibold tracking-wide lg:text-4xl">
            Welcome!
          </h1>
        </div>
        <SignUpForm />
      </div>
    </>
  );
}

export default App;
