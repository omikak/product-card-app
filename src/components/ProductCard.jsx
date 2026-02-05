export default function ProductCard({ title, price, inStock }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-64">
      <div className="h-32 bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
        <div className="w-16 h-16 bg-gray-300 rounded-md"></div>
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700 font-medium mt-1">₹ {price}</p>

      <span
        className={`inline-block mt-3 px-3 py-1 text-sm rounded-full font-medium
        ${inStock ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
      >
        {inStock ? "In Stock" : "Out of Stock"}
      </span>
    </div>
  );
}
