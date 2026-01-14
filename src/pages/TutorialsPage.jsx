import React, { useState } from "react";

const tutorials = [
  {
    id: 1,
    title: "5 Books You Must Read This Year",
    channel: "Book Lovers",
    category: "Recommendations",
    description: "Discover 5 life-changing books for every reader.",
    youtubeId: "OEV8gMkCHXQ",
  },
  {
    id: 2,
    title: "How to Build a Daily Reading Habit",
    channel: "Better Reader",
    category: "Reading Tips",
    description: "Simple techniques to read consistently every day.",
    youtubeId: "tFz8yE0M5kM",
  },
  {
    id: 3,
    title: "Top 10 Fiction Books Review",
    channel: "Book Review Hub",
    category: "Reviews",
    description: "Honest reviews of the most popular fiction books.",
    youtubeId: "eG6QGgZcB3I",
  },
];

const TutorialsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredTutorials =
    filter === "All"
      ? tutorials
      : tutorials.filter((t) => t.category === filter);

  return (
    <section className="min-h-screen  px-6 md:px-16 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-4xl font-heading text-textDark mb-3">
          📺 Book Tutorials
        </h2>
        <p className="text-textDark/70">
          Watch handpicked videos on book reviews, recommendations, and reading
          tips to improve your reading journey.
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {["All", "Recommendations", "Reviews", "Reading Tips"].map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`px-5 py-2 rounded-full font-semibold transition
              ${
                filter === item
                  ? "bg-primary text-white"
                  : "bg-secondary text-textDark hover:bg-accent"
              }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredTutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="bg-primary rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* Video */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${tutorial.youtubeId}`}
                title={tutorial.title}
                allowFullScreen
              ></iframe>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="font-heading text-xl text-textDark mb-1">
                {tutorial.title}
              </h3>
              <p className="text-sm text-textDark/60 mb-2">
                {tutorial.channel}
              </p>
              <p className="text-textDark/80 text-sm mb-4">
                {tutorial.description}
              </p>

              <span className="inline-block text-xs px-3 py-1 rounded-full bg-accent text-textDark font-semibold">
                {tutorial.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TutorialsPage;
