import React from "react";
import ReactDOM from "react-dom/client";
import "./css/index.css";
import Home from "./Pages/Home";
import OurStory from "./Pages/OurStory";
//import Photos from "./Pages/Photos";
import WeddingParty from "./Pages/WeddingParty";
import QA from "./Pages/QA";
import TravelAndLodging from "./Pages/TravelAndLodging";
import Registry from "./Pages/Registry";
import RSVP from "./Pages/RSVP";
import Feedback from "./Pages/Feedback";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Header from "./components/Header";
import { ROUTES } from "./constants";
import LeafSVG from "./resources/leaf.svg";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="bg-[#0a1f19] min-h-screen overflow-hidden">
      <div>
        <div class="invisible md:visible">
          <img
            src={LeafSVG}
            className="absolute sm:top-4 sm:left-4 sm:w-12 sm:h-12 sm:-scale-x-100 sm:mask lg:top-4 lg:left-4 lg:w-48 lg:h-48 lg:-scale-x-100 lg:mask"
          />
        </div>
        <div class="invisible md:visible">
          <img
            src={LeafSVG}
            className="absolute sm:top-36 sm:left-32 sm:w-12 sm:h-12 sm:rotate-45 lg:top-36 lg:left-32 lg:w-48 lg:h-64 lg:rotate-45"
          />
        </div>
        <div class="invisible md:visible">
          <img
            src={LeafSVG}
            className="absolute sm:top-[350px] sm:left-0 sm:w-12 sm:h-12 sm:-rotate-45 lg:top-[350px] lg:left-0 lg:w-48 lg:h-48 lg:-rotate-45"
          />
        </div>
        <div class="invisible md:visible">
          <img
            src={LeafSVG}
            className="absolute sm::top-4 sm:right-4 sm:w-12 sm:h-12 lg:top-4 lg:right-4 lg:w-48 lg:h-48"
          />
        </div>
        <div class="invisible md:visible">
          <img
            src={LeafSVG}
            className="absolute sm:top-36 sm:right-32 sm:w-12 sm:h-12 sm:-rotate-45 sm:-scale-x-100 lg:top-36 lg:right-32 lg:w-48 lg:h-64 lg:-rotate-45 lg:-scale-x-100"
          />
        </div>
        <div class="invisible md:visible">
          <img
            src={LeafSVG}
            className="absolute sm:top-[350px] sm:right-0 sm:w-12 sm:h-12 sm:rotate-45 sm:-scale-x-100  lg:top-[350px] lg:right-0 lg:w-48 lg:h-48 lg:rotate-45 lg:-scale-x-100"
          />
        </div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path={ROUTES.HOME} element={<Home />} />
          <Route path={ROUTES.OURSTORY} element={<OurStory />} />
          {/*<Route path={ROUTES.PHOTOS} element={<Photos />} />*/}
          <Route path={ROUTES.WEDDINGPARTY} element={<WeddingParty />} />
          <Route path={ROUTES.QA} element={<QA />} />
          <Route
            path={ROUTES.TRAVELANDLODGING}
            element={<TravelAndLodging />}
          />
          <Route path={ROUTES.REGISTRY} element={<Registry />} />
          <Route path={ROUTES.RSVP} element={<RSVP />} />
          <Route path={ROUTES.FEEDBACK} element={<Feedback />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
