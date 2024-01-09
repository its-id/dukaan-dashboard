import TableMain from './TableMain';
import TableOptions from './TableOptions';
import TableNavigation from './TableNavigation';

//import data
import { TableData } from '../../../utils/data';

const TableLayout = () => {
  return (
    <div className='flex flex-col gap-3 rounded-lg p-3 pb-6 bg-white shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]'>
      <TableOptions />
      <TableMain TableData={TableData} />
      <TableNavigation />
    </div>
  );
};

export default TableLayout;
