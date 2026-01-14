import React from "react";

import { FaCheckCircle } from "react-icons/fa";

const MyProfile = () => {
 
  return (
    <div className="min-h-[50vh] max-w-5xl mx-auto my-auto rounded-lg flex items-center justify-center bg-primary  p-6">
  {/* Left: Profile Image */}
        <div className="shrink-0 text-center md:text-left">
          <div className="w-32 h-32 rounded-full border-4 border-secondary overflow-hidden mx-auto md:mx-0 shadow-md">
            <img
              src={'none'}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Role Badge */}
          {/* {role && (
            <div className="mt-4">
              <span className="inline-block px-4 py-1 rounded-full bg-secondary text-primary font-semibold capitalize shadow-sm">
                {role}
              </span>
            </div>
          )} */}

          {/* Verified Badge */}
          <div className="mt-2 flex justify-center md:justify-start items-center gap-1 text-primary font-semibold text-sm">
            <FaCheckCircle />
            Verified Account
          </div>
        </div>

        {/* Right: User Info */}
        <div className="flex-1 w-full md:pl-6 space-y-4">
          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Name</span>
            <span className="text-gray-800">{  "N/A"}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Email</span>
            <span className="text-gray-800">{'email'}</span>
          </div>

          <div className="flex justify-between border-b pb-2">
            <span className="font-semibold text-gray-600">Account Created</span>
            <span className="text-gray-800">{'email'}</span>
          </div>

          {/* Profile Completion */}
          <div className="mt-4">
            <div className="flex justify-between mb-1 text-sm font-medium">
              <span>Profile Completion</span>
              <span>{50}%</span>
            </div>
            <div className="w-full bg-secondary rounded-full h-3">
              <div
                className="bg-neutral h-3 rounded-full transition-all"
                style={{ width: `${50}%` }}
              />
            </div>
          </div>

      
        </div>
    </div>
  );
};

export default MyProfile;
