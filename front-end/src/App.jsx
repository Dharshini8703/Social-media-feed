

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ContextProvider } from './context/Context';
import RenderRoutes from './Routes/RenderRoutes';
import { Toaster } from "react-hot-toast";

export default function App() {


  // Create the router with the future flag
  const router = createBrowserRouter(
    [
      {
        path: "/*", // Match all paths and delegate to RenderRoutes
        element: (
          <ContextProvider>
            <RenderRoutes  />
          </ContextProvider>
        ),
      },
    ],
    {
      future: {
        v7_startTransition: true, // Enable the future flag
      },
    }
  );

  return (
    <>
      <Toaster position="top-center" reverseOrder={true} />
      <RouterProvider router={router} />
    </>
  );
}
