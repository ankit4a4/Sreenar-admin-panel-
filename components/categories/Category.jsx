'use client';

import React, { useState } from 'react';
import { Plus, Pencil, Trash2, FolderTree } from 'lucide-react';
import AddCategory from '@/components/categories/AddCategory';
const Category = () => {

  const [openModal, setOpenModal] = useState(false);

  const [categories] = useState([
    {
      id: 1,
      name: 'Electronics',
      description: 'Electronic products',
      subCategories: ['Mobiles', 'Laptops', 'Smart Watches'],
    },
    {
      id: 2,
      name: 'Fashion',
      description: 'Men & Women Clothing',
      subCategories: ['Shirts', 'Pants', 'Shoes'],
    },
    {
      id: 3,
      name: 'Accessories',
      description: 'Bags & Accessories',
      subCategories: ['Wallets', 'Belts'],
    },
  ]);

  return (
    <div className="w-full">

      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-slate-900">
            Categories
          </h1>

          <p className="text-slate-500 mt-1">
            Manage categories and subcategories
          </p>
        </div>

        <button
          onClick={() => setOpenModal(true)}
          className="bg-[#B3001B] text-white px-5 py-3 rounded-xl"
        >
          Add Category
        </button>
      </div>



      {/* Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.id}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {category.name}
                </h3>

                <p className="text-slate-500 mt-1">
                  {category.description}
                </p>
              </div>

              <div className="w-14 h-14 rounded-xl bg-[#B3001B] text-white flex items-center justify-center font-bold text-xl">
                {category.name.charAt(0)}
              </div>
            </div>

            <div className="my-5 border-t"></div>

            {/* Sub Categories */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <FolderTree size={18} className="text-[#B3001B]" />
                <span className="font-medium">
                  Sub Categories ({category.subCategories.length})
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.subCategories.map((sub, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-red-50 text-[#B3001B] rounded-full text-sm"
                  >
                    {sub}
                  </span>
                ))}
              </div>
            </div>

            <div className="my-5 border-t"></div>

            {/* Actions */}
            <div className="flex justify-between">
              <button className="flex items-center gap-2 text-orange-500 hover:text-orange-600">
                <Pencil size={16} />
                Edit
              </button>

              <button className="flex items-center gap-2 text-red-500 hover:text-red-600">
                <Trash2 size={16} />
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>


      <AddCategory
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default Category;