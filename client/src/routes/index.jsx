import { createBrowserRouter } from "react-router-dom";
import publicRoutes from "./PublicRoutes";
import authRoutes from "./AuthRoutes";
import eventRoutes from "./EventRoutes";
import destinationRoutes from "./DestinationRoutes";
import clientRoutes from "./ClientRoutes";

const router = createBrowserRouter([
  ...publicRoutes,
  ...authRoutes,
  ...eventRoutes,
  ...destinationRoutes,
  ...clientRoutes,
]);

export default router;