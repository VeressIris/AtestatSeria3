import { Link } from "react-router-dom";

export default function MyAnchor({ text, link }) {
  return (
    <div className="active:scale-95 transition-all duration-75 ease-in-out">
      <Link
        to={link}
        className="text-white text-lg py-1 mx-3 px-1 active:text-slate-300 hover:border-b-2 border-red-500 transition-all duration-75 ease-in-out"
      >
        {text}
      </Link>
    </div>
  );
}
