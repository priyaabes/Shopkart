import React from "react";

const Categories = ({ categories, selectCategoryFunc }) => {
  return (
    <div>
      {categories &&
        categories.map((value) => (
          <li className="category">
            <a
              className="category_link"
              href="#"
              onClick={() => {
                selectCategoryFunc(value);
              }}
            >
              {value.toUpperCase()}
            </a>
          </li>
        ))}
    </div>
  );
};

export default Categories;
