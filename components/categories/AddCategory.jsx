'use client';

import React from 'react';
import { X } from 'lucide-react';

const AddCategory = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">

      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="bg-[#B3001B] px-5 py-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-white">
            Add Category
          </h2>

          <button
            onClick={onClose}
            className="text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <div className="p-5 space-y-4">

          {/* Category Name */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Category Name
            </label>

            <input
              type="text"
              placeholder="Enter category name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#B3001B]"
            />
          </div>

          {/* Parent Category */}
          <div>
            <label className="block text-sm font-medium mb-2">
              Main Category
            </label>

            <select className="w-full border border-gray-200 rounded-lg px-4 py-3 outline-none focus:border-[#B3001B]">
              <option value="">
                Select Main Category
              </option>

              <option value="electronics">
                Electronics
              </option>

              <option value="fashion">
                Fashion
              </option>

              <option value="accessories">
                Accessories
              </option>
            </select>

            <p className="text-xs text-gray-500 mt-2">
              Empty chhodo agar Main Category create karni hai.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="border-t p-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border rounded-lg"
          >
            Cancel
          </button>

          <button className="px-5 py-2 bg-[#B3001B] text-white rounded-lg hover:bg-[#920017]">
            Save Category
          </button>
        </div>

      </div>

    </div>
  );
};

export default AddCategory;