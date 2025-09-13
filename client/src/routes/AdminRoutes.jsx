import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminUsers from "../pages/admin/AdminUsers";
import AdminOrganizers from "../pages/admin/AdminOrganizers";
import AdminEvents from "../pages/admin/AdminEvents";
import AdminEventDetails from "../pages/admin/AdminEventDetails";
import AdminEventAttendees from "../pages/admin/AdminEventAttendees";
import AdminEventAnalytics from "../pages/admin/AdminEventAnalytics";
import AdminTicketScanner from "../pages/admin/AdminTicketScanner";
import AdminReports from "../pages/admin/AdminReports";
import AdminSettings from "../pages/admin/AdminSettings";

const adminRoutes = [
  {
    path: "/admin",
    element: <AdminDashboard />,
  },
  {
    path: "/admin/users",
    element: <AdminUsers />,
  },
  {
    path: "/admin/organizers",
    element: <AdminOrganizers />,
  },
  {
    path: "/admin/events",
    element: <AdminEvents />,
  },
  {
    path: "/admin/events/:id",
    element: <AdminEventDetails />,
  },
  {
    path: "/admin/events/:id/attendees",
    element: <AdminEventAttendees />,
  },
  {
    path: "/admin/events/:id/analytics",
    element: <AdminEventAnalytics />,
  },
  {
    path: "/admin/scanner",
    element: <AdminTicketScanner />,
  },
  {
    path: "/admin/reports",
    element: <AdminReports />,
  },
  {
    path: "/admin/settings",
    element: <AdminSettings />,
  },
];

export default adminRoutes;



