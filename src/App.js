import { Routes, Route, Link } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import Library from "./components/Library";
import Inheritance from "./components/Inheritance";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Navigation */}
      <div className="flex gap-3 justify-center mb-6">
        <Link
          to="/products"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Products
        </Link>

        <Link
          to="/library"
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Library
        </Link>

        <Link
          to="/inheritance"
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          Inheritance
        </Link>
      </div>

      {/* Routes */}
      <Routes>
        <Route
          path="/products"
          element={
            <div className="flex justify-center gap-6 flex-wrap">
              <ProductCard title="Mechanical Keyboard" price={4500} inStock />
              <ProductCard title="Smart Watch" price={7000} inStock={false} />
            </div>
          }
        />

        <Route path="/library" element={<Library />} />
        <Route path="/inheritance" element={<Inheritance />} />

        {/* Default route */}
        <Route
          path="/"
          element={
            <h1 className="text-center text-xl font-semibold mt-10">
              Select an experiment from above 👆
            </h1>
          }
        />
      </Routes>
    </div>
  );
}
