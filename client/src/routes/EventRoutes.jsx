import EditEvent from "../pages/event/EditEvent";
import EventDetails from "../pages/event/EventDetails";
import ManageEvents from "../pages/event/ManageEvents";
import EventRegistration from "../pages/event/EventRegistration";
import OrganizerDashboard from "../pages/event/OrganizerDashboard";
import OrganizerProfile from "../components/create-events/OrganizerProfile";
import OrganizerRegistration from "../components/create-events/OrganizerRegistration";
import EventAnalytics from "../pages/event/EventAnalytics";
import EventPage from "../components/create-events/EventPage";
import CreateEvent from "../components/create-events/CreateEvent";
import TicketScannerPage from "../pages/organizer/TicketScannerPage";
import EventProgramManager from "../components/organizer/EventProgramManager";
import AttendeeManagement from "../pages/organizer/AttendeeManagement";
import AllEvents from "../pages/organizer/AllEvents";
import EventTemplates from "../pages/organizer/EventTemplates";
import EventDrafts from "../pages/organizer/EventDrafts";
import EventPerformanceAnalytics from "../pages/organizer/EventPerformanceAnalytics";
import AttendeeInsightsAnalytics from "../pages/organizer/AttendeeInsightsAnalytics";
import RevenueReportsAnalytics from "../pages/organizer/RevenueReportsAnalytics";
import CheckInCheckOut from "../pages/organizer/CheckInCheckOut";
import BadgePrinting from "../pages/organizer/BadgePrinting";
import Waitlist from "../pages/organizer/Waitlist";
import TicketManagement from "../pages/organizer/TicketManagement";
import Refunds from "../pages/organizer/Refunds";
import Resources from "../pages/organizer/Resources";
import EmailCampaigns from "../pages/organizer/EmailCampaigns";
import SMSNotifications from "../pages/organizer/SMSNotifications";
import Announcements from "../pages/organizer/Announcements";
import Preferences from "../pages/organizer/Preferences";
import Integrations from "../pages/organizer/Integrations";
import StaffManagement from "../pages/organizer/StaffManagement";

const eventRoutes = [
  {
    path: "/organizer/register",
    element: <OrganizerRegistration />,
  },
  {
    path: "/events",
    element: <EventPage />,
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
    path: "/events/:id/register",
    element: <EventRegistration />,
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
  {
    path: "/organizer/tickets/scanner",
    element: <TicketScannerPage />,
  },
  {
    path: "/organizer/programs/speakers",
    element: <EventProgramManager />,
  },
  {
    path: "/organizer/programs/exhibitors",
    element: <EventProgramManager />,
  },
  {
    path: "/organizer/programs/schedule",
    element: <EventProgramManager />,
  },
  {
    path: "/organizer/attendees",
    element: <AttendeeManagement />,
  },
  {
    path: "/organizer/events",
    element: <AllEvents />,
  },
  {
    path: "/organizer/events/templates",
    element: <EventTemplates />,
  },
  {
    path: "/organizer/events/drafts",
    element: <EventDrafts />,
  },
  {
    path: "/organizer/analytics/events",
    element: <EventPerformanceAnalytics />,
  },
  {
    path: "/organizer/analytics/attendees",
    element: <AttendeeInsightsAnalytics />,
  },
  {
    path: "/organizer/analytics/revenue",
    element: <RevenueReportsAnalytics />,
  },
  {
    path: "/organizer/attendees/checkin",
    element: <CheckInCheckOut />,
  },
  {
    path: "/organizer/attendees/badges",
    element: <BadgePrinting />,
  },
  {
    path: "/organizer/attendees/waitlist",
    element: <Waitlist />,
  },
  {
    path: "/organizer/tickets/manage",
    element: <TicketManagement />,
  },
  {
    path: "/organizer/tickets/refunds",
    element: <Refunds />,
  },
  {
    path: "/organizer/programs/resources",
    element: <Resources />,
  },
  {
    path: "/organizer/communications/email",
    element: <EmailCampaigns />,
  },
  {
    path: "/organizer/communications/sms",
    element: <SMSNotifications />,
  },
  {
    path: "/organizer/communications/announcements",
    element: <Announcements />,
  },
  {
    path: "/organizer/settings/staff",
    element: <StaffManagement />,
  },
  {
    path: "/organizer/settings/preferences",
    element: <Preferences />,
  },
  {
    path: "/organizer/settings/integrations",
    element: <Integrations />,
  },
];

export default eventRoutes;
