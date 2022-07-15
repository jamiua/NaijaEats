import './App.css';
import HomePage from './pages/HomePage/HomePage';
import Header from '../src/components/Header/Header';
import Taste from './components/Taste/Taste';
import "../src/partials/global.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Taste/>
    </div>
  );
}

export default App;
