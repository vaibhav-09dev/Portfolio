'use client';

import React, { useState } from 'react';
import axios from 'axios';

const UserData = ({ users = [] }) => {
  

  console.log(users); // Debug userList state

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://vabhsinghdev-nu.vercel.app/api/Delete?id=${id}`).then((res) => {
        alert('Request Deleted Successfully');
        window.location.reload();
        setUserList(users.filter((user) => user._id !== id));
        
      });
    } catch (error) {
      console.log('Error in deleting:', error);
    }
  };

  return (
    <div className="overflow-x-auto mt-10 px-4">
      <h1 className="text-2xl md:text-4xl mt-20 font-bold text-gray-800 text-center mb-6">User Data</h1>
      <div className="shadow-lg rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-3 px-4 text-left text-sm md:text-base font-semibold">Name</th>
              <th className="py-3 px-4 text-left text-sm md:text-base font-semibold">Email</th>
              <th className="py-3 px-4 text-left text-sm md:text-base font-semibold">Subject</th>
              <th className="py-3 px-4 text-left text-sm md:text-base font-semibold">Message</th>
              <th className="py-3 px-4 text-left text-sm md:text-base font-semibold">Date</th>
              <th className="py-3 px-4 text-center text-sm md:text-base font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(users) && users.map((user) => (
                <tr key={user._id} className="hover:bg-gray-100 transition duration-300">
                  <td className="py-3 px-4 border-b border-gray-200 text-sm md:text-base text-gray-700">{user.Name}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-sm md:text-base text-gray-700">{user.email}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-sm md:text-base text-gray-700">{user.subject}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-sm md:text-base text-gray-700">{user.message}</td>
                  <td className="py-3 px-4 border-b border-gray-200 text-sm md:text-base text-gray-700">
                    {user.createdAt ? new Date(user.createdAt).toLocaleString() : 'N/A'}
                  </td>
                  <td className="py-3 px-4 border-b border-gray-200 text-center">
                    <button
                      onClick={() => handleDelete(user._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded  transition duration-300"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserData;