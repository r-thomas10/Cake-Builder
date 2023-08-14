import { useState } from "react";
import "./App.css";
import Cake from "./components/Cake";
import CakeBuilder from "./components/CakeBuilder";
import Header from "./components/Header";
import LayerAdd from "./components/LayerAdd";
import { Layer } from "./model/Layer";

function App() {
  const [layers, setLayers] = useState<Layer[]>([
    {
      height: 2,
      width: 4,
      color: "#FAE8E0",
    },
    {
      height: 4,
      width: 8,
      color: "#FAE8E0",
    },
    {
      height: 6,
      width: 10,
      color: "#EF7C8E",
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
    <div className="App">
      <Header></Header>

      <div className="body">
        <div className="CakeBuilder">
          <LayerAdd updateLayer={updateLayers}></LayerAdd>
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
        <div className="cake">
          <h2>Cake Preview</h2>
          {layers.map((layer, index) => (
            <Cake layer={layer}></Cake>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
