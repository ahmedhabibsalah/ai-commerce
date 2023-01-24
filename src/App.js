import storeItems from "./items.json";
import Store from "./components/Store";
import Header from "./components/Header";
import Hero from "./components/Hero";

import useAlan from "./hooks/useAlan";

function App() {
  useAlan();
  return (
    <div className="" style={{ background: "#ffecd1" }}>
      <Header />
      <Hero />
      <Store items={storeItems} />
    </div>
  );
}

export default App;
