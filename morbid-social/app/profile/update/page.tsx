"use client";
import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  return (
    <div className="flex justify-center items-center">
      <div
        className="shadow-lg shadow-slate-500 py-5 px-5 border-2 border-slate-200 border-solid
    bg-slate-900 rounded-md w-1/2"
      >
        <h1 className="text-center mb-2">Update Profile</h1>
        <form className="px-8 pt-6 pb-8 mb-4">
          <div className="mb-6">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="name"
              placeholder="John Doe"
              value={"John Doe"}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-200 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="example@mail.com"
              value={"John.Doe@email.com"}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-200 text-sm mb-2"
              htmlFor="username"
            >
              Bio
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Bio..."
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Page;
