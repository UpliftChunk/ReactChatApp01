import SocketBody from './component/layout/SocketBody';
import Home from './component/Home/Home.js';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/chat' Component={SocketBody}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
