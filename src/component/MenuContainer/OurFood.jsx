import React from "react";

const OurFood = ({ food, handleAddToCart, showDetails }) => {
  let finalFoods = food.foods || [];

  return (
    <div className="col-span-2 p-2.5 ">
      <h1 className=" text-center border-b border-gray-600/40 pb-4">
        <span className="p-1 font-mooli w-full block rounded-2xl font-semibold">
          Our Foods
        </span>
      </h1>

      <div className="space-y-2.5 mt-5">
        {finalFoods.map((food, index) => (
          <div
            key={index}
            className="flex gap-5 shadow p-5 bg-white border border-gray-200 rounded-md"
          >
            <div className="w-52">
              <img
                onClick={() => showDetails(food.id)}
                className="w-full h-36 rounded-xl object-fit"
                src={food.foodImg}
                alt=""
              />
            </div>
            <div className="w-full">
              <h1 className="font-medium font-mooli text-xl">{food.title}</h1>
              <p className="bg-[#FCB700] rounded-xl text-amber-800 w-fit px-3">
                {food.category}
              </p>
              <div className="flex items-center justify-between mt-3">
                <span className="max-w-[75%] w-full bg-gray-300 h-[2px] block"></span>
                <span className="ml-3 text-[#D18700] font-semibold font-mooli whitespace-nowrap">
                  $ {food.price} BDT
                </span>
              </div>
              <button
                onClick={() => handleAddToCart(food)}
                className="bg-[#FCB700] text-[#664200] py-2 px-3 rounded-md hover:bg-[#e7aa01] text-sm font-mooli font-medium mt-3 cursor-pointer"
              >
                <i className="fa-solid fa-cart-plus"></i> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurFood;
