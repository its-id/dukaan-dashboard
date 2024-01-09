import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';

//types imports
import { SidebarProps } from '../utils/types';

//icon & images imports
import downArrowIcon from '../assets/icons/down-chevron.svg';
import crossIcon from '../assets/icons/cross.svg';
import walletIcon from '../assets/icons/wallet.svg';
import logoImage from '../assets/images/logo.svg';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = ({
  SidebarNavigation: sidebarItems,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) => {
  const [current, setCurrent] = useState(0);

  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as='div'
          className='fixed inset-0 flex z-40 md:hidden'
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='relative flex-1 flex flex-col max-w-xs w-full p-5 bg-[#1E2640]'>
              <Transition.Child
                as={Fragment}
                enter='ease-in-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in-out duration-300'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <div className='absolute top-0 right-0 -mr-12 pt-2'>
                  <button
                    type='button'
                    className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className='sr-only'>Close sidebar</span>
                    <img
                      src={crossIcon}
                      className='h-6 w-6 text-white'
                      aria-hidden='true'
                    />
                  </button>
                </div>
              </Transition.Child>
              <div className='flex-1 flex flex-col min-h-0 gap-6'>
                <div className='flex items-center gap-3'>
                  <img
                    className='h-10 w-10 rounded'
                    src={logoImage}
                    alt='logo'
                  />
                  <div className='flex flex-col justify-center gap-1 flex-1'>
                    <span className='text-sm font-md text-white'>Nishyan</span>
                    <Link
                      to='#'
                      className='items-stretch text-xs text-white/80 underline'
                    >
                      Visit Store
                    </Link>
                  </div>
                  <img
                    src={downArrowIcon}
                    className='w-3 h-3 cursor-pointer'
                    alt='down-arrow'
                  />
                </div>
                <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                  <nav className='space-y-1'>
                    {sidebarItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.id == current
                            ? 'bg-white/10 text-white'
                            : 'text-white/80 hover:text-white',
                          'group flex items-center py-2 px-4 gap-3 rounded font-medium text-white'
                        )}
                        onClick={() => setCurrent(item.id)}
                      >
                        <img
                          src={item.icon}
                          className={classNames(
                            item.id == current
                              ? 'text-white'
                              : 'text-white/80 hover:text-white',
                            'h-6 w-6 opacity-80'
                          )}
                          aria-hidden='true'
                        />
                        {item.name}
                      </Link>
                    ))}
                  </nav>
                </div>
              </div>
              <div className='flex-shrink-0 flex bg-[#353C53]/90 py-1 px-3 rounded'>
                <a href='#' className='flex-shrink-0 w-full group block'>
                  <div className='flex items-center gap-3'>
                    <div className='rounded bg-white/10 p-1.5'>
                      <img
                        className='inline-block h-6 w-6'
                        src={walletIcon}
                        alt=''
                      />
                    </div>
                    <div className='flex flex-col gap-0.5 text-white'>
                      <p className='text-[13px] font-medium'>
                        Available credits
                      </p>
                      <p className='font-medium group-hover:text-gray-50'>
                        222.10
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </Transition.Child>
          <div className='flex-shrink-0 w-14' aria-hidden='true'>
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className='hidden md:flex md:w-[224px] md:flex-col md:fixed md:inset-y-0 bg-[#1E2640] py-4 px-2.5'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex-1 flex flex-col min-h-0 gap-6'>
          <div className='flex items-center gap-3'>
            <img className='h-10 w-10 rounded' src={logoImage} alt='logo' />
            <div className='flex flex-col justify-center gap-1 flex-1'>
              <span className='text-[15px] leading-[22px] font-md text-white'>
                Nishyan
              </span>
              <Link
                to='#'
                className='items-stretch text-[13px] text-white/80 leading-4 underline'
              >
                Visit Store
              </Link>
            </div>
            <img
              src={downArrowIcon}
              className='w-4 h-4 cursor-pointer'
              alt='down-arrow'
            />
          </div>
          <div className='flex-1 flex flex-col overflow-y-auto'>
            <nav className='flex-1 space-y-1'>
              {sidebarItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.id === current
                      ? 'bg-white/10 text-white'
                      : 'text-white/80 hover:text-white',
                    'group flex items-center py-2 px-4 gap-3 rounded font-medium text-white'
                  )}
                  onClick={() => setCurrent(item.id)}
                >
                  <img
                    src={item.icon}
                    className={classNames(
                      item.id === current
                        ? 'text-white'
                        : 'text-white/80 hover:text-white',
                      'h-6 w-6 opacity-80'
                    )}
                    aria-hidden='true'
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className='flex-shrink-0 flex bg-[#353C53]/90 py-1.5 px-3 rounded'>
            <a href='#' className='flex-shrink-0 w-full group block'>
              <div className='flex items-center gap-3'>
                <div className='rounded bg-white/10 p-1.5'>
                  <img
                    className='inline-block h-6 w-6'
                    src={walletIcon}
                    alt=''
                  />
                </div>
                <div className='flex flex-col gap-0.5 text-white'>
                  <p className='text-[13px] font-medium'>Available credits</p>
                  <p className='font-medium group-hover:text-gray-50'>222.10</p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
