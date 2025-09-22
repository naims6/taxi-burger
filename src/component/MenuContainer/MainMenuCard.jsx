import React, { Suspense, useEffect, useState } from "react";
import Category from "./Category";
import OurFood from "./OurFood";
import AddToCart from "./AddToCart";
import ShowFoodDetails from "./ShowFoodDetails";
import Loading from "../Loading";

const fetcher = (async () => {
  const url = "https://taxi-kitchen-api.vercel.app/api/v1/categories";
  let res = await fetch(url);
  let data = await res.json();
  return data;
})();

const MenuCard = () => {
  const [food, setFood] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const [foodDetails, setFoodDetails] = useState([]);

  const handleCategory = async (id) => {
    const url = `https://taxi-kitchen-api.vercel.app/api/v1/categories/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setFood(data);

    // adding different background on which category is selected
    const selectedCategory = document.querySelector(`.category-${id}`);
    const allCategory = document.querySelectorAll(".category");
    // remove all bg
    allCategory.forEach((item) => {
      item.classList.remove("bg-black", "text-gray-200");
      item.classList.add("bg-white", "text-gray-800");
    });
    // add backgound which one is selected
    selectedCategory.classList.remove("bg-white", "text-gray-800");
    selectedCategory.classList.add("bg-black", "text-gray-200");
  };

  const handleAddToCart = (food) => {
    const a = cart.findIndex((item) => item.id === food.id);

    if (a < 0) {
      // if not matched
      food.quantity = 1;
      food.totalPrice = food.price;
      const myCart = [food, ...cart];
      setCart(myCart);
      localStorage.setItem("Cart", JSON.stringify(myCart));
    } else {
      // if matched
      food.quantity += 1;
      food.totalPrice = food.price * food.quantity;
      const updatedCart = [...cart];
      setCart(updatedCart);
      localStorage.setItem("Cart", JSON.stringify(updatedCart));
    }
  };

  // load data after load the page
  useEffect(() => {
    const oldCart = JSON.parse(localStorage.getItem("Cart")) || [];
    console.log(oldCart);
    setCart(oldCart);
  }, []);

  // Show total price in add to cart
  useEffect(() => {
    const showTotal = cart.reduce((acc, item) => {
      acc += item.totalPrice;
      return acc;
    }, 0);
    setTotal(showTotal);
  }, [cart]);
  // Load Default data first
  useEffect(() => {
    handleCategory(11);
  }, []);

  const handleRemoveCart = (id) => {
    const availableCart = cart.filter((item) => item.id !== id);
    setCart(availableCart);
    localStorage.setItem("Cart", JSON.stringify(availableCart));
  };

  const showDetails = async (id) => {
    document.getElementById("my_modal_5").showModal();
    const url = `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setFoodDetails(data);
  };

  return (
    <>
      <div className="w-full px-20 grid grid-cols-4 gap-5 mb-10">
        <Suspense fallback={<Loading />}>
          <Category fetcher={fetcher} handleCategory={handleCategory} />
        </Suspense>
        <Suspense fallback={<Loading />}>
          <OurFood
            food={food}
            handleAddToCart={handleAddToCart}
            showDetails={showDetails}
          />
        </Suspense>
        <AddToCart
          total={total}
          cart={cart}
          handleRemoveCart={handleRemoveCart}
        />
      </div>
      <ShowFoodDetails foodDetails={foodDetails}></ShowFoodDetails>
    </>
  );
};

export default MenuCard;
