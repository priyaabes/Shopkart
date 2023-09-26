import React, { useEffect, useState } from "react";
import "./App.css";
import facebook from "../src/icons/facebook.svg";
import linkedin from "../src/icons/linkedin.svg";
import insta from "../src/icons/insta.svg";
import twitter from "../src/icons/twitter.svg";
import truck from "../src/icons/truck.svg";
import horLine1 from "../src/icons/hor-line.png";
import FreshText from "../src/icons/Fresh_text.png";
import LookText from "../src/icons/look_text.png";
import midText from "../src/icons/2022-text.svg";
import boyPic from "../src/icons/boy.png";
import starPic from "../src/icons/Star.png";
import block1 from "../src/icons/block.png";
import line23 from "../src/icons/Line 23.svg";
import star4 from "../src/icons/Star4.png";
import arrow from "../src/icons/arrow.png";
import leftArrow from "../src/icons/left-arrrow.png";
import rightArrow from "../src/icons/right-arrow.png";
import line3 from "../src/icons/line3.png";
import Categories from "./Categories";
import CardCarousel from "./CardCarousel";
import NavItem from "./NavItem";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectCategory, setSelectCategory] = useState("jewelery");
  useEffect(() => {
    getCategories();
    getProducts();
  }, []);
  async function getCategories() {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const movies = await response.json();
    setCategories(movies);
  }
  async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");
    const product = await response.json();
    setProducts(product);
  }
  function selectCategoryFunc(selectedCategory) {
    setSelectCategory(selectedCategory);
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary top-nav">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ alignItems: "center", marginLeft: 55 }}
            >
              <li className="nav-item">
                <img src={truck} width={21} height={12.9} />
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-color text-size-s"
                  aria-current="page"
                  href="#"
                >
                  Free Delivery
                </a>
              </li>
              <div className="vl"></div>
              <li className="nav-item">
                <a className="nav-link text-color text-size-s" href="#">
                  Return Policy
                </a>
              </li>
            </ul>
            <div className="d-flex" style={{ width: 200, marginRight: 80 }}>
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{
                  alignItems: "center",
                  width: 200,
                  justifyContent: "space-between",
                }}
              >
                <li className="nav-item">
                  <a className="nav-link text-size-s text-color">Login</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-size-s text-color">Follow US</a>
                </li>
                <li className="nav-item">
                  <img src={facebook} width={8} height={8} />
                </li>
                <li className="nav-item">
                  <img src={linkedin} width={8} height={8} />
                </li>
                <li className="nav-item">
                  <img src={twitter} width={8} height={8} />
                </li>
                <li className="nav-item">
                  <img src={insta} width={8} height={8} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <div className="background-img">
        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "transparent !important", marginTop: -25 }}
        >
          <div
            className="container-fluid"
            style={{ marginLeft: 105, marginRight: 105, marginTop: 10 }}
          >
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link text-color-white"
                    href="#"
                    style={{ fontSize: 40 }}
                  >
                    ShopKart
                  </a>
                </li>
              </ul>
              <div className="d-flex">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a
                      className="nav-link text-color-white"
                      href="#"
                      style={{ fontSize: 14 }}
                    >
                      WISHLIST(0)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-color-white"
                      href="#"
                      style={{ fontSize: 14 }}
                    >
                      BAG(0)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
        <img src={horLine1} style={{ marginLeft: 129, marginTop: -54 }} />

        <nav
          className="navbar navbar-expand-lg"
          style={{ backgroundColor: "transparent !important", margin: "0 125" }}
        >
          <div
            className="container-fluid"
            style={{ marginTop: -25, marginLeft: 107 }}
          >
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <NavItem />
              </ul>
            </div>
          </div>
        </nav>
        <img
          src={FreshText}
          style={{
            display: " inline",
            position: "absolute",
            left: 232,
            top: 250,
            zIndex: 100,
          }}
        />
        <img
          src={midText}
          style={{
            display: "inline",
            position: "absolute",
            left: 482,
            top: 392,
            zIndex: 100,
          }}
        />
        <img
          src={LookText}
          style={{
            display: " inline",
            position: "absolute",
            left: 272,
            top: 479,
            zIndex: 100,
          }}
        />
        <img
          src={boyPic}
          style={{
            position: "absolute",
            right: 161,
            height: 610,
            zIndex: 1000,
            marginTop: -50,
          }}
        />
        <img
          src={starPic}
          style={{
            position: "absolute",
            right: 107,
            top: 124,
            width: 346,
            zIndex: 100,
          }}
        />
        <img
          src={block1}
          style={{ position: "absolute", right: 0, top: 314 }}
        />
        <img
          src={line23}
          style={{ position: "absolute", top: 636, width: 1020 }}
        />
        <img
          src={star4}
          style={{ position: "absolute", top: 592, left: 990, zIndex: 1000 }}
        />
        <div className="see_more_btn">
          <p className="text-color-white" style={{ marginRight: 5 }}>
            See more
          </p>
          <img src={arrow} width={7} height={7} />
        </div>
      </div>
      <div className="product-page">
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: " space-between",
            marginLeft: 60,
            marginRight: 60,
          }}
        >
          <h2 className="new-product-title">New products</h2>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              width: 170,
            }}
          >
            <img src={leftArrow} />
            <img src={rightArrow} />
          </div>
        </div>
        <img src={line3} style={{ marginLeft: 50, width: 523 }} />
        <div style={{ display: "flex", marginTop: 40 }}>
          <div className="product_category">
            <ul>
              <Categories
                categories={categories}
                selectCategoryFunc={selectCategoryFunc}
              />
            </ul>
          </div>
          <div className="container">
            <div style={{ display: "flex", flexDirection: "row" }}>
              {products.map((value) => {
                if (value.category === selectCategory)
                  return <CardCarousel props={value} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="footer_bg">
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div style={{ marginTop: 70 }}>
            <p>Newsletter</p>
            <p>Get news about articles and updates in your inbox.</p>
          </div>
          <div
            className="contact_form"
            style={{ marginTop: 70, marginRight: 250 }}
          >
            <input type="text" id="fname" placeholder="NAME" name="fname" />
            <input type="text" id="lname" placeholder="EMAIL" name="lname" />
            <input type="text" id="lname" placeholder="MESSAGE" name="lname" />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            color: "white",
            marginTop: -50,
            marginLeft: 140,
          }}
        >
          <span style={{ fontSize: 135, display: "block", fontWeight: 800 }}>
            GET
          </span>
          <span style={{ fontSize: 135, fontWeight: 800 }}>IN TOUCH</span>
        </div>
        <div className="send_btn">
          <p style={{ color: "#f07e15" }}>SEND</p>
        </div>
      </div>
      <div
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        <p>Copyright 2022 All Right Reserved By SG</p>
      </div>
    </div>
  );
};

export default App;
