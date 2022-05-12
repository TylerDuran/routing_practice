import './App.css';
import Home from './components/Home';
import WordorNum from './components/WordorNum';
import WordColor from './components/WordColor';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/:wordOrNumId" element={<WordorNum/>}/>
        <Route path="/:word/:fontColor/:bColor" element={<WordColor/>}/>
      </Routes>
    </div>
  );
}

export default App;
