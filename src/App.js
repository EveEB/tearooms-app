import "./assets/css/App.css";
import "./assets/css/Book.css";
import "./assets/css/Contact.css";
import "./assets/css/Home.css";
import "./assets/css/index.css";
import "./assets/css/MeetTheTeam.css";
import "./assets/css/Menu.css";
import "./assets/css/NavBar.css";
import "./assets/css/Order.css";
import "./assets/css/OurStory.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import OurStory from "./components/pages/OurStory";
import Menu from "./components/pages/Menu";
import Team from "./components/pages/MeetTheTeam";
import Contact from "./components/pages/contact";
import Book from "./components/pages/Book";
import Order from "./components/pages/Order";
import NavBar from "./components/layout/NavBar.js";
import Footer from "./components/layout/footer";

// always use the function/component name as element={<___/>}, not the name of the page you are importing
function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<NavBar />}>
              <Route index element={<Home />} />
              <Route path="Home" exact element={<Home />} />
              <Route path="OurStory" exact element={<OurStory />} />
              <Route path="Menu" exact element={<Menu />} />
              <Route path="Contact" exact element={<Contact />} />
              <Route path="MeetTheTeam" exact element={<Team />} />
              <Route path="Book" exact element={<Book />} />
              <Route path="Order" exact element={<Order />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
