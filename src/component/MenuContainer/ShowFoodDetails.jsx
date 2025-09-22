import React from "react";

const ShowFoodDetails = ({ foodDetails }) => {
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h1>{foodDetails?.details?.title}</h1>
          <img className="w-full" src={foodDetails?.details?.foodImg} alt="" />
          <a
            href={foodDetails?.details?.video}
            target="_blank"
            className="btn btn-primary mt-3"
          >
            Go to Youtube
          </a>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default ShowFoodDetails;
