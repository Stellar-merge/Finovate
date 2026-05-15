'use client';

import { Settings, Bell, ChevronDown, Download } from 'lucide-react';
import { heroStats, metricCards, moneyFlowStats, chartData } from '@/data/mock/dashboard';

export function MainAnalytics() {
  return (
    <main className="flex-1 flex flex-col min-w-0 bg-primary-50 dark:bg-gray-950 overflow-y-auto">
      {/* Header */}
      <header className="flex items-center justify-between px-6 lg:px-8 py-6">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100 tracking-tight">Dashboard</h1>
        <div className="flex items-center gap-4">
          <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center bg-white dark:bg-gray-900 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <Bell className="w-5 h-5" />
          </button>
          <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-800 flex items-center justify-center bg-white dark:bg-gray-900 text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="px-6 lg:px-8 pb-8 flex flex-col gap-8">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row gap-8 lg:items-end">
          {/* Left: Main Balance */}
          <div className="flex-1 flex flex-col gap-6">
            <div>
              <p className="text-6xl lg:text-7xl font-bold leading-none tracking-[-0.04em] text-gray-900 dark:text-gray-100 mb-6">
                {heroStats.mainBalance}
              </p>
              <div className="flex flex-wrap gap-8">
                {heroStats.subStats.map((stat, i) => (
                  <div key={i}>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-1">{stat.label}</p>
                    <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-2">
              <button className="px-6 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-[6px] font-semibold text-sm hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors">
                Make Payment
              </button>
              <button className="px-6 py-3.5 bg-transparent border-[1.5px] border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-[6px] font-semibold text-sm hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors">
                Requisites
              </button>
            </div>
          </div>

          {/* Right: Metric Cards */}
          <div className="flex flex-col sm:flex-row gap-5">
            <div className="bg-finaccent-revenueCard dark:bg-finaccent-revenueCard/10 p-6 rounded-lg w-full sm:w-44 border border-finaccent-revenueCard dark:border-secondary-800 transition-transform hover:-translate-y-1 duration-200">
              <p className="text-sm font-medium text-secondary-800 dark:text-secondary-200 mb-2">Total Revenue</p>
              <p className="text-2xl font-bold text-secondary-900 dark:text-secondary-100 mb-4">{metricCards[0].value}</p>
              {/* Micro bar graph placeholder */}
              <div className="flex items-end gap-1 h-8 opacity-70">
                {[40, 70, 45, 90, 65, 80].map((h, i) => (
                  <div key={i} className="flex-1 bg-secondary-400 dark:bg-secondary-500 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
            
            <div className="bg-finaccent-expenseCard dark:bg-finaccent-expenseCard/10 p-6 rounded-lg w-full sm:w-44 border border-finaccent-expenseCard/50 dark:border-yellow-900/30 transition-transform hover:-translate-y-1 duration-200">
              <p className="text-sm font-medium text-[#7A6B29] dark:text-yellow-200 mb-2">Total Expense</p>
              <p className="text-2xl font-bold text-[#5C501F] dark:text-yellow-100 mb-4">{metricCards[1].value}</p>
              {/* Micro bar graph placeholder */}
              <div className="flex items-end gap-1 h-8 opacity-70">
                {[60, 30, 80, 50, 40, 60].map((h, i) => (
                  <div key={i} className="flex-1 bg-[#C9B86D] dark:bg-yellow-600 rounded-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Chart Section */}
      <section className="flex-1 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 p-6 lg:p-8 flex flex-col min-h-96">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <h2 className="text-[32px] font-bold text-gray-900 dark:text-gray-100">Money Flow</h2>
          <div className="flex items-center gap-3">
            <button className="h-10 px-4 flex items-center gap-2 border border-gray-200 dark:border-gray-700 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              6 months
              <ChevronDown className="w-4 h-4 text-gray-400" />
            </button>
            <button className="h-10 w-10 flex items-center justify-center border border-gray-200 dark:border-gray-700 rounded-md text-gray-500 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-wrap gap-8 lg:gap-16 mb-10">
          {moneyFlowStats.map((stat, i) => (
            <div key={i} className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.label}</span>
                {stat.badge && (
                  <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
                    stat.badge.type === 'success' 
                      ? 'bg-finaccent-successBg text-finaccent-success dark:bg-finaccent-success/20' 
                      : 'bg-finaccent-dangerBg text-finaccent-danger dark:bg-finaccent-danger/20'
                  }`}>
                    {stat.badge.type === 'success' ? '+' : '-'}{stat.badge.text}
                  </span>
                )}
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-gray-100">{stat.value}</span>
            </div>
          ))}
        </div>

        {/* Minimal dual-line chart mockup */}
        <div className="relative flex-1 w-full min-h-60 mt-auto flex items-end">
          {/* Dashed Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between z-0">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full border-b border-dashed border-gray-200 dark:border-gray-800" />
            ))}
          </div>
          
          <div className="relative z-10 w-full h-full flex items-end justify-between px-2">
            {chartData.map((d, i) => {
              const h1 = (d.line1 / 50000) * 100;
              const h2 = (d.line2 / 50000) * 100;
              return (
                <div key={i} className="flex-1 flex justify-center group relative h-full">
                  {/* Tooltip on hover */}
                  <div className="opacity-0 group-hover:opacity-100 absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded pointer-events-none transition-opacity z-20 whitespace-nowrap">
                    {d.label}: ${d.line1}
                  </div>
                  
                  {/* Dots for the lines */}
                  <div 
                    className="absolute w-2 h-2 rounded-full bg-finaccent-chartLineDark dark:bg-white transition-transform group-hover:scale-150"
                    style={{ bottom: `${h1}%`, transform: 'translateY(50%)' }}
                  />
                  <div 
                    className="absolute w-2 h-2 rounded-full bg-finaccent-chartLineLight dark:bg-secondary-500 transition-transform group-hover:scale-150"
                    style={{ bottom: `${h2}%`, transform: 'translateY(50%)' }}
                  />

                  {/* X Axis label */}
                  <div className="absolute -bottom-6 text-xs text-gray-400 font-medium">{d.label}</div>
                </div>
              );
            })}
            
            {/* SVG Lines connecting the dots */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" preserveAspectRatio="none">
              <path 
                d={`M ${chartData.map((d, i) => `${(i / (chartData.length - 1)) * 100}% ${100 - (d.line1 / 50000) * 100}%`).join(' L ')}`} 
                fill="none" 
                className="stroke-finaccent-chartLineDark dark:stroke-white" 
                strokeWidth="2.5" 
                vectorEffect="non-scaling-stroke"
              />
              <path 
                d={`M ${chartData.map((d, i) => `${(i / (chartData.length - 1)) * 100}% ${100 - (d.line2 / 50000) * 100}%`).join(' L ')}`} 
                fill="none" 
                className="stroke-finaccent-chartLineLight dark:stroke-secondary-500" 
                strokeWidth="2" 
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </div>
        </div>
      </section>
    </main>
  );
}
