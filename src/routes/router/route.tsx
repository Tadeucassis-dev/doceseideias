import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contatos from "../../pages/contatos";
import Festas from "../../pages/festas";
import Home from "../../pages/home";
import Servicos from "../../pages/servicos";
import Temas from "../../pages/temas";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/festas" element={<Festas />} />
        <Route path="/temas" element={<Temas />} />
        <Route path="/contatos" element={<Contatos />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;