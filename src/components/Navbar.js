import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>React-router-dom</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/docs" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Docs</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;