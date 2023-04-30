import './App.css';
import ApiPsetsTableImpl from './components/ApiPsetsTableImpl';
import DbPsetsTableImpl from './components/DbPsetsTableImpl';
import NavBar from './components/NavBar';
import { Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Routes>
      <Route path="/" element={<DbPsetsTableImpl/>}/>
      <Route path="/api-psets" element={ <ApiPsetsTableImpl/>}/>
    </Routes>
    </div>
  );
}

export default App;
