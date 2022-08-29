import React, { useEffect, useState } from "react";
import { url } from "../Constants";
import HPCard from "../HomeProductCard/HPCard";

const HomeProducts = () => {
  const [topProd, setTopProd] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTopProd(data.slice(0, 3));
      })
      .catch((e) => console.log(e));
  }, []);
  {
    return topProd.map((prod) => {
      return (
        <div key={prod.id}>
          <HPCard
            id={prod.id}
            img={prod.img}
            title={prod.title}
            price={prod.price}
          />
        </div>
      );
    });
  }
};

export default HomeProducts;
