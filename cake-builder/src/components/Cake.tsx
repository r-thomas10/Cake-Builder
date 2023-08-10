import { Layer } from '../model/Layer'
import './../styles/Cake.css'
import { useState } from 'react'
import CakeLayer from './CakeLayer';
import LayerBuilder from './LayerBuilder';
import CakeBuilder from './CakeBuilder';

function Cake() {
    

    function removeLayerByIndex(index: number) {
      const removeLayer = layer.splice(0);
      removeLayer.splice(index, 1);
      //updating state by updating with new changed array
      setLayer(removeLayer);
    }

    return (
      <div className="Cake">
        {/* {layer.map((layer: Layer, index: any) => (
          <CakeLayer layer={layer}></CakeLayer>
        ))} */}
        <CakeLayer></CakeLayer>
      </div>
    );
}

export default Cake;
