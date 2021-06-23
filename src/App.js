import logo from './logo.svg';
import './App.css';

function App() {
  let x = {name:"default"};
  fetch("api/nas/storage/",{mode:'no-cors',method:'GET'}).then(response=>response.json()).then(data=>x=data)
  return (
    <div className="App">
      <header className="App-header">
        <h1 class="heading-lucas">Lucas Larsson</h1>
        <p>
          Under utveckling.
        </p>
          <a class="App-link" href="mailto:lucas.e.larsson@telia.com"> 
            Kontakt
          </a>
          <div className="nas-container">
            <p>Status: <span>Online</span></p>
            <p>Pool0: {x.name} <span>Online</span>. Healthy: <span>True</span></p>
            <p>Disk space left: <span>1.5TB</span></p>
          </div>
      </header>
    </div>
  );
}

export default App;
