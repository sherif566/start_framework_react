import React from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <>
      <div className="container p-5">
        <div className="row text-white text-center">
          <div className="col-lg-4 mb-4">
            <h3>LOCATION</h3>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-lg-4 mb-4">
            <h3 className="fs-2">AROUND THE WEB</h3>
            <div className="d-flex justify-content-center gap-3">
              <span className="border rounded-circle p-3">
                <i className="fa-brands fa-facebook"></i>
              </span>
              <span className="border rounded-circle p-3">
                <i className="fa-brands fa-instagram"></i>
              </span>
              <span className="border rounded-circle p-3">
                <i className="fa-brands fa-linkedin"></i>
              </span>
              <span className="border rounded-circle p-3">
                <i className="fa-solid fa-globe"></i>
              </span>
            </div>
          </div>

          <div className="col-lg-4 mb-4">
            <h3>ABOUT FREELANCER</h3>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route
            </p>
          </div>
        </div>
      </div>
      <div className="copyright d-flex justify-content-center align-items-center p-3">
        <p className="text-white">Copyright © Your Website 2021</p>
      </div>
    </>
  );
}
