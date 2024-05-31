import React from "react";
import { Link } from "react-router-dom";

const Card = ({ title, description, image, id, price }) => {
  return (
    <div className="h-[20rem] w-[25rem] border-[1px] border-zinc-700 rounded-xl my-2">
      <Link to={`/card/${id}`}>
        <div className="h-[50%] w-full p-2 ">
          <img
            className="h-full w-full overflow-hidden rounded-2xl object-contain"
            src={image}
            alt={id}
          />
        </div>
      </Link>
      <div className="text-white p-3">
        <h1 className="text-xl my-3">{title}</h1>
        <p className="truncate my-3">{description}</p>
        <p className="my-3">{price}</p>
      </div>
    </div>
  );
};

export default Card;
