'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Package,
  Layers3,
  ShoppingCart,
  Users,
  Mail,
} from "lucide-react";

import img from "@/assets/logo.webp";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      slug: "/",
      icon: <Home size={20} />,
    },
    {
      name: "Products",
      slug: "/products",
      icon: <Package size={20} />,
    },
    {
      name: "Categories",
      slug: "/categories",
      icon: <Layers3 size={20} />,
    },
    {
      name: "Orders",
      slug: "/orders",
      icon: <ShoppingCart size={20} />,
    },
    {
      name: "Users",
      slug: "/users",
      icon: <Users size={20} />,
    },
    {
      name: "Messages",
      slug: "/messages",
      icon: <Mail size={20} />,
    },
  ];

  return (
    <aside className="w-full h-screen bg-[#B3001B] flex flex-col justify-between">
      {/* Logo */}
      <div>
        <div className="border-b border-white/10">
          <div className="w-full flex items-center justify-center py-4">
            <img
              src={img.src}
              alt="Logo"
              className="w-[65%] h-auto object-contain"
            />
          </div>
        </div>

        {/* Menu */}
        <div className="px-[6%] py-6">
          <ul className="space-y-3">
            {menuItems.map((item, index) => {
              const isActive = pathname === item.slug;

              return (
                <li key={index}>
                  <Link
                    href={item.slug}
                    className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-white/15 text-white shadow-md"
                        : "text-white/90 hover:bg-white/10"
                    }`}
                  >
                    {item.icon}
                    <span className="font-medium text-base">
                      {item.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 py-4 text-center">
        <p className="text-white/70 text-sm">
          © 2026 Admin Panel
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;