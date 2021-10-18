import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Footer from './pages/shared/Footer/Footer';
import Header from './pages/shared/Header/Header';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header></Header>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
