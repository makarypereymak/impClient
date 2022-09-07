import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import { PUBLIC_ROUTES } from "./routes";

const AppRouter = () => {
  return (
    <Layout>
      <main>
        <Routes>
          {PUBLIC_ROUTES.map((route) => {
            if (route.lowerLavelLinks) {
              route.lowerLavelLinks.map((lowerRoute) => {
                return (
                  <Route
                    path={route.path + "#" + lowerRoute.idName}
                    exact={route.exact}
                    element={route.element}
                    key={lowerRoute.id}
                  />
                );
              });
            }
            return (
              <Route
                path={route.path}
                exact={route.exact}
                element={route.element}
                key={route.path}
              />
            );
          })}
        </Routes>
      </main>
    </Layout>
  );
};

export default AppRouter;
