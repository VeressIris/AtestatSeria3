import { useNavigate } from "react-router-dom";
import MyAnchor from "./MyAnchor";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-20 bg-slate-800 flex items-center justify-between">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="font-bold text-4xl text-white px-20 hover:cursor-pointer"
      >
        Fireship<span className="text-red-500">Hub</span>
      </h1>
      <div className="px-20 flex">
        <input type="text"></input>
        <MyAnchor text="Home" link="/" />
        <MyAnchor text="Movies" link="/movies" />
        <MyAnchor text="Shows" link="/shows" />
      </div>
    </div>
  );
}
