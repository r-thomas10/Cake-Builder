import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import LayerAdd from "./components/LayerAdd";
import { Layer } from "./model/Layer";

function App() {
  const [layers, setLayers] = useState<Layer[]>([
    {
      height: 2,
      width: 4,
      color: "white",
    },
    {
      height: 4,
      width: 8,
      color: "white",
    },
    {
      height: 6,
      width: 10,
      color: "white",
    },
  ]);

  function removeLayerByIndex(index: number) {
    const removeLayer = layers.splice(0);
    removeLayer.splice(index, 1);
    //updating state by updating with new changed array
    setLayers(removeLayer);
  }

  function updateLayers(layer: Layer) {
    // Copy
    const tempLayers = layers.slice(0);

    // Change
    tempLayers.push(layer);

    // Replace
    setLayers(tempLayers);
  }

  return (
    <div>
      {layers.map((layer, index) => (
        <Cake layer={layer}></Cake>
      ))}
      {layers.map((layer, index) => (
        <CakeBuilder
          layer={layer}
          updateLayers={updateLayers}
          remove={() => {
            removeLayerByIndex(index);
          }}
        ></CakeBuilder>
      ))}
    </div>
  );
}

export default App;
