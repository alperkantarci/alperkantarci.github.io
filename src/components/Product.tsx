import type { Product } from 'src/constants/products';

type Props = {
  product: Product;
};

const HardwareItem = ({ product }: Props) => {
  return (
    <a className="flex flex-col items-center gap-4 text-zinc-200" href={product.link} target="_blank">
      <img
        src={product.img}
        alt={product?.name}
        width={1920}
        height={1280}
        loading={'lazy'}
        className="rounded-2xl w-full h-72 border-2 object-cover border-teal-950"
      />
      <p className="font-bold text-xl">{product?.name}</p>
    </a>
  );
};

export default HardwareItem;
