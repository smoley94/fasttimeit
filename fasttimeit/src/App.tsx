import { makeStaticStyles } from "@fluentui/react-components";

import "normalize.css";
import {
  RouteObject,
  RouterProvider,
  createHashRouter,
} from "react-router-dom";
import { Layout } from "./layout";
//import { Start } from "./pages/start";

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
      /*
      children: [
        {
          index: true,
          element: <Start />,
        },
      ],
      */
    },
  ];

  const router = createHashRouter(ROUTES);

  return <RouterProvider router={router} />;
}
