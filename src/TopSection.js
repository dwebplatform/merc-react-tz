import "./top-section.css";
import { SwiperComponent } from "./Swiper";
import React, { useState, useEffect } from "react";
export const TopSection = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("isLoggedIn")) {
      setLoggedIn(true);
    }
  }, []);

  const goToLoginForm = () => {
    document.location.href = "#";
    document.location.href = "#login-form";
  };
  return (
    <section className="section-top m-section-top">
      <div className="section-top__left-el m-section-top__left-el">
        <h3 className="main-header m-main-header">Header</h3>
        <div className="m-section-top__left-img-container">
          <img
            alt="product el"
            src="https://images.hdqwalls.com/download/rocket-raccoon-in-avengers-infinity-war-new-poster-61-3840x2160.jpg"
          />
        </div>
        {!isLoggedIn && (
          <div className="main-header-btn-wrapper m-main-header-btn-wrapper">
            <button className="main-header-btn" onClick={() => goToLoginForm()}>
              Login
            </button>
          </div>
        )}
      </div>
      <div className="section-top__right m-section-top__right">
        <SwiperComponent />
      </div>
    </section>
  );
};
