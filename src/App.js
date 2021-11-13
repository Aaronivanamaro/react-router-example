import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Docs from './components/Docs';
import VersionDetails from './components/VersionDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />}/> 
            <Route path="/versions/:id" element={<VersionDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
