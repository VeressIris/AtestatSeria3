import { useNavigate } from "react-router-dom";

export default function AllCategoriesPage() {
  const allCategories = [
    "JavaScript",
    "Frontend",
    "Algorithms",
    "Computer Science",
    "Firebase",
    "Authentication",
    "CSS",
    "Web Design",
    "Backend",
    "Desktop Development",
    "Version Control",
    "Tools",
    "GitHub",
    "Vue.js",
    "Web Frameworks",
    "COBOL",
    "Languages",
    "Flutter",
    "Mobile Development",
    "Deno",
    "Stripe",
    "Payment Systems",
    "Regex",
    "Docker",
    "DevOps",
    "Networking",
    "React",
    "Angular",
    "jQuery",
    "Kubernetes",
    "NGINX",
    "Web Servers",
    "WebAssembly",
    "TypeScript",
    "Security",
    "WebSockets",
    "Socket.io",
    "PWA",
    "Raspberry Pi",
    "Hardware",
    "Dotfiles",
    "Productivity",
    "SEO",
    "Vim",
    "Linux",
    "Operating Systems",
    "GraphQL",
    "APIs",
    "Dgraph",
    "Graph Database",
    "REST",
    "Node.js",
    "PHP",
    "Web Development",
    "Python",
    "Java",
    "Kotlin",
    "C",
    "Swift",
    "VS Code",
    "Development Tools",
    "Haskell",
    "HTML",
    "C#",
    "C++",
    "Low level",
    "Unity",
    "Game Development",
    "Elixir",
    "Zig",
    "CUDA",
    "Programming",
    "WebRTC",
    "Serverless",
    "Backend Development",
    "CORS",
    "SQL",
    "Databases",
    "Svelte",
    "Sass",
    "CPU",
    "WebGL",
    "Graphics",
    "Software Testing",
    "Development",
    "DNS",
    "Redis",
    "MongoDB",
    "Astro",
    "Terraform",
    "Cloud",
    "NestJS",
    "Tailwind",
    "PostCSS",
    "Machine Learning",
    "AI",
    "React Native",
    "Go",
    "Rust",
    "Dart",
    "Auth0",
  ];

  const videos = JSON.parse(localStorage.getItem("videos"));

  function getThumbnailFileName(title) {
    return (
      "/fireshipIO_thumbnails/" +
      title.replace(/[ /?:]/g, "_") +
      "_thumbnail.jpg"
    );
  }

  const navigate = useNavigate();

  return (
    <div className="py-4">
      <h1 className="text-4xl text-white font-bold mb-2">All Categories:</h1>
      <div className="py-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allCategories.map((category) => {
            const video = videos.filter((video) =>
              video.categories.includes(category)
            )[0];
            return (
              <div
                onClick={() => {
                  localStorage.setItem("category", category);
                  navigate("/categories/" + category);
                }}
                className="p-6 mr-2 mb-2 rounded-xl flex flex-col items-center hover:bg-slate-950 hover:scale-105 hover:cursor-pointer active:scale-100 transition-all duration-100 ease-in-out"
              >
                <img
                  src={getThumbnailFileName(video.title)}
                  alt={category}
                  className="w-72 mb-2"
                />
                <h3 className="text-white text-lg font-medium line-clamp-2">
                  {category}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
