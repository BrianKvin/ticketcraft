import UserRegistration from "../components/user-dashboard/UserRegistration";
import UserPayment from "../components/user-dashboard/UserPayment";
import Dashboard from "../components/user-dashboard/Dashboard";

const userRoutes = [
  {
    path: "/user/register",
    element: <UserRegistration />,
  },
  {
    path: "/user/payment",
    element: <UserPayment />,
  },
  {
    path: "/user/dashboard",
    element: <Dashboard />,
  },
];

export default userRoutes; 