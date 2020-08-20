import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const withSuspense = (Fallback: React.FC) => (Component: React.FC) => (
  props: any
) => (
  <Suspense fallback={<Fallback />}>
    <Component {...props} />
  </Suspense>
);

const Fallback = () => <h1>Carregando</h1>;

const HomePage = withSuspense(Fallback)(lazy(() => import("./pages/HomePage")));

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/outro" element={<h1>outro</h1>} />
    </Routes>
  );
}
