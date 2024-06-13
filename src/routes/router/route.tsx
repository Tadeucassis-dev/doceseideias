import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../../pages/home";
import Cestas from "../../pages/cestas";
import Doces from "../../pages/doces";
import Temas from "../../pages/temas";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/temas" element={<Temas />} />
        <Route path="/cestas" element={<Cestas />} />
        <Route path="/doces" element={<Doces />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;