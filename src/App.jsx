import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginPage from "./pages/LoginPage";
import IndexPage from "./pages/IndexPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/index" element={<IndexPage />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
