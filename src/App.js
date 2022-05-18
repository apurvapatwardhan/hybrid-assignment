import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import {Home} from './components/Home/Home';
import Detail from "./components/Detail/Detail.jsx"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/detail' element= {<Detail />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
