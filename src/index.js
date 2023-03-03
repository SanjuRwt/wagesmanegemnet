import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Registration from "./Registration";
import Home from "./Home";

import Addwages from "./Addwages";

export default function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="Registration" element={<Registration />} />
          <Route path="Home" element={<Home />} />

          <Route path="Addwages" element={<Addwages />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Main />);
