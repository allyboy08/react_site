import { Switch, Route} from 'react-router-dom';


import Nav from './components/UI/Nav';
import Planets from './pages/Planets';
import People from './pages/People';
import Specs from './pages/Species';
import Home from './pages/Home';
import PeopleDetail from './pages/Person'
import PlanetDetail from './pages/Planet';
import SpecsDetail from './pages/Specie';

function App() {

  return (
    <div>
    <Nav />
      <main>
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path="/characters" component={People} exact/>
          <Route path="/planets" component={Planets} exact/>
          <Route path="/species" component={Specs} exact/>
          <Route path="/character/:id" component={PeopleDetail} />
          <Route path="/planet/:id" component={PlanetDetail} />
          <Route path="/specie/:id" component={SpecsDetail} />
        </ Switch>
      </main>
    </div>
  );
}

export default App;