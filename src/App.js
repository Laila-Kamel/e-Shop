import "./Global.css";
import PageWrapper from "./containers/PageWrapper";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Electronics from "./components/Electronics/Electronics";
import Jewelery from "./components/Jewelery/Jewelery";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import ProductPage from "./containers/ProductPage";
import ItemsInCartProvider from "./Context/Context";
import CartPage from "./containers/CartPage";
import NoOfItemsInCartProvider from "./Context/NoOfItemsPRovider";

function App() {
  return (
    <PageWrapper>
      <ItemsInCartProvider>
      <NoOfItemsInCartProvider>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/electronics" element={<Electronics />} />
            <Route
              path="/jewelery"
              element={<Jewelery category={"jewelery"} />}
            />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/jewelery/:productId" element={<ProductPage />} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
        </NoOfItemsInCartProvider>
      </ItemsInCartProvider>
    </PageWrapper>
  );
}

export default App;
