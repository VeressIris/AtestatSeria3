import Suggestions from "../components/Suggestions.js";

export default function HomePage() {
  const s = [
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 8,
      type: "movie",
      category: "javascript",
      releaseDate: "Mar 28, 2023",
    },
    {
      title: "Intro to Javascript in 100 seconds",
      description: "lorem ipsum dolor sit amet",
      image: "sampleThumbnail.jpg",
      rating: 9,
      type: "show",
      category: "javascript",
      releaseDate: "Mar 28, 2023",
      episodes: [
        {
          title: "Episode 1: The basics",
          image: "sampleThumbnail.jpg",
          description: "lorem ipsum dolor sit amet2",
        },
        {
          title: "Episode 2: The advanced basics",
          image: "sampleThumbnail.jpg",
          description: "lorem ipsum dolor sit amet 3",
        },
      ],
    },
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 9,
      type: "movie",
      category: "javascript",
      releaseDate: "Mar 28, 2023",
    },
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 9,
      type: "movie",
      category: "javascript",
      releaseDate: "Mar 28, 2023",
    },
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 9.5,
      type: "movie",
      category: "javascript",
      releaseDate: "Mar 28, 2023",
    },
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 9,
      type: "movie",
      category: "javascript",
      releaseDate: "Mar 28, 2023",
    },
  ];

  return (
    <div>
      <Suggestions title="The classics" suggestions={s} />
      <Suggestions title="Favorite languages" suggestions={s} />
      <Suggestions title="Frameworks" suggestions={s} />
      <Suggestions title="Your intro to backend" suggestions={s} />
    </div>
  );
}
