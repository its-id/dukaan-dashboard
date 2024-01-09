import TableLayout from './Table/TableLayout';

const Main = () => {
  return (
    <div className='flex flex-col gap-5'>
      <p className='text-xl font-medium text-[#1A181E]'>
        Transactions | This Month
      </p>
      <TableLayout />
    </div>
  );
};

export default Main;
