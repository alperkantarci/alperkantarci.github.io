import Product from "@components/setup/Product";
import products from "src/constants/products";
import stack from "src/constants/stack";
import { useState } from "preact/hooks";
import StackItem from "./StackItem";

const SetupPage = () => {
  const [category, setCategory] = useState("stack");
  const [_stack, setStack] = useState(stack);
  const [_products, setProducts] = useState(products);

  const filterItems = (category: string) => {
    const items = products.filter((i) =>
      category ? i.category === category : true
    );
    setCategory(category);
    setProducts(items);
  };

  return (
    <>
      <ul
        id="setup-filter"
        className="flex flex-wrap gap-y-4 text-base text-zinc-200 font-bold text-center mb-14"
      >
        <li className="mr-2">
          <a
            onClick={() => filterItems("stack")}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-800 hover:text-teal-200 select-none ${
              category === "stack" ? "bg-teal-800 border-teal-800" : ""
            }`}
          >
            Stack
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems("laptop")}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-800 hover:text-teal-200 select-none ${
              category === "laptop" ? "bg-teal-800 border-teal-800" : ""
            }`}
          >
            Laptop
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems("display")}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-800 hover:text-teal-200 select-none ${
              category === "display" ? "bg-teal-800 border-teal-800" : ""
            }`}
          >
            Display
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems("mouse-keyboard")}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-800 hover:text-teal-200 select-none ${
              category === "mouse-keyboard" ? "bg-teal-800 border-teal-800" : ""
            }`}
          >
            Mouse / Keyboard
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems("music")}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-800 hover:text-teal-200 select-none ${
              category === "music" ? "bg-teal-800 border-teal-800" : ""
            }`}
          >
            Music
          </a>
        </li>
        <li className="mr-2">
          <a
            onClick={() => filterItems("e-reader")}
            className={`cursor-pointer inline-block px-4 py-3 rounded-lg border-2 border-teal-800 hover:text-teal-200 select-none ${
              category === "e-reader" ? "bg-teal-800 border-teal-800" : ""
            }`}
          >
            E-reader
          </a>
        </li>
      </ul>

      {category === "stack" ? (
        <div className="grid grid-cols-1 gap-y-8 gap-x-5 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
          {_stack.map((stackItem) => (
            <StackItem key={stackItem.name} item={stackItem} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-y-8 gap-x-5 md:grid-cols-2">
          {_products.map((product) => (
            <Product key={product.name} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default SetupPage;
