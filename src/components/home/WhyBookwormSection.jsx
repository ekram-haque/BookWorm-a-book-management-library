import React from "react";
import { FaBookOpen, FaStar, FaUsers } from "react-icons/fa";

const WhyBookwormSection = () => {
  return (
    <section className="bg-primary px-6 md:px-16 py-12 rounded-2xl text-neutral mb-24">
      <h3 className="text-3xl font-heading mb-6 text-center">Why BookWorm?</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <FaBookOpen className="text-4xl mx-auto mb-2" />
          <h4 className="font-heading text-xl">Wide Collection</h4>
          <p>Thousands of books across genres for every reader.</p>
        </div>
        <div>
          <FaStar className="text-4xl mx-auto mb-2" />
          <h4 className="font-heading text-xl">Personalized</h4>
          <p>Recommendations based on your reading habits.</p>
        </div>
        <div>
          <FaUsers className="text-4xl mx-auto mb-2" />
          <h4 className="font-heading text-xl">Community</h4>
          <p>Share reviews, follow readers, and discuss books.</p>
        </div>
      </div>
    </section>
  );
};

export default WhyBookwormSection;
