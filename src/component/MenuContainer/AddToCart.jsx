// import React, { useEffect, useState } from "react";

const AddToCart = ({ cart, handleRemoveCart, total }) => {
  console.log(cart);
  return (
    <div className="col-span-1 rounded-xl p-2.5 border border-amber-300">
      <h1 className=" text-center border-b border-gray-600/40 pb-4">
        <span className="p-1 font-mooli w-full block rounded-2xl font-semibold">
          Cart
        </span>
      </h1>

      <div className="mt-3 space-y-2.5">
        {cart.map((food, index) => (
          <div
            key={index}
            className="relative flex gap-3 bg-white border border-gray-200 shadow-md rounded-lg p-1 pr-5"
          >
            <div>
              <img
                className="w-12 h-full bg-cover rounded-lg"
                src={food.foodImg}
                alt=""
              />
            </div>
            <div className="overflow-hidden">
              <h1 className="font-mooli leading-4 font-semibold text-[12px] ">
                {food.title}
              </h1>
              <p className="text-[#D69620] font-semibold">
                <span>{food.quantity}</span> x <span>$ {food.price} BDT</span>
              </p>
            </div>

            <span
              onClick={() => handleRemoveCart(food.id)}
              className=" bg-red-500 text-white absolute -top-1 -right-1 p-2 rounded-full size-6 flex items-center justify-center cursor-pointer"
            >
              <i className="fa-solid fa-xmark"></i>
            </span>
          </div>
        ))}
      </div>

      <h1 className="p-3 mt-4 bg-amber-400 rounded-md">
        <span className="p-1 font-mooli w-full block rounded-2xl font-semibold text-white">
          Total : $ {total} BDT
        </span>
      </h1>
    </div>
  );
};

export default AddToCart;
