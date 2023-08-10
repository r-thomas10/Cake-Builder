import { useState } from "react";
import "./../styles/CakeBuilder.css";
import LayerForm from "./LayerForm";

function LayerAdd() {
  const [isVisible, setIsVisible] = useState(false);
  function handleClick() {
    setIsVisible(true);
  }

  function cancelClick() {
    setIsVisible(false);
  }
  return (
    <div>
      <button onClick={handleClick}>Layer Add</button>
      {isVisible ? <LayerForm /> : <div></div>}
      <button onClick={cancelClick}>Cancel</button>
    </div>
  );
}

export default LayerAdd;
