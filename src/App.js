import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Template } from './components/mainComponents';
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Routers from './Routers';


function App() {

  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routers />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}

export default App;
