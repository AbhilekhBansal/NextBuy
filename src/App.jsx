import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
import Header from "./components/header";
import Footer from "./components/footer";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const LogIn = lazy(() => import("./pages/loginSignup"));

const App = () => {
  return (
    <Router>
      {/* Header  */}
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/*" element={<ProductDetails />} />

          <Route path="/login" element={<LogIn />} />
        </Routes>
      </Suspense>
      {/* Footer  */}
      <Footer />
    </Router>
  );
};

export default App;
