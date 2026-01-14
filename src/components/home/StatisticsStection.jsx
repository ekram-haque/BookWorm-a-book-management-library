import React from "react";

const stats = [
  { id: 1, count: "10k+", title: "Books Read" },
  { id: 2, count: "5k+", title: "Active Readers" },
  { id: 3, count: "50+", title: "Genres Available" },
];

const StatisticsSection = () => {
  return (
    <section className="px-6 md:px-16 py-12 bg-primary rounded-lg text-center text-white mb-24">
      <h3 className="text-3xl font-heading text-textDark mb-8 text-neutral">Our Impact</h3>
      <div className="flex flex-col md:flex-row justify-around gap-8">
        {stats.map((s) => (
          <div key={s.id} className="bg-neutral p-6 rounded-xl shadow-lg">
            <h4 className="font-heading text-2xl">{s.count}</h4>
            <p className="text-textDark">{s.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsSection;
