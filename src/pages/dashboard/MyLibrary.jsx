import React, { useState } from "react";

const booksData = {
  want: [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://i.ibb.co/j5P3W1X/psychology-money.jpg",
    },
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://i.ibb.co/j5P3W1X/psychology-money.jpg",
    },
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://i.ibb.co/j5P3W1X/psychology-money.jpg",
    },
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://i.ibb.co/j5P3W1X/psychology-money.jpg",
    },
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://i.ibb.co/j5P3W1X/psychology-money.jpg",
    },
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://i.ibb.co/j5P3W1X/psychology-money.jpg",
    },
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://i.ibb.co/j5P3W1X/psychology-money.jpg",
    },
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      cover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg",
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      cover: "https://i.ibb.co/j5P3W1X/psychology-money.jpg",
    },
  ],
  reading: [
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      cover: "https://i.ibb.co/7kF4ZpT/deep-work.jpg",
      progress: 45,
    },
    {
      id: 4,
      title: "Show Your Work",
      author: "Austin Kleon",
      cover: "https://i.ibb.co/2g7VvQF/show-your-work.jpg",
      progress: 70,
    },
  ],
  read: [
    {
      id: 5,
      title: "The Alchemist",
      author: "Paulo Coelho",
      cover: "https://i.ibb.co/q9Vj4X7/alchemist.jpg",
    },
  ],
};

const MyLibrary = () => {
  const [activeTab, setActiveTab] = useState("reading");

  const renderBooks = (books, showProgress = false) => {
    if (!books.length) {
      return (
        <div className="text-center py-20 text-textDark/60">
          <p className="text-lg">📭 No books here yet</p>
          <p className="text-sm mt-1">
            Start adding books to build your cozy library
          </p>
        </div>
      );
    }

    return (
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {books.map((book) => (
          <div
            key={book.id}
            className="group bg-primary rounded-2xl p-4
                       shadow-[0_8px_30px_rgba(0,0,0,0.06)]
                       hover:shadow-[0_14px_45px_rgba(0,0,0,0.14)]
                       transition-all duration-300"
          >
            {/* COVER */}
            <div className="relative mb-4 overflow-hidden rounded-xl">
              <img
                src={book.cover}
                alt={book.title}
                className="h-80 w-full object-cover
                           group-hover:scale-105 transition duration-300"
              />

              {/* BOOKMARK */}
              <div className="absolute top-0 right-3 w-3 h-14 bg-primary rounded-b-sm shadow-md"></div>
            </div>

            {/* INFO */}
            <h3 className="font-semibold text-textDark leading-tight">
              {book.title}
            </h3>
            <p className="text-sm font-semibold text-textDark/60 mb-3">
              {book.author}
            </p>

            {/* PROGRESS */}
            {showProgress && (
              <div className="mt-3">
                <div className="flex justify-between text-xs mb-1 text-textDark/70">
                  <span>Reading Progress</span>
                  <span>{book.progress}%</span>
                </div>

                <div className="relative h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="absolute left-0 top-0 h-full bg-neutral"
                    style={{ width: `${book.progress}%` }}
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-secondary p-6 rounded-2xl min-h-[80vh]">
      
    <div className="sticky top-0 z-30 bg-secondary pb-4">
          {/* HEADER */}
      <div className="mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-textDark">
          📚 My Library
        </h1>
        <p className="text-textDark/70 mt-1">
          A cozy place to track your reading journey
        </p>
      </div>

      {/* TABS */}
      <div className="flex gap-6 mb-10 border-b border-base-300">
        {[
          { key: "want", label: "📌 Want to Read" },
          { key: "reading", label: "📖 Reading" },
          { key: "read", label: "✅ Finished" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-3 text-sm md:text-base font-medium mb-2 relative px-4 py-2 rounded-lg transition-all
              ${
                activeTab === tab.key
                  ? "bg-primary  shadow-md"
                  : "text-textDark/60 hover:text-primary"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>

      {/* CONTENT */}
      {activeTab === "want" && renderBooks(booksData.want)}
      {activeTab === "reading" &&
        renderBooks(booksData.reading, true)}
      {activeTab === "read" && renderBooks(booksData.read)}
    </div>
  );
};

export default MyLibrary;
