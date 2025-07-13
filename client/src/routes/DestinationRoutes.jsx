import CreateDestination from "../pages/destination/CreateDestination";
import EditDestination from "../pages/destination/EditDestination";
import DestinationDetails from "../pages/destination/DestinationDetails";
import ManageDestinations from "../pages/destination/ManageDestinations";
import DestinationDashboard from "../pages/destination/DestinationDashboard";
import DestinationProfile from "../pages/destination/DestinationProfile";
import DestinationAnalytics from "../pages/destination/DestinationAnalytics";
import ProtectedRoute from "../components/common/ProtectedRoute";

const destinationRoutes = [
  {
    path: "/destinations/create",
    element: (
      <ProtectedRoute>
        <CreateDestination />
      </ProtectedRoute>
    ),
  },
  {
    path: "/destinations/edit/:id",
    element: (
      <ProtectedRoute>
        <EditDestination />
      </ProtectedRoute>
    ),
  },
  {
    path: "/destinations/:id",
    element: <DestinationDetails />,
  },
  {
    path: "/destinations/manage",
    element: (
      <ProtectedRoute>
        <ManageDestinations />
      </ProtectedRoute>
    ),
  },
  {
    path: "/destination-owner/dashboard",
    element: (
      <ProtectedRoute>
        <DestinationDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/destination-owner/profile",
    element: (
      <ProtectedRoute>
        <DestinationProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/destination-owner/analytics",
    element: (
      <ProtectedRoute>
        <DestinationAnalytics />
      </ProtectedRoute>
    ),
  },
];

export default destinationRoutes;
