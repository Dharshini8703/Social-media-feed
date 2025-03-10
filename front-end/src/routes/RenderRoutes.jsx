import {
    Route,
    Routes,
  } from "react-router-dom";
import ProtectedRoute from "./ProtetedRoutes";
import Landing from "../pages/Landing";
import Home from "../pages/Home";

  // Route Configuration
  const adminRoutes = [
    {
      path: "/home",
      element: <Home />,
      layout: true,
    },
  ];
  
  const routesConfig = [...adminRoutes];
  
  // Function to Render Routes
  const RenderRoutes = ({ userRole }) => {
    const filteredRoutes = routesConfig.filter(route => route?.roles?.includes(userRole));
    const routesWithLayout = filteredRoutes.filter(route => route.layout);
    const routesWithoutLayout = filteredRoutes.filter(route => !route.layout);
  
    return (
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        
        {/* Routes without Layout */}
        {routesWithoutLayout.map(({ path, element, roles }) => (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute role={userRole} allowedRoles={roles}>
                {element}
              </ProtectedRoute>
            }
          />
        ))}
  
        {/* Routes with Layout */}
        {routesWithLayout.map(({ path, element, roles }) => (
          <Route
            key={path}
            path={path}
            element={
              <ProtectedRoute role={userRole} allowedRoles={roles}>
                <Layout>
                  {element}
                </Layout>
              </ProtectedRoute>
            }
          />
        ))}
      </Routes>
    );
  };
  
  export default RenderRoutes;
  