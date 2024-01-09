import { Menu } from '@headlessui/react';

//icons import
import searchIcon from '../../../assets/icons/search.svg';
import downUpArrowIcon from '../../../assets/icons/down-up-arrows.svg';
import downloadIcon from '../../../assets/icons/download.svg';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const TableOptions = () => {
  return (
    <div className='flex justify-between items-center self-stretch'>
      <div className='flex-1 relative w-full text-gray-400 focus-within:text-gray-600'>
        <div className='absolute inset-y-0 left-4 flex items-center pointer-events-none'>
          <img
            src={searchIcon}
            className='h-3 md:h-4 w-3 md:w-4'
            aria-hidden='true'
          />
        </div>
        <input
          id='search-field'
          className='block bg-white w-[60] h-full pl-8 md:pl-10 px-2 md:px-4 md:py-2.5 text-sm md:text-base border-[#D9D9D9] rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent'
          placeholder='Search by order ID..'
          type='search'
          name='search'
        />
      </div>
      <div className='flex-1 flex justify-end items-center gap-3'>
        <Menu as='div' className='relative'>
          <Menu.Button className='bg-white border border-[#D9D9D9] rounded-md px-3 py-1.5 flex gap-1.5 items-center text-[#4D4D4D] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E2640]'>
            Sort
            <img src={downUpArrowIcon} className='h-4 w-4' aria-hidden='true' />
          </Menu.Button>
          <Menu.Items className='origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='py-1'>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Name
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Date modified
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href='#'
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                  >
                    Date created
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
        <button className='w-9 h-9 self-stretch bg-white border border-[#D9D9D9] rounded-md flex justify-center items-center text-[#4D4D4D] hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E2640]'>
          <img src={downloadIcon} className='h-5 w-5' aria-hidden='true' />
        </button>
      </div>
    </div>
  );
};

export default TableOptions;
