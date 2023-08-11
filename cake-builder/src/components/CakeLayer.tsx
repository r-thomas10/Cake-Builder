import { Layer } from "../model/Layer";
import "./../styles/CakeLayer.css";

interface CakeLayerProps {
  layer: Layer;
}

function CakeLayer({ layer }: CakeLayerProps) {
  return (
    <div
      className="CakeLayer"
      style={{
        backgroundColor: layer.color,
        height: layer.height * 30,
        width: layer.width * 30,
      }}
    ></div>
  );
}

export default CakeLayer;
