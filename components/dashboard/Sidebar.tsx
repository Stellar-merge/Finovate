'use client';

import {
  LayoutDashboard,
  CreditCard,
  PieChart,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { ThemeSwitch } from '@/components/shared/ThemeSwitch';
import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: CreditCard, label: 'Cards', href: '#', active: false },
  { icon: PieChart, label: 'Analytics', href: '#', active: false },
  { icon: Settings, label: 'Settings', href: '#', active: false },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('/dashboard');

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <aside className="hidden md:flex flex-col w-20 lg:w-24 h-screen fixed left-0 top-0 bg-finaccent-sidebar dark:bg-finaccent-sidebar z-50 py-6 items-center border-r border-gray-800 transition-all">
        {/* Logo */}
        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-md rotate-45 mb-10">
          <div className="w-4 h-4 bg-finaccent-sidebar rotate-45" />
        </div>

        {/* Top Nav */}
        <nav className="flex flex-col items-center gap-8 w-full flex-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative w-full flex justify-center group"
              onClick={() => setActiveItem(item.href)}
            >
              {item.active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-white rounded-r-full" />
              )}
              <item.icon
                className={`w-5 h-5 transition-colors ${
                  item.active ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
                }`}
                strokeWidth={1.75}
              />
            </Link>
          ))}
        </nav>

        {/* Bottom Utils */}
        <div className="flex flex-col items-center gap-8 w-full">
          <button className="text-gray-500 hover:text-gray-300 transition-colors">
            <HelpCircle className="w-5 h-5" strokeWidth={1.75} />
          </button>
          {/* Ensure the ThemeSwitch looks good here, or we can just render it. It's usually a button. */}
          <ThemeSwitch />
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-finaccent-sidebar z-50 flex items-center justify-around px-4 border-t border-gray-800">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={() => setActiveItem(item.href)}
            className="p-2"
          >
            <item.icon
              className={`w-5 h-5 transition-colors ${
                item.active ? 'text-white' : 'text-gray-500'
              }`}
              strokeWidth={1.75}
            />
          </Link>
        ))}
        <div className="p-2 flex items-center justify-center text-gray-500">
          <ThemeSwitch />
        </div>
      </div>
    </>
  );
}
