import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Search from "./Search";
import CompletedTasks from "./CompletedTasks";
import DeletedMemos from "./DeletedMemos";
import PreviousVersions from "./PreviousVersions";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/search",
      element: <Search />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/completedTasks",
      element: <CompletedTasks />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/previousVersions",
      element: <PreviousVersions />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/deletedMemos",
      element: <DeletedMemos />,
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}
