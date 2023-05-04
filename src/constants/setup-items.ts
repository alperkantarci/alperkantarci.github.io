type SetupItem = {
  name: string;
  img: string;
  category: string;
  link?: string;
};

const setupItems: Array<SetupItem> = [
  {
    name: 'Lenovo Legion 5 15ARH05H',
    img: '/images/setup/lenovo-legion-5-min.jpg',
    category: 'laptop',
  },
  {
    name: 'Dell Alienware AW2521HFLA',
    img: '/images/setup/dell-alienware-aw2521hfla-min.jpg',
    category: 'display',
  },
  {
    name: 'Acer ED270R',
    img: '/images/setup/acer-ed270r-min.jpg',
    category: 'display',
  },
  {
    name: 'Logitech G Pro X Superlight',
    img: '/images/setup/logitech-g-pro-x-light-min.jpg',
    category: 'mouse-keyboard',
  },
  {
    name: 'Rapoo M300 Silent',
    img: '/images/setup/rapoo-m300-silent-min.jpg',
    category: 'mouse-keyboard',
  },
  {
    name: 'Corsair MM250 Champion Series XL',
    img: '/images/setup/corsair-mm250-xl-min.jpg',
    category: 'mouse-keyboard',
  },
  {
    name: 'HyperX Alloy Origins Core',
    img: '/images/setup/hyperx-alloy-origins-core-min.jpg',
    category: 'mouse-keyboard',
  },
  {
    name: 'Focusrite Scarlett Solo 3rd Gen',
    img: '/images/setup/focusrite-scarlett-solo-3rd-gen-min.jpg',
    category: 'music',
  },
  {
    name: 'Beyerdynamic DT 770 Pro 80 ohm',
    img: '/images/setup/beyerdynamic-dt770-pro-80ohm-min.jpg',
    category: 'music',
  },
  {
    name: 'Rode NT1-A',
    img: '/images/setup/rode-nt1-a-min.jpg',
    category: 'music',
  },
  {
    name: 'Line 6 Mobile Keys 49',
    img: '/images/setup/line-6-mobile-keys-49-min.jpg',
    category: 'music',
  },
  {
    name: 'Amazon Kindle Paperwhite 4',
    img: '/images/setup/amazon-kindle-paperwhite-4-min.jpg',
    category: 'e-reader',
  },
];

export default setupItems;
export type { SetupItem };
