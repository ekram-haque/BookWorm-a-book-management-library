import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const tutorialsData = [
  { id: 1, title: "React Basics", category: "React", createdAt: "2026-01-01" },
  { id: 2, title: "Node.js Introduction", category: "Node", createdAt: "2026-01-02" },
];

const ManageTutorials = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Manage Tutorials</h1>
        <button className="btn btn-neutral text-secondary rounded-lg">Add New Tutorial</button>
      </div>
      <table className="table-auto w-full bg-primary rounded-2xl shadow-md overflow-hidden">
        <thead className="bg-neutral text-secondary">
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Created At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tutorialsData.map(t => (
            <tr key={t.id} className="hover:bg-base-200 transition">
              <td className="px-4 py-2">{t.title}</td>
              <td className="px-4 py-2">{t.category}</td>
              <td className="px-4 py-2">{t.createdAt}</td>
              <td className="px-4 py-2 flex gap-2">
                <button className="btn btn-sm btn-secondary text-neutral"><FiEdit /></button>
                <button className="btn btn-sm btn-error"><FiTrash2 /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageTutorials;
