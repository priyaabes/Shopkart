import React from "react";

const NavItem = () => {
  console.log("Hello");
  const navbar = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    {
      name: "Our Products",
      id: "product",
      child: [
        { name: "Product 1", id: "p1" },
        { name: "Product 2", id: "p2" },
        { name: "Product 3", id: "p3" },
        { name: "Product 4", id: "p4" },
      ],
    },
    { name: "Contact Us", id: "contact" },
  ];
  return (
    <>
      {navbar &&
        navbar.map((value, id) => (
          <li className="nav-item" key={id}>
            <a
              className="nav-link text-color-white nav_item_style"
              aria-current="page"
              href="#"
            >
              {value.name}
            </a>
          </li>
        ))}
    </>
  );
};

export default NavItem;
