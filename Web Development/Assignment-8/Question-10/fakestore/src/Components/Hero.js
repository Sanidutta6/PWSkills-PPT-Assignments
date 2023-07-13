import React, { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const Hero = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then(function (response) {
        // handle success
        setProducts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div className="bg-[#BDBFCE] p-8 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2">
      {products &&
        Array.from(products).map((product) => {
           return <Card
            img={product.image}
            title={product.title}
            price={product.price}
          />;
        })}
    </div>
  );
};

export default Hero;
