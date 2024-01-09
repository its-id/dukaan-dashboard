import Cards from './Cards';
import Topbar from './Topbar';

//import data
import { HeaderCardsData } from '../../utils/data';

const Header = () => {
  return (
    <div className='flex flex-col gap-6 self-stretch text-[#1A181E]'>
      <Topbar />
      <Cards HeaderCardsData={HeaderCardsData}/>
    </div>
  );
};

export default Header;
