import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Contact from "./Contact";
import LazyLoadedComponent from "../lazy-loading/LazyLoadedComponent";
import { Suspense } from "react";
import About from "./About";
import ErrorPage from "./ErrorPage";

const Contact = () => <h2>Contact Page</h2>;

const BrowserRouter = () => {
  return (
    <div>
      <h1> example of react routing</h1>
      <Router>
        <h1>Hello inside routes</h1>
        <Routes>
          <Route Path="/contact" element={<Contact />} exact />
          <Route Path="/about" element={<About />} />
          <Route Path="*" element={<ErrorPage />} />
          <Route
            path="/lazy"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <LazyLoadedComponent />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default BrowserRouter;
