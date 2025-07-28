import React from "react";
import "../Contact/Contact.css";
export default function Contact() {
  return (
    <>
      <div className="container vh-100 text-center w-50">
        <h2 className="fw-bold pt-5 contact-heading">CONTACT SECTION</h2>

        <div className="divider my-3 d-flex justify-content-center align-items-center ">
          <span className="line"></span>
          <i className="fa-solid fa-star mx-3"></i>
          <span className="line"></span>
        </div>

        <div className="d-flex justify-content-center flex-column mt-5 ">
          <input type="text" placeholder="User Name" className="mb-5 border border-top-0 border border-end-0 border border-start-0" />
          <input type="number" placeholder="User Age" className="mb-5 border border-top-0 border border-end-0 border border-start-0" />
          <input type="email" placeholder="User Email" className="mb-5 border border-top-0 border border-end-0 border border-start-0" />
          <input type="password" placeholder="User Password" className="mb-5 border border-top-0 border border-end-0 border border-start-0" />
        </div>

        <button className="btn btn-info"> Send Message</button>
      </div>
    </>
  );
}
