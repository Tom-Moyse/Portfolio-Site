import { useState } from 'react';
import './css/main.css';
import Navbar from './components/Navbar';

function App() {
  // Where true is dark theme and false is light them
  const [viewModeDark, setViewMode] = useState(true)

  return (
    <header className="startView">
      <Navbar dark={ viewModeDark } setDark={ setViewMode }/>
    </header>
  );
}

export default App;
