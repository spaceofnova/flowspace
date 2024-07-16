// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import Root from "./Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/login";
import Signup from "./auth/signup";
import Home from "./web/Home";
import Apps from "./web/Apps";
import Store from "./web/Store";
import Settings from "./web/Settings";
import AppPlayer from "./web/AppPlayer";
import ErrorPage from "./components/ErrorPage";
import { ThemeProvider } from "./components/providers/ThemeProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/web",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/web/",
        element: <Home />,
        index: true,
      },
      {
        path: "/web/apps",
        element: <Apps />,
      },
      {
        path: "/web/store",
        element: <Store />,
      },
      {
        path: "/web/settings",
        element: <Settings />,
      },
      {
        path: "/web/apps/:id",
        element: <AppPlayer />,
      },
    ],
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
]);

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
    <RouterProvider
      router={router}
      future={{
        // Wrap all state updates in React.startTransition()
        v7_startTransition: true,
      }}
    />
  </ThemeProvider>
);

// Add strict mode back in later
// root.render(
//   <StrictMode>
//     <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
//       <RouterProvider
//         router={router}
//         future={{
//           // Wrap all state updates in React.startTransition()
//           v7_startTransition: true,
//         }}
//       />
//     </ThemeProvider>
//   </StrictMode>
// );
