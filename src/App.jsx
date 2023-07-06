import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css";
import ErrorPage from "./ErrorPage";
import Home from "./components/Home";
import About from "./components/About";
import Features from "./components/Features";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/About",
        element: <About />,
      },
      {
        path: "/Features",
        element: <Features />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/SignUp",
        element: <SignUp />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
