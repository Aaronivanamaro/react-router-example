
const Navbar = ({openDocs}) => {
  return (
    <nav className="navbar">
      <h1>React-router-dom</h1>
      <div className="links">
        <a href="/">Home</a>
        <a onClick={openDocs} 
          style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>Docs</a>
      </div>
    </nav>
  );
}
 
export default Navbar;