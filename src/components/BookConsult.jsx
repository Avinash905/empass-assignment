import React, { useState } from "react";
import "../styles/bookconsult.css";
import { IoMdClose } from "react-icons/io";
import toast from "react-hot-toast";

const BookConsult = ({ setModalOpen }) => {
  const [formDetails, setFormDetails] = useState({
    date: "",
    time: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    return setFormDetails({
      ...formDetails,
      [name]: value,
    });
  };

  const bookConsult = (e) => {
    e.preventDefault();
    toast.success("Consult booked successfully");
    setModalOpen(false);
  };

  return (
    <>
      <div className="modal flex-center">
        <div className="modal__content">
          <h2 className="page-heading">Book Consult</h2>
          <IoMdClose
            onClick={() => {
              setModalOpen(false);
            }}
            className="close-btn"
          />
          <div className="login-container flex-center book">
            <form className="login-form">
              <select
                name="expert"
                id="expert"
              >
                <option value="suresh">Suresh</option>
                <option value="john">John</option>
                <option value="aswin">Ashwin</option>
                <option value="jane">Jane</option>
              </select>
              <input
                type="date"
                name="date"
                className="form-input"
                value={formDetails.date}
                onChange={inputChange}
              />
              <input
                type="time"
                name="time"
                className="form-input"
                value={formDetails.time}
                onChange={inputChange}
              />
              <button
                type="submit"
                className="btn form-btn"
                onClick={bookConsult}
              >
                book
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookConsult;
