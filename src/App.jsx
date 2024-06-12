import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="flex flex-col py-6 justify-center min-h-screen lg:flex-row overflow-hidden ">
        <div className="hidden bg-slate-600 w-1/3  items-center justify-center lg:flex">
          <h1 className="text-3xl text-white lg:text-4xl">Welcome!</h1>
        </div>
        <Form></Form>
      </div>
    </>
  );
}

export default App;
