import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import AddProducts from "./AddProducts";
import Modal, { ModalOverlay } from "./components/UI/Modal";
import { useAppSelector } from "./store/hooks";
import Spinner from "./components/UI/LoadingSpinner";

function App() {
  const { loading } = useAppSelector(
    (state) => state.addProductReducer.addProducts
  );

  return (
    <BrowserRouter>
      {loading && (
        <Modal>
          <ModalOverlay>
            <h2 className="text-bold my-4">Sending Data. Please Wait...</h2>
            <Spinner />
          </ModalOverlay>
        </Modal>
      )}
      <Layout>
        <Routes>
          <Route path="/admin/add-product" element={<AddProducts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
