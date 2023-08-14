import { FormEvent, useState } from "react";
import { Layer } from "../model/Layer";

interface LayerFormProps {
  updateLayer(layer: Layer): void;
  cancelClick(): void;
}

function LayerForm({ updateLayer, cancelClick }: LayerFormProps) {
  const [height, setHeight] = useState(5);
  const [width, setWidth] = useState(8);
  const [color, setColor] = useState("white");

  function addLayer(event: FormEvent) {
    event.preventDefault();

    const layer: Layer = {
      height,
      width,
      color,
    };

    setHeight(5);
    setWidth(8);
    setColor("white");

    updateLayer(layer);
  }
  return (
    <form onSubmit={addLayer}>
      <label htmlFor="height">Height {height}</label>
      <input
        type="range"
        id="height"
        min="0.5"
        max="10"
        value={height}
        onChange={(e) => setHeight(parseInt(e.target.value))}
      ></input>
      <label htmlFor="width">Width {width}</label>
      <input
        type="range"
        id="width"
        min="1"
        max="10"
        value={width}
        onChange={(e) => setWidth(parseInt(e.target.value))}
      ></input>
      <label htmlFor="color">Color</label>
      <select
        name="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      >
        <option value="#EF7C8E">Strawberry</option>
        <option value="#3F000F">Chocolate</option>
        <option value="#FAE8E0">Vanilla</option>
      </select>
      <button type="submit">Save</button>
      <button onClick={cancelClick}>Cancel</button>
      {/* layeradd just hides the form when clicked */}
    </form>
  );
}

export default LayerForm;
