import { useState } from "react";
import "./../styles/CakeBuilder.css";
import LayerForm from "./LayerForm";
import { Layer } from "../model/Layer";
import "./../styles/LayerAdd.css";

interface LayerAddProps {
  updateLayer(layer: Layer): void;
}

function LayerAdd({ updateLayer }: LayerAddProps) {
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
      {isVisible ? (
        <LayerForm updateLayer={updateLayer} cancelClick={cancelClick} />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default LayerAdd;
