import "./Global.css";
import PageWrapper from "./containers/PageWrapper";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jewelery from "./components/Jewelery/Jewelery";
import ProductPage from "./containers/ProductPage";
import ItemsInCartProvider from "./Context/Context";
import CartPage from "./containers/CartPage";
import Footer from "./components/Footer/Footer";
import ThankYou from "./containers/ThankYou/ThankYou";
import FavouriteListPage from './containers/FavouriteListPage'
import NoOfItemsInCartProvider from "./Context/NoOfItemsPRovider";
import NoOfFaouritedItemsProvider from "./Context/NoOfFaouritedItemsProvider";

function App() {
  return (
    <PageWrapper>
      <ItemsInCartProvider>
      <NoOfFaouritedItemsProvider>
      <NoOfItemsInCartProvider>
        <BrowserRouter>
          <Nav />
          {/* <Jewelery/> */}
          <Routes>
          <Route path="/" element={<Jewelery/>} />
            <Route path="/thankYou" element={<ThankYou />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favouriteList" element={<FavouriteListPage />} />
            <Route path="/:productId" element={<ProductPage />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
        </NoOfItemsInCartProvider>
        </NoOfFaouritedItemsProvider>
      </ItemsInCartProvider>
    </PageWrapper>
  );
}

export default App;
