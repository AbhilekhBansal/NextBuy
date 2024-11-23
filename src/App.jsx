import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/loader";
import Header from "./components/header";
import Footer from "./components/footer";
import AdminLogin from "./admin/pages/AdminLogin";

const Home = lazy(() => import("./pages/home"));
const Search = lazy(() => import("./pages/search"));
const Cart = lazy(() => import("./pages/cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));
const LogIn = lazy(() => import("./pages/loginSignup"));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/*"
            element={
              <>
                <Header />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/search" element={<Search />} />
                  <Route path="/cart" element={<Cart />} />
                  <Route path="/product/*" element={<ProductDetails />} />
                  <Route path="/login" element={<LogIn />} />
                </Routes>
                <Footer />
              </>
            }
          />
          {/* Admin Routes */}
          <Route path="/admin/*" element={<AdminLogin />} />
          <Route path="/admin/login" element={<AdminLogin />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
