import React from "react";
import { FiUsers, FiBook, FiFileText, FiCheckCircle } from "react-icons/fi";

const Overview = () => {
  const stats = [
    { label: "Total Users", value: 154, icon: <FiUsers /> },
    { label: "Total Books", value: 78, icon: <FiBook /> },
    { label: "Pending Reviews", value: 12, icon: <FiFileText /> },
    { label: "Approved Reviews", value: 56, icon: <FiCheckCircle /> },
  ];

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <div key={i} className="bg-primary p-6 rounded-2xl shadow-md hover:shadow-lg transition flex items-center justify-between">
          <div>
            <p className="text-sm text-textDark/70">{stat.label}</p>
            <h2 className="text-2xl font-bold text-textDark">{stat.value}</h2>
          </div>
          <div className="text-4xl text-primary">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default Overview;
