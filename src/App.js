import { HashRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './page/HomePage';

function App() {
  return (
  <HashRouter>
    <Routes>
      <Route  exact path='/' element={<HomePage/>}/>
    </Routes>
  </HashRouter>
  );
}

export default App;
