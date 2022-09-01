import React, { useContext, useState } from "react";
import "./HPCard.css";
import Button from "react-bootstrap/Button";
import toast from "react-hot-toast";
import { ContextDrawer } from "../../context/DrawerContext";
import { CartContext } from "../../context/Cartcontext";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, FreeMode } from "swiper";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Text } from "@nextui-org/react";

const HPCard = ({ id, title, img, price, description }) => {
  const { cart, setCart } = useContext(CartContext);
  const { setOpen } = useContext(ContextDrawer);
  const addProduct = () => {
    const prodExist = cart.find((e) => e.id === id);

    const Toast = () => {
      toast.success("Added to cart", {
        position: "top-center",
      });
    };

    if (prodExist) {
      setCart(
        cart.map((e) =>
          e.id === id ? { ...prodExist, qty: prodExist.qty + 1 } : e
        )
      );
      //Toast

      Toast();
    } else {
      setCart([
        ...cart,
        {
          id: id,
          title: title,
          description: description,
          price: price,
          img: img,
          qty: 1,
        },
      ]);
      //Toast
      Toast();
    }
  };

  const itemPrice = (price) => {
    return "$" + price.toFixed(2);
  };

  //Swiper
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="swiper-container">
      <div className="productSwiper">
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          loop={true}
          pagination={{ clickable: true }}
          // navigation
          slidesPerView={1}
          className="mySwiper2"
        >
          <SwiperSlide>
            <img src={img} alt="a slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="a slide2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="a slide3" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          style={{ maxWidth: "20rem" }}
          onSwiper={setThumbsSwiper}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img} alt="a slide1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="a slide2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img} alt="a slide3" />
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="product-details">
        <p className="product-title">
          <span className="product-title--name">{title}</span>
        </p>
        <p className="product-title--description">{description}</p>
        <p className="product-price">{itemPrice(price)}</p>
        <div className="product-btn">
          <Button className="addToCartBtn" onClick={addProduct}>
            ADD TO CART
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HPCard;
