import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddProducts from "./AddProducts";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/admin/add-product" element={<AddProducts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
