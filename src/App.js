import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
