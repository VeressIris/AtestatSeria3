import Suggestions from "../components/Suggestions.js";

export default function HomePage() {
  const s = [
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 8,
    },
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 8,
    },
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 9,
    },
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 9,
    },
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 9.5,
    },
    {
      title: "Javascript in 100 seconds",
      description: "lorem ipsum",
      image: "sampleThumbnail.jpg",
      rating: 9,
    },
  ];

  return (
    <div>
      <Suggestions title="Our favorites" suggestions={s} />
    </div>
  );
}
