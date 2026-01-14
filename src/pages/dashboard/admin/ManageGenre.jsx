import React, { useState } from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

const initialGenres = [
  { id: 1, name: "Self-help", description: "Books focused on personal development and habits" },
  { id: 2, name: "Fiction", description: "Novels, stories, and imaginative books" },
  { id: 3, name: "Science", description: "Books about science, technology, and research" },
];

const ManageGenre = () => {
  const [genres, setGenres] = useState(initialGenres);
  const [newGenre, setNewGenre] = useState({ name: "", description: "" });

  const handleAddGenre = () => {
    if (!newGenre.name) return;
    const genre = { id: Date.now(), ...newGenre };
    setGenres([genre, ...genres]);
    setNewGenre({ name: "", description: "" });
  };

  const handleDelete = (id) => {
    setGenres(genres.filter((g) => g.id !== id));
  };

  return (
    <div className="p-6 bg-secondary min-h-[80vh] rounded-2xl">
      {/* Header */}
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold text-textDark">
          📚 Manage Genres
        </h1>
        {/* Add Genre */}
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Genre Name"
            className="input input-bordered bg-primary"
            value={newGenre.name}
            onChange={(e) => setNewGenre({ ...newGenre, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            className="input input-bordered  bg-primary"
            value={newGenre.description}
            onChange={(e) => setNewGenre({ ...newGenre, description: e.target.value })}
          />
          <button className="btn btn-neutral text-secondary rounded-lg" onClick={handleAddGenre}>
            Add Genre
          </button>
        </div>
      </div>

      {/* Genres Table */}
      <div className="overflow-x-auto rounded-lg shadow-lg bg-primary">
        <table className="table table-zebra w-full ">
          <thead className="bg-neutral text-secondary">
            <tr>
              <th>ID</th>
              <th>Genre Name</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre) => (
              <tr key={genre.id} className="hover:bg-base-200 transition">
                <td>{genre.id}</td>
                <td>{genre.name}</td>
                <td>{genre.description}</td>
                <td className="flex gap-2">
                  <button className="btn btn-sm btn-warning bg-secondary flex items-center gap-1">
                    <AiOutlineEdit /> Edit
                  </button>
                  <button
                    className="btn btn-sm btn-error flex items-center gap-1"
                    onClick={() => handleDelete(genre.id)}
                  >
                    <AiOutlineDelete /> Delete
                  </button>
                </td>
              </tr>
            ))}
            {genres.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center text-textDark/60 py-4">
                  No genres available 📭
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageGenre;
