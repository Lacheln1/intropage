import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EtcPage from "./pages/EtcPage";
import ProfilePage from "./pages/ProfilePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProfilePage />} />
        <Route path="/etc" element={<EtcPage />} />
      </Routes>
    </Router>
  );
}

export default App;
