export default function AboutPage() {
  return (
    <div className="flex flex-col justify-center items-center py-4">
      <h1 className="text-4xl text-white font-bold mb-2">
        About Fireship<span className="text-red-500">Hub</span>
      </h1>
      <div className="bg-slate-800 my-4 p-4 rounded-xl w-[1000px]">
        <h2 className="text-3xl text-white font-bold mb-2">Our mission</h2>
        <p className="text-white text-xl">
          We believe educational content should be easily accessible and high
          quality! That's why our team handpicks content that is easy to follow,
          practical, and up-to-date with the latest trends and technologies.
          Whether you're a beginner or an experienced developer, our carefully
          selected videos help you learn faster, stay inspired, and level up
          your coding skills.
        </p>
      </div>
      <div className="bg-slate-800 my-4 p-4 rounded-xl w-[1000px]">
        <h2 className="text-3xl text-white font-bold mb-2">
          How did this come about?
        </h2>
        <p className="text-white text-xl">
          We've always loved{" "}
          <a
            href="https://www.youtube.com/@Fireship"
            target="_blank"
            className="text-red-200 hover:text-red-300 active:text-red-400"
          >
            FireshipIO
          </a>
          's content. Despite it being free, on YouTube, we wanted to build a
          well organized space where anyone can easily access the content.
          That's why we contacted FireshipIO himself to ask for his blessing on
          this project. He was thrilled to see the love and support from the
          community and gave us his blessing to build FireshipHub.
        </p>
      </div>
      <h1 className="text-4xl text-white font-bold mb-2">Benefits</h1>
      <div className="bg-slate-800 my-4 p-4 rounded-xl w-[1000px]">
        <h2 className="text-3xl text-white font-bold mb-2">
          Getting started is easy!
        </h2>
        <p className="text-white text-xl">
          We all hate having to create accounts in order to access certain
          websites.<br></br>
          That's why creating an account is totally{" "}
          <span className="font-semibold">optional</span> here!
        </p>
      </div>
      <div className="bg-slate-800 my-4 p-4 rounded-xl w-[1000px]">
        <h2 className="text-3xl text-white font-bold mb-2">
          High quality content
        </h2>
        <p className="text-white text-xl">
          <a
            href="https://www.youtube.com/@Fireship"
            target="_blank"
            className="text-red-200 hover:text-red-300 active:text-red-400"
          >
            FireshipIO
          </a>{" "}
          is a leader in the developer community. His content is short and easy
          to understand for all skill levels. That is why we chose him as our
          partner for the project.
        </p>
      </div>
      <div className="bg-slate-800 my-4 p-4 rounded-xl w-[1000px]">
        <h2 className="text-3xl text-white font-bold mb-2">
          Save your favorites
        </h2>
        <p className="text-white text-xl">
          Despite not needing an account to access our service, if you wish to
          save your favorite videos/series, an account will be required.
          <br></br>
          The team at <span className="font-semibold">FireshipHub</span> does
          not have access to any of your personal data. And no, we won't sign up
          you for any unwanted newsletters.
        </p>
      </div>
    </div>
  );
}
