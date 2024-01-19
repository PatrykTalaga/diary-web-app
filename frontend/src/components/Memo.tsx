import convertDate from "../functions/convertDate";
import BtnStandard from "./BtnStandard";

const data = {
  title: "Title",
  text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam
  nobis eius perferendis deserunt cum eaque exercitationem accusamus iure optio
  ducimus quod, nulla neque eos sed nostrum fuga architecto alias repellendus
  dolores esse. Distinctio aut expedita laudantium iure autem laborum quae
  doloribus animi nihil. Voluptate culpa autem, repellendus quos cumque optio.`,
  img: "bg-black.jpg",
  tags: [`tagOne, tagTwo, work, alf, don't, eat, the, cat`],
  createdAt: new Date(),
  edited: true,
  editedAt: new Date(),
};

export default function Memo() {
  return (
    <div
      className="flex flex-col justify-center items-start px-5 mx-5 py-2
    border rounded-lg bg-stone-400 bg-opacity-70"
    >
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
        <text className="text-sm ml-2 py-1 bg-[url(../images/'bg-black.jpg')]">
          {data.text}
        </text>
      </section>

      <section className="flex flex-col gap-2 py-1 text-sm">
        <p>Tags: {data.tags}</p>
      </section>

      <section className="flex justify-center gap-2 w-full py-1">
        {data.edited ? <BtnStandard label="View previous versions" /> : null}
        <BtnStandard label="Print" />
        <BtnStandard label="Edit" />
        <BtnStandard label="Delete" />
      </section>
    </div>
  );
}
