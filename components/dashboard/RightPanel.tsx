'use client';

import { Plus, ArrowRight, ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { transactions } from '@/data/mock/dashboard';

export function RightPanel() {
  return (
    <aside className="w-full xl:w-96 bg-white dark:bg-gray-900 xl:border-l border-gray-200 dark:border-gray-800 p-6 xl:p-8 flex flex-col gap-8 flex-shrink-0 transition-colors h-full overflow-y-auto">
      {/* Account Summary & Action */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Current Account</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">$45,678</p>
        </div>
        <button className="w-10 h-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-900 dark:text-gray-100">
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Card Widget */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">My Card</h3>
        </div>
        <div className="relative w-full aspect-[1.586/1] bg-gray-900 dark:bg-black rounded-[16px] p-6 flex flex-col justify-between overflow-hidden shadow-floating text-white group">
          {/* Accent strip */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-finaccent-softPink/20 dark:bg-finaccent-softPink/10 backdrop-blur-md rounded-b-[16px] transition-transform group-hover:scale-105 origin-bottom" />
          
          <div className="relative z-10 flex justify-between items-start">
            <div className="font-semibold tracking-widest opacity-80">FINOVATE</div>
            <div className="w-10 h-6 bg-white/20 rounded-sm" /> {/* Chip mockup */}
          </div>

          <div className="relative z-10 mt-auto">
            <div className="text-xl tracking-[0.2em] font-medium mb-4 opacity-90">
              **** **** **** 3829
            </div>
            <div className="flex justify-between items-end text-xs font-medium uppercase tracking-wider opacity-70">
              <span>Alex Morgan</span>
              <span>12/28</span>
            </div>
          </div>
        </div>
      </section>

      {/* Transactions */}
      <section className="flex-1 flex flex-col">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Transactions</h3>
          <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 flex items-center gap-1 transition-colors">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          {transactions.map((tx) => (
            <div key={tx.id} className="flex items-center justify-between group cursor-pointer">
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full flex items-center justify-center transition-colors ${
                  tx.type === 'income' 
                    ? 'bg-finaccent-successBg text-finaccent-success dark:bg-finaccent-success/10' 
                    : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100 group-hover:bg-gray-200 dark:group-hover:bg-gray-700'
                }`}>
                  {tx.type === 'income' ? <ArrowDownLeft className="w-5 h-5" /> : <ArrowUpRight className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">{tx.to}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{tx.date}</p>
                </div>
              </div>
              <div className={`text-sm font-semibold ${
                tx.type === 'income' ? 'text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
              }`}>
                {tx.type === 'income' ? '+' : '-'}${tx.amount.toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
