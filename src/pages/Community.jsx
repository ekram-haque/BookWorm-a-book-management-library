import React from "react";

const discussions = [
  {
    id: 1,
    title: "Best books for building habits?",
    description: "Looking for book recommendations to improve daily habits.",
    author: "Ayesha Rahman",
    replies: 12,
  },
  {
    id: 2,
    title: "Fiction books that changed your life",
    description: "Share fiction books that deeply impacted you.",
    author: "Rakib Hasan",
    replies: 28,
  },
  {
    id: 3,
    title: "How do you track your reading?",
    description: "Apps, journals, or simple notes?",
    author: "Nusrat Jahan",
    replies: 7,
  },
];

const members = [
  {
    id: 1,
    name: "Ayesha Rahman",
    role: "Top Reviewer",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 2,
    name: "Rakib Hasan",
    role: "Community Mentor",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 3,
    name: "Nusrat Jahan",
    role: "Active Reader",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
];

const Community = () => {
  return (
    <section className="min-h-screen text-black px-6 md:px-16 py-12">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-4xl font-heading text-textDark mb-3">
          🤝 BookWorm Community
        </h2>
        <p className="text-textDark/70">
          Connect, discuss, and grow together with fellow book lovers.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-14">
        {[
          { label: "Members", value: "5,200+" },
          { label: "Discussions", value: "1,300+" },
          { label: "Reviews", value: "8,900+" },
        ].map((stat, index) => (
          <div
            key={index}
            className="bg-primary rounded-2xl p-6 text-center shadow-md"
          >
            <h3 className="text-3xl font-bold ">{stat.value}</h3>
            <p className="text-textDark/70 mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Discussions */}
      <div className="mb-16">
        <h3 className="text-2xl font-heading text-textDark mb-6">
          💬 Trending Discussions
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {discussions.map((topic) => (
            <div
              key={topic.id}
              className="bg-primary p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h4 className="font-heading text-lg text-textDark mb-2">
                {topic.title}
              </h4>
              <p className="text-textDark/70 text-sm mb-4">
                {topic.description}
              </p>

              <div className="flex items-center justify-between text-sm">
                <span className="text-textDark/60">
                  By {topic.author}
                </span>
                <span className="bg-primary px-3 py-1 rounded-full font-semibold">
                  {topic.replies} replies
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Members */}
      <div className="mb-16">
        <h3 className="text-2xl font-heading text-textDark mb-6">
          🌟 Featured Members
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-secondary rounded-2xl p-6 text-center shadow-md"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h4 className="font-heading text-lg text-textDark">
                {member.name}
              </h4>
              <p className="text-textDark/60 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h3 className="text-2xl font-heading text-textDark mb-4">
          Ready to join the conversation?
        </h3>
        <button className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-accent transition">
          Join Community
        </button>
      </div>
    </section>
  );
};

export default Community;
