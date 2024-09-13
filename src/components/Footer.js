import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-24 px-20 bg-slate-800 flex items-center justify-between">
      <h1
        onClick={() => {
          navigate("/");
        }}
        className="font-bold text-2xl text-white hover:cursor-pointer"
      >
        Fireship<span className="text-red-500">Hub</span>
      </h1>
      <p className="text-white">Copyright @ 2024 FireshipHub</p>
    </div>
  );
}
