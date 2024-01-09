import chevronLeftIcon from '../../../assets/icons/chevron-left.svg';
import chevronRightIcon from '../../../assets/icons/chevron-right.svg';
import { useState } from 'react';

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}

const TableNavigation = () => {
  const [current, setCurrent] = useState(2);

  return (
    <nav className='mt-3 mx-auto flex items-center justify-between gap-6'>
      <button className='flex-1 flex gap-1.5 justify-center items-center py-1.5 px-3 pr-4 bg-white border border-[#D9D9D9] rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E2640]'>
        <img src={chevronLeftIcon} className='h-4.5 w-4.5' aria-hidden='true' />
        <span className='text-sm text-[#4D4D4D] font-medium'>Previous</span>
      </button>
      <div className='hidden md:flex md:gap-2 md:justify-center md:items-center'>
        {Array(10)
          .fill(0)
          .map((_, index) =>
            index === 1 ? (
              <span key={index}>...</span>
            ) : (
              <button
                key={index}
                className={classNames(
                  index == current
                    ? 'text-white bg-[#146EB4] hover:bg-sky-700'
                    : 'text-[#4D4D4D] hover:text-[#146EB4]',
                  'w-7 h-7 py-1.5 px-2 rounded gap-3 inline-flex items-center justify-center text-sm font-medium cursor-pointer'
                )}
                onClick={() => setCurrent(index)}
                aria-current='page'
              >
                {index == 0 ? index + 1 : index + 8}
              </button>
            )
          )}
      </div>
      <button className='flex-1 flex gap-1.5 justify-center items-center py-1.5 pl-2 bg-white border border-[#D9D9D9] rounded hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E2640]'>
        <span className='text-sm text-[#4D4D4D] font-medium'>Next</span>
        <img
          src={chevronRightIcon}
          className='h-4.5 w-4.5'
          aria-hidden='true'
        />
      </button>
    </nav>
  );
};

export default TableNavigation;
