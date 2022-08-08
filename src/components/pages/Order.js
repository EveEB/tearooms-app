import React from "react";
import sherlock from "./images/sherlock.jpg";
import dalek from "./images/dalek.jpg";
import woodland from "./images/woodland.jpg";
import "../../assets/css/Order.css";

export default function Order() {
  return (
    <div className="order">
      <div className="order-header">
        <h1>Order</h1>
        <p>
          Order one of our afternoon tea boxes to be delivered straight to your
          door!
        </p>
      </div>
      <br></br>
      <div className="order-content">
        <p>
          We currently have three of our afternoon tea boxes available to order
          for home delivery. Scroll for more information and to submit an order.
        </p>
        <br></br>
        <div className="tea-options-container">
          <div className="tea-options">
            <h3>Option 1: Sherlock Holmes </h3>
            <img src={sherlock} alt="Sherlock Holmes Baker Street" />
            <p>
              Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              At quis risus sed vulputate. Lorem mollis aliquam ut porttitor leo
              a diam sollicitudin tempor.
            </p>
          </div>
          <div className="tea-options">
            <h3>Option 2: Time Lord Tea</h3>
            <img src={dalek} alt="Dalek" />
            <p>
              Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              At quis risus sed vulputate. Lorem mollis aliquam ut porttitor leo
              a diam sollicitudin tempor.
            </p>
          </div>
          <div className="tea-options">
            <h3>Option 3: Fairy Tale Woodland</h3>
            <img src={woodland} alt="woodland scene" />
            <p>
              Details: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              At quis risus sed vulputate. Lorem mollis aliquam ut porttitor leo
              a diam sollicitudin tempor.
            </p>
          </div>
        </div>
        <div className="order-form-container">
          <h2>Order an afternoon tea box today!</h2>
          <form action="">
            <div className="order-form-row">
              <label htmlFor="name">Your name:</label>
              <input type="text" name="name" id="name" />
            </div>
            <br></br>
            <div className="order-form-row">
              <label htmlFor="email">Your email:</label>
              <input type="email" name="email" id="email" />
            </div>
            <br></br>
            <div className="order-form-row">
              <input type="checkbox" id="shtea" name="shtea" value="Sherlock" />
              <label for="vehicle1">Sherlock Holmes Tea</label>
              <br></br>
              <input type="checkbox" id="tltea" name="tltea" value="Time" />
              <label for="vehicle2">Time Lord Tea</label>
              <br></br>
              <input type="checkbox" id="fwtea" name="fwtea" value="Fairy" />
              <label for="vehicle3">Fairy Tale Woodland Tea</label>
            </div>
            <br></br>
            <div className="order-form-row">
              <textarea
                name="message"
                rows="10"
                cols="30"
                placeholder="Add any additional comments here."
              ></textarea>
            </div>
            <br></br>
            <input type="submit" value="Order" id="order-btn" />
          </form>
        </div>
      </div>
    </div>
  );
}
