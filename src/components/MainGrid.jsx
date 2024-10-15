import { useRef, useState } from "react";

const MainGrid = (props) => {
  const [buyingLeft, setBuyingLeft] = useState(props.stock);
  const [SelectedValue, setSelectedValue] = useState(0);
  return (
    <div className="cardContainer min-h-[26.25rem] drop-shadow-2xl border-2 border-blue-500 md:bg-blue-500 ">
      <div>
        <img src={`/public/images/${props.imageUrl}`} alt="" />
      </div>
      <h3 className="">{props.title}</h3>
      <p className="">{props.price}</p>
      <p>{buyingLeft <= 0 ? "Out of stock" : buyingLeft + " Left!"}</p>
      {}
      {buyingLeft <= 0 ? (
        ""
      ) : (
        <>
          <select
            name=""
            id=""
            className="border-solid border-2 border-sky-500  hover:border-dotted"
            defaultValue={"Select qty"}
            onChange={(event) => {
              setSelectedValue(event.target.value);
            }}
          >
            <option selected value="1">
              Select QTY
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <button
            className="bg-cyan-500 hover:bg-cyan-600 rounded-md m-2 w-10 "
            onClick={() => {
              setBuyingLeft((prev) => {
                return prev - SelectedValue;
              });
            }}
          >
            Buy
          </button>
        </>
      )}
    </div>
  );
};

export default MainGrid;
