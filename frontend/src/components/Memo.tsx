import { useState } from "react";
import convertDate from "../functions/convertDate";
import BtnStandard from "./BtnStandard";
import EditMemoModal from "./EditMemoModal";

type Props = {
  data: {
    title: string;
    text: string;
    img: string;
    tags: Array<string>;
    createdAt: Date;
    edited: boolean;
    editedAt: Date;
  };
};

export default function Memo({ data }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  function viewPreviousVersions() {
    console.log("viewPreviousVersions");
  }
  function printMemo() {
    console.log("print");
  }

  function deleteMemo() {
    console.log("delete");
  }

  return (
    <div
      className="flex flex-col justify-center items-start px-5 mx-5 py-2
    border rounded-lg bg-stone-400 bg-opacity-70"
    >
      <EditMemoModal isOpen={isOpen} closeForm={() => setIsOpen(false)} />
      <section className=" flex justify-start items-end">
        <header className="text-xl text-neutral-100">
          {data.title + ", "}
        </header>
        <p className=" text-lg text-neutral-100 ml-2">
          {data.edited
            ? convertDate(data.editedAt)
            : convertDate(data.createdAt)}
        </p>
      </section>

      <section className="container max-h-60 overflow-auto">
        {data.img !== "" && (
          <img
            src={`public/images/${data.img}`}
            className="max-h-56 max-w-80 float-left m-2"
          ></img>
        )}
        <p className="text-sm ml-2 py-1 bg-[url(../images/'bg-black.jpg')]">
          {data.text}
        </p>
      </section>

      <section className="flex flex-col gap-2 py-1 text-sm">
        <p>Tags: {data.tags}</p>
      </section>

      <section className="flex justify-center gap-2 w-full py-1">
        {data.edited ? (
          <BtnStandard
            onClick={viewPreviousVersions}
            label="View previous versions"
          />
        ) : null}
        <BtnStandard onClick={printMemo} label="Print" />
        <BtnStandard onClick={() => setIsOpen(true)} label="Edit" />
        <BtnStandard onClick={deleteMemo} label="Delete" />
      </section>
    </div>
  );
}
