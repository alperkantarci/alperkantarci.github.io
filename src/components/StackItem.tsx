import type { StackItem } from 'src/constants/stack';

type Props = {
  item: StackItem;
};

const StackItem = ({ item }: Props) => {
  return (
    <a
      className={'flex flex-col items-center gap-y-4 text-large text-zinc-200 font-bold border-2 rounded-2xl p-8 border-teal-950'}
      href={item.link}
      target="_blank"
    >
      <img className={'rounded-xl md:rounded-2xl w-16 md:w-20'} src={item.img} alt="Test" loading={'lazy'} />
      <p className={'text-center'}>{item.name}</p>
    </a>
  );
};

export default StackItem;
