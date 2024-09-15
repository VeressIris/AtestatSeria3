import Suggestions from "../components/Suggestions.js";

export default function HomePage() {
  function getObjectByTitle(arr, title) {
    return arr.find((obj) => obj.title === title);
  }

  const videos = JSON.parse(localStorage.getItem("videos"));
  const theClassics = [
    getObjectByTitle(videos, "React in 100 Seconds"),
    getObjectByTitle(videos, "Git Explained in 100 Seconds"),
    getObjectByTitle(videos, "CSS Flexbox in 100 Seconds"),
    getObjectByTitle(videos, "CSS Grid in 100 Seconds"),
    getObjectByTitle(
      videos,
      "GitHub Pull Request in 100 Seconds - Git a FREE sticker 🔥"
    ),
    getObjectByTitle(videos, "Vue.js Explained in 100 Seconds"),
    getObjectByTitle(videos, "Flutter in 100 seconds"),
    getObjectByTitle(videos, "CSS Animation in 100 Seconds"),
    getObjectByTitle(
      videos,
      "Graph Search Algorithms in 100 Seconds - And Beyond with JS"
    ),
  ];
  const frameworks = [
    getObjectByTitle(videos, "React in 100 Seconds"),
    getObjectByTitle(
      videos,
      "Next.js in 100 Seconds // Plus Full Beginner's Tutorial"
    ),
    getObjectByTitle(videos, "Flutter in 100 seconds"),
    getObjectByTitle(videos, "Angular in 100 Seconds"),
    getObjectByTitle(videos, "Vue.js Explained in 100 Seconds"),
  ];
  const backend = [
    getObjectByTitle(
      videos,
      "RESTful APIs in 100 Seconds // Build an API from Scratch with Node.js Express"
    ),
    getObjectByTitle(videos, "Session vs Token Authentication in 100 Seconds"),
    getObjectByTitle(videos, "Firebase Security in 100 Seconds"),
    getObjectByTitle(
      videos,
      "WebSockets in 100 Seconds & Beyond with Socket.io"
    ),
  ];

  return (
    <div className="divide-slate-700 divide-y-2 divide-solid">
      <Suggestions title="The classics" suggestions={theClassics} />
      <Suggestions title="Frameworks" suggestions={frameworks} />
      <Suggestions title="Your intro to backend" suggestions={backend} />
      {/* <div className="py-4">
      </div>
      <div className="py-4">
      </div> */}
    </div>
  );
}
