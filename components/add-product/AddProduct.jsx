"use client";

import React, { useState } from "react";
import {
  Upload,
  Trash2,
  Plus,
  Image as ImageIcon,
  X,
  CheckCircle,
} from "lucide-react";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    productImages: [],
    sizeGuide: null,
    sizes: [],
    colors: [],
    colorInput: "",
    category: "",
    productDetails: "",
  });

  const sizeOptions = ["XS", "S", "M", "L", "XL", "XXL"];
  
  const categories = [
    "Men's Clothing",
    "Women's Clothing",
    "Kids' Clothing",
    "Accessories",
    "Footwear",
    "Bags",
    "Jewelry",
    "Sportswear",
  ];

  // Product Images
  const handleProductImages = (e) => {
    const files = Array.from(e.target.files);

    const images = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setFormData((prev) => ({
      ...prev,
      productImages: [...prev.productImages, ...images],
    }));
  };

  const removeProductImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      productImages: prev.productImages.filter((_, i) => i !== index),
    }));
  };

  // Size Guide
  const handleSizeGuide = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      sizeGuide: {
        file,
        preview: URL.createObjectURL(file),
      },
    }));
  };

  const removeSizeGuide = () => {
    setFormData((prev) => ({
      ...prev,
      sizeGuide: null,
    }));
  };

  // Sizes
  const handleSizeChange = (size) => {
    const exists = formData.sizes.includes(size);

    setFormData((prev) => ({
      ...prev,
      sizes: exists ? prev.sizes.filter((s) => s !== size) : [...prev.sizes, size],
    }));
  };

  // Colors
  const addColor = () => {
    if (!formData.colorInput || formData.colors.includes(formData.colorInput)) return;

    setFormData((prev) => ({
      ...prev,
      colors: [...prev.colors, prev.colorInput],
      colorInput: "",
    }));
  };

  const removeColor = (index) => {
    setFormData((prev) => ({
      ...prev,
      colors: prev.colors.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Product Data:", formData);
    // Add your product submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold" style={{ color: "#B32221" }}>
                Add New Product
              </h1>
              <p className="text-gray-600 mt-2 text-sm">
                Fill in the details below to create a new product
              </p>
            </div>
            <div className="flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-md border-2" style={{ borderColor: "#B32221" }}>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Draft</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2" style={{ borderColor: "#B32221" }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 rounded-full" style={{ backgroundColor: "#B32221" }}></span>
                Basic Information
              </h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        productName: e.target.value,
                      })
                    }
                    placeholder="e.g. Premium Leather Jacket"
                    className="w-full border-2 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                    style={{ borderColor: "#B32221" }}
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(179, 34, 33, 0.2)")}
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        category: e.target.value,
                      })
                    }
                    className="w-full border-2 rounded-xl px-4 py-3 outline-none transition-all appearance-none bg-white"
                    style={{ borderColor: "#B32221" }}
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(179, 34, 33, 0.2)")}
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                  >
                    <option value="">Select a category</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                  <textarea
                    rows="4"
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        description: e.target.value,
                      })
                    }
                    placeholder="Describe your product in detail..."
                    className="w-full border-2 rounded-xl px-4 py-3 outline-none transition-all resize-none placeholder:text-gray-400"
                    style={{ borderColor: "#B32221" }}
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(179, 34, 33, 0.2)")}
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                  />
                  <div className="text-right text-xs text-gray-400 mt-1">
                    {formData.description.length} characters
                  </div>
                </div>
              </div>
            </div>

            {/* Media Section */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2" style={{ borderColor: "#B32221" }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 rounded-full" style={{ backgroundColor: "#B32221" }}></span>
                Media
              </h2>

              {/* Product Images */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Product Images <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.productImages.map((img, index) => (
                    <div key={index} className="relative group">
                      <div className="aspect-square rounded-xl overflow-hidden border-2" style={{ borderColor: "#B32221" }}>
                        <img
                          src={img.preview}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <button
                        type="button"
                        onClick={() => removeProductImage(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all hover:scale-110"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}

                  {formData.productImages.length < 4 && (
                    <label className="aspect-square border-2 border-dashed rounded-xl flex flex-col items-center justify-center cursor-pointer transition-colors bg-gray-50 hover:bg-gray-100 group" style={{ borderColor: "#B32221" }}>
                      <div className="text-gray-400 group-hover:text-[#B32221] transition-colors">
                        <Upload size={28} strokeWidth={1.5} />
                      </div>
                      <span className="text-xs text-gray-400 mt-2 group-hover:text-[#B32221] transition-colors">
                        Upload
                      </span>
                      <input
                        type="file"
                        multiple
                        hidden
                        onChange={handleProductImages}
                        accept="image/*"
                      />
                    </label>
                  )}
                </div>
                <p className="text-xs text-gray-500 mt-3">
                  Upload up to 4 images. Recommended: 800x800px
                </p>
              </div>

              {/* Size Guide */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Size Guide
                </label>

                {!formData.sizeGuide ? (
                  <label className="border-2 border-dashed rounded-xl p-8 flex flex-col items-center cursor-pointer transition-colors bg-gray-50 hover:bg-gray-100 group" style={{ borderColor: "#B32221" }}>
                    <ImageIcon size={32} strokeWidth={1.5} className="text-gray-400 group-hover:text-[#B32221] transition-colors" />
                    <span className="text-sm text-gray-500 mt-3 group-hover:text-[#B32221] transition-colors">
                      Upload Size Guide Image
                    </span>
                    <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</span>
                    <input type="file" hidden onChange={handleSizeGuide} accept="image/*" />
                  </label>
                ) : (
                  <div className="relative inline-block">
                    <img
                      src={formData.sizeGuide.preview}
                      alt=""
                      className="rounded-xl max-h-64 object-contain border-2" style={{ borderColor: "#B32221" }}
                    />
                    <button
                      onClick={removeSizeGuide}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full shadow-lg shadow-red-500/30 hover:shadow-red-500/50 transition-all hover:scale-110"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Variants Section */}
            <div className="bg-white rounded-2xl p-8 shadow-md border-2" style={{ borderColor: "#B32221" }}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
                <span className="w-1 h-6 rounded-full" style={{ backgroundColor: "#B32221" }}></span>
                Variants
              </h2>

              {/* Sizes */}
              <div className="mb-8">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Available Sizes
                </label>

                <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
                  {sizeOptions.map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => handleSizeChange(size)}
                      className={`py-3 rounded-xl text-sm font-medium transition-all border-2 ${
                        formData.sizes.includes(size)
                          ? "text-white shadow-lg shadow-[#B32221]/30" 
                          : "bg-white text-gray-600 hover:bg-gray-50"
                      }`}
                      style={{
                        backgroundColor: formData.sizes.includes(size) ? "#B32221" : "",
                        borderColor: formData.sizes.includes(size) ? "#B32221" : "#B32221",
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Colors */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Colors
                </label>

                <div className="flex gap-3 mb-4">
                  <input
                    type="text"
                    placeholder="#000000 or Color Name"
                    value={formData.colorInput}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        colorInput: e.target.value,
                      })
                    }
                    className="flex-1 border-2 rounded-xl px-4 py-3 outline-none transition-all placeholder:text-gray-400"
                    style={{ borderColor: "#B32221" }}
                    onFocus={(e) => (e.target.style.boxShadow = "0 0 0 3px rgba(179, 34, 33, 0.2)")}
                    onBlur={(e) => (e.target.style.boxShadow = "none")}
                  />
                  <button
                    type="button"
                    onClick={addColor}
                    className="text-white px-6 rounded-xl transition-colors shadow-lg flex items-center gap-2 border-2"
                    style={{ backgroundColor: "#B32221", borderColor: "#B32221" }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#8a1a1a";
                      e.target.style.borderColor = "#8a1a1a";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "#B32221";
                      e.target.style.borderColor = "#B32221";
                    }}
                  >
                    <Plus size={18} />
                    Add
                  </button>
                </div>

                <div className="flex flex-wrap gap-3">
                  {formData.colors.map((color, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-full border-2" style={{ borderColor: "#B32221" }}>
                      <div
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color }}
                      />
                      <span className="text-sm text-gray-700">{color}</span>
                      <button
                        onClick={() => removeColor(index)}
                        className="text-gray-400 hover:text-red-500 transition-colors ml-1"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Add Product Button */}
            <button
              type="submit"
              className="w-full text-white py-4 rounded-xl font-medium transition-all shadow-lg shadow-[#B32221]/30 hover:shadow-[#B32221]/40 flex items-center justify-center gap-2 group border-2"
              style={{ backgroundColor: "#B32221", borderColor: "#B32221" }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#8a1a1a";
                e.target.style.borderColor = "#8a1a1a";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#B32221";
                e.target.style.borderColor = "#B32221";
              }}
            >
              <CheckCircle size={20} className="group-hover:scale-110 transition-transform" />
              Add Product
            </button>

            <p className="text-xs text-gray-500 text-center mt-3">
              By adding this product, it will be published to your store
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;