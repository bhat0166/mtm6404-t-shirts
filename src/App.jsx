// import "./App.css";
import MainGrid from "./components/MainGrid";
import tshirts from "../t-shirts";
function App() {
  return (
    <>
      <h1 className="text-3xl">Shopping Cart!</h1>
      <div className="grid grid-flow-row-dense grid-cols-3 gap-9 p-5 text-center">
        {tshirts.map((item, index) => {
          return (
            <MainGrid
              key={index}
              title={item.title}
              price={item.price}
              stock={item.stock}
              imageUrl={item.image}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
