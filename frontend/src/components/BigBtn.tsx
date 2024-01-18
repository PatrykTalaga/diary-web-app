type Props = {
  label: string;
  tailwind?: string;
};

export default function BigBtn({ label, tailwind }: Props) {
  return (
    <button
      className={`text-sm border-2 px-1 py-0.5 text-neutral-200 bg-stone-500
      sm:text-xl sm:px-3 sm:py-1 hover:scale-110 ${tailwind}`}
    >
      {label}
    </button>
  );
}
