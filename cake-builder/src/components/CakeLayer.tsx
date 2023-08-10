import { Layer } from "../model/Layer";

interface CakeLayerProps {
    layer: Layer
}

function CakeLayer({layer}: CakeLayerProps) {
    
    return <div className="CakeLayer" style={{ backgroundColor: layer.color, height: layer.height * 50, width: layer.width * 40}}></div>;
}

export default CakeLayer;