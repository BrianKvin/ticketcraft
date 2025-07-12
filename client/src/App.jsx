import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./context/AuthContext";
import router from "./routes";

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <div className="flex h-screen">
        <RouterProvider router={router} />
      </div>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
