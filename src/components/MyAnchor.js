import { Link } from "react-router-dom";

export default function MyAnchor({ text, link }) {
  return (
    <div className="active:scale-95 transition-all duration-75 ease-in-out">
      <Link
        to={link}
        className="text-white text-lg py-2 px-3 rounded-xl hover:bg-red-500 hover:text-black active:text-slate-800"
      >
        {text}
      </Link>
    </div>
  );
}
