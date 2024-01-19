const data = {
  title: "Title Lorem ipsum",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit!`,
  createdAt: new Date(),
  completed: false,
  completeddAt: new Date(),
};

export default function Task() {
  if (data.completed) {
    return (
      <div
        className="flex flex-col justify-center items-start p-2 border
      rounded-lg bg-stone-400 bg-opacity-70"
      >
        <header className="text-xl text-stone-500 line-through">
          {data.title}
        </header>
        <text className="line-through text-sm text-stone-500">{data.text}</text>
        <button
          className="mt-1 mx-auto text-sm border-2 px-2 py-0.5
          text-neutral-200 bg-stone-500 sm:text-xl sm:px-3 sm:py-1
          hover:scale-105"
        >
          Delete
        </button>
      </div>
    );
  }
  return (
    <div
      className="flex flex-col justify-center items-start p-2 border
    rounded-lg bg-stone-400 bg-opacity-70"
    >
      <header className="text-xl text-neutral-100">{data.title}</header>

      <text className="text-sm">{data.text}</text>
      <button
        className="mt-1 mx-auto text-sm border-2 px-2 py-0.5 text-neutral-200
            bg-stone-500 sm:text-xl sm:px-3 sm:py-1 hover:scale-105"
      >
        Complete
      </button>
    </div>
  );
}
