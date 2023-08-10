import { useState } from 'react';
import './App.css';
import Cake from './components/Cake';
import CakeBuilder from './components/CakeBuilder';
import { Layer } from './model/Layer';

function App() {
  const [layer, setLayer] = useState<Layer[]>([
      {
        height: 6,
        width: 10,
        color: "white",
      },
      {
        height: 4,
        width: 8,
        color: "white",
      },
      {
        height: 2,
        width: 4,
        color: "white",
      },
    ])
    
  return (
    <div>
      <Cake></Cake>
      <CakeBuilder></CakeBuilder>
    </div>
  );
}

export default App;
