import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddProducts from "./AddProducts";
import Shop from "./Shop";
import { SWRConfig } from "swr";
import axios from "axios";

function App() {
  return (
    <BrowserRouter>
      <SWRConfig
        value={{ fetcher: (url) => axios.get(url).then((res) => res.data) }}
      >
        <Layout>
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/admin/add-product" element={<AddProducts />} />
          </Routes>
        </Layout>
      </SWRConfig>
    </BrowserRouter>
  );
}

export default App;
