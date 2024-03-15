import { makeStaticStyles } from "@fluentui/react-components";
import { RouteErrorBoundary } from "../../packages/shared/src/components/route-error-boundary";
import { Layout } from "./layout";
import { Start } from "./pages/start";
import { Timer } from "./pages/timer";
import { Manual } from "./pages/manual";
import "normalize.css";

import {
  RouteObject,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";

const useStaticStyles = makeStaticStyles({
  body: { height: "100%" },
  html: { height: "100%" },
  "#root": { height: "100%" },
});

export function App() {
  useStaticStyles();

  const ROUTES: RouteObject[] = [
    {
      path: "/",
      element: <Layout />,
      errorElement: <RouteErrorBoundary />,
      children: [
        {
          index: true,
          element: <Start />,
        },
        {
          path: "timer",
          element: <Timer />,
        },
        {
          path: "manual",
          element: <Manual />,
        },
      ],
    },
  ];

  const router = createHashRouter(ROUTES);

  return <RouterProvider router={router} />;
}
