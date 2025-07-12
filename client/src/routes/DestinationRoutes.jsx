import CreateDestination from "../pages/destination/CreateDestination";
import EditDestination from "../pages/destination/EditDestination";
import DestinationDetails from "../pages/destination/DestinationDetails";
import ManageDestinations from "../pages/destination/ManageDestinations";
import DestinationDashboard from "../pages/destination/DestinationDashboard";
import DestinationProfile from "../pages/destination/DestinationProfile";
import DestinationAnalytics from "../pages/destination/DestinationAnalytics";

const destinationRoutes = [
  {
    path: "/destinations/create",
    element: <CreateDestination />,
  },
  {
    path: "/destinations/edit/:id",
    element: <EditDestination />,
  },
  {
    path: "/destinations/:id",
    element: <DestinationDetails />,
  },
  {
    path: "/destinations/manage",
    element: <ManageDestinations />,
  },
  {
    path: "/destination-owner/dashboard",
    element: <DestinationDashboard />,
  },
  {
    path: "/destination-owner/profile",
    element: <DestinationProfile />,
  },
  {
    path: "/destination-owner/analytics",
    element: <DestinationAnalytics />,
  },
];

export default destinationRoutes;
