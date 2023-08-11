import { Layer } from "../model/Layer";
import CakeLayer from "./CakeLayer";
import "./../styles/LayerBuilder.css";

interface LayerBuilderProps {
  layer: Layer;
  remove(): void;
}

function LayerBuilder({ layer, remove }: LayerBuilderProps) {
  return (
    <div>
      <h3 className="info">Height: {layer.height}</h3>
      <h3 className="info">Width: {layer.width}</h3>
      <h3 className="info">Color:{layer.color}</h3>
      <button onClick={remove}>Delete</button>
    </div>
  );
}

export default LayerBuilder;
