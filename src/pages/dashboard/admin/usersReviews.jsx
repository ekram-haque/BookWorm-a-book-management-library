import React from "react";

const reviewsData = [
  { id: 1, userName: "Alice", bookTitle: "The Alchemist", bookCover: "https://i.ibb.co/q9Vj4X7/alchemist.jpg", review: "Amazing book!", status: "approved" },
  { id: 2, userName: "Bob", bookTitle: "Deep Work", bookCover: "https://i.ibb.co/7kF4ZpT/deep-work.jpg", review: "Very helpful!", status: "pending" },
];

const ManageReviews = () => {
  const pending = reviewsData.filter(r => r.status === "pending");
  const approved = reviewsData.filter(r => r.status === "approved");

  const ReviewCard = ({ review }) => (
    <div className="bg-primary rounded-2xl p-4 shadow-md flex flex-col gap-2">
      <div className="flex gap-4">
        <img src={review.bookCover} className="w-16 h-20 rounded-lg" />
        <div>
          <h3 className="font-semibold">{review.bookTitle}</h3>
          <p className="text-sm text-textDark/70">{review.userName}</p>
        </div>
      </div>
      <p className="text-textDark/80">{review.review}</p>
      {review.status === "pending" && (
        <div className="flex gap-2 mt-2">
          <button className="btn btn-sm btn-success">Approve</button>
          <button className="btn btn-sm btn-error">Reject</button>
        </div>
      )}
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">User Reviews</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-semibold mb-2">Pending Reviews</h2>
          {pending.map(r => <ReviewCard key={r.id} review={r} />)}
          {pending.length === 0 && <p className="text-textDark/60">No pending reviews</p>}
        </div>
        <div>
          <h2 className="font-semibold mb-2">Approved Reviews</h2>
          {approved.map(r => <ReviewCard key={r.id} review={r} />)}
          {approved.length === 0 && <p className="text-textDark/60">No approved reviews</p>}
        </div>
      </div>
    </div>
  );
};

export default ManageReviews;
