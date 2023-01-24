import StoreItem from "./StoreItem";

export default function Store({ items }) {
  return (
    <div className="flex flex-wrap gap-6  items-center justify-center mt-6">
      {items.map((item) => (
        <StoreItem key={item.id} item={item} />
      ))}
    </div>
  );
}
