'use client';

import {
  Package,
  LayoutGrid,
  ShoppingCart,
  Users,
  Mail,
  TrendingUp,
} from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Products",
      value: 2,
      growth: "12%",
      icon: Package,
      color: "bg-blue-500",
    },
    {
      title: "Categories",
      value: 4,
      growth: "8%",
      icon: LayoutGrid,
      color: "bg-purple-500",
    },
    {
      title: "Total Orders",
      value: 4,
      growth: "24%",
      icon: ShoppingCart,
      color: "bg-green-500",
    },
    {
      title: "Total Users",
      value: 5,
      growth: "18%",
      icon: Users,
      color: "bg-orange-500",
    },
    {
      title: "Messages",
      value: 3,
      growth: "5%",
      icon: Mail,
      color: "bg-pink-500",
    },
    {
      title: "Revenue",
      value: "8742",
      growth: "32%",
      icon: TrendingUp,
      color: "bg-indigo-500",
    },
  ];

  return (
    <div className="w-full">
      {/* Welcome Banner */}
      <div className="bg-[#B3001B] rounded-2xl p-8 shadow-lg mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Welcome Back!
        </h1>

        <p className="text-white/90 text-lg">
          Here's what's happening with your business today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {stats.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between">
                <div
                  className={`${item.color} w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg`}
                >
                  <Icon size={24} />
                </div>

                <span className="text-green-500 font-semibold">
                  ↗ {item.growth}
                </span>
              </div>

              <div className="mt-5">
                <h3 className="text-gray-600 text-lg">
                  {item.title}
                </h3>

                <h2 className="text-4xl font-bold text-slate-900 mt-2">
                  {item.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>


      {/* Recent Orders & Top Products */}
      {/* Recent Orders & Top Products */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

        {/* Recent Orders */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Recent Orders
          </h2>

          <div className="space-y-4">
            {[
              {
                customer: "Rahul Sharma",
                date: "2026-06-15",
                amount: "₹5,499",
                status: "Delivered",
                color: "text-green-500",
              },
              {
                customer: "Priya Verma",
                date: "2026-06-18",
                amount: "₹3,299",
                status: "Processing",
                color: "text-orange-500",
              },
              {
                customer: "Amit Kumar",
                date: "2026-06-19",
                amount: "₹7,999",
                status: "Shipped",
                color: "text-blue-500",
              },
            ].map((order, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 flex justify-between items-center hover:bg-gray-100 transition-all duration-300"
              >
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {order.customer}
                  </h3>

                  <p className="text-sm text-gray-500">
                    {order.date}
                  </p>
                </div>

                <div className="text-right">
                  <h3 className="font-bold text-xl text-slate-900">
                    {order.amount}
                  </h3>

                  <p className={`text-sm font-medium ${order.color}`}>
                    {order.status}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Products */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Top Products
          </h2>

          <div className="space-y-4">
            {[
              {
                name: "Boat Rockerz 450",
                stock: 45,
                price: "₹1,499",
              },
              {
                name: "Noise Smart Watch",
                stock: 32,
                price: "₹2,999",
              },
              {
                name: "Realme Buds Air",
                stock: 28,
                price: "₹3,499",
              },
              {
                name: "Samsung Power Bank",
                stock: 18,
                price: "₹1,999",
              },
            ].map((product, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-4 flex justify-between items-center hover:bg-gray-100 transition-all duration-300"
              >
                <div>
                  <h3 className="font-semibold text-slate-900 text-lg">
                    {product.name}
                  </h3>

                  <p className="text-sm text-gray-500">
                    Stock: {product.stock}
                  </p>
                </div>

                <h3 className="font-bold text-2xl text-[#B3001B]">
                  {product.price}
                </h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;


