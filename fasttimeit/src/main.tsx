import ReactDOM from "react-dom/client";
import { FluentProvider, webLightTheme } from "@fluentui/react-components";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <FluentProvider theme={webLightTheme} style={{ height: "100%" }}>
    <App />
  </FluentProvider>
);
