import BtnStandard from "./BtnStandard";

export default function Navbar() {
  return (
    <div
      className="w-full flex gap-2 sm:gap-3 justify-start p-3 bg-stone-400
     border-b sm:px-5"
    >
      <form className="flex gap-2 sm:gap-3">
        <input type="text" className="border-2 bg-neutral-200"></input>
        <BtnStandard label="Search" />
      </form>
      <BtnStandard label="Advanced Search" />
      <BtnStandard label="Login" tailwind="ml-auto" />
    </div>
  );
}
