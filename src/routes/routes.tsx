import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

export default router;

// {
//   path: '/admin',
//   element: <App />,
//   children: adminRoutes,
// },
// {
//   path: '/faculty',
//   element: <App />,
//   children: adminRoutes,
// },
// {
//   path: '/student',
//   element: <App />,
//   children: adminRoutes,
// },
// {
//   path: '/login',
//   element: <Login />,
// },
// {
//   path: '/register',
//   element: <Register />,
// },
