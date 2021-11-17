import { Suspense, lazy } from "react";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Loader from "react-loader-spinner";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotForund";

const TrendingPage = lazy(() =>
  import("./Pages/TrendingPage" /* webpackChunkName: "trending-page" */)
);
const UserPage = lazy(() =>
  import("./Pages/UserPage" /* webpackChunkName: "user-page" */)
);

function App() {
  return (
    <Suspense
      fallback={
        <Loader
          className="loader"
          type="Circles"
          color="#00BFFF"
          height={200}
          width={200}
        />
      }
    >
      <Header />

      <Routes>
        <Route exact path="/" element={<TrendingPage />} />
        <Route exact path="/user/:name" element={<UserPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
