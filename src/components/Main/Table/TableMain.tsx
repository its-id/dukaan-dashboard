// types imports
import { TableElement } from '../../../utils/types';

//icon imports
import downArrowIcon from '../../../assets/icons/arrow-down.svg';
import helpIcon from '../../../assets/icons/help.svg';

const TableMain = ({ TableData: data }: { TableData: TableElement[] }) => {
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
          <div className='overflow-hidden border-b border-gray-200 rounded-r'>
            <table className='min-w-full'>
              <thead className='bg-[#F2F2F2]'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-2.5 rounded-l text-left text-sm font-medium text-[#4D4D4D] tracking-wider'
                  >
                    Order ID
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-2.5 text-left flex items-center gap-2 text-sm font-medium text-[#4D4D4D] tracking-wider'
                  >
                    Order date{' '}
                    <img
                      src={downArrowIcon}
                      className='w-2 h-2 cursor-pointer'
                      alt='down-arrow'
                    />
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-2.5 text-left text-sm font-medium text-[#4D4D4D] tracking-wider'
                  >
                    Order amount
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-2.5 flex justify-end items-center gap-2 text-sm font-medium text-[#4D4D4D] tracking-wider rounded-r'
                  >
                    <span>Transaction fees</span>
                    <img
                      src={helpIcon}
                      className='w-3.5 h-3.5 cursor-pointer'
                      alt='down-arrow'
                    />
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {data.map((item: any, idx) => (
                  <tr key={idx}>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-[#146EB4] hover:underline cursor-pointer'>
                      {item.id}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-[#1A181E]'>
                      {item.order_date}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-[#1A181E]'>
                      {item.order_amount}
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap flex justify-end items-center text-sm text-[#1A181E]'>
                      {item.fees}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableMain;
