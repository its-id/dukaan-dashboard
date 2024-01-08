import { Link } from 'react-router-dom';

const Page404 = () => {
  return (
    <div className='min-h-full pt-16 pb-12 flex flex-col '>
      <main className='flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-16'>
          <div className='text-center flex flex-col gap-10'>
            <p className='text-sm font-semibold text-[#146EB4] uppercase tracking-wide'>
              404 error
            </p>
            <div>
              <h1 className='mt-2 text-4xl font-extrabold text-[#1E2640]-200 tracking-tight sm:text-5xl'>
                Page not found.
              </h1>
              <p className='mt-4 text-base text-[#1E2640]-400'>
                Sorry, couldn’t find the page you’re looking for.
              </p>
            </div>
            <div className='mt-6'>
              <Link
                to='/'
                className='text-base font-medium text-[#146EB4]/90 hover:text-[#146EB4]'
              >
                Go back home<span aria-hidden='true'> &rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      {/* <footer className='flex-shrink-0 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8'>
        <nav className='flex justify-center space-x-4'>
          <Link
            to='https://twitter.com/its_ikD'
            className='text-sm font-medium text-gray-400 hover:text-gray-600'
          >
            <img src={twitterIcon} alt='twitter' className='w-6 h-6' />
          </Link>
          <Link
            to='https://github.com/its-id/TODO-MERN-APP'
            className='text-sm font-medium text-gray-400 hover:text-gray-600'
          >
            <img src={githubIcon} alt='github' className='w-6 h-6' />
          </Link>
        </nav>
      </footer> */}
    </div>
  );
};

export default Page404;
