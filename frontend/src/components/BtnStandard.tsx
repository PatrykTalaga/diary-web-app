type Props = {
  label: string;
  tailwind?: string;
};

export default function BtnStandard({ label, tailwind }: Props) {
  return (
    <button
      className={`text-sm border-2 px-2 py-0.5 text-neutral-200 bg-stone-500
      sm:text-xl sm:px-3 sm:py-1 hover:scale-105 ${tailwind}`}
    >
      {label}
    </button>
  );
}
