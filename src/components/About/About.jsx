import React from "react";
import "../About/About.css";

export default function About() {
  return (
    <>
      <div className="cont d-flex justify-content-center align-items-center text-white vh-100">
        <div className="container text-center">

          <h2 className="fw-bold">ABOUT COMPONENT</h2>


          <div className="divider my-3 d-flex justify-content-center align-items-center">
            <span className="line"></span>
            <i className="fa-solid fa-star mx-3"></i>
            <span className="line"></span>
          </div>


          <div className="row justify-content-center mt-4">
            <div className="col-lg-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="col-lg-5">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
