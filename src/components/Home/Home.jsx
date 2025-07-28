import React from "react";
import "../Home/Home.css";
export default function Home() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center">
        <div className="row text-center">
          <div className="col-12">
            <img src="src/assets/avataaars.svg" alt="" className="mb-3 mt-5" />
            <h1 className="fw-bold fs-1 text-white">START FRAMEWORK</h1>
            <div className="divider">
              <span className="line"></span>
              <i className="fa-solid fa-star"></i>
              <span className="line"></span>
            </div>
            <p className=" text-white fs-4">
              Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
