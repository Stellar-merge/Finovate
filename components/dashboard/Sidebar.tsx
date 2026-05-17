'use client';

import {
  LayoutDashboard,
  CreditCard,
  PieChart,
  Settings,
  HelpCircle,
  Home,
  MoonIcon,
  SunIcon,
} from 'lucide-react';
import { useThemeSwitch } from '@/components/shared/useThemeSwitch';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', active: true },
  { icon: CreditCard, label: 'Cards', href: '#', active: false },
  { icon: PieChart, label: 'Analytics', href: '#', active: false },
  { icon: Home, label: 'Home', href: '/', active: false },
  { icon: Settings, label: 'Settings', href: '#', active: false },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState('/dashboard');
  const [mounted, setMounted] = useState(false);
  const { currentTheme, updateTheme } = useThemeSwitch();

  useEffect(() => setMounted(true), []);

  return (
    <>
      {/* Desktop & Tablet Sidebar */}
      <aside className="group hidden md:flex flex-col w-20 lg:w-24 hover:w-64 h-screen fixed left-0 top-0 bg-white dark:bg-finaccent-sidebar z-50 py-6 border-r border-gray-200 dark:border-gray-800 transition-all duration-500 ease-in-out">
        {/* Logo */}
        <div className="w-full flex justify-center group-hover:justify-start group-hover:px-8 mb-10 transition-all duration-500">
          <Link href="/" className="flex items-center group/logo" aria-label="Go to Homepage">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-900 dark:bg-white rounded-md rotate-45 transition-transform group-hover/logo:scale-105 flex-shrink-0">
              <div className="w-4 h-4 bg-white dark:bg-finaccent-sidebar rotate-45" />
            </div>
            <span className="whitespace-nowrap overflow-hidden transition-all duration-500 text-gray-900 dark:text-white font-bold text-xl w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:ml-5 flex items-center">
              Finovate
            </span>
          </Link>
        </div>

        {/* Top Nav */}
        <nav className="flex flex-col gap-8 w-full flex-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="relative w-full flex items-center justify-center group-hover:justify-start group-hover:px-8 group/link transition-all duration-500"
              onClick={() => setActiveItem(item.href)}
            >
              {item.active && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-6 bg-gray-900 dark:bg-white rounded-r-full" />
              )}
              <div className="flex items-center">
                <div className="w-8 flex items-center justify-center flex-shrink-0">
                  <item.icon
                    className={`w-5 h-5 transition-colors ${
                      item.active ? 'text-gray-900 dark:text-white' : 'text-gray-500 group-hover/link:text-gray-900 dark:group-hover/link:text-gray-300'
                    }`}
                    strokeWidth={1.75}
                  />
                </div>
                <span className={`whitespace-nowrap overflow-hidden transition-all duration-500 ${
                  item.active ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400 group-hover/link:text-gray-900 dark:group-hover/link:text-gray-200'
                } w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:ml-3`}>
                  {item.label}
                </span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Bottom Utils */}
        <div className="flex flex-col gap-8 w-full">
          <button className="relative w-full flex items-center justify-center group-hover:justify-start group-hover:px-8 group/btn transition-all duration-500">
            <div className="flex items-center">
              <div className="w-8 flex items-center justify-center flex-shrink-0">
                <HelpCircle className="w-5 h-5 text-gray-500 group-hover/btn:text-gray-900 dark:group-hover/btn:text-gray-300 transition-colors" strokeWidth={1.75} />
              </div>
              <span className="whitespace-nowrap overflow-hidden transition-all duration-500 text-gray-500 dark:text-gray-400 group-hover/btn:text-gray-900 dark:group-hover/btn:text-gray-200 w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:ml-3">
                Help
              </span>
            </div>
          </button>
          <button onClick={updateTheme} className="relative w-full flex items-center justify-center group-hover:justify-start group-hover:px-8 group/btn transition-all duration-500">
            <div className="flex items-center">
              <div className="w-8 flex items-center justify-center flex-shrink-0">
                {mounted && currentTheme === 'dark' ? (
                  <MoonIcon className="w-5 h-5 text-gray-500 group-hover/btn:text-gray-900 dark:group-hover/btn:text-gray-300 transition-colors" strokeWidth={1.75} />
                ) : (
                  <SunIcon className="w-5 h-5 text-gray-500 group-hover/btn:text-gray-900 dark:group-hover/btn:text-gray-300 transition-colors" strokeWidth={1.75} />
                )}
              </div>
              <span className="whitespace-nowrap overflow-hidden transition-all duration-500 text-gray-500 dark:text-gray-400 group-hover/btn:text-gray-900 dark:group-hover/btn:text-gray-200 w-0 opacity-0 group-hover:w-auto group-hover:opacity-100 group-hover:ml-3">
                Theme
              </span>
            </div>
          </button>
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
          <button onClick={updateTheme} aria-label="Toggle Theme">
            {mounted && currentTheme === 'dark' ? <MoonIcon className="w-5 h-5" /> : <SunIcon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </>
  );
}
