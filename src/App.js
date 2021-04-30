
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Toolbar from './components/toolbar';


function App() {
  return (
    <div>
     
      <Switch>
     <Route path='/' component={Toolbar} />
      
      </Switch>
      
    </div>
  );
}

export default App;
