import { Layer } from "../model/Layer";
import "./../styles/Cake.css";
import { useState } from "react";
import CakeLayer from "./CakeLayer";
import LayerBuilder from "./LayerBuilder";
import CakeBuilder from "./CakeBuilder";

interface CakeProps {
  layer: Layer;
}

function Cake({ layer }: CakeProps) {
  return (
    <div className="Cake">
      {/* {layer.map((layer: Layer, index: any) => (
          <CakeLayer layer={layer}></CakeLayer>
        ))} */}
      <CakeLayer layer={layer}></CakeLayer>
    </div>
  );
}

export default Cake;
