import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import ResetPassword from "../pages/auth/ResetPassword";
import VerifyEmail from "../pages/auth/VerifyEmail"

const authRoutes = [
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/register",
    element: <Register />,
  },
  {
    path: "/auth/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/auth/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/auth/verifyEmail",
    element: <VerifyEmail />,
  },
];

export default authRoutes;
