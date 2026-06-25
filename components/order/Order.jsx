'use client';

import React, { useState } from 'react';
import { Eye, Trash2, X } from 'lucide-react';

const Order = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const orders = [
    {
      id: 'ORD-001',
      customer: 'Rahul Sharma',
      product: 'iPhone 15 Pro',
      amount: '₹1,29,999',
      date: '2026-06-15',
      status: 'Delivered',
      email: 'rahul@gmail.com',
      phone: '+91 9876543210',
      address: 'Delhi, India',
    },
    {
      id: 'ORD-002',
      customer: 'Priya Verma',
      product: 'Samsung Galaxy S25',
      amount: '₹89,999',
      date: '2026-06-18',
      status: 'Processing',
      email: 'priya@gmail.com',
      phone: '+91 9876543211',
      address: 'Mumbai, India',
    },
    {
      id: 'ORD-003',
      customer: 'Amit Kumar',
      product: 'MacBook Air M4',
      amount: '₹1,14,999',
      date: '2026-06-19',
      status: 'Shipped',
      email: 'amit@gmail.com',
      phone: '+91 9876543212',
      address: 'Noida, India',
    },
    {
      id: 'ORD-004',
      customer: 'Neha Singh',
      product: 'Sony WH-1000XM6',
      amount: '₹29,999',
      date: '2026-06-20',
      status: 'Pending',
      email: 'neha@gmail.com',
      phone: '+91 9876543213',
      address: 'Bangalore, India',
    },
  ];

  const handleViewOrder = (order) => {
    setSelectedOrder(order);
    setOpenModal(true);
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Delivered':
        return 'bg-green-100 text-green-700';
      case 'Processing':
        return 'bg-yellow-100 text-yellow-700';
      case 'Shipped':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="w-full">

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">
          Orders
        </h1>

        <p className="text-slate-500 mt-1">
          Manage and track customer orders
        </p>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">

            <thead className="bg-gray-50 border-b">
              <tr>
                <th className="text-left px-6 py-4">Order ID</th>
                <th className="text-left px-6 py-4">Customer</th>
                <th className="text-left px-6 py-4">Product</th>
                <th className="text-left px-6 py-4">Amount</th>
                <th className="text-left px-6 py-4">Date</th>
                <th className="text-left px-6 py-4">Status</th>
                <th className="text-center px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((order) => (
                <tr
                  key={order.id}
                  className="border-b hover:bg-gray-50 transition-all"
                >
                  <td className="px-6 py-5 font-semibold">
                    {order.id}
                  </td>

                  <td className="px-6 py-5">
                    {order.customer}
                  </td>

                  <td className="px-6 py-5">
                    {order.product}
                  </td>

                  <td className="px-6 py-5 font-bold text-lg">
                    {order.amount}
                  </td>

                  <td className="px-6 py-5">
                    {order.date}
                  </td>

                  <td className="px-6 py-5">
                    <select
                      defaultValue={order.status}
                      className={`px-4 py-2 rounded-full text-sm font-medium outline-none ${getStatusStyle(
                        order.status
                      )}`}
                    >
                      <option>Pending</option>
                      <option>Processing</option>
                      <option>Shipped</option>
                      <option>Delivered</option>
                    </select>
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex justify-center gap-4">

                      <button
                        onClick={() => handleViewOrder(order)}
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

      {/* View Order Modal */}
      {openModal && selectedOrder && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">

          <div className="bg-white w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl">

            {/* Header */}
            <div className="bg-[#B3001B] p-5 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">
                Order Details
              </h2>

              <button
                onClick={() => setOpenModal(false)}
                className="text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 space-y-4">

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Order ID</span>
                <span className="font-semibold">
                  {selectedOrder.id}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Customer</span>
                <span className="font-semibold">
                  {selectedOrder.customer}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Email</span>
                <span className="font-semibold">
                  {selectedOrder.email}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Phone</span>
                <span className="font-semibold">
                  {selectedOrder.phone}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Product</span>
                <span className="font-semibold">
                  {selectedOrder.product}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Amount</span>
                <span className="font-bold text-green-600">
                  {selectedOrder.amount}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Date</span>
                <span className="font-semibold">
                  {selectedOrder.date}
                </span>
              </div>

              <div className="flex justify-between border-b pb-3">
                <span className="text-gray-500">Status</span>
                <span className="font-semibold text-[#B3001B]">
                  {selectedOrder.status}
                </span>
              </div>

              <div>
                <span className="text-gray-500 block mb-2">
                  Delivery Address
                </span>

                <div className="bg-gray-50 p-4 rounded-xl">
                  {selectedOrder.address}
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

export default Order;