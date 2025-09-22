import React, { use } from "react";

const Category = ({ handleCategory, fetcher }) => {
  const categories2 = use(fetcher);
  const finalCategories = categories2.categories;

  return (
    <div className="col-span-1  rounded-xl mt-1">
      <div className="sticky top-0 p-2.5 bg-amber-400">
        <h1 className=" text-center border-b border-gray-600/40 pb-4">
          <span className="p-1 bg-white font-mooli w-full block rounded-2xl font-semibold">
            Categories
          </span>
        </h1>
        <ul className="mt-3 space-y-2.5 max-h-[calc(100vh-50px)]  overflow-y-auto">
          {finalCategories.map((food, index) => (
            <li
              onClick={() => handleCategory(food.id)}
              key={index}
              className={`category category-${food.id} bg-white text-gray-800 p-1 rounded-md flex gap-2 items-center cursor-pointer`}
            >
              <img className="w-16" src={food.categoryImg} alt="" />
              <h2 className="font-semibold">{food.categoryName}</h2>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Category;
