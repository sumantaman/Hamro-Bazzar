import React, { useState } from "react";
import "./SingleProduct.css";
import QuantityInput from './QuantityInput';
const SingleProductPage = () => {
  const product = {
    id: 1,
    title: "Product Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime aliquid rerum a? Fugiat soluta facilis deleniti voluptatibus ab architecto dolores a, vero, beatae veniam error doloribus quia laudantium? Error fuga consequuntur quia accusantium? Consequatur modi laboriosam saepe culpa, ab atque.",
    price: 9.99,
    images: [
      "https://marvel-b1-cdn.bc0a.com/f00000000209071/www.si-analytics.com/Image%20Library/sample-images/Placeholder-500x500.png",
      "https://marvel-b1-cdn.bc0a.com/f00000000209071/www.si-analytics.com/Image%20Library/sample-images/Placeholder-500x500.png",
      "https://marvel-b1-cdn.bc0a.com/f00000000209071/www.si-analytics.com/Image%20Library/sample-images/Placeholder-500x500.png",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRihQ19r4EFWk3grEF5SmTXfYjvhABUYOrTw&s",
    ],
    stock: 10,
  };

  const [selectedImage, setSelectedImage] = useState(0);
  return (
    <section className="align_center single_product">
      <div className="align_center">
        <div className="single_product_thumnails">
          {
            product.images.map((image, index)=>(
                <img src={image} alt={product.title} onClick={()=> setSelectedImage(index)} className={
                    selectedImage === index ? "selected_image": ""
                } />
            ))
          }
        </div>
        <img
          src={product.images[selectedImage]}
          alt={product.title}
          className="single_product_display"
        />
      </div>
      <div className="single_product_details">
        <h1 className="single_product_title">{product.title}</h1>
        <p className="single_product_decription">{product.description}</p>
        <p className="single_product_price">${product.price.toFixed(2)}</p>
        <h2 className="quantity_title">
            Quantity:
        </h2>
        <div className="align_center quantity_input">
            <QuantityInput />
        </div>
        <button className="search_button add_cart">Add to Cart</button>
      </div>
    </section>
  );
};

export default SingleProductPage;
