import Navbar from './components/Navbar';
import Home from './components/Home';
import Docs from './components/Docs';
import { useState } from 'react';

function App() {
  const [docsOpen, setDocsOpen] = useState(true)

  return (
    <div className="App">
      <Navbar openDocs={() => setDocsOpen(!docsOpen)}/>
      <div className="content">
        {docsOpen ? <Home /> : <Docs />}
      </div>
    </div>
  );
}

export default App;
