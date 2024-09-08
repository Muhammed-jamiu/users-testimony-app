import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Testimony from "./practiestwo/Testimony.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Testimony></Testimony>
    </BrowserRouter>
  </StrictMode>
);
