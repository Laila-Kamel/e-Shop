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
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/electronics" element={<Electronics />} />
            <Route
              path="/jewelery"
              element={<Jewelery category={"jewelery"} />}
            />
            <Route path="/men" element={<Men />} />
            <Route path="/thankYou" element={<ThankYou />} />
            <Route path="/women" element={<Women />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/favouriteList" element={<FavouriteListPage />} />
            <Route path="/jewelery/:productId" element={<ProductPage />} />
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
        </NoOfItemsInCartProvider>
        </NoOfFaouritedItemsProvider>
      </ItemsInCartProvider>
    </PageWrapper>
  );
}

export default App;
