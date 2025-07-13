import Home from "../pages/public/Home";
import BrowseEvents from "../pages/public/BrowseEvents";
import BrowseDestinations from "../pages/public/BrowseDestinations";
import About from "../pages/public/About";
import Contact from "../pages/public/Contact";
import NotFound from "../pages/public/NotFound";
import Register from "../components/forms/Register";

const publicRoutes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/browse-events",
    element: <BrowseEvents />,
  },
  {
    path: "/browse-destinations",
    element: <BrowseDestinations />,
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default publicRoutes;
