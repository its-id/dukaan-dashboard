import { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';

//types imports
import { SidebarProps } from '../utils/types';

//icon imports
import crossIcon from '../assets/icons/cross.svg';
import walletIcon from '../assets/icons/wallet.svg';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Sidebar = ({
  SidebarNavigation: userNavigation,
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) => {
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
            <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-[#1E2640]'>
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
              <div className='flex-shrink-0 flex items-center px-4'>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                  alt='Workflow'
                />
              </div>
              <div className='mt-5 flex-1 h-0 overflow-y-auto'>
                <nav className='px-2 space-y-1'>
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? 'bg-gray-900 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'group flex items-center px-2 py-2 text-base font-medium rounded-md'
                      )}
                    >
                      <img
                        src={item.icon}
                        className={classNames(
                          item.current
                            ? 'text-gray-300'
                            : 'text-gray-400 group-hover:text-gray-300',
                          'mr-4 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden='true'
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
              <div className='flex-shrink-0 flex bg-gray-700 p-4'>
                <a href='#' className='flex-shrink-0 group block'>
                  <div className='flex items-center'>
                    <div>
                      <img
                        className='inline-block h-10 w-10 rounded-full'
                        src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                        alt=''
                      />
                    </div>
                    <div className='ml-3'>
                      <p className='text-base font-medium text-white'>
                        Tom Cook
                      </p>
                      <p className='text-sm font-medium text-gray-400 group-hover:text-gray-300'>
                        View profile
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
      <div className='hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0'>
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className='flex-1 flex flex-col min-h-0 bg-[#1E2640] py-4 px-2.5'>
          <div className='flex items-center h-16 flex-shrink-0 px-4 bg-gray-900'>
            <img
              className='h-8 w-auto'
              src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
              alt='Workflow'
            />
          </div>
          <div className='flex-1 flex flex-col overflow-y-auto'>
            <nav className='flex-1 px-2 py-4 space-y-1'>
              {userNavigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <img
                    src={item.icon}
                    className={classNames(
                      item.current
                        ? 'text-gray-300'
                        : 'text-gray-400 group-hover:text-gray-300',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden='true'
                  />
                  {item.name}
                </a>
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
                  <p className='text-[13px] font-medium'>
                    Available credits
                  </p>
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
