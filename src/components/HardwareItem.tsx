import type { SetupItem } from 'src/constants/setup-items';

type Props = {
  setupItem: SetupItem;
};

const HardwareItem = ({ setupItem }: Props) => {
  return (
    <a className="flex flex-col items-center gap-4" href={setupItem.link} target="_blank">
      <img
        src={setupItem.img}
        alt={setupItem?.name}
        width={1920}
        height={1280}
        loading={'lazy'}
        className="rounded-2xl w-full h-72 border-2 object-cover border-teal-950"
      />
      <p className="font-bold text-xl">{setupItem?.name}</p>
    </a>
  );
};

export default HardwareItem;
