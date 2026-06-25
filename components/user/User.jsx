'use client';

import React, { useState } from 'react';
import { Eye, Trash2, Mail, X } from 'lucide-react';

const User = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const users = [
    {
      id: 1,
      name: 'Rahul Sharma',
      email: 'rahul@gmail.com',
      joinDate: '2025-01-15',
      phone: '+91 9876543210',
      city: 'Delhi',
    },
    {
      id: 2,
      name: 'Priya Verma',
      email: 'priya@gmail.com',
      joinDate: '2025-02-10',
      phone: '+91 9876543211',
      city: 'Mumbai',
    },
    {
      id: 3,
      name: 'Amit Kumar',
      email: 'amit@gmail.com',
      joinDate: '2025-03-05',
      phone: '+91 9876543212',
      city: 'Noida',
    },
    {
      id: 4,
      name: 'Neha Singh',
      email: 'neha@gmail.com',
      joinDate: '2025-04-20',
      phone: '+91 9876543213',
      city: 'Bangalore',
    },
    {
      id: 5,
      name: 'Vikas Joshi',
      email: 'vikas@gmail.com',
      joinDate: '2025-05-18',
      phone: '+91 9876543214',
      city: 'Dehradun',
    },
  ];

  const handleViewUser = (user) => {
    setSelectedUser(user);
    setOpenModal(true);
  };

  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Users
        </h1>

        <p className="text-slate-500 mt-1">
          Manage registered customers
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">

        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-5">
                  User
                </th>

                <th className="text-left px-6 py-5">
                  Email
                </th>

                <th className="text-left px-6 py-5">
                  Join Date
                </th>

                <th className="text-center px-6 py-5">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  {/* User */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">

                      <div className="w-10 h-10 rounded-full bg-[#B3001B] text-white flex items-center justify-center font-semibold">
                        {user.name.charAt(0)}
                      </div>

                      <span className="font-medium text-slate-900">
                        {user.name}
                      </span>

                    </div>
                  </td>

                  {/* Email */}
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-slate-600">
                      <Mail size={16} />
                      {user.email}
                    </div>
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-slate-700">
                    {user.joinDate}
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4">
                    <div className="flex justify-center gap-5">

                      <button
                        onClick={() => handleViewUser(user)}
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <Eye size={18} />
                      </button>

                      <button className="text-red-500 hover:text-red-600">
                        <Trash2 size={18} />
                      </button>

                    </div>
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>

      {/* View User Modal */}
      {openModal && selectedUser && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl">

            {/* Header */}
            <div className="bg-[#B3001B] p-5 flex items-center justify-between">

              <h2 className="text-2xl font-bold text-white">
                User Details
              </h2>

              <button
                onClick={() => setOpenModal(false)}
                className="text-white"
              >
                <X size={24} />
              </button>

            </div>

            {/* Body */}
            <div className="p-6">

              <div className="flex flex-col items-center mb-6">

                <div className="w-20 h-20 rounded-full bg-[#B3001B] text-white flex items-center justify-center text-3xl font-bold">
                  {selectedUser.name.charAt(0)}
                </div>

                <h3 className="mt-4 text-xl font-bold">
                  {selectedUser.name}
                </h3>

              </div>

              <div className="space-y-4">

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">
                    Email
                  </span>

                  <span className="font-medium">
                    {selectedUser.email}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">
                    Phone
                  </span>

                  <span className="font-medium">
                    {selectedUser.phone}
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span className="text-gray-500">
                    City
                  </span>

                  <span className="font-medium">
                    {selectedUser.city}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">
                    Join Date
                  </span>

                  <span className="font-medium">
                    {selectedUser.joinDate}
                  </span>
                </div>

              </div>

            </div>

            {/* Footer */}
            <div className="border-t p-5 flex justify-end">
              <button
                onClick={() => setOpenModal(false)}
                className="px-6 py-3 rounded-xl bg-[#B3001B] text-white hover:bg-[#920017]"
              >
                Close
              </button>
            </div>

          </div>

        </div>
      )}

    </div>
  );
};

export default User;