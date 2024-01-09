import TableLayout from './Table/TableLayout';

const Main = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='text-xl font-medium'>Transactions | This Month</p>
      <TableLayout />
    </div>
  );
};

export default Main;
