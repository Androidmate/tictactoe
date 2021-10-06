import { useEffect, useState } from 'react';
import './App.css';



const App = () => {

  const [grid, setGrid] = useState([]);

  useEffect(() => {
    
    const newGrid = []
    for (let i=0; i<9; i++) {
      newGrid.push('');
    }

    setGrid(newGrid);
  }, [])

  

  return (
    <div className="App">
      {
        grid.map(ch => <div className='box'>{ch}</div>)
      }
    </div>
  );
}

export default App;
