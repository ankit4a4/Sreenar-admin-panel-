"use client";

import React from "react";
import {
  Search,
  Plus,
  Eye,
  Pencil,
  Trash2,
} from "lucide-react";
import { useRouter } from "next/navigation";

const ViewProduct = () => {
  const router = useRouter();

  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=200",
      name: "Elegant Summer Dress",
      description:
        "A beautiful lightweight dress perfect for summer",
      category: "Dresses",
      price: "$89.99",
      oldPrice: "$69.99",
      stock: "45 units",
      colors: ["#000000", "#ffffff", "#ec4899"],
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=200",
      name: "Classic Oxford Shirt",
      description:
        "Timeless shirt for every wardrobe",
      category: "Shirts",
      price: "$79.99",
      oldPrice: "$59.99",
      stock: "32 units",
      colors: ["#ffffff", "#2563eb"],
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f4ea] p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold text-[#0f2744]">
            Products
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your product inventory
          </p>
        </div>

        <button
          onClick={() => router.push("/add-product")}
          className="bg-[#98001a] hover:bg-[#7d0015] text-white px-6 py-3 rounded-xl flex items-center gap-2 font-medium transition-all duration-300 shadow-md"
        >
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4 shadow-sm mb-6">
        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search products by name or category..."
            className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl outline-none focus:border-red-300"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b bg-white">
                <th className="text-left px-6 py-4 font-semibold text-[#0f2744]">
                  Product
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#0f2744]">
                  Category
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#0f2744]">
                  Price
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#0f2744]">
                  Stock
                </th>

                <th className="text-left px-6 py-4 font-semibold text-[#0f2744]">
                  Colors
                </th>

                <th className="text-center px-6 py-4 font-semibold text-[#0f2744]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  {/* Product */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 rounded-lg object-cover border"
                      />

                      <div>
                        <h3 className="font-semibold text-[#0f2744]">
                          {product.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {product.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Category */}
                  <td className="px-6 py-5">
                    <span className="bg-blue-100 text-blue-600 text-xs font-medium px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </td>

                  {/* Price */}
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-lg">
                        {product.price}
                      </span>

                      <span className="text-green-600 text-sm font-medium">
                        {product.oldPrice}
                      </span>
                    </div>
                  </td>

                  {/* Stock */}
                  <td className="px-6 py-5">
                    <span className="bg-green-100 text-green-600 text-sm px-3 py-1 rounded-full">
                      {product.stock}
                    </span>
                  </td>

                  {/* Colors */}
                  <td className="px-6 py-5">
                    <div className="flex gap-2">
                      {product.colors.map((color, index) => (
                        <div
                          key={index}
                          className="w-6 h-6 rounded border"
                          style={{
                            backgroundColor: color,
                          }}
                        />
                      ))}
                    </div>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-4">
                      <button className="text-blue-500 hover:scale-110 transition">
                        <Eye size={18} />
                      </button>

                      <button className="text-orange-500 hover:scale-110 transition">
                        <Pencil size={18} />
                      </button>

                      <button className="text-red-500 hover:scale-110 transition">
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
    </div>
  );
};

export default ViewProduct;