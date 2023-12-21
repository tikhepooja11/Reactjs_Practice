import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import ErrorPage from "./ErrorPage";
import React, { Suspense, lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const LazyLoadedComponent = lazy(() =>
  import("../lazy-loading/LazyLoadedComponent")
);
// Assuming you have components like AppLayout and About
// const Home = () => <div>Home Page</div>;
// const Contact = () => <div>Contact Layout</div>;
// const About = () => <div>About Page</div>;

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
    {
      path: "/lazy-loading",
      element: (
        <Suspense>
          <LazyLoadedComponent />
        </Suspense>
      ),
    },
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);

  return (
    <div>
      <h1>Example of Routing</h1>
    </div>
  );
}

//  To implement this directly include this js code into app.js file
