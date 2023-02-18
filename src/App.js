import { useState, useEffect } from 'react';
import './App.css';
import CursorPointer from './Cursor';

function App() {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    const handleMouseMovement = (e) => {
      setX(e.clientX)
      setY(e.clientY)
    }
    document.addEventListener('mousemove', handleMouseMovement);
    return () => {
      document.removeEventListener('mousemove', handleMouseMovement);
    }
  }, [x, y])



  return (
    <div className="App">
      <ul>
        <li>Home</li>
        <li>Projects</li>
        <li>Work</li>
        <li>About</li>
      </ul>

      <CursorPointer
        x={x}
        y={y}
      />
    </div>
  );
}

export default App;
