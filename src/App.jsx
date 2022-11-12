import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PlaceToStay from "./pages/PlaceToStay";

function App() {
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/place-to-stay" element={<PlaceToStay />} />
      </Routes>
    </Layout>
  );
}

export default App;
