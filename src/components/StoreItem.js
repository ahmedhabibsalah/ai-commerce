import { useRef } from "react";
import { useCart } from "../context/CartContext";
import formatCurrency from "../util/formatCurrency";

export default function StoreItem({ item }) {
  const { addToCart } = useCart();
  const quantityRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const quantity = parseInt(quantityRef.current.value);
    addToCart(item.id, quantity);
  }

  return (
    <>
      <div
        className="shadow-lg flex flex-col items-start gap-2 rounded-br-2xl"
        style={{ width: "280px", height: "400px", background: "#000C15" }}
      >
        <div style={{ flex: "0.5" }}>
          <img
            alt="e-commerce"
            style={{ width: "280px", height: "200px" }}
            src={item.thumbnail}
          />
        </div>
        <div
          className="flex flex-col items-start gap-2 p-2 "
          style={{ flex: "0.2" }}
        >
          <div>
            <h3
              className="text-base font-bold uppercase "
              style={{ color: "#ffecd1" }}
            >
              {item.name}
            </h3>
            <p className="text-base" style={{ color: "#8d99ae" }}>
              {item.brand}
            </p>
            <p className="text-base" style={{ color: "#ffecd1" }}>
              {formatCurrency(item.price)}
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-start gap-2 relative mt-2"
            style={{ flex: "0.3" }}
          >
            <input
              type="number"
              defaultValue="1"
              ref={quantityRef}
              min="1"
              max="99"
              step="1"
              required
              className="w-10 text-center px-1  rounded-lg "
              style={{ background: "#28282d", color: "#f0f0f0" }}
            />
            <button type="submit" className="button">
              Add To Cart
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
