
import React from "react";
import "../Portfolio/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="container text-center my-5 vh-100">
      <h1>PORTFOLIO COMPONENT</h1>

      {/* Divider */}
      <div className="divider my-3 d-flex justify-content-center align-items-center">
        <span className="line"></span>
        <i className="fa-solid fa-star mx-2"></i>
        <span className="line"></span>
      </div>

      {/* Portfolio Grid */}
      <div className="row g-4">

        {/* Image 1 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-item">
            <img className="rounded-3 img-fluid" src='poert1.png'  alt="portfolio 1" />
            <div className="portfolio-overlay d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-item">
            <img className="rounded-3 img-fluid" src='port2.png' alt="portfolio 2" />
            <div className="portfolio-overlay d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

        {/* Image 3 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-item">
            <img className="rounded-3 img-fluid" src='port3.png'  alt="portfolio 3" />
            <div className="portfolio-overlay d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

        {/* Image 4 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-item">
            <img className="rounded-3 img-fluid" src='poert1.png' alt="portfolio 4" />
            <div className="portfolio-overlay d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

        {/* Image 5 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-item">
            <img className="rounded-3 img-fluid" src='port2.png' alt="portfolio 5" />
            <div className="portfolio-overlay d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

        {/* Image 6 */}
        <div className="col-lg-4 col-md-6 col-sm-12">
          <div className="portfolio-item">
            <img className="rounded-3 img-fluid" src='port3.png' alt="portfolio 6" />
            <div className="portfolio-overlay d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-plus fa-3x text-white"></i>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
