import CreateEvent from "../components/create-events/CreateEvent";
import EditEvent from "../pages/event/EditEvent";
import EventDetails from "../pages/event/EventDetails";
import ManageEvents from "../pages/event/ManageEvents";
import OrganizerDashboard from "../components/create-events/OrganizerDashboard";
import OrganizerProfile from "../components/create-events/OrganizerProfile";
import OrganizerRegistration from "../components/create-events/OrganizerRegistration";
import EventAnalytics from "../pages/event/EventAnalytics";

const eventRoutes = [
  {
    path: "/organizer/register",
    element: <OrganizerRegistration />,
  },
  {
    path: "/events/create",
    element: <CreateEvent />,
  },
  {
    path: "/events/edit/:id",
    element: <EditEvent />,
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
  },
  {
    path: "/events/manage",
    element: <ManageEvents />,
  },
  {
    path: "/organizer/dashboard",
    element: <OrganizerDashboard />,
  },
  {
    path: "/organizer/profile",
    element: <OrganizerProfile />,
  },
  {
    path: "/organizer/analytics",
    element: <EventAnalytics />,
  },
];

export default eventRoutes;
