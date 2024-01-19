import "./App.css";
import BtnStandard from "./components/BtnStandard";
import Memo from "./components/Memo";
import Task from "./components/Task";

function App() {
  return (
    <>
      <div
        className="w-full min-h-screen bg-stone-500 sm:bg-[url('/src/assets/bg-landscape.jpg')]  
        bg-scroll bg-center bg-repeat sm:bg-no-repeat sm:bg-cover 
        flex flex-col justify-between"
      >
        <BtnStandard label="Add New" tailwind="mx-auto my-2 sm:my-4 text-xl" />
        <section
          className="flex flex-col gap-2 items-center justify-start pt-5 sm:pt-0
        sm:grid sm:grid-cols-3 sm:gap-2 sm:mx-2 "
        >
          <Memo />
        </section>

        <div className="flex justify-center gap-10 my-2">
          <p className="text-2xl text-stone-100 font-bold hidden sm:flex">
            {"<-Previous"}
          </p>
          <p className="text-2xl text-stone-100 font-bold hidden sm:flex">
            {"Next->"}
          </p>
        </div>
        <BtnStandard
          label="Load More"
          tailwind="mx-auto my-2 text-xl visible sm:hidden"
        />

        <section className="bg-stone-400 bg-opacity-70 border-t">
          <div className="flex items-center gap-2 p-2">
            <header className="text-2xl text-neutral-100 mr-2">Notes</header>
            <BtnStandard label="Clear Completed" tailwind="bg-stone-600" />
          </div>
          <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-4">
            <Task />
            <Task />
            <Task />
            <Task />
          </div>
        </section>
      </div>
    </>
  );
}

export default App;
