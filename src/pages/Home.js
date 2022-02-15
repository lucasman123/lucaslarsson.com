import NasInfo from '../components/NasInfo';
import NavCard from '../components/NavCard';
import SunInfo from '../components/SunInfo';
function Home()
{
    return (<header className="App-header">
        <h1 class="heading-lucas">Lucas Larsson</h1>
        <p>
          Under utveckling.
        </p>
          <a className="App-link" href="mailto:lucas.e.larsson@telia.com"> 
            Kontakt
          </a>
          
        <div className="card-container">
          <NavCard/>
          <SunInfo/>
        </div>
      </header>);
}

export default Home;