const Topbar = () => {
  return (
    <div className='flex justify-between items-center self-stretch'>
      <p className='text-xl font-medium'>Overview</p>
      <select
        id='month'
        name='month'
        className='mt-1 block w-36 pl-3 pr-5 py-2 text-base border-[#D9D9D9] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E2640] focus:border-[#1E2640] sm:text-sm rounded'
        defaultValue='Last Month'
      >
        <option>Last Month</option>
        <option>Current Month</option>
        <option>Previous Quarter</option>
      </select>
    </div>
  );
};

export default Topbar;
