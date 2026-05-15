import { Sidebar } from '@/components/dashboard/Sidebar';
import { MainAnalytics } from '@/components/dashboard/MainAnalytics';
import { RightPanel } from '@/components/dashboard/RightPanel';

export const metadata = {
  title: 'Dashboard | Finovate',
  description: 'Minimal modern fintech dashboard.',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-primary-50 dark:bg-gray-950 font-sans text-gray-900 dark:text-gray-100 flex justify-center">
      {/* Outer shell to center content on ultra-wide screens */}
      <div className="w-full max-w-[1920px] relative flex h-screen overflow-hidden">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col xl:flex-row md:pl-20 lg:pl-24 pb-16 md:pb-0 h-full overflow-y-auto xl:overflow-hidden">
          
          {/* Main Analytics Container */}
          <div className="flex-1 xl:overflow-y-auto min-w-0">
            <MainAnalytics />
          </div>

          {/* Right Panel Container */}
          <RightPanel />

        </div>
      </div>
    </div>
  );
}
