import { useCart } from "../context/CartContext";
import { TfiShoppingCart } from "react-icons/tfi";
import CartItem from "./CartItem";
import classnames from "classnames";
import formatCurrency from "../util/formatCurrency";

export default function Header() {
  const { cart, showCartItems, setShowCartItems, showCart, checkout } =
    useCart();
  const total = cart.reduce((sum, entry) => {
    return sum + entry.item.price * entry.quantity;
  }, 0);
  return (
    <>
      <section
        className={classnames({ invisible: !showCart })}
        style={{ zIndex: 1 }}
      >
        <div
          className={classnames(
            "mb-4",
            "top-0",
            "right-0",
            "mr-4",
            "mt-20",
            "absolute",
            "z-10",
            { invisible: !showCartItems }
          )}
        >
          <div
            style={{
              maxHeight: "calc(100vh - 6rem)",
              background: "#ffecd1",
              color: "#001524",
            }}
            className=" body-font shadow-lg border rounded-lg flex flex-col"
          >
            <div className="overflow-y-auto px-4 pt-4">
              {cart.map((entry) => (
                <CartItem key={entry.itemId} entry={entry} />
              ))}
            </div>
            <div className="flex justify-between items-end border-t border-b py-2 px-4">
              <span className="font-bold text-lg uppercase">Total</span>
              <span className="font-bold">{formatCurrency(total)}</span>
            </div>
            <button
              onClick={checkout}
              className="text-white py-2 px-4 text-lg  rounded hover:bg-gray-900 m-4"
              style={{ background: "#001524" }}
            >
              Check out
            </button>
          </div>
        </div>
      </section>
      <div
        className="w-full flex items-center justify-between p-6 shadow-lg"
        style={{ background: "#ffecd1" }}
      >
        <div
          className=" text-2xl font-bold flex items-center gap-1"
          style={{ color: "#001524" }}
        >
          <h3 className="">EasyShopping</h3>
          <TfiShoppingCart fontSize="2rem" />
        </div>
        <div
          className=" text-2xl font-bold  cursor-pointer relative"
          style={{ color: "#001524", transform: "scale(-1,1)" }}
          onClick={() => setShowCartItems((prev) => !prev)}
        >
          <TfiShoppingCart />
          <span
            style={{
              background: "#001524",
              top: "-8px",
              left: "-6px",
              width: "15px",
              height: "15px",
              borderRadius: "50%",
              color: "#ffecd1",
              transform: "scale(-1,1)",
              paddingBottom: "0.5px",
            }}
            className=" absolute text-xs flex items-center justify-center "
          >
            {cart.length}
          </span>
        </div>
      </div>
    </>
  );
}
