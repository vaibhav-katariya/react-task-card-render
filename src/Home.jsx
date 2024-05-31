import React, { useState } from "react";
import { productData } from "./data";
import Card from "./Card";

const Home = () => {
  const [data, setData] = useState(productData);
  return (
    <div className="min-h-screen w-full flex justify-center flex-wrap gap-3 bg-zinc-900">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          image={item.image}
          id={item.id}
        />
      ))}
    </div>
  );
};

export default Home;
