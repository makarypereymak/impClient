import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { PUBLIC_ROUTES, PRIVATE_ROUTES } from "./routes";
import state from "../store/store";
import { observer } from "mobx-react-lite";
import NavBarHight from "../components/navBarHight/NavBarHight";

const AppRouter = () => {
  return (
    <>
      {state.role === "user" ? (
        <Layout>
          <Routes>
            {PUBLIC_ROUTES.map((route) => (
              <Route
                path={route.path}
                exact={route.exact}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </Layout>
      ) : null}
      {state.role === "admin" ? (
        <>
          <NavBarHight links={PRIVATE_ROUTES.ADMIN} />
          <Routes>
            {PRIVATE_ROUTES.ADMIN.map((route) => (
              <Route
                path={route.path}
                exact={route.exact}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </>
      ) : null}
      {state.role === "owner" ? (
        <>
          <NavBarHight
            links={PRIVATE_ROUTES.ADMIN.concat(PRIVATE_ROUTES.OWNER)}
          />
          <Routes>
            {PRIVATE_ROUTES.ADMIN.concat(PRIVATE_ROUTES.OWNER).map((route) => (
              <Route
                path={route.path}
                exact={route.exact}
                element={route.element}
                key={route.path}
              />
            ))}
          </Routes>
        </>
      ) : null}
    </>
  );
};

export default observer(AppRouter);
