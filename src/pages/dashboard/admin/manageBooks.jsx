import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const booksData = [
  { id: 1, title: "Atomic Habits", author: "James Clear", cover: "https://i.ibb.co/F5Y2cXy/atomic-habits.jpg" },
  { id: 2, title: "Deep Work", author: "Cal Newport", cover: "https://i.ibb.co/7kF4ZpT/deep-work.jpg" },
];

const ManageBooks = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Manage Books</h1>
        <button className="btn btn-neutral text-secondary rounded-lg">Add New Book</button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {booksData.map(book => (
          <div key={book.id} className="bg-primary rounded-2xl p-4 shadow-md hover:shadow-lg transition">
            <img src={book.cover} alt={book.title} className="h-48 w-full object-cover rounded-lg mb-3" />
            <h3 className="font-semibold">{book.title}</h3>
            <p className="text-sm text-textDark/70">{book.author}</p>
            <div className="flex gap-2 mt-2">
              <button className="btn btn-sm btn-secondary text-neutral"><FiEdit /></button>
              <button className="btn btn-sm btn-error"><FiTrash2 /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBooks;
