import { useState } from 'react';

//types imports
import { SidebarNavigation, UserNavigation } from '../utils/data';

//component imports
import { Navbar, Sidebar, Header, Main } from '../components';

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
          <div className='p-8 flex flex-col gap-8'>
            <Header />
            <Main />
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
