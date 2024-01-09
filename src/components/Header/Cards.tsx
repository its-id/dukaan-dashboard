import { HeaderCardProps } from '../../utils/types';

const Cards = ({ HeaderCardsData: data }: { HeaderCardsData: HeaderCardProps[] }) => {
  return (
    <div className='flex flex-col md:flex-row gap-4 md:gap-5 self-stretch'>
      {data.map((card: HeaderCardProps) => (
        <div className='flex flex-col gap-2 flex-1 p-3 md:p-5 bg-white rounded-lg shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)]'>
          <p className='text-sm md:text-base text-[#4D4D4D]'>{card.title}</p>
          <p className='text-xl md:text-3xl font-medium text-[#1A181E]'>{card.value}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
