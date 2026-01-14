import React from "react";
import bannerImg from "../../assets/bookworm-banner-removebg-preview.png";

const BannerSection = () => {
  return (
    <section className="bg-secondary mt-10 mb-25 rounded-2xl flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 shadow-lg">
      <div className="md:w-1/2 flex flex-col gap-6 text-center md:text-left">
        <h2 className="text-4xl md:text-5xl font-heading text-textDark">
          Hello, Book Lovers! 📚
        </h2>
        <p className="text-textDark text-base md:text-lg font-body">
          Discover new books, track your reading, and get personalized recommendations.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-4">
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent transition">
            Browse Books
          </button>
          <button className="bg-accent text-textDark px-6 py-3 rounded-lg font-semibold hover:bg-primary transition">
            My Library
          </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
        <img
          src={bannerImg}
          alt="Bookworm Banner"
          className="w-full max-w-md rounded-xl shadow-2xl"
        />
      </div>
    </section>
  );
};

export default BannerSection;
