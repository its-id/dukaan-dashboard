import { useState } from 'react';

//types imports
import { SidebarNavigation, UserNavigation } from '../utils/data';

//component imports
import { Navbar, Sidebar } from '../components';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        SidebarNavigation={SidebarNavigation}
      />
      <div className='md:pl-56 flex flex-col'>
        <Navbar
          setSidebarOpen={setSidebarOpen}
          UserNavigation={UserNavigation}
        />
        <main className='flex-1'>
          <div className='py-6'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
              <h1 className='text-2xl font-semibold text-gray-900'>
                Dashboard
              </h1>
            </div>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'></div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
