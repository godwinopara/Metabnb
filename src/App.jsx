import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import LoadingIcon from "./assets/puff.svg";
// import Spinner from "./components/Spinner";

const Home = lazy(() => import("./pages/Home"));
const PlaceToStay = lazy(() => import("./pages/PlaceToStay"));

const Loading = () => {
  return (
    <div className="grid place-items-center bg-black text-white h-screen">
      <img src={LoadingIcon} alt="" className="w-[10%]" />
    </div>
  );
};

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/place-to-stay" element={<PlaceToStay />} />
        </Routes>
      </Layout>
    </Suspense>
  );
}

export default App;
