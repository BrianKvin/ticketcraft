// import Home from "../pages/public/Home"; // COMMENTED OUT: Using BrowseEvents as home
import BrowseEvents from "../pages/public/BrowseEvents";
import BrowseDestinations from "../pages/public/BrowseDestinations";
import About from "../pages/public/About";
import NotFound from "../pages/public/NotFound";
import Register from "../components/forms/Register";

const publicRoutes = [
  {
    path: "/",
    element: <BrowseEvents />, // CHANGED: BrowseEvents is now the home page
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
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default publicRoutes;
