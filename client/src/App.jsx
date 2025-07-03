import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import router from "./routes"

// Create a client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <div className="flex h-screen overflow-y-auto no-scrollbar">
      <RouterProvider router={router} />
    </div>
  </QueryClientProvider>
);

export default App
