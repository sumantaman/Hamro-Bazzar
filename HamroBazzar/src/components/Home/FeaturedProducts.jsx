import React from "react";
import "./FeaturedProducts.css";


import ProductCard from "./../Products/ProductCard";
import useData from "../../hooks/useData";
import ProductCardSkeleton from "../Products/ProductCardSkeleton";
const FeaturedProducts = () => {
  const { data, error, isLoading } = useData("/products/featured");
  const skeletons = [1, 2, 3];
  console.log(data);
  return (
    <section className="featured_products">
      <h2>Featured Products</h2>
      <div className="align_center featured_product_list">
        {error && <em className="form_error">{error}</em>}
        {data &&
          data.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              // id={product._id}
              // image={product.images[0]}
              // price={product.price}
              // rating={product.reviews.rate}
              // title={product.title}
              // ratingCounts={product.reviews.counts}
              // stock={product.stock}
            />
          ))}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
      </div>
    </section>
  );
};

export default FeaturedProducts;
