import React from "react";

const testimonials = [
  { id: 1, name: "Alice", feedback: "BookWorm changed my reading habits!", role: "Student" },
  { id: 2, name: "David", feedback: "I discovered so many books here.", role: "Teacher" },
  { id: 3, name: "Emma", feedback: "I love tracking my reading progress.", role: "Reader" },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-primary  text-white px-6 md:px-16 py-12 rounded-2xl mb-24">
      <h3 className="text-3xl font-heading text-textDark mb-8 text-center text-neutral">Testimonials</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-neutral p-6 rounded-xl shadow-lg">
            <p className="italic text-textDark mb-4">"{t.feedback}"</p>
            <h4 className="font-heading text-lg text-textDark">{t.name}</h4>
            <p className="text-textDark text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
