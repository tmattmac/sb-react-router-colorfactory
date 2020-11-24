import logo from './logo.svg';
import './App.css';
import 'react-router'
import { BrowserRouter } from 'react-router-dom';
import ColorFactory from './ColorFactory';

function App() {
  return (
    <BrowserRouter>
      <ColorFactory />
    </BrowserRouter>
  );
}

export default App;
