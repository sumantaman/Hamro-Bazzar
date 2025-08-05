import React from "react";
import "./ProductsSidebar.css";
import LinkWithIcon from "./../LinkWithIcon/LinkWithIcon";

import useData from "../../hooks/useData";

const ProductsSidebar = () => {
  const { data: category, error } = useData("/category");

  return (
    <aside className="products_sidebar">
      <h2>Category</h2>
      <div className="category_links">
        {error && <em className="form_error">{error}</em>}
        {category &&
          category.map((category) => (
            <LinkWithIcon
              id={category._id}
              title={category.name}
              link={`/products?category=${category.name}`}
              emoji={`http://localhost:5000/category/${category.image}`}
              sidebar={true}
              key={category._id}
            />
          ))}
      </div>
    </aside>
  );
};

export default ProductsSidebar;
