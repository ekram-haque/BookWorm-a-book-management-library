import React, { useEffect, useState } from "react";

// Example: replace with API fetch later
const fetchUserReviews = async () => {
  // server theke call hobe
  return [
    {
      id: 1,
      bookTitle: "The Alchemist",
      bookAuthor: "Paulo Coelho",
      bookCover: "https://i.ibb.co/q9Vj4X7/alchemist.jpg",
      review: "A magical journey of self-discovery. Loved it!",
      approved: true,
    },
    {
      id: 2,
      bookTitle: "Deep Work",
      bookAuthor: "Cal Newport",
      bookCover: "https://i.ibb.co/7kF4ZpT/deep-work.jpg",
      review: "Super insightful, helps focus better.",
      approved: false,
    },
    {
      id: 3,
      bookTitle: "Atomic Habits",
      bookAuthor: "James Clear",
      bookCover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg",
      review: "Life changing!",
      approved: true,
    },
  ];
};

const MyReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // fetch reviews from server
    fetchUserReviews().then((data) => setReviews(data));
  }, []);

  const completedReviews = reviews.filter((r) => r.approved);
  const pendingReviews = reviews.filter((r) => !r.approved);

  const renderReviewCard = (rev) => (
    <div
      key={rev.id}
      className={`bg-primary rounded-2xl p-4 shadow-md transition hover:shadow-lg`}
    >
      <div className="flex gap-4 mb-3">
        <img
          src={rev.bookCover}
          alt={rev.bookTitle}
          className="h-20 w-16 object-cover rounded-lg"
        />
        <div>
          <h3 className="font-semibold text-textDark">{rev.bookTitle}</h3>
          <p className="text-sm text-textDark/70">{rev.bookAuthor}</p>
        </div>
      </div>
      <p className="text-textDark/80">{rev.review}</p>
      {!rev.approved && (
        <p className="mt-2 text-xs text-warning italic">
          Pending admin approval
        </p>
      )}
    </div>
  );

  return (
    <div className="p-6 bg-secondary rounded-2xl min-h-[80vh]">
      {/* HEADER */}
      <div className="mb-6">
        <h1 className="text-2xl md:text-3xl font-bold text-textDark">
          📝 My Reviews
        </h1>
        <p className="text-textDark/70 mt-1">
          See all your reviews and their status
        </p>
      </div>

      {/* TWO COLUMNS */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Completed */}
        <div>
          <h2 className="font-semibold text-lg mb-3">✅ Completed Reviews</h2>
          {completedReviews.length ? (
            <div className="flex flex-col gap-4">
              {completedReviews.map(renderReviewCard)}
            </div>
          ) : (
            <p className="text-textDark/60">No completed reviews yet.</p>
          )}
        </div>

        {/* Pending */}
        <div>
          <h2 className="font-semibold text-lg mb-3">⏳ Pending Reviews</h2>
          {pendingReviews.length ? (
            <div className="flex flex-col gap-4">
              {pendingReviews.map(renderReviewCard)}
            </div>
          ) : (
            <p className="text-textDark/60">No pending reviews.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
