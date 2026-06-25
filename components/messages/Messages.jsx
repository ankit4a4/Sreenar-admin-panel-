'use client';
import React, { useState } from "react";
import { FaEye, FaTrash, FaEnvelope } from "react-icons/fa";

const messages = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    subject: "Question about sizing",
    message:
      "I would like to know the exact measurements for size L. Please provide chest, shoulder, sleeve and length dimensions so I can choose the correct size.",
    date: "2024-01-20",
    unread: true,
  },
  {
    id: 2,
    name: "Amy Smith",
    email: "amy@example.com",
    subject: "Shipping inquiry",
    message:
      "How long does shipping take to Canada? Also, do you provide express shipping options and tracking information?",
    date: "2024-01-19",
    unread: false,
  },
];

const Messages = () => {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [messageList, setMessageList] = useState(messages);

  const handleDelete = (id) => {
    setMessageList(messageList.filter((msg) => msg.id !== id));

    if (selectedMessage?.id === id) {
      setSelectedMessage(null);
    }
  };

  const unreadCount = messageList.filter(
    (msg) => msg.unread
  ).length;

  return (
    <section className="min-h-screen bg-[#f5f1e8] p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold text-gray-900">
            Messages
          </h1>
          <p className="text-gray-600 mt-1">
            Contact form submissions
          </p>
        </div>

        <div className="mt-4 md:mt-0">
          <span className="bg-red-100 text-red-600 px-5 py-2 rounded-full font-semibold">
            {unreadCount} Unread
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-5">
        {messageList.map((msg) => (
          <div
            key={msg.id}
            className={`rounded-2xl border p-5 transition-all duration-300 ${
              msg.unread
                ? "bg-blue-50 border-blue-200"
                : "bg-white border-gray-200"
            }`}
          >
            <div className="flex gap-4">
              {/* Avatar */}
              <div className="w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center font-bold text-lg shrink-0">
                {msg.name.charAt(0)}
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg text-gray-900">
                    {msg.name}
                  </h3>

                  {msg.unread && (
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  )}
                </div>

                <p className="flex items-center gap-2 text-sm text-gray-600">
                  <FaEnvelope />
                  {msg.email}
                </p>

                <h4 className="font-semibold text-lg mt-4">
                  {msg.subject}
                </h4>

                <p className="text-gray-600 mt-1 line-clamp-2">
                  {msg.message}
                </p>

                <p className="text-sm text-gray-500 mt-4">
                  {msg.date}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="border-t mt-5 pt-4 flex justify-center gap-20">
              <button
                onClick={() => setSelectedMessage(msg)}
                className="flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
              >
                <FaEye />
                View
              </button>

              <button
                onClick={() => handleDelete(msg.id)}
                className="flex items-center gap-2 text-red-500 hover:text-red-700 font-medium"
              >
                <FaTrash />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMessage && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="flex justify-between items-center p-5 border-b">
              <h2 className="text-2xl font-bold text-gray-900">
                Message Details
              </h2>

              <button
                onClick={() => setSelectedMessage(null)}
                className="text-3xl text-gray-500 hover:text-red-500"
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-5">
              <div>
                <p className="text-sm text-gray-500">
                  Sender Name
                </p>
                <p className="font-semibold text-lg">
                  {selectedMessage.name}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Email Address
                </p>
                <p className="font-semibold">
                  {selectedMessage.email}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Subject
                </p>
                <p className="font-semibold">
                  {selectedMessage.subject}
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-2">
                  Message
                </p>

                <div className="bg-gray-50 border rounded-xl p-4 text-gray-700 leading-relaxed">
                  {selectedMessage.message}
                </div>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Date
                </p>
                <p className="font-semibold">
                  {selectedMessage.date}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="border-t p-5 flex justify-end">
              <button
                onClick={() => setSelectedMessage(null)}
                className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Messages;