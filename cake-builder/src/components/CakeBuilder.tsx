import { useState } from "react";
import "./../styles/CakeBuilder.css";
import LayerAdd from "./LayerAdd";
import LayerBuilder from "./LayerBuilder";
import { Layer } from "../model/Layer";

interface CakeBuilderProps {
  layer: Layer;
  remove(): void;
  updateLayers(layer: Layer): void;
}

function CakeBuilder({ layer, remove, updateLayers }: CakeBuilderProps) {
  return (
    <div>
      <LayerAdd updateLayer={updateLayers}></LayerAdd>
      <LayerBuilder layer={layer} remove={remove}></LayerBuilder>
    </div>
  );
}

export default CakeBuilder;
