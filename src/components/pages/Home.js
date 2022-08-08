import { Fragment } from "react";
import Carousel from "../layout/carousel";
import "../../assets/css/Home.css";

export default function Home() {
  return (
    <Fragment>
      <div className="home-container">
        <div className="home-header">
          <h1>Tea & Cake.</h1>
          <p>Tearooms in the heart of Norwich</p>
        </div>
        <br></br>
        <div className="vote-poll-container">
          <button className="button" type="button" id="vote-btn">
            <span>VOTE NOW!</span>
          </button>
          <p>Vote for our next seasonal afternoon tea theme!</p>
        </div>
        <Carousel />
      </div>
    </Fragment>
  );
}
