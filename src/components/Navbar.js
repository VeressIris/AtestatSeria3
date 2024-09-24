import { useNavigate } from "react-router-dom";
import MyAnchor from "./MyAnchor";

export default function Navbar({ searchTerm, setSearchTerm }) {
  const navigate = useNavigate();

  return (
    <div className="w-full h-20 bg-slate-800 flex items-center justify-between px-20">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="font-bold text-4xl text-white hover:cursor-pointer"
      >
        Fireship<span className="text-red-500">Hub</span>
      </h1>
      <div className="flex items-center">
        <div className="group flex items-center relative max-w-[250px] mr-3">
          <svg
            className="icon absolute left-3 w-4 h-4 fill-white"
            aria-hidden="true"
            viewBox="0 0 24 24"
          >
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            placeholder="Search"
            value={searchTerm}
            type="text"
            className="w-auto h-10 pl-10 pr-4 border-2 border-transparent rounded-lg outline-none bg-slate-900 text-white placeholder-gray-400 focus:border-red-500 focus:ring-1 focus:ring-red-700 transition duration-175 ease-in-out"
            onChange={(e) => {
              setSearchTerm(e.target.value);
              if (e.target.value === "") {
                navigate("/");
              } else {
                navigate("/search");
              }
            }}
          />
        </div>
        <MyAnchor text="Home" link="/" />
        <MyAnchor text="Movies" link="/movies" />
        <MyAnchor text="Shows" link="/shows" />
        <MyAnchor text="Categories" link="/categories" />
        <MyAnchor text="Favorites" link="/favorites" />
        <MyAnchor text="About us" link="/about" />
      </div>
    </div>
  );
}
