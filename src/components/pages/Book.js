import React from "react";
import { Fragment } from "react";
import "../../assets/css/Book.css";

export default function Book() {
  return (
    <Fragment>
      <div className="book-table">
        <div className="book-header">
          <h1>Book a table</h1>
          <p>We'd love to welcome you to our tearooms</p>
        </div>

        <div className="book-content">
          <p>
            If you'd like to book a table with us, please fill in the form below
            and click 'Request'.
          </p>
          <p>
            A member of our team will get back to you as soon as possible via
            email.
          </p>
        </div>
        <form>
          <div className="form-block">
            <div className="form-section">
              <h2>Booking Request</h2>
              <div className="book-form-row">
                <label htmlFor="date">Date:</label>
                <input type="date" id="date" name="date" />
              </div>
              <br />
              <div className="book-form-row">
                <label htmlFor="time">Time:</label>
                <input type="time" id="time" name="time" />
              </div>
              <br />
              <div className="book-form-row">
                <label htmlFor="people">No. People:</label>
                <input type="number" id="people" name="people" />
              </div>
            </div>
            <div className="form-section">
              <h2>Contact Details</h2>
              <div className="book-form-row">
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" />
              </div>
              <br />
              <div className="book-form-row">
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" />
              </div>
              <br />
              <div className="book-form-row">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
              </div>
              <br />
              <div className="book-form-row">
                <label htmlFor="phone">Phone number:</label>
                <input type="tel" id="phone" name="phone" />
              </div>
              <br />
              <div className="book-form-row">
                <textarea
                  name="message"
                  rows="10"
                  cols="30"
                  placeholder="Add a message"
                ></textarea>
              </div>
              <div className="book-form-row">
                <button type="submit" id="request-btn">
                  Request
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
}
