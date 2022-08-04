import "./Global.css";
import PageWrapper from "./containers/PageWrapper";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Electronics from "./components/Electronics/Electronics";
import Jewelery from "./components/Jewelery/Jewelery";
import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import ProductPage from "./containers/ProductPage";

function App() {
  return (
    <PageWrapper>
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<h1>Home</h1>}/>
          <Route path="/electronics" element={<Electronics/>}/>
          <Route path="/jewelery" element={<Jewelery category={"jewelery"}/>} />
          <Route path="/men" element={<Men/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/jewelery/:productId" element={<ProductPage/>}/>
        </Routes>
        {/* <Footer/> */}
      </BrowserRouter>
    </PageWrapper>
  );
}

export default App;
