import HardwareItem from '@components/HardwareItem';
import setupItems from 'src/constants/setup-items';
import { useState } from 'preact/hooks';

const SetupPage = () => {
  const [category, setCategory] = useState('');
  const [_setupItems, setSetupItems] = useState(setupItems);

  const filterItems = (category: string) => {
    const items = setupItems.filter((i) => (category ? i.category === category : true));
    setCategory(category);
    setSetupItems(items);
  };

  return (
    <>
      <ul id="setup-filter" className="flex flex-wrap gap-y-4 text-base text-zinc-200 font-bold text-center dark:text-gray-400 mb-14">
        <li className="mr-2">
          <a
            onClick={() => filterItems('')}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-950 hover:text-teal-200 ${
              !category ? 'bg-teal-800 border-teal-800' : ''
            }`}
          >
            All
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems('laptop')}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-950 hover:text-teal-200 ${
              category === 'laptop' ? 'bg-teal-800 border-teal-800' : ''
            }`}
          >
            Laptop
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems('display')}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-950 hover:text-teal-200 ${
              category === 'display' ? 'bg-teal-800 border-teal-800' : ''
            }`}
          >
            Display
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems('mouse-keyboard')}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-950 hover:text-teal-200 ${
              category === 'mouse-keyboard' ? 'bg-teal-800 border-teal-800' : ''
            }`}
          >
            Mouse / Keyboard
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems('music')}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-950 hover:text-teal-200 ${
              category === 'music' ? 'bg-teal-800 border-teal-800' : ''
            }`}
          >
            Music
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems('e-reader')}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-950 hover:text-teal-200 ${
              category === 'e-reader' ? 'bg-teal-800 border-teal-800' : ''
            }`}
          >
            E-reader
          </a>
        </li>
      </ul>

      <div className="grid grid-cols-1 gap-y-8 gap-x-5 md:grid-cols-2">
        {_setupItems.map((setupItem) => (
          <HardwareItem key={setupItem.name} setupItem={setupItem} />
        ))}
      </div>
    </>
  );
};

export default SetupPage;
