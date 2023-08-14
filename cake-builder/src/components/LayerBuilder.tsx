import { Layer } from "../model/Layer";
import CakeLayer from "./CakeLayer";
import "./../styles/LayerBuilder.css";

interface LayerBuilderProps {
  layer: Layer;
  remove(): void;
}

function LayerBuilder({ layer, remove }: LayerBuilderProps) {
  // let flavor = () => {
  //   if (layer.color === "white") {
  //     flavor = "strawberry";
  //   } else if (layer.color === "brown") {
  //     flavor = "chocolate";
  //   } else if (layer.color === "pink") {
  //     flavor = "strawberry";
  //   }
  // };

  return (
    <div className="LayerBuilder">
      <div className="Flavor">
        <h3 className="info">Flavor:</h3>
        <h3 className="flavorBox" style={{ backgroundColor: layer.color }}></h3>
        <div className="buttonBox">
          <button onClick={remove}>Delete</button>
        </div>{" "}
      </div>
      <div className="info">
        <h3>Height: {layer.height}</h3>
        <h3>Width: {layer.width}</h3>
      </div>
    </div>
  );
}

export default LayerBuilder;
