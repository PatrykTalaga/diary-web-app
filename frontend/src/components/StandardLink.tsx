import { Link } from "react-router-dom";

type Props = {
  label: string;
  tailwind?: string;
  link: string;
};

export default function StandardLink({ label, tailwind, link }: Props) {
  return (
    <Link
      to={link}
      className={`text-sm border-2 px-2 py-0.5 text-neutral-200 bg-stone-600
      text-center sm:text-xl sm:px-3 sm:py-1 hover:scale-105 ${tailwind}`}
    >
      {label}
    </Link>
  );
}
