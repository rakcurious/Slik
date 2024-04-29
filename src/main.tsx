import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  Route,
  RouteObject,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux_toolkit/store.ts";
import React from "react";
import Collection from "./pages/Collection.tsx";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import Home from "./pages/Home.tsx";
import Cutie from "./pages/Cuties.tsx";
import Profile from "./pages/Profile.tsx";
import Admin from "./pages/Admin.tsx";
import Login from "./pages/Login.tsx";
import Error404 from "./pages/Error404Page.tsx";
import Verification from "./pages/Verification.tsx";
import PasswordRecovery from "./pages/PasswordRecovery.tsx";
import ProductInfo from "./pages/ProductInfo.tsx";
import PrivacyTerms from "./pages/PrivacyTerms.tsx";
import Contact from "./pages/Contact.tsx";

const router = createBrowserRouter(
  //@ts-ignore
  createRoutesFromElements<RouteObject>(
    <Route path="/" element={<App />} errorElement={<ErrorBoundary />}>
      <Route index element={<Home />} />
      <Route path="/:cutie" element={<Cutie />} />
      <Route path="/:category/:slug" element={<Collection />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Error404 />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/passwordrecovery" element={<PasswordRecovery />} />
      <Route path="/product/:slug" element={<ProductInfo />} />
      <Route path="/privacyterms" element={<PrivacyTerms />} />
      <Route path="/contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
