import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/completedTasks",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/previousVersions:memoId",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/deletedMemos",
      element: <App />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
