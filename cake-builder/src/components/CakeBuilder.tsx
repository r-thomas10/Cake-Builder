import { useState } from "react";
import "./../styles/CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";
import { Layer } from "../model/Layer";

interface CakeBuilderProps {
  layer: Layer;
}

function CakeBuilder({ layer }: CakeBuilderProps) {
  return (
    <div>
      <LayerAdd></LayerAdd>
      {layer.map((layer: Layer, index: any) => (
        <LayerBuilder layer={layer}></LayerBuilder>
      ))}
    </div>
  );
}

export default CakeBuilder;
