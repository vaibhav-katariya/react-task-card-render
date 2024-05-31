import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productData } from "./data";

const CardDetails = () => {
  const { id } = useParams();
  const products = productData.find((item) => item.id === id);
  const [product, setProduct] = useState(products);
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(product.title);
  const [description, setDescription] = useState(product.description);

  const dataUpdateHandler = (e) => {
    e.preventDefault();
    const newProduct = { ...product, title, description };
    const productIndex = productData.findIndex((item) => item.id === id);
    productData[productIndex] = newProduct;
    setProduct(newProduct);
    setEditMode(false);
  };

  return (
    <div className="flex justify-center min-h-screen py-5 w-full bg-zinc-900">
      <div className="w-[80%] border-[1px] border-zinc-700 h-screen">
        <div className="h-[55%] p-5 flex justify-center">
          <img
            className="h-full w-fit  object-contain rounded-2xl"
            src={product.image}
            alt={id}
          />
        </div>
        <div className="flex justify-end px-10">
          <button
            onClick={() => setEditMode(true)}
            className="py-2 px-3 bg-blue-500 text-white rounded-2xl font-semibold"
          >
            UPDATE
          </button>
        </div>
        <div className="p-5 text-white">
          {editMode ? (
            <>
              <form onSubmit={dataUpdateHandler}>
                <div>
                  <input
                    className="text-zinc-300 px-2 py-3 bg-zinc-800 outline-none my-2 w-[60%] rounded-xl"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                <div>
                  <textarea
                    className="text-zinc-300 px-2 py-3 bg-zinc-800 h-[10] resize-none outline-none my-2 w-[60%] rounded-xl"
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="h-10 flex gap-3">
                  <button
                    onClick={() => setEditMode(false)}
                    className="py-2 px-3 bg-zinc-700 rounded-xl"
                  >
                    cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-3 bg-green-700 rounded-xl"
                  >
                    save
                  </button>
                </div>
              </form>
            </>
          ) : (
            <>
              <h1 className="text-2xl my-2">{product.title}</h1>
              <p className="my-2">{product.description}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
