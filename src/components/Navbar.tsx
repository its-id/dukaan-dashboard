import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';

//types imports
import { NavbarProps } from '../utils/types';

//icon imports
import hamburgerIcon from '../assets/icons/hamburger.svg';
import searchIcon from '../assets/icons/search.svg';
import hornIcon from '../assets/icons/horn.svg';
import downArrowIcon from '../assets/icons/arrow-down.svg';
import helpOutlinedIcon from '../assets/icons/help.svg';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const Navbar = ({
  setSidebarOpen,
  UserNavigation: userNavigation,
}: NavbarProps) => {
  return (
    <div className='sticky top-0 z-10 flex-shrink-0 flex bg-white py-3 md:px-8 border-b border-[#D9D9D9]'>
      <button
        type='button'
        className='px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
        onClick={() => setSidebarOpen(true)}
      >
        <span className='sr-only'>Open sidebar</span>
        <img src={hamburgerIcon} className='h-6 w-6' aria-hidden='true' />
      </button>
      <div className='flex-1 px-4 flex md:gap-4 justify-between md:justify-start'>
        <div className='flex-1 flex items-center gap-4'>
          <p className='text-[#1A181E]'>Payments</p>
          <div className='flex items-center gap-1.5'>
            <img
              src={helpOutlinedIcon}
              className='w-3.5 h-3.5'
              alt='help-outlined'
            />
            <span className='text-xs text-[#4D4D4D]'>How it works</span>
          </div>
        </div>
        <div className='flex-1 flex'>
          <form className='w-full flex md:ml-0' action='#' method='GET'>
            <label htmlFor='search-field' className='sr-only'>
              Search for features, tutorials, etc.
            </label>
            <div className='relative w-full text-gray-400 focus-within:text-gray-600'>
              <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none'>
                <img src={searchIcon} className='h-4 w-4' aria-hidden='true' />
              </div>
              <input
                id='search-field'
                className='block bg-[#F2F2F2] w-full h-full pl-10 px-4 py-2 border-transparent rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm'
                placeholder='Search for features, tutorials, etc.'
                type='search'
                name='search'
              />
            </div>
          </form>
        </div>
        <div className='md:flex-1 flex items-center justify-end'>
          <button
            type='button'
            className='bg-[#e6e6e6] w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500'
          >
            <span className='sr-only'>View notifications</span>
            <img src={hornIcon} className='h-4 w-4' aria-hidden='true' />
          </button>

          {/* Profile dropdown */}
          <Menu as='div' className='ml-3 relative'>
            <Menu.Button className='w-10 h-10 bg-[#E6E6E6] flex items-center justify-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600'>
              <span className='sr-only'>Open user menu</span>
              <img className='h-4 w-4' src={downArrowIcon} alt='' />
            </Menu.Button>
            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
                {userNavigation.map((item) => (
                  <Menu.Item key={item.name}>
                    {({ active }) => (
                      <a
                        href={item.href}
                        className={classNames(
                          active ? 'bg-gray-100' : '',
                          'block px-4 py-2 text-sm text-gray-700'
                        )}
                      >
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
