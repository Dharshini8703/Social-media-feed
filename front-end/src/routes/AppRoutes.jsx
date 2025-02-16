import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';

const allRoutes = [
  {
    path: '/',
    element: <Home />
  }
];

function AppRoutes() { 
  return (
    <BrowserRouter> 
      <Routes>
        {allRoutes.map((route, index) => ( 
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
