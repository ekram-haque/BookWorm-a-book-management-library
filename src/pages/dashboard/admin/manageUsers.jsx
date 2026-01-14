import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";

const usersData = [
  { id: 1, name: "Alice", email: "alice@mail.com", role: "User", status: "Active" },
  { id: 2, name: "Bob", email: "bob@mail.com", role: "Admin", status: "Active" },
  { id: 3, name: "Charlie", email: "charlie@mail.com", role: "User", status: "Blocked" },
];

const ManageUsers = () => {
  return (

    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Users</h1>
      <table className="table-auto w-full bg-primary rounded-2xl shadow-md overflow-hidden">
        <thead className="bg-neutral text-secondary">
          <tr>
            <th className="px-4 py-2  ">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map(user => (
            <tr key={user.id} className="hover:bg-base-200 transition">
              <td className="px-4 py-2">{user.name}</td>
              <td className="px-4 py-2">{user.email}</td>
              <td className="px-4 py-2">{user.role}</td>
              <td className="px-4 py-2">{user.status}</td>
              <td className="px-4 py-2 flex gap-2">
                <button className="btn btn-sm btn-neutral"><FiEdit /></button>
                <button className="btn btn-sm btn-error"><FiTrash2 /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUsers;
