import React from "react";

const HowWeWorkSection = () => {
  return (
    <section className="px-6 bg-primary rounded-lg md:px-16 py-12 mb-25 text-white">
      <h3 className="text-3xl font-heading text-textDark mb-8 text-center text-neutral">How We Work</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-neutral p-6 rounded-xl shadow-lg">
          <h4 className="font-heading text-xl mb-2">1. Browse Books</h4>
          <p>Select books from our curated collection.</p>
        </div>
        <div className="bg-neutral p-6 rounded-xl shadow-lg">
          <h4 className="font-heading text-xl mb-2">2. Track Your Reading</h4>
          <p>Add to shelves and monitor your progress.</p>
        </div>
        <div className="bg-neutral p-6 rounded-xl shadow-lg">
          <h4 className="font-heading text-xl mb-2">3. Get Recommendations</h4>
          <p>Personalized suggestions for your next read.</p>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
