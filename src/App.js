import logo from './logo.svg';
import './App.css';
import NasInfo from './components/NasInfo';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="heading-lucas">Lucas Larsson</h1>
        <p>
          Under utveckling.
        </p>
          <a className="App-link" href="mailto:lucas.e.larsson@telia.com"> 
            Kontakt
          </a>
         <NasInfo/>
      </header>
    </div>
  );
}

export default App;

