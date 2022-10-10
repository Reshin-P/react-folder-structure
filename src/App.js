import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
        <Layout>
      <Routes>
          <Route path="/login" element={<Login />} />
          <Route  path="/" element={<Home />} />
      </Routes>
        </Layout>
    </BrowserRouter>
  );
}

export default App;
