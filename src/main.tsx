import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouteObject,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Men from "./pages/Men.tsx";
import Women from "./pages/Women.tsx";
import Profile from "./pages/Profile.tsx";
import { Provider } from "react-redux";
import { store } from "./redux_toolkit/store.ts";
import Admin from "./pages/Admin.tsx";
import ProductInfo from "./pages/ProductInfo.tsx";

const router = createBrowserRouter(
  createRoutesFromElements<RouteObject>(
    <Route path="" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Men />} />
      <Route path="/women" element={<Women />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/product/:productid" element={<ProductInfo/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
