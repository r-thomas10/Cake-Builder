import { Layer } from "../model/Layer";
import CakeLayer from "./CakeLayer";

interface LayerBuilderProps { layer: Layer }

function LayerBuilder({layer}: LayerBuilderProps) {

    return (
      <div>
        <h3 className="info">{layer.height}</h3>
        <h3 className="info">{layer.width}</h3>
        <h3 className="info">{layer.color}</h3>
        <button>Delete</button>
      </div>
    );
}

export default LayerBuilder;

