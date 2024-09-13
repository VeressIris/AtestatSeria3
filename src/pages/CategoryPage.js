export default function CategoryPage() {
  const category = localStorage.getItem("category");
  return (
    <div>
      <h1 className="text-3xl text-white font-bold">{category}</h1>
    </div>
  );
}
