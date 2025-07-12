import ViewEvents from "../pages/user/ViewEvents";
import ViewDestination from "../pages/user/ViewDestination";

const clientRoutes = [
  {
    path: "/user/events",
    element: <ViewEvents />,
  },
  {
    path: "/user/destinations",
    element: <ViewDestination />,
  },
];

export default clientRoutes;
