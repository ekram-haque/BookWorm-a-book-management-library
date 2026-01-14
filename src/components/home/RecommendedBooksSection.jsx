import React from "react";
import bookImg from "../../assets/bookworm-banner-removebg-preview.png";

const recommendedBooks = [
  { id: 1, title: "Pride and Prejudice", author: "Jane Austen", img: bookImg },
  { id: 2, title: "The Hobbit", author: "J.R.R. Tolkien", img: bookImg },
  { id: 3, title: "Moby Dick", author: "Herman Melville", img: bookImg },
  { id: 4, title: "Crime and Punishment", author: "Fyodor Dostoevsky", img: bookImg },
];

const RecommendedBooksSection = () => {
  return (
    <section className="px-6 md:px-16 mb-25 text-white">
      <h3 className="text-3xl font-heading text-textDark mb-8 text-neutral">Recommended For You</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {recommendedBooks.map((book) => (
          <div
            key={book.id}
            className="bg-neutral rounded-xl shadow-lg p-4 flex flex-col items-center"
          >
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h4 className="font-heading text-lg text-textDark">{book.title}</h4>
            <p className="text-textDark text-sm">{book.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecommendedBooksSection;
