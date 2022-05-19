import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddProducts from "./pages/AddProducts";
import Shop from "./pages/Shop";
import SingleProduct from "./pages/SingleProduct";
import Auth from "./pages/Auth";
import { SWRConfig } from "swr";
import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <SWRConfig
        value={{
          fetcher: (url) =>
            axios.get(url, { withCredentials: true }).then((res) => res.data),
        }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/admin/add-product" element={<AddProducts />} />
            <Route path="/product/:id" element={<SingleProduct />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Layout>
      </SWRConfig>
    </BrowserRouter>
  );
}

export default App;
